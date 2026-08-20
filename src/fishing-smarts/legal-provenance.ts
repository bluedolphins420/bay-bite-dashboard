import type { Spot } from '../data';
import { evaluateEligibility, type EligibilityResult, type FishingMode, type StableId } from './index';
import { regulationsScienceDataset } from './regulations-science-data';

const issuedLegalDecisions = new WeakSet<object>();

export interface LegalDecision extends EligibilityResult {
  readonly decisionId?: StableId;
  readonly engineVersion?: string;
  readonly inputIdentity?: string;
  readonly evaluatedAt?: string;
}

export interface LegalDecisionIdentity {
  spotId: StableId;
  taxonId: StableId;
  evaluatedAt: string;
  fishingMode: 'shore';
}

const coastSpotIds = new Set(['ocean-beach', 'baker-beach', 'linda-mar', 'pacifica-pier', 'mussel-rock', 'pillar-point', 'bodega-jetty', 'china-beach', 'lands-end', 'rodeo-beach', 'muir-beach', 'stinson-beach', 'bolinas-beach', 'montara-state-beach', 'gray-whale-cove', 'half-moon-bay-state-beach', 'redondo-beach-hmb', 'pomponio-state-beach', 'pescadero-state-beach', 'san-gregorio-state-beach', 'bean-hollow', 'pacifica-rockaway', 'sharp-park-beach']);
const carquinezSpotIds = new Set(['martinez-marina', 'benicia-pier', 'vallejo-waterfront']);

function regulatoryAreaFor(spot: Spot): StableId {
  if (spot.region === 'Carquinez/Delta' || spot.region === 'Western Delta' || spot.region === 'Suisun Marsh') return 'area:carquinez-delta';
  if (spot.environmentClass === 'open_coast' || spot.environmentClass === 'golden_gate') return 'area:sf-coast';
  if (carquinezSpotIds.has(spot.id)) return 'area:carquinez-delta';
  return coastSpotIds.has(spot.id) ? 'area:sf-coast' : 'area:sf-bay';
}

/**
 * Trusted legal producer. It evaluates the immutable reviewed regulation dataset
 * itself; callers provide identity inputs, never an EligibilityResult to bless.
 */
export function produceCurrentSpotLegalDecision(
  spot: Spot,
  taxonId: StableId,
  evaluatedAt: string,
  fishingMode: FishingMode = 'shore',
): LegalDecision {
  const spotId = (spot.stableId ?? `spot:${spot.id}`) as StableId;
  const area = regulatoryAreaFor(spot);
  const result = evaluateEligibility(regulationsScienceDataset, {
    at: evaluatedAt,
    spotId,
    speciesId: taxonId,
    regulatoryAreaId: area,
    fishingMode,
    methodIds: [],
    gearIds: [],
    mpaIds: [],
    areaGeometryResolved: area !== 'area:carquinez-delta',
    mpaGeometryResolved: false,
  });
  const inputIdentity = `${spotId}|${taxonId}|${fishingMode}|${evaluatedAt}`;
  const decision = Object.freeze({
    ...result,
    matchedRuleIds: Object.freeze([...result.matchedRuleIds]),
    reasons: Object.freeze([...result.reasons]),
    decisionId: `legal-decision:${spotId.slice(5)}-${taxonId.slice(8)}-${evaluatedAt}` as StableId,
    engineVersion: 'eligibility-engine:1',
    inputIdentity,
    evaluatedAt,
  }) as LegalDecision;
  issuedLegalDecisions.add(decision);
  return decision;
}

export function isVerifiedLegalDecision(decision: LegalDecision, identity: LegalDecisionIdentity): boolean {
  return issuedLegalDecisions.has(decision)
    && decision.engineVersion === 'eligibility-engine:1'
    && decision.evaluatedAt === identity.evaluatedAt
    && decision.inputIdentity === `${identity.spotId}|${identity.taxonId}|${identity.fishingMode}|${identity.evaluatedAt}`
    && Boolean(decision.decisionId)
    && decision.matchedRuleIds.every((id) => id.startsWith('rule:'));
}
