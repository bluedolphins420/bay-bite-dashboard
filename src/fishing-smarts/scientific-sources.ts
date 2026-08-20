import type { StableId } from './index';
import { reviewedExpansionSources } from './reviewed-exact-taxon-expansion';
import { deepFreeze } from '../deep-freeze';

export type ScientificSourceType = 'official-api'|'official-monitoring-dataset'|'official-agency-geospatial-product'|'archived-research-dataset'|'authoritative-agency-publication'|'peer-reviewed-paper'|'maintained-package'|'secondary-metadata';

export interface ScientificSourceRegistryRecord {
  id: StableId;
  title: string;
  url: string;
  sourceType: ScientificSourceType;
  publisher: string;
  role: 'occurrence-seasonality'|'biology'|'habitat-geography'|'supplemental-occurrence'|'conditions'|'metadata'|'taxonomy-metadata'|'legal-regulation'|'consumption-advisory'|'historical-occurrence'|'conservation-status';
  checkedAt: string;
  reachability: 'verified-http'|'not-verified-environment';
  claimStatus: 'foundation'|'supplemental-only'|'supplemental-not-foundation'|'metadata-only';
  limitations: string;
  sourceClass?: string;
  fetchedVia?: string;
  httpStatus?: number;
  fetchedAt?: string;
  verifiedFetched?: boolean;
  foundationForProfileClaims?: boolean;
  allowedClaimFields?: readonly string[];
  verification?: Readonly<Record<string,unknown>>;
}

const checkedAt = '2026-08-13';
export const scientificSourceRegistry: readonly ScientificSourceRegistryRecord[] = deepFreeze([
  { id:'source:edi-deltafish-1075-1',title:'Integrated research dataset for fish assemblages in the San Francisco Estuary, EDI package edi.1075.1',url:'https://doi.org/10.6073/pasta/0cdf7e5e954be1798ab9bf4f23816e83',sourceType:'archived-research-dataset',publisher:'Environmental Data Initiative',role:'historical-occurrence',checkedAt,reachability:'verified-http',claimStatus:'foundation',limitations:'Archived integrated research dataset, not an agency API or official agency monitoring product. Component program, station, effort, method, dates, zero semantics, and taxon resolution must be retained.' },
  { id:'source:deltafish-package',title:'deltafish maintained R package',url:'https://doi.org/10.5281/zenodo.6484439',sourceType:'maintained-package',publisher:'deltafish contributors',role:'metadata',checkedAt,reachability:'verified-http',claimStatus:'metadata-only',limitations:'Software package and transformation tooling; it is not itself occurrence evidence.' },
  { id:'source:cdfw-california-halibut-esr',title:'CDFW California Halibut Enhanced Status Report',url:'https://wildlife.ca.gov/Conservation/Marine/CA-Halibut-ESR',sourceType:'authoritative-agency-publication',publisher:'California Department of Fish and Wildlife',role:'biology',checkedAt,reachability:'verified-http',claimStatus:'foundation',limitations:'Regional biology and fishery status do not establish local occurrence, current presence, or exact lure performance.' },
  { id:'source:wildlife-ca-gov-fishing-inland-striped-bass',title:'CDFW striped bass fishing and biology guidance',url:'https://wildlife.ca.gov/Fishing/Inland/Striped-Bass',sourceType:'authoritative-agency-publication',publisher:'California Department of Fish and Wildlife',role:'biology',checkedAt,reachability:'verified-http',claimStatus:'foundation',limitations:'Regional life history and fishing context do not prove local/current presence or comparative presentation success.' },
  { id:'source:marinespecies-wildlife-ca-gov-barred-surfperch-and-redtail-surfperch-true',title:'World Register of Marine Species barred surfperch taxonomy metadata',url:'https://www.marinespecies.org/aphia.php?p=taxdetails&id=273285',sourceType:'secondary-metadata',publisher:'World Register of Marine Species',role:'taxonomy-metadata',checkedAt,reachability:'verified-http',claimStatus:'metadata-only',limitations:'Taxonomy/identification metadata only; it does not support local occurrence, seasonality, abundance, or presentation effectiveness.' },
  { id:'source:usgs-striped-bass-diet-2022',title:'Striped bass diet across San Francisco Estuary habitats',url:'https://doi.org/10.15447/sfews.2022v20iss3art4',sourceType:'peer-reviewed-paper',publisher:'San Francisco Estuary and Watershed Science',role:'biology',checkedAt,reachability:'verified-http',claimStatus:'foundation',limitations:'Study-specific seasons, habitats, sizes, and sampled fish constrain forage transferability.' },
  { id:'source:noaa-sf-bay-benthic-2011',title:'NOAA Marine Cadastre San Francisco Bay Benthic Habitats 2011 geospatial dataset',url:'https://marinecadastre.gov/downloads/data/benthic/san_francisco_bay_2011.zip',sourceType:'official-agency-geospatial-product',publisher:'NOAA Marine Cadastre',role:'habitat-geography',checkedAt,reachability:'verified-http',claimStatus:'foundation',limitations:'2011 regional habitat polygons do not imply current microhabitat or exact bottom at a casting point.' },
  { id:'source:opc-seafloor-mapping',title:'California Ocean Protection Council Seafloor and Coastal Mapping program',url:'https://opc.ca.gov/seafloor-and-coastal-mapping/',sourceType:'authoritative-agency-publication',publisher:'California Ocean Protection Council',role:'habitat-geography',checkedAt,reachability:'verified-http',claimStatus:'foundation',limitations:'Agency program page describes products with survey-specific scale, date, coverage, and uncertainty; it is not itself a dataset.' },
  { id:'source:gbif-occurrence-api',title:'GBIF Occurrence API',url:'https://techdocs.gbif.org/en/openapi/v1/occurrence',sourceType:'official-api',publisher:'GBIF',role:'historical-occurrence',checkedAt,reachability:'verified-http',claimStatus:'supplemental-only',limitations:'Supplemental only; preserve basis of record, issue flags, coordinate uncertainty, event date, and license.' },
  { id:'source:inaturalist-research-grade',title:'iNaturalist research-grade observation metadata',url:'https://www.inaturalist.org/pages/help',sourceType:'secondary-metadata',publisher:'iNaturalist',role:'supplemental-occurrence',checkedAt,reachability:'verified-http',claimStatus:'supplemental-only',limitations:'Community observations have uneven effort and reporting bias. Radius-query results are corroboration only and cannot establish spot occurrence, absence, abundance, or seasonality.' },
  { id:'source:noaa-coops-api',title:'NOAA CO-OPS Data API',url:'https://api.tidesandcurrents.noaa.gov/api/prod/',sourceType:'official-api',publisher:'NOAA',role:'conditions',checkedAt,reachability:'verified-http',claimStatus:'foundation',limitations:'Station representativeness, product identity, quality, and freshness must be explicit.' },
  { id:'source:noaa-ndbc',title:'NOAA National Data Buoy Center monitoring observations',url:'https://www.ndbc.noaa.gov/',sourceType:'official-monitoring-dataset',publisher:'NOAA',role:'conditions',checkedAt,reachability:'verified-http',claimStatus:'foundation',limitations:'Offshore observations can be regional proxies and do not resolve shorebreak or footing.' },
  { id:'source:noaa-erddap',title:'NOAA ERDDAP services',url:'https://www.ncei.noaa.gov/erddap/',sourceType:'official-api',publisher:'NOAA',role:'conditions',checkedAt,reachability:'verified-http',claimStatus:'foundation',limitations:'Each dataset requires identity, units, temporal resolution, quality flags, and locality.' },
  ...reviewedExpansionSources,
]);

export const scientificIngestionContracts = deepFreeze({
  occurrence: {
    version: 2,
    requiredFields: ['sourceId','taxonId','evidenceRole','sourceGeometry','queryGeometry','timeCoverage','samplingFrame','effortUnit','zeroSemantics','stationInclusion','catchabilityLimits','stageDerivation','nonDetectionEligible','nonDetectionPolicy','spatialApplicability','limitations'],
    allowedInferencesForUnprocessedCommunityEvidence: ['local-corroboration'],
    pooledGenericSeasonCurves: false,
    missingSemantics: 'Missing or unreviewed method, effort, geometry, event time, stage, or sampling support remains unknown. Non-detection is not absence unless the explicit eligibility policy passes.',
  },
  habitat: {
    version: 2,
    requiredFields: ['sourceId','geometry','classification','publicResolution','mappedAt','limitations'],
    missingSemantics: 'Catalog labels are context only. High coverage requires mapped habitat geometry with source, date, resolution, and limitations.',
  },
  conditions: {
    version: 1,
    requiredFields: ['sourceId','stationId','metric','observedAt','retrievedAt','value','unit','quality','representativeness','maxAgeMinutes'],
    browserRuntimeFetch: false,
    delivery: 'Reviewed server-side generated derivative or same-origin cache only.',
    missingSemantics: 'Missing, stale, invalid-clock, or non-representative observations are unavailable and cannot improve opportunity.',
  },
} as const);
