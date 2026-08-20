#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const args = process.argv.slice(2);
const check = args.includes('--check');
const positional = args.filter((arg) => arg !== '--check');
const source = resolve(positional[0] ?? 'scripts/data/spot-catalog-100-v2.source.json');
const output = resolve(positional[1] ?? 'src/fishing-smarts/generated/research-catalog.v2.json');
const raw = JSON.parse(readFileSync(source, 'utf8'));
const reviewedCompatibility = Object.freeze({
  'species:barred-surfperch':['habitat:surf'],'species:california-halibut':['habitat:surf','habitat:pier','habitat:bay-shore','habitat:estuary-mouth'],'species:striped-bass':['habitat:surf','habitat:pier','habitat:jetty','habitat:breakwater','habitat:bay-shore','habitat:tidal-slough','habitat:estuary','habitat:estuary-mouth'],
  'species:bat-ray':['habitat:bay-shore','habitat:tidal-slough','habitat:estuary','habitat:estuary-mouth','habitat:surf'],'species:black-rockfish':['habitat:rocky-shore','habitat:jetty','habitat:breakwater'],'species:blue-rockfish':['habitat:rocky-shore','habitat:jetty','habitat:breakwater'],'species:brown-rockfish':['habitat:rocky-shore','habitat:jetty','habitat:breakwater','habitat:pier'],'species:cabezon':['habitat:rocky-shore','habitat:jetty','habitat:breakwater'],'species:channel-catfish':['habitat:tidal-slough','habitat:estuary'],'species:jacksmelt':['habitat:pier','habitat:bay-shore','habitat:estuary','habitat:estuary-mouth','habitat:surf'],'species:kelp-greenling':['habitat:rocky-shore','habitat:jetty','habitat:breakwater'],'species:leopard-shark':['habitat:bay-shore','habitat:estuary','habitat:estuary-mouth','habitat:surf'],'species:lingcod':['habitat:rocky-shore','habitat:jetty','habitat:breakwater'],'species:monkeyface-prickleback':['habitat:rocky-shore','habitat:jetty','habitat:breakwater'],'species:pacific-staghorn-sculpin':['habitat:bay-shore','habitat:tidal-slough','habitat:estuary','habitat:estuary-mouth','habitat:pier'],'species:pile-perch':['habitat:pier','habitat:jetty','habitat:breakwater','habitat:bay-shore','habitat:rocky-shore'],'species:redtail-surfperch':['habitat:surf'],'species:rubberlip-seaperch':['habitat:pier','habitat:jetty','habitat:breakwater','habitat:rocky-shore'],'species:starry-flounder':['habitat:surf','habitat:pier','habitat:bay-shore','habitat:tidal-slough','habitat:estuary','habitat:estuary-mouth'],'species:striped-seaperch':['habitat:pier','habitat:jetty','habitat:breakwater','habitat:bay-shore','habitat:rocky-shore'],'species:topsmelt':['habitat:pier','habitat:bay-shore','habitat:estuary','habitat:estuary-mouth','habitat:surf'],'species:walleye-surfperch':['habitat:surf','habitat:pier','habitat:jetty','habitat:breakwater','habitat:bay-shore'],'species:white-croaker':['habitat:surf','habitat:pier','habitat:bay-shore','habitat:estuary','habitat:estuary-mouth'],'species:white-sturgeon':['habitat:bay-shore','habitat:tidal-slough','habitat:estuary']
});
const spots = raw.spots.filter((spot) => spot.researchAcceptance?.acceptedActionable === true);
const spotIds = new Set(spots.map((spot) => spot.id));
const spotSpeciesEvidence = raw.spotSpeciesEvidence.filter((edge) => spotIds.has(edge.spotId));
const excludedNames = raw.rejectedOrPending.map((item) => item.name).sort((a,b)=>b.length-a.length);
const scrubExcludedNames = (value) => {
  if (typeof value === 'string') return excludedNames.reduce((text,name)=>text.replaceAll(name,'excluded candidate'),value);
  if (Array.isArray(value)) return value.map(scrubExcludedNames);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key,item])=>[key,scrubExcludedNames(item)]));
  return value;
};
const supportingIds = new Set();
for (const spot of spots) {
  [...spot.sourceIds, ...spot.access.sourceIds, ...spot.mpaAdjudication.sourceIds, spot.advisories.consumptionSourceId].filter(Boolean).forEach((id) => supportingIds.add(id));
}
for (const edge of spotSpeciesEvidence) edge.sourceIds.forEach((id) => supportingIds.add(id));
for (const sensor of raw.sensors) supportingIds.add(sensor.sourceId);
for (const mpa of raw.mpas) mpa.sourceIds.forEach((id) => supportingIds.add(id));
const artifact = scrubExcludedNames({
  schemaVersion: raw.schemaVersion,
  generatedAt: raw.generatedAt,
  bundleId: raw.bundleId,
  scope: raw.scope,
  metrics: raw.metrics,
  sources: raw.sources.filter((source) => supportingIds.has(source.id)),
  spots,
  species: raw.species.map((species) => ({ ...species, compatibleHabitats: reviewedCompatibility[species.id] ?? [] })),
  habitats: raw.habitats,
  regulatoryAreas: raw.regulatoryAreas,
  mpas: raw.mpas,
  sensors: raw.sensors,
  spotSpeciesEvidence
});

function assert(condition, message) { if (!condition) throw new Error(`Catalog generation failed: ${message}`); }
const ids = new Set();
for (const collection of ['sources', 'spots', 'species', 'habitats', 'regulatoryAreas', 'mpas', 'sensors', 'spotSpeciesEvidence']) {
  for (const item of artifact[collection]) {
    assert(typeof item.id === 'string' && item.id.includes(':'), `${collection} stable ID`);
    assert(!ids.has(item.id), `duplicate ID ${item.id}`);
    ids.add(item.id);
  }
}
const requireIds = (owner, refs) => refs.filter(Boolean).forEach((id) => assert(ids.has(id), `${owner} references missing ${id}`));
assert(spots.length === 101, `expected 101 accepted spots, got ${spots.length}`);
assert(raw.rejectedOrPending.length === 30, `expected 30 source exclusions, got ${raw.rejectedOrPending.length}`);
assert(artifact.sensors.length === 25, `expected 25 sensors, got ${artifact.sensors.length}`);
assert(artifact.sources.length > 0, 'no accepted supporting sources');
assert(artifact.spotSpeciesEvidence.length > 0, 'no accepted evidence edges');
for (const spot of spots) {
  assert(spot.id === `spot:${spot.legacyId}`, `${spot.id} legacy ID mismatch`);
  requireIds(spot.id, [...spot.habitatIds, ...spot.sourceIds, ...spot.access.sourceIds, ...spot.mpaAdjudication.sourceIds, ...spot.sensorBindings.map((binding) => binding.sensorId)]);
  assert(spot.mpaAdjudication.status === 'clear-at-catalog-point', `${spot.id} MPA point status`);
  assert(spotSpeciesEvidence.filter((edge) => edge.spotId === spot.id).length >= 2, `${spot.id} local evidence count`);
}
for (const edge of spotSpeciesEvidence) requireIds(edge.id, [edge.spotId, edge.speciesId, ...edge.habitatIds, ...edge.sourceIds]);
for (const sensor of artifact.sensors) requireIds(sensor.id, [sensor.sourceId]);
const inland = new Set(['inner_bay', 'south_bay_shallow', 'carquinez_strait', 'tidal_river_delta', 'san_pablo_brackish', 'estuary']);
for (const spot of spots.filter((item) => inland.has(item.environmentClass))) assert(!spot.sensorBindings.some((binding) => binding.metric === 'wave' && binding.sensorId), `${spot.id} incompatible inland wave mapping`);
const serialized = `${JSON.stringify(artifact, null, 2)}\n`;
if (check) {
  assert(readFileSync(output, 'utf8') === serialized, `${output} is stale; run npm run generate:catalog`);
  console.log(`Catalog artifact verified: 101 accepted, 30 excluded, 25 sensors, ${spotSpeciesEvidence.length} accepted edges.`);
} else {
  writeFileSync(output, serialized);
  console.log(`Generated ${output}: 101 accepted, 30 excluded, 25 sensors, ${spotSpeciesEvidence.length} accepted edges.`);
}
