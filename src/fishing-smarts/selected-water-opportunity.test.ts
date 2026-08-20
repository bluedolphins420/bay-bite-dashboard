import { describe, expect, it } from 'vitest';
import { spots } from '../data';
import { exactTaxonScience } from './fauna-opportunity';
import { researchCatalog } from './research-catalog';
import { buildScientificStatusExport, buildSelectedWaterOpportunity, occurrenceEvidenceOverlays, reviewedOccurrenceRecords } from './selected-water-opportunity';

const conditions = {
  status: 'live' as const, observedAt: '2026-08-13T17:30:00Z', windSpeedKt: '7 kt', waveHeightFt: '2.0 ft',
  observations: {
    level: { availability: 'available' as const, freshness: 'live' as const }, wind: { availability: 'available' as const, freshness: 'live' as const }, buoy: { availability: 'available' as const, freshness: 'live' as const }, wave: { availability: 'available' as const, freshness: 'live' as const }, temperature: { availability: 'unavailable' as const, freshness: 'unavailable' as const },
  },
  stationName: 'fixture', buoyId: 'fixture', waveLabel: 'Significant wave height', message: 'fixture',
};

describe('selected-water strict scientific integration', () => {
  it('projects only unique canonical exact evidence taxa at Linda Mar and every selected water', () => {
    const canonicalCatalogIds = new Set(researchCatalog.species.map(({ id }) => id));
    const canonicalScienceIds = new Set(Object.keys(exactTaxonScience));
    const aggregateSyntheticIds = new Set([
      'species:greenling',
      'species:flounder-sole',
      'species:surfperch',
      'species:rockfish',
    ]);

    for (const spot of spots) {
      const projected = buildSelectedWaterOpportunity(spot, conditions, '2026-08-13T18:00:00Z');
      const taxonIds = projected.map(({ taxonId }) => taxonId);
      expect(new Set(taxonIds).size, `${spot.id}: taxon IDs must be unique`).toBe(taxonIds.length);
      for (const taxonId of taxonIds) {
        expect(canonicalCatalogIds.has(taxonId), `${spot.id}: catalog exact ID ${taxonId}`).toBe(true);
        expect(canonicalScienceIds.has(taxonId), `${spot.id}: science exact ID ${taxonId}`).toBe(true);
        expect(aggregateSyntheticIds.has(taxonId), `${spot.id}: aggregate synthetic ID ${taxonId}`).toBe(false);
      }
    }

    const lindaMar = spots.find((spot) => spot.id === 'linda-mar')!;
    const projected = buildSelectedWaterOpportunity(lindaMar, conditions, '2026-08-13T18:00:00Z');
    const taxonIds = projected.map(({ taxonId }) => taxonId);
    expect(taxonIds.filter((id) => id === 'species:barred-surfperch')).toHaveLength(1);
    for (const expectedId of ['species:barred-surfperch', 'species:redtail-surfperch']) {
      expect(taxonIds, `Linda Mar must retain ${expectedId}`).toContain(expectedId);
    }
  });

  it('keeps catalog radius evidence corroboration-only and not a favorable prior', () => {
    const oceanBeach = spots.find((spot) => spot.id === 'ocean-beach')!;
    const barred = buildSelectedWaterOpportunity(oceanBeach, conditions, '2026-08-13T18:00:00Z').find((item) => item.taxonId === 'species:barred-surfperch')!;
    expect(barred.displayLabel).toBe('Barred surfperch');
    expect(barred.result.factors.historicalOccurrencePrior).toBe('unknown');
    expect(barred.result.corroborationOnly.length).toBeGreaterThan(0);
    expect(barred.result.corroborationOnly[0].displayStatus).toBe('reviewed local corroboration only');
  });

  it('preserves source and query geometry separately and never fabricates source fish-location centers', () => {
    expect(reviewedOccurrenceRecords.length).toBeGreaterThan(0);
    for (const record of reviewedOccurrenceRecords) {
      expect(record.queryGeometry).toMatchObject({ kind: 'radius', radiusKm: 5 });
      expect(record.sourceGeometry).not.toHaveProperty('center');
      expect(record).not.toHaveProperty('spotId');
      expect(record.evidenceRole).toBe('community-corroboration');
      expect(record.spatialApplicability.reviewStatus).toBe('not-reviewed');
    }
    for (const overlay of occurrenceEvidenceOverlays) {
      expect(overlay.geometry).toMatchObject({ kind: 'query-radius' });
      expect(overlay.geometry).not.toHaveProperty('center');
      expect(overlay.legend).toMatch(/query area.*not source fish-location geometry/i);
      expect(overlay.displayStatus).toBe('reviewed local corroboration only');
    }
  });

  it('preserves eligibility actionable and matched rule IDs end-to-end', () => {
    const crissy = spots.find((spot) => spot.id === 'crissy-field')!;
    const results = buildSelectedWaterOpportunity(crissy, conditions, '2026-08-13T18:00:00Z');
    for (const item of results) {
      expect(item.result.legalEligibility.actionable).toBe(false);
      expect(item.result.legalEligibility.matchedRuleIds).toEqual(expect.any(Array));
      expect(item.result.presentations).toEqual([]);
    }
  });

  it('does not reuse family legality to authorize an exact barred-surfperch taxon', () => {
    const oceanBeach = spots.find((spot) => spot.id === 'ocean-beach')!;
    const barred = buildSelectedWaterOpportunity(oceanBeach, conditions, '2026-08-13T18:00:00Z').find((item) => item.taxonId === 'species:barred-surfperch')!;
    expect(barred.result.legalEligibility).toMatchObject({ actionable: false, matchedRuleIds: [] });
    expect(barred.result.factors.legalGate).not.toBe('open');
  });

  it('keeps the live UI low or unknown with safety and missing dimensions explicit', () => {
    const crissy = spots.find((spot) => spot.id === 'crissy-field')!;
    for (const item of buildSelectedWaterOpportunity(crissy, conditions, '2026-08-13T18:00:00Z')) {
      expect(item.result.evidenceCoverage).not.toBe('high');
      expect(item.result.presentations).toEqual([]);
      expect(item.result.missingInputs).toEqual(expect.arrayContaining(['mapped habitat geometry', 'exact MPA geometry']));
      expect(['safe', 'unsafe', 'unknown']).toContain(item.result.safetyStatus);
    }
  });

  it('exports corroboration, evidence coverage, safety, missing dimensions, legal identity, and claim provenance without legacy claims', () => {
    const crissy = spots.find((spot) => spot.id === 'crissy-field')!;
    const exported = buildScientificStatusExport(crissy, conditions, '2026-08-13T18:00:00Z');
    const serialized = JSON.stringify(exported);
    expect(serialized).toMatch(/corroborationOnly|evidenceCoverage|safetyStatus|missingInputs|matchedRuleIds|claimProvenance/);
    expect(serialized).not.toMatch(/bestWindow|biteReason|modelScore|solunar\s+(?:score|window|multiplier)|barometr(?:ic|y)\s+(?:score|threshold|window)|40.?80\s*Hz|61\s*°?F/i);
  });
});
