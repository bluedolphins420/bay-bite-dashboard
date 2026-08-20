import { describe, expect, it, vi } from 'vitest';
import { telemetryFromBindings, telemetryFromCache } from './telemetry';

describe('cache telemetry semantics', () => {
  it('resolves Ocean Beach and Point Pinole metrics only through selected-spot bindings', () => {
    const observed = (stationId: string, fields: Record<string, unknown>) => ({ kind: 'observed' as const, stationId, stationName: stationId, observedAt: '2026-08-13T17:54:00.000Z', ageMinutes: 6, freshness: 'live' as const, lastKnownGood: false, ...fields });
    const cache = { generatedAt: '2026-08-13T18:00:00.000Z', sensors: {
      'sensor:9414275': { products: { prediction: { kind: 'prediction' as const, stationId: '9414275', stationName: 'Ocean Beach', freshness: 'forecast' as const, values: [] } } },
      'sensor:46237': { products: { buoy: observed('46237', { waveHeightM: 1, waterTempC: 12 }) } },
      'sensor:9414863': { products: { observedLevel: observed('9414863', { value: 1 }) } },
      'sensor:9414769': { products: { wind: observed('9414769', { speedMps: 3 }) } },
      'sensor:9414290': { products: { observedLevel: observed('9414290', { value: 9 }) } }
    } };
    const ob = telemetryFromBindings(cache, [
      { metric:'tide',sensorId:'sensor:9414275',distanceKm:1.7,representativeness:'local',warning:'Not at shore',maxAgeMinutes:120 },
      { metric:'wave',sensorId:'sensor:46237',distanceKm:11.3,representativeness:'regional',warning:'Regional only',maxAgeMinutes:120 },
      { metric:'temperature',sensorId:'sensor:46237',distanceKm:11.3,representativeness:'regional',warning:'Regional only',maxAgeMinutes:120 }
    ], 'Ocean Beach', new Date('2026-08-13T18:00:00.000Z'));
    expect(ob.observations.wave.stationId).toBe('46237');
    expect(ob.observations.temperature.stationId).toBe('46237');
    expect(ob.observations.wave.warning).toContain('Regional only');
    const pinole = telemetryFromBindings(cache, [
      { metric:'tide_level',sensorId:'sensor:9414863',distanceKm:9.3,representativeness:'local',warning:'Not at shore',maxAgeMinutes:120 },
      { metric:'wind',sensorId:'sensor:9414769',distanceKm:23,representativeness:'regional',warning:'Not at shore',maxAgeMinutes:120 },
      { metric:'wave',availability:'unavailable',warning:'No compatible wave sensor' }
    ], 'Point Pinole', new Date('2026-08-13T18:00:00.000Z'));
    expect(pinole.observations.level.stationId).toBe('9414863');
    expect(pinole.observations.wind.stationId).toBe('9414769');
    expect(pinole.observations.wave).toMatchObject({ availability:'unavailable', reason:'No compatible wave sensor' });
    expect(pinole.waterLevelFt).toBe('3.3 ft MLLW');
  });

  it('uses a distinct bound temperature sensor when inland wave is explicitly unavailable', () => {
    const temperatureProduct = {
      kind: 'observed' as const,
      stationId: 'scqc1',
      stationName: 'Suisun water-quality station',
      observedAt: '2026-08-13T17:54:00.000Z',
      ageMinutes: 6,
      freshness: 'live' as const,
      lastKnownGood: false,
      waterTempC: 20
    };
    const result = telemetryFromBindings({
      generatedAt: '2026-08-13T18:00:00.000Z',
      sensors: { 'sensor:scqc1': { products: { buoy: temperatureProduct } } }
    }, [
      { metric:'wave',availability:'unavailable',warning:'No environment-compatible observed wave station' },
      { metric:'temperature',sensorId:'sensor:scqc1',distanceKm:8,representativeness:'regional',warning:'Water quality station',maxAgeMinutes:120 }
    ], 'Cullinan Ranch', new Date('2026-08-13T18:00:00.000Z'));
    expect(result.observations.wave.availability).toBe('unavailable');
    expect(result.observations.temperature.stationId).toBe('scqc1');
    expect(result.waterTempF).toBe('68°F');
  });

  it('marks the summary partial when a displayed temperature binding is absent', () => {
    const observed = (stationId: string, fields: Record<string, unknown>) => ({ kind:'observed' as const, stationId, stationName:stationId, observedAt:'2026-08-13T17:54:00.000Z', ageMinutes:6, freshness:'live' as const, lastKnownGood:false, ...fields });
    const result = telemetryFromBindings({ generatedAt:'2026-08-13T18:00:00.000Z', sensors:{
      level:{products:{observedLevel:observed('level',{value:1})}},
      wind:{products:{wind:observed('wind',{speedMps:3})}},
      wave:{products:{buoy:observed('wave',{waveHeightM:1})}}
    } }, [
      {metric:'tide_level',sensorId:'level',warning:'Local',maxAgeMinutes:120},
      {metric:'wind',sensorId:'wind',warning:'Local',maxAgeMinutes:120},
      {metric:'wave',sensorId:'wave',warning:'Regional',maxAgeMinutes:120}
    ], 'Test water', new Date('2026-08-13T18:00:00.000Z'));
    expect(result.status).toBe('partial');
    expect(result.observations.temperature.availability).toBe('unavailable');
  });

  it('marks the summary partial when a displayed temperature binding is explicitly unavailable', () => {
    const observed = (stationId: string, fields: Record<string, unknown>) => ({ kind:'observed' as const, stationId, stationName:stationId, observedAt:'2026-08-13T17:54:00.000Z', ageMinutes:6, freshness:'live' as const, lastKnownGood:false, ...fields });
    const result = telemetryFromBindings({ generatedAt:'2026-08-13T18:00:00.000Z', sensors:{
      level:{products:{observedLevel:observed('level',{value:1})}},
      wind:{products:{wind:observed('wind',{speedMps:3})}},
      wave:{products:{buoy:observed('wave',{waveHeightM:1})}}
    } }, [
      {metric:'tide_level',sensorId:'level',warning:'Local',maxAgeMinutes:120},
      {metric:'wind',sensorId:'wind',warning:'Local',maxAgeMinutes:120},
      {metric:'wave',sensorId:'wave',warning:'Regional',maxAgeMinutes:120},
      {metric:'temperature',availability:'unavailable',warning:'No compatible temperature sensor'}
    ], 'Test water', new Date('2026-08-13T18:00:00.000Z'));
    expect(result.status).toBe('partial');
    expect(result.observations.temperature.availability).toBe('unavailable');
  });

  it('recomputes displayed age and freshness from observedAt even within TTL', () => {
    const forged = {
      kind: 'observed' as const,
      stationId: '46237', stationName: 'San Francisco Bar CDIP 142',
      observedAt: '2026-08-13T17:50:00.000Z', ageMinutes: 1, freshness: 'live' as const, lastKnownGood: false,
      waveHeightM: 1.6, waterTempC: 15.3
    };
    const result = telemetryFromBindings({ generatedAt:'2026-08-13T18:50:00.000Z', sensors:{'sensor:46237':{products:{buoy:forged}}} }, [
      { metric:'wave',sensorId:'sensor:46237',distanceKm:11,representativeness:'regional',warning:'Regional only',maxAgeMinutes:120 },
      { metric:'temperature',sensorId:'sensor:46237',distanceKm:11,representativeness:'regional',warning:'Regional only',maxAgeMinutes:120 }
    ], 'Ocean Beach', new Date('2026-08-13T18:50:00.000Z'));
    expect(result.waveHeightFt).toBe('5.2 ft');
    expect(result.observations.wave).toMatchObject({ ageMinutes:60, freshness:'delayed' });
    expect(result.observations.temperature).toMatchObject({ ageMinutes:60, freshness:'delayed' });
    expect(result.status).toBe('partial');
  });

  it('fails bound observations closed for an invalid invocation clock', () => {
    const product = { kind:'observed' as const, stationId:'46237', stationName:'Bar', observedAt:'2026-08-13T18:40:00.000Z', ageMinutes:10, freshness:'live' as const, lastKnownGood:false, waveHeightM:1 };
    const result=telemetryFromBindings({generatedAt:'2026-08-13T18:50:00.000Z',sensors:{'sensor:46237':{products:{buoy:product}}}},[
      {metric:'wave',sensorId:'sensor:46237',warning:'Regional only',maxAgeMinutes:120}
    ],'Ocean Beach',new Date('invalid'));
    expect(result.waveHeightFt).toBeUndefined();
    expect(result.observations.wave.reason).toMatch(/invalid invocation clock/i);
  });

  it('fails bound observations closed for a materially future cache clock', () => {
    const product = { kind:'observed' as const, stationId:'46237', stationName:'Bar', observedAt:'2029-12-31T23:50:00.000Z', ageMinutes:10, freshness:'live' as const, lastKnownGood:false, waveHeightM:1 };
    const result=telemetryFromBindings({generatedAt:'2030-01-01T00:00:00.000Z',sensors:{'sensor:46237':{products:{buoy:product}}}},[
      {metric:'wave',sensorId:'sensor:46237',warning:'Regional only',maxAgeMinutes:120}
    ],'Ocean Beach',new Date('2026-08-13T18:50:00.000Z'));
    expect(result.waveHeightFt).toBeUndefined();
    expect(result.observations.wave.reason).toMatch(/future cache clock/i);
  });

  it('suppresses forged-fresh bound values using observedAt instead of cached ageMinutes', () => {
    const forged = {
      kind: 'observed' as const,
      stationId: '46237',
      stationName: 'San Francisco Bar CDIP 142',
      observedAt: '2026-01-01T00:00:00.000Z',
      ageMinutes: 1,
      freshness: 'live' as const,
      lastKnownGood: false,
      waveHeightM: 1.6,
      waterTempC: 15.3
    };
    const result = telemetryFromBindings({
      generatedAt: '2026-08-13T18:50:00.000Z',
      sensors: { 'sensor:46237': { products: { buoy: forged } } }
    }, [
      { metric:'wave',sensorId:'sensor:46237',distanceKm:11,representativeness:'regional',warning:'Regional only',maxAgeMinutes:120 },
      { metric:'temperature',sensorId:'sensor:46237',distanceKm:11,representativeness:'regional',warning:'Regional only',maxAgeMinutes:120 }
    ], 'Ocean Beach', new Date('2026-08-13T18:50:00.000Z'));
    expect(result.waveHeightFt).toBeUndefined();
    expect(result.waterTempF).toBeUndefined();
    expect(result.observations.wave.reason).toMatch(/TTL.*observedAt/i);
    expect(result.observations.temperature.reason).toMatch(/TTL.*observedAt/i);
  });

  it('suppresses bound values that exceed the binding TTL', () => {
    const stale = {
      kind: 'observed' as const,
      stationId: '46237',
      stationName: 'San Francisco Bar CDIP 142',
      observedAt: '2026-08-03T05:30:00.000Z',
      ageMinutes: 15201,
      freshness: 'stale' as const,
      lastKnownGood: false,
      waveHeightM: 1.6,
      waterTempC: 15.3
    };
    const result = telemetryFromBindings({
      generatedAt: '2026-08-13T18:50:00.000Z',
      sensors: { 'sensor:46237': { products: { buoy: stale } } }
    }, [
      { metric:'wave',sensorId:'sensor:46237',distanceKm:11,representativeness:'regional',warning:'Regional only',maxAgeMinutes:120 },
      { metric:'temperature',sensorId:'sensor:46237',distanceKm:11,representativeness:'regional',warning:'Regional only',maxAgeMinutes:120 }
    ], 'Ocean Beach', new Date('2026-08-13T18:50:00.000Z'));
    expect(result.waveHeightFt).toBeUndefined();
    expect(result.waterTempF).toBeUndefined();
    expect(result.observations.wave).toMatchObject({ availability:'unavailable', freshness:'unavailable' });
    expect(result.observations.wave.reason).toMatch(/TTL.*120.*15200/i);
    expect(result.observations.temperature.reason).toMatch(/TTL.*120.*15200/i);
  });

  it('selects the earliest future high and low from unsorted predictions using the snapshot clock', () => {
    vi.stubEnv('TZ', 'America/Los_Angeles');
    const snapshot = telemetryFromCache({ key: 'Half Moon Bay', health: 'partial', products: {
      prediction: { kind: 'prediction', stationId: '9414131', stationName: 'Pillar Point Harbor, Half Moon Bay', freshness: 'forecast', values: [
        { observedAt: '2026-08-13T23:00:00.000Z', value: 0, type: 'L', unit: 'm' },
        { observedAt: '2026-08-13T14:00:00.000Z', value: 1, type: 'H', unit: 'm' },
        { observedAt: '2026-08-14T02:00:00.000Z', value: 1, type: 'H', unit: 'm' },
        { observedAt: '2026-08-13T22:00:00.000Z', value: 2, type: 'H', unit: 'm' },
        { observedAt: '2026-08-13T15:00:00.000Z', value: 0, type: 'L', unit: 'm' }
      ] }
    } }, 'Half Moon Bay', '2026-08-13T18:00:00.000Z', new Date('2026-08-13T17:00:00.000Z'));
    expect(snapshot.nextHigh).toMatch(/3:00 PM/);
    expect(snapshot.nextLow).toMatch(/4:00 PM/);
    vi.unstubAllEnvs();
  });

  it('makes past-only high and low predictions unavailable', () => {
    const snapshot = telemetryFromCache({ key: 'Alameda', health: 'unavailable', products: {
      prediction: { kind: 'prediction', stationId: '9414750', stationName: 'Alameda', freshness: 'forecast', values: [
        { observedAt: '2026-08-13T17:59:00.000Z', value: 1, type: 'H', unit: 'm' },
        { observedAt: '2026-08-13T17:00:00.000Z', value: 0, type: 'L', unit: 'm' }
      ] }
    } }, 'Alameda', '2026-08-13T18:00:00.000Z', new Date('2026-08-13T17:00:00.000Z'));
    expect(snapshot.nextHigh).toBeUndefined();
    expect(snapshot.nextLow).toBeUndefined();
  });

  it('consumes metric cache names and converts each observed value exactly once', () => {
    const snapshot = telemetryFromCache({
      key: 'San Francisco', health: 'partial',
      products: {
        observedLevel: { kind: 'observed', stationId: '9414290', stationName: 'San Francisco', observedAt: '2026-08-13T17:54:00.000Z', ageMinutes: 6, freshness: 'live', lastKnownGood: false, value: 1, unit: 'm', datum: 'MLLW' },
        prediction: { kind: 'prediction', stationId: '9414290', stationName: 'San Francisco', freshness: 'forecast', values: [{ observedAt: '2026-08-13T19:00:00.000Z', value: 2, type: 'H', unit: 'm' }] },
        wind: { kind: 'observed', stationId: '9414290', stationName: 'San Francisco', observedAt: '2026-08-13T17:54:00.000Z', ageMinutes: 6, freshness: 'live', lastKnownGood: false, speedMps: 4, gustMps: 5, directionDeg: 270, directionCardinal: 'W', unit: 'm/s' },
        buoy: { kind: 'observed', stationId: '46026', stationName: 'SAN FRANCISCO, 18 NM west of San Francisco', observedAt: '2026-08-13T17:40:00.000Z', ageMinutes: 20, freshness: 'live', lastKnownGood: false, environment: 'offshore', warning: 'Regional offshore observation; not measured at this beach.', waveHeightM: 1.8, dominantPeriodSec: 14, waterTempC: 12.8, unit: 'metric' }
      }
    }, 'Fallback');
    expect(snapshot.waterLevelFt).toBe('3.3 ft MLLW');
    expect(snapshot.windSpeedKt).toBe('8 kt');
    expect(snapshot.waveHeightFt).toBe('5.9 ft');
    expect(snapshot.waveLabel).toBe('Significant wave height');
    expect(snapshot.waterTempF).toBe('55°F');
    expect(snapshot.stationId).toBe('9414290');
    expect(snapshot.buoyId).toBe('46026');
    expect(snapshot.observationAge).toContain('6 min');
    expect(snapshot.observations.level).toMatchObject({ availability: 'available', freshness: 'live', ageMinutes: 6, observedAt: '2026-08-13T17:54:00.000Z', lastKnownGood: false, stationId: '9414290', stationName: 'San Francisco' });
    expect(snapshot.observations.wind).toMatchObject({ availability: 'available', freshness: 'live', ageMinutes: 6, stationId: '9414290' });
    expect(snapshot.observations.buoy).toMatchObject({ availability: 'available', freshness: 'live', ageMinutes: 20, stationId: '46026' });
  });

  it('keeps forecast separate and renders explicit unsupported records truthfully', () => {
    vi.stubEnv('TZ', 'America/Los_Angeles');
    const snapshot = telemetryFromCache({ key: 'Napa River', health: 'unavailable', products: {
      prediction: { kind: 'prediction', stationId: '9415623', stationName: 'Napa, Napa River', freshness: 'forecast', values: [{ observedAt: '2026-08-14T02:00:00.000Z', value: 1, type: 'H', unit: 'm' }] },
      observedLevel: { kind: 'unavailable', supported: false, freshness: 'unavailable', reason: 'No active observed water-level sensor verified.' },
      buoy: { kind: 'unavailable', supported: false, freshness: 'unavailable', reason: 'Ocean buoy is not representative of tidal-river conditions.' }
    } }, 'Napa River', undefined, new Date('2026-08-13T18:00:00.000Z'));
    expect(snapshot.nextHigh).toMatch(/7:00 PM/);
    expect(snapshot.waterLevelFt).toBeUndefined();
    expect(snapshot.buoyId).toBe('Unavailable');
    expect(snapshot.message).toContain('not representative');
    vi.unstubAllEnvs();
  });

  it('never invents a fallback station for an unknown label', () => {
    expect(telemetryFromCache(undefined, 'Unknown').stationId).toBeUndefined();
    expect(telemetryFromCache(undefined, 'Unknown').buoyId).toBe('Unavailable');
  });

  it.each([
    ['Half Moon Bay', { observedLevel: 'No active level', wind: 'Wind unavailable', buoy: 'Buoy unavailable' }],
    ['Alameda', { observedLevel: null, wind: 'Wind unavailable', buoy: 'Inland buoy unavailable' }],
    ['San Francisco', { observedLevel: null, wind: null, buoy: null }]
  ])('carries conservative per-product truth for %s', (key, unavailable) => {
    const observedLevel = unavailable.observedLevel
      ? { kind: 'unavailable' as const, supported: false, freshness: 'unavailable' as const, reason: unavailable.observedLevel }
      : { kind: 'observed' as const, stationId: key === 'San Francisco' ? '9414290' : '9414750', stationName: key, observedAt: '2026-08-13T17:56:00.000Z', ageMinutes: 4, freshness: 'live' as const, lastKnownGood: false, value: 1, unit: 'm' };
    const wind = unavailable.wind
      ? { kind: 'unavailable' as const, supported: false, freshness: 'unavailable' as const, reason: unavailable.wind }
      : { kind: 'observed' as const, stationId: '9414290', stationName: 'San Francisco', observedAt: '2026-08-13T17:55:00.000Z', ageMinutes: 5, freshness: 'live' as const, lastKnownGood: false, speedMps: 3, unit: 'm/s' };
    const buoy = unavailable.buoy
      ? { kind: 'unavailable' as const, supported: false, freshness: 'unavailable' as const, reason: unavailable.buoy }
      : { kind: 'observed' as const, stationId: '46026', stationName: 'SAN FRANCISCO, 18 NM west of San Francisco', observedAt: '2026-08-13T17:28:00.000Z', ageMinutes: 32, freshness: 'delayed' as const, lastKnownGood: false, waveHeightM: 1, waterTempC: 12, unit: 'metric' };
    const result = telemetryFromCache({ key, health: 'live', products: { observedLevel, wind, buoy } }, key);
    expect(result.status).toBe(key === 'Half Moon Bay' ? 'unavailable' : 'partial');
    expect(result.observations.level.availability).toBe(unavailable.observedLevel ? 'unavailable' : 'available');
    expect(result.observations.wind.availability).toBe(unavailable.wind ? 'unavailable' : 'available');
    expect(result.observations.buoy.freshness).toBe(unavailable.buoy ? 'unavailable' : 'delayed');
    if (key === 'San Francisco') expect(result.observations.buoy.ageMinutes).toBe(32);
  });
});
