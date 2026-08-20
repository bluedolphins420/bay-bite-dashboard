import { reviewedTelemetryFromCache, type LiveStatusCache, type ObservationMeta } from '../telemetry';
import type { ResearchSensorBinding } from './research-catalog';
import { researchSpots, sensorDefinitions } from './research-catalog';
import type { StableId } from './index';

const issuedConditions = new WeakSet<object>();


export interface ConditionSnapshot {
  observedAt:string;
  current?:{state:'slack'|'manageable'|'strong'|'unknown';sourceId:StableId};
  wave?:{state:'calm'|'manageable'|'rough'|'unknown';sourceId:StableId};
  wind?:{state:'light'|'manageable'|'strong'|'unknown';sourceId:StableId};
  clarity?:'clear'|'moderate'|'turbid'|'unknown';
  light?:'bright'|'low'|'dark'|'unknown';
  readonly provenanceSpotId?:StableId;
}
export interface FootingInspection {
  footing:'safe'|'unsafe'|'unknown';
  explicitlyResolved:boolean;
  inspectionId?:StableId;
  inspectedAt?:string;
  spotId?:StableId;
}

const sourceForSensor = new Map(sensorDefinitions.map((sensor) => [sensor.id, sensor.sourceId as StableId]));
const unavailable = (meta: ObservationMeta) => meta.availability !== 'available' || meta.freshness === 'stale' || meta.freshness === 'unavailable';
const finiteNumber = (value: string | undefined) => {
  const parsed = Number.parseFloat(value ?? '');
  return Number.isFinite(parsed) ? parsed : undefined;
};

function validatedSource(binding: ResearchSensorBinding | undefined, meta: ObservationMeta, expectedMetric: string): StableId | undefined {
  if (!binding?.sensorId || binding.metric !== expectedMetric || unavailable(meta)) return undefined;
  const definitionSource = sourceForSensor.get(binding.sensorId);
  if (!definitionSource || meta.stationId !== binding.sensorId.slice('sensor:'.length)) return undefined;
  if (binding.maxAgeMinutes === undefined || meta.ageMinutes === undefined || meta.ageMinutes < 0 || meta.ageMinutes > binding.maxAgeMinutes) return undefined;
  return definitionSource;
}

/**
 * Trusted conditions producer. The reviewed adapter accepts only the exact
 * schema-validated same-origin cache object, obtains bindings internally, then
 * validates product identity and freshness. This is closed-module structural
 * identity, not cryptographic authentication of upstream network bytes.
 */
export function produceConditionSnapshotFromCache(cache: LiveStatusCache, spotId: StableId, clock = new Date()): ConditionSnapshot | undefined {
  const telemetry = reviewedTelemetryFromCache(cache, spotId, clock);
  if (!telemetry) return undefined;
  if (!telemetry.observedAt || !Number.isFinite(new Date(telemetry.observedAt).getTime())) return undefined;
  const bindings: readonly ResearchSensorBinding[] = researchSpots.find((spot) => spot.id === spotId)?.sensorBindings ?? [];
  const waveBinding = bindings.find((binding) => binding.metric === 'wave');
  const windBinding = bindings.find((binding) => binding.metric === 'wind');
  const waveSource = validatedSource(waveBinding, telemetry.observations.wave, 'wave');
  const windSource = validatedSource(windBinding, telemetry.observations.wind, 'wind');
  const wave = finiteNumber(telemetry.waveHeightFt);
  const wind = finiteNumber(telemetry.windSpeedKt);
  const snapshot = Object.freeze({
    observedAt: telemetry.observedAt,
    current: Object.freeze({ state: 'unknown' as const, sourceId: 'source:noaa-coops-api' as StableId }),
    wave: Object.freeze({ state: waveSource && wave !== undefined ? (wave >= 6 ? 'rough' as const : 'manageable' as const) : 'unknown' as const, sourceId: waveSource ?? 'source:noaa-ndbc' as StableId }),
    wind: Object.freeze({ state: windSource && wind !== undefined ? (wind >= 20 ? 'strong' as const : wind <= 8 ? 'light' as const : 'manageable' as const) : 'unknown' as const, sourceId: windSource ?? 'source:noaa-coops-api' as StableId }),
    clarity: 'unknown' as const,
    light: 'unknown' as const,
    provenanceSpotId: spotId,
  });
  issuedConditions.add(snapshot);
  return snapshot;
}

export function conditionsAreTrusted(snapshot:ConditionSnapshot|undefined,spotId:StableId):boolean{
  return Boolean(snapshot && issuedConditions.has(snapshot) && snapshot.provenanceSpotId === spotId);
}

export function footingIsTrusted(inspection:FootingInspection,spotId:StableId,evaluatedAt:string):boolean{
  if(inspection.footing!=='safe')return true;
  void spotId; void evaluatedAt;
  return false;
}
