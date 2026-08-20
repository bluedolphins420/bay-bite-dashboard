import type { Species, Spot } from '../data';
import { evaluateEligibility, type EligibilityStatus, type StableId } from './index';
import { regulationsScienceDataset } from './regulations-science-data';

const speciesIds: Record<Species, string> = {
  Surfperch: 'surfperch', 'Striped Bass': 'striped-bass', Halibut: 'california-halibut', Rockfish: 'rockfish', Cabezon: 'cabezon', Lingcod: 'lingcod', Greenling: 'greenling', Jacksmelt: 'jacksmelt', 'White Croaker': 'white-croaker', 'Leopard Shark': 'leopard-shark', 'Bat Ray': 'bat-ray', 'Smoothhound Shark': 'smoothhound-shark', Sturgeon: 'white-sturgeon', 'Flounder/Sole': 'flatfish', Salmon: 'chinook-salmon', 'Dungeness Crab': 'dungeness-crab', 'Rock Crab': 'rock-crab'
};

const coastSpotIds = new Set(['ocean-beach', 'baker-beach', 'linda-mar', 'pacifica-pier', 'mussel-rock', 'pillar-point', 'bodega-jetty', 'china-beach', 'lands-end', 'rodeo-beach', 'muir-beach', 'stinson-beach', 'bolinas-beach', 'montara-state-beach', 'gray-whale-cove', 'half-moon-bay-state-beach', 'redondo-beach-hmb', 'pomponio-state-beach', 'pescadero-state-beach', 'san-gregorio-state-beach', 'bean-hollow', 'pacifica-rockaway', 'sharp-park-beach']);
const carquinezSpotIds = new Set(['martinez-marina', 'benicia-pier', 'vallejo-waterfront']);

export interface SpotLegalItem {
  label: Species;
  status: EligibilityStatus;
  regionalStatus: EligibilityStatus;
  actionable: boolean;
  matchedRuleIds: StableId[];
  warning: string;
  checkedAt: string;
  sourceUrl?: string;
  dailyBagLimit?: string;
  minimumSize?: string;
  gearRules: string[];
  identificationCaveat?: string;
  biologySuitabilityOnly: true;
  livePresenceVerified: false;
}

function areaForSpot(spot: Spot): StableId {
  if (spot.region === 'Carquinez/Delta' || spot.region === 'Western Delta' || spot.region === 'Suisun Marsh') return 'area:carquinez-delta';
  if (spot.environmentClass === 'open_coast' || spot.environmentClass === 'golden_gate') return 'area:sf-coast';
  if (carquinezSpotIds.has(spot.id)) return 'area:carquinez-delta';
  return coastSpotIds.has(spot.id) ? 'area:sf-coast' : 'area:sf-bay';
}

export function currentSpotLegality(spot: Spot, at: Date | string = new Date()): SpotLegalItem[] {
  const area = areaForSpot(spot);
  const atIso = at instanceof Date ? at.toISOString() : at;
  return spot.species.map((label) => {
    const speciesId = `species:${speciesIds[label]}` as StableId;
    const context = { at: atIso, spotId: (spot.stableId ?? `spot:${spot.id}`) as StableId, speciesId, regulatoryAreaId: area, fishingMode: 'shore' as const, methodIds: [], gearIds: [], mpaIds: [], areaGeometryResolved: area !== 'area:carquinez-delta', mpaGeometryResolved: false };
    const regional = evaluateEligibility(regulationsScienceDataset, { ...context, mpaGeometryResolved: true });
    const exact = evaluateEligibility(regulationsScienceDataset, context);
    const rule = regulationsScienceDataset.rules.find((candidate) => candidate.id === regional.matchedRuleIds[0]);
    const source = regulationsScienceDataset.sources.find((candidate) => candidate.id === rule?.sourceIds[0]);
    const profile = regulationsScienceDataset.species.find((candidate) => candidate.id === speciesId);
    return { label, status: exact.status, regionalStatus: regional.status, actionable: exact.actionable, matchedRuleIds: [...exact.matchedRuleIds], warning: rule?.warning ?? exact.reasons.join(' '), checkedAt: rule?.checkedAt ?? regulationsScienceDataset.generatedAt, sourceUrl: source?.url, dailyBagLimit: rule?.dailyBagLimit, minimumSize: rule?.minimumSize, gearRules: rule?.gearRules ?? [], identificationCaveat: profile?.identificationCaveat, biologySuitabilityOnly: true, livePresenceVerified: false };
  });
}

/** Existing spot labels are regional/editorial suitability priors, not accepted
 * local presence evidence. Until exact geometry and evidence edges are reviewed,
 * no species can enter an actionable ranking. */
export function rankableSpeciesForSpot(spot: Spot): Species[] {
  return currentSpotLegality(spot).filter((item) => item.actionable && item.livePresenceVerified).map((item) => item.label);
}
