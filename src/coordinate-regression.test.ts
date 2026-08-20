import { describe, expect, it } from 'vitest';
import source from '../scripts/data/spot-catalog-100-v2.source.json';
import generated from './fishing-smarts/generated/research-catalog.v2.json';
import { spots } from './data';

type CatalogSpot = {
  id: string;
  coordinates: { lat: number; lon: number; precision: string };
  physicalProfile: { summary: string };
  advisories: { weatherResolver: string };
};
type Catalog = { spots: CatalogSpot[] };

function byId(catalog: Catalog, id: string) {
  const spot = catalog.spots.find((item) => item.id === id);
  if (!spot) throw new Error(`missing ${id}`);
  return spot;
}

describe('coordinate precision regression', () => {
  it('projects the exact named Eckley Pier feature center and its explicit status', () => {
    const eckley = spots.find((spot) => spot.id === 'eckley-pier') as (typeof spots)[number] & { coordinateStatus?: string; coordinatePrecision?: string };
    expect(eckley).toMatchObject({ lat: 38.0542059, lng: -122.2015829, coordinateStatus: 'exact-named-feature' });
    expect(eckley.coordinatePrecision).toMatch(/exact named.*Eckley Pier/i);
  });

  it('keeps the canonical and generated Eckley coordinate-dependent records consistent', () => {
    for (const catalog of [source, generated] as unknown as Catalog[]) {
      const eckley = byId(catalog, 'spot:eckley-pier');
      expect(eckley.coordinates).toMatchObject({ lat: 38.0542059, lon: -122.2015829 });
      expect(eckley.coordinates.precision).toMatch(/exact named.*Eckley Pier/i);
      expect(eckley.physicalProfile.summary).toContain('38.0542059, -122.2015829');
      expect(eckley.advisories.weatherResolver).toBe('https://api.weather.gov/points/38.0542059,-122.2015829');
    }
    const query = source.sources.find((item) => item.title === 'Eckley Pier iNaturalist research-grade fish query');
    expect(query?.url).toContain('lat=38.0542059&lng=-122.2015829&radius=5');
  });

  it('continues to label every other source coordinate as approximate rather than inventing precision', () => {
    const approximate = source.spots.filter((spot) => spot.id !== 'spot:eckley-pier' && spot.coordinates.precision === 'catalog centroid; verify legal casting position on site');
    expect(approximate).toHaveLength(130);
    expect(spots.filter((spot) => (spot as (typeof spots)[number] & { coordinateStatus?: string }).coordinateStatus === 'approximate-centroid')).toHaveLength(100);
  });
});
