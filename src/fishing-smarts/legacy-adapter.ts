import type { Spot } from '../data';
import type { StableId } from './index';

export const toStableSpotId = (legacyId: string): StableId => `spot:${legacyId}`;

export interface LegacySpotAdapterRecord {
  foundationId: StableId;
  legacy: Spot;
}

/** Read-only bridge: the current UI continues consuming the exact legacy Spot
 * objects while normalized records are researched and accepted independently. */
export function adaptLegacySpots(legacySpots: readonly Spot[]): LegacySpotAdapterRecord[] {
  return legacySpots.map((legacy) => ({ foundationId: toStableSpotId(legacy.id), legacy }));
}
