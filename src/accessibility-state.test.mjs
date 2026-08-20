import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const app = readFileSync(new URL('./App.tsx', import.meta.url), 'utf8');

describe('programmatic control state', () => {
  it('exposes the pressed state of every button-based filter', () => {
    expect(app).toMatch(/\.map\(\(item\) => <button[^>]*aria-pressed=\{mode === item\}/);

    // Region and species remain native selects, whose current values are exposed
    // by the platform rather than represented as pressed buttons.
    expect(app).toContain('<select value={region}');
    expect(app).toContain('<select value={species}');
  });

  it('exposes whether the selected spot is a favorite', () => {
    expect(app).toMatch(/className=\{`favorite-button[^>]*aria-pressed=\{favorites\.has\(selected\.id\)\}/);
  });

  it('exposes the selected matching-spot card', () => {
    expect(app).toMatch(/visibleList\.map\(\(spot\) => <button[^>]*aria-pressed=\{spot\.id === selected\.id\}/);
  });

  it('names Leaflet marker buttons and exposes their selected state without interpolating spot data into icon HTML', () => {
    expect(app).toContain("const markerLabel = `${spot.name}, ${isSelected ? 'selected' : 'not selected'}`;");
    expect(app).toMatch(/L\.marker\([^;]*title: markerLabel[^;]*alt: markerLabel[^;]*keyboard: true/);
    expect(app).toContain("markerElement.setAttribute('aria-label', markerLabel)");
    expect(app).toContain("markerElement.setAttribute('aria-pressed', String(isSelected))");
    expect(app).toContain("marker.on('add', syncMarkerAccessibility)");

    const iconFactory = app.slice(app.indexOf('function makeIcon'), app.indexOf('function MapController'));
    expect(iconFactory).not.toContain('${spot.name}');
  });
});
