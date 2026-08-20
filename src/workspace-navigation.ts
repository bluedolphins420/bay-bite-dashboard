export type WorkspaceView = 'now' | 'target' | 'plan';

const workspaceViews: WorkspaceView[] = ['now', 'target', 'plan'];

export function nextWorkspaceView(current: WorkspaceView, key: string): WorkspaceView | undefined {
  const currentIndex = workspaceViews.indexOf(current);
  if (key === 'ArrowRight') return workspaceViews[(currentIndex + 1) % workspaceViews.length];
  if (key === 'ArrowLeft') return workspaceViews[(currentIndex - 1 + workspaceViews.length) % workspaceViews.length];
  if (key === 'Home') return workspaceViews[0];
  if (key === 'End') return workspaceViews[workspaceViews.length - 1];
  return undefined;
}
