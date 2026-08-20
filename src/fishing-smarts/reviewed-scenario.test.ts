import { describe, expect, it } from 'vitest';
import * as reviewedApi from './reviewed-scenario';
import * as safetyApi from './safety-provenance';
import * as legalApi from './legal-provenance';

const scenarioId = 'scenario:crissy-striped-validation-v1' as const;

describe('closed reviewed certification scenario', () => {
  it('proves the conditional presentation path with complete provenance', () => {
    const result = reviewedApi.evaluateReviewedScenario(scenarioId);
    expect(result).toMatchObject({ status: 'scored', opportunityBand: 'conditional', safetyStatus: 'safe', livePresenceClaim: false });
    expect(result?.presentations).toHaveLength(1);
    expect(result?.evidenceCoverageDimensions).toEqual({
      occurrenceSpatialApplicability: 'complete', mappedHabitatGeometry: 'complete', freshConditions: 'complete', exactLegalAccessMpa: 'complete', safety: 'complete',
    });
    expect(result?.presentations[0].claimProvenance).toBeDefined();
    for (const claim of Object.values(result!.presentations[0].claimProvenance)) {
      expect(claim.limitations.length).toBeGreaterThan(0);
      expect(Array.isArray(claim.sourceIds)).toBe(true);
    }
    expect(result?.caveats.join(' ')).toMatch(/NON-LIVE|engine reachability|not real Crissy occurrence|not current fishing opportunity/i);
  });

  it('derives the standard factor contributions through the evaluator path', () => {
    const result = reviewedApi.evaluateReviewedScenario(scenarioId)!;
    expect(result.contributions).toEqual([
      { factor: 'historical occurrence prior', effect: 'favorable', reason: 'All explicit spatial-applicability dimensions were reviewed for source evidence.' },
      { factor: 'mapped habitat geometry', effect: 'favorable', reason: 'A cited mapped habitat geometry is compatible.' },
      { factor: 'condition suitability', effect: 'mixed', reason: 'Complete fresh conditions permit assessment but do not imply feeding.' },
      { factor: 'shore presentation control', effect: 'favorable', reason: 'Safety and control gates passed.' },
    ]);
    expect(result.presentations[0].why).toBe('Qualitative field option for mobile predator with habitat- and season-dependent forage; field heuristics are excluded from scientific evidence coverage.');
  });

  it('fails closed for unknown IDs and cannot mutate or replay the fixture', () => {
    expect(reviewedApi.evaluateReviewedScenario('scenario:unknown' as never)).toBeUndefined();
    const first = reviewedApi.evaluateReviewedScenario(scenarioId)!;
    expect(() => { first.taxonId = 'species:california-halibut'; }).toThrow();
    expect(() => { first.presentations[0].lureFamily = 'attacker'; }).toThrow();
    const second = reviewedApi.evaluateReviewedScenario(scenarioId)!;
    expect(second.taxonId).toBe('species:striped-bass');
    expect(second.presentations[0].lureFamily).not.toBe('attacker');
  });

  it('does not expose generic safety mints', () => {
    expect(safetyApi).not.toHaveProperty('produceFootingInspection');
    expect(safetyApi).not.toHaveProperty('trustedFootingInspection');
    expect(safetyApi).not.toHaveProperty('trustedConditionSnapshot');
    expect(safetyApi).not.toHaveProperty('issueReviewedScenarioSafety');
    expect(legalApi).not.toHaveProperty('issueReviewedScenarioLegalDecision');
    expect(Object.keys(reviewedApi)).toEqual(['evaluateReviewedScenario']);
  });
});
