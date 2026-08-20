import { expect } from 'vitest';
import { exactTaxonScience, type ExactTaxonScienceRecord, type OpportunityInput } from './fauna-opportunity';
import { researchCatalog } from './research-catalog';
import type { StableId } from './index';

export const canonicalTaxa = researchCatalog.species;
export const canonicalTaxonIds = canonicalTaxa.map(({ id }) => id as StableId);
export const habitatIds = researchCatalog.habitats.map(({ id }) => id as StableId);
export const zeroEdgeTaxonIds = [
  'species:kelp-greenling',
  'species:pile-perch',
  'species:rubberlip-seaperch',
  'species:walleye-surfperch',
  'species:white-sturgeon',
] as const;

export type ExpansionScienceRecord = ExactTaxonScienceRecord & {
  claims?: Record<string, {
    state: 'known' | 'unknown';
    value?: unknown;
    sourceIds?: readonly string[];
    reason?: string;
  }>;
  targetingPolicy?: string;
};

export function requireCompleteScience(): Record<string, ExpansionScienceRecord> {
  const science = exactTaxonScience as unknown as Record<string, ExpansionScienceRecord>;
  const actual = Object.keys(science).sort();
  const expected: string[] = [...canonicalTaxonIds].sort();
  const missing = expected.filter((id) => !actual.includes(id));
  const extra = actual.filter((id) => !expected.includes(id));
  expect(
    { actualCount: actual.length, missing, extra },
    'exactTaxonScience expansion prerequisite: RED must be caused only by the 21 canonical profiles not implemented yet',
  ).toEqual({ actualCount: 24, missing: [], extra: [] });
  return science;
}

export function expectRecursivelyFrozen(value: unknown, path = 'record'): void {
  if (value === null || typeof value !== 'object') return;
  expect(Object.isFrozen(value), `${path} must be immutable`).toBe(true);
  for (const [key, nested] of Object.entries(value)) expectRecursivelyFrozen(nested, `${path}.${key}`);
}

export function unknownInput(taxonId: StableId): OpportunityInput {
  return {
    taxonId,
    spotId: 'spot:ocean-beach',
    habitatIds: [],
    environmentClass: 'unknown',
    evaluatedAt: '2026-08-13T18:00:00Z',
    occurrence: [],
    habitatEvidence: [],
    legal: { status: 'unknown', actionable: false, matchedRuleIds: [], reasons: ['Exact legal rule unresolved.'] },
    access: { state: 'unknown' },
    mpa: { resolved: false, intersectsNoTake: false },
    safety: { footing: 'unknown', explicitlyResolved: false },
  };
}
