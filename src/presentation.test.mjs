import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const app = readFileSync(new URL('./App.tsx', import.meta.url), 'utf8');
const css = readFileSync(new URL('./App.css', import.meta.url), 'utf8');
const config = readFileSync(new URL('../vite.config.ts', import.meta.url), 'utf8');
const indexHtml = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const manifest = JSON.parse(readFileSync(new URL('../public/manifest.webmanifest', import.meta.url), 'utf8'));

const primaryForbidden = [
  'API-ready',
  'Export report JSON',
  'Sample species model',
  'Relative opportunity engine',
  'Current legality · fail closed',
  'evidence:',
  'Missing dimensions',
  'Research-backed spot expansion',
  'PWA offline cache',
  'Prototype science coverage'
];

describe('quiet fisherman-first presentation', () => {
  it('removes internal, promotional, and coding language from the App source', () => {
    for (const phrase of primaryForbidden) expect(app).not.toContain(phrase);
    expect(app).not.toMatch(/raw evidence|TTL|representativeness/i);
  });

  it('names the installed utility Bay Bite without dashboard branding', () => {
    expect(indexHtml).toContain('<title>Bay Bite</title>');
    expect(manifest.name).toBe('Bay Bite');
    expect(manifest.short_name).toBe('Bay Bite');
    expect(manifest.description).not.toMatch(/dashboard|command/i);
  });

  it('uses one selected-spot workspace with concise views and no evaluator output', () => {
    expect(app).toContain('className="field-header"');
    expect(app).toContain('Bay Bite');
    expect(app).toContain('Data updated');
    const map = app.indexOf('id="fishing-map"');
    const workspace = app.indexOf('className="card spot-workspace"');
    expect(map).toBeGreaterThan(0);
    expect(workspace).toBeGreaterThan(map);
    expect(app).toContain('type WorkspaceView');
    expect(app).toContain("useState<WorkspaceView>('now')");
    expect(app).toContain('role="tablist"');
    for (const label of ['Now', 'Target', 'Plan']) expect(app).toContain(`>${label}</button>`);
    expect(app).toContain('usefulLiveConditionCount');
    expect(app).toContain('Live conditions are limited right now');
    expect(app).toContain('<summary>Condition details</summary>');
    expect(app).toContain('<summary>Sources & technical details</summary>');
    expect((app.match(/className="card technical-details"/g) ?? [])).toHaveLength(1);
    for (const leak of [
      'result.status', 'result.reasons', 'result.missingInputs', 'result.evidenceCoverage',
      'binding.maxAgeMinutes', 'binding.warning', 'selected.mpaScreen?.status', 'item.status'
    ]) expect(app).not.toContain(leak);
  });

  it('does not render raw spot safety enums in matching results', () => {
    expect(app).not.toContain('>{spot.safety}</span>');
    expect(app).toContain('plainSafetyLabel(spot)');
  });

  it('keeps the primary access plan compact instead of dumping the source note', () => {
    expect(app).not.toContain('<p>{selected.accessNote}</p>');
    expect(app).toContain('plainAccessSummary(selected)');
  });

  it('keeps the sticky access and safety state compact', () => {
    expect(app).toContain('<strong>{plainCommandStatus(selected)}</strong>');
  });

  it('keys live telemetry to the selected spot so selection changes stay atomic', () => {
    expect(app).toContain("const spotKey = spot.stableId ?? `spot:${spot.id}`");
    expect(app).toContain('telemetryForSpot(state, spotKey, loadingTelemetry(spot))');
  });

  it('keeps the mobile workspace sticky summary outside overflow clipping', () => {
    expect(css).toMatch(/\.spot-workspace\s*\{[^}]*overflow:\s*visible;/s);
  });

  it('does not present the fixed reference curve as a selected-spot tide prediction', () => {
    expect(app).not.toContain('<AreaChart');
    expect(app).not.toContain('tideSeries');
  });

  it('keeps technical disclosure to sources and one display-safety explanation', () => {
    expect(app).not.toContain('reviewed local history records are associated');
    expect(app).not.toContain('Recommendations appear only when');
    expect(app).toContain('Local history is labeled as spot-specific or nearby and never presented as current fish presence.');
  });

  it('implements an associated keyboard-operable tab pattern', () => {
    expect(app).toContain('id="workspace-now-tab"');
    expect((app.match(/aria-controls="workspace-panel"/g) ?? [])).toHaveLength(3);
    expect(app).toContain('id="workspace-panel"');
    expect(app).toContain('aria-labelledby={`workspace-${workspaceView}-tab`}');
    expect(app).toContain('onWorkspaceTabKeyDown');
    expect(app).toContain('nextWorkspaceView(workspaceView, event.key)');
    expect(app).toContain('tabIndex={workspaceView ===');
  });

  it('keeps existing field functions wired', () => {
    for (const token of [
      '<MapContainer', 'ClusteredMarkers', 'value={query}', 'setMode', 'setRegion', 'setSpecies',
      'toggleFavorite', 'googleMapsUrl(selected)', 'useLiveTelemetry(selected)',
      'currentSpotLegality(selected)', 'selected.sourceLinks', 'evidenceEdges?.find'
    ]) expect(app).toContain(token);
    expect(manifest.display).toBe('standalone');
  });

  it('shows concise evidence scope and keeps diagnostics collapsed', () => {
    expect(app).toContain('Reported at this spot');
    expect(app).toContain('Reported nearby');
    expect(app).toContain('No reviewed history yet');
    expect(app).toContain('Condition sources');
    expect(app).toContain('Official access and fishing sources');
    expect(app).toContain('About local history');
    expect(app).not.toContain('Safety blocked. Opportunity and presentations are suppressed.');
  });

  it('keeps same-origin telemetry refresh and client security boundaries', () => {
    expect(app).not.toContain('api.tidesandcurrents.noaa.gov');
    expect(app).not.toContain('https://www.ndbc.noaa.gov/data/realtime2/');
    expect(app).toContain("fetch(`/data/live-status.json?ts=${Date.now()}`");
    expect(app).toContain("cache: 'no-store'");
    expect(app).toContain('formatDataDate(liveCache?.generatedAt)');
    expect(app).not.toContain('const [liveRefresh');
    expect(config).not.toContain('allowedHosts: true');
  });

  it('provides mobile field ergonomics, restrained motion, and theme contrast hooks', () => {
    expect(css).toMatch(/body\s*\{[^}]*overflow-x:\s*hidden/i);
    expect(css).toMatch(/button[^}]*min-height:\s*44px/i);
    expect(css).toMatch(/\.search-box input[^}]*min-height:\s*44px/i);
    expect(css).toMatch(/@media \(prefers-reduced-motion:\s*reduce\)/i);
    expect(css).toMatch(/@media \(max-width:\s*640px\)[\s\S]*\.map-wrap\s*\{[^}]*height:\s*3[0-9]{2}px/i);
    expect(css).toMatch(/\.deck-white \.card\s*\{[^}]*background:\s*#fff/i);
    expect(app).not.toContain('className="hero"');
  });
});
