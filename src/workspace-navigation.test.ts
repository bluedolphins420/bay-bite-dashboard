import { describe, expect, it } from 'vitest';
import { nextWorkspaceView } from './workspace-navigation';

describe('workspace tab keyboard navigation', () => {
  it('wraps with arrow keys and supports Home and End', () => {
    expect(nextWorkspaceView('now', 'ArrowRight')).toBe('target');
    expect(nextWorkspaceView('plan', 'ArrowRight')).toBe('now');
    expect(nextWorkspaceView('now', 'ArrowLeft')).toBe('plan');
    expect(nextWorkspaceView('target', 'Home')).toBe('now');
    expect(nextWorkspaceView('target', 'End')).toBe('plan');
  });

  it('ignores unrelated keys', () => {
    expect(nextWorkspaceView('target', 'Enter')).toBeUndefined();
  });
});
