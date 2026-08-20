export type SpotTelemetryState<Telemetry, Cache> = {
  spotKey: string;
  telemetry: Telemetry;
  cache?: Cache;
};

export function telemetryForSpot<Telemetry, Cache>(
  state: SpotTelemetryState<Telemetry, Cache>,
  spotKey: string,
  loadingFallback: Telemetry
): { telemetry: Telemetry; cache?: Cache } {
  if (state.spotKey !== spotKey) return { telemetry: loadingFallback };
  return { telemetry: state.telemetry, cache: state.cache };
}
