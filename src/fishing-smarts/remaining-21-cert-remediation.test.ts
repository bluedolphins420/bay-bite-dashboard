// @ts-expect-error Node built-ins are available to Vitest; this project intentionally omits @types/node.
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import * as faunaApi from './fauna-opportunity';
import { exactTaxonScience, evaluateSpeciesOpportunity, type HistoricalOccurrenceEvidence, type OpportunityInput } from './fauna-opportunity';
import { scientificSourceRegistry } from './scientific-sources';
import type { StableId } from './index';

const reviewedPackage = JSON.parse(readFileSync('/root/company/research/bay-bite-fishing-smarts/remaining-21-taxa-science.v1.json', 'utf8')) as {
  profiles: Array<Record<string, unknown> & { id: string; claimProvenance: Record<string, Claim> }>;
  sourceRegistryAdditions: Array<{ id: string; role: string }>;
};
const reviewedProfiles = reviewedPackage.profiles;
const expectedReviewedProfileIds = [
  'species:bat-ray', 'species:black-rockfish', 'species:blue-rockfish', 'species:brown-rockfish', 'species:cabezon',
  'species:channel-catfish', 'species:jacksmelt', 'species:kelp-greenling', 'species:leopard-shark', 'species:lingcod',
  'species:monkeyface-prickleback', 'species:pacific-staghorn-sculpin', 'species:pile-perch', 'species:redtail-surfperch',
  'species:rubberlip-seaperch', 'species:starry-flounder', 'species:striped-seaperch', 'species:topsmelt',
  'species:walleye-surfperch', 'species:white-croaker', 'species:white-sturgeon',
] as const;
const runtimeProfiles = exactTaxonScience as unknown as Record<string, Record<string, unknown>>;
const sourcesById = new Map(scientificSourceRegistry.map((source) => [source.id, source as unknown as Record<string, unknown>]));

const reviewedFields = [
  'authorityIdentifiers',
  'substrateStructureSalinityDepthExposure',
  'shoreAccessibility',
  'vulnerabilities',
  'localHistoricalEvidence',
  'legalIdentityRuleStatus',
  'recommendability',
  'profileVersion',
  'reviewedAt',
] as const;
const provenanceClaimIds = [
  'taxonomy',
  'authorityIdentifiers',
  'domain',
  'environment',
  'substrate',
  'structure',
  'salinity',
  'depth',
  'lifeStages',
  'season',
  'forage',
  'feedingMode',
  'vulnerabilities',
  'shoreAccessibility',
  'legalIdentityRuleStatus',
  'localHistoricalEvidence',
  'presentation',
] as const;
const ecologicalClaimIds = ['domain', 'environment', 'substrate', 'structure', 'salinity', 'depth', 'lifeStages', 'season', 'forage', 'feedingMode', 'shoreAccessibility'] as const;
const forbiddenEcologySources = new Set([
  'source:cdfw-groundfish-2026',
  'source:cdfw-sf-bay-regs',
  'source:cdfw-general-ocean',
  'source:oehha-sf-bay',
  'source:oehha-white-croaker',
  'source:cdfw-sturgeon-card',
  'source:cdfw-sturgeon-opener',
]);

type Claim = { state?: unknown; value?: unknown; sourceIds?: unknown; reason?: unknown };

function collectUnfrozen(value: unknown, path: string, result: string[]): void {
  if (value === null || typeof value !== 'object') return;
  if (!Object.isFrozen(value)) result.push(path);
  for (const [key, nested] of Object.entries(value)) collectUnfrozen(nested, `${path}.${key}`, result);
}

function claimsFor(profile: Record<string, unknown>): Record<string, Claim> {
  return (profile.claimProvenance ?? {}) as Record<string, Claim>;
}

const intendedSourceIdsByProfile = Object.fromEntries(reviewedProfiles.map((profile) => [
  profile.id,
  new Set(Object.values(profile.claimProvenance).flatMap((claim) => Array.isArray(claim.sourceIds) ? claim.sourceIds as string[] : [])),
])) as Record<string, Set<string>>;

function sourceSupportsClaimForProfile(sourceId: string, profileId: string, claimId: string): boolean {
  const source = sourcesById.get(sourceId as StableId);
  if (!source || !intendedSourceIdsByProfile[profileId].has(sourceId)) return false;
  const role = source.role;
  if (claimId === 'legalIdentityRuleStatus') return role === 'legal-regulation' || role === 'consumption-advisory' || role === 'conservation-status';
  if (claimId === 'localHistoricalEvidence') return role === 'historical-occurrence';
  if (claimId === 'vulnerabilities') return role === 'biology' || role === 'consumption-advisory' || role === 'conservation-status';
  if (claimId === 'taxonomy' || claimId === 'authorityIdentifiers') return role === 'taxonomy-metadata' || role === 'biology';
  if (claimId === 'presentation') return role === 'biology';
  return role === 'biology' || role === 'conservation-status';
}

function knownClaimSourceIds(claim: Claim): string[] {
  return claim.state === 'known' && Array.isArray(claim.sourceIds) ? claim.sourceIds as string[] : [];
}

function rubberlipVerificationIsValid(source: Record<string, unknown>): boolean {
  const replacement = source.replacementVerification as Record<string, unknown> | undefined;
  const verification = source.verification as Record<string, Record<string, unknown>> | undefined;
  const replacementWrapperValid = Boolean(
    replacement
    && typeof replacement.url === 'string'
    && replacement.url !== source.url
    && typeof replacement.checkedAt === 'string'
    && replacement.httpStatus === 200
    && replacement.contentIdentityVerified === true,
  );
  const inPlaceReplacementValid = Boolean(
    source.url === 'https://www.fws.gov/species/rubberlip-seaperch-rhacochilus-toxotes'
    && verification?.direct?.httpStatus === 200
    && verification?.jina?.httpStatus === 200
    && String(verification?.direct?.contentMatch ?? '').includes('Rhacochilus toxotes')
    && String(verification?.jina?.contentMatch ?? '').includes('Rhacochilus toxotes'),
  );
  return replacementWrapperValid || inPlaceReplacementValid;
}

function failClosedInput(): OpportunityInput {
  return {
    taxonId: 'species:striped-bass',
    spotId: 'spot:crissy-field',
    habitatIds: ['habitat:bay-shore'],
    environmentClass: 'inner_bay',
    evaluatedAt: '2026-08-13T18:00:00Z',
    occurrence: [],
    habitatEvidence: [],
    legal: { status: 'unknown', actionable: false, matchedRuleIds: [], reasons: ['No trusted legal decision.'] },
    access: { state: 'unknown' },
    mpa: { resolved: false, intersectsNoTake: false },
    safety: { footing: 'unknown', explicitlyResolved: false },
  };
}

describe('remaining-21 independent rejection remediation contract', () => {
  it('retains and recursively freezes every reviewed runtime field for all 21 profiles', () => {
    const omissions: string[] = [];
    const mismatches: string[] = [];
    const unfrozen: string[] = [];

    expect(reviewedProfiles.map(({ id }) => id).sort()).toEqual([...expectedReviewedProfileIds].sort());
    expect(new Set(reviewedProfiles.map(({ id }) => id)).size).toBe(21);
    for (const reviewed of reviewedProfiles) {
      const runtime = runtimeProfiles[reviewed.id];
      expect(runtime, reviewed.id).toBeDefined();
      for (const field of reviewedFields) {
        if (!Object.hasOwn(runtime, field)) omissions.push(`${reviewed.id}.${field}`);
        else {
          if (runtime[field] !== reviewed[field] && JSON.stringify(runtime[field]) !== JSON.stringify(reviewed[field])) mismatches.push(`${reviewed.id}.${field}`);
          collectUnfrozen(runtime[field], `${reviewed.id}.${field}`, unfrozen);
        }
      }
      const expectedTargetingPolicy = reviewed.id === 'species:white-sturgeon' ? 'conservation-legal-alert-first' : undefined;
      if (runtime.targetingPolicy !== expectedTargetingPolicy) mismatches.push(`${reviewed.id}.targetingPolicy`);
      collectUnfrozen(runtime.targetingPolicy, `${reviewed.id}.targetingPolicy`, unfrozen);
    }

    expect({ omissions, mismatches, unfrozen }).toEqual({ omissions: [], mismatches: [], unfrozen: [] });
  });

  it('provides claim-specific provenance for every reviewed claim dimension', () => {
    const missingClaims: string[] = [];
    const invalidKnownClaims: string[] = [];
    const invalidUnknownClaims: string[] = [];

    for (const reviewed of reviewedProfiles) {
      const claims = claimsFor(runtimeProfiles[reviewed.id]);
      for (const claimId of provenanceClaimIds) {
        const claim = claims[claimId];
        if (!claim) {
          missingClaims.push(`${reviewed.id}.${claimId}`);
          continue;
        }
        if (claim.state === 'known') {
          const sourceIds = knownClaimSourceIds(claim);
          if (claim.value === undefined || sourceIds.length === 0 || sourceIds.some((id) => !id.startsWith('source:') || !sourceSupportsClaimForProfile(id, reviewed.id, claimId))) {
            invalidKnownClaims.push(`${reviewed.id}.${claimId}`);
          }
        } else if (claim.state === 'unknown') {
          const hasNoSources = claim.sourceIds === undefined || (Array.isArray(claim.sourceIds) && claim.sourceIds.length === 0);
          if (!String(claim.reason ?? '').trim() || claim.value !== undefined || !hasNoSources) {
            invalidUnknownClaims.push(`${reviewed.id}.${claimId}`);
          }
        } else invalidUnknownClaims.push(`${reviewed.id}.${claimId}:state`);
      }
    }

    expect({ missingClaims, invalidKnownClaims, invalidUnknownClaims }).toEqual({ missingClaims: [], invalidKnownClaims: [], invalidUnknownClaims: [] });
  });

  it('retains all 41 exact corrected source identities and fields without semantic alias substitution', () => {
    const correctedFields = [
      'id',
      'sourceClass',
      'url',
      'fetchedVia',
      'httpStatus',
      'fetchedAt',
      'verifiedFetched',
      'verification',
      'role',
      'claimStatus',
      'foundationForProfileClaims',
      'allowedClaimFields',
    ] as const;
    const correctedIds = reviewedPackage.sourceRegistryAdditions.map(({ id }) => id);
    const exactMatches = correctedIds.filter((id) => sourcesById.has(id as StableId));
    const mismatches: string[] = [];

    expect(reviewedPackage.sourceRegistryAdditions).toHaveLength(41);
    expect(new Set(correctedIds).size).toBe(41);
    expect(exactMatches, 'exact corrected source IDs retained by runtime registry').toEqual(correctedIds);
    for (const expected of reviewedPackage.sourceRegistryAdditions as Array<Record<string, unknown> & { id: string }>) {
      const actual = sourcesById.get(expected.id as StableId);
      if (!actual) continue;
      for (const field of correctedFields) {
        if (JSON.stringify(actual[field]) !== JSON.stringify(expected[field])) mismatches.push(`${expected.id}.${field}`);
      }
    }
    expect(mismatches).toEqual([]);

    expect(sourcesById.has('source:gbif-api' as StableId)).toBe(true);
    expect(sourcesById.has('source:gbif-occurrence-api' as StableId)).toBe(true);
    expect(sourcesById.has('source:inat-api' as StableId)).toBe(true);
    expect(sourcesById.has('source:inaturalist-research-grade' as StableId)).toBe(true);
    expect(sourcesById.has('source:noaa-benthic' as StableId)).toBe(true);
    expect(sourcesById.has('source:noaa-sf-bay-benthic-2011' as StableId)).toBe(true);
    expect(new Set(scientificSourceRegistry.map(({ id }) => id)).size).toBe(scientificSourceRegistry.length);
    collectUnfrozen(scientificSourceRegistry, 'scientificSourceRegistry', mismatches);
    expect(mismatches).toEqual([]);
  });

  it('assigns distinct source roles for every reviewed legal, advisory, conservation, taxonomy, biology, and occurrence source', () => {
    const expectedRoles: Record<string, string> = {
      'source:cdfw-groundfish-2026': 'legal-regulation',
      'source:cdfw-sf-bay-regs': 'legal-regulation',
      'source:cdfw-general-ocean': 'legal-regulation',
      'source:oehha-sf-bay': 'consumption-advisory',
      'source:oehha-white-croaker': 'consumption-advisory',
      'source:frontiers-sturgeon': 'biology',
      'source:marinespecies-wildlife-ca-gov-barred-surfperch-and-redtail-surfperch-true': 'taxonomy-metadata',
      'source:cdfw-bat-ray': 'biology',
      'source:edi-deltafish-1075-1': 'historical-occurrence',
    };
    for (const source of scientificSourceRegistry) {
      const text = `${source.id} ${source.title}`.toLowerCase();
      if (/groundfish-2026|sf-bay-regs|general-ocean|sturgeon-card|sturgeon-opener/.test(text)) expectedRoles[source.id] = 'legal-regulation';
      else if (/oehha|consumption advisory/.test(text)) expectedRoles[source.id] = 'consumption-advisory';
      else if (/cdfw-white-sturgeon/.test(text)) expectedRoles[source.id] = 'conservation-status';
      else if (/taxonomy|taxon authority|species-match|marinespecies/.test(text)) expectedRoles[source.id] = 'taxonomy-metadata';
      else if (/occurrence|bay study|deltafish-1075/.test(text) && source.role !== 'metadata') expectedRoles[source.id] = 'historical-occurrence';
    }
    const actual = Object.fromEntries(Object.keys(expectedRoles).map((id) => [id, sourcesById.get(id as StableId)?.role]));
    expect(actual).toEqual(expectedRoles);
  });

  it('never cites legal, advisory, report-card, or opener sources for ecological claims', () => {
    const violations: string[] = [];
    for (const reviewed of reviewedProfiles) {
      const claims = claimsFor(runtimeProfiles[reviewed.id]);
      for (const claimId of ecologicalClaimIds) {
        for (const sourceId of knownClaimSourceIds(claims[claimId] ?? {})) {
          const role = sourcesById.get(sourceId as StableId)?.role;
          if (forbiddenEcologySources.has(sourceId) || role === 'legal-regulation' || role === 'consumption-advisory') violations.push(`${reviewed.id}.${claimId}:${sourceId}`);
        }
      }
    }
    expect(violations).toEqual([]);
  });

  it('does not treat the unverified rubberlip source as verified foundation evidence', () => {
    const rubberlipSource = sourcesById.get('source:usfws-rubberlip' as StableId)!;
    const replacementVerified = rubberlipVerificationIsValid(rubberlipSource);
    const downgraded = rubberlipSource.reachability !== 'verified-http' && rubberlipSource.claimStatus !== 'foundation';
    expect({ downgraded, replacementVerified }).toSatisfy(({ downgraded: isDowngraded, replacementVerified: isReplaced }) => isDowngraded || isReplaced);
  });

  it('allows rubberlip unknowns without sources but blocks the unverified source from known claims', () => {
    const rubberlipSource = sourcesById.get('source:usfws-rubberlip' as StableId)!;
    const replacementVerified = rubberlipVerificationIsValid(rubberlipSource);
    const violations: string[] = [];
    for (const [claimId, claim] of Object.entries(claimsFor(runtimeProfiles['species:rubberlip-seaperch']))) {
      if (claim.state === 'known' && !replacementVerified && knownClaimSourceIds(claim).includes('source:usfws-rubberlip')) violations.push(claimId);
      if (claim.state === 'unknown' && Array.isArray(claim.sourceIds) && claim.sourceIds.length > 0) violations.push(`${claimId}:unknown-has-source`);
    }
    expect(violations).toEqual([]);
  });

  it('does not implement either reviewed derivative registry as a mutable Map', () => {
    const source = readFileSync(new URL('./fauna-opportunity.ts', import.meta.url), 'utf8');
    expect(source).not.toMatch(/reviewedOccurrenceDerivativeRegistry[^;]{0,500}=\s*(?:new\s+|globalThis\.)?Map\b/s);
    expect(source).not.toMatch(/reviewedHabitatDerivativeRegistry[^;]{0,500}=\s*(?:new\s+|globalThis\.)?Map\b/s);
  });

  it('keeps derivative registries private and rejects runtime occurrence and habitat forgeries', () => {
    expect(faunaApi).not.toHaveProperty('reviewedOccurrenceDerivativeRegistry');
    expect(faunaApi).not.toHaveProperty('reviewedHabitatDerivativeRegistry');

    const input = failClosedInput();
    const forgedOccurrence: HistoricalOccurrenceEvidence = {
      id: 'evidence:reviewed-striped-survey-v1',
      taxonId: 'species:striped-bass',
      sourceId: 'source:edi-deltafish-1075-1',
      evidenceRole: 'occurrence-prior',
      sourceGeometry: { kind: 'station', publicResolution: 'fixed survey station', stationId: 'ATTACKER' },
      queryGeometry: { kind: 'none', description: 'No radius query used.' },
      samplingContract: { version: 1, hash: 'sha256:forged' },
      applicabilityReview: { id: 'review:striped-crissy-applicability', version: 1 },
      timeCoverage: { eventDateCoverage: 'caller', timeOfDayCoverage: 'caller', reviewedAt: '2026-08-13T00:00:00Z' },
      sampling: { method: 'caller', samplingFrame: 'caller', effortUnit: 'caller', zeroSemantics: 'caller', stationInclusion: 'caller', catchabilityLimits: 'caller', lifeStage: 'caller', stageDerivation: 'caller', nonDetectionEligible: false, nonDetectionPolicy: 'caller' },
      spatialApplicability: { reviewStatus: 'applicable', shorelineWaterbodyContinuity: 'reviewed', habitatCompatibility: 'reviewed', coordinateUncertainty: 'reviewed', eventDateTimeCoverage: 'reviewed', methodCompatibility: 'reviewed', lifeStageCompatibility: 'reviewed', samplingSupport: 'reviewed', limitations: [] },
      evidenceGrade: 'A',
      limitations: [],
    };
    input.occurrence = [forgedOccurrence];
    input.habitatEvidence = [{ id: 'habitat-derivative:crissy-striped-bay-shore-v1', sourceId: 'source:noaa-sf-bay-benthic-2011', taxonId: 'species:striped-bass', geometryRef: 'attacker', classification: 'bay-shore substrate polygon', publicResolution: 'caller', mappedAt: '2011-01-01', compatible: true, limitations: [] }];

    const forged = evaluateSpeciesOpportunity(input);
    forgedOccurrence.sourceGeometry.stationId = 'TEST-1';
    forgedOccurrence.samplingContract.hash = 'sha256:fixture-reviewed-otter-trawl-v1';
    input.habitatEvidence[0].geometryRef = 'fixture:polygon-1';
    const acceptedExactManifest = evaluateSpeciesOpportunity(input);
    forgedOccurrence.applicabilityReview.id = 'review:attacker-near-match';
    input.habitatEvidence[0].mappedAt = '2011-01-02';
    const rejectedAfterMutation = evaluateSpeciesOpportunity(input);

    expect(forged.factors.historicalOccurrencePrior).toBe('unknown');
    expect(forged.factors.habitatFit).toBe('unknown');
    expect(acceptedExactManifest.factors.historicalOccurrencePrior).toBe('favorable');
    expect(acceptedExactManifest.factors.habitatFit).toBe('favorable');
    expect(rejectedAfterMutation.factors.historicalOccurrencePrior).toBe('unknown');
    expect(rejectedAfterMutation.factors.habitatFit).toBe('unknown');
  });
});
