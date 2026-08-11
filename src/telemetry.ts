export type LiveTelemetry = {
  status: 'loading' | 'live' | 'fallback';
  waterLevelFt?: string;
  nextHigh?: string;
  nextLow?: string;
  waterTempF?: string;
  windSpeedKt?: string;
  windDir?: string;
  swellHeightFt?: string;
  swellPeriodSec?: string;
  swellDirDeg?: string;
  stationName: string;
  buoyId: string;
  updatedAt?: string;
  message: string;
};

export const spotTelemetryMapping: Record<string, { noaaStation: string; buoyId: string; stationName: string }> = {
  'San Francisco': { noaaStation: '9414290', buoyId: '46026', stationName: 'SF Fort Point / Golden Gate' },
  'Golden Gate': { noaaStation: '9414290', buoyId: '46026', stationName: 'Golden Gate Bridge' },
  'Half Moon Bay': { noaaStation: '9414131', buoyId: '46012', stationName: 'Half Moon Bay Harbor / Buoy 46012' },
  'Richmond': { noaaStation: '9414863', buoyId: '46026', stationName: 'Richmond Inner Harbor' },
  'Berkeley': { noaaStation: '9414816', buoyId: '46026', stationName: 'Berkeley Reef / Pier' },
  'Alameda': { noaaStation: '9414750', buoyId: '46026', stationName: 'Alameda Naval Air Station' },
  'Oakland Inner Harbor': { noaaStation: '9414763', buoyId: '46026', stationName: 'Oakland Inner Harbor' },
  'Redwood City': { noaaStation: '9414523', buoyId: '46012', stationName: 'Redwood Creek' },
  'San Mateo Bridge': { noaaStation: '9414458', buoyId: '46012', stationName: 'San Mateo Bridge' },
  'San Rafael': { noaaStation: '9414874', buoyId: '46026', stationName: 'San Rafael Creek' },
  'Tiburon': { noaaStation: '9414819', buoyId: '46026', stationName: 'Tiburon Ferry Terminal' },
  'Dumbarton Bridge': { noaaStation: '9414509', buoyId: '46012', stationName: 'Dumbarton Bridge' },
  'Benicia': { noaaStation: '9415118', buoyId: '46026', stationName: 'Benicia Bridge' },
  'Vallejo': { noaaStation: '9415423', buoyId: '46026', stationName: 'Mare Island Strait' },
  'Napa River': { noaaStation: '9415625', buoyId: '46026', stationName: 'Napa River Entrance' },
  'Bodega Harbor': { noaaStation: '9415623', buoyId: '46013', stationName: 'Bodega Bay / Buoy 46013' }
};
