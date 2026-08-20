import { describe, expect, it } from 'vitest';
import {
  evaluateSpeciesOpportunity,
  exactTaxonScience,
  type HistoricalOccurrenceEvidence,
  type OpportunityInput,
} from './fauna-opportunity';
import { scientificIngestionContracts, scientificSourceRegistry } from './scientific-sources';
import { produceCurrentSpotLegalDecision } from './legal-provenance';
import { spots } from '../data';

const reviewedOccurrence: HistoricalOccurrenceEvidence = {
  id: 'evidence:reviewed-striped-survey-v1',
  taxonId: 'species:striped-bass',
  sourceId: 'source:edi-deltafish-1075-1',
  evidenceRole: 'occurrence-prior',
  sourceGeometry: { kind: 'station', publicResolution: 'fixed survey station', stationId: 'TEST-1' },
  queryGeometry: { kind: 'none', description: 'No radius query used.' },
  samplingContract: { version: 1, hash: 'sha256:fixture-reviewed-otter-trawl-v1' },
  applicabilityReview: { id: 'review:striped-crissy-applicability', version: 1 },
  timeCoverage: { start: '1980-01-01', end: '2024-12-31', eventDateCoverage: 'monthly samples in source period', timeOfDayCoverage: 'sampling times retained by derivative', reviewedAt: '2026-08-13T00:00:00Z' },
  sampling: {
    method: 'otter trawl', samplingFrame: 'fixed open-water stations', effortUnit: 'tow', zeroSemantics: 'sample-level zero after station/sample/catch join',
    stationInclusion: 'TEST-1 included by derivative manifest', catchabilityLimits: 'Trawl selectivity; shore edge is not sampled.',
    lifeStage: 'mixed/unspecified', stageDerivation: 'No stage derivation applied.', nonDetectionEligible: false,
    nonDetectionPolicy: 'Non-detection cannot establish absence outside matched gear, effort, season, habitat, and life stage.',
  },
  spatialApplicability: {
    reviewStatus: 'applicable', shorelineWaterbodyContinuity: 'reviewed', habitatCompatibility: 'reviewed', coordinateUncertainty: 'reviewed',
    eventDateTimeCoverage: 'reviewed', methodCompatibility: 'reviewed', lifeStageCompatibility: 'reviewed', samplingSupport: 'reviewed',
    reviewedAt: '2026-08-13T00:00:00Z', limitations: ['Station evidence is regional historical occurrence, not current spot presence.'],
  },
  evidenceGrade: 'B',
  limitations: ['Historical occurrence only; not current presence, abundance, seasonality, or a catch forecast.'],
};

const mappedHabitat = {
  id: 'habitat-derivative:crissy-striped-bay-shore-v1' as const,
  sourceId: 'source:noaa-sf-bay-benthic-2011' as const,
  taxonId: 'species:striped-bass' as const,
  geometryRef: 'fixture:polygon-1', classification: 'bay-shore substrate polygon', publicResolution: 'regional polygon', mappedAt: '2011-01-01',
  compatible: true, limitations: ['Historical regional baseline; not current microhabitat.'],
};

const crissy = spots.find((spot) => spot.id === 'crissy-field')!;

const baseInput = (): OpportunityInput => ({
  taxonId: 'species:striped-bass', spotId: 'spot:crissy-field', habitatIds: ['habitat:bay-shore'], environmentClass: 'inner_bay', evaluatedAt: '2026-08-13T18:00:00Z',
  occurrence: [structuredClone(reviewedOccurrence)], habitatEvidence: [mappedHabitat],
  legal: produceCurrentSpotLegalDecision(crissy, 'species:striped-bass', '2026-08-13T18:00:00Z'),
  access: { state: 'open' }, mpa: { resolved: true, intersectsNoTake: false }, safety: { footing: 'unknown', explicitlyResolved: false },
});

const requiredPresentationClaims = ['lureFamily', 'forageMatch', 'profileSize', 'depthZone', 'retrieve', 'colorContrast', 'vibration', 'rigWeight'] as const;

describe('canonical exact-taxon science and source integrity', () => {
  it('keeps taxon-specific habitat and registers every claim citation truthfully', () => {
    expect(exactTaxonScience['species:california-halibut'].habitat.compatible).not.toContain('habitat:tidal-slough');
    expect(exactTaxonScience['species:barred-surfperch'].habitat.compatible).toEqual(['habitat:surf']);
    const registryIds = new Set(scientificSourceRegistry.map((source) => source.id));
    for (const record of Object.values(exactTaxonScience)) for (const citation of record.evidence) expect(registryIds.has(citation.sourceId)).toBe(true);
    for (const source of scientificSourceRegistry) expect(source.title.toLowerCase()).not.toMatch(/^official (api|dataset):/);
    expect(scientificSourceRegistry.map((source) => source.sourceType)).toEqual(expect.arrayContaining([
      'official-api',
      'official-monitoring-dataset',
      'official-agency-geospatial-product',
      'archived-research-dataset',
      'authoritative-agency-publication',
      'peer-reviewed-paper',
      'maintained-package',
      'secondary-metadata',
    ]));
    expect(scientificSourceRegistry).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: 'source:edi-deltafish-1075-1', sourceType: 'archived-research-dataset' }),
      expect.objectContaining({ id: 'source:cdfw-bay-study', sourceType: 'official-monitoring-dataset' }),
      expect.objectContaining({ id: 'source:cdfw-california-halibut-esr', sourceType: 'authoritative-agency-publication' }),
      expect.objectContaining({ id: 'source:wildlife-ca-gov-fishing-inland-striped-bass', sourceType: 'authoritative-agency-publication' }),
      expect.objectContaining({ id: 'source:noaa-sf-bay-benthic-2011', sourceType: 'official-agency-geospatial-product' }),
      expect.objectContaining({ id: 'source:opc-seafloor-mapping', sourceType: 'authoritative-agency-publication' }),
      expect.objectContaining({ id: 'source:noaa-ndbc', sourceType: 'official-monitoring-dataset' }),
    ]));
    for (const sourceId of [
      'source:edi-deltafish-1075-1',
      'source:deltafish-package',
      'source:marinespecies-wildlife-ca-gov-barred-surfperch-and-redtail-surfperch-true',
      'source:inaturalist-research-grade',
    ]) {
      const source = scientificSourceRegistry.find(({ id }) => id === sourceId);
      expect(source?.sourceType).not.toMatch(/^official-/);
      expect(`${source?.title} ${source?.publisher}`).not.toMatch(/\b(CDFW|NOAA|official agency|Delta Stewardship Council)\b/i);
    }
  });

  it('deep-freezes reviewed science and source records against nested mutation', () => {
    const science = exactTaxonScience['species:striped-bass'];
    const before = structuredClone(science);
    expect(Object.isFrozen(exactTaxonScience)).toBe(true);
    expect(Object.isFrozen(science)).toBe(true);
    expect(Object.isFrozen(science.lifeStages)).toBe(true);
    expect(Object.isFrozen(science.lifeStages[0].waterAndSalinity)).toBe(true);
    expect(Object.isFrozen(science.habitat.compatible)).toBe(true);
    expect(Object.isFrozen(science.conditionResponses)).toBe(true);
    expect(Object.isFrozen(science.shorePresentations[0].claimProvenance.lureFamily.sourceIds)).toBe(true);
    expect(Object.isFrozen(science.shorePresentations[0].claimProvenance.lureFamily.limitations)).toBe(true);
    expect(Object.isFrozen(science.evidence)).toBe(true);
    const beforeResult = evaluateSpeciesOpportunity(baseInput());
    expect(() => { science.lifeStages[0].waterAndSalinity[0] = 'attacker'; }).toThrow();
    expect(() => { science.shorePresentations[0].lureFamily = 'attacker'; }).toThrow();
    expect(science).toEqual(before);
    expect(evaluateSpeciesOpportunity(baseInput())).toEqual(beforeResult);

    const source = scientificSourceRegistry[0];
    const sourceBefore = structuredClone(source);
    expect(Object.isFrozen(scientificSourceRegistry)).toBe(true);
    expect(Object.isFrozen(source)).toBe(true);
    expect(() => { source.limitations = 'attacker'; }).toThrow();
    expect(source).toEqual(sourceBefore);
  });

  it('defines method-aware occurrence ingestion without allowing generic pooled season or absence inference', () => {
    expect(scientificIngestionContracts.occurrence.requiredFields).toEqual(expect.arrayContaining([
      'sourceGeometry', 'queryGeometry', 'samplingFrame', 'effortUnit', 'zeroSemantics', 'stationInclusion', 'catchabilityLimits', 'stageDerivation', 'nonDetectionEligible', 'nonDetectionPolicy', 'spatialApplicability',
    ]));
    expect(scientificIngestionContracts.occurrence.allowedInferencesForUnprocessedCommunityEvidence).toEqual(['local-corroboration']);
    expect(scientificIngestionContracts.occurrence.pooledGenericSeasonCurves).toBe(false);
  });
});

describe('evaluateSpeciesOpportunity strict gates', () => {
  it('never trusts caller-asserted occurrence role or applicability for a fabricated radius record', () => {
    const input = baseInput();
    input.occurrence = [{
      ...structuredClone(reviewedOccurrence), id: 'evidence:fabricated-radius', evidenceRole: 'occurrence-prior',
      sourceId: 'source:inaturalist-research-grade', sourceGeometry: { kind: 'unknown', publicResolution: 'caller assertion' },
      queryGeometry: { kind: 'radius', radiusKm: 5, description: 'Caller-asserted radius evidence.' },
    }];
    const result = evaluateSpeciesOpportunity(input);
    expect(result.factors.historicalOccurrencePrior).toBe('unknown');
    expect(result.corroborationOnly).toHaveLength(1);
    expect(result.corroborationOnly[0].displayStatus).toBe('reviewed local corroboration only');
    expect(result).toMatchObject({ status: 'safety-blocked', opportunityBand: undefined, presentations: [], evidenceCoverage: 'low' });
  });

  it('requires every explicit spatial-applicability review dimension before favorable occurrence', () => {
    for (const dimension of ['shorelineWaterbodyContinuity','habitatCompatibility','coordinateUncertainty','eventDateTimeCoverage','methodCompatibility','lifeStageCompatibility','samplingSupport'] as const) {
      const input = baseInput();
      input.occurrence![0].spatialApplicability[dimension] = 'unknown';
      expect(evaluateSpeciesOpportunity(input).factors.historicalOccurrencePrior, dimension).toBe('unknown');
    }
  });

  it('never trusts a fabricated compatible habitat flag or a broad spot label', () => {
    const input = baseInput();
    input.habitatEvidence = [{ ...mappedHabitat, id: 'habitat-derivative:fake', compatible: true }];
    const result = evaluateSpeciesOpportunity(input);
    expect(result.factors.habitatFit).toBe('unknown');
    expect(result).toMatchObject({ status: 'safety-blocked', opportunityBand: undefined, presentations: [], evidenceCoverage: 'low' });
  });

  it('preserves legal actionable and matched rule IDs and blocks open-but-non-actionable', () => {
    const input = baseInput();
    const result = evaluateSpeciesOpportunity(input);
    expect(result.legalEligibility).toEqual({ status: input.legal.status, actionable: input.legal.actionable, matchedRuleIds: input.legal.matchedRuleIds, reasons: input.legal.reasons });
    expect(result).toMatchObject({ factors: { legalGate: 'unknown' }, presentations: [] });
  });

  it('blocks a caller-fabricated open actionable legal object without verified decision provenance', () => {
    const input = baseInput();
    input.legal = { status: 'open', actionable: true, matchedRuleIds: ['rule:fake-open'], reasons: [] };
    const result = evaluateSpeciesOpportunity(input);
    expect(result).toMatchObject({ status: 'safety-blocked', factors: { legalGate: 'unknown' }, opportunityBand: undefined, presentations: [], evidenceCoverage: 'low' });
  });

  it('uses evidenceCoverage semantics and never lets grade alone produce high coverage', () => {
    const controlled = evaluateSpeciesOpportunity(baseInput());
    expect(controlled.factors).toMatchObject({ historicalOccurrencePrior: 'favorable', habitatFit: 'favorable' });
    expect(controlled.evidenceCoverageDimensions).toMatchObject({ occurrenceSpatialApplicability: 'complete', mappedHabitatGeometry: 'complete' });
    const gradeOnly = baseInput();
    gradeOnly.occurrence![0].evidenceGrade = 'A';
    gradeOnly.habitatEvidence = [];
    gradeOnly.mpa.resolved = false;
    gradeOnly.safety = { footing: 'unknown', explicitlyResolved: false };
    expect(evaluateSpeciesOpportunity(gradeOnly)).toMatchObject({ evidenceCoverage: 'low', presentations: [] });
  });

  it('has a separate unsafe safety gate that suppresses opportunity and presentations', () => {
    for (const mutate of [
      (input: OpportunityInput) => { input.conditions = { observedAt: input.evaluatedAt, wave: { state: 'rough', sourceId: 'source:noaa-ndbc' } }; },
      (input: OpportunityInput) => { input.conditions = { observedAt: input.evaluatedAt, wind: { state: 'strong', sourceId: 'source:noaa-coops-api' } }; },
      (input: OpportunityInput) => { input.access.state = 'closed'; },
      (input: OpportunityInput) => { input.safety = { footing: 'unsafe', explicitlyResolved: true }; },
    ]) {
      const input = baseInput(); mutate(input);
      expect(evaluateSpeciesOpportunity(input)).toMatchObject({ status: 'safety-blocked', safetyStatus: 'unsafe', opportunityBand: undefined, presentations: [] });
    }
  });

  it('suppresses actionable output when safety is unknown unless explicitly resolved', () => {
    const input = baseInput();
    input.safety = { footing: 'unknown', explicitlyResolved: false };
    expect(evaluateSpeciesOpportunity(input)).toMatchObject({ status: 'safety-blocked', safetyStatus: 'unknown', opportunityBand: undefined, presentations: [] });
  });

  it('never trusts caller-fabricated safe footing provenance', () => {
    const input = baseInput();
    input.safety = { footing: 'safe', explicitlyResolved: true };
    const result = evaluateSpeciesOpportunity(input);
    expect(result).toMatchObject({ status: 'safety-blocked', safetyStatus: 'unknown', opportunityBand: undefined, presentations: [], evidenceCoverage: 'low' });
  });

  it('keeps the controlled reviewed scientific fixture positive without minting live safety trust', () => {
    const result = evaluateSpeciesOpportunity(baseInput());
    expect(result.factors).toMatchObject({ historicalOccurrencePrior: 'favorable', habitatFit: 'favorable' });
    expect(result).toMatchObject({ status: 'safety-blocked', safetyStatus: 'unknown', presentations: [] });
    expect(requiredPresentationClaims).toHaveLength(8);
  });

  it('does not establish absence seasonality or abundance from unprocessed community evidence', () => {
    const input = baseInput();
    input.occurrence = [];
    const result = evaluateSpeciesOpportunity(input);
    expect(result.factors.historicalOccurrencePrior).toBe('unknown');
    expect(result.caveats.join(' ')).toMatch(/does not establish absence|seasonality|abundance/i);
    expect(result).not.toHaveProperty('seasonCurve');
  });

  it('returns unsupported exact taxa without family inference or legacy claims', () => {
    const input = baseInput(); input.taxonId = 'species:surfperch';
    const result = evaluateSpeciesOpportunity(input);
    expect(result).toMatchObject({ status: 'insufficient-data', opportunityBand: undefined, presentations: [], livePresenceClaim: false });
    expect(JSON.stringify(result)).not.toMatch(/bestWindow|biteReason|modelScore|solunar|barometr|40.?80|61\s*°?F/i);
  });
});
