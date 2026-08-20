// @ts-expect-error Node built-ins are available to the isolated Vite Node test fixture; this client project intentionally omits @types/node.
import assert from 'node:assert/strict';
// @ts-expect-error Node built-ins are available to the isolated Vite Node test fixture; this client project intentionally omits @types/node.
import { readFileSync } from 'node:fs';

const corrected = JSON.parse(readFileSync('/root/company/research/bay-bite-fishing-smarts/remaining-21-taxa-science.v1.json', 'utf8')) as {
  profiles: Array<Record<string, unknown> & { id: string }>;
  sourceRegistryAdditions: Array<Record<string, unknown> & { id: string }>;
};

const expansion = await import('./reviewed-exact-taxon-expansion');
const profiles = expansion.reviewedExpansionProfiles as unknown as Record<string, Record<string, unknown>>;
const sources = expansion.reviewedExpansionSources as unknown as Array<Record<string, unknown>>;

function assertRecursivelyFrozen(value: unknown, path: string, seen = new WeakSet<object>()): void {
  if (value === null || typeof value !== 'object' || seen.has(value)) return;
  seen.add(value);
  assert.equal(Object.isFrozen(value), true, `${path} must be frozen immediately`);
  for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(value))) {
    assert.ok('value' in descriptor, `${path}.${key} must not be an accessor`);
    assertRecursivelyFrozen(descriptor.value, `${path}.${key}`, seen);
  }
}

assertRecursivelyFrozen(profiles, 'reviewedExpansionProfiles');
assertRecursivelyFrozen(sources, 'reviewedExpansionSources');

const bat = profiles['species:bat-ray'] as Record<string, unknown>;
const habitat = bat.habitat as { compatible: string[] };
const firstSource = sources[0];
const attempts = [
  () => { habitat.compatible[0] = 'habitat:attacker'; },
  () => { habitat.compatible.push('habitat:attacker'); },
  () => { firstSource.limitations = 'attacker'; },
  () => { Object.setPrototypeOf(bat, { habitat: { compatible: ['habitat:attacker'] } }); },
  () => { Object.defineProperty(bat, 'inheritedAttack', { value: 'attacker' }); },
  () => { (bat as Record<string, unknown>).attacker = true; },
];
for (const attack of attempts) assert.throws(attack, TypeError);

Object.defineProperty(Object.prototype, 'inheritedAttack', { value: 'attacker', configurable: true });
try {
  assert.equal(Object.hasOwn(bat, 'inheritedAttack'), false);
  assert.equal((bat as Record<string, unknown>).inheritedAttack, 'attacker');
  assert.equal(JSON.stringify(profiles).includes('inheritedAttack'), false);
} finally {
  delete (Object.prototype as Record<string, unknown>).inheritedAttack;
}

const fauna = await import('./fauna-opportunity');
const registry = await import('./scientific-sources');
const expectedBat = corrected.profiles.find(({ id }) => id === 'species:bat-ray');
const expectedSource = corrected.sourceRegistryAdditions.find(({ id }) => id === 'source:cdfw-bat-ray');
assert.ok(expectedBat);
assert.ok(expectedSource);
assert.equal(fauna.exactTaxonScience['species:bat-ray'].habitat.compatible[0], 'habitat:bay-shore');
assert.equal(registry.scientificSourceRegistry.find(({ id }) => id === 'source:cdfw-bat-ray')?.limitations, 'Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability.');
for (const expected of corrected.profiles) {
  const actual = profiles[expected.id];
  if (!actual) throw new Error(`Missing runtime profile: ${expected.id}`);
  for (const [key, value] of Object.entries(expected)) {
    if (key === 'shorePresentations') {
      const stripPresentationProvenance = (items: unknown) => (items as Array<Record<string, unknown>>).map(({ claimProvenance: _runtimeOnly, ...presentation }) => presentation);
      assert.deepEqual(stripPresentationProvenance(actual[key]), stripPresentationProvenance(value), `${expected.id}.${key}`);
    } else {
      assert.deepEqual(actual[key], value, `${expected.id}.${key}`);
    }
  }
}
for (const expected of corrected.sourceRegistryAdditions) {
  const actual = sources.find(({ id }) => id === expected.id);
  if (!actual) throw new Error(`Missing runtime source: ${expected.id}`);
  for (const [key, value] of Object.entries(expected)) assert.deepEqual(actual[key], value, `${expected.id}.${key}`);
}

console.log(JSON.stringify({ profiles: Object.keys(profiles).length, sources: sources.length, batHabitat: habitat.compatible[0], sourceLimitation: firstSource.limitations }));
