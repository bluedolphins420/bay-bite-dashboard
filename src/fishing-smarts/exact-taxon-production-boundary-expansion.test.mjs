import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const appSource = readFileSync(new URL('../App.tsx', import.meta.url), 'utf8');
const selectedWaterSource = readFileSync(new URL('./selected-water-opportunity.ts', import.meta.url), 'utf8');
const reviewedScenarioSource = readFileSync(new URL('./reviewed-scenario.ts', import.meta.url), 'utf8');

describe('all-24 production dependency boundary contract', () => {
  it('keeps reviewed-scenario code outside the production App dependency path', () => {
    expect(appSource).not.toMatch(/reviewed-scenario|evaluateReviewedScenario/);
    expect(selectedWaterSource).not.toMatch(/reviewed-scenario|evaluateReviewedScenario/);
    expect(reviewedScenarioSource).toContain("export { evaluateReviewedScenario }");
  });
});