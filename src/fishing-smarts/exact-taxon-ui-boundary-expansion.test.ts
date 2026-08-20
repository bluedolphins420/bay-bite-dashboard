import { describe, expect, it } from 'vitest';
import { spots } from '../data';
import { buildSelectedWaterOpportunity } from './selected-water-opportunity';
import { evidenceForSpotId } from './research-catalog';
import { requireCompleteScience } from './exact-taxon-expansion.contract-helper';

const noLiveTelemetry = {
  status: 'unavailable' as const, observedAt: undefined, windSpeedKt: 'Unavailable', waveHeightFt: 'Unavailable',
  observations: {
    level: { availability: 'unavailable' as const, freshness: 'unavailable' as const },
    wind: { availability: 'unavailable' as const, freshness: 'unavailable' as const },
    buoy: { availability: 'unavailable' as const, freshness: 'unavailable' as const },
    wave: { availability: 'unavailable' as const, freshness: 'unavailable' as const },
    temperature: { availability: 'unavailable' as const, freshness: 'unavailable' as const },
  },
  stationName: 'unavailable', buoyId: 'unavailable', waveLabel: 'Unavailable', message: 'No reviewed live telemetry.',
};

describe('all-24 selected-water and production boundary contract', () => {
  it('retains exact canonical labels in selected-water projection rather than aggregate UI labels', () => {
    requireCompleteScience();
    for (const spot of spots) {
      const expected = new Set(evidenceForSpotId(spot.stableId ?? `spot:${spot.id}`).map(({ speciesId }) => speciesId));
      const projected = buildSelectedWaterOpportunity(spot, noLiveTelemetry, '2026-08-13T18:00:00Z');
      const projectedById = new Map(projected.map((item) => [item.taxonId, item]));
      for (const taxonId of expected) {
        expect(projectedById.has(taxonId), `${spot.stableId} must retain ${taxonId}`).toBe(true);
        const item = projectedById.get(taxonId)!;
        expect(item.displayLabel, taxonId).toBe(item.ecology ? requireCompleteScience()[taxonId].commonName : item.displayLabel);
      }
    }
  });
});
