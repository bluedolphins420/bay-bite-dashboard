import { describe, expect, it } from 'vitest';
import { allSpecies, getSpotIntel, isActionableSpot, regions, researchSources, speciesProfiles, spotCountLabel, spots } from './data';
import { currentSpotLegality, rankableSpeciesForSpot } from './fishing-smarts/app-integration';

describe('spot enrichment invariants', () => {
  it('offers every populated catalog region in the existing region filter', () => {
    expect([...regions].sort()).toEqual([...new Set(spots.map((spot) => spot.region))].sort());
  });
  it('uses the 101-record accepted research projection without recommending legal targets', () => {
    expect(spots).toHaveLength(101);
    for (const spot of spots) expect(rankableSpeciesForSpot(spot)).toEqual([]);
  });

  it('marks Carquinez and exact-MPA-dependent legacy legality unknown while retaining regional warnings', () => {
    const martinez = spots.find((spot) => spot.id === 'martinez-shoreline')!;
    expect(currentSpotLegality(martinez).every((item) => item.status === 'unknown')).toBe(true);
    const coast = spots.find((spot) => spot.id === 'ocean-beach')!;
    const surfperch = currentSpotLegality(coast, new Date('2026-08-13T19:00:00.000Z')).find((item) => item.label === 'Surfperch')!;
    expect(surfperch.status).toBe('unknown');
    expect(surfperch.regionalStatus).toBe('open');
    expect(surfperch.warning).toMatch(/open|verify/i);
  });

  it('evaluates legal freshness at invocation time rather than a frozen launch date', () => {
    const coast = spots.find((spot) => spot.id === 'ocean-beach')!;
    const historical = currentSpotLegality(coast, new Date('2026-08-13T19:00:00.000Z'));
    const stale = currentSpotLegality(coast, new Date('2035-08-13T19:00:00.000Z'));
    expect(historical.some((item) => item.regionalStatus !== 'unknown')).toBe(true);
    expect(stale.every((item) => item.regionalStatus === 'unknown')).toBe(true);
  });

  it('carries identification caveats for every aggregate legacy label', () => {
    for (const label of ['Surfperch', 'Rockfish', 'Flounder/Sole'] as const) {
      const spot = spots.find((candidate) => candidate.species.includes(label))!;
      expect(currentSpotLegality(spot).find((item) => item.label === label)?.identificationCaveat).toMatch(/identify/i);
    }
  });
  it('keeps every researched spot uniquely identifiable and complete', () => {
    expect(spots.length).toBeGreaterThan(0);
    expect(new Set(spots.map((spot) => spot.id)).size).toBe(spots.length);

    for (const spot of spots) {
      expect(spot.id.trim()).not.toBe('');
      expect(spot.lat).toBeGreaterThanOrEqual(-90);
      expect(spot.lat).toBeLessThanOrEqual(90);
      expect(spot.lng).toBeGreaterThanOrEqual(-180);
      expect(spot.lng).toBeLessThanOrEqual(180);
      expect(spot.score).toBeGreaterThanOrEqual(0);
      expect(spot.score).toBeLessThanOrEqual(100);
      expect(spot.species.length).toBeGreaterThan(0);
      expect(spot.tactics.length).toBeGreaterThan(0);
      expect(spot.accessNote.trim()).not.toBe('');
      expect(spot.sourceNote.trim()).not.toBe('');
    }
  });

  it('covers every supported species with a usable profile', () => {
    expect(Object.keys(speciesProfiles).sort()).toEqual([...allSpecies].sort());
    for (const profile of Object.values(speciesProfiles)) {
      expect(profile.habitat.trim()).not.toBe('');
      expect(profile.rigs.length).toBeGreaterThan(0);
      expect(profile.baits.length).toBeGreaterThan(0);
      expect(profile.releaseOrRegulation.trim()).not.toBe('');
    }
  });

  it('generates complete intelligence for every spot', () => {
    for (const spot of spots) {
      const intel = getSpotIntel(spot);
      expect(intel.setup.trim()).not.toBe('');
      expect(intel.primaryRigs.length).toBeGreaterThan(0);
      expect(intel.baitPlan.length).toBeGreaterThan(0);
      expect(intel.speciesNotes.map((note) => note.species)).toEqual(spot.species);
      expect(intel.legalChecklist.length).toBeGreaterThan(0);
      expect(intel.safetyChecklist.length).toBeGreaterThan(0);
    }
  });

  it('does not turn a broad CDFW mention into blanket official confidence', () => {
    const lindaMar = spots.find((spot) => spot.id === 'linda-mar');
    expect(getSpotIntel(lindaMar!).confidence).not.toBe('Officially listed');
  });

  it('derives the researched-spot label from the dataset', () => {
    expect(spotCountLabel(spots)).toBe(`${spots.length} researched spots`);
    expect(spotCountLabel(spots.slice(0, 2))).toBe('2 researched spots');
  });

  it('provides recheckable source URLs instead of descriptions alone', () => {
    expect(researchSources.length).toBeGreaterThan(0);
    for (const source of researchSources) {
      expect(source.label.trim()).not.toBe('');
      expect(source.url).toMatch(/^https:\/\//);
    }
  });

  it('keeps all rejected/closed records out of the accepted application catalog', () => {
    const pacifica = spots.find((spot) => spot.id === 'pacifica-pier');
    const berkeley = spots.find((spot) => spot.id === 'berkeley-municipal-pier-closed');
    const lindaMar = spots.find((spot) => spot.id === 'linda-mar');

    expect(pacifica).toBeUndefined();
    expect(berkeley).toBeUndefined();
    expect(isActionableSpot(lindaMar!)).toBe(true);
  });
});
