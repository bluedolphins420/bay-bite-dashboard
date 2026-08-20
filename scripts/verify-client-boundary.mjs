#!/usr/bin/env node
import { readFileSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';

const source = JSON.parse(readFileSync(resolve('scripts/data/spot-catalog-100-v2.source.json'), 'utf8'));
const client = JSON.parse(readFileSync(resolve('src/fishing-smarts/generated/research-catalog.v2.json'), 'utf8'));
const assets = readdirSync(resolve('dist/assets')).filter((name) => name.endsWith('.js')).map((name) => readFileSync(join(resolve('dist/assets'), name), 'utf8')).join('\n');
const assert = (condition, message) => { if (!condition) throw new Error(`Client boundary failed: ${message}`); };
assert(client.spots.length === 101, `expected 101 client spots, got ${client.spots.length}`);
assert(!('rejectedOrPending' in client), 'client artifact includes rejectedOrPending');
assert(source.rejectedOrPending.length === 30, `expected 30 source exclusions, got ${source.rejectedOrPending.length}`);
for (const excluded of source.rejectedOrPending) {
  assert(!assets.includes(excluded.spotId), `built JS includes excluded ID ${excluded.spotId}`);
  assert(!assets.includes(excluded.name), `built JS includes excluded name ${excluded.name}`);
}
console.log('Built client verified: 101 accepted spots; all 30 excluded IDs and names absent.');
