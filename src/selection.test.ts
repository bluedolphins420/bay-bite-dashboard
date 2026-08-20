import { describe, expect, it } from 'vitest';
import { reconcileSelectedId } from './selection';

type Candidate = { id: string };

const eckley: Candidate = { id: 'eckley-pier' };
const lindaMar: Candidate = { id: 'linda-mar' };

describe('selected spot reconciliation', () => {
  it('selects the sole exact search result when the prior selection is outside the filtered set', () => {
    expect(reconcileSelectedId('linda-mar', [eckley])).toBe('eckley-pier');
  });

  it('preserves an explicit marker or card selection while it remains visible', () => {
    expect(reconcileSelectedId('eckley-pier', [lindaMar, eckley])).toBe('eckley-pier');
  });

  it('does not discard the selection when filters have no matches', () => {
    expect(reconcileSelectedId('linda-mar', [])).toBe('linda-mar');
  });
});
