import type { EligibilityResult, StableId } from './index';
import { isVerifiedLegalDecision, type LegalDecision } from './legal-provenance';
import { conditionsAreTrusted, footingIsTrusted, type ConditionSnapshot, type FootingInspection } from './safety-provenance';
import { reviewedExpansionProfiles } from './reviewed-exact-taxon-expansion';
import { deepFreeze } from '../deep-freeze';

export type ExactTaxonId = `species:${string}`;
export type EvidenceGrade = 'A' | 'B' | 'C';
export type FactorFit = 'favorable' | 'mixed' | 'adverse' | 'unknown';
export type CoverageLevel = 'low'|'medium'|'high';
export type CoverageDimension = 'missing'|'partial'|'complete';
export type SafetyStatus = 'safe'|'unsafe'|'unknown';

export interface EvidenceCitation { sourceId:StableId; supports:string; grade:EvidenceGrade; limitations:string }
export interface ClaimProvenance { kind:'sourced'|'field-heuristic'; sourceIds:StableId[]; limitations:string[]; includedInScientificCoverage:boolean }
export type PresentationClaimField = 'lureFamily'|'forageMatch'|'profileSize'|'depthZone'|'retrieve'|'colorContrast'|'vibration'|'rigWeight';
export type PresentationClaims = Record<PresentationClaimField, ClaimProvenance>;
export type ScienceClaimProvenance =
  | {state:'known';value:unknown;sourceIds:StableId[];limitations?:string[]}
  | {state:'unknown';reason:string;sourceIds?:readonly []};

interface PresentationTemplate {
  forageGuilds:string[]; habitats:StableId[]; lureFamily:string; profileSize:string; depthZone:string; retrieve:string; rigWeight:string; vibration:string;
  claimProvenance:Omit<PresentationClaims,'colorContrast'>;
}
export interface ExactTaxonScienceRecord {
  id:ExactTaxonId; commonName:string; scientificName:string;
  authorityIdentifiers?:Readonly<Record<string,string>>;
  domain?:Readonly<Record<string,unknown>>;
  lifeStages:Array<{stage:string;waterAndSalinity:string[];substrateStructureDepth:string[]}>;
  habitat:{compatible:StableId[];incompatible:StableId[];nuances:string[]};
  substrateStructureSalinityDepthExposure?:string[];
  seasonalPhenology:string[]; dielLight:string[]; forageGuilds:string[]; feedingMode:string;
  conditionResponses:Array<{input:'current'|'wave'|'wind'|'clarity'|'light';rule:string;uncertainty:string}>;
  shorePresentations:PresentationTemplate[]; evidence:EvidenceCitation[]; uncertainty:string[];
  shoreAccessibility?:string; vulnerabilities?:string[];
  localHistoricalEvidence?:Readonly<Record<string,unknown>>;
  legalIdentityRuleStatus?:Readonly<Record<string,unknown>>;
  recommendability?:string; profileVersion?:string; reviewedAt?:string;
  claimProvenance?:Readonly<Record<string,ScienceClaimProvenance>>;
  claims:Record<'domain'|'environment'|'substrate'|'structure'|'salinity'|'depth'|'forage'|'season'|'presentation',ScienceClaimProvenance>;
  targetingPolicy?:'conservation-legal-alert-first';
}

const CDFW_HALIBUT='source:cdfw-california-halibut-esr' as StableId;
const CDFW_STRIPER='source:wildlife-ca-gov-fishing-inland-striped-bass' as StableId;
const USGS_STRIPER_DIET='source:usgs-striped-bass-diet-2022' as StableId;
const SURFPERCH_METADATA='source:marinespecies-wildlife-ca-gov-barred-surfperch-and-redtail-surfperch-true' as StableId;
const heuristic=(limitations:string[]):ClaimProvenance=>({kind:'field-heuristic',sourceIds:[],limitations,includedInScientificCoverage:false});
const sourced=(sourceIds:StableId[],limitations:string[]):ClaimProvenance=>({kind:'sourced',sourceIds,limitations,includedInScientificCoverage:true});
const presentationClaims=(forageSourceIds:StableId[],taxonLimit:string):Omit<PresentationClaims,'colorContrast'>=>({
  lureFamily:heuristic(['Field heuristic; no comparative local catch/effort validation.']),
  forageMatch:forageSourceIds.length?sourced(forageSourceIds,[taxonLimit]):heuristic(['Forage-profile match is unvalidated for this exact taxon in local catch/effort data.']),
  profileSize:heuristic(['Qualitative profile only; no exact size claim or calibrated optimum.']),
  depthZone:heuristic(['Requires mapped depth/substrate and local shore reachability; no exact depth claim.']),
  retrieve:heuristic(['Field-control heuristic; not evidence of increased catch probability.']),
  vibration:heuristic(['Qualitative visibility/control heuristic; no frequency claim.']),
  rigWeight:heuristic(['Select for control and safety; no universal exact weight is asserted.']),
});

export const exactTaxonScience:Readonly<Record<ExactTaxonId,ExactTaxonScienceRecord>>=deepFreeze({
  'species:striped-bass':{
    id:'species:striped-bass',commonName:'Striped bass',scientificName:'Morone saxatilis',
    lifeStages:[{stage:'juvenile',waterAndSalinity:['fresh to estuarine'],substrateStructureDepth:['shoals, channel margins, marsh-edge water']},{stage:'adult',waterAndSalinity:['fresh to marine'],substrateStructureDepth:['channels, current seams, beaches, rip edges']}],
    habitat:{compatible:['habitat:surf','habitat:pier','habitat:jetty','habitat:breakwater','habitat:bay-shore','habitat:tidal-slough','habitat:estuary','habitat:estuary-mouth'],incompatible:['habitat:rocky-shore'],nuances:['Coast and Bay use require life-stage, waterbody continuity, mapped habitat, and method review; neither implies occurrence at every spot.']},
    seasonalPhenology:['Movement varies among resident and migratory contingents; no pooled generic season curve is used.'],dielLight:['Light can inform visibility only; it is not a feeding or catch multiplier.'],
    forageGuilds:['small pelagic fish','estuarine crustaceans and fishes'],feedingMode:'mobile predator with habitat- and season-dependent forage',
    conditionResponses:[{input:'current',rule:'Assess shore control at mapped local structure.',uncertainty:'Speed without local geometry is insufficient.'},{input:'wave',rule:'Rough waves can block safe shore access.',uncertainty:'Offshore data may not resolve shorebreak.'},{input:'wind',rule:'Strong wind can block casting control.',uncertainty:'Exposure depends on orientation.'},{input:'clarity',rule:'Use only as a visibility input.',uncertainty:'Qualitative proxy.'},{input:'light',rule:'Use only as a visibility input.',uncertainty:'Cloud and artificial light alter it.'}],
    shorePresentations:[{forageGuilds:['small pelagic fish','estuarine crustaceans and fishes'],habitats:['habitat:surf','habitat:bay-shore','habitat:estuary-mouth','habitat:pier'],lureFamily:'forage-profile shore presentation',profileSize:'qualitative local-forage profile',depthZone:'mapped, shore-reachable water column',retrieve:'controlled retrieve matched to current and access',rigWeight:'minimum weight needed for safe control',vibration:'qualitative visibility or displacement only',claimProvenance:presentationClaims([USGS_STRIPER_DIET],'Diet evidence is habitat-, season-, and sampled-fish-specific.')}],
    evidence:[{sourceId:CDFW_STRIPER,supports:'Exact-taxon life history and regional fishery context.',grade:'A',limitations:'Does not establish local/current occurrence or lure effectiveness.'},{sourceId:USGS_STRIPER_DIET,supports:'Study-specific estuarine forage composition.',grade:'A',limitations:'Cannot be generalized across all habitats, seasons, or sizes.'}],
    uncertainty:['Historical evidence is not live presence.','Community evidence cannot establish absence, abundance, or seasonality.'],
    claims:{domain:{state:'known',value:['fresh','estuarine','marine'],sourceIds:[CDFW_STRIPER]},environment:{state:'known',value:['fresh','estuarine','marine'],sourceIds:[CDFW_STRIPER]},substrate:{state:'known',value:['shoals','channels','marsh edge','beaches'],sourceIds:[CDFW_STRIPER]},structure:{state:'known',value:['channel margins','current seams','rip edges'],sourceIds:[CDFW_STRIPER]},salinity:{state:'known',value:['fresh to marine'],sourceIds:[CDFW_STRIPER]},depth:{state:'unknown',reason:'No calibrated shore depth range is asserted.'},forage:{state:'known',value:['small pelagic fish','estuarine crustaceans and fishes'],sourceIds:[USGS_STRIPER_DIET]},season:{state:'unknown',reason:'Movement varies among contingents; no generic local season is asserted.'},presentation:{state:'unknown',reason:'Field heuristics are excluded from scientific coverage.'}},
  },
  'species:california-halibut':{
    id:'species:california-halibut',commonName:'California halibut',scientificName:'Paralichthys californicus',
    lifeStages:[{stage:'juvenile',waterAndSalinity:['estuarine to marine'],substrateStructureDepth:['shallow soft-bottom nursery, eelgrass edge']},{stage:'adult',waterAndSalinity:['marine and bay'],substrateStructureDepth:['sand or mud flats, channels, sand beside structure']}],
    habitat:{compatible:['habitat:surf','habitat:pier','habitat:bay-shore','habitat:estuary-mouth'],incompatible:['habitat:tidal-slough','habitat:rocky-shore'],nuances:['Compatibility requires mapped soft bottom and life-stage review; structure or a broad Bay label alone is insufficient.']},
    seasonalPhenology:['Season is context only; no pooled generic season curve is used.'],dielLight:['Light and clarity are visibility inputs, not bite multipliers.'],forageGuilds:['small fishes','crustaceans','small squid'],feedingMode:'soft-bottom ambush predator',
    conditionResponses:[{input:'current',rule:'Assess controllable bottom proximity.',uncertainty:'Mapped depth and relief are required.'},{input:'wave',rule:'Rough surge can block safe bottom control.',uncertainty:'Regional observations may not resolve shorebreak.'},{input:'wind',rule:'Strong wind can block casting and line control.',uncertainty:'Orientation matters.'},{input:'clarity',rule:'Visibility input only.',uncertainty:'Qualitative proxy.'},{input:'light',rule:'Visibility input only.',uncertainty:'Depth and cloud alter it.'}],
    shorePresentations:[{forageGuilds:['small fishes','crustaceans'],habitats:['habitat:surf','habitat:bay-shore','habitat:estuary-mouth','habitat:pier'],lureFamily:'soft-bottom forage-profile presentation',profileSize:'qualitative prey profile',depthZone:'mapped, shore-reachable soft bottom',retrieve:'controlled movement preserving bottom proximity',rigWeight:'minimum weight needed for safe bottom control',vibration:'qualitative displacement only',claimProvenance:presentationClaims([CDFW_HALIBUT],'Regional diet/habitat evidence does not validate a particular lure or local catch probability.')}],
    evidence:[{sourceId:CDFW_HALIBUT,supports:'Exact-taxon biology and soft-bottom habitat context.',grade:'A',limitations:'Regional habitat use does not establish spot occurrence, legal adult availability, or lure effectiveness.'}],uncertainty:['Exact substrate, depth, and life stage are often unresolved.','Community evidence cannot establish absence, abundance, or seasonality.'],
    claims:{domain:{state:'known',value:['estuarine','marine'],sourceIds:[CDFW_HALIBUT]},environment:{state:'known',value:['estuarine','marine'],sourceIds:[CDFW_HALIBUT]},substrate:{state:'known',value:['sand','mud'],sourceIds:[CDFW_HALIBUT]},structure:{state:'known',value:['flats','channels','eelgrass edge'],sourceIds:[CDFW_HALIBUT]},salinity:{state:'known',value:['estuarine to marine'],sourceIds:[CDFW_HALIBUT]},depth:{state:'unknown',reason:'Exact shore-reachable depth remains site specific.'},forage:{state:'known',value:['small fishes','crustaceans','small squid'],sourceIds:[CDFW_HALIBUT]},season:{state:'unknown',reason:'No pooled generic season curve is asserted.'},presentation:{state:'unknown',reason:'Field heuristics are excluded from scientific coverage.'}},
  },
  'species:barred-surfperch':{
    id:'species:barred-surfperch',commonName:'Barred surfperch',scientificName:'Amphistichus argenteus',
    lifeStages:[{stage:'juvenile and adult',waterAndSalinity:['marine surf zone'],substrateStructureDepth:['open sandy beach, inner trough, shallow subtidal sand']}],
    habitat:{compatible:['habitat:surf'],incompatible:['habitat:tidal-slough','habitat:bay-shore','habitat:estuary','habitat:rocky-shore'],nuances:['Nearby Bay/estuary observations do not substitute for reviewed open-sandy-surf applicability.']},
    seasonalPhenology:['No generic season curve is produced from community observations.'],dielLight:['Light is a visibility input only.'],forageGuilds:['surf-zone benthic invertebrates'],feedingMode:'surf-zone benthic forager',
    conditionResponses:[{input:'current',rule:'Assess whether the wash is controllable.',uncertainty:'Local trough geometry is required.'},{input:'wave',rule:'Rough shorebreak blocks safety.',uncertainty:'Buoy data may not resolve shorebreak.'},{input:'wind',rule:'Strong wind blocks light-rig control.',uncertainty:'Orientation matters.'},{input:'clarity',rule:'Visibility input only.',uncertainty:'Qualitative proxy.'},{input:'light',rule:'Visibility input only.',uncertainty:'Foam and cloud alter it.'}],
    shorePresentations:[{forageGuilds:['surf-zone benthic invertebrates'],habitats:['habitat:surf'],lureFamily:'small benthic-forage profile',profileSize:'qualitative invertebrate profile',depthZone:'mapped, safely reachable sandy wash',retrieve:'controlled drift or movement near mapped sand',rigWeight:'minimum weight needed for safe control',vibration:'no frequency claim; qualitative displacement only',claimProvenance:presentationClaims([],'No source claim.')}],
    evidence:[{sourceId:SURFPERCH_METADATA,supports:'Exact-taxon identity metadata only.',grade:'C',limitations:'Does not support occurrence, seasonality, abundance, habitat effectiveness, or lure claims.'}],uncertainty:['Family labels cannot authorize or establish exact-taxon evidence.','Community evidence cannot establish absence, abundance, or seasonality.'],
    claims:{domain:{state:'known',value:['marine'],sourceIds:[SURFPERCH_METADATA]},environment:{state:'unknown',reason:'Identity metadata does not establish actionable environment science.'},substrate:{state:'unknown',reason:'Identity metadata does not establish substrate science.'},structure:{state:'unknown',reason:'Identity metadata does not establish structure science.'},salinity:{state:'unknown',reason:'Identity metadata does not establish salinity science.'},depth:{state:'unknown',reason:'Identity metadata does not establish depth science.'},forage:{state:'unknown',reason:'Exact-taxon forage is not supported by the metadata source.'},season:{state:'unknown',reason:'No generic season curve is supported.'},presentation:{state:'unknown',reason:'Field heuristics are excluded from scientific coverage.'}},
  },
  ...reviewedExpansionProfiles,
});

export interface SourceGeometry { kind:'area'|'station'|'cell'|'unknown'; publicResolution:string; geometryRef?:string; stationId?:string }
export interface QueryGeometry { kind:'radius'|'polygon'|'none'; description:string; radiusKm?:number; geometryRef?:string }
type ReviewValue='reviewed'|'unknown'|'incompatible';
export interface SpatialApplicability {
  reviewStatus:'applicable'|'not-reviewed'|'not-applicable'; shorelineWaterbodyContinuity:ReviewValue; habitatCompatibility:ReviewValue; coordinateUncertainty:ReviewValue;
  eventDateTimeCoverage:ReviewValue; methodCompatibility:ReviewValue; lifeStageCompatibility:ReviewValue; samplingSupport:ReviewValue; reviewedAt?:string; limitations:string[];
}
export interface OccurrenceSampling {
  method:string; samplingFrame:string; effortUnit:string; zeroSemantics:string; stationInclusion:string; catchabilityLimits:string; lifeStage:string; stageDerivation:string;
  nonDetectionEligible:boolean; nonDetectionPolicy:string;
}
export interface HistoricalOccurrenceEvidence {
  id:StableId; taxonId:ExactTaxonId; sourceId:StableId; derivativeSourceId?:StableId; evidenceRole:'occurrence-prior'|'community-corroboration'; sourceGeometry:SourceGeometry; queryGeometry:QueryGeometry;
  samplingContract:{version:number;hash:string}; applicabilityReview:{id:StableId;version:number};
  timeCoverage:{start?:string;end?:string;eventDateCoverage:string;timeOfDayCoverage:string;reviewedAt:string}; sampling:OccurrenceSampling;
  spatialApplicability:SpatialApplicability; evidenceGrade:EvidenceGrade; limitations:string[];
}
export interface HabitatEvidence { id:StableId;sourceId:StableId;taxonId?:ExactTaxonId;reviewedGuild?:string;geometryRef:string;classification:string;publicResolution:string;mappedAt:string;compatible:boolean;limitations:string[] }
export type OpportunityConditions = ConditionSnapshot;
export interface OpportunityInput {
  taxonId:StableId; spotId:StableId; habitatIds:StableId[]; environmentClass:string; evaluatedAt:string; occurrence?:HistoricalOccurrenceEvidence[]; habitatEvidence?:HabitatEvidence[]; conditions?:OpportunityConditions;
  legal:LegalDecision; access:{state:'open'|'closed'|'unknown'}; mpa:{resolved:boolean;intersectsNoTake:boolean}; safety:FootingInspection;
}
export interface PresentationRecommendation { lureFamily:string;forageMatch:string;profileSize:string;colorContrast:string;vibration:string;depthZone:string;retrieve:string;rigWeight:string;why:string;shorePracticality:string;safetyBlockers:string[];claimProvenance:PresentationClaims }
export interface OpportunityResult {
  taxonId:StableId; status:'scored'|'insufficient-data'|'not-targetable'|'safety-blocked'; opportunityBand?:'lower'|'conditional'|'higher'; evidenceCoverage:CoverageLevel; safetyStatus:SafetyStatus;
  evidenceCoverageDimensions:{occurrenceSpatialApplicability:CoverageDimension;mappedHabitatGeometry:CoverageDimension;freshConditions:CoverageDimension;exactLegalAccessMpa:CoverageDimension;safety:CoverageDimension};
  factors:{historicalOccurrencePrior:FactorFit;habitatFit:FactorFit;conditionFit:FactorFit;legalGate:'open'|'blocked'|'unknown';lureFishability:FactorFit}; legalEligibility:EligibilityResult;
  evidenceCoverageReasons:string[]; missingInputs:string[]; corroborationOnly:Array<{evidenceId:StableId;sourceId:StableId;displayStatus:'reviewed local corroboration only';limitations:string[]}>;
  contributions:Array<{factor:string;effect:FactorFit;reason:string}>; reasons:string[]; caveats:string[]; presentations:PresentationRecommendation[]; livePresenceClaim:false;
}

const supported=(id:StableId):id is ExactTaxonId=>Object.hasOwn(exactTaxonScience,id);
interface OccurrenceDerivativeManifest {id:StableId;sourceId:StableId;sourceClass:'survey'|'community';taxonId:ExactTaxonId;sourceGeometry:SourceGeometry;queryGeometry:QueryGeometry;samplingContract:{version:number;hash:string};applicabilityReview:{id:StableId;version:number};allowedRole:HistoricalOccurrenceEvidence['evidenceRole'];spotIds?:readonly StableId[];waterbodyIds?:readonly StableId[]}
const reviewedOccurrenceDerivativeRegistry:Readonly<Record<string,Readonly<OccurrenceDerivativeManifest>>>=deepFreeze(Object.assign(Object.create(null) as Record<string,OccurrenceDerivativeManifest>,{
  'evidence:reviewed-striped-survey-v1':{id:'evidence:reviewed-striped-survey-v1',sourceId:'source:edi-deltafish-1075-1',sourceClass:'survey',taxonId:'species:striped-bass',sourceGeometry:{kind:'station',publicResolution:'fixed survey station',stationId:'TEST-1'},queryGeometry:{kind:'none',description:'No radius query used.'},samplingContract:{version:1,hash:'sha256:fixture-reviewed-otter-trawl-v1'},applicabilityReview:{id:'review:striped-crissy-applicability',version:1},allowedRole:'occurrence-prior',spotIds:['spot:crissy-field'] as StableId[]},
}));
const same=(left:unknown,right:unknown)=>JSON.stringify(left)===JSON.stringify(right);
const occurrenceManifestFor=(e:HistoricalOccurrenceEvidence,spotId:StableId)=>{
  const manifest=Object.hasOwn(reviewedOccurrenceDerivativeRegistry,e.id)?reviewedOccurrenceDerivativeRegistry[e.id]:undefined;
  if(!manifest||manifest.sourceClass!=='survey'||manifest.allowedRole!=='occurrence-prior'||e.evidenceRole!==manifest.allowedRole||e.sourceId!==manifest.sourceId||e.taxonId!==manifest.taxonId||!same(e.sourceGeometry,manifest.sourceGeometry)||!same(e.queryGeometry,manifest.queryGeometry)||!same(e.samplingContract,manifest.samplingContract)||!same(e.applicabilityReview,manifest.applicabilityReview)||manifest.spotIds&&!manifest.spotIds.includes(spotId))return undefined;
  return manifest;
};
const applicabilityComplete=(e:HistoricalOccurrenceEvidence,spotId:StableId)=>Boolean(occurrenceManifestFor(e,spotId))&&e.spatialApplicability.reviewStatus==='applicable'&&(['shorelineWaterbodyContinuity','habitatCompatibility','coordinateUncertainty','eventDateTimeCoverage','methodCompatibility','lifeStageCompatibility','samplingSupport'] as const).every((key)=>e.spatialApplicability[key]==='reviewed');
interface HabitatDerivativeManifest {id:StableId;sourceId:StableId;taxonId?:ExactTaxonId;reviewedGuild?:string;geometryRef:string;classification:string;mappedAt:string;version:number;spotIds?:readonly StableId[];waterbodyIds?:readonly StableId[];habitatIds:readonly StableId[]}
const reviewedHabitatDerivativeRegistry:Readonly<Record<string,Readonly<HabitatDerivativeManifest>>>=deepFreeze(Object.assign(Object.create(null) as Record<string,HabitatDerivativeManifest>,{
  'habitat-derivative:crissy-striped-bay-shore-v1':{id:'habitat-derivative:crissy-striped-bay-shore-v1',sourceId:'source:noaa-sf-bay-benthic-2011',taxonId:'species:striped-bass',geometryRef:'fixture:polygon-1',classification:'bay-shore substrate polygon',mappedAt:'2011-01-01',version:1,spotIds:['spot:crissy-field'] as StableId[],habitatIds:['habitat:bay-shore'] as StableId[]},
}));
const verifiedHabitatFor=(e:HabitatEvidence,input:OpportunityInput)=>{
  const manifest=Object.hasOwn(reviewedHabitatDerivativeRegistry,e.id)?reviewedHabitatDerivativeRegistry[e.id]:undefined;
  return Boolean(manifest&&e.sourceId===manifest.sourceId&&e.taxonId===manifest.taxonId&&e.reviewedGuild===manifest.reviewedGuild&&e.geometryRef===manifest.geometryRef&&e.classification===manifest.classification&&e.mappedAt===manifest.mappedAt&&(!manifest.spotIds||manifest.spotIds.includes(input.spotId))&&manifest.habitatIds.some((id)=>input.habitatIds.includes(id))&&(!manifest.taxonId||manifest.taxonId===input.taxonId));
};

type ReviewedScenarioId='scenario:crissy-striped-validation-v1';
const REVIEWED_SCENARIO_ID:ReviewedScenarioId='scenario:crissy-striped-validation-v1';
const REVIEWED_SCENARIO_CAPABILITY=Symbol('reviewed-scenario-evaluation');
type EvaluationCapability=typeof REVIEWED_SCENARIO_CAPABILITY;
const reviewedScenarioInput:OpportunityInput=deepFreeze({
  taxonId:'species:striped-bass',spotId:'spot:crissy-field',habitatIds:['habitat:bay-shore'],environmentClass:'inner_bay',evaluatedAt:'2026-08-13T18:00:00Z',
  occurrence:[{
    id:'evidence:reviewed-striped-survey-v1',taxonId:'species:striped-bass',sourceId:'source:edi-deltafish-1075-1',evidenceRole:'occurrence-prior',
    sourceGeometry:{kind:'station',publicResolution:'fixed survey station',stationId:'TEST-1'},queryGeometry:{kind:'none',description:'No radius query used.'},
    samplingContract:{version:1,hash:'sha256:fixture-reviewed-otter-trawl-v1'},applicabilityReview:{id:'review:striped-crissy-applicability',version:1},
    timeCoverage:{start:'1980-01-01',end:'2024-12-31',eventDateCoverage:'monthly samples in source period',timeOfDayCoverage:'sampling times retained by derivative',reviewedAt:'2026-08-13T00:00:00Z'},
    sampling:{method:'otter trawl',samplingFrame:'fixed open-water stations',effortUnit:'tow',zeroSemantics:'sample-level zero after station/sample/catch join',stationInclusion:'TEST-1 included by fixed scenario',catchabilityLimits:'Trawl selectivity; shore edge is not sampled.',lifeStage:'mixed/unspecified',stageDerivation:'No stage derivation applied.',nonDetectionEligible:false,nonDetectionPolicy:'Non-detection cannot establish absence outside matched gear, effort, season, habitat, and life stage.'},
    spatialApplicability:{reviewStatus:'applicable',shorelineWaterbodyContinuity:'reviewed',habitatCompatibility:'reviewed',coordinateUncertainty:'reviewed',eventDateTimeCoverage:'reviewed',methodCompatibility:'reviewed',lifeStageCompatibility:'reviewed',samplingSupport:'reviewed',reviewedAt:'2026-08-13T00:00:00Z',limitations:['NON-LIVE regional historical fixture only; not current Crissy Field presence.']},
    evidenceGrade:'B',limitations:['NON-LIVE fixed derivative for evaluator reachability only; not real occurrence, abundance, seasonality, or a catch forecast.'],
  }],
  habitatEvidence:[{id:'habitat-derivative:crissy-striped-bay-shore-v1',sourceId:'source:noaa-sf-bay-benthic-2011',taxonId:'species:striped-bass',geometryRef:'fixture:polygon-1',classification:'bay-shore substrate polygon',publicResolution:'regional polygon',mappedAt:'2011-01-01',compatible:true,limitations:['NON-LIVE historical regional fixture; not current microhabitat.']}],
  conditions:{observedAt:'2026-08-13T18:00:00Z',current:{state:'manageable',sourceId:'source:noaa-coops-api'},wave:{state:'manageable',sourceId:'source:noaa-ndbc'},wind:{state:'light',sourceId:'source:noaa-coops-api'},clarity:'clear',light:'bright'},
  legal:{status:'open',actionable:true,matchedRuleIds:['rule:striped-bass-sf-bay-2026'],reasons:['NON-LIVE fixed legal fixture; not current legal advice.']},
  access:{state:'open'},mpa:{resolved:true,intersectsNoTake:false},safety:{footing:'safe',explicitlyResolved:true},
});

function evaluateOpportunityCore(input:OpportunityInput,capability?:EvaluationCapability):OpportunityResult {
  const reviewedScenario=capability===REVIEWED_SCENARIO_CAPABILITY&&input===reviewedScenarioInput;
  const legalEligibility:EligibilityResult={status:input.legal.status,actionable:input.legal.actionable,matchedRuleIds:[...input.legal.matchedRuleIds],reasons:[...input.legal.reasons]};
  const legalVerified=reviewedScenario||isVerifiedLegalDecision(input.legal,{spotId:input.spotId,taxonId:input.taxonId,evaluatedAt:input.evaluatedAt,fishingMode:'shore'});
  if(!legalVerified){legalEligibility.status='unknown';legalEligibility.actionable=false;legalEligibility.reasons.push('Legal decision provenance is absent, stale, or does not match this evaluation input.');}
  const legalGate:OpportunityResult['factors']['legalGate']=!legalVerified||legalEligibility.status==='unknown'?'unknown':legalEligibility.status==='open'&&legalEligibility.actionable?'open':'blocked';
  const conditionKeys=['current','wave','wind','clarity','light'] as const;
  const conditionsTrusted=reviewedScenario||conditionsAreTrusted(input.conditions,input.spotId);
  const missingConditions=conditionKeys.filter((key)=>{const value=!conditionsTrusted||!input.conditions?undefined:key==='clarity'||key==='light'?input.conditions[key]:input.conditions[key]?.state;return !value||value==='unknown';});
  const age=input.conditions?new Date(input.evaluatedAt).getTime()-new Date(input.conditions.observedAt).getTime():Number.POSITIVE_INFINITY;
  const stale=!Number.isFinite(age)||age<0||age>3*60*60*1000;
  const unsafe=input.access.state==='closed'||input.safety.footing==='unsafe'||input.conditions?.wave?.state==='rough'||input.conditions?.wind?.state==='strong';
  const footingTrusted=reviewedScenario||footingIsTrusted(input.safety,input.spotId,input.evaluatedAt);
  const safetyUnknown=!unsafe&&(input.access.state==='unknown'||input.safety.footing==='unknown'||!input.safety.explicitlyResolved||!footingTrusted||!conditionsTrusted||!input.conditions||input.conditions.wave?.state==='unknown'||input.conditions.wind?.state==='unknown'||!input.conditions.wave||!input.conditions.wind);
  const safetyStatus:SafetyStatus=unsafe?'unsafe':safetyUnknown?'unknown':'safe';
  const allOccurrence=(input.occurrence??[]).filter((e)=>e.taxonId===input.taxonId);
  const corroborationOnly=reviewedScenario?[]:allOccurrence.filter((e)=>!applicabilityComplete(e,input.spotId)).map((e)=>({evidenceId:e.id,sourceId:e.sourceId,displayStatus:'reviewed local corroboration only' as const,limitations:[...e.limitations,...e.spatialApplicability.limitations]}));
  const applicableOccurrence=reviewedScenario?allOccurrence:allOccurrence.filter((e)=>applicabilityComplete(e,input.spotId));
  const suppliedHabitat=(input.habitatEvidence??[]).filter((e)=>Boolean(e.geometryRef));
  const mappedHabitat=reviewedScenario?suppliedHabitat:suppliedHabitat.filter((e)=>verifiedHabitatFor(e,input));
  const dimensions:OpportunityResult['evidenceCoverageDimensions']={
    occurrenceSpatialApplicability:applicableOccurrence.length?'complete':allOccurrence.length?'partial':'missing',mappedHabitatGeometry:mappedHabitat.some((e)=>e.compatible)?'complete':suppliedHabitat.length?'partial':'missing',
    freshConditions:!conditionsTrusted||!input.conditions||stale?'missing':missingConditions.length?'partial':'complete',exactLegalAccessMpa:legalGate==='open'&&input.access.state==='open'&&input.mpa.resolved&&!input.mpa.intersectsNoTake?'complete':legalGate==='unknown'||!input.mpa.resolved||input.access.state==='unknown'?'partial':'missing',
    safety:safetyStatus==='safe'?'complete':safetyStatus==='unknown'?'partial':'missing',
  };
  const completeCount=Object.values(dimensions).filter((v)=>v==='complete').length;
  const evidenceCoverage:CoverageLevel=dimensions.occurrenceSpatialApplicability!=='complete'||dimensions.mappedHabitatGeometry!=='complete'||dimensions.exactLegalAccessMpa!=='complete'||dimensions.safety!=='complete'?'low':completeCount===5?'high':completeCount>=3?'medium':'low';
  const missingInputs=[...missingConditions,...(stale&&input.conditions?['fresh condition observations']:[]),...(dimensions.occurrenceSpatialApplicability!=='complete'?['reviewed occurrence spatial applicability']:[]),...(dimensions.mappedHabitatGeometry!=='complete'?['mapped habitat geometry']:[]),...(input.access.state!=='open'?['open access status']:[]),...(!input.mpa.resolved?['exact MPA geometry']:[]),...(legalGate!=='open'?['exact actionable legal status']:[]),...(safetyStatus!=='safe'?['resolved safety status']:[])];
  const evidenceCoverageReasons=Object.entries(dimensions).filter(([,v])=>v!=='complete').map(([k,v])=>`${k}: ${v}`);
  const prior:FactorFit=applicableOccurrence.length?'favorable':'unknown';
  const common={taxonId:input.taxonId,evidenceCoverage,safetyStatus,evidenceCoverageDimensions:dimensions,legalEligibility,evidenceCoverageReasons,missingInputs,corroborationOnly,livePresenceClaim:false as const};
  if(!supported(input.taxonId)) return {...common,status:'insufficient-data',opportunityBand:undefined,factors:{historicalOccurrencePrior:'unknown',habitatFit:'unknown',conditionFit:'unknown',legalGate,lureFishability:'unknown'},contributions:[],reasons:['This exact taxon is not yet modeled; family/group labels are not substituted.'],caveats:['No legacy score, window, reason, season curve, or family rule is substituted.'],presentations:[]};
  const science=exactTaxonScience[input.taxonId];
  const catalogConflict=input.habitatIds.some((id)=>science.habitat.incompatible.includes(id));
  const habitatFit:FactorFit=catalogConflict||mappedHabitat.some((e)=>!e.compatible)?'adverse':mappedHabitat.some((e)=>e.compatible)?'favorable':'unknown';
  const conditionsComplete=dimensions.freshConditions==='complete';
  const conditionFit:FactorFit=!conditionsComplete?'unknown':unsafe?'adverse':'mixed';
  const lureFishability:FactorFit=safetyStatus!=='safe'||!conditionsComplete?'unknown':habitatFit==='favorable'?'favorable':'unknown';
  const factors={historicalOccurrencePrior:prior,habitatFit,conditionFit,legalGate,lureFishability};
  const contributions=[{factor:'historical occurrence prior',effect:prior,reason:prior==='favorable'?'All explicit spatial-applicability dimensions were reviewed for source evidence.':'No occurrence evidence passed every spatial-applicability review; community radius evidence remains corroboration only.'},{factor:'mapped habitat geometry',effect:habitatFit,reason:habitatFit==='favorable'?'A cited mapped habitat geometry is compatible.':habitatFit==='adverse'?'Mapped or catalog context conflicts with the taxon.':'Mapped habitat geometry is absent.'},{factor:'condition suitability',effect:conditionFit,reason:conditionFit==='unknown'?'Conditions are missing, stale, or unknown.':conditionFit==='adverse'?'Conditions are unsafe.':'Complete fresh conditions permit assessment but do not imply feeding.'},{factor:'shore presentation control',effect:lureFishability,reason:lureFishability==='favorable'?'Safety and control gates passed.':'Safety, conditions, or mapped habitat do not support a presentation.'}];
  const caveats=['Historical evidence is not live presence, abundance, or a catch forecast.','Unprocessed community evidence does not establish absence, seasonality, or abundance; no pooled generic season curve is used.',...science.uncertainty,...(reviewedScenario?['NON-LIVE fixed scenario: evaluator reachability only; not real Crissy occurrence, current conditions, legal advice, or a current fishing opportunity.']:[])];
  const conservationAlert=science.targetingPolicy==='conservation-legal-alert-first';
  if(safetyStatus!=='safe') return {...common,status:'safety-blocked',opportunityBand:undefined,factors,contributions,reasons:[conservationAlert?'Conservation and legal alert first; targeting presentation is withheld.':safetyStatus==='unsafe'?'Safety blocked: rough waves, strong wind, closed access, or unsafe footing.':'Safety blocked: safety is unknown and has not been explicitly resolved.'],caveats,presentations:[]};
  if(conservationAlert) return {...common,status:'not-targetable',opportunityBand:undefined,factors,contributions,reasons:['Conservation and legal alert first; targeting presentation is withheld.'],caveats,presentations:[]};
  if(input.mpa.intersectsNoTake||legalGate!=='open'||input.access.state!=='open'||!input.mpa.resolved) return {...common,status:'not-targetable',opportunityBand:undefined,factors,contributions,reasons:['Exact legal, actionable, access, and MPA gates must all pass.'],caveats,presentations:[]};
  if(prior!=='favorable'||habitatFit!=='favorable'||!conditionsComplete) return {...common,status:'insufficient-data',opportunityBand:undefined,factors,contributions,reasons:['Evidence support is insufficient for an opportunity band or presentation.'],caveats,presentations:[]};
  const template=science.shorePresentations.find((p)=>p.habitats.some((id)=>input.habitatIds.includes(id)));
  if(!template) return {...common,status:'insufficient-data',opportunityBand:undefined,factors,contributions,reasons:['No presentation template covers the mapped habitat.'],caveats,presentations:[]};
  const colorContrast=input.conditions!.clarity==='clear'&&input.conditions!.light==='bright'?'natural visibility profile':'contrast selected qualitatively for observed visibility';
  const claimProvenance:PresentationClaims={...template.claimProvenance,colorContrast:heuristic(['Visibility heuristic only; not a biological or catch-probability claim.'])};
  const presentations:PresentationRecommendation[]=[{lureFamily:template.lureFamily,forageMatch:template.forageGuilds.join(', '),profileSize:template.profileSize,colorContrast,vibration:template.vibration,depthZone:template.depthZone,retrieve:template.retrieve,rigWeight:template.rigWeight,why:`Qualitative field option for ${science.feedingMode}; field heuristics are excluded from scientific evidence coverage.`,shorePracticality:'Stop if footing, access, casting, or line control becomes unsafe.',safetyBlockers:[],claimProvenance}];
  return {...common,status:'scored',opportunityBand:'conditional',factors,contributions,reasons:['Relative opportunity is conditional and is not catch probability.'],caveats,presentations};
}

export function evaluateSpeciesOpportunity(input:OpportunityInput):OpportunityResult {
  return evaluateOpportunityCore(input);
}

export function evaluateReviewedScenario(scenarioId:ReviewedScenarioId):OpportunityResult|undefined {
  if(scenarioId!==REVIEWED_SCENARIO_ID)return undefined;
  return deepFreeze(evaluateOpportunityCore(reviewedScenarioInput,REVIEWED_SCENARIO_CAPABILITY));
}
