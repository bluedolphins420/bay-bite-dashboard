import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const projectRoot = fileURLToPath(new URL('../..', import.meta.url));
const fixture = fileURLToPath(new URL('./reviewed-exact-taxon-preimport-boundary.fixture.ts', import.meta.url));

describe('reviewed exact-taxon expansion production boundary', () => {
  it('deep-freezes direct exports before downstream registry imports in a fresh module process', () => {
    const stdout = execFileSync(
      'npx',
      ['--no-install', 'vite-node', fixture],
      { cwd: projectRoot, encoding: 'utf8' },
    );
    expect(JSON.parse(stdout.trim())).toEqual({
      profiles: 21,
      sources: 41,
      batHabitat: 'habitat:bay-shore',
      sourceLimitation: 'Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability.',
    });
  });
});
