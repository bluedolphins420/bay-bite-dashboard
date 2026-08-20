import { describe, expect, it } from 'vitest';
import { telemetryForSpot } from './selected-telemetry';

describe('selected-spot telemetry presentation', () => {
  it('returns a loading fallback instead of telemetry from the previously selected spot', () => {
    const staleState = { spotKey: 'spot:linda-mar', telemetry: { label: 'Linda Mar tide' }, cache: { generatedAt: 'old' } };
    const fallback = { label: 'Loading Benicia' };

    expect(telemetryForSpot(staleState, 'spot:benicia-9th', fallback)).toEqual({ telemetry: fallback });
  });

  it('returns telemetry and cache only when they belong to the selected spot', () => {
    const current = { spotKey: 'spot:benicia-9th', telemetry: { label: 'Benicia tide' }, cache: { generatedAt: 'current' } };

    expect(telemetryForSpot(current, 'spot:benicia-9th', { label: 'Loading' })).toEqual({
      telemetry: current.telemetry,
      cache: current.cache
    });
  });
});
