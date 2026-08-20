import { describe, expect, it } from 'vitest';
import { googleMapsUrl } from './navigation';

describe('coordinate-aware Google Maps navigation', () => {
  it('navigates the exact Eckley named-feature marker by coordinate', () => {
    const url = googleMapsUrl({ name: 'Eckley Pier', lat: 38.0542059, lng: -122.2015829, coordinateStatus: 'exact-named-feature' });
    expect(new URL(url).searchParams.get('query')).toBe('38.0542059,-122.2015829');
  });

  it('searches by place name for an approximate centroid instead of implying an exact access point', () => {
    const url = googleMapsUrl({ name: 'Approximate Water', lat: 1.234, lng: -2.345, coordinateStatus: 'approximate-centroid' });
    expect(url).toContain('query=Approximate+Water');
    expect(url).not.toContain('1.234');
    expect(url).not.toContain('-2.345');
  });
});
