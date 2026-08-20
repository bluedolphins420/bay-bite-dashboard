# Bay Bite Fauna Intelligence v1 — Scientific Sources and Contracts

Status: reviewed local vertical-slice foundation; no production or deployment authorization.

## Evidence semantics

The engine keeps five outputs separate: historical occurrence prior, habitat fit, condition fit, legal targetability, and lure fishability. Historical evidence never means live presence. Missing or stale required inputs are unknown, not favorable. Exact MPA/legal/access uncertainty fails closed. Relative bands are emitted only when the support contract is met; confidence is independent.

## Pinned source registry

The executable registry is `src/fishing-smarts/scientific-sources.ts`. URLs were checked from the engineering environment on 2026-08-13.

- EDI integrated deltafish package `edi.1075.1`; DOI `10.6073/pasta/0cdf7e5e954be1798ab9bf4f23816e83` — authoritative occurrence/seasonality foundation. HTTP 200 after DOI redirect.
- CDFW San Francisco Bay Study — authoritative survey/program foundation. HTTP 200.
- CDFW California Halibut Enhanced Status Report — exact-taxon biology/fishery foundation. HTTP 200.
- NOAA Marine Cadastre, San Francisco Bay Benthic Habitats 2011 — habitat-geography foundation. Registry currently pins the authoritative Marine Cadastre landing page; exact downloadable product endpoint remains a derivative-ingestion gate. HTTP 200.
- California OPC Seafloor and Coastal Mapping — bathymetry/substrate program foundation. HTTP 200.
- OBIS API and GBIF Occurrence API — supplemental occurrence only. Both HTTP 200. Quality flags, basis of record, license, coordinate uncertainty, date, and taxonomic resolution must survive ingestion.
- NOAA CO-OPS Data API, NDBC, and NCEI ERDDAP — condition sources. All HTTP 200. Browser runtime calls are prohibited; use reviewed server-generated derivatives or the same-origin cache.

No secondary angling page is a biology authority in this engine.

## Versioned ingestion contracts

`scientificIngestionContracts` defines three v1 derivative boundaries:

1. Occurrence: source ID, exact taxon ID, public-resolution geometry/area or station, time coverage, method, effort, life stage, spatial resolution, and limitations.
2. Habitat: source ID, geometry, classification, public resolution, and limitations.
3. Conditions: source/station/metric identity, observation and retrieval times, value/unit, quality, representativeness, and maximum age.

Unknown method, effort, geometry, taxon resolution, or condition values remain explicitly unknown. Absence is not converted to zero, compatibility, or favorable conditions. Sensitive coordinates are not exposed beyond public-source resolution.

## Current reviewed local records

The first UI slice uses existing stable spots `spot:linda-mar` (coast/surf) and `spot:crissy-field` (San Francisco Bay) and reviewed catalog occurrence edges for:

- `species:striped-bass` — *Morone saxatilis*
- `species:california-halibut` — *Paralichthys californicus*
- `species:barred-surfperch` — *Amphistichus argenteus*

The existing reviewed edges are community/public-query corroboration and receive grade C in the opportunity adapter. They are not substituted for the future CDFW/EDI generated derivative, do not prove current presence, and do not expose more precise geometry than the source query radius.

## Prohibited inference

The v1 evaluator has no solunar or atmospheric-pressure bite multiplier, no narrow temperature optimum, no fixed lure-vibration frequency, no random value, and no legacy static score/window/reason fallback for scientific output.
