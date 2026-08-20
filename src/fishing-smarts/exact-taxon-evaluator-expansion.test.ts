import { describe, expect, it } from 'vitest';
import { spots } from '../data';
import { evaluateSpeciesOpportunity } from './fauna-opportunity';
import { produceCurrentSpotLegalDecision } from './legal-provenance';
import {
  canonicalTaxonIds,
  requireCompleteScience,
  unknownInput,
  zeroEdgeTaxonIds,
} from './exact-taxon-expansion.contract-helper';

const aggregateRuleTokens = /surfperch|rockfish|flatfish|greenling|smoothhound|rock-crab/i;

describe('all-24 evaluator fail-closed contract', () => {
  it('recognizes every canonical profile while unsupported condition factors remain unknown', () => {
    requireCompleteScience();
    for (const taxonId of canonicalTaxonIds) {
      const result = evaluateSpeciesOpportunity(unknownInput(taxonId));
      expect(result.reasons.join(' '), taxonId).not.toMatch(/not yet modeled/i);
      expect(result.factors.conditionFit, taxonId).toBe('unknown');
      expect(result.opportunityBand, taxonId).toBeUndefined();
      expect(result.presentations, taxonId).toEqual([]);
    }
  });

  it('rejects prototype-chain property names as unsupported exact taxa', () => {
    for (const taxonId of ['toString', '__proto__', 'constructor']) {
      const input = unknownInput(taxonId as `species:${string}`);
      expect(() => evaluateSpeciesOpportunity(input), taxonId).not.toThrow();
      expect(evaluateSpeciesOpportunity(input).reasons.join(' '), taxonId).toMatch(/not yet modeled/i);
    }
  });

  it('keeps all five zero-edge taxa occurrence-blocked and non-presentable despite profile existence', () => {
    requireCompleteScience();
    for (const taxonId of zeroEdgeTaxonIds) {
      const result = evaluateSpeciesOpportunity(unknownInput(taxonId));
      expect(result.factors.historicalOccurrencePrior, taxonId).toBe('unknown');
      expect(result.evidenceCoverageDimensions.occurrenceSpatialApplicability, taxonId).toBe('missing');
      expect(result.opportunityBand, taxonId).toBeUndefined();
      expect(result.presentations, taxonId).toEqual([]);
      expect(result.livePresenceClaim, taxonId).toBe(false);
    }
  });

  it('keeps white sturgeon conservation/legal-alert-first and never target-presentable without gates', () => {
    const science = requireCompleteScience();
    expect(science['species:white-sturgeon'].targetingPolicy).toBe('conservation-legal-alert-first');
    const result = evaluateSpeciesOpportunity(unknownInput('species:white-sturgeon'));
    expect(result.status).not.toBe('scored');
    expect(result.presentations).toEqual([]);
    expect(`${result.reasons.join(' ')} ${result.caveats.join(' ')}`).toMatch(/conservation|legal alert/i);
  });

  it('does not inherit aggregate family rules for exact legal mapping', () => {
    requireCompleteScience();
    const oceanBeach = spots.find(({ id }) => id === 'ocean-beach')!;
    for (const taxonId of canonicalTaxonIds) {
      const decision = produceCurrentSpotLegalDecision(oceanBeach, taxonId, '2026-08-13T18:00:00Z');
      expect(decision.matchedRuleIds.filter((id) => aggregateRuleTokens.test(id)), taxonId).toEqual([]);
    }
  });

  it('cannot change evaluator results through deep mutation of any canonical profile', () => {
    const science = requireCompleteScience();
    for (const taxonId of canonicalTaxonIds) {
      const input = unknownInput(taxonId);
      const before = structuredClone(evaluateSpeciesOpportunity(input));
      const record = science[taxonId];
      expect(() => { record.habitat.compatible[0] = 'habitat:attacker'; }, taxonId).toThrow();
      expect(() => { record.evidence[0].supports = 'attacker'; }, taxonId).toThrow();
      expect(evaluateSpeciesOpportunity(input), taxonId).toEqual(before);
    }
  });
});
