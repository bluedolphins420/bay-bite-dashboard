#!/usr/bin/env node
import { mkdir, readFile, rename, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = new URL('..', import.meta.url).pathname;
const defaultOutput = join(root, 'public/data/live-status.json');
const FUTURE_SKEW_MS = 2 * 60_000;
const unavailable = (reason) => reason;
const prediction = (stationId, stationName) => ({ stationId, stationName, product: 'predictions', environment: 'prediction' });
const level = (stationId, stationName) => ({ stationId, stationName, product: 'water_level', cadenceMinutes: 6, environment: 'observed-level' });
const buoy = (stationId, stationName, cadenceMinutes, platform = 'offshore regional') => ({ stationId, stationName, cadenceMinutes, platform, environment: 'offshore', warning: 'Regional offshore observation; not measured at this beach or protected shoreline.' });
const U_LEVEL = unavailable('No active observed water-level sensor verified for this selected water.');
const U_BUOY = unavailable('Ocean buoy unavailable: offshore waves are not representative of this protected, inland, harbor, or tidal-river water.');
const U_PRED = unavailable('No verified Phase 1 tide-prediction station mapping; prediction unavailable.');
const U_SENSOR = unavailable('Catalog sensor product is not implemented by the Phase 1 live cache; value unavailable.');
const wind = (stationId, stationName) => ({ stationId, stationName, product: 'wind', cadenceMinutes: 6, environment: 'observed-wind' });

export const sensorMappings = {
  'sensor:46012': { buoy: buoy('46012', 'HALF MOON BAY, 24 NM SSW of San Francisco', 60, 'offshore USV/regional') },
  'sensor:46013': { buoy: buoy('46013', 'BODEGA BAY, 48 NM NW of San Francisco', 10) },
  'sensor:46026': { buoy: buoy('46026', 'SAN FRANCISCO, 18 NM west of San Francisco', 10) },
  'sensor:46214': { buoy: buoy('46214', 'Point Reyes CDIP 029', 60, 'CDIP offshore') },
  'sensor:46237': { buoy: buoy('46237', 'San Francisco Bar CDIP 142', 60, 'CDIP nearshore') },
  'sensor:9414131': { prediction: prediction('9414131', 'Pillar Point Harbor, Half Moon Bay') },
  'sensor:9414275': { prediction: prediction('9414275', 'Ocean Beach, outer coast') },
  'sensor:9414290': { observedLevel: level('9414290', 'San Francisco') },
  'sensor:9414311': { wind: wind('9414311', 'San Francisco Pier 1') },
  'sensor:9414523': { observedLevel: level('9414523', 'Redwood City') },
  'sensor:9414750': { observedLevel: level('9414750', 'Alameda') },
  'sensor:9414769': { wind: wind('9414769', 'Oakland Middle Harbor Met') },
  'sensor:9414847': { wind: wind('9414847', 'Point Potrero, Richmond') },
  'sensor:9414863': { observedLevel: level('9414863', 'Richmond') },
  'sensor:9415020': { wind: wind('9415020', 'Point Reyes') },
  'sensor:9415102': { observedLevel: level('9415102', 'Martinez-Amorco Pier') },
  'sensor:9415115': { wind: wind('9415115', 'Pittsburg (Suisun Bay)') },
  'sensor:9415141': { wind: wind('9415141', 'Davis Point') },
  'sensor:9415144': { observedLevel: level('9415144', 'Port Chicago') },
  'sensor:9415625': { prediction: prediction('9415625', 'Bodega Harbor entrance') },
  'sensor:fffc1': { unsupported: U_SENSOR },
  'sensor:s06010': { unsupported: U_SENSOR },
  'sensor:s08010': { unsupported: U_SENSOR },
  'sensor:s10010': { unsupported: U_SENSOR },
  'sensor:scqc1': { unsupported: U_SENSOR }
};

export const stationMappings = {
  'San Francisco': { prediction: prediction('9414290', 'San Francisco'), observedLevel: level('9414290', 'San Francisco'), wind: level('9414290', 'San Francisco'), buoy: buoy('46026', 'SAN FRANCISCO, 18 NM west of San Francisco', 10) },
  'Golden Gate': { prediction: prediction('9414290', 'San Francisco'), observedLevel: level('9414290', 'San Francisco'), wind: level('9414290', 'San Francisco'), buoy: buoy('46026', 'SAN FRANCISCO, 18 NM west of San Francisco', 10) },
  'Half Moon Bay': { prediction: prediction('9414131', 'Pillar Point Harbor, Half Moon Bay'), unsupported: { observedLevel: U_LEVEL }, buoy: buoy('46012', 'HALF MOON BAY, 24 NM SSW of San Francisco', 60, 'offshore USV/regional') },
  'Bodega Harbor': { prediction: prediction('9415625', 'Bodega Harbor entrance'), unsupported: { observedLevel: U_LEVEL }, buoy: buoy('46013', 'BODEGA BAY, 48 NM NW of San Francisco', 10) },
  'Napa River': { prediction: prediction('9415623', 'Napa, Napa River'), unsupported: { observedLevel: U_LEVEL, buoy: U_BUOY } },
  Richmond: { prediction: prediction('9414863', 'Richmond'), observedLevel: level('9414863', 'Richmond'), unsupported: { buoy: U_BUOY } },
  Alameda: { prediction: prediction('9414750', 'Alameda'), observedLevel: level('9414750', 'Alameda'), unsupported: { buoy: U_BUOY } },
  Berkeley: { prediction: prediction('9414816', 'Berkeley'), observedLevel: level('9414750', 'Alameda'), unsupported: { buoy: U_BUOY } },
  'Oakland Inner Harbor': { prediction: prediction('9414763', 'Oakland Harbor, Grove Street'), observedLevel: level('9414750', 'Alameda'), unsupported: { buoy: U_BUOY } },
  'Oakland Outer Harbor': { prediction: prediction('9414763', 'Oakland Harbor, Grove Street'), observedLevel: level('9414750', 'Alameda'), unsupported: { buoy: U_BUOY } },
  'Redwood City': { prediction: prediction('9414523', 'Redwood City'), observedLevel: level('9414523', 'Redwood City'), unsupported: { buoy: U_BUOY } },
  'San Mateo Bridge': { prediction: prediction('9414458', 'San Mateo Bridge (west end)'), observedLevel: level('9414523', 'Redwood City'), unsupported: { buoy: U_BUOY } },
  'Dumbarton Bridge': { prediction: prediction('9414509', 'Dumbarton Highway Bridge'), observedLevel: level('9414523', 'Redwood City'), unsupported: { buoy: U_BUOY } },
  'Oyster Point': { prediction: prediction('9414392', 'Oyster Point Marina'), observedLevel: level('9414523', 'Redwood City'), unsupported: { buoy: U_BUOY } },
  'San Rafael': { prediction: prediction('9414874', 'Corte Madera Creek'), observedLevel: level('9414863', 'Richmond'), unsupported: { buoy: U_BUOY } },
  Tiburon: { prediction: prediction('9414819', 'Sausalito, Corps of Engineers Dock'), observedLevel: level('9414290', 'San Francisco'), unsupported: { buoy: U_BUOY } },
  Benicia: { prediction: prediction('9415111', 'Benicia'), observedLevel: level('9415102', 'Martinez-Amorco Pier'), unsupported: { buoy: U_BUOY } },
  Vallejo: { prediction: prediction('9415165', 'Vallejo, Mare Island Strait'), observedLevel: level('9415102', 'Martinez-Amorco Pier'), unsupported: { buoy: U_BUOY } },
  'Martinez-Amorco Pier': { prediction: prediction('9415102', 'Martinez-Amorco Pier'), observedLevel: level('9415102', 'Martinez-Amorco Pier'), unsupported: { buoy: U_BUOY } },
  'Carquinez Strait': { prediction: prediction('9415111', 'Benicia'), observedLevel: level('9415102', 'Martinez-Amorco Pier'), unsupported: { buoy: U_BUOY } },
  'Point Pinole': { prediction: prediction('9414863', 'Richmond'), observedLevel: level('9414863', 'Richmond'), unsupported: { buoy: U_BUOY } },
  'Hunters Point': { prediction: prediction('9414290', 'San Francisco'), observedLevel: level('9414290', 'San Francisco'), unsupported: { buoy: U_BUOY } },
  'San Leandro Bay': { prediction: prediction('9414750', 'Alameda'), observedLevel: level('9414750', 'Alameda'), unsupported: { buoy: U_BUOY } },
  'San Leandro Marina': { prediction: prediction('9414750', 'Alameda'), observedLevel: level('9414750', 'Alameda'), unsupported: { buoy: U_BUOY } },
  'Richardson Bay': { prediction: prediction('9414819', 'Sausalito, Corps of Engineers Dock'), observedLevel: level('9414290', 'San Francisco'), unsupported: { buoy: U_BUOY } },
  'Bolinas Lagoon': { unsupported: { prediction: U_PRED, observedLevel: U_LEVEL, buoy: U_BUOY } }
};

function number(value) { const n = Number(value); return value === 'MM' || value === '' || value == null || !Number.isFinite(n) ? undefined : n; }
const physical = (value, min, max) => { const n=number(value); return n===undefined || n===-99 || n===999 || n<min || n>max ? undefined : n; };
function utc(value) { return new Date(`${value.replace(' ', 'T')}${/[zZ]|[+-]\d\d:\d\d$/.test(value) ? '' : ':00Z'}`); }
function assertTime(date, now) { if (Number.isNaN(date.getTime())) throw new Error('invalid timestamp'); if (date.getTime() > now.getTime() + FUTURE_SKEW_MS) throw new Error('future observation timestamp'); return date.toISOString(); }
export function parseCoopsObservation(payload, fields, now = new Date()) {
  if (payload?.error) throw new Error(payload.error.message || 'CO-OPS error');
  const row = payload?.data?.[0]; if (!row) throw new Error('empty CO-OPS data');
  const observedAt = assertTime(utc(row.t), now);
  for (const field of fields) if (number(row[field]) === undefined) throw new Error(`invalid CO-OPS ${field}`);
  return { row, observedAt };
}
export function parseBuoy(text, now = new Date()) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean); const header = lines.find((x) => x.startsWith('#') && /\bWDIR\b/.test(x)); const data = lines.find((x) => !x.startsWith('#'));
  if (!header || !data) throw new Error('empty NDBC data');
  const keys = header.slice(1).trim().split(/\s+/).map((x) => x.toUpperCase()); const values = data.trim().split(/\s+/); const row = Object.fromEntries(keys.map((k, i) => [k, values[i]]));
  const parts = values.slice(0, 5).map(number); if (parts.some((x) => x === undefined)) throw new Error('invalid NDBC timestamp');
  const observedAt = assertTime(new Date(Date.UTC(parts[0], parts[1] - 1, parts[2], parts[3], parts[4])), now);
  const candidates = { windDirectionDeg: physical(row.WDIR,0,360), windSpeedMps: physical(row.WSPD,0,100), gustMps: physical(row.GST,0,150), waveHeightM: physical(row.WVHT,0,40), dominantPeriodSec: physical(row.DPD,0,60), averagePeriodSec: physical(row.APD,0,60), meanWaveDirectionDeg: physical(row.MWD,0,360), pressureHpa: physical(row.PRES,850,1100), airTempC: physical(row.ATMP,-60,60), waterTempC: physical(row.WTMP,-5,45) };
  const result = { observedAt, ...Object.fromEntries(Object.entries(candidates).filter(([,value])=>value!==undefined)) };
  if (Object.keys(result).length===1) throw new Error('NDBC row has no valid observations'); return result;
}
export function freshnessFor(observedAt, now = new Date(), cadenceMinutes = 10, options = {}) {
  if (!observedAt) return { ageMinutes: null, freshness: 'unavailable' };
  const ageMinutes = Math.max(0, Math.round((now - new Date(observedAt)) / 60_000)); const live = options.liveMaxMinutes ?? cadenceMinutes * 2;
  return { ageMinutes, freshness: ageMinutes <= live ? 'live' : ageMinutes <= 120 ? 'delayed' : 'stale' };
}
const unavailableProduct = (supported, reason) => ({ kind: 'unavailable', supported, freshness: 'unavailable', reason });
function predictionProduct(payload, source) { if (payload?.error) throw new Error(payload.error.message); if (!payload?.predictions?.length) throw new Error('empty predictions'); const values = payload.predictions.map((x) => { const date=utc(x.t); if(Number.isNaN(date.getTime())) throw new Error('invalid prediction timestamp'); return { observedAt:date.toISOString(), value:number(x.v), type:x.type, unit:'m' }; }); if (values.some((x) => x.value === undefined)) throw new Error('invalid prediction'); return { kind:'prediction', stationId:source.stationId, stationName:source.stationName, freshness:'forecast', values }; }
function levelProduct(payload, source, now) { const { row, observedAt } = parseCoopsObservation(payload, ['v'], now); return { kind: 'observed', stationId: source.stationId, stationName: source.stationName, observedAt, fetchedAt: now.toISOString(), ...freshnessFor(observedAt, now, 6, { liveMaxMinutes: 18 }), lastKnownGood: false, value: number(row.v), unit: 'm', datum: 'MLLW' }; }
function windProduct(payload, source, now) { const { row, observedAt } = parseCoopsObservation(payload, ['s'], now); return { kind: 'observed', stationId: source.stationId, stationName: source.stationName, observedAt, fetchedAt: now.toISOString(), ...freshnessFor(observedAt, now, 6, { liveMaxMinutes: 18 }), lastKnownGood: false, speedMps: number(row.s), gustMps: number(row.g), directionDeg: number(row.d), directionCardinal: row.dr, unit: 'm/s' }; }
function buoyProduct(payload, source, now) { const parsed = typeof payload === 'string' ? parseBuoy(payload, now) : payload; return { kind: 'observed', stationId: source.stationId, stationName: source.stationName, observedAt: parsed.observedAt, fetchedAt: now.toISOString(), ...freshnessFor(parsed.observedAt, now, source.cadenceMinutes), lastKnownGood: false, environment: source.environment, platform: source.platform, warning: source.warning, unit: 'metric', ...parsed }; }
function lkg(prior, source, now) { if (!prior || prior.kind !== 'observed' || prior.stationId !== source.stationId || !prior.observedAt) return null; return { ...prior, ...freshnessFor(prior.observedAt, now, source.cadenceMinutes ?? 6, source.product === 'water_level' ? { liveMaxMinutes: 18 } : {}), lastKnownGood: true }; }
function sourceResult(result) { if (!result || result.status === 'rejected') throw result?.reason ?? new Error('source unavailable'); return result.value; }
export function buildSnapshot(key, mapping, settled, previous = {}, now = new Date()) {
  const products = {}; const errors = [];
  for (const kind of ['prediction', 'observedLevel', 'wind', 'buoy']) {
    const source = mapping[kind]; const unsupported = mapping.unsupported?.[kind];
    if (!source) { products[kind] = unavailableProduct(false, unsupported || `${kind} not integrated for this mapping.`); continue; }
    try { const value = sourceResult(settled[kind]); products[kind] = kind === 'prediction' ? predictionProduct(value, source, now) : kind === 'observedLevel' ? levelProduct(value, source, now) : kind === 'wind' ? windProduct(value, source, now) : buoyProduct(value, source, now); }
    catch (error) { errors.push(`${kind}: ${error.message}`); products[kind] = lkg(previous.products?.[kind], source, now) ?? unavailableProduct(true, error.message); }
  }
  const observed = Object.values(products).filter((p) => p.kind === 'observed'); const states = observed.map((p) => p.freshness); const displayedObserved = ['observedLevel','wind','buoy']; const missingDisplayed = displayedObserved.some((kind)=>products[kind]?.kind!=='observed'); const degraded = states.some((x)=>x!=='live') || observed.some((p)=>p.lastKnownGood); const health = !observed.length ? 'unavailable' : missingDisplayed || errors.length || degraded ? (states.length && states.every((x)=>x==='stale') ? 'stale' : 'partial') : 'live';
  return { key, health, products, errors };
}
function stationUrls(mapping, now) { const base = 'https://api.tidesandcurrents.noaa.gov/api/prod/datagetter'; const dates = { begin_date: now.toISOString().slice(0,10).replaceAll('-',''), end_date: new Date(now.getTime()+36*3600_000).toISOString().slice(0,10).replaceAll('-','') }; const q = (source, extra) => `${base}?${new URLSearchParams({ format:'json', units:'metric', time_zone:'gmt', station:source.stationId, ...extra })}`; return { prediction: mapping.prediction && q(mapping.prediction,{...dates,product:'predictions',datum:'MLLW',interval:'hilo'}), observedLevel: mapping.observedLevel && q(mapping.observedLevel,{date:'latest',product:'water_level',datum:'MLLW'}), wind: mapping.wind && q(mapping.wind,{date:'latest',product:'wind'}), buoy: mapping.buoy && `https://www.ndbc.noaa.gov/data/realtime2/${mapping.buoy.stationId}.txt` }; }
async function defaultFetchText(url) { const response = await fetch(url, { headers:{'user-agent':'bay-bite-dashboard/1.0'}, signal:AbortSignal.timeout(15_000) }); if (!response.ok) throw new Error(`${response.status} ${response.statusText}`); return response.text(); }
export function validateOutput(output, mappings = stationMappings) {
  const fail=(message)=>{ throw new Error(`invalid live-status output: ${message}`); };
  const object=(value)=>value && typeof value==='object' && !Array.isArray(value);
  const iso=(value)=>typeof value==='string' && Number.isFinite(new Date(value).getTime());
  const finiteNumber=(value)=>typeof value==='number' && Number.isFinite(value);
  const generatedMs=new Date(output?.generatedAt).getTime();
  const observedMetadata=(label,p,expected,kind)=>{
    if (kind==='prediction' || !iso(p.observedAt) || !iso(p.fetchedAt) || new Date(p.observedAt).getTime()>generatedMs+FUTURE_SKEW_MS || !Number.isInteger(p.ageMinutes) || p.ageMinutes<0 || !['live','delayed','stale'].includes(p.freshness) || typeof p.lastKnownGood!=='boolean') fail(`${label} observed metadata`);
    const derived=freshnessFor(p.observedAt,new Date(generatedMs),expected?.cadenceMinutes??6,['observedLevel','wind'].includes(kind)?{liveMaxMinutes:18}:{});
    if (p.ageMinutes!==derived.ageMinutes) fail(`${label} age mismatch`);
    if (p.freshness!==derived.freshness) fail(`${label} freshness mismatch`);
  };
  if (!object(output) || output.schemaVersion!==4 || !Number.isFinite(generatedMs)) fail('schemaVersion/generatedAt');
  if (!['live','partial','stale','unavailable'].includes(output.status) || !Array.isArray(output.sources) || !output.sources.length || output.sources.some((x)=>typeof x!=='string'||!x)) fail('status/sources');
  if (!object(output.healthCounts) || !Number.isInteger(output.totalStations) || !object(output.stations)) fail('counts/stations');
  const expectedKeys=Object.keys(mappings).sort(), actualKeys=Object.keys(output.stations).sort();
  if (JSON.stringify(actualKeys)!==JSON.stringify(expectedKeys) || output.totalStations!==expectedKeys.length) fail('mapping coverage');
  const counts={};
  const productKinds=['prediction','observedLevel','wind','buoy'];
  for (const key of expectedKeys) {
    const station=output.stations[key], mapping=mappings[key];
    if (!object(station) || station.key!==key || !['live','partial','stale','unavailable'].includes(station.health) || !object(station.products) || !Array.isArray(station.errors) || station.errors.some((x)=>typeof x!=='string')) fail(`station ${key}`);
    if (JSON.stringify(Object.keys(station.products).sort())!==JSON.stringify(productKinds.slice().sort())) fail(`products ${key}`);
    for (const kind of productKinds) {
      const p=station.products[kind], expected=mapping[kind];
      if (!object(p) || !['unavailable','prediction','observed'].includes(p.kind)) fail(`${key}.${kind} discriminator`);
      if (p.kind==='unavailable') { if (typeof p.supported!=='boolean' || p.freshness!=='unavailable' || typeof p.reason!=='string' || !p.reason) fail(`${key}.${kind} unavailable`); continue; }
      if (!expected || p.stationId!==expected.stationId || p.stationName!==expected.stationName || typeof p.stationId!=='string' || typeof p.stationName!=='string') fail(`${key}.${kind} identity`);
      if (p.kind==='prediction') {
        if (kind!=='prediction' || p.freshness!=='forecast' || !Array.isArray(p.values) || !p.values.length) fail(`${key}.${kind} prediction`);
        for (const value of p.values) if (!object(value) || !iso(value.observedAt) || !finiteNumber(value.value) || !['H','L'].includes(value.type) || value.unit!=='m') fail(`${key}.${kind} prediction value`);
        continue;
      }
      observedMetadata(key,p,expected,kind);
      if (kind==='observedLevel' && (!finiteNumber(p.value) || p.unit!=='m' || p.datum!=='MLLW')) fail(`${key}.${kind} fields`);
      if (kind==='wind' && (!finiteNumber(p.speedMps) || p.unit!=='m/s')) fail(`${key}.${kind} fields`);
      if (kind==='buoy') {
        const fields=['windDirectionDeg','windSpeedMps','gustMps','waveHeightM','dominantPeriodSec','averagePeriodSec','meanWaveDirectionDeg','pressureHpa','airTempC','waterTempC'];
        if (p.unit!=='metric' || typeof p.environment!=='string' || typeof p.warning!=='string' || !fields.some((field)=>finiteNumber(p[field]))) fail(`${key}.${kind} fields`);
      }
      for (const [field,value] of Object.entries(p)) if (typeof value==='number' && !Number.isFinite(value)) fail(`${key}.${kind}.${field}`);
    }
    const observedStates=productKinds.slice(1).map((kind)=>station.products[kind]).filter((p)=>p.kind==='observed');
    const missing=productKinds.slice(1).some((kind)=>station.products[kind].kind!=='observed');
    const expectedHealth=!observedStates.length?'unavailable':missing || station.errors.length || observedStates.some((p)=>p.freshness!=='live'||p.lastKnownGood)?(observedStates.every((p)=>p.freshness==='stale')?'stale':'partial'):'live';
    if (station.health!==expectedHealth) fail(`${key} health`);
    counts[station.health]=(counts[station.health]??0)+1;
  }
  const normalized=(value)=>Object.fromEntries(Object.entries(value).filter(([,count])=>count!==0).sort());
  if (JSON.stringify(normalized(output.healthCounts))!==JSON.stringify(normalized(counts))) fail('healthCounts');
  const states=expectedKeys.map((key)=>output.stations[key].health); const expectedStatus=states.every((x)=>x==='live')?'live':states.every((x)=>x==='unavailable')?'unavailable':states.every((x)=>['stale','unavailable'].includes(x))?'stale':'partial';
  if (output.status!==expectedStatus) fail('aggregate status');
  if (mappings===stationMappings) {
    if (!object(output.sensors) || JSON.stringify(Object.keys(output.sensors).sort())!==JSON.stringify(Object.keys(sensorMappings).sort())) fail('sensor coverage');
    for (const [id,sensor] of Object.entries(output.sensors)) {
      const mapping=sensorMappings[id];
      if (sensor.key!==id || !['live','partial','stale','unavailable'].includes(sensor.health) || !object(sensor.products) || !Array.isArray(sensor.errors) || sensor.errors.some((x)=>typeof x!=='string')) fail(`sensor ${id}`);
      if (JSON.stringify(Object.keys(sensor.products).sort())!==JSON.stringify(productKinds.slice().sort())) fail(`sensor ${id} products`);
      for (const kind of productKinds) {
        const p=sensor.products[kind], expected=mapping[kind];
        if (!object(p) || !['unavailable','prediction','observed'].includes(p.kind)) fail(`sensor ${id}.${kind} discriminator`);
        if (p.kind==='unavailable') { if (typeof p.supported!=='boolean' || p.freshness!=='unavailable' || typeof p.reason!=='string' || !p.reason) fail(`sensor ${id}.${kind} unavailable`); continue; }
        if (!expected || p.stationId!==expected.stationId || p.stationName!==expected.stationName) fail(`sensor ${id}.${kind} identity`);
        if (p.kind==='prediction') {
          if (kind!=='prediction' || p.freshness!=='forecast' || !Array.isArray(p.values) || !p.values.length) fail(`sensor ${id}.${kind} prediction`);
          for (const value of p.values) if (!object(value) || !iso(value.observedAt) || !finiteNumber(value.value) || !['H','L'].includes(value.type) || value.unit!=='m') fail(`sensor ${id}.${kind} prediction value`);
          continue;
        }
        observedMetadata(`sensor ${id}`,p,expected,kind);
        if (kind==='observedLevel' && (!finiteNumber(p.value) || p.unit!=='m' || p.datum!=='MLLW')) fail(`sensor ${id}.${kind} fields`);
        if (kind==='wind' && (!finiteNumber(p.speedMps) || p.unit!=='m/s')) fail(`sensor ${id}.${kind} fields`);
        if (kind==='buoy') {
          const fields=['windDirectionDeg','windSpeedMps','gustMps','waveHeightM','dominantPeriodSec','averagePeriodSec','meanWaveDirectionDeg','pressureHpa','airTempC','waterTempC'];
          if (p.unit!=='metric' || typeof p.environment!=='string' || typeof p.warning!=='string' || !fields.some((field)=>finiteNumber(p[field]))) fail(`sensor ${id}.${kind} fields`);
        }
        for (const [field,value] of Object.entries(p)) if (typeof value==='number' && !Number.isFinite(value)) fail(`sensor ${id}.${kind}.${field}`);
      }
      const observedStates=productKinds.slice(1).map((kind)=>sensor.products[kind]).filter((p)=>p.kind==='observed');
      const missing=productKinds.slice(1).some((kind)=>sensor.products[kind].kind!=='observed');
      const expectedHealth=!observedStates.length?'unavailable':missing || sensor.errors.length || observedStates.some((p)=>p.freshness!=='live'||p.lastKnownGood)?(observedStates.every((p)=>p.freshness==='stale')?'stale':'partial'):'live';
      if (sensor.health!==expectedHealth) fail(`sensor ${id} health`);
    }
  }
  return output;
}
export async function main(options = {}) {
  const outputPath = options.outputPath ?? defaultOutput, now = options.now ?? new Date(), mappings = options.mappings ?? stationMappings, fetchText = options.fetchText ?? defaultFetchText; await mkdir(dirname(outputPath),{recursive:true}); let previous={stations:{}}; try { previous=JSON.parse(await readFile(outputPath,'utf8')); } catch {}
  const cache=new Map(); const get=(url,json)=>{ if(!cache.has(url)) cache.set(url,fetchText(url).then((x)=>json?JSON.parse(x):x)); return cache.get(url); };
  const collect=async(definitions,prior={})=>Promise.all(Object.entries(definitions).map(async ([key,mapping])=>{ const urls=stationUrls(mapping,now); const settled={}; await Promise.all(Object.entries(urls).map(async([kind,url])=>{ if(!url)return; try{settled[kind]={status:'fulfilled',value:await get(url,kind!=='buoy')}}catch(reason){settled[kind]={status:'rejected',reason}} })); return [key,buildSnapshot(key,mapping,settled,prior?.[key],now)]; }));
  const entries=await collect(mappings,previous.stations), sensorEntries=await collect(sensorMappings,previous.sensors);
  const stations=Object.fromEntries(entries), sensors=Object.fromEntries(sensorEntries), healthCounts=Object.values(stations).reduce((a,s)=>(a[s.health]=(a[s.health]??0)+1,a),{}), states=Object.values(stations).map((s)=>s.health); const status=states.every((x)=>x==='live')?'live':states.every((x)=>x==='unavailable')?'unavailable':states.every((x)=>['stale','unavailable'].includes(x))?'stale':'partial'; const output={schemaVersion:4,generatedAt:now.toISOString(),status,healthCounts,totalStations:entries.length,sources:['NOAA CO-OPS','NOAA NDBC','CDIP via NOAA NDBC'],stations,sensors}; options.beforePublish?.(output); validateOutput(output,mappings); const temporary=`${outputPath}.tmp-${process.pid}`; await writeFile(temporary,JSON.stringify(output,null,2)+'\n'); await rename(temporary,outputPath); console.log(JSON.stringify({status,healthCounts,totalStations:entries.length,totalSensors:sensorEntries.length,generatedAt:output.generatedAt})); return output;
}
if (process.argv[1] && fileURLToPath(import.meta.url)===process.argv[1]) main().catch((error)=>{console.error(error);process.exitCode=1;});
