import { describe, expect, it } from 'vitest';
import * as dashboardData from '../data';
import * as faunaOpportunity from './fauna-opportunity';
import * as regulationsData from './regulations-science-data';
import * as researchCatalogModule from './research-catalog';
import * as reviewedExpansion from './reviewed-exact-taxon-expansion';
import * as scientificSources from './scientific-sources';
import * as selectedWater from './selected-water-opportunity';
import { evaluateEligibility, type EligibilityContext } from './index';

const modulesUnderAudit = {
  'src/data.ts': dashboardData,
  'fishing-smarts/fauna-opportunity.ts': faunaOpportunity,
  'fishing-smarts/regulations-science-data.ts': regulationsData,
  'fishing-smarts/research-catalog.ts': researchCatalogModule,
  'fishing-smarts/reviewed-exact-taxon-expansion.ts': reviewedExpansion,
  'fishing-smarts/scientific-sources.ts': scientificSources,
  'fishing-smarts/selected-water-opportunity.ts': selectedWater,
} as const;

const expectedRuntimeDataExports = [
  'src/data.ts:allSpecies',
  'src/data.ts:dailyReport',
  'src/data.ts:regions',
  'src/data.ts:researchSources',
  'src/data.ts:speciesMomentum',
  'src/data.ts:speciesProfiles',
  'src/data.ts:spots',
  'src/data.ts:tideSeries',
  'fishing-smarts/fauna-opportunity.ts:exactTaxonScience',
  'fishing-smarts/regulations-science-data.ts:regulationsScienceDataset',
  'fishing-smarts/research-catalog.ts:researchCatalog',
  'fishing-smarts/research-catalog.ts:researchSpots',
  'fishing-smarts/research-catalog.ts:sensorDefinitions',
  'fishing-smarts/reviewed-exact-taxon-expansion.ts:reviewedExpansionProfiles',
  'fishing-smarts/reviewed-exact-taxon-expansion.ts:reviewedExpansionSources',
  'fishing-smarts/scientific-sources.ts:scientificIngestionContracts',
  'fishing-smarts/scientific-sources.ts:scientificSourceRegistry',
  'fishing-smarts/selected-water-opportunity.ts:occurrenceEvidenceOverlays',
  'fishing-smarts/selected-water-opportunity.ts:reviewedOccurrenceRecords',
] as const;

type RuntimeDataExport = { name: string; value: object };

function enumerateRuntimeDataExports(): RuntimeDataExport[] {
  return Object.entries(modulesUnderAudit).flatMap(([moduleName, namespace]) =>
    Object.entries(namespace)
      .filter((entry): entry is [string, object] => entry[1] !== null && typeof entry[1] === 'object')
      .map(([exportName, value]) => ({ name: `${moduleName}:${exportName}`, value })),
  ).sort((left, right) => left.name.localeCompare(right.name));
}

function immutableGraphViolations(value: unknown, path: string, seen = new WeakSet<object>()): string[] {
  if (value === null || typeof value !== 'object' || seen.has(value)) return [];
  seen.add(value);
  const violations: string[] = [];
  if (!Object.isFrozen(value)) violations.push(`${path} is not frozen`);
  for (const key of Reflect.ownKeys(value)) {
    const descriptor = Object.getOwnPropertyDescriptor(value, key)!;
    const childPath = `${path}.${String(key)}`;
    if (!('value' in descriptor)) violations.push(`${childPath} is an accessor`);
    else violations.push(...immutableGraphViolations(descriptor.value, childPath, seen));
  }
  return violations;
}

function snapshot(value: unknown): string {
  return JSON.stringify(value);
}

function firstDataProperty(value: object): PropertyKey | undefined {
  return Reflect.ownKeys(value).find((key) => key !== 'length' && 'value' in Object.getOwnPropertyDescriptor(value, key)!);
}

function attackGraph(root: object): void {
  const seen = new WeakSet<object>();
  const visit = (value: object): void => {
    if (seen.has(value)) return;
    seen.add(value);
    const key = firstDataProperty(value);
    if (key !== undefined) {
      const descriptor = Object.getOwnPropertyDescriptor(value, key)! as PropertyDescriptor & { value: unknown };
      try { Reflect.set(value, key, descriptor.value === true ? false : '__attacker__'); } catch { /* frozen rejection */ }
    }
    if (Array.isArray(value)) {
      try { Reflect.apply(Array.prototype.push, value, ['__attacker_push__']); } catch { /* frozen rejection */ }
    }
    try { Reflect.defineProperty(value, '__attacker_key__', { value: true, enumerable: true }); } catch { /* frozen rejection */ }
    try { Reflect.setPrototypeOf(value, { __attacker_prototype__: true }); } catch { /* frozen rejection */ }
    for (const nestedKey of Reflect.ownKeys(value)) {
      const descriptor = Object.getOwnPropertyDescriptor(value, nestedKey)!;
      if ('value' in descriptor && descriptor.value !== null && typeof descriptor.value === 'object') visit(descriptor.value);
    }
  };
  visit(root);
}

const whiteSturgeonContext: EligibilityContext = {
  at: '2026-08-13T11:00:00-07:00',
  spotId: 'spot:linda-mar',
  speciesId: 'species:white-sturgeon',
  regulatoryAreaId: 'area:sf-coast',
  fishingMode: 'shore',
  methodIds: [],
  gearIds: [],
  mpaIds: [],
  areaGeometryResolved: true,
  mpaGeometryResolved: true,
};

describe('immutable public runtime-data production boundary', () => {
  it('mechanically discovers exactly every intended public object/array export', () => {
    expect(enumerateRuntimeDataExports().map(({ name }) => name)).toEqual([...expectedRuntimeDataExports].sort());
  });

  it('rejects accessors and recursively freezes all public runtime data against mutation attacks', () => {
    const exportsUnderAudit = enumerateRuntimeDataExports();
    const canonical = new Map(exportsUnderAudit.map(({ name, value }) => [name, snapshot(value)]));
    const violations = exportsUnderAudit.flatMap(({ name, value }) => immutableGraphViolations(value, name));

    // Preserve the live module graph for the dedicated legal exploit when RED.
    // Once the boundary is recursively frozen (GREEN), exercise every attack.
    if (violations.length === 0) for (const { value } of exportsUnderAudit) attackGraph(value);

    const pollutionKey = '__bayBiteInheritedPollution__';
    Object.defineProperty(Object.prototype, pollutionKey, { value: 'attacker', configurable: true });
    try {
      for (const { name, value } of exportsUnderAudit) {
        expect(Object.prototype.hasOwnProperty.call(value, pollutionKey), `${name} acquired inherited key as own data`).toBe(false);
        expect(snapshot(value), `${name} changed after mutation/new-key/prototype/inherited attacks`).toBe(canonical.get(name));
      }
      expect(violations, violations.join('\n')).toEqual([]);
    } finally {
      Reflect.deleteProperty(Object.prototype, pollutionKey);
    }
  });

  it('keeps white-sturgeon closed and non-actionable after the exact legal bypass and generic attacks', () => {
    const before = evaluateEligibility(regulationsData.regulationsScienceDataset, whiteSturgeonContext);
    const rule = regulationsData.regulationsScienceDataset.rules.find(({ id }) => id === 'rule:white-sturgeon-sf-coast-2026');
    expect(rule).toBeDefined();
    expect(before).toMatchObject({ status: 'closed', actionable: false });

    const exactAttacks = [
      () => Reflect.set(rule!.statuses, '0', 'open'),
      () => Reflect.set(rule!, 'mpaDependency', false),
      () => Reflect.set(rule!, 'dynamic', false),
    ];
    for (const attack of exactAttacks) expect(attack()).toBe(false);
    attackGraph(regulationsData.regulationsScienceDataset);

    expect(evaluateEligibility(regulationsData.regulationsScienceDataset, whiteSturgeonContext)).toMatchObject({ status: 'closed', actionable: false });
  });
});
