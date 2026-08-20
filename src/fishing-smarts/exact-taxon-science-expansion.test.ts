import { describe, expect, it } from 'vitest';
import { scientificSourceRegistry } from './scientific-sources';
import {
  canonicalTaxa,
  canonicalTaxonIds,
  expectRecursivelyFrozen,
  habitatIds,
  requireCompleteScience,
} from './exact-taxon-expansion.contract-helper';

const requiredClaimIds = [
  'domain',
  'environment',
  'substrate',
  'structure',
  'salinity',
  'depth',
  'forage',
  'season',
  'presentation',
] as const;

const forbiddenClaims = /(?:\b61\s*°?\s*f\b|barometr(?:ic|y)\s+(?:score|threshold|window)|solunar\s+(?:score|window|multiplier)|40\s*(?:-|–|to)\s*80\s*hz|guaranteed?\s+(?:bite|catch))/i;

describe('all-24 exact-taxon profile contract', () => {
  it('has exactly the canonical research IDs and names with no aggregate taxonomy', () => {
    const science = requireCompleteScience();
    expect(Object.keys(science).sort()).toEqual([...canonicalTaxonIds].sort());
    for (const canonical of canonicalTaxa) {
      expect(science[canonical.id]).toMatchObject({
        id: canonical.id,
        commonName: canonical.commonName,
        scientificName: canonical.scientificName,
      });
      expect(science[canonical.id].scientificName).not.toMatch(/\bspp\.|\bfamily\b|\bcomplex\b/i);
    }
  });

  it('recursively freezes every record and all nested claim data', () => {
    const science = requireCompleteScience();
    expectRecursivelyFrozen(science, 'exactTaxonScience');
  });

  it('resolves every evidence and known-claim citation to the immutable source registry', () => {
    const science = requireCompleteScience();
    expectRecursivelyFrozen(scientificSourceRegistry, 'scientificSourceRegistry');
    const sourceIds = new Set<string>(scientificSourceRegistry.map(({ id }) => id));
    for (const record of Object.values(science)) {
      for (const citation of record.evidence) expect(sourceIds.has(citation.sourceId), `${record.id}: ${citation.sourceId}`).toBe(true);
      for (const [claimId, claim] of Object.entries(record.claims ?? {})) {
        if (claim.state === 'known') {
          expect(claim.sourceIds?.length, `${record.id}.${claimId} known claim needs evidence`).toBeGreaterThan(0);
          for (const sourceId of claim.sourceIds ?? []) expect(sourceIds.has(sourceId), `${record.id}.${claimId}: ${sourceId}`).toBe(true);
        }
      }
    }
  });

  it('retains exact corrected occurrence and habitat identities alongside uniquely identified legacy records', () => {
    const ids = scientificSourceRegistry.map(({ id }) => id);
    const byId = new Map(scientificSourceRegistry.map((source) => [source.id, source]));
    expect(new Set(ids).size).toBe(ids.length);
    expect(byId.get('source:gbif-api')).toMatchObject({ role: 'historical-occurrence', claimStatus: 'supplemental-not-foundation' });
    expect(byId.get('source:inat-api')).toMatchObject({ role: 'historical-occurrence', claimStatus: 'supplemental-not-foundation' });
    expect(byId.get('source:noaa-benthic')).toMatchObject({ role: 'biology', claimStatus: 'supplemental-not-foundation' });
    expect(byId.get('source:gbif-occurrence-api')).toMatchObject({ role: 'historical-occurrence', claimStatus: 'supplemental-only' });
    expect(byId.get('source:inaturalist-research-grade')).toMatchObject({ role: 'supplemental-occurrence', claimStatus: 'supplemental-only' });
    expect(byId.get('source:noaa-sf-bay-benthic-2011')).toMatchObject({ role: 'habitat-geography' });
  });

  it('declares explicit compatible and incompatible habitats without claiming all nine', () => {
    const science = requireCompleteScience();
    for (const record of Object.values(science)) {
      expect(record.habitat.compatible.length, `${record.id} compatible`).toBeGreaterThan(0);
      expect(record.habitat.incompatible.length, `${record.id} incompatible`).toBeGreaterThan(0);
      expect(new Set([...record.habitat.compatible, ...record.habitat.incompatible]).size).toBe(record.habitat.compatible.length + record.habitat.incompatible.length);
      expect(record.habitat.compatible.every((id) => habitatIds.includes(id))).toBe(true);
      expect(record.habitat.incompatible.every((id) => habitatIds.includes(id))).toBe(true);
      expect(record.habitat.compatible).not.toHaveLength(9);
    }
  });

  it('makes each scientific claim known with appropriate evidence or explicitly unknown', () => {
    const science = requireCompleteScience();
    for (const record of Object.values(science)) {
      expect(Object.keys(record.claims ?? {}).sort(), record.id).toEqual([...requiredClaimIds].sort());
      for (const claimId of requiredClaimIds) {
        const claim = record.claims![claimId];
        expect(['known', 'unknown'], `${record.id}.${claimId}`).toContain(claim.state);
        if (claim.state === 'known') {
          expect(claim.value, `${record.id}.${claimId}`).toBeDefined();
          expect(claim.sourceIds?.length, `${record.id}.${claimId}`).toBeGreaterThan(0);
        } else {
          expect(claim.reason?.trim().length, `${record.id}.${claimId}`).toBeGreaterThan(0);
          expect(claim).not.toHaveProperty('value');
        }
      }
    }
  });

  it('contains no magic temperature, pressure, solunar, frequency, aggregate, or guaranteed-bite language', () => {
    const science = requireCompleteScience();
    expect(JSON.stringify(science)).not.toMatch(forbiddenClaims);
  });
});
