import { researchSpots } from './fishing-smarts/research-catalog';

export type Freshness = 'live' | 'delayed' | 'stale' | 'partial' | 'unavailable';

type UnavailableProduct = { kind: 'unavailable'; supported: boolean; freshness: 'unavailable'; reason: string };
type PredictionProduct = { kind: 'prediction'; stationId: string; stationName: string; freshness: 'forecast'; values: Array<{ observedAt: string; value: number; type?: string; unit: 'm' }> };
type ObservedProduct = { kind: 'observed'; stationId: string; stationName: string; observedAt: string; ageMinutes: number; freshness: 'live'|'delayed'|'stale'; lastKnownGood: boolean; [key: string]: unknown };
type Product = UnavailableProduct | PredictionProduct | ObservedProduct;
export type CacheStation = { key: string; health: Freshness; products: { prediction?: Product; observedLevel?: Product; wind?: Product; buoy?: Product }; errors?: string[] };
export type ObservationMeta = {
  availability: 'available' | 'unavailable'; freshness: 'live'|'delayed'|'stale'|'unavailable'; observedAt?: string;
  ageMinutes?: number; lastKnownGood?: boolean; stationId?: string; stationName?: string; reason?: string;
  representativeness?: string; distanceKm?: number; maxAgeMinutes?: number; warning?: string;
};
export type LiveTelemetry = {
  status: 'loading' | Freshness; stationName: string; stationId?: string; buoyId: string; buoyName?: string;
  waterLevelFt?: string; nextHigh?: string; nextLow?: string; waterTempF?: string; windSpeedKt?: string; gustKt?: string; windDir?: string;
  waveHeightFt?: string; waveLabel: string; wavePeriodSec?: string; observedAt?: string; ageMinutes?: number; observationAge?: string;
  observations: { level: ObservationMeta; wind: ObservationMeta; buoy: ObservationMeta; wave: ObservationMeta; temperature: ObservationMeta };
  representativeness?: string; sourceErrors?: string[]; message: string;
};
const issuedTelemetry = new WeakSet<object>();
const issuedCaches = new WeakSet<object>();

function deepFreeze<T>(value: T): T {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    for (const nested of Object.values(value)) deepFreeze(nested);
    Object.freeze(value);
  }
  return value;
}


const finite = (value: unknown) => typeof value === 'number' && Number.isFinite(value) ? value : undefined;
const observed = (p?: Product): ObservedProduct | undefined => p?.kind === 'observed' ? p : undefined;
const prediction = (p?: Product): PredictionProduct | undefined => p?.kind === 'prediction' ? p : undefined;
function localTime(value?: string) { if (!value) return undefined; const date = new Date(value); return Number.isNaN(date.getTime()) ? undefined : date.toLocaleTimeString([], { hour:'numeric', minute:'2-digit' }); }
function unsupportedReasons(station: CacheStation) { return Object.values(station.products).filter((p): p is UnavailableProduct => p?.kind === 'unavailable').map((p)=>p.reason); }
function metadata(product?: Product): ObservationMeta {
  if (product?.kind === 'observed') return { availability:'available', freshness:product.freshness, observedAt:product.observedAt, ageMinutes:product.ageMinutes, lastKnownGood:product.lastKnownGood, stationId:product.stationId, stationName:product.stationName };
  return { availability:'unavailable', freshness:'unavailable', reason:product?.kind === 'unavailable' ? product.reason : 'Observation product is unavailable.' };
}
function aggregate(products: Array<Product | undefined>): Freshness {
  const states=products.map((product)=>metadata(product).freshness);
  if (states.every((state)=>state==='unavailable')) return 'unavailable';
  if (states.some((state)=>state==='unavailable')) return 'partial';
  if (states.some((state)=>state==='stale')) return 'stale';
  if (states.some((state)=>state==='delayed')) return 'partial';
  return 'live';
}
function nextPrediction(tides: PredictionProduct | undefined, type: 'H'|'L', clock: number) {
  return tides?.values
    .filter((item)=>item.type===type && Number.isFinite(new Date(item.observedAt).getTime()) && new Date(item.observedAt).getTime()>clock)
    .sort((a,b)=>new Date(a.observedAt).getTime()-new Date(b.observedAt).getTime())[0];
}
const emptyObservations = () => ({ level:metadata(), wind:metadata(), buoy:metadata(), wave:metadata(), temperature:metadata() });
export function telemetryFromCache(station: CacheStation | undefined, fallbackName: string, generatedAt?: string, currentNow = new Date()): LiveTelemetry {
  if (!station) return { status:'unavailable', stationName:fallbackName, buoyId:'Unavailable', waveLabel:'Significant wave height', observations:emptyObservations(), message:'No cached source mapping is available for this selected water. Unknown labels never fall back to another station.' };
  const levelProduct=station.products.observedLevel, windProduct=station.products.wind, buoyProduct=station.products.buoy;
  const level=observed(levelProduct), wind=observed(windProduct), buoy=observed(buoyProduct), tides=prediction(station.products.prediction);
  const generatedMs=generatedAt ? new Date(generatedAt).getTime() : Number.NaN; const nowMs=currentNow.getTime(); const clock=Number.isFinite(generatedMs) ? Math.max(generatedMs,nowMs) : nowMs;
  const high=nextPrediction(tides,'H',clock), low=nextPrediction(tides,'L',clock); const waterM=finite(level?.value), speed=finite(wind?.speedMps), gust=finite(wind?.gustMps), wave=finite(buoy?.waveHeightM), temp=finite(buoy?.waterTempC);
  const ages=[level,wind,buoy].filter(Boolean) as ObservedProduct[]; const youngest=[...ages].sort((a,b)=>a.ageMinutes-b.ageMinutes)[0]; const reasons=[...(station.errors??[]),...unsupportedReasons(station)];
  const observations={ level:metadata(levelProduct), wind:metadata(windProduct), buoy:metadata(buoyProduct), wave:metadata(buoyProduct), temperature:metadata(buoyProduct) };
  return {
    status:aggregate([levelProduct,windProduct,buoyProduct]), stationName:level?.stationName ?? tides?.stationName ?? fallbackName, stationId:level?.stationId ?? tides?.stationId,
    buoyId:buoy?.stationId ?? 'Unavailable', buoyName:buoy?.stationName, observedAt:youngest?.observedAt, ageMinutes:youngest?.ageMinutes, observations,
    observationAge:youngest ? `${youngest.ageMinutes} min (${youngest.freshness}${youngest.lastKnownGood?' · last known good':''})` : undefined,
    waterLevelFt:waterM===undefined?undefined:`${(waterM*3.28084).toFixed(1)} ft MLLW`, nextHigh:localTime(high?.observedAt), nextLow:localTime(low?.observedAt),
    windSpeedKt:speed===undefined?undefined:`${Math.round(speed*1.94384)} kt`, gustKt:gust===undefined?undefined:`${Math.round(gust*1.94384)} kt`,
    windDir:typeof wind?.directionCardinal==='string'?wind.directionCardinal:finite(wind?.directionDeg)!==undefined?`${Math.round(finite(wind?.directionDeg)!)}°`:undefined,
    waveHeightFt:wave===undefined?undefined:`${(wave*3.28084).toFixed(1)} ft`, waveLabel:'Significant wave height', wavePeriodSec:finite(buoy?.dominantPeriodSec)===undefined?undefined:`${finite(buoy?.dominantPeriodSec)}s`,
    waterTempF:temp===undefined?undefined:`${Math.round(temp*9/5+32)}°F`, representativeness:typeof buoy?.warning==='string'?buoy.warning:reasons.find((x)=>/buoy|offshore|representative/i.test(x)), sourceErrors:station.errors??[],
    message:reasons.length?`Source coverage: ${reasons.join('; ')}`:'Server-cached NOAA observations and predictions. No browser sensor requests.'
  };
}

type Binding = { metric:string; sensorId?:string; availability?:'unavailable'; distanceKm?:number; representativeness?:string; warning:string; maxAgeMinutes?:number };
export type LiveStatusCache = { schemaVersion:4; generatedAt:string; status:Freshness; healthCounts:Record<string,number>; totalStations:number; sources:string[]; stations:Record<string,CacheStation>; sensors:Record<string,CacheStation> };
type SensorCache = { generatedAt?:string; sensors?:Record<string,{products:CacheStation['products']}> };
const boundProduct = (product:Product|undefined, binding:Binding|undefined, clockMs:number, clockError?:string):Product|undefined => {
  if (product?.kind==='observed') {
    if (clockError) return { kind:'unavailable', supported:true, freshness:'unavailable', reason:clockError };
    const observedMs=new Date(product.observedAt).getTime();
    if (!Number.isFinite(observedMs) || observedMs>clockMs) return { kind:'unavailable', supported:true, freshness:'unavailable', reason:'Binding TTL cannot be verified from observedAt; observation unavailable.' };
    const effectiveAgeMinutes=Math.max(0,Math.round((clockMs-observedMs)/60_000));
    if (binding?.maxAgeMinutes!==undefined && effectiveAgeMinutes>binding.maxAgeMinutes) return { kind:'unavailable', supported:true, freshness:'unavailable', reason:`Binding TTL ${binding.maxAgeMinutes} min expired from observedAt; observation is ${effectiveAgeMinutes} min old.` };
    const freshness:ObservedProduct['freshness']=effectiveAgeMinutes<=20?'live':effectiveAgeMinutes<=120?'delayed':'stale';
    return { ...product, ageMinutes:effectiveAgeMinutes, freshness };
  }
  return product;
};
const boundMeta = (meta:ObservationMeta, binding?:Binding):ObservationMeta => binding ? ({ ...meta, representativeness:binding.representativeness, distanceKm:binding.distanceKm, maxAgeMinutes:binding.maxAgeMinutes, warning:binding.warning }) : meta;
export function telemetryFromBindings(cache: SensorCache | undefined, bindings: readonly Binding[] = [], fallbackName: string, currentNow = new Date()): LiveTelemetry {
  const generatedMs=cache?.generatedAt ? new Date(cache.generatedAt).getTime() : Number.NaN;
  const nowMs=currentNow.getTime();
  const clockError=!Number.isFinite(nowMs)?'Invalid invocation clock; bound observation unavailable.':!Number.isFinite(generatedMs)?'Invalid cache clock; bound observation unavailable.':generatedMs>nowMs+120_000?'Future cache clock exceeds allowed skew; bound observation unavailable.':undefined;
  const clockMs=clockError?Number.NaN:Math.max(generatedMs,nowMs);
  const binding = (metric:string) => bindings.find((item)=>item.metric===metric);
  const product = (item:Binding|undefined, kind:keyof CacheStation['products']):Product|undefined => boundProduct(item?.sensorId ? cache?.sensors?.[item.sensorId]?.products?.[kind] : item?.availability==='unavailable' ? {kind:'unavailable',supported:false,freshness:'unavailable',reason:item.warning} : undefined, item, clockMs, clockError);
  const tide=binding('tide'), levelBinding=binding('tide_level'), windBinding=binding('wind'), waveBinding=binding('wave'), tempBinding=binding('temperature');
  const waveProduct=product(waveBinding,'buoy'), temperatureProduct=product(tempBinding,'buoy');
  const products={ prediction:product(tide,'prediction'), observedLevel:product(levelBinding,'observedLevel'), wind:product(windBinding,'wind'), buoy:waveProduct };
  const result=telemetryFromCache({key:fallbackName,health:'partial',products},fallbackName,cache?.generatedAt,currentNow);
  result.observations.level=boundMeta(metadata(products.observedLevel),levelBinding ?? tide);
  result.observations.wind=boundMeta(metadata(products.wind),windBinding);
  result.observations.wave=boundMeta(metadata(waveProduct),waveBinding);
  result.observations.temperature=boundMeta(metadata(temperatureProduct),tempBinding);
  result.observations.buoy=result.observations.wave;
  result.status=aggregate([products.observedLevel,products.wind,waveProduct,temperatureProduct]);
  if (result.observations.wave.availability==='unavailable') { result.waveHeightFt=undefined; result.wavePeriodSec=undefined; }
  const temperature=observed(temperatureProduct), temperatureC=finite(temperature?.waterTempC);
  result.waterTempF=temperatureC===undefined?undefined:`${Math.round(temperatureC*9/5+32)}°F`;
  deepFreeze(result);
  return result;
}

const validDate=(value:unknown)=>typeof value==='string'&&Number.isFinite(new Date(value).getTime());
const finiteNumber=(value:unknown)=>typeof value==='number'&&Number.isFinite(value);
const pollutionKeys=new Set(['__proto__','constructor','prototype']);
function invalid(message:string):never{throw new Error(`Invalid live-status cache: ${message}`);}
function ownData(value:unknown,label:string,allowed?:readonly string[]):Record<string,unknown>{
  if(!value||typeof value!=='object'||Array.isArray(value))invalid(`${label} record`);
  if(Object.getOwnPropertySymbols(value).length)invalid(`${label} symbol key`);
  const descriptors=Object.getOwnPropertyDescriptors(value);
  const result=Object.create(null) as Record<string,unknown>;
  for(const [key,descriptor] of Object.entries(descriptors)){
    if(pollutionKeys.has(key)||(allowed&&!allowed.includes(key)))invalid(`${label} key ${key}`);
    if(!('value' in descriptor))invalid(`${label} accessor ${key}`);
    result[key]=descriptor.value;
  }
  return result;
}
function required(record:Record<string,unknown>,key:string,label:string):unknown{
  if(!Object.hasOwn(record,key))invalid(`${label} required field ${key}`);
  return record[key];
}
function primitiveArray(value:unknown,label:string,kind:'string'):string[]{
  if(!Array.isArray(value)||Object.getPrototypeOf(value)!==Array.prototype||Object.getOwnPropertySymbols(value).length)invalid(`${label} array`);
  const descriptors=Object.getOwnPropertyDescriptors(value);
  const keys=Object.keys(descriptors).filter((key)=>key!=='length');
  if(keys.length!==value.length||keys.some((key,index)=>key!==String(index)))invalid(`${label} dense array`);
  const result:string[]=[];
  for(const key of keys){const descriptor=descriptors[key];if(!('value' in descriptor)||typeof descriptor.value!==kind)invalid(`${label} item`);result.push(descriptor.value);}
  return result;
}
function recordEntries(value:unknown,label:string):Array<[string,unknown]>{
  const record=ownData(value,label);
  return Object.keys(record).map((key)=>[key,record[key]]);
}
const productKeys=['kind','supported','freshness','reason','stationId','stationName','observedAt','fetchedAt','ageMinutes','lastKnownGood','values','value','speedMps','gustMps','directionDeg','directionCardinal','windDirectionDeg','windSpeedMps','waveHeightM','dominantPeriodSec','averagePeriodSec','meanWaveDirectionDeg','pressureHpa','airTempC','waterTempC','unit','datum','environment','platform','warning'] as const;
const observedNumericKeys=['value','speedMps','gustMps','directionDeg','windDirectionDeg','windSpeedMps','waveHeightM','dominantPeriodSec','averagePeriodSec','meanWaveDirectionDeg','pressureHpa','airTempC','waterTempC'] as const;
const observedStringKeys=['directionCardinal','unit','datum','environment','platform','warning'] as const;
function canonicalPredictionValues(value:unknown,recordKey:string):PredictionProduct['values']{
  if(!Array.isArray(value)||Object.getPrototypeOf(value)!==Array.prototype||Object.getOwnPropertySymbols(value).length)invalid(`${recordKey} prediction values array`);
  const descriptors=Object.getOwnPropertyDescriptors(value);const keys=Object.keys(descriptors).filter((key)=>key!=='length');
  if(keys.length!==value.length||keys.some((key,index)=>key!==String(index)))invalid(`${recordKey} prediction values dense array`);
  return keys.map((key)=>{
    const descriptor=descriptors[key];if(!('value' in descriptor))invalid(`${recordKey} prediction value accessor`);
    const item=ownData(descriptor.value,`${recordKey} prediction value`,['observedAt','value','type','unit']);
    const observedAt=required(item,'observedAt',recordKey),numericValue=required(item,'value',recordKey),unit=required(item,'unit',recordKey);
    if(!validDate(observedAt)||!finiteNumber(numericValue)||unit!=='m'||(Object.hasOwn(item,'type')&&!['H','L'].includes(String(item.type))))invalid(`${recordKey} prediction value`);
    const result=Object.create(null) as PredictionProduct['values'][number];result.observedAt=observedAt as string;result.value=numericValue as number;result.unit='m';if(Object.hasOwn(item,'type'))result.type=item.type as string;return result;
  });
}
function canonicalProduct(value:unknown,recordKey:string,expectedStationId?:string):Product{
  const record=ownData(value,`${recordKey} product`,productKeys);
  const kind=required(record,'kind',recordKey);
  if(kind==='unavailable'){
    const supported=required(record,'supported',recordKey),freshness=required(record,'freshness',recordKey),reason=required(record,'reason',recordKey);
    if(typeof supported!=='boolean'||freshness!=='unavailable'||typeof reason!=='string'||!reason.trim()||Object.keys(record).some((key)=>!['kind','supported','freshness','reason'].includes(key)))invalid(`${recordKey} unavailable product`);
    return Object.assign(Object.create(null),{kind:'unavailable',supported,freshness:'unavailable',reason}) as UnavailableProduct;
  }
  const stationId=required(record,'stationId',recordKey),stationName=required(record,'stationName',recordKey),freshness=required(record,'freshness',recordKey);
  if(expectedStationId!==undefined&&stationId!==expectedStationId)invalid(`${recordKey} station identity stationId`);
  if(typeof stationId!=='string'||!stationId.trim()||typeof stationName!=='string'||!stationName.trim())invalid(`${recordKey} station identity`);
  if(kind==='prediction'){
    const values=canonicalPredictionValues(required(record,'values',recordKey),recordKey);
    if(freshness!=='forecast'||Object.keys(record).some((key)=>!['kind','stationId','stationName','freshness','values'].includes(key)))invalid(`${recordKey} prediction envelope`);
    return Object.assign(Object.create(null),{kind:'prediction',stationId,stationName,freshness:'forecast',values}) as PredictionProduct;
  }
  if(kind!=='observed')invalid(`${recordKey} product kind`);
  const observedAt=required(record,'observedAt',recordKey),ageMinutes=required(record,'ageMinutes',recordKey),lastKnownGood=required(record,'lastKnownGood',recordKey);
  if(!validDate(observedAt)||!finiteNumber(ageMinutes)||Number(ageMinutes)<0||!['live','delayed','stale'].includes(String(freshness))||typeof lastKnownGood!=='boolean')invalid(`${recordKey} observed envelope`);
  if(Object.hasOwn(record,'fetchedAt')&&!validDate(record.fetchedAt))invalid(`${recordKey} fetchedAt`);
  for(const key of observedNumericKeys)if(Object.hasOwn(record,key)&&!finiteNumber(record[key]))invalid(`${recordKey} ${key}`);
  for(const key of observedStringKeys)if(Object.hasOwn(record,key)&&typeof record[key]!=='string')invalid(`${recordKey} ${key}`);
  const allowedObserved=new Set(['kind','stationId','stationName','observedAt','fetchedAt','ageMinutes','freshness','lastKnownGood',...observedNumericKeys,...observedStringKeys]);
  if(Object.keys(record).some((key)=>!allowedObserved.has(key)))invalid(`${recordKey} observed key`);
  const result=Object.create(null) as Record<string,unknown>;
  for(const key of allowedObserved)if(Object.hasOwn(record,key))result[key]=record[key];
  return result as ObservedProduct;
}
function canonicalStation(value:unknown,key:string,expectedStationId?:string):CacheStation{
  const record=ownData(value,key,['key','health','products','errors']);
  const stationKey=required(record,'key',key),health=required(record,'health',key),productsValue=required(record,'products',key);
  if(stationKey!==key||!['live','delayed','stale','partial','unavailable'].includes(String(health)))invalid(`${key} station envelope`);
  const productsRecord=ownData(productsValue,`${key} products`,['prediction','observedLevel','wind','buoy']);
  const products=Object.create(null) as CacheStation['products'];
  for(const kind of Object.keys(productsRecord) as Array<keyof CacheStation['products']>)products[kind]=canonicalProduct(productsRecord[kind],key,expectedStationId);
  const result=Object.create(null) as CacheStation;result.key=key;result.health=health as Freshness;result.products=products;
  if(Object.hasOwn(record,'errors'))result.errors=primitiveArray(record.errors,`${key} errors`,'string');
  return result;
}
function canonicalStationRecord(value:unknown,label:string,sensors:boolean):Record<string,CacheStation>{
  const result=Object.create(null) as Record<string,CacheStation>;
  for(const [key,station] of recordEntries(value,label)){
    if(!key||(sensors&&!key.startsWith('sensor:')))invalid(`${key} sensor key`);
    result[key]=canonicalStation(station,key,sensors?key.slice('sensor:'.length):undefined);
  }
  return result;
}

/**
 * Same-origin structural ingestion boundary. It copies own data descriptors into
 * a frozen, null-prototype graph before issuing identity. Inherited fields,
 * accessors, symbols, custom prototypes, and caller mutation cannot affect the
 * issued snapshot. This remains structural, not cryptographic, authenticity.
 */
export function ingestLiveStatusCache(raw:unknown):LiveStatusCache{
  const record=ownData(raw,'envelope',['schemaVersion','generatedAt','status','healthCounts','totalStations','sources','stations','sensors']);
  const schemaVersion=required(record,'schemaVersion','envelope'),generatedAt=required(record,'generatedAt','envelope'),status=required(record,'status','envelope');
  const healthCountsValue=required(record,'healthCounts','envelope'),totalStations=required(record,'totalStations','envelope'),sourcesValue=required(record,'sources','envelope');
  const stationsValue=required(record,'stations','envelope'),sensorsValue=required(record,'sensors','envelope');
  if(schemaVersion!==4||!validDate(generatedAt)||!['live','delayed','stale','partial','unavailable'].includes(String(status))||!finiteNumber(totalStations))invalid('required envelope fields');
  const healthCounts=Object.create(null) as Record<string,number>;
  for(const [key,value] of recordEntries(healthCountsValue,'healthCounts')){if(!key||!finiteNumber(value)||Number(value)<0)invalid('healthCounts');healthCounts[key]=value as number;}
  const result=Object.create(null) as LiveStatusCache;
  result.schemaVersion=4;result.generatedAt=generatedAt as string;result.status=status as Freshness;result.healthCounts=healthCounts;result.totalStations=totalStations as number;result.sources=primitiveArray(sourcesValue,'sources','string');result.stations=canonicalStationRecord(stationsValue,'stations',false);result.sensors=canonicalStationRecord(sensorsValue,'sensors',true);
  deepFreeze(result);
  issuedCaches.add(result);
  return result;
}

/** Reviewed display adapter: bindings are obtained internally from researchSpots. */
export function reviewedTelemetryFromCache(cache:LiveStatusCache|undefined,spotId:string,currentNow=new Date()):LiveTelemetry|undefined{
  if(!cache||!issuedCaches.has(cache))return undefined;
  const spot=researchSpots.find((item)=>item.id===spotId);
  if(!spot)return undefined;
  const result=telemetryFromBindings(cache,spot.sensorBindings,spot.displayName,currentNow);
  issuedTelemetry.add(result);
  return result;
}
