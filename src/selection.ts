type Selectable = { id: string };

export function reconcileSelectedId(selectedId: string, visibleSpots: readonly Selectable[]): string {
  if (visibleSpots.length === 0 || visibleSpots.some((spot) => spot.id === selectedId)) return selectedId;
  return visibleSpots[0].id;
}
