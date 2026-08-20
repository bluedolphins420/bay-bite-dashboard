import { describe, expect, it } from 'vitest';
import { evaluateEligibility, evaluateRecommendation, type EligibilityContext, type FishingSmartsDataset } from './index';
import { regulationsScienceDataset } from './regulations-science-data';

const checkedAt = '2030-01-01T00:00:00.000Z';
const context: EligibilityContext = {
  at: '2030-01-02T12:00:00.000Z',
  spotId: 'spot:test-shore',
  speciesId: 'species:test-fish',
  regulatoryAreaId: 'area:test-zone',
  fishingMode: 'shore',
  methodIds: ['method:hook-line'],
  gearIds: ['gear:single-hook'],
  mpaIds: []
};

function dataset(rule: FishingSmartsDataset['rules'][number]): FishingSmartsDataset {
  return {
    schemaVersion: 1,
    generatedAt: checkedAt,
    sources: [{ id: 'source:test-official', owner: 'official-agency', title: 'Neutral official fixture', url: 'https://example.test/official', checkedAt }],
    spots: [{ id: 'spot:test-shore', name: 'Test Shore', habitatIds: ['habitat:test-sand'], regulatoryAreaIds: ['area:test-zone'], mpaIds: [], sensorIds: [] }],
    species: [{ id: 'species:test-fish', commonName: 'Test fish', habitatIds: ['habitat:test-sand'] }],
    habitats: [{ id: 'habitat:test-sand', name: 'Test sand' }],
    regulatoryAreas: [{ id: 'area:test-zone', name: 'Test zone' }],
    rules: [rule],
    notices: [],
    mpas: [],
    sensors: [],
    spotSpeciesEvidence: []
  };
}

describe('eligibility hard gates', () => {
  it('reproduces the Aug 13 critical legal statuses and keeps notices non-actionable', () => {
    const base: EligibilityContext = { ...context, at: '2026-08-13T12:00:00-07:00', spotId: 'spot:verified-shore', fishingMode: 'shore', methodIds: [], gearIds: [], mpaIds: [], areaGeometryResolved: true, mpaGeometryResolved: true };
    const status = (species: string, area: string) => evaluateEligibility(regulationsScienceDataset, { ...base, speciesId: `species:${species}`, regulatoryAreaId: `area:${area}` }).status;
    expect(status('white-sturgeon', 'sf-bay')).toBe('closed');
    expect(status('dungeness-crab', 'sf-coast')).toBe('closed');
    expect(status('dungeness-crab', 'sf-bay')).toBe('no-take');
    expect(status('chinook-salmon', 'sf-coast')).toBe('special-notice');
    expect(status('rock-crab', 'sf-bay')).toBe('special-notice');
    expect(status('surfperch', 'sf-coast')).toBe('open');
    expect(status('surfperch', 'sf-bay')).toBe('open');
  });

  it('fails closed on unresolved area or required exact MPA geometry', () => {
    const base: EligibilityContext = { ...context, at: '2026-08-13T12:00:00-07:00', speciesId: 'species:striped-bass', regulatoryAreaId: 'area:sf-bay', spotId: 'spot:legacy', mpaIds: [] };
    expect(evaluateEligibility(regulationsScienceDataset, { ...base, areaGeometryResolved: false, mpaGeometryResolved: true })).toMatchObject({ status: 'unknown', actionable: false });
    expect(evaluateEligibility(regulationsScienceDataset, { ...base, areaGeometryResolved: true, mpaGeometryResolved: false })).toMatchObject({ status: 'unknown', actionable: false });
  });

  it('preserves the shore groundfish restrictions instead of treating the exemption as open', () => {
    const result = evaluateEligibility(regulationsScienceDataset, { ...context, at: '2026-08-13T12:00:00-07:00', spotId: 'spot:coast', speciesId: 'species:rockfish', regulatoryAreaId: 'area:sf-coast', areaGeometryResolved: true, mpaGeometryResolved: true });
    expect(result.status).toBe('restricted');
    expect(result.actionable).toBe(false);
    expect(regulationsScienceDataset.rules.find((rule) => rule.id === result.matchedRuleIds[0])?.warning).toMatch(/prohibited species|MPA|hook/i);
  });
  it('makes a matching closed rule non-actionable', () => {
    const result = evaluateEligibility(dataset({
      id: 'rule:test-closed',
      speciesIds: ['species:test-fish'],
      regulatoryAreaIds: ['area:test-zone'],
      statuses: ['closed'],
      fishingModes: ['shore'],
      effectiveFrom: '2029-01-01T00:00:00.000Z',
      effectiveTo: '2030-12-31T23:59:59.000Z',
      dynamic: false,
      sourceIds: ['source:test-official'],
      checkedAt
    }), context);

    expect(result.status).toBe('closed');
    expect(result.actionable).toBe(false);
    expect(result.matchedRuleIds).toEqual(['rule:test-closed']);
  });

  it('makes an exact no-take MPA rule override an otherwise open area rule', () => {
    const data = dataset({
      id: 'rule:test-open', speciesIds: ['species:test-fish'], regulatoryAreaIds: ['area:test-zone'], statuses: ['open'], fishingModes: ['shore'],
      effectiveFrom: '2029-01-01T00:00:00.000Z', dynamic: false, sourceIds: ['source:test-official'], checkedAt
    });
    data.mpas = [{ id: 'mpa:test-reserve', name: 'Test reserve', regulatoryAreaIds: ['area:test-zone'] }];
    data.rules.push({
      id: 'rule:test-no-take', speciesIds: ['species:test-fish'], regulatoryAreaIds: ['area:test-zone'], mpaIds: ['mpa:test-reserve'], statuses: ['no-take'], fishingModes: ['shore'],
      effectiveFrom: '2029-01-01T00:00:00.000Z', dynamic: false, sourceIds: ['source:test-official'], checkedAt
    });

    const result = evaluateEligibility(data, { ...context, mpaIds: ['mpa:test-reserve'] });
    expect(result.status).toBe('no-take');
    expect(result.actionable).toBe(false);
  });

  it('fails closed when a matching dynamic rule is stale', () => {
    const result = evaluateEligibility(dataset({
      id: 'rule:test-dynamic', speciesIds: ['species:test-fish'], regulatoryAreaIds: ['area:test-zone'], statuses: ['open'], fishingModes: ['shore'],
      effectiveFrom: '2029-01-01T00:00:00.000Z', dynamic: true, maxAgeHours: 24, sourceIds: ['source:test-official'], checkedAt: '2029-12-01T00:00:00.000Z'
    }), context);
    expect(result.status).toBe('unknown');
    expect(result.actionable).toBe(false);
    expect(result.reasons.join(' ')).toMatch(/stale/i);
  });

  it('fails closed when a matching dynamic legal snapshot is future-dated', () => {
    const result = evaluateEligibility(dataset({
      id: 'rule:test-future', speciesIds: ['species:test-fish'], regulatoryAreaIds: ['area:test-zone'], statuses: ['open'], fishingModes: ['shore'],
      effectiveFrom: '2029-01-01T00:00:00.000Z', dynamic: true, maxAgeHours: 24, sourceIds: ['source:test-official'], checkedAt: '2030-01-03T00:00:00.000Z'
    }), context);
    expect(result).toMatchObject({ status: 'unknown', actionable: false });
    expect(result.reasons.join(' ')).toMatch(/future|invalid/i);
  });

  it('surfaces a fresh matching special notice as non-actionable and ignores an expired notice', () => {
    const data = dataset({
      id: 'rule:test-open', speciesIds: ['species:test-fish'], regulatoryAreaIds: ['area:test-zone'], statuses: ['open'], fishingModes: ['shore'],
      effectiveFrom: '2029-01-01T00:00:00.000Z', dynamic: false, sourceIds: ['source:test-official'], checkedAt
    });
    data.notices.push({
      id: 'notice:test-fresh', speciesIds: ['species:test-fish'], regulatoryAreaIds: ['area:test-zone'], statuses: ['special-notice'], fishingModes: ['shore'],
      effectiveFrom: '2030-01-02T00:00:00.000Z', expiresAt: '2030-01-03T00:00:00.000Z', dynamic: true, maxAgeHours: 48, sourceIds: ['source:test-official'], checkedAt
    }, {
      id: 'notice:test-expired', speciesIds: ['species:test-fish'], regulatoryAreaIds: ['area:test-zone'], statuses: ['closed'], fishingModes: ['shore'],
      effectiveFrom: '2029-12-01T00:00:00.000Z', expiresAt: '2030-01-01T00:00:00.000Z', dynamic: true, maxAgeHours: 1000, sourceIds: ['source:test-official'], checkedAt
    });
    const result = evaluateEligibility(data, context);
    expect(result.status).toBe('special-notice');
    expect(result.actionable).toBe(false);
    expect(result.matchedRuleIds).not.toContain('notice:test-expired');
  });

  it('allows a shore-only rule without treating it as a boat rule', () => {
    const data = dataset({
      id: 'rule:test-shore-exemption', speciesIds: ['species:test-fish'], regulatoryAreaIds: ['area:test-zone'], statuses: ['open'], fishingModes: ['shore'], methodIds: ['method:hook-line'], gearIds: ['gear:single-hook'],
      effectiveFrom: '2029-01-01T00:00:00.000Z', dynamic: false, sourceIds: ['source:test-official'], checkedAt
    });
    expect(evaluateEligibility(data, context).status).toBe('open');
    expect(evaluateEligibility(data, { ...context, fishingMode: 'boat' }).status).toBe('unknown');
  });

  it('requires local evidence and habitat compatibility before recommendation', () => {
    const data = dataset({
      id: 'rule:test-open', speciesIds: ['species:test-fish'], regulatoryAreaIds: ['area:test-zone'], statuses: ['open'], fishingModes: ['shore'],
      effectiveFrom: '2029-01-01T00:00:00.000Z', dynamic: false, sourceIds: ['source:test-official'], checkedAt
    });
    expect(evaluateRecommendation(data, context)).toMatchObject({ actionable: false, biologySuitable: false });
    data.spotSpeciesEvidence.push({ id: 'evidence:test-local', spotId: context.spotId, speciesId: context.speciesId, habitatIds: ['habitat:test-sand'], confidence: 'medium', sourceIds: ['source:test-official'], reviewedAt: checkedAt });
    expect(evaluateRecommendation(data, context)).toMatchObject({ actionable: true, biologySuitable: true, legal: { status: 'open' } });
    data.spotSpeciesEvidence[0].habitatIds = ['habitat:test-rock'];
    expect(evaluateRecommendation(data, context)).toMatchObject({ actionable: false, biologySuitable: false, legal: { status: 'open' } });
  });
});
