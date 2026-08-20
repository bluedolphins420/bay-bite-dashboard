export type StableId = `${string}:${string}`;
export type EligibilityStatus = 'open' | 'closed' | 'catch-release' | 'no-take' | 'restricted' | 'special-notice' | 'unknown';
export type FishingMode = 'shore' | 'pier' | 'jetty' | 'boat';
export type EvidenceConfidence = 'low' | 'medium' | 'high';
export type SourceOwner = 'official-agency' | 'site-owner' | 'academic' | 'reviewed-secondary' | 'community';

export interface SourceRecord { id: StableId; owner: SourceOwner; title: string; url: string; checkedAt: string }
export interface SpotRecord { id: StableId; name: string; habitatIds: StableId[]; regulatoryAreaIds: StableId[]; mpaIds: StableId[]; sensorIds: StableId[] }
export interface BiologicalProfile {
  habitatGuild: string; substrateHabitat: string; depthAndSalinity: string; temperature: string; forage: string;
  seasonalMovements: string; tideCurrentLightTurbidityTriggers: string; spawningNurserySensitivity: string; tackleImplications: string;
  confidence: EvidenceConfidence;
}
export interface SpeciesRecord { id: StableId; commonName: string; scientificName?: string; habitatIds: StableId[]; sourceIds?: StableId[]; biologicalProfile?: BiologicalProfile; identificationCaveat?: string }
export interface HabitatRecord { id: StableId; name: string }
export interface RegulatoryAreaRecord { id: StableId; name: string; boundary?: string; sourceIds?: StableId[] }
export interface MpaRecord { id: StableId; name: string; regulatoryAreaIds: StableId[] }
export type SensorMetric = 'tide-prediction' | 'water-level' | 'current' | 'wind' | 'wave' | 'water-temperature' | 'air-temperature' | 'pressure' | 'visibility' | 'salinity' | 'forecast' | 'advisory';
export type Representativeness = 'exact-site' | 'local' | 'regional' | 'proxy' | 'not-representative';
export interface SensorMetricBinding { metric: SensorMetric; representativeness: Representativeness; distanceKm?: number; maxAgeMinutes: number; sourceId: StableId }
export interface SensorRecord { id: StableId; name: string; environment: string; metrics: SensorMetricBinding[] }
export interface RuleRecord {
  id: StableId;
  speciesIds: StableId[];
  regulatoryAreaIds: StableId[];
  spotIds?: StableId[];
  mpaIds?: StableId[];
  statuses: EligibilityStatus[];
  fishingModes: FishingMode[];
  methodIds?: StableId[];
  gearIds?: StableId[];
  effectiveFrom: string;
  effectiveTo?: string;
  dynamic: boolean;
  maxAgeHours?: number;
  sourceIds: StableId[];
  checkedAt: string;
  staleAfter?: string;
  warning?: string;
  dailyBagLimit?: string;
  possessionLimit?: string;
  minimumSize?: string;
  gearRules?: string[];
  shoreVsBoat?: string;
  mpaDependency?: boolean;
}
export interface NoticeRecord extends RuleRecord { expiresAt?: string }
export interface SpotSpeciesEvidenceRecord {
  id: StableId;
  spotId: StableId;
  speciesId: StableId;
  habitatIds: StableId[];
  confidence: EvidenceConfidence;
  sourceIds: StableId[];
  observedOrPublishedAt?: string;
  reviewedAt: string;
}
export interface FishingSmartsDataset {
  schemaVersion: 1;
  generatedAt: string;
  sources: SourceRecord[];
  spots: SpotRecord[];
  species: SpeciesRecord[];
  habitats: HabitatRecord[];
  regulatoryAreas: RegulatoryAreaRecord[];
  rules: RuleRecord[];
  notices: NoticeRecord[];
  mpas: MpaRecord[];
  sensors: SensorRecord[];
  spotSpeciesEvidence: SpotSpeciesEvidenceRecord[];
}
export interface EligibilityContext {
  at: string;
  spotId: StableId;
  speciesId: StableId;
  regulatoryAreaId: StableId;
  fishingMode: FishingMode;
  methodIds: StableId[];
  gearIds: StableId[];
  mpaIds: StableId[];
  areaGeometryResolved?: boolean;
  mpaGeometryResolved?: boolean;
}
export interface EligibilityResult { status: EligibilityStatus; actionable: boolean; matchedRuleIds: StableId[]; reasons: string[] }

const severity: Record<EligibilityStatus, number> = { unknown: 7, 'no-take': 6, closed: 5, restricted: 4, 'catch-release': 3, 'special-notice': 2, open: 1 };
const overlaps = (required: readonly StableId[] | undefined, actual: readonly StableId[]) => !required?.length || required.some((id) => actual.includes(id));

function matches(rule: RuleRecord, context: EligibilityContext, at: number): boolean {
  const starts = new Date(rule.effectiveFrom).getTime();
  const ends = rule.effectiveTo ? new Date(rule.effectiveTo).getTime() : Number.POSITIVE_INFINITY;
  const expiresAt = (rule as NoticeRecord).expiresAt;
  const noticeEnds = expiresAt ? new Date(expiresAt).getTime() : Number.POSITIVE_INFINITY;
  return at >= starts && at <= ends && at <= noticeEnds
    && overlaps(rule.speciesIds, [context.speciesId])
    && overlaps(rule.regulatoryAreaIds, [context.regulatoryAreaId])
    && overlaps(rule.spotIds, [context.spotId])
    && overlaps(rule.mpaIds, context.mpaIds)
    && rule.fishingModes.includes(context.fishingMode)
    && overlaps(rule.methodIds, context.methodIds)
    && overlaps(rule.gearIds, context.gearIds);
}

function isStale(rule: RuleRecord, at: number): boolean {
  if (rule.staleAfter && at >= new Date(rule.staleAfter).getTime()) return true;
  if (!rule.dynamic) return false;
  if (rule.maxAgeHours === undefined) return true;
  const age = at - new Date(rule.checkedAt).getTime();
  return age < 0 || age > rule.maxAgeHours * 3_600_000;
}

export function evaluateEligibility(dataset: FishingSmartsDataset, context: EligibilityContext): EligibilityResult {
  if (context.areaGeometryResolved === false) return { status: 'unknown', actionable: false, matchedRuleIds: [], reasons: ['Regulatory area geometry is unresolved.'] };
  const at = new Date(context.at).getTime();
  const matched = [...dataset.rules, ...dataset.notices].filter((rule) => matches(rule, context, at));
  if (!matched.length) return { status: 'unknown', actionable: false, matchedRuleIds: [], reasons: ['No applicable verified rule establishes eligibility.'] };
  const stale = matched.filter((rule) => isStale(rule, at));
  if (stale.length) return { status: 'unknown', actionable: false, matchedRuleIds: matched.map((rule) => rule.id), reasons: [`Dynamic rule snapshot is stale: ${stale.map((rule) => rule.id).join(', ')}`] };
  if (context.mpaGeometryResolved === false && matched.some((rule) => rule.mpaDependency)) return { status: 'unknown', actionable: false, matchedRuleIds: matched.map((rule) => rule.id), reasons: ['Exact MPA geometry is unresolved.'] };
  const status = matched.flatMap((rule) => rule.statuses).sort((a, b) => severity[b] - severity[a])[0] ?? 'unknown';
  return { status, actionable: status === 'open', matchedRuleIds: matched.map((rule) => rule.id), reasons: [] };
}

export interface RecommendationResult { actionable: boolean; biologySuitable: boolean; legal: EligibilityResult; evidenceIds: StableId[] }

export function evaluateRecommendation(dataset: FishingSmartsDataset, context: EligibilityContext): RecommendationResult {
  const legal = evaluateEligibility(dataset, context);
  const spot = dataset.spots.find((item) => item.id === context.spotId);
  const species = dataset.species.find((item) => item.id === context.speciesId);
  const evidence = dataset.spotSpeciesEvidence.filter((item) => item.spotId === context.spotId && item.speciesId === context.speciesId && item.confidence !== 'low');
  const biologySuitable = Boolean(spot && species && evidence.some((item) => item.habitatIds.some((id) => spot.habitatIds.includes(id) && species.habitatIds.includes(id))));
  return { actionable: legal.actionable && biologySuitable, biologySuitable, legal, evidenceIds: evidence.map((item) => item.id) };
}

const collections = ['sources', 'spots', 'species', 'habitats', 'regulatoryAreas', 'rules', 'notices', 'mpas', 'sensors', 'spotSpeciesEvidence'] as const;

export function validateFishingSmartsDataset(value: unknown): FishingSmartsDataset {
  const fail = (message: string): never => { throw new Error(`Invalid fishing-smarts schema: ${message}`); };
  if (!value || typeof value !== 'object' || Array.isArray(value)) fail('root object');
  const data = value as Partial<FishingSmartsDataset>;
  if (data.schemaVersion !== 1) fail('schemaVersion must be 1');
  if (typeof data.generatedAt !== 'string' || !Number.isFinite(new Date(data.generatedAt).getTime())) fail('generatedAt');
  for (const collection of collections) if (!Array.isArray(data[collection])) fail(`${collection} must be an array`);
  const all = collections.flatMap((collection) => data[collection] as Array<{ id: StableId }>);
  const ids = new Set<StableId>();
  for (const item of all) {
    if (!item || typeof item.id !== 'string' || !item.id.includes(':')) fail('stable ID');
    if (ids.has(item.id)) fail(`duplicate ID ${item.id}`);
    ids.add(item.id);
  }
  const requireIds = (owner: StableId, references: readonly StableId[]) => references.forEach((id) => { if (!ids.has(id)) fail(`${owner} references missing ${id}`); });
  for (const spot of data.spots!) requireIds(spot.id, [...spot.habitatIds, ...spot.regulatoryAreaIds, ...spot.mpaIds, ...spot.sensorIds]);
  for (const species of data.species!) requireIds(species.id, species.habitatIds);
  for (const rule of [...data.rules!, ...data.notices!]) requireIds(rule.id, [...rule.speciesIds, ...rule.regulatoryAreaIds, ...(rule.spotIds ?? []), ...(rule.mpaIds ?? []), ...rule.sourceIds]);
  for (const evidence of data.spotSpeciesEvidence!) requireIds(evidence.id, [evidence.spotId, evidence.speciesId, ...evidence.habitatIds, ...evidence.sourceIds]);
  const validDate = (value: unknown) => typeof value === 'string' && Number.isFinite(new Date(value).getTime());
  const sourceById = new Map(data.sources!.map((source) => [source.id, source]));
  for (const source of data.sources!) {
    if (!source.url.startsWith('https://')) fail(`${source.id} URL must use HTTPS`);
    if (!validDate(source.checkedAt)) fail(`${source.id} checkedAt`);
  }
  for (const species of data.species!) {
    requireIds(species.id, species.sourceIds ?? []);
    if (species.biologicalProfile && Object.entries(species.biologicalProfile).some(([key, field]) => key !== 'confidence' && (typeof field !== 'string' || !field.trim()))) fail(`${species.id} biological profile`);
  }
  for (const rule of [...data.rules!, ...data.notices!]) {
    if (!validDate(rule.effectiveFrom) || (rule.effectiveTo && !validDate(rule.effectiveTo)) || !validDate(rule.checkedAt) || (rule.staleAfter && !validDate(rule.staleAfter))) fail(`${rule.id} effective/checkedAt/staleAfter date`);
    if (!rule.warning?.trim() || !rule.staleAfter) fail(`${rule.id} warning/staleAfter`);
    if (rule.sourceIds.some((id) => sourceById.get(id)?.owner !== 'official-agency')) fail(`${rule.id} legal source must be official`);
  }
  return data as FishingSmartsDataset;
}
