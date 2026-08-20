import type { Species, Spot } from '../data';
import type { LiveStatusCache, LiveTelemetry } from '../telemetry';
import { evaluateSpeciesOpportunity, exactTaxonScience, type ExactTaxonId, type ExactTaxonScienceRecord, type HistoricalOccurrenceEvidence, type OpportunityConditions, type OpportunityResult } from './fauna-opportunity';
import { evidenceForSpotId, researchSourceForId, researchSpots } from './research-catalog';
import type { StableId } from './index';
import { produceCurrentSpotLegalDecision } from './legal-provenance';
import { produceConditionSnapshotFromCache } from './safety-provenance';
import { deepFreeze, type DeepReadonly } from '../deep-freeze';

const labelToTaxon:Partial<Record<Species,ExactTaxonId>>={'Striped Bass':'species:striped-bass',Halibut:'species:california-halibut'};

function reviewedOccurrenceFor(spotId:StableId,taxonId:ExactTaxonId):HistoricalOccurrenceEvidence[]{
  return evidenceForSpotId(spotId).filter((edge)=>edge.speciesId===taxonId).map((edge)=>({
    id:edge.id as StableId,taxonId,sourceId:'source:inaturalist-research-grade',derivativeSourceId:edge.sourceIds[0] as StableId|undefined,evidenceRole:'community-corroboration',
    sourceGeometry:{kind:'unknown',publicResolution:'Source observation geometries are not represented in this client derivative.'},
    queryGeometry:{kind:'radius',radiusKm:edge.locality.radiusKm??5,description:'Community observations queried within a radius around a catalog spot coordinate.'},
    samplingContract:{version:1,hash:'unregistered:community-catalog-derivative'},applicabilityReview:{id:'review:not-applicable',version:1},
    timeCoverage:{eventDateCoverage:'Event-date coverage not retained in this catalog derivative.',timeOfDayCoverage:'Event-time coverage not retained in this catalog derivative.',reviewedAt:edge.reviewedAt},
    sampling:{method:edge.evidenceType.replaceAll('-',' '),samplingFrame:'Unprocessed opportunistic community observations.',effortUnit:'unknown',zeroSemantics:'No surveyed-zero semantics.',stationInclusion:'No station frame.',catchabilityLimits:'Uneven effort, reporting, detectability, coordinate, and identification limits.',lifeStage:'not supplied',stageDerivation:'No life-stage derivation.',nonDetectionEligible:false,nonDetectionPolicy:'Cannot infer absence, abundance, or seasonality.'},
    spatialApplicability:{reviewStatus:'not-reviewed',shorelineWaterbodyContinuity:'unknown',habitatCompatibility:'unknown',coordinateUncertainty:'unknown',eventDateTimeCoverage:'unknown',methodCompatibility:'unknown',lifeStageCompatibility:'unknown',samplingSupport:'unknown',limitations:[edge.locality.warning,'No favorable spot prior until every applicability dimension is explicitly reviewed.']},
    evidenceGrade:edge.confidence==='high'?'B':'C',limitations:['Reviewed local corroboration only; not source fish-location geometry, spot occurrence, current presence, abundance, absence, or seasonality.'],
  }));
}

export const reviewedOccurrenceRecords:readonly DeepReadonly<HistoricalOccurrenceEvidence>[]=deepFreeze((['spot:ocean-beach','spot:linda-mar','spot:crissy-field'] as StableId[]).flatMap((spotId)=>(['species:striped-bass','species:california-halibut','species:barred-surfperch'] as ExactTaxonId[]).flatMap((taxonId)=>reviewedOccurrenceFor(spotId,taxonId))));

export interface OccurrenceEvidenceOverlay {
  readonly id:StableId;readonly spotId:StableId;readonly taxonId:ExactTaxonId;readonly geometry:{readonly kind:'query-radius';readonly spotReferenceId:StableId;readonly radiusMeters:number;readonly publicResolution:string};readonly sourceId:StableId;readonly method:string;readonly reviewedAt:string;readonly evidenceAgeLabel:string;
  readonly evidenceCoverage:'low';readonly displayStatus:'reviewed local corroboration only';readonly legend:string;
}
export const occurrenceEvidenceOverlays:readonly OccurrenceEvidenceOverlay[]=deepFreeze((['spot:ocean-beach','spot:linda-mar','spot:crissy-field'] as StableId[]).flatMap((spotId)=>reviewedOccurrenceRecords.filter((record)=>reviewedOccurrenceFor(spotId,record.taxonId).some((e)=>e.id===record.id)).map((record)=>({
  id:`overlay:${record.id.replace('evidence:','')}` as StableId,spotId,taxonId:record.taxonId,geometry:{kind:'query-radius',spotReferenceId:spotId,radiusMeters:(record.queryGeometry.radiusKm??5)*1000,publicResolution:`${record.queryGeometry.radiusKm??5} km catalog query radius`},
  sourceId:record.sourceId,method:record.sampling.method,reviewedAt:record.timeCoverage.reviewedAt,evidenceAgeLabel:`Reviewed ${record.timeCoverage.reviewedAt.slice(0,10)}`,evidenceCoverage:'low',displayStatus:'reviewed local corroboration only',
  legend:'Catalog query area for reviewed local corroboration only — not source fish-location geometry, habitat geometry, live presence, or a favorable spot prior.',
}))));

export interface SelectedWaterOpportunity {displayLabel:string;taxonId:string;ecology?:{scientificName:string;lifeStages:ExactTaxonScienceRecord['lifeStages'];habitat:ExactTaxonScienceRecord['habitat'];forageGuilds:string[];feedingMode:string};result:OpportunityResult}
export function buildSelectedWaterOpportunity(spot:Spot,telemetry:LiveTelemetry,evaluatedAt=new Date().toISOString(),cache?:LiveStatusCache):SelectedWaterOpportunity[]{
  void telemetry;
  const record=researchSpots.find((item)=>item.id===spot.stableId);
  const spotId=(spot.stableId??`spot:${spot.id}`) as StableId;
  const exactEvidenceTaxa=evidenceForSpotId(spotId).map(({speciesId})=>speciesId).filter((taxonId):taxonId is ExactTaxonId=>Object.hasOwn(exactTaxonScience,taxonId));
  const projectedTaxa:ExactTaxonId[]=[];
  const seen=new Set<ExactTaxonId>();
  const include=(taxonId:ExactTaxonId|undefined)=>{if(taxonId&&Object.hasOwn(exactTaxonScience,taxonId)&&!seen.has(taxonId)){seen.add(taxonId);projectedTaxa.push(taxonId);}};
  exactEvidenceTaxa.forEach(include);
  spot.species.forEach((label)=>include(labelToTaxon[label]));
  return projectedTaxa.map((taxonId)=>{
    const result=evaluateSpeciesOpportunity({taxonId,spotId,habitatIds:(record?.habitatIds??[]) as StableId[],environmentClass:record?.environmentClass??'unknown',evaluatedAt,occurrence:reviewedOccurrenceFor(spotId,taxonId),habitatEvidence:[],conditions:cache?produceConditionSnapshotFromCache(cache,spotId,new Date(evaluatedAt)) as OpportunityConditions|undefined:undefined,legal:produceCurrentSpotLegalDecision(spot,taxonId,evaluatedAt),access:{state:record?.access.state==='open'?'open':record?.access.state==='closed'?'closed':'unknown'},mpa:{resolved:false,intersectsNoTake:false},safety:{footing:'unknown',explicitlyResolved:false}});
    const science=exactTaxonScience[taxonId];const ecology={scientificName:science.scientificName,lifeStages:science.lifeStages,habitat:science.habitat,forageGuilds:science.forageGuilds,feedingMode:science.feedingMode};
    return {displayLabel:science.commonName,taxonId,ecology,result};
  });
}
export function buildScientificStatusExport(spot:Spot,telemetry:LiveTelemetry,evaluatedAt=new Date().toISOString(),cache?:LiveStatusCache){
  return {reportType:'bay-bite-scientific-status',generatedAt:evaluatedAt,semantics:{opportunity:'relative and conditional; not catch probability',evidenceCoverage:'coverage of required evidence dimensions',safety:'separate fail-closed gate',claimProvenance:'per presentation field; field heuristics excluded from scientific coverage'},selectedWater:{id:spot.id,stableId:spot.stableId,name:spot.name,region:spot.region,type:spot.type},opportunities:buildSelectedWaterOpportunity(spot,telemetry,evaluatedAt,cache),presentationContract:{claimProvenance:'required for every presentation field; empty when no presentation passes gates'}};
}
export function overlaySourceTitle(sourceId:StableId):string{return researchSourceForId(sourceId)?.title??sourceId;}
