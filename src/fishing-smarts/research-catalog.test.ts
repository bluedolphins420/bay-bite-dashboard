import { describe, expect, it } from 'vitest';
import { evidenceDisclosure, evidenceForSpotId, researchCatalog, researchSourceForId, researchSpots, sensorDefinitions } from './research-catalog';
import { spots } from '../data';
import { rankableSpeciesForSpot } from './app-integration';

describe('verified research catalog application boundary', () => {
  it('exposes exactly 101 accepted spots and excludes every rejected or pending record', () => {
    expect(researchSpots).toHaveLength(101);
    expect(spots).toHaveLength(101);
    expect(researchCatalog).not.toHaveProperty('rejectedOrPending');
  });

  it('does not advertise operational metrics from sensors whose live products are unsupported', () => {
    const unsupportedTemperature = researchSpots.flatMap((spot) => spot.sensorBindings
      .filter((item) => item.metric === 'temperature' && item.availability === 'unavailable' && item.warning.includes('no supported current realtime temperature endpoint'))
      .map((item) => ({ spot, item })));
    expect(unsupportedTemperature).toHaveLength(6);
    for (const { spot, item } of unsupportedTemperature) {
      expect(item.sensorId, `${spot.id} temperature`).toBeUndefined();
      expect(item.distanceKm, `${spot.id} temperature`).toBeUndefined();
      expect(item.maxAgeMinutes, `${spot.id} temperature`).toBeUndefined();
    }
    expect(researchSpots.flatMap((spot) => spot.sensorBindings).some((item) => ['sensor:scqc1', 'sensor:fffc1'].includes(item.sensorId ?? ''))).toBe(false);
  });

  it('retains stable IDs, legacy IDs, unique local content, access, sources, MPA status, advisories, and evidence edges', () => {
    expect(new Set(researchSpots.map((spot) => spot.id)).size).toBe(101);
    expect(new Set(researchSpots.map((spot) => spot.legacyId)).size).toBe(101);
    expect(new Set(researchSpots.map((spot) => spot.tactics.join('\n'))).size).toBe(101);
    expect(new Set(researchSpots.map((spot) => spot.safety.hazardsAndRetreat.join('\n'))).size).toBe(101);
    const ids = new Set(researchCatalog.sources.map((source) => source.id));
    for (const spot of researchSpots) {
      expect(spot.id).toBe(`spot:${spot.legacyId}`);
      expect(spot.access.sourceIds.length).toBeGreaterThan(0);
      expect(spot.sourceIds.every((id) => ids.has(id))).toBe(true);
      expect(spot.mpaAdjudication.status).toBe('clear-at-catalog-point');
      expect(spot.mpaAdjudication.warning).toMatch(/not navigational\/legal authority/i);
      expect(spot.advisories.sameDayChecks.length).toBeGreaterThan(0);
      expect(researchCatalog.spotSpeciesEvidence.filter((edge) => edge.spotId === spot.id).length).toBeGreaterThanOrEqual(2);
    }
  });

  it('integrates all 25 sensors and prohibits ocean-wave mappings for inland environments', () => {
    expect(sensorDefinitions).toHaveLength(25);
    expect(new Set(sensorDefinitions.map((sensor) => sensor.id)).size).toBe(25);
    const inland = new Set(['inner_bay', 'south_bay_shallow', 'carquinez_strait', 'tidal_river_delta', 'san_pablo_brackish', 'estuary']);
    for (const spot of researchSpots.filter((item) => inland.has(item.environmentClass))) {
      expect(spot.sensorBindings.some((binding) => binding.metric === 'wave' && binding.sensorId)).toBe(false);
      expect(spot.sensorBindings.find((binding) => binding.metric === 'wave')).toMatchObject({ availability: 'unavailable' });
    }
    for (const binding of researchSpots.flatMap((spot) => spot.sensorBindings).filter((item) => item.sensorId)) {
      expect(sensorDefinitions.some((sensor) => sensor.id === binding.sensorId)).toBe(true);
      expect(binding.distanceKm).toBeGreaterThanOrEqual(0);
      expect(binding.maxAgeMinutes).toBeGreaterThan(0);
      expect(binding.representativeness).toMatch(/^(exact-site|local|regional|proxy|not-representative)$/);
    }
  });

  it('publishes recursively immutable reviewed catalog data and read-only lookup functions', () => {
    const oceanBeach = researchSpots.find((spot) => spot.id === 'spot:ocean-beach')!;
    const waveBinding = oceanBeach.sensorBindings.find((binding) => binding.metric === 'wave')!;
    const sensor = sensorDefinitions.find((item) => item.id === waveBinding.sensorId)!;
    const originalSensorId = waveBinding.sensorId;
    const originalSourceId = sensor.sourceId;
    const originalHazard = oceanBeach.safety.hazardsAndRetreat[0];

    expect(Object.isFrozen(researchCatalog)).toBe(true);
    expect(Object.isFrozen(researchSpots)).toBe(true);
    expect(Object.isFrozen(oceanBeach)).toBe(true);
    expect(Object.isFrozen(oceanBeach.sensorBindings)).toBe(true);
    expect(Object.isFrozen(oceanBeach.safety.hazardsAndRetreat)).toBe(true);
    expect(Object.isFrozen(sensorDefinitions)).toBe(true);
    expect(() => { (waveBinding as { sensorId?: string }).sensorId = 'sensor:46026'; }).toThrow();
    expect(() => { (sensor as { sourceId: string }).sourceId = 'source:attacker'; }).toThrow();
    expect(() => { (oceanBeach.safety.hazardsAndRetreat as string[])[0] = 'attacker'; }).toThrow();

    expect(waveBinding.sensorId).toBe(originalSensorId);
    expect(sensor.sourceId).toBe(originalSourceId);
    expect(oceanBeach.safety.hazardsAndRetreat[0]).toBe(originalHazard);
    expect(researchSourceForId(originalSourceId)?.id).toBe(originalSourceId);
    expect(Object.isFrozen(evidenceForSpotId(oceanBeach.id))).toBe(true);
  });

  it('labels occurrence evidence as local corroboration and keeps target ranking fail closed', () => {
    expect(researchCatalog.scope).toMatch(/not a live legal target-now/i);
    expect(evidenceDisclosure).toMatch(/local corroboration.*not current presence.*legal target-now/i);
    for (const edge of researchCatalog.spotSpeciesEvidence) expect(edge.locality.warning).toMatch(/verify current legality|does not prove|not exact casting-point/i);
    for (const spot of spots) expect(rankableSpeciesForSpot(spot)).toEqual([]);
  });

  it('publishes deterministic reviewed habitat compatibility for all 24 exact taxa', () => {
    const habitatIds = new Set(researchCatalog.habitats.map(({ id }) => id));
    expect(researchCatalog.species).toHaveLength(24);
    for (const record of researchCatalog.species) {
      expect(record.compatibleHabitats.length, record.id).toBeGreaterThan(0);
      expect(record.compatibleHabitats.length, record.id).toBeLessThan(habitatIds.size);
      expect(record.compatibleHabitats.every((id) => habitatIds.has(id)), record.id).toBe(true);
    }
    const species = Object.fromEntries(researchCatalog.species.map((record) => [record.id, record.compatibleHabitats]));
    expect(species['species:california-halibut']).not.toContain('habitat:tidal-slough');
    expect(species['species:barred-surfperch']).toEqual(['habitat:surf']);
    expect(species['species:striped-bass']).toContain('habitat:bay-shore');
    expect(new Set(researchCatalog.species.map((record) => record.compatibleHabitats.join('|'))).size).toBeGreaterThan(1);
  });
});
