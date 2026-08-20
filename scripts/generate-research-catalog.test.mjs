import { describe, expect, it } from 'vitest';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const script = resolve('scripts/generate-research-catalog.mjs');
const source = resolve('scripts/data/spot-catalog-100-v2.source.json');

function run(args) {
  return spawnSync(process.execPath, [script, ...args], { cwd: resolve('.'), encoding: 'utf8' });
}

describe('research catalog generator CLI', () => {
  it('treats --check as a flag rather than a source path', () => {
    const result = run(['--check']);
    expect(result.status, result.stderr || result.stdout).toBe(0);
    expect(result.stdout).toMatch(/Catalog artifact verified: 101 accepted/);
  });

  it('defaults exclusively to the repository-local canonical source', () => {
    const text = readFileSync(script, 'utf8');
    expect(text).toContain('scripts/data/spot-catalog-100-v2.source.json');
    expect(text).not.toMatch(/\/root\/|company\/research/);
  });

  it('emits accepted client records only while preserving exclusions in the source fixture', () => {
    const sourceData = JSON.parse(readFileSync(source, 'utf8'));
    const clientData = JSON.parse(readFileSync(resolve('src/fishing-smarts/generated/research-catalog.v2.json'), 'utf8'));
    expect(sourceData.rejectedOrPending).toHaveLength(30);
    expect(clientData).not.toHaveProperty('rejectedOrPending');
    expect(clientData).not.toHaveProperty('supersededCombinedRecords');
  });

  it('supports explicit source/output positionals in generate and check modes', () => {
    const dir = mkdtempSync(join(tmpdir(), 'bay-bite-catalog-'));
    const output = join(dir, 'catalog.json');
    try {
      const generated = run([source, output]);
      expect(generated.status, generated.stderr || generated.stdout).toBe(0);
      expect(JSON.parse(readFileSync(output, 'utf8')).spots).toHaveLength(101);

      const checked = run(['--check', source, output]);
      expect(checked.status, checked.stderr || checked.stdout).toBe(0);

      writeFileSync(output, '{}\n');
      const stale = run(['--check', source, output]);
      expect(stale.status).not.toBe(0);
      expect(stale.stderr).toMatch(/is stale/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
