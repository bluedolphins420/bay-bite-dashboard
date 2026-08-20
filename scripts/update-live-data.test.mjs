import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { spots } from '../src/data';
import {
  buildSnapshot, freshnessFor, main, parseBuoy, parseCoopsObservation,
  sensorMappings, stationMappings, validateOutput
} from './update-live-data.mjs';

const now = new Date('2026-08-13T18:00:00.000Z');

describe('product-specific source mapping', () => {
  it('defines every one of the 25 catalog sensors with explicit implemented or unavailable products', () => {
    expect(Object.keys(sensorMappings)).toHaveLength(25);
    expect(sensorMappings['sensor:9414275'].prediction).toMatchObject({ stationId:'9414275' });
    expect(sensorMappings['sensor:46237'].buoy).toMatchObject({ stationId:'46237' });
    expect(sensorMappings['sensor:9414769'].wind).toMatchObject({ stationId:'9414769' });
    expect(sensorMappings['sensor:s06010'].unsupported).toBeTruthy();
  });
  it('covers every data.ts tideStation label without a silent fallback', () => {
    const labels = [...new Set(spots.map((spot) => spot.tideStation))];
    expect(labels.every((label) => Object.hasOwn(stationMappings, label))).toBe(true);
    expect(stationMappings.Unknown).toBeUndefined();
    for (const label of labels) {
      const mapping = stationMappings[label];
      expect(mapping.prediction || mapping.unsupported?.prediction).toBeTruthy();
      expect(mapping.observedLevel || mapping.unsupported?.observedLevel).toBeTruthy();
      expect(mapping.buoy || mapping.unsupported?.buoy).toBeTruthy();
    }
  });

  it('uses official product identities and never assigns offshore buoys inland', () => {
    expect(stationMappings['Bodega Harbor'].prediction).toMatchObject({ stationId: '9415625', stationName: 'Bodega Harbor entrance' });
    expect(stationMappings['Bodega Harbor'].buoy).toMatchObject({ stationId: '46013', stationName: 'BODEGA BAY, 48 NM NW of San Francisco' });
    expect(stationMappings['Napa River'].prediction).toMatchObject({ stationId: '9415623', stationName: 'Napa, Napa River' });
    expect(stationMappings.Vallejo.prediction).toMatchObject({ stationId: '9415165', stationName: 'Vallejo, Mare Island Strait' });
    expect(stationMappings.Benicia.prediction).toMatchObject({ stationId: '9415111', stationName: 'Benicia' });
    expect(stationMappings['San Rafael'].prediction.stationName).toBe('Corte Madera Creek');
    expect(stationMappings.Tiburon.prediction.stationName).toBe('Sausalito, Corps of Engineers Dock');
    expect(stationMappings.Berkeley.prediction).toMatchObject({ stationId: '9414816', stationName: 'Berkeley' });
    expect(stationMappings['Oakland Inner Harbor'].prediction.stationName).toBe('Oakland Harbor, Grove Street');
    expect(stationMappings['San Francisco'].buoy).toMatchObject({ stationId: '46026', stationName: 'SAN FRANCISCO, 18 NM west of San Francisco' });
    expect(stationMappings['Half Moon Bay'].buoy).toMatchObject({ stationId: '46012', cadenceMinutes: 60, platform: 'offshore USV/regional' });

    const protectedLabels = ['Richmond', 'Berkeley', 'Alameda', 'Oakland Inner Harbor', 'Oakland Outer Harbor', 'Redwood City', 'San Mateo Bridge', 'San Rafael', 'Tiburon', 'Dumbarton Bridge', 'Benicia', 'Vallejo', 'Napa River', 'Carquinez Strait', 'Hunters Point', 'Martinez-Amorco Pier', 'Oyster Point', 'Point Pinole', 'Richardson Bay', 'San Leandro Bay', 'San Leandro Marina'];
    for (const label of protectedLabels) expect(stationMappings[label].buoy).toBeUndefined();
  });
});

describe('source parsing and freshness', () => {
  it('parses NDBC uppercase metric fields, MM gaps, and UTC timestamp', () => {
    const text = `#YY MM DD hh mm WDIR WSPD GST WVHT DPD APD MWD PRES ATMP WTMP\n#yr mo dy hr mn degT m/s m/s m sec sec degT hPa degC degC\n2026 08 13 17 40 MM 4.1 6.2 1.8 14 8.7 282 1015.2 13.4 12.8`;
    expect(parseBuoy(text, now)).toMatchObject({ observedAt: '2026-08-13T17:40:00.000Z', windSpeedMps: 4.1, waveHeightM: 1.8, dominantPeriodSec: 14, waterTempC: 12.8 });
    expect(parseBuoy(text, now)).not.toHaveProperty('windDirectionDeg');
  });

  it('omits reviewer sentinel and nonphysical NDBC fields while retaining useful valid fields', () => {
    const text = `#YY MM DD hh mm WDIR WSPD GST WVHT DPD APD MWD PRES ATMP WTMP\n2026 08 13 17 40 999 -99 999 -99 999 -99 361 999 99 12.8`;
    expect(parseBuoy(text, now)).toEqual({ observedAt: '2026-08-13T17:40:00.000Z', waterTempC: 12.8 });
    expect(() => parseBuoy(`#YY MM DD hh mm WDIR WSPD GST WVHT DPD APD MWD PRES ATMP WTMP\n2026 08 13 17 40 999 -99 999 -99 999 -99 361 999 99 -99`, now)).toThrow(/no valid/i);
  });

  it('parses CO-OPS GMT exactly once and rejects future observations', () => {
    expect(parseCoopsObservation({ data: [{ t: '2026-08-13 17:54', v: '1.2' }] }, ['v'], now).observedAt).toBe('2026-08-13T17:54:00.000Z');
    expect(() => parseCoopsObservation({ data: [{ t: '2026-08-13 18:03', v: '1.2' }] }, ['v'], now)).toThrow(/future/i);
    expect(() => parseCoopsObservation({ error: { message: 'No data was found' } }, ['v'], now)).toThrow(/No data/i);
    expect(() => parseCoopsObservation({ data: [] }, ['v'], now)).toThrow(/empty/i);
  });

  it('accepts future tide predictions while keeping them outside observed freshness', () => {
    const station = buildSnapshot('Napa River', stationMappings['Napa River'], {
      prediction: { status: 'fulfilled', value: { predictions: [{ t: '2026-08-16 02:00', v: '1.0', type: 'H' }] } }
    }, {}, now);
    expect(station.products.prediction).toMatchObject({ kind: 'prediction', freshness: 'forecast' });
    expect(station.products.prediction.values[0].observedAt).toBe('2026-08-16T02:00:00.000Z');
  });

  it('applies product cadence independently', () => {
    expect(freshnessFor('2026-08-13T17:31:00.000Z', now, 10)).toMatchObject({ ageMinutes: 29, freshness: 'delayed' });
    expect(freshnessFor('2026-08-13T17:31:00.000Z', now, 60)).toMatchObject({ ageMinutes: 29, freshness: 'live' });
    expect(freshnessFor('2026-08-13T17:41:00.000Z', now, 6, { liveMaxMinutes: 18 })).toMatchObject({ freshness: 'delayed' });
    expect(freshnessFor('2026-08-13T15:59:00.000Z', now, 10)).toMatchObject({ freshness: 'stale' });
  });
});

describe('per-product LKG and atomic publication', () => {
  const okJson = (value) => ({ status: 'fulfilled', value });
  const bad = (message) => ({ status: 'rejected', reason: new Error(message) });

  it('retains only the failed valid prior product with original time and explicit LKG', () => {
    const mapping = stationMappings['San Francisco'];
    const prior = {
      products: {
        observedLevel: { kind: 'observed', stationId: '9414290', stationName: 'San Francisco', observedAt: '2026-08-13T17:00:00.000Z', fetchedAt: '2026-08-13T17:01:00.000Z', freshness: 'live', ageMinutes: 1, lastKnownGood: false, value: 1.1, unit: 'm', datum: 'MLLW' },
        wind: { kind: 'observed', stationId: '9414290', stationName: 'San Francisco', observedAt: '2026-08-13T17:00:00.000Z', fetchedAt: '2026-08-13T17:01:00.000Z', freshness: 'live', ageMinutes: 1, lastKnownGood: false, speedMps: 2, unit: 'm/s' }
      }
    };
    const station = buildSnapshot('San Francisco', mapping, {
      prediction: okJson({ predictions: [{ t: '2026-08-13 19:00', v: '2.0', type: 'H' }] }),
      observedLevel: okJson({ error: { message: 'No data' } }),
      wind: okJson({ data: [{ t: '2026-08-13 17:54', s: '4', g: '5', d: '270', dr: 'W' }] }),
      buoy: bad('network')
    }, prior, now);
    expect(station.products.observedLevel).toMatchObject({ observedAt: '2026-08-13T17:00:00.000Z', lastKnownGood: true, ageMinutes: 60, freshness: 'delayed' });
    expect(station.products.wind).toMatchObject({ observedAt: '2026-08-13T17:54:00.000Z', lastKnownGood: false, freshness: 'live' });
    expect(station.products.buoy).toMatchObject({ freshness: 'unavailable', supported: true });
    expect(station.health).toBe('partial');
    expect(station.lastKnownGood).toBeUndefined();
  });

  it('deep-validates identities, finite fields, and future timestamps', () => {
    const output = { schemaVersion: 4, generatedAt: now.toISOString(), status: 'partial', totalStations: 1, healthCounts: { partial: 1 }, sources: ['NOAA'], stations: { X: { key: 'X', health: 'partial', products: { observedLevel: { kind: 'observed', stationId: 'wrong', stationName: 'Wrong', observedAt: '2026-08-13T19:00:00.000Z', value: Number.NaN, unit: 'm', freshness: 'live', ageMinutes: 0, lastKnownGood: false } } } } };
    expect(() => validateOutput(output, { X: { observedLevel: { stationId: 'expected', stationName: 'Expected' } } })).toThrow();
  });

  it('rejects even one-minute age contradictions in either direction', async () => {
    const original = JSON.parse(await readFile(join(process.cwd(), 'public/data/live-status.json'), 'utf8'));
    const baseline = original.sensors['sensor:46237'].products.buoy.ageMinutes;
    for (const delta of [-1, 1]) {
      const output = structuredClone(original);
      output.sensors['sensor:46237'].products.buoy.ageMinutes = baseline + delta;
      expect(() => validateOutput(output), `delta ${delta}`).toThrow(/sensor:46237.*age mismatch/i);
    }
  });

  it('rejects contradictory cached age and freshness metadata', async () => {
    const output = JSON.parse(await readFile(join(process.cwd(), 'public/data/live-status.json'), 'utf8'));
    const product = output.sensors['sensor:46237'].products.buoy;
    product.observedAt = '2026-01-01T00:00:00.000Z';
    product.ageMinutes = 1;
    product.freshness = 'live';
    output.sensors['sensor:46237'].health = 'partial';
    expect(() => validateOutput(output)).toThrow(/sensor:46237.*age|sensor:46237.*freshness/i);
  });

  it('rejects a sensor product whose identity does not match its sensor mapping', async () => {
    const output = JSON.parse(await readFile(join(process.cwd(), 'public/data/live-status.json'), 'utf8'));
    output.sensors['sensor:46237'].products.buoy.stationId = '46013';
    output.sensors['sensor:46237'].products.buoy.stationName = 'BODEGA BAY';
    expect(() => validateOutput(output)).toThrow(/sensor:46237.*identity/i);
  });

  it('rejects empty, incomplete, malformed, inconsistent, and extra-key schema v3 snapshots', () => {
    const mapping = { X: { prediction: { stationId: '1', stationName: 'One' }, unsupported: { observedLevel: 'none', wind: 'none', buoy: 'none' } } };
    const unavailable = (reason = 'none') => ({ kind: 'unavailable', supported: false, freshness: 'unavailable', reason });
    const valid = { schemaVersion: 4, generatedAt: now.toISOString(), status: 'unavailable', totalStations: 1, healthCounts: { unavailable: 1 }, sources: ['NOAA CO-OPS', 'NOAA NDBC'], stations: { X: { key: 'X', health: 'unavailable', products: { prediction: { kind: 'prediction', stationId: '1', stationName: 'One', freshness: 'forecast', values: [{ observedAt: '2026-08-13T19:00:00.000Z', value: 1, type: 'H', unit: 'm' }] }, observedLevel: unavailable(), wind: unavailable(), buoy: unavailable() }, errors: [] } } };
    expect(validateOutput(structuredClone(valid), mapping)).toEqual(valid);
    for (const mutate of [
      (x) => { x.stations = {}; }, (x) => { x.generatedAt = 'not-a-date'; }, (x) => { delete x.sources; },
      (x) => { x.totalStations = 2; }, (x) => { x.healthCounts.unavailable = 0; },
      (x) => { x.stations.Y = structuredClone(x.stations.X); }, (x) => { delete x.stations.X.products.wind; },
      (x) => { x.stations.X.products.observedLevel = { kind: 'bogus' }; },
      (x) => { x.stations.X.products.prediction.values[0].observedAt = 'invalid'; },
      (x) => { x.stations.X.products.prediction.values[0].type = 'Q'; }
    ]) { const candidate=structuredClone(valid); mutate(candidate); expect(() => validateOutput(candidate,mapping)).toThrow(); }
  });

  it('rejects malformed observed required fields, units, ages, freshness, and future timestamps', () => {
    const mapping = { X: { observedLevel: { stationId: '1', stationName: 'One' }, unsupported: { prediction: 'none', wind: 'none', buoy: 'none' } } };
    const baseProduct = { kind: 'observed', stationId: '1', stationName: 'One', observedAt: '2026-08-13T17:54:00.000Z', fetchedAt: now.toISOString(), ageMinutes: 6, freshness: 'live', lastKnownGood: false, value: 1, unit: 'm', datum: 'MLLW' };
    const unavailable = { kind: 'unavailable', supported: false, freshness: 'unavailable', reason: 'none' };
    const valid = { schemaVersion:4, generatedAt:now.toISOString(), status:'partial', totalStations:1, healthCounts:{partial:1}, sources:['NOAA CO-OPS'], stations:{X:{key:'X',health:'partial',products:{prediction:unavailable,observedLevel:baseProduct,wind:unavailable,buoy:unavailable},errors:[]}} };
    for (const mutate of [
      (p) => { p.observedAt='invalid'; }, (p) => { p.observedAt='2026-08-13T18:03:00.000Z'; },
      (p) => { p.ageMinutes=-1; }, (p) => { p.freshness='forecast'; }, (p) => { p.lastKnownGood='no'; },
      (p) => { p.stationName='Wrong'; }, (p) => { p.unit='ft'; }, (p) => { delete p.datum; }
    ]) { const candidate=structuredClone(valid); mutate(candidate.stations.X.products.observedLevel); expect(()=>validateOutput(candidate,mapping)).toThrow(); }
  });

  it('counts unsupported displayed observations conservatively without reporting source errors', () => {
    const fulfilled=(value)=>({status:'fulfilled',value});
    const hmb=buildSnapshot('Half Moon Bay',stationMappings['Half Moon Bay'],{ prediction:fulfilled({predictions:[{t:'2026-08-13 19:00',v:'1',type:'H'}]}), buoy:fulfilled(`#YY MM DD hh mm WDIR WSPD GST WVHT DPD APD MWD PRES ATMP WTMP\n2026 08 13 17 40 270 4 5 1 10 8 280 1015 13 12`) },{},now);
    const alameda=buildSnapshot('Alameda',stationMappings.Alameda,{ prediction:fulfilled({predictions:[{t:'2026-08-13 19:00',v:'1',type:'H'}]}), observedLevel:fulfilled({data:[{t:'2026-08-13 17:54',v:'1'}]}) },{},now);
    expect(hmb.health).toBe('partial'); expect(alameda.health).toBe('partial');
    expect(hmb.errors).toEqual([]); expect(alameda.errors).toEqual([]);
  });

  it('leaves the current snapshot intact when publication validation fails', async () => {
    const dir = await mkdtemp(join(tmpdir(), 'bay-bite-'));
    const outputPath = join(dir, 'live-status.json');
    await writeFile(outputPath, '{"sentinel":true}\n');
    await expect(main({ outputPath, now, fetchText: async () => '{"error":{"message":"broken"}}', mappings: { Broken: { prediction: { stationId: '1', stationName: 'One' }, unsupported: { observedLevel: 'unsupported', buoy: 'unsupported' } } }, beforePublish: (snapshot) => { snapshot.generatedAt = 'invalid'; } })).rejects.toThrow();
    expect(await readFile(outputPath, 'utf8')).toBe('{"sentinel":true}\n');
  });
});
