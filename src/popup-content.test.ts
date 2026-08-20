import { describe, expect, it } from 'vitest';
import { buildSpotPopup } from './popup-content';

class FakeNode {
  textContent: string | null = '';
  className = '';
  style: Record<string, string> = {};
  children: FakeNode[] = [];
  append(...nodes: FakeNode[]) { this.children.push(...nodes); }
  queryText(): string { return (this.textContent ?? '') + this.children.map((child): string => child.queryText()).join(''); }
}

describe('Leaflet popup content', () => {
  it('treats malicious catalog fields as text and cannot create markup or handlers', () => {
    const created: FakeNode[] = [];
    const documentLike = { createElement: () => { const node = new FakeNode(); created.push(node); return node; } };
    const attack = '<img src=x onerror="globalThis.pwned=true"><script>pwn()</script>';
    const popup = buildSpotPopup(
      documentLike as unknown as Parameters<typeof buildSpotPopup>[0],
      { name: attack, region: attack, type: attack, species: [attack] }
    ) as unknown as FakeNode;
    expect(popup.queryText()).toContain(attack);
    expect(created.every((node) => node.children.length === 0 || node.textContent === '')).toBe(true);
    expect(created).toHaveLength(7);
  });

  it('does not display static score or best-window fields as current intelligence', () => {
    const documentLike = { createElement: () => new FakeNode() };
    const popup = buildSpotPopup(
      documentLike as unknown as Parameters<typeof buildSpotPopup>[0],
      { name: 'Test Water', region: 'Coast', type: 'Surf', species: ['Surfperch'] }
    ) as unknown as FakeNode;
    expect(popup.queryText()).not.toMatch(/99|legacy window|model score|sample window/i);
    expect(popup.queryText()).toContain('Open spot details');
  });

  it('labels an unverified centroid as approximate in the marker popup', () => {
    const documentLike = { createElement: () => new FakeNode() };
    const popup = buildSpotPopup(
      documentLike as unknown as Parameters<typeof buildSpotPopup>[0],
      { name: 'Approximate Water', region: 'Coast', type: 'Surf', species: ['Surfperch'], coordinateStatus: 'approximate-centroid' } as Parameters<typeof buildSpotPopup>[1]
    ) as unknown as FakeNode;
    expect(popup.queryText()).toContain('Approximate map location');
  });
});