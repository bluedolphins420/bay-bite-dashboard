import { describe, expect, it } from 'vitest';
import * as faunaApi from './fauna-opportunity';
import * as legalApi from './legal-provenance';
import * as safetyApi from './safety-provenance';
import { ingestLiveStatusCache, telemetryFromBindings, type LiveTelemetry } from '../telemetry';

describe('production trust-boundary API', () => {
  it('does not export mutable reviewed manifests or generic trust mints', () => {
    expect(faunaApi).not.toHaveProperty('reviewedOccurrenceDerivativeRegistry');
    expect(faunaApi).not.toHaveProperty('reviewedHabitatDerivativeRegistry');
    expect(legalApi).not.toHaveProperty('trustedCurrentSpotLegalDecision');
    expect(safetyApi).not.toHaveProperty('trustedConditionSnapshot');
    expect(safetyApi).not.toHaveProperty('trustedFootingInspection');
    expect(safetyApi).not.toHaveProperty('issueReviewedScenarioSafety');
    expect(legalApi).not.toHaveProperty('issueReviewedScenarioLegalDecision');
  });

  it('exposes only reviewed cache validation paths, not caller-data signers', () => {
    expect(legalApi).toHaveProperty('produceCurrentSpotLegalDecision');
    expect(safetyApi).toHaveProperty('produceConditionSnapshotFromCache');
    expect(safetyApi).not.toHaveProperty('produceFootingInspection');
  });

  it('rejects forged bound station IDs even with favorable freshness', () => {
    const fabricated: LiveTelemetry = {
      status: 'live', stationName: 'caller', stationId: '9414275', buoyId: '46237',
      observedAt: '2026-08-13T17:30:00Z', windSpeedKt: '1 kt', waveHeightFt: '1 ft', waveLabel: 'caller', message: 'caller',
      observations: {
        level: { availability: 'unavailable', freshness: 'unavailable' },
        wind: { availability: 'available', freshness: 'live', stationId: '46026', ageMinutes: 1 },
        buoy: { availability: 'available', freshness: 'live', stationId: '46237', ageMinutes: 1 },
        wave: { availability: 'available', freshness: 'live', stationId: '46237', ageMinutes: 1 },
        temperature: { availability: 'unavailable', freshness: 'unavailable' },
      },
    };
    expect(safetyApi.conditionsAreTrusted(fabricated as never, 'spot:ocean-beach')).toBe(false);
  });

  it('never lets the generic bindings normalizer mint trusted conditions', () => {
    const observed = (stationId: string, fields: Record<string, unknown>) => ({ kind: 'observed' as const, stationId, stationName: stationId, observedAt: '2026-08-13T17:30:00Z', ageMinutes: 30, freshness: 'live' as const, lastKnownGood: false, ...fields });
    const telemetry = telemetryFromBindings({ generatedAt: '2026-08-13T18:00:00Z', sensors: {
      'sensor:46237': { products: { buoy: observed('46237', { waveHeightM: 0.3 }) } },
      'sensor:46026': { products: { wind: observed('46026', { speedMps: 0.5 }) } },
    } }, [
      { metric: 'wave', sensorId: 'sensor:46237', warning: 'Regional only', maxAgeMinutes: 120 },
      { metric: 'wind', sensorId: 'sensor:46026', warning: 'Regional only', maxAgeMinutes: 120 },
    ], 'Ocean Beach', new Date('2026-08-13T18:00:00Z'));
    expect(safetyApi.conditionsAreTrusted(telemetry as never, 'spot:ocean-beach')).toBe(false);
    expect(safetyApi.conditionsAreTrusted(structuredClone(telemetry) as never, 'spot:ocean-beach')).toBe(false);
  });

  it('rejects a directly constructed cache and a copied issued cache', () => {
    const direct = validRawCache();
    expect(safetyApi.produceConditionSnapshotFromCache(direct as never, 'spot:ocean-beach', new Date('2026-08-13T18:00:00Z'))).toBeUndefined();
    const issued = ingestLiveStatusCache(validRawCache());
    expect(issued).toBeDefined();
    expect(safetyApi.produceConditionSnapshotFromCache(structuredClone(issued) as never, 'spot:ocean-beach', new Date('2026-08-13T18:00:00Z'))).toBeUndefined();
  });

  it('accepts only the exact cache issued from unknown schema-valid JSON and rejects copied telemetry', () => {
    const raw: unknown = validRawCache();
    const issued = ingestLiveStatusCache(raw)!;
    const snapshot = safetyApi.produceConditionSnapshotFromCache(issued, 'spot:ocean-beach', new Date('2026-08-13T18:00:00Z'));
    expect(snapshot).toMatchObject({ wave: { state: 'manageable' }, wind: { state: 'light' } });
    expect(safetyApi.conditionsAreTrusted(snapshot, 'spot:ocean-beach')).toBe(true);
    expect(safetyApi.conditionsAreTrusted(structuredClone(snapshot) as never, 'spot:ocean-beach')).toBe(false);
  });

  it('canonicalizes an inherited product so later prototype mutation cannot change trusted conditions', () => {
    const raw = validRawCache();
    const inheritedBuoy = raw.sensors['sensor:46237'].products.buoy;
    const productsPrototype = { buoy: inheritedBuoy };
    raw.sensors['sensor:46237'].products = Object.create(productsPrototype) as typeof raw.sensors['sensor:46237']['products'];

    const issued = ingestLiveStatusCache(raw);
    const before = safetyApi.produceConditionSnapshotFromCache(issued, 'spot:ocean-beach', new Date('2026-08-13T18:00:00Z'));
    (inheritedBuoy as Record<string, unknown>).waveHeightM = 99;
    const after = safetyApi.produceConditionSnapshotFromCache(issued, 'spot:ocean-beach', new Date('2026-08-13T18:00:00Z'));

    expect(before?.wave?.state).toBe('unknown');
    expect(after?.wave?.state).toBe('unknown');
    expect(Object.getPrototypeOf(issued.sensors)).toBeNull();
    expect(Object.getPrototypeOf(issued.sensors['sensor:46237'].products)).toBeNull();
    expect(issued).not.toBe(raw);
  });

  it('rejects inherited required fields without treating prototypes as cache data', () => {
    const raw = validRawCache();
    const inherited = Object.create({ schemaVersion: raw.schemaVersion });
    for (const key of Object.keys(raw).filter((key) => key !== 'schemaVersion')) Object.defineProperty(inherited, key, { value: raw[key as keyof typeof raw], enumerable: true });
    expect(() => ingestLiveStatusCache(inherited)).toThrow(/required field schemaVersion/i);
  });

  it('rejects accessors without executing attacker getters', () => {
    const raw = validRawCache();
    let executions = 0;
    Object.defineProperty(raw.sensors['sensor:46237'].products.buoy, 'waveHeightM', { enumerable: true, get() { executions += 1; return 0.3; } });
    expect(() => ingestLiveStatusCache(raw)).toThrow(/accessor/i);
    expect(executions).toBe(0);
  });

  it('rejects symbols, pollution keys, sparse arrays, and custom array prototypes', () => {
    const symbolRaw = validRawCache();
    Object.defineProperty(symbolRaw.sensors, Symbol('attacker'), { value: 'hidden' });
    expect(() => ingestLiveStatusCache(symbolRaw)).toThrow(/symbol/i);

    const pollutionRaw = validRawCache();
    Object.defineProperty(pollutionRaw.sensors, '__proto__', { value: {}, enumerable: true });
    expect(() => ingestLiveStatusCache(pollutionRaw)).toThrow(/__proto__/i);

    const sparseRaw = validRawCache();
    sparseRaw.sources = new Array(2) as string[];
    sparseRaw.sources[1] = 'NOAA';
    expect(() => ingestLiveStatusCache(sparseRaw)).toThrow(/dense array/i);

    const customArrayRaw = validRawCache();
    Object.setPrototypeOf(customArrayRaw.sources, { attacker: true });
    expect(() => ingestLiveStatusCache(customArrayRaw)).toThrow(/array/i);
  });

  it('detaches nested observed-product prototypes from the issued graph', () => {
    const raw = validRawCache();
    const product = raw.sensors['sensor:46237'].products.buoy;
    const attackerPrototype = { attacker: 'before' };
    Object.setPrototypeOf(product, attackerPrototype);
    const issued = ingestLiveStatusCache(raw);
    const before = safetyApi.produceConditionSnapshotFromCache(issued, 'spot:ocean-beach', new Date('2026-08-13T18:00:00Z'));
    attackerPrototype.attacker = 'after';
    (product as Record<string, unknown>).waveHeightM = 99;
    const after = safetyApi.produceConditionSnapshotFromCache(issued, 'spot:ocean-beach', new Date('2026-08-13T18:00:00Z'));
    expect(Object.getPrototypeOf(issued.sensors['sensor:46237'].products.buoy!)).toBeNull();
    expect(before?.wave?.state).toBe('manageable');
    expect(after).toEqual(before);
  });

  it('keeps trusted policy output unchanged when public catalog bindings and sensors are attacked', async () => {
    const catalog = await import('./research-catalog');
    const issued = ingestLiveStatusCache(validRawCache());
    const before = safetyApi.produceConditionSnapshotFromCache(issued, 'spot:ocean-beach', new Date('2026-08-13T18:00:00Z'));
    const spot = catalog.researchSpots.find((item) => item.id === 'spot:ocean-beach')!;
    const wave = spot.sensorBindings.find((item) => item.metric === 'wave')!;
    const sensor = catalog.sensorDefinitions.find((item) => item.id === wave.sensorId)!;
    expect(() => { (wave as { sensorId?: string }).sensorId = 'sensor:46026'; }).toThrow();
    expect(() => { (sensor as { sourceId: string }).sourceId = 'source:attacker'; }).toThrow();
    const after = safetyApi.produceConditionSnapshotFromCache(issued, 'spot:ocean-beach', new Date('2026-08-13T18:00:00Z'));
    expect(after).toEqual(before);
  });

  it('rejects schema-valid station-ID forgery before issuing a cache', () => {
    const forged = validRawCache();
    forged.sensors['sensor:46237'].products.buoy.stationId = '46026';
    expect(() => ingestLiveStatusCache(forged)).toThrow(/station.*identity|stationId/i);
  });
});

function validRawCache() {
  const observed = (stationId: string, fields: Record<string, unknown>) => ({ kind: 'observed', stationId, stationName: stationId, observedAt: '2026-08-13T17:30:00Z', ageMinutes: 30, freshness: 'delayed', lastKnownGood: false, ...fields });
  return {
    schemaVersion: 4, generatedAt: '2026-08-13T18:00:00Z', status: 'partial', healthCounts: { partial: 2 }, totalStations: 2, sources: ['NOAA'], stations: {},
    sensors: {
      'sensor:46237': { key: 'sensor:46237', health: 'delayed', products: { buoy: observed('46237', { waveHeightM: 0.3 }) }, errors: [] },
      'sensor:46026': { key: 'sensor:46026', health: 'delayed', products: { wind: observed('46026', { speedMps: 0.5 }) }, errors: [] },
    },
  };
}
