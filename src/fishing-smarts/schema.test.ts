import { describe, expect, it } from 'vitest';
import { spots } from '../data';
import { adaptLegacySpots, toStableSpotId } from './legacy-adapter';
import { validateFishingSmartsDataset, type FishingSmartsDataset } from './index';
import { regulationsScienceDataset } from './regulations-science-data';

const emptyDataset = (): FishingSmartsDataset => ({
  schemaVersion: 1,
  generatedAt: '2030-01-01T00:00:00.000Z',
  sources: [], spots: [], species: [], habitats: [], regulatoryAreas: [], rules: [], notices: [], mpas: [], sensors: [], spotSpeciesEvidence: []
});

describe('versioned normalized data boundary', () => {
  it('accepts the verified regulations/science bundle with complete inventory and official legal ownership', () => {
    const data = validateFishingSmartsDataset(regulationsScienceDataset);
    expect(data.species).toHaveLength(22);
    expect(data.rules).toHaveLength(66);
    expect(data.regulatoryAreas).toHaveLength(3);
    expect(data.species.every((species) => species.biologicalProfile && (species.sourceIds?.length ?? 0) > 0)).toBe(true);
    expect(data.rules.every((rule) => rule.warning && rule.staleAfter && rule.sourceIds.length > 0)).toBe(true);
    expect(data.rules.every((rule) => rule.sourceIds.every((id) => data.sources.find((source) => source.id === id)?.owner === 'official-agency'))).toBe(true);
  });

  it('rejects non-HTTPS/invalid source dates, incomplete biology, and legal records without official ownership', () => {
    const insecure = structuredClone(regulationsScienceDataset);
    insecure.sources[0].url = 'http://example.test';
    expect(() => validateFishingSmartsDataset(insecure)).toThrow(/HTTPS/i);
    const badDate = structuredClone(regulationsScienceDataset);
    badDate.sources[0].checkedAt = 'yesterday';
    expect(() => validateFishingSmartsDataset(badDate)).toThrow(/checkedAt/i);
    const noBiology = structuredClone(regulationsScienceDataset);
    noBiology.species[0].biologicalProfile!.forage = '';
    expect(() => validateFishingSmartsDataset(noBiology)).toThrow(/biological/i);
    const unofficial = structuredClone(regulationsScienceDataset);
    unofficial.sources.find((source) => source.id === unofficial.rules[0].sourceIds[0])!.owner = 'reviewed-secondary';
    expect(() => validateFishingSmartsDataset(unofficial)).toThrow(/official/i);
  });
  it('validates a structurally empty schema-v1 migration snapshot', () => {
    expect(validateFishingSmartsDataset(emptyDataset())).toEqual(emptyDataset());
  });

  it('rejects unknown schema versions, duplicate IDs, and broken references', () => {
    const wrongVersion = { ...emptyDataset(), schemaVersion: 2 };
    expect(() => validateFishingSmartsDataset(wrongVersion)).toThrow(/schemaVersion/i);

    const duplicate = emptyDataset();
    duplicate.habitats = [{ id: 'habitat:test', name: 'One' }, { id: 'habitat:test', name: 'Two' }];
    expect(() => validateFishingSmartsDataset(duplicate)).toThrow(/duplicate/i);

    const broken = emptyDataset();
    broken.spots = [{ id: 'spot:test', name: 'Test', habitatIds: ['habitat:missing'], regulatoryAreaIds: [], mpaIds: [], sensorIds: [] }];
    expect(() => validateFishingSmartsDataset(broken)).toThrow(/habitat:missing/i);
  });

  it('keeps the complete legacy UI dataset available during migration', () => {
    const adapted = adaptLegacySpots(spots);
    expect(adapted).toHaveLength(101);
    expect(adapted.map((item) => item.legacy)).toEqual(spots);
    expect(adapted[0].foundationId).toBe(toStableSpotId(spots[0].id));
  });
});
