type NavigableSpot = {
  name: string;
  lat: number;
  lng: number;
  coordinateStatus: 'exact-named-feature' | 'approximate-centroid';
};

export function googleMapsUrl(spot: NavigableSpot): string {
  const query = spot.coordinateStatus === 'exact-named-feature' ? `${spot.lat},${spot.lng}` : spot.name;
  return `https://www.google.com/maps/search/?${new URLSearchParams({ api: '1', query })}`;
}
