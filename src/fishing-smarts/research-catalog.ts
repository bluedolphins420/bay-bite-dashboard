import rawCatalog from './generated/research-catalog.v2.json';

export type ResearchSource = { readonly id: string; readonly title: string; readonly url: string; readonly owner: string; readonly checkedAt: string; readonly notes?: string };
export type ResearchSensorBinding = { readonly metric: string; readonly sensorId?: string; readonly availability?: 'unavailable'; readonly distanceKm?: number; readonly representativeness?: 'exact-site'|'local'|'regional'|'proxy'|'not-representative'; readonly warning: string; readonly maxAgeMinutes?: number };
export type ResearchSpot = {
  readonly id: string; readonly legacyId: string; readonly displayName: string; readonly coordinates: { readonly lat: number; readonly lon: number; readonly precision: string }; readonly region: string;
  readonly habitatIds: readonly string[]; readonly environmentClass: string; readonly ownerJurisdiction: string;
  readonly access: { readonly state: string; readonly checkedAt: string; readonly sourceIds: readonly string[]; readonly verificationScope: string; readonly conditions: string; readonly originalV1State: string };
  readonly licenseBoundary: string; readonly physicalProfile: { readonly summary: string; readonly substrate: string; readonly salinity: string; readonly exposure: string; readonly grounding: string };
  readonly tactics: readonly string[]; readonly safety: { readonly hazardsAndRetreat: readonly string[]; readonly closureConstraints: string };
  readonly mpaAdjudication: { readonly status: string; readonly checkedAt: string; readonly sourceIds: readonly string[]; readonly intersections: readonly string[]; readonly warning: string };
  readonly advisories: { readonly consumptionSourceId?: string; readonly weatherResolver: string; readonly sameDayChecks: readonly string[] };
  readonly sensorBindings: readonly ResearchSensorBinding[]; readonly sourceIds: readonly string[];
  readonly researchAcceptance: { readonly acceptedActionable: true; readonly reasons: readonly string[]; readonly speciesEvidenceCount: number };
};
export type ResearchSpeciesEdge = { readonly id: string; readonly spotId: string; readonly speciesId: string; readonly evidenceType: string; readonly sourceIds: readonly string[]; readonly confidence: 'low'|'medium'|'high'; readonly locality: { readonly radiusKm?: number; readonly observationCount?: number; readonly warning: string }; readonly habitatIds: readonly string[]; readonly reviewedAt: string };
export type ResearchSensor = { readonly id: string; readonly officialId: string; readonly name: string; readonly environment: string; readonly sourceId: string };
export type ResearchCatalog = {
  readonly schemaVersion: number; readonly generatedAt: string; readonly bundleId: string; readonly scope: string; readonly metrics: Readonly<Record<string, number>>;
  readonly sources: readonly ResearchSource[]; readonly spots: readonly ResearchSpot[]; readonly species: readonly { readonly id: string; readonly commonName: string; readonly scientificName?: string; readonly compatibleHabitats: readonly string[] }[];
  readonly habitats: readonly { readonly id: string; readonly displayName: string }[]; readonly regulatoryAreas: readonly { readonly id: string; readonly displayName: string }[];
  readonly mpas: readonly { readonly id: string; readonly displayName: string; readonly sourceIds: readonly string[] }[]; readonly sensors: readonly ResearchSensor[]; readonly spotSpeciesEvidence: readonly ResearchSpeciesEdge[];
};

function canonicalFreeze(value: unknown): unknown {
  if (value === null || typeof value !== 'object') return value;
  if (Object.getOwnPropertySymbols(value).length) throw new Error('Invalid generated research catalog: symbol key');
  if (Array.isArray(value)) {
    if (Object.getPrototypeOf(value) !== Array.prototype) throw new Error('Invalid generated research catalog: custom array prototype');
    const descriptors = Object.getOwnPropertyDescriptors(value);
    const keys = Object.keys(descriptors).filter((key) => key !== 'length');
    if (keys.length !== value.length || keys.some((key, index) => key !== String(index))) throw new Error('Invalid generated research catalog: sparse array');
    const result = keys.map((key) => {
      const descriptor = descriptors[key];
      if (!('value' in descriptor)) throw new Error('Invalid generated research catalog: array accessor');
      return canonicalFreeze(descriptor.value);
    });
    return Object.freeze(result);
  }
  const result = Object.create(null) as Record<string, unknown>;
  for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(value))) {
    if (['__proto__', 'constructor', 'prototype'].includes(key) || !('value' in descriptor)) throw new Error(`Invalid generated research catalog key: ${key}`);
    result[key] = canonicalFreeze(descriptor.value);
  }
  return Object.freeze(result);
}

export const researchCatalog = canonicalFreeze(rawCatalog) as ResearchCatalog;
export const researchSpots = researchCatalog.spots;
export const sensorDefinitions = researchCatalog.sensors;

const sourceIndex = new Map(researchCatalog.sources.map((source) => [source.id, source]));
const evidenceIndex = new Map(researchSpots.map((spot) => [spot.id, Object.freeze(researchCatalog.spotSpeciesEvidence.filter((edge) => edge.spotId === spot.id)) as readonly ResearchSpeciesEdge[]]));
export function researchSourceForId(id: string): ResearchSource | undefined { return sourceIndex.get(id); }
export function evidenceForSpotId(spotId: string): readonly ResearchSpeciesEdge[] { return evidenceIndex.get(spotId) ?? EMPTY_EVIDENCE; }
const EMPTY_EVIDENCE: readonly ResearchSpeciesEdge[] = Object.freeze([]);

export const evidenceDisclosure = 'Local corroboration from reviewed occurrence/catch-pattern evidence; not current presence, exact casting-point proof, or legal target-now status.';
