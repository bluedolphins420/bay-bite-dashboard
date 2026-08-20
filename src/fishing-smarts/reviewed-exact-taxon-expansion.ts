import type { ExactTaxonScienceRecord } from './fauna-opportunity';
import type { ScientificSourceRegistryRecord } from './scientific-sources';
import { deepFreeze } from '../deep-freeze';

// Generated repository-local typed translation of the corrected reviewed package.
// Production never reads /root/company; regenerate only during an authorized research update.
export const reviewedExpansionProfiles = deepFreeze({
  "species:bat-ray": {
    "id": "species:bat-ray",
    "commonName": "Bat ray",
    "scientificName": "Myliobatis californica",
    "authorityIdentifiers": {
      "NCBI": "319543"
    },
    "domain": {
      "environmentClasses": [
        "marine–estuarine"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine–estuarine"
        ],
        "substrateStructureDepth": [
          "Shallow sand/mud flats, bays, sloughs and estuary channels; recorded from surface to about 46 m."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:bay-shore",
        "habitat:tidal-slough",
        "habitat:estuary",
        "habitat:estuary-mouth",
        "habitat:surf"
      ],
      "incompatible": [
        "habitat:rocky-shore"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Shallow sand/mud flats, bays, sloughs and estuary channels; recorded from surface to about 46 m."
    ],
    "seasonalPhenology": [
      "Summer mating and approximately annual gestation are regional life-history context only; no local bite season."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "mollusks",
      "benthic crustaceans"
    ],
    "feedingMode": "Benthic suction/digging predator.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "mollusks",
          "benthic crustaceans"
        ],
        "habitats": [
          "habitat:bay-shore",
          "habitat:tidal-slough",
          "habitat:estuary",
          "habitat:estuary-mouth",
          "habitat:surf"
        ],
        "lureFamily": "bottom natural bait over mapped soft bottom",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-bat-ray"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      },
      {
        "forageGuilds": [
          "mollusks",
          "benthic crustaceans"
        ],
        "habitats": [
          "habitat:bay-shore",
          "habitat:tidal-slough",
          "habitat:estuary",
          "habitat:estuary-mouth",
          "habitat:surf"
        ],
        "lureFamily": "scent-led benthic presentation",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-bat-ray"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "venomous tail spine",
      "population-history uncertainty"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 28,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "CDFW exact-species page reports general year-round take; live general bag, gear, MPA and place rules still gate actionability.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-bat-ray",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Bat ray",
          "scientificName": "Myliobatis californica"
        },
        "sourceIds": [
          "source:ncbi-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "319543"
        },
        "sourceIds": [
          "source:ncbi-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–estuarine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Shallow sand/mud flats, bays, sloughs and estuary channels; recorded from surface to about 46 m."
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Shallow sand/mud flats, bays, sloughs and estuary channels; recorded from surface to about 46 m."
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Shallow sand/mud flats, bays, sloughs and estuary channels; recorded from surface to about 46 m."
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine–estuarine"
            ],
            "substrateStructureDepth": [
              "Shallow sand/mud flats, bays, sloughs and estuary channels; recorded from surface to about 46 m."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "mollusks",
          "benthic crustaceans"
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Benthic suction/digging predator.",
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Summer mating and approximately annual gestation are regional life-history context only; no local bite season."
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "venomous tail spine",
          "population-history uncertainty"
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "unknown",
        "reason": "No separately classified legal source directly supports retained text; live rule resolution remains mandatory.",
        "sourceIds": []
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "mollusks",
              "benthic crustaceans"
            ],
            "habitats": [
              "habitat:bay-shore",
              "habitat:tidal-slough",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "bottom natural bait over mapped soft bottom",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "mollusks",
              "benthic crustaceans"
            ],
            "habitats": [
              "habitat:bay-shore",
              "habitat:tidal-slough",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "scent-led benthic presentation",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–estuarine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Shallow sand/mud flats, bays, sloughs and estuary channels; recorded from surface to about 46 m."
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Shallow sand/mud flats, bays, sloughs and estuary channels; recorded from surface to about 46 m."
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Shallow sand/mud flats, bays, sloughs and estuary channels; recorded from surface to about 46 m."
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "mollusks",
          "benthic crustaceans"
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Summer mating and approximately annual gestation are regional life-history context only; no local bite season."
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "mollusks",
              "benthic crustaceans"
            ],
            "habitats": [
              "habitat:bay-shore",
              "habitat:tidal-slough",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "bottom natural bait over mapped soft bottom",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "mollusks",
              "benthic crustaceans"
            ],
            "habitats": [
              "habitat:bay-shore",
              "habitat:tidal-slough",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "scent-led benthic presentation",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-bat-ray"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:black-rockfish": {
    "id": "species:black-rockfish",
    "commonName": "Black rockfish",
    "scientificName": "Sebastes melanops",
    "authorityIdentifiers": {
      "NCBI": "72085",
      "WoRMS": "274817"
    },
    "domain": {
      "environmentClasses": [
        "marine"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine"
        ],
        "substrateStructureDepth": [
          "Schools over high-relief rock, kelp, boulders and artificial reef; typically shallower than 73 m though records are deeper."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:rocky-shore",
        "habitat:jetty",
        "habitat:breakwater"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:tidal-slough",
        "habitat:estuary"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Schools over high-relief rock, kelp, boulders and artificial reef; typically shallower than 73 m though records are deeper."
    ],
    "seasonalPhenology": [
      "Parturition timing is regional context; resident/transient behavior varies and no shore window is inferred."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "small fishes",
      "crustaceans",
      "cephalopods"
    ],
    "feedingMode": "Water-column/structure-associated predator.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "small fishes",
          "crustaceans",
          "cephalopods"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater"
        ],
        "lureFamily": "small-fish profile near mapped rock",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-black-rockfish"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      },
      {
        "forageGuilds": [
          "small fishes",
          "crustaceans",
          "cephalopods"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater"
        ],
        "lureFamily": "controlled crustacean profile near structure",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-black-rockfish"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "long lived",
      "schooling can concentrate pressure",
      "barotrauma where captured deep"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 13,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Exact-species RCG identity required; current area, season/depth, bag, prohibited-species and MPA rules must be fetched at evaluation time.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-black-rockfish",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-groundfish-2026",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Black rockfish",
          "scientificName": "Sebastes melanops"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "72085",
          "WoRMS": "274817"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Schools over high-relief rock, kelp, boulders and artificial reef; typically shallower than 73 m though records are deeper."
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Schools over high-relief rock, kelp, boulders and artificial reef; typically shallower than 73 m though records are deeper."
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Schools over high-relief rock, kelp, boulders and artificial reef; typically shallower than 73 m though records are deeper."
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine"
            ],
            "substrateStructureDepth": [
              "Schools over high-relief rock, kelp, boulders and artificial reef; typically shallower than 73 m though records are deeper."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "small fishes",
          "crustaceans",
          "cephalopods"
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Water-column/structure-associated predator.",
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Parturition timing is regional context; resident/transient behavior varies and no shore window is inferred."
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "long lived",
          "schooling can concentrate pressure",
          "barotrauma where captured deep"
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Exact-species RCG identity required; current area, season/depth, bag, prohibited-species and MPA rules must be fetched at evaluation time.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-groundfish-2026"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "small fishes",
              "crustaceans",
              "cephalopods"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "small-fish profile near mapped rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "small fishes",
              "crustaceans",
              "cephalopods"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "controlled crustacean profile near structure",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Schools over high-relief rock, kelp, boulders and artificial reef; typically shallower than 73 m though records are deeper."
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Schools over high-relief rock, kelp, boulders and artificial reef; typically shallower than 73 m though records are deeper."
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Schools over high-relief rock, kelp, boulders and artificial reef; typically shallower than 73 m though records are deeper."
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "small fishes",
          "crustaceans",
          "cephalopods"
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Parturition timing is regional context; resident/transient behavior varies and no shore window is inferred."
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "small fishes",
              "crustaceans",
              "cephalopods"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "small-fish profile near mapped rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "small fishes",
              "crustaceans",
              "cephalopods"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "controlled crustacean profile near structure",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-black-rockfish"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:blue-rockfish": {
    "id": "species:blue-rockfish",
    "commonName": "Blue rockfish",
    "scientificName": "Sebastes mystinus",
    "authorityIdentifiers": {
      "NCBI": "72088"
    },
    "domain": {
      "environmentClasses": [
        "marine"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine"
        ],
        "substrateStructureDepth": [
          "Schools above shallow rock and kelp; surface to about 156 m in agency profile."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:rocky-shore",
        "habitat:jetty",
        "habitat:breakwater"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:tidal-slough",
        "habitat:estuary"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Schools above shallow rock and kelp; surface to about 156 m in agency profile."
    ],
    "seasonalPhenology": [
      "Regional spawning mainly November–March; not a catch window."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "small fish",
      "crustaceans",
      "gelatinous zooplankton"
    ],
    "feedingMode": "Schooling water-column predator/zooplanktivore.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "small fish",
          "crustaceans",
          "gelatinous zooplankton"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater"
        ],
        "lureFamily": "small suspended fish/crustacean profile near mapped kelp-rock",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-blue-rockfish"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "long lived",
      "black/blue identification confusion",
      "barotrauma at depth"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 1,
      "status": "sparse",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Exact-species RCG and current-regulation gate required; one catalog edge means narrow evidence coverage.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-blue-rockfish",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-groundfish-2026",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Blue rockfish",
          "scientificName": "Sebastes mystinus"
        },
        "sourceIds": [
          "source:ncbi-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "72088"
        },
        "sourceIds": [
          "source:ncbi-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Schools above shallow rock and kelp; surface to about 156 m in agency profile."
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Schools above shallow rock and kelp; surface to about 156 m in agency profile."
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Schools above shallow rock and kelp; surface to about 156 m in agency profile."
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine"
            ],
            "substrateStructureDepth": [
              "Schools above shallow rock and kelp; surface to about 156 m in agency profile."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "small fish",
          "crustaceans",
          "gelatinous zooplankton"
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Schooling water-column predator/zooplanktivore.",
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional spawning mainly November–March; not a catch window."
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "long lived",
          "black/blue identification confusion",
          "barotrauma at depth"
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Exact-species RCG and current-regulation gate required; one catalog edge means narrow evidence coverage.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-groundfish-2026"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "small fish",
              "crustaceans",
              "gelatinous zooplankton"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "small suspended fish/crustacean profile near mapped kelp-rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Schools above shallow rock and kelp; surface to about 156 m in agency profile."
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Schools above shallow rock and kelp; surface to about 156 m in agency profile."
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Schools above shallow rock and kelp; surface to about 156 m in agency profile."
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "small fish",
          "crustaceans",
          "gelatinous zooplankton"
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional spawning mainly November–March; not a catch window."
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "small fish",
              "crustaceans",
              "gelatinous zooplankton"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "small suspended fish/crustacean profile near mapped kelp-rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-blue-rockfish"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:brown-rockfish": {
    "id": "species:brown-rockfish",
    "commonName": "Brown rockfish",
    "scientificName": "Sebastes auriculatus",
    "authorityIdentifiers": {
      "WoRMS": "274773"
    },
    "domain": {
      "environmentClasses": [
        "marine, including structured bay margins"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine, including structured bay margins"
        ],
        "substrateStructureDepth": [
          "Nearshore rock, kelp and artificial structure; generally shallower than 53 m despite deeper records."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:rocky-shore",
        "habitat:jetty",
        "habitat:breakwater",
        "habitat:pier"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:tidal-slough"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Nearshore rock, kelp and artificial structure; generally shallower than 53 m despite deeper records."
    ],
    "seasonalPhenology": [
      "Regional spawning December–June; no local movement/catch curve."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "crabs",
      "small fish",
      "small crustaceans"
    ],
    "feedingMode": "Structure-associated ambush predator.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "crabs",
          "small fish",
          "small crustaceans"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater",
          "habitat:pier"
        ],
        "lureFamily": "crab/crustacean profile close to mapped structure",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-brown-rockfish"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      },
      {
        "forageGuilds": [
          "crabs",
          "small fish",
          "small crustaceans"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater",
          "habitat:pier"
        ],
        "lureFamily": "small-fish profile near rock",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-brown-rockfish"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "long lived",
      "localized structure association",
      "barotrauma at depth"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 39,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Exact-species RCG and current area/bag/MPA gate required; pier/bay compatibility requires mapped structure.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-brown-rockfish",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-groundfish-2026",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Brown rockfish",
          "scientificName": "Sebastes auriculatus"
        },
        "sourceIds": [
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "WoRMS": "274773"
        },
        "sourceIds": [
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine, including structured bay margins"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine, including structured bay margins"
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Nearshore rock, kelp and artificial structure; generally shallower than 53 m despite deeper records."
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Nearshore rock, kelp and artificial structure; generally shallower than 53 m despite deeper records."
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine, including structured bay margins"
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Nearshore rock, kelp and artificial structure; generally shallower than 53 m despite deeper records."
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine, including structured bay margins"
            ],
            "substrateStructureDepth": [
              "Nearshore rock, kelp and artificial structure; generally shallower than 53 m despite deeper records."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "crabs",
          "small fish",
          "small crustaceans"
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Structure-associated ambush predator.",
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional spawning December–June; no local movement/catch curve."
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "long lived",
          "localized structure association",
          "barotrauma at depth"
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Exact-species RCG and current area/bag/MPA gate required; pier/bay compatibility requires mapped structure.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-groundfish-2026"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "crabs",
              "small fish",
              "small crustaceans"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:pier"
            ],
            "lureFamily": "crab/crustacean profile close to mapped structure",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "crabs",
              "small fish",
              "small crustaceans"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:pier"
            ],
            "lureFamily": "small-fish profile near rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine, including structured bay margins"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine, including structured bay margins"
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Nearshore rock, kelp and artificial structure; generally shallower than 53 m despite deeper records."
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Nearshore rock, kelp and artificial structure; generally shallower than 53 m despite deeper records."
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine, including structured bay margins"
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Nearshore rock, kelp and artificial structure; generally shallower than 53 m despite deeper records."
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "crabs",
          "small fish",
          "small crustaceans"
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional spawning December–June; no local movement/catch curve."
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "crabs",
              "small fish",
              "small crustaceans"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:pier"
            ],
            "lureFamily": "crab/crustacean profile close to mapped structure",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "crabs",
              "small fish",
              "small crustaceans"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:pier"
            ],
            "lureFamily": "small-fish profile near rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-brown-rockfish"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:cabezon": {
    "id": "species:cabezon",
    "commonName": "Cabezon",
    "scientificName": "Scorpaenichthys marmoratus",
    "authorityIdentifiers": {
      "NCBI": "52273"
    },
    "domain": {
      "environmentClasses": [
        "marine"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine"
        ],
        "substrateStructureDepth": [
          "Crevices, reefs, kelp, tidepools and jetties from intertidal into deeper water."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:rocky-shore",
        "habitat:jetty",
        "habitat:breakwater"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:tidal-slough",
        "habitat:estuary"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Crevices, reefs, kelp, tidepools and jetties from intertidal into deeper water."
    ],
    "seasonalPhenology": [
      "Regional spawning October–March; males guard egg masses. No catch window."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "crabs",
      "mollusks",
      "cephalopods",
      "small fish"
    ],
    "feedingMode": "Sedentary benthic predator.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "crabs",
          "mollusks",
          "cephalopods",
          "small fish"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater"
        ],
        "lureFamily": "slow benthic crab/mollusk profile near crevices",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-cabezon"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      },
      {
        "forageGuilds": [
          "crabs",
          "mollusks",
          "cephalopods",
          "small fish"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater"
        ],
        "lureFamily": "bottom natural bait near mapped rock",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-cabezon"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "guarding-male removal can expose eggs",
      "eggs poisonous to humans",
      "barotrauma at depth"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 3,
      "status": "sparse",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Exact cabezon RCG identity; current bag/area/MPA and method rules gate use.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-cabezon",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-groundfish-2026",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Cabezon",
          "scientificName": "Scorpaenichthys marmoratus"
        },
        "sourceIds": [
          "source:ncbi-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "52273"
        },
        "sourceIds": [
          "source:ncbi-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Crevices, reefs, kelp, tidepools and jetties from intertidal into deeper water."
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Crevices, reefs, kelp, tidepools and jetties from intertidal into deeper water."
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Crevices, reefs, kelp, tidepools and jetties from intertidal into deeper water."
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine"
            ],
            "substrateStructureDepth": [
              "Crevices, reefs, kelp, tidepools and jetties from intertidal into deeper water."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "crabs",
          "mollusks",
          "cephalopods",
          "small fish"
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Sedentary benthic predator.",
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional spawning October–March; males guard egg masses. No catch window."
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "guarding-male removal can expose eggs",
          "eggs poisonous to humans",
          "barotrauma at depth"
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Exact cabezon RCG identity; current bag/area/MPA and method rules gate use.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-groundfish-2026"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "crabs",
              "mollusks",
              "cephalopods",
              "small fish"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "slow benthic crab/mollusk profile near crevices",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "crabs",
              "mollusks",
              "cephalopods",
              "small fish"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "bottom natural bait near mapped rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Crevices, reefs, kelp, tidepools and jetties from intertidal into deeper water."
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Crevices, reefs, kelp, tidepools and jetties from intertidal into deeper water."
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Crevices, reefs, kelp, tidepools and jetties from intertidal into deeper water."
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "crabs",
          "mollusks",
          "cephalopods",
          "small fish"
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional spawning October–March; males guard egg masses. No catch window."
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "crabs",
              "mollusks",
              "cephalopods",
              "small fish"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "slow benthic crab/mollusk profile near crevices",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "crabs",
              "mollusks",
              "cephalopods",
              "small fish"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "bottom natural bait near mapped rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-cabezon"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:channel-catfish": {
    "id": "species:channel-catfish",
    "commonName": "Channel catfish",
    "scientificName": "Ictalurus punctatus",
    "authorityIdentifiers": {
      "NCBI": "7998"
    },
    "domain": {
      "environmentClasses": [
        "freshwater–low-salinity upper estuary"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "freshwater–low-salinity upper estuary"
        ],
        "substrateStructureDepth": [
          "Deep pools, runs, backwaters and cover over sand/gravel/rock; salinity tolerance is not preference."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:tidal-slough",
        "habitat:estuary"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:jetty",
        "habitat:breakwater",
        "habitat:rocky-shore",
        "habitat:estuary-mouth"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Deep pools, runs, backwaters and cover over sand/gravel/rock; salinity tolerance is not preference."
    ],
    "seasonalPhenology": [
      "Tributary spawning movement and nocturnal tendency are broad biology only."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "insect larvae",
      "crustaceans",
      "mollusks",
      "fish"
    ],
    "feedingMode": "Bottom-oriented opportunistic omnivore.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "insect larvae",
          "crustaceans",
          "mollusks",
          "fish"
        ],
        "habitats": [
          "habitat:tidal-slough",
          "habitat:estuary"
        ],
        "lureFamily": "bottom natural bait near freshwater/low-salinity cover",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:smithsonian-channel-catfish",
              "source:cdfw-catfish-monitoring"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      },
      {
        "forageGuilds": [
          "insect larvae",
          "crustaceans",
          "mollusks",
          "fish"
        ],
        "habitats": [
          "habitat:tidal-slough",
          "habitat:estuary"
        ],
        "lureFamily": "scent-led benthic presentation",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:smithsonian-channel-catfish",
              "source:cdfw-catfish-monitoring"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "fin spines",
      "introduced SF Estuary population context",
      "early stages may be salt-sensitive"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 7,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Exact waterbody and inland/ocean jurisdiction required; no current statewide species-specific rule was safely resolved.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:smithsonian-channel-catfish",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "B",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-catfish-monitoring",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Channel catfish",
          "scientificName": "Ictalurus punctatus"
        },
        "sourceIds": [
          "source:ncbi-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "7998"
        },
        "sourceIds": [
          "source:ncbi-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "freshwater–low-salinity upper estuary"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "freshwater–low-salinity upper estuary"
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Deep pools, runs, backwaters and cover over sand/gravel/rock; salinity tolerance is not preference."
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Deep pools, runs, backwaters and cover over sand/gravel/rock; salinity tolerance is not preference."
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "freshwater–low-salinity upper estuary"
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Deep pools, runs, backwaters and cover over sand/gravel/rock; salinity tolerance is not preference."
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "freshwater–low-salinity upper estuary"
            ],
            "substrateStructureDepth": [
              "Deep pools, runs, backwaters and cover over sand/gravel/rock; salinity tolerance is not preference."
            ]
          }
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "insect larvae",
          "crustaceans",
          "mollusks",
          "fish"
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Bottom-oriented opportunistic omnivore.",
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Tributary spawning movement and nocturnal tendency are broad biology only."
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "fin spines",
          "introduced SF Estuary population context",
          "early stages may be salt-sensitive"
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "unknown",
        "reason": "No separately classified legal source directly supports retained text; live rule resolution remains mandatory.",
        "sourceIds": []
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "insect larvae",
              "crustaceans",
              "mollusks",
              "fish"
            ],
            "habitats": [
              "habitat:tidal-slough",
              "habitat:estuary"
            ],
            "lureFamily": "bottom natural bait near freshwater/low-salinity cover",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "insect larvae",
              "crustaceans",
              "mollusks",
              "fish"
            ],
            "habitats": [
              "habitat:tidal-slough",
              "habitat:estuary"
            ],
            "lureFamily": "scent-led benthic presentation",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "freshwater–low-salinity upper estuary"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "freshwater–low-salinity upper estuary"
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Deep pools, runs, backwaters and cover over sand/gravel/rock; salinity tolerance is not preference."
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Deep pools, runs, backwaters and cover over sand/gravel/rock; salinity tolerance is not preference."
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "freshwater–low-salinity upper estuary"
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Deep pools, runs, backwaters and cover over sand/gravel/rock; salinity tolerance is not preference."
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "insect larvae",
          "crustaceans",
          "mollusks",
          "fish"
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Tributary spawning movement and nocturnal tendency are broad biology only."
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "insect larvae",
              "crustaceans",
              "mollusks",
              "fish"
            ],
            "habitats": [
              "habitat:tidal-slough",
              "habitat:estuary"
            ],
            "lureFamily": "bottom natural bait near freshwater/low-salinity cover",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "insect larvae",
              "crustaceans",
              "mollusks",
              "fish"
            ],
            "habitats": [
              "habitat:tidal-slough",
              "habitat:estuary"
            ],
            "lureFamily": "scent-led benthic presentation",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:smithsonian-channel-catfish",
          "source:cdfw-catfish-monitoring"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:jacksmelt": {
    "id": "species:jacksmelt",
    "commonName": "Jacksmelt",
    "scientificName": "Atherinopsis californiensis",
    "authorityIdentifiers": {
      "NCBI": "1311532",
      "WoRMS": "279813"
    },
    "domain": {
      "environmentClasses": [
        "marine–estuarine"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine–estuarine"
        ],
        "substrateStructureDepth": [
          "Shallow schools in bays, estuaries, sandy beaches and kelp canopy; usually about 1.5–15 m."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:pier",
        "habitat:bay-shore",
        "habitat:estuary",
        "habitat:estuary-mouth",
        "habitat:surf"
      ],
      "incompatible": [
        "habitat:tidal-slough"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Shallow schools in bays, estuaries, sandy beaches and kelp canopy; usually about 1.5–15 m."
    ],
    "seasonalPhenology": [
      "Year-round spawning with a broad fall–spring peak is agency life history, not a school-presence forecast."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "amphipods",
      "detritus",
      "small fish"
    ],
    "feedingMode": "Schooling opportunistic omnivore.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "amphipods",
          "detritus",
          "small fish"
        ],
        "habitats": [
          "habitat:pier",
          "habitat:bay-shore",
          "habitat:estuary",
          "habitat:estuary-mouth",
          "habitat:surf"
        ],
        "lureFamily": "small suspended bait/invertebrate profile",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-jacksmelt"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      },
      {
        "forageGuilds": [
          "amphipods",
          "detritus",
          "small fish"
        ],
        "habitats": [
          "habitat:pier",
          "habitat:bay-shore",
          "habitat:estuary",
          "habitat:estuary-mouth",
          "habitat:surf"
        ],
        "lureFamily": "light midwater presentation",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-jacksmelt"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "schooling concentrates local harvest",
      "adhesive eggs use vegetation"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 59,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Jacksmelt is not topsmelt or surf smelt; exact identity, general finfish, gear, place and MPA rules require live resolution.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-jacksmelt",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Jacksmelt",
          "scientificName": "Atherinopsis californiensis"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "1311532",
          "WoRMS": "279813"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–estuarine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Shallow schools in bays, estuaries, sandy beaches and kelp canopy; usually about 1.5–15 m."
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Shallow schools in bays, estuaries, sandy beaches and kelp canopy; usually about 1.5–15 m."
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Shallow schools in bays, estuaries, sandy beaches and kelp canopy; usually about 1.5–15 m."
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine–estuarine"
            ],
            "substrateStructureDepth": [
              "Shallow schools in bays, estuaries, sandy beaches and kelp canopy; usually about 1.5–15 m."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "amphipods",
          "detritus",
          "small fish"
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Schooling opportunistic omnivore.",
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Year-round spawning with a broad fall–spring peak is agency life history, not a school-presence forecast."
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "schooling concentrates local harvest",
          "adhesive eggs use vegetation"
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "unknown",
        "reason": "No separately classified legal source directly supports retained text; live rule resolution remains mandatory.",
        "sourceIds": []
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "amphipods",
              "detritus",
              "small fish"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "small suspended bait/invertebrate profile",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "amphipods",
              "detritus",
              "small fish"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "light midwater presentation",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–estuarine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Shallow schools in bays, estuaries, sandy beaches and kelp canopy; usually about 1.5–15 m."
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Shallow schools in bays, estuaries, sandy beaches and kelp canopy; usually about 1.5–15 m."
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Shallow schools in bays, estuaries, sandy beaches and kelp canopy; usually about 1.5–15 m."
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "amphipods",
          "detritus",
          "small fish"
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Year-round spawning with a broad fall–spring peak is agency life history, not a school-presence forecast."
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "amphipods",
              "detritus",
              "small fish"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "small suspended bait/invertebrate profile",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "amphipods",
              "detritus",
              "small fish"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "light midwater presentation",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-jacksmelt"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:kelp-greenling": {
    "id": "species:kelp-greenling",
    "commonName": "Kelp greenling",
    "scientificName": "Hexagrammos decagrammus",
    "authorityIdentifiers": {
      "WoRMS": "240732"
    },
    "domain": {
      "environmentClasses": [
        "marine"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine"
        ],
        "substrateStructureDepth": [
          "Rocky coasts, kelp and jetties; intertidal to 149 m, more common shallower than 100 m."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:rocky-shore",
        "habitat:jetty",
        "habitat:breakwater"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:tidal-slough",
        "habitat:estuary"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Rocky coasts, kelp and jetties; intertidal to 149 m, more common shallower than 100 m."
    ],
    "seasonalPhenology": [
      "Attached demersal eggs and regional autumn spawning records; migration unknown."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "crabs",
      "shrimp",
      "mollusks",
      "fish",
      "algae"
    ],
    "feedingMode": "Benthic omnivore/predator.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "crabs",
          "shrimp",
          "mollusks",
          "fish",
          "algae"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater"
        ],
        "lureFamily": "slow small-crustacean/mollusk profile near rock-kelp",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-kelp-greenling",
              "source:noaa-kelp-greenling"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "attached egg masses on rock",
      "identification with other greenlings"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 0,
      "status": "zero-edge-blocked",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Zero-edge non-recommendable. Exact greenling/RCG identity and current bag, place and MPA rules still required.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-kelp-greenling",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:noaa-kelp-greenling",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-groundfish-2026",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "blocked-zero-edge",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Kelp greenling",
          "scientificName": "Hexagrammos decagrammus"
        },
        "sourceIds": [
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "WoRMS": "240732"
        },
        "sourceIds": [
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Rocky coasts, kelp and jetties; intertidal to 149 m, more common shallower than 100 m."
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Rocky coasts, kelp and jetties; intertidal to 149 m, more common shallower than 100 m."
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Rocky coasts, kelp and jetties; intertidal to 149 m, more common shallower than 100 m."
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine"
            ],
            "substrateStructureDepth": [
              "Rocky coasts, kelp and jetties; intertidal to 149 m, more common shallower than 100 m."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "crabs",
          "shrimp",
          "mollusks",
          "fish",
          "algae"
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Benthic omnivore/predator.",
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "unknown",
        "reason": "Retained profile explicitly reports season/movement as unknown or unresolved.",
        "sourceIds": []
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "attached egg masses on rock",
          "identification with other greenlings"
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Zero-edge non-recommendable. Exact greenling/RCG identity and current bag, place and MPA rules still required.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-groundfish-2026"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "crabs",
              "shrimp",
              "mollusks",
              "fish",
              "algae"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "slow small-crustacean/mollusk profile near rock-kelp",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Rocky coasts, kelp and jetties; intertidal to 149 m, more common shallower than 100 m."
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Rocky coasts, kelp and jetties; intertidal to 149 m, more common shallower than 100 m."
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Rocky coasts, kelp and jetties; intertidal to 149 m, more common shallower than 100 m."
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "crabs",
          "shrimp",
          "mollusks",
          "fish",
          "algae"
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "unknown",
        "reason": "Retained profile explicitly reports season/movement as unknown or unresolved.",
        "sourceIds": []
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "crabs",
              "shrimp",
              "mollusks",
              "fish",
              "algae"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "slow small-crustacean/mollusk profile near rock-kelp",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-kelp-greenling",
          "source:noaa-kelp-greenling"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:leopard-shark": {
    "id": "species:leopard-shark",
    "commonName": "Leopard shark",
    "scientificName": "Triakis semifasciata",
    "authorityIdentifiers": {
      "NCBI": "30493",
      "WoRMS": "279060"
    },
    "domain": {
      "environmentClasses": [
        "marine–estuarine"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine–estuarine"
        ],
        "substrateStructureDepth": [
          "Shallow bay/estuary sand and nearshore sandy/kelp environments, usually near bottom."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:bay-shore",
        "habitat:estuary",
        "habitat:estuary-mouth",
        "habitat:surf"
      ],
      "incompatible": [
        "habitat:tidal-slough",
        "habitat:rocky-shore"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Shallow bay/estuary sand and nearshore sandy/kelp environments, usually near bottom."
    ],
    "seasonalPhenology": [
      "Regional fall aggregations in SF/Monterey Bays do not prove presence at a shore."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "fish",
      "squid",
      "crabs"
    ],
    "feedingMode": "Bottom-oriented mobile predator.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "fish",
          "squid",
          "crabs"
        ],
        "habitats": [
          "habitat:bay-shore",
          "habitat:estuary",
          "habitat:estuary-mouth",
          "habitat:surf"
        ],
        "lureFamily": "bottom natural bait over mapped sand",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-leopard-shark"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      },
      {
        "forageGuilds": [
          "fish",
          "squid",
          "crabs"
        ],
        "habitats": [
          "habitat:bay-shore",
          "habitat:estuary",
          "habitat:estuary-mouth",
          "habitat:surf"
        ],
        "lureFamily": "fish/squid profile near soft-bottom edge",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-leopard-shark"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "live-bearing life history",
      "aggregations concentrate pressure",
      "handling stress"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 3,
      "status": "sparse",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "CDFW SF Bay page showed 3 fish and 36-inch total-length minimum when checked; current exact place/MPA/gear rules remain mandatory.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-leopard-shark",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-sf-bay-regs",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Leopard shark",
          "scientificName": "Triakis semifasciata"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "30493",
          "WoRMS": "279060"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–estuarine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Shallow bay/estuary sand and nearshore sandy/kelp environments, usually near bottom."
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Shallow bay/estuary sand and nearshore sandy/kelp environments, usually near bottom."
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Shallow bay/estuary sand and nearshore sandy/kelp environments, usually near bottom."
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine–estuarine"
            ],
            "substrateStructureDepth": [
              "Shallow bay/estuary sand and nearshore sandy/kelp environments, usually near bottom."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "fish",
          "squid",
          "crabs"
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Bottom-oriented mobile predator.",
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional fall aggregations in SF/Monterey Bays do not prove presence at a shore."
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "live-bearing life history",
          "aggregations concentrate pressure",
          "handling stress"
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "CDFW SF Bay page showed 3 fish and 36-inch total-length minimum when checked; current exact place/MPA/gear rules remain mandatory.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-sf-bay-regs"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "fish",
              "squid",
              "crabs"
            ],
            "habitats": [
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "bottom natural bait over mapped sand",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "fish",
              "squid",
              "crabs"
            ],
            "habitats": [
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "fish/squid profile near soft-bottom edge",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–estuarine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Shallow bay/estuary sand and nearshore sandy/kelp environments, usually near bottom."
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Shallow bay/estuary sand and nearshore sandy/kelp environments, usually near bottom."
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–estuarine"
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Shallow bay/estuary sand and nearshore sandy/kelp environments, usually near bottom."
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "fish",
          "squid",
          "crabs"
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional fall aggregations in SF/Monterey Bays do not prove presence at a shore."
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "fish",
              "squid",
              "crabs"
            ],
            "habitats": [
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "bottom natural bait over mapped sand",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "fish",
              "squid",
              "crabs"
            ],
            "habitats": [
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "fish/squid profile near soft-bottom edge",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-leopard-shark"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:lingcod": {
    "id": "species:lingcod",
    "commonName": "Lingcod",
    "scientificName": "Ophiodon elongatus",
    "authorityIdentifiers": {
      "NCBI": "225387"
    },
    "domain": {
      "environmentClasses": [
        "marine"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine"
        ],
        "substrateStructureDepth": [
          "Adults use rocky bottom and kelp; juveniles can use sand near eelgrass/kelp. Adult compatibility is structure-specific."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:rocky-shore",
        "habitat:jetty",
        "habitat:breakwater"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:bay-shore",
        "habitat:tidal-slough",
        "habitat:estuary"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Adults use rocky bottom and kelp; juveniles can use sand near eelgrass/kelp. Adult compatibility is structure-specific."
    ],
    "seasonalPhenology": [
      "Females migrate seasonally to spawn and males guard winter–spring egg masses; no shore window inferred."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "bottom fish",
      "squid",
      "octopus",
      "crab"
    ],
    "feedingMode": "Large structure-associated predator.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "bottom fish",
          "squid",
          "octopus",
          "crab"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater"
        ],
        "lureFamily": "large fish profile near mapped rock",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:noaa-lingcod",
              "source:cdfw-lingcod"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      },
      {
        "forageGuilds": [
          "bottom fish",
          "squid",
          "octopus",
          "crab"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater"
        ],
        "lureFamily": "squid/crab natural bait near structure",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:noaa-lingcod",
              "source:cdfw-lingcod"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "nest-guarding male removal",
      "protected-rockfish bycatch",
      "barotrauma"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 32,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Separate exact lingcod groundfish rule; checked summary showed 2 fish and 22-inch minimum, subject to current area/season/MPA changes.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:noaa-lingcod",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-lingcod",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-groundfish-2026",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Lingcod",
          "scientificName": "Ophiodon elongatus"
        },
        "sourceIds": [
          "source:ncbi-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "225387"
        },
        "sourceIds": [
          "source:ncbi-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Adults use rocky bottom and kelp; juveniles can use sand near eelgrass/kelp. Adult compatibility is structure-specific."
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Adults use rocky bottom and kelp; juveniles can use sand near eelgrass/kelp. Adult compatibility is structure-specific."
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Adults use rocky bottom and kelp; juveniles can use sand near eelgrass/kelp. Adult compatibility is structure-specific."
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine"
            ],
            "substrateStructureDepth": [
              "Adults use rocky bottom and kelp; juveniles can use sand near eelgrass/kelp. Adult compatibility is structure-specific."
            ]
          }
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "bottom fish",
          "squid",
          "octopus",
          "crab"
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Large structure-associated predator.",
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Females migrate seasonally to spawn and males guard winter–spring egg masses; no shore window inferred."
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "nest-guarding male removal",
          "protected-rockfish bycatch",
          "barotrauma"
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Separate exact lingcod groundfish rule; checked summary showed 2 fish and 22-inch minimum, subject to current area/season/MPA changes.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-groundfish-2026"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "bottom fish",
              "squid",
              "octopus",
              "crab"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "large fish profile near mapped rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "bottom fish",
              "squid",
              "octopus",
              "crab"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "squid/crab natural bait near structure",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Adults use rocky bottom and kelp; juveniles can use sand near eelgrass/kelp. Adult compatibility is structure-specific."
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Adults use rocky bottom and kelp; juveniles can use sand near eelgrass/kelp. Adult compatibility is structure-specific."
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine"
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Adults use rocky bottom and kelp; juveniles can use sand near eelgrass/kelp. Adult compatibility is structure-specific."
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "bottom fish",
          "squid",
          "octopus",
          "crab"
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Females migrate seasonally to spawn and males guard winter–spring egg masses; no shore window inferred."
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "bottom fish",
              "squid",
              "octopus",
              "crab"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "large fish profile near mapped rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          },
          {
            "forageGuilds": [
              "bottom fish",
              "squid",
              "octopus",
              "crab"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "squid/crab natural bait near structure",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:noaa-lingcod",
          "source:cdfw-lingcod"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:monkeyface-prickleback": {
    "id": "species:monkeyface-prickleback",
    "commonName": "Monkeyface prickleback",
    "scientificName": "Cebidichthys violaceus",
    "authorityIdentifiers": {
      "NCBI": "271503",
      "WoRMS": "280053"
    },
    "domain": {
      "environmentClasses": [
        "marine intertidal–shallow subtidal"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine intertidal–shallow subtidal"
        ],
        "substrateStructureDepth": [
          "Rocky crevices, boulders, algae, jetties and breakwaters; highly local residential use."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:rocky-shore",
        "habitat:jetty",
        "habitat:breakwater"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:bay-shore",
        "habitat:tidal-slough",
        "habitat:estuary"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Rocky crevices, boulders, algae, jetties and breakwaters; highly local residential use."
    ],
    "seasonalPhenology": [
      "Small home range is defensible; flooding-tide activity is biology, not a bite guarantee."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "algae (adults)",
      "small crustaceans (juveniles)"
    ],
    "feedingMode": "Adult algal grazer; juveniles consume small invertebrates.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "algae (adults)",
          "small crustaceans (juveniles)"
        ],
        "habitats": [
          "habitat:rocky-shore",
          "habitat:jetty",
          "habitat:breakwater"
        ],
        "lureFamily": "crevice-level bait presentation (agency-described poke-poling category)",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-monkeyface"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "specialized intertidal habitat",
      "eel-like species can be conflated"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 42,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "No special exact-species rule verified; current general finfish, intertidal collection, MPA and place rules gate use.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-monkeyface",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Monkeyface prickleback",
          "scientificName": "Cebidichthys violaceus"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "271503",
          "WoRMS": "280053"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine intertidal–shallow subtidal"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine intertidal–shallow subtidal"
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Rocky crevices, boulders, algae, jetties and breakwaters; highly local residential use."
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Rocky crevices, boulders, algae, jetties and breakwaters; highly local residential use."
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine intertidal–shallow subtidal"
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Rocky crevices, boulders, algae, jetties and breakwaters; highly local residential use."
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine intertidal–shallow subtidal"
            ],
            "substrateStructureDepth": [
              "Rocky crevices, boulders, algae, jetties and breakwaters; highly local residential use."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "algae (adults)",
          "small crustaceans (juveniles)"
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Adult algal grazer; juveniles consume small invertebrates.",
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Small home range is defensible; flooding-tide activity is biology, not a bite guarantee."
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "specialized intertidal habitat",
          "eel-like species can be conflated"
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "unknown",
        "reason": "No separately classified legal source directly supports retained text; live rule resolution remains mandatory.",
        "sourceIds": []
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "algae (adults)",
              "small crustaceans (juveniles)"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "crevice-level bait presentation (agency-described poke-poling category)",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine intertidal–shallow subtidal"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine intertidal–shallow subtidal"
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Rocky crevices, boulders, algae, jetties and breakwaters; highly local residential use."
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Rocky crevices, boulders, algae, jetties and breakwaters; highly local residential use."
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine intertidal–shallow subtidal"
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Rocky crevices, boulders, algae, jetties and breakwaters; highly local residential use."
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "algae (adults)",
          "small crustaceans (juveniles)"
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Small home range is defensible; flooding-tide activity is biology, not a bite guarantee."
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "algae (adults)",
              "small crustaceans (juveniles)"
            ],
            "habitats": [
              "habitat:rocky-shore",
              "habitat:jetty",
              "habitat:breakwater"
            ],
            "lureFamily": "crevice-level bait presentation (agency-described poke-poling category)",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-monkeyface"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:pacific-staghorn-sculpin": {
    "id": "species:pacific-staghorn-sculpin",
    "commonName": "Pacific staghorn sculpin",
    "scientificName": "Leptocottus armatus",
    "authorityIdentifiers": {
      "NCBI": "214925",
      "WoRMS": "254345"
    },
    "domain": {
      "environmentClasses": [
        "marine–brackish with freshwater tolerance"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine–brackish with freshwater tolerance"
        ],
        "substrateStructureDepth": [
          "Soft sandy/muddy estuaries, bays and tidal water; bottom-associated."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:bay-shore",
        "habitat:tidal-slough",
        "habitat:estuary",
        "habitat:estuary-mouth",
        "habitat:pier"
      ],
      "incompatible": [
        "habitat:rocky-shore"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Soft sandy/muddy estuaries, bays and tidal water; bottom-associated."
    ],
    "seasonalPhenology": [
      "Juvenile dispersal and regional January–February spawning are context only; marine fish may follow tides."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "amphipods",
      "insect larvae",
      "crabs",
      "shrimp",
      "small fish"
    ],
    "feedingMode": "Benthic opportunistic predator.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "amphipods",
          "insect larvae",
          "crabs",
          "shrimp",
          "small fish"
        ],
        "habitats": [
          "habitat:bay-shore",
          "habitat:tidal-slough",
          "habitat:estuary",
          "habitat:estuary-mouth",
          "habitat:pier"
        ],
        "lureFamily": "small bottom invertebrate/fish profile over soft estuary substrate",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:ca-waterboards-staghorn"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "early-life estuarine habitat",
      "common bycatch potential"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 58,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "CDFW general ocean rules list exact species among no-limit taxa when checked; special gear permissions are geographically bounded.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:ca-waterboards-staghorn",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "B",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-general-ocean",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Pacific staghorn sculpin",
          "scientificName": "Leptocottus armatus"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "214925",
          "WoRMS": "254345"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–brackish with freshwater tolerance"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–brackish with freshwater tolerance"
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Soft sandy/muddy estuaries, bays and tidal water; bottom-associated."
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Soft sandy/muddy estuaries, bays and tidal water; bottom-associated."
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–brackish with freshwater tolerance"
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Soft sandy/muddy estuaries, bays and tidal water; bottom-associated."
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine–brackish with freshwater tolerance"
            ],
            "substrateStructureDepth": [
              "Soft sandy/muddy estuaries, bays and tidal water; bottom-associated."
            ]
          }
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "amphipods",
          "insect larvae",
          "crabs",
          "shrimp",
          "small fish"
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Benthic opportunistic predator.",
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Juvenile dispersal and regional January–February spawning are context only; marine fish may follow tides."
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "early-life estuarine habitat",
          "common bycatch potential"
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "CDFW general ocean rules list exact species among no-limit taxa when checked; special gear permissions are geographically bounded.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-general-ocean"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "amphipods",
              "insect larvae",
              "crabs",
              "shrimp",
              "small fish"
            ],
            "habitats": [
              "habitat:bay-shore",
              "habitat:tidal-slough",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:pier"
            ],
            "lureFamily": "small bottom invertebrate/fish profile over soft estuary substrate",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–brackish with freshwater tolerance"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–brackish with freshwater tolerance"
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Soft sandy/muddy estuaries, bays and tidal water; bottom-associated."
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Soft sandy/muddy estuaries, bays and tidal water; bottom-associated."
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–brackish with freshwater tolerance"
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Soft sandy/muddy estuaries, bays and tidal water; bottom-associated."
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "amphipods",
          "insect larvae",
          "crabs",
          "shrimp",
          "small fish"
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Juvenile dispersal and regional January–February spawning are context only; marine fish may follow tides."
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "amphipods",
              "insect larvae",
              "crabs",
              "shrimp",
              "small fish"
            ],
            "habitats": [
              "habitat:bay-shore",
              "habitat:tidal-slough",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:pier"
            ],
            "lureFamily": "small bottom invertebrate/fish profile over soft estuary substrate",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:ca-waterboards-staghorn"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:pile-perch": {
    "id": "species:pile-perch",
    "commonName": "Pile perch",
    "scientificName": "Rhacochilus vacca",
    "authorityIdentifiers": {
      "WoRMS accepted": "1577347",
      "accepted name": "Phanerodon vacca"
    },
    "domain": {
      "environmentClasses": [
        "marine–estuarine juvenile use"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine–estuarine juvenile use"
        ],
        "substrateStructureDepth": [
          "Adults around rocky shores, kelp, pilings and artificial reef; juveniles can use eelgrass/bays."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:pier",
        "habitat:jetty",
        "habitat:breakwater",
        "habitat:bay-shore",
        "habitat:rocky-shore"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:tidal-slough"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Adults around rocky shores, kelp, pilings and artificial reef; juveniles can use eelgrass/bays."
    ],
    "seasonalPhenology": [
      "Seasonal movement unknown."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "mollusks",
      "crabs",
      "barnacles",
      "benthic invertebrates"
    ],
    "feedingMode": "Structure-associated benthic forager.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "mollusks",
          "crabs",
          "barnacles",
          "benthic invertebrates"
        ],
        "habitats": [
          "habitat:pier",
          "habitat:jetty",
          "habitat:breakwater",
          "habitat:bay-shore",
          "habitat:rocky-shore"
        ],
        "lureFamily": "small invertebrate bottom presentation beside mapped pilings/rock",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-pile",
              "source:cdfw-surfperch-account"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "viviparity",
      "low reproductive potential",
      "aggregation susceptibility",
      "taxonomy combination changed in WoRMS"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 0,
      "status": "zero-edge-blocked",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Zero-edge non-recommendable. Surfperch aggregate closure/bag and current place/MPA rules still apply; catalog name retained as exact identity alias.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-pile",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-surfperch-account",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-sf-bay-regs",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "blocked-zero-edge",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Pile perch",
          "scientificName": "Rhacochilus vacca"
        },
        "sourceIds": [
          "source:gbif-species-match"
        ],
        "limitations": [
          "GBIF species-match returned EXACT and matched the canonical binomial; taxonomy only, not ecology."
        ]
      },
      "authorityIdentifiers": {
        "state": "unknown",
        "reason": "No retained/re-fetched authority identifier.",
        "sourceIds": []
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–estuarine juvenile use"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–estuarine juvenile use"
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Adults around rocky shores, kelp, pilings and artificial reef; juveniles can use eelgrass/bays."
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Adults around rocky shores, kelp, pilings and artificial reef; juveniles can use eelgrass/bays."
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–estuarine juvenile use"
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Adults around rocky shores, kelp, pilings and artificial reef; juveniles can use eelgrass/bays."
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine–estuarine juvenile use"
            ],
            "substrateStructureDepth": [
              "Adults around rocky shores, kelp, pilings and artificial reef; juveniles can use eelgrass/bays."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "mollusks",
          "crabs",
          "barnacles",
          "benthic invertebrates"
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Structure-associated benthic forager.",
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "unknown",
        "reason": "Retained profile explicitly reports season/movement as unknown or unresolved.",
        "sourceIds": []
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "viviparity",
          "low reproductive potential",
          "aggregation susceptibility",
          "taxonomy combination changed in WoRMS"
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Zero-edge non-recommendable. Surfperch aggregate closure/bag and current place/MPA rules still apply; catalog name retained as exact identity alias.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-sf-bay-regs"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "mollusks",
              "crabs",
              "barnacles",
              "benthic invertebrates"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:bay-shore",
              "habitat:rocky-shore"
            ],
            "lureFamily": "small invertebrate bottom presentation beside mapped pilings/rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–estuarine juvenile use"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–estuarine juvenile use"
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Adults around rocky shores, kelp, pilings and artificial reef; juveniles can use eelgrass/bays."
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Adults around rocky shores, kelp, pilings and artificial reef; juveniles can use eelgrass/bays."
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–estuarine juvenile use"
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Adults around rocky shores, kelp, pilings and artificial reef; juveniles can use eelgrass/bays."
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "mollusks",
          "crabs",
          "barnacles",
          "benthic invertebrates"
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "unknown",
        "reason": "Retained profile explicitly reports season/movement as unknown or unresolved.",
        "sourceIds": []
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "mollusks",
              "crabs",
              "barnacles",
              "benthic invertebrates"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:bay-shore",
              "habitat:rocky-shore"
            ],
            "lureFamily": "small invertebrate bottom presentation beside mapped pilings/rock",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-pile",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:redtail-surfperch": {
    "id": "species:redtail-surfperch",
    "commonName": "Redtail surfperch",
    "scientificName": "Amphistichus rhodoterus",
    "authorityIdentifiers": {
      "NCBI": "72546",
      "WoRMS": "279596"
    },
    "domain": {
      "environmentClasses": [
        "marine surf zone"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine surf zone"
        ],
        "substrateStructureDepth": [
          "High-energy open-coast sandy beaches, sandy pocket beaches and swash/trough habitat."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:surf"
      ],
      "incompatible": [
        "habitat:bay-shore",
        "habitat:tidal-slough",
        "habitat:estuary",
        "habitat:rocky-shore"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "High-energy open-coast sandy beaches, sandy pocket beaches and swash/trough habitat."
    ],
    "seasonalPhenology": [
      "Summer parturition/nearshore aggregation is broad biology, not a bite window."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "isopods",
      "amphipods",
      "polychaetes",
      "small crabs"
    ],
    "feedingMode": "Surf-zone benthic forager.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "isopods",
          "amphipods",
          "polychaetes",
          "small crabs"
        ],
        "habitats": [
          "habitat:surf"
        ],
        "lureFamily": "small invertebrate bottom presentation through mapped sandy swash",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-redtail"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "viviparity",
      "low fecundity",
      "nearshore aggregations",
      "localized depletion risk"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 12,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Exact redtail identity: checked CDFW rule shows 10.5-inch minimum; SF/San Pablo surfperch closure and aggregate bag remain area/date gated.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-redtail",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-sf-bay-regs",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Redtail surfperch",
          "scientificName": "Amphistichus rhodoterus"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "72546",
          "WoRMS": "279596"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine surf zone"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine surf zone"
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "High-energy open-coast sandy beaches, sandy pocket beaches and swash/trough habitat."
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "High-energy open-coast sandy beaches, sandy pocket beaches and swash/trough habitat."
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine surf zone"
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "High-energy open-coast sandy beaches, sandy pocket beaches and swash/trough habitat."
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine surf zone"
            ],
            "substrateStructureDepth": [
              "High-energy open-coast sandy beaches, sandy pocket beaches and swash/trough habitat."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "isopods",
          "amphipods",
          "polychaetes",
          "small crabs"
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Surf-zone benthic forager.",
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Summer parturition/nearshore aggregation is broad biology, not a bite window."
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "viviparity",
          "low fecundity",
          "nearshore aggregations",
          "localized depletion risk"
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Exact redtail identity: checked CDFW rule shows 10.5-inch minimum; SF/San Pablo surfperch closure and aggregate bag remain area/date gated.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-sf-bay-regs"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "isopods",
              "amphipods",
              "polychaetes",
              "small crabs"
            ],
            "habitats": [
              "habitat:surf"
            ],
            "lureFamily": "small invertebrate bottom presentation through mapped sandy swash",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine surf zone"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine surf zone"
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "High-energy open-coast sandy beaches, sandy pocket beaches and swash/trough habitat."
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "High-energy open-coast sandy beaches, sandy pocket beaches and swash/trough habitat."
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine surf zone"
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "High-energy open-coast sandy beaches, sandy pocket beaches and swash/trough habitat."
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "isopods",
          "amphipods",
          "polychaetes",
          "small crabs"
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Summer parturition/nearshore aggregation is broad biology, not a bite window."
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "isopods",
              "amphipods",
              "polychaetes",
              "small crabs"
            ],
            "habitats": [
              "habitat:surf"
            ],
            "lureFamily": "small invertebrate bottom presentation through mapped sandy swash",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-redtail"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:rubberlip-seaperch": {
    "id": "species:rubberlip-seaperch",
    "commonName": "Rubberlip seaperch",
    "scientificName": "Rhacochilus toxotes",
    "authorityIdentifiers": {
      "NCBI": "100202",
      "WoRMS": "282575"
    },
    "domain": {
      "environmentClasses": [
        "marine nearshore"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine nearshore"
        ],
        "substrateStructureDepth": [
          "Rocky reef/kelp, wharves, pilings and jetties; inshore waters to about 150 feet in the exact-species CDFW account."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:pier",
        "habitat:jetty",
        "habitat:breakwater",
        "habitat:rocky-shore"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:tidal-slough",
        "habitat:estuary"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Rocky reef/kelp, wharves, pilings and jetties; inshore waters to about 150 feet in the exact-species CDFW account."
    ],
    "seasonalPhenology": [
      "Movement/season unknown."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "benthic invertebrates"
    ],
    "feedingMode": "Structure-associated benthic forager.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "benthic invertebrates"
        ],
        "habitats": [
          "habitat:pier",
          "habitat:jetty",
          "habitat:breakwater",
          "habitat:rocky-shore"
        ],
        "lureFamily": "small invertebrate presentation beside pilings/rock-kelp",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-surfperch-account"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "viviparity",
      "low reproductive output",
      "pile-perch identification confusion"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 0,
      "status": "zero-edge-blocked",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Zero-edge non-recommendable. Surfperch aggregate rules and current place/MPA checks required.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:usfws-rubberlip",
        "supports": "Only taxonomy and exact-species identity; not ecology.",
        "grade": "A",
        "limitations": "Direct and Jina fetches expose identity metadata only."
      },
      {
        "sourceId": "source:cdfw-surfperch-account",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-sf-bay-regs",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "blocked-zero-edge",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Rubberlip seaperch",
          "scientificName": "Rhacochilus toxotes"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy",
          "source:usfws-rubberlip"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "100202",
          "WoRMS": "282575"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy",
          "source:usfws-rubberlip"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine nearshore"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine nearshore"
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Rocky reef/kelp, wharves, pilings and jetties; inshore waters to about 150 feet in the exact-species CDFW account."
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Rocky reef/kelp, wharves, pilings and jetties; inshore waters to about 150 feet in the exact-species CDFW account."
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine nearshore"
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Rocky reef/kelp, wharves, pilings and jetties; inshore waters to about 150 feet in the exact-species CDFW account."
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine nearshore"
            ],
            "substrateStructureDepth": [
              "Rocky reef/kelp, wharves, pilings and jetties; inshore waters to about 150 feet in the exact-species CDFW account."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "benthic invertebrates"
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Structure-associated benthic forager.",
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "unknown",
        "reason": "Retained profile explicitly reports season/movement as unknown or unresolved.",
        "sourceIds": []
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "viviparity",
          "low reproductive output",
          "pile-perch identification confusion"
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Zero-edge non-recommendable. Surfperch aggregate rules and current place/MPA checks required.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-sf-bay-regs"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "benthic invertebrates"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:rocky-shore"
            ],
            "lureFamily": "small invertebrate presentation beside pilings/rock-kelp",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine nearshore"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine nearshore"
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Rocky reef/kelp, wharves, pilings and jetties; inshore waters to about 150 feet in the exact-species CDFW account."
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Rocky reef/kelp, wharves, pilings and jetties; inshore waters to about 150 feet in the exact-species CDFW account."
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine nearshore"
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Rocky reef/kelp, wharves, pilings and jetties; inshore waters to about 150 feet in the exact-species CDFW account."
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "benthic invertebrates"
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "unknown",
        "reason": "Retained profile explicitly reports season/movement as unknown or unresolved.",
        "sourceIds": []
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "benthic invertebrates"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:rocky-shore"
            ],
            "lureFamily": "small invertebrate presentation beside pilings/rock-kelp",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:starry-flounder": {
    "id": "species:starry-flounder",
    "commonName": "Starry flounder",
    "scientificName": "Platichthys stellatus",
    "authorityIdentifiers": {
      "NCBI": "195632",
      "WoRMS": "154781"
    },
    "domain": {
      "environmentClasses": [
        "marine–brackish–freshwater tolerant"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine–brackish–freshwater tolerant"
        ],
        "substrateStructureDepth": [
          "Demersal over gravel, sand and mud in ocean, bays, estuaries, river mouths and sloughs."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:surf",
        "habitat:pier",
        "habitat:bay-shore",
        "habitat:tidal-slough",
        "habitat:estuary",
        "habitat:estuary-mouth"
      ],
      "incompatible": [
        "habitat:rocky-shore"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Demersal over gravel, sand and mud in ocean, bays, estuaries, river mouths and sloughs."
    ],
    "seasonalPhenology": [
      "Regional spawning near river mouths/sloughs November–February; no catch window."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "worms",
      "crustaceans",
      "small fish"
    ],
    "feedingMode": "Soft-bottom benthic predator.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "worms",
          "crustaceans",
          "small fish"
        ],
        "habitats": [
          "habitat:surf",
          "habitat:pier",
          "habitat:bay-shore",
          "habitat:tidal-slough",
          "habitat:estuary",
          "habitat:estuary-mouth"
        ],
        "lureFamily": "bottom-contact presentation over mapped sand/mud/gravel",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-starry"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "estuarine habitat alteration",
      "bottom-trawl bycatch"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 28,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "CDFW general ocean rule listed exact starry flounder as no-limit when checked; jurisdiction, gear, place and MPA rules remain live gates.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-starry",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-general-ocean",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Starry flounder",
          "scientificName": "Platichthys stellatus"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "195632",
          "WoRMS": "154781"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–brackish–freshwater tolerant"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–brackish–freshwater tolerant"
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Demersal over gravel, sand and mud in ocean, bays, estuaries, river mouths and sloughs."
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Demersal over gravel, sand and mud in ocean, bays, estuaries, river mouths and sloughs."
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–brackish–freshwater tolerant"
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Demersal over gravel, sand and mud in ocean, bays, estuaries, river mouths and sloughs."
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine–brackish–freshwater tolerant"
            ],
            "substrateStructureDepth": [
              "Demersal over gravel, sand and mud in ocean, bays, estuaries, river mouths and sloughs."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "worms",
          "crustaceans",
          "small fish"
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Soft-bottom benthic predator.",
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional spawning near river mouths/sloughs November–February; no catch window."
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "estuarine habitat alteration",
          "bottom-trawl bycatch"
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "CDFW general ocean rule listed exact starry flounder as no-limit when checked; jurisdiction, gear, place and MPA rules remain live gates.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-general-ocean"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "worms",
              "crustaceans",
              "small fish"
            ],
            "habitats": [
              "habitat:surf",
              "habitat:pier",
              "habitat:bay-shore",
              "habitat:tidal-slough",
              "habitat:estuary",
              "habitat:estuary-mouth"
            ],
            "lureFamily": "bottom-contact presentation over mapped sand/mud/gravel",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–brackish–freshwater tolerant"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–brackish–freshwater tolerant"
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Demersal over gravel, sand and mud in ocean, bays, estuaries, river mouths and sloughs."
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Demersal over gravel, sand and mud in ocean, bays, estuaries, river mouths and sloughs."
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–brackish–freshwater tolerant"
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Demersal over gravel, sand and mud in ocean, bays, estuaries, river mouths and sloughs."
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "worms",
          "crustaceans",
          "small fish"
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional spawning near river mouths/sloughs November–February; no catch window."
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "worms",
              "crustaceans",
              "small fish"
            ],
            "habitats": [
              "habitat:surf",
              "habitat:pier",
              "habitat:bay-shore",
              "habitat:tidal-slough",
              "habitat:estuary",
              "habitat:estuary-mouth"
            ],
            "lureFamily": "bottom-contact presentation over mapped sand/mud/gravel",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-starry"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:striped-seaperch": {
    "id": "species:striped-seaperch",
    "commonName": "Striped seaperch",
    "scientificName": "Embiotoca lateralis",
    "authorityIdentifiers": {
      "NCBI": "229144",
      "WoRMS": "240740"
    },
    "domain": {
      "environmentClasses": [
        "marine, including bays/estuaries"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine, including bays/estuaries"
        ],
        "substrateStructureDepth": [
          "Shallow rocky reef, kelp and nearshore artificial structure; surface/intertidal to deeper water."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:pier",
        "habitat:jetty",
        "habitat:breakwater",
        "habitat:bay-shore",
        "habitat:rocky-shore"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:tidal-slough"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Shallow rocky reef, kelp and nearshore artificial structure; surface/intertidal to deeper water."
    ],
    "seasonalPhenology": [
      "Seasonal movement unknown."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "brittle stars",
      "fish eggs",
      "bivalves",
      "gastropods",
      "urchins"
    ],
    "feedingMode": "Structure-associated benthic forager.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "brittle stars",
          "fish eggs",
          "bivalves",
          "gastropods",
          "urchins"
        ],
        "habitats": [
          "habitat:pier",
          "habitat:jetty",
          "habitat:breakwater",
          "habitat:bay-shore",
          "habitat:rocky-shore"
        ],
        "lureFamily": "small benthic-invertebrate profile near rock/kelp/pilings",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-striped-seaperch"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "viviparity",
      "low reproductive potential",
      "aggregation susceptibility"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 3,
      "status": "sparse",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Surfperch aggregate closure/bag plus current place/MPA rules; no exact minimum verified.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-striped-seaperch",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-sf-bay-regs",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Striped seaperch",
          "scientificName": "Embiotoca lateralis"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "229144",
          "WoRMS": "240740"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine, including bays/estuaries"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine, including bays/estuaries"
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Shallow rocky reef, kelp and nearshore artificial structure; surface/intertidal to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Shallow rocky reef, kelp and nearshore artificial structure; surface/intertidal to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine, including bays/estuaries"
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Shallow rocky reef, kelp and nearshore artificial structure; surface/intertidal to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine, including bays/estuaries"
            ],
            "substrateStructureDepth": [
              "Shallow rocky reef, kelp and nearshore artificial structure; surface/intertidal to deeper water."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "brittle stars",
          "fish eggs",
          "bivalves",
          "gastropods",
          "urchins"
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Structure-associated benthic forager.",
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "unknown",
        "reason": "Retained profile explicitly reports season/movement as unknown or unresolved.",
        "sourceIds": []
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "viviparity",
          "low reproductive potential",
          "aggregation susceptibility"
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Surfperch aggregate closure/bag plus current place/MPA rules; no exact minimum verified.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-sf-bay-regs"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "brittle stars",
              "fish eggs",
              "bivalves",
              "gastropods",
              "urchins"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:bay-shore",
              "habitat:rocky-shore"
            ],
            "lureFamily": "small benthic-invertebrate profile near rock/kelp/pilings",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine, including bays/estuaries"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine, including bays/estuaries"
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Shallow rocky reef, kelp and nearshore artificial structure; surface/intertidal to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Shallow rocky reef, kelp and nearshore artificial structure; surface/intertidal to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine, including bays/estuaries"
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Shallow rocky reef, kelp and nearshore artificial structure; surface/intertidal to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "brittle stars",
          "fish eggs",
          "bivalves",
          "gastropods",
          "urchins"
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "unknown",
        "reason": "Retained profile explicitly reports season/movement as unknown or unresolved.",
        "sourceIds": []
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "brittle stars",
              "fish eggs",
              "bivalves",
              "gastropods",
              "urchins"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:bay-shore",
              "habitat:rocky-shore"
            ],
            "lureFamily": "small benthic-invertebrate profile near rock/kelp/pilings",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-striped-seaperch"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:topsmelt": {
    "id": "species:topsmelt",
    "commonName": "Topsmelt",
    "scientificName": "Atherinops affinis",
    "authorityIdentifiers": {
      "NCBI": "238741",
      "WoRMS": "279812"
    },
    "domain": {
      "environmentClasses": [
        "marine–estuarine, hypersaline tolerant"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine–estuarine, hypersaline tolerant"
        ],
        "substrateStructureDepth": [
          "Upper-water-column schools along estuaries, shorelines, beaches, kelp and pilings; most often surface to about 9 m."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:pier",
        "habitat:bay-shore",
        "habitat:estuary",
        "habitat:estuary-mouth",
        "habitat:surf"
      ],
      "incompatible": [
        "habitat:tidal-slough"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Upper-water-column schools along estuaries, shorelines, beaches, kelp and pilings; most often surface to about 9 m."
    ],
    "seasonalPhenology": [
      "Broad spring/summer estuary use and fall/winter coast/bay pattern is not current presence."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "algae",
      "diatoms",
      "small crustaceans",
      "benthic invertebrates"
    ],
    "feedingMode": "Schooling omnivore/planktivore.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "algae",
          "diatoms",
          "small crustaceans",
          "benthic invertebrates"
        ],
        "habitats": [
          "habitat:pier",
          "habitat:bay-shore",
          "habitat:estuary",
          "habitat:estuary-mouth",
          "habitat:surf"
        ],
        "lureFamily": "small suspended presentation around observed upper-water schools",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-topsmelt"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "spawning eggs attach to vegetation",
      "forage role",
      "no formal stock assessment",
      "SF Bay consumption concern"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 49,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "CDFW general ocean rule listed exact topsmelt as no-limit; OEHHA health advice is separate and must display for SF Bay.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-topsmelt",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-general-ocean",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:oehha-sf-bay",
        "supports": "Only advisory/vulnerability/legal caution; not ecology or occurrence.",
        "grade": "B",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Topsmelt",
          "scientificName": "Atherinops affinis"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "238741",
          "WoRMS": "279812"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–estuarine, hypersaline tolerant"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–estuarine, hypersaline tolerant"
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Upper-water-column schools along estuaries, shorelines, beaches, kelp and pilings; most often surface to about 9 m."
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Upper-water-column schools along estuaries, shorelines, beaches, kelp and pilings; most often surface to about 9 m."
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–estuarine, hypersaline tolerant"
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Upper-water-column schools along estuaries, shorelines, beaches, kelp and pilings; most often surface to about 9 m."
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine–estuarine, hypersaline tolerant"
            ],
            "substrateStructureDepth": [
              "Upper-water-column schools along estuaries, shorelines, beaches, kelp and pilings; most often surface to about 9 m."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "algae",
          "diatoms",
          "small crustaceans",
          "benthic invertebrates"
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Schooling omnivore/planktivore.",
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Broad spring/summer estuary use and fall/winter coast/bay pattern is not current presence."
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "spawning eggs attach to vegetation",
          "forage role",
          "no formal stock assessment",
          "SF Bay consumption concern"
        ],
        "sourceIds": [
          "source:cdfw-topsmelt",
          "source:oehha-sf-bay"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "CDFW general ocean rule listed exact topsmelt as no-limit; OEHHA health advice is separate and must display for SF Bay.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-general-ocean"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "algae",
              "diatoms",
              "small crustaceans",
              "benthic invertebrates"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "small suspended presentation around observed upper-water schools",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine–estuarine, hypersaline tolerant"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine–estuarine, hypersaline tolerant"
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Upper-water-column schools along estuaries, shorelines, beaches, kelp and pilings; most often surface to about 9 m."
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Upper-water-column schools along estuaries, shorelines, beaches, kelp and pilings; most often surface to about 9 m."
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine–estuarine, hypersaline tolerant"
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Upper-water-column schools along estuaries, shorelines, beaches, kelp and pilings; most often surface to about 9 m."
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "algae",
          "diatoms",
          "small crustaceans",
          "benthic invertebrates"
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Broad spring/summer estuary use and fall/winter coast/bay pattern is not current presence."
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "algae",
              "diatoms",
              "small crustaceans",
              "benthic invertebrates"
            ],
            "habitats": [
              "habitat:pier",
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth",
              "habitat:surf"
            ],
            "lureFamily": "small suspended presentation around observed upper-water schools",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-topsmelt"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:walleye-surfperch": {
    "id": "species:walleye-surfperch",
    "commonName": "Walleye surfperch",
    "scientificName": "Hyperprosopon argenteum",
    "authorityIdentifiers": {
      "NCBI": "100192",
      "WoRMS": "281098"
    },
    "domain": {
      "environmentClasses": [
        "marine nearshore/embayment"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine nearshore/embayment"
        ],
        "substrateStructureDepth": [
          "Sandy beach, bays and shallow water near rocks/pier structure; schooling."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:surf",
        "habitat:pier",
        "habitat:jetty",
        "habitat:breakwater",
        "habitat:bay-shore"
      ],
      "incompatible": [
        "habitat:tidal-slough"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Sandy beach, bays and shallow water near rocks/pier structure; schooling."
    ],
    "seasonalPhenology": [
      "Regional mating and embayment patterns do not establish a Bay Bite season."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "small crustaceans"
    ],
    "feedingMode": "Schooling small-crustacean forager.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "small crustaceans"
        ],
        "habitats": [
          "habitat:surf",
          "habitat:pier",
          "habitat:jetty",
          "habitat:breakwater",
          "habitat:bay-shore"
        ],
        "lureFamily": "small suspended or bottom-near invertebrate profile at sand/structure edge",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-walleye",
              "source:cdfw-surfperch-account"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "viviparity",
      "schooling aggregation",
      "short life",
      "contaminant advisory"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 0,
      "status": "zero-edge-blocked",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "Zero-edge non-recommendable. Surfperch aggregate closure/bag, health advice, place and MPA rules require live resolution.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-walleye",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-surfperch-account",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-sf-bay-regs",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:oehha-sf-bay",
        "supports": "Only advisory/vulnerability/legal caution; not ecology or occurrence.",
        "grade": "B",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "blocked-zero-edge",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "Walleye surfperch",
          "scientificName": "Hyperprosopon argenteum"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "100192",
          "WoRMS": "281098"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine nearshore/embayment"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine nearshore/embayment"
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Sandy beach, bays and shallow water near rocks/pier structure; schooling."
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Sandy beach, bays and shallow water near rocks/pier structure; schooling."
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine nearshore/embayment"
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Sandy beach, bays and shallow water near rocks/pier structure; schooling."
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine nearshore/embayment"
            ],
            "substrateStructureDepth": [
              "Sandy beach, bays and shallow water near rocks/pier structure; schooling."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "small crustaceans"
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Schooling small-crustacean forager.",
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional mating and embayment patterns do not establish a Bay Bite season."
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "viviparity",
          "schooling aggregation",
          "short life",
          "contaminant advisory"
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account",
          "source:oehha-sf-bay"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "current-rule-gated",
          "statement": "Zero-edge non-recommendable. Surfperch aggregate closure/bag, health advice, place and MPA rules require live resolution.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-sf-bay-regs"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "small crustaceans"
            ],
            "habitats": [
              "habitat:surf",
              "habitat:pier",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:bay-shore"
            ],
            "lureFamily": "small suspended or bottom-near invertebrate profile at sand/structure edge",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine nearshore/embayment"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine nearshore/embayment"
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Sandy beach, bays and shallow water near rocks/pier structure; schooling."
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Sandy beach, bays and shallow water near rocks/pier structure; schooling."
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine nearshore/embayment"
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Sandy beach, bays and shallow water near rocks/pier structure; schooling."
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "small crustaceans"
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Regional mating and embayment patterns do not establish a Bay Bite season."
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "small crustaceans"
            ],
            "habitats": [
              "habitat:surf",
              "habitat:pier",
              "habitat:jetty",
              "habitat:breakwater",
              "habitat:bay-shore"
            ],
            "lureFamily": "small suspended or bottom-near invertebrate profile at sand/structure edge",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-walleye",
          "source:cdfw-surfperch-account"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:white-croaker": {
    "id": "species:white-croaker",
    "commonName": "White croaker",
    "scientificName": "Genyonemus lineatus",
    "authorityIdentifiers": {
      "NCBI": "320395",
      "WoRMS": "280830"
    },
    "domain": {
      "environmentClasses": [
        "marine nearshore/bays"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "marine nearshore/bays"
        ],
        "substrateStructureDepth": [
          "Demersal soft sand–mud habitat, sometimes sand-bottom kelp; surf zone to deeper water."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:surf",
        "habitat:pier",
        "habitat:bay-shore",
        "habitat:estuary",
        "habitat:estuary-mouth"
      ],
      "incompatible": [
        "habitat:rocky-shore",
        "habitat:tidal-slough"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Demersal soft sand–mud habitat, sometimes sand-bottom kelp; surf zone to deeper water."
    ],
    "seasonalPhenology": [
      "Study-specific spawning/diel findings do not support a Bay Bite catch window."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "crustaceans",
      "polychaetes",
      "clams",
      "small fish"
    ],
    "feedingMode": "Primarily benthic/epibenthic feeder.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [
      {
        "forageGuilds": [
          "crustaceans",
          "polychaetes",
          "clams",
          "small fish"
        ],
        "habitats": [
          "habitat:surf",
          "habitat:pier",
          "habitat:bay-shore",
          "habitat:estuary",
          "habitat:estuary-mouth"
        ],
        "lureFamily": "bottom presentation over mapped soft bottom",
        "profileSize": "qualitative only",
        "depthZone": "mapped shore-reachable habitat only",
        "retrieve": "controlled for substrate/current and safety",
        "rigWeight": "minimum needed for safe control; no universal number",
        "vibration": "qualitative only; no frequency claim",
        "claimProvenance": {
          "lureFamily": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field heuristic; no comparative local catch/effort validation."
            ],
            "includedInScientificCoverage": false
          },
          "forageMatch": {
            "kind": "sourced",
            "sourceIds": [
              "source:cdfw-white-croaker"
            ],
            "limitations": [
              "Field heuristic outside scientific coverage; no comparative local catch/effort validation or causal lure claim."
            ],
            "includedInScientificCoverage": true
          },
          "profileSize": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative profile only; no exact size claim or calibrated optimum."
            ],
            "includedInScientificCoverage": false
          },
          "depthZone": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Requires mapped depth/substrate and local shore reachability; no exact depth claim."
            ],
            "includedInScientificCoverage": false
          },
          "retrieve": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Field-control heuristic; not evidence of increased catch probability."
            ],
            "includedInScientificCoverage": false
          },
          "vibration": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Qualitative visibility/control heuristic; no frequency claim."
            ],
            "includedInScientificCoverage": false
          },
          "rigWeight": {
            "kind": "field-heuristic",
            "sourceIds": [],
            "limitations": [
              "Select for control and safety; no universal exact weight is asserted."
            ],
            "includedInScientificCoverage": false
          }
        }
      }
    ],
    "vulnerabilities": [
      "contaminant bioaccumulation",
      "nearshore fishing pressure",
      "shallow juvenile habitat"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 8,
      "status": "historical-corroboration-only",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "current-rule-gated",
      "statement": "No dedicated special limit verified; general finfish, place and MPA rules apply. OEHHA consumption alert is independent and mandatory where applicable.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-white-croaker",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:oehha-white-croaker",
        "supports": "Only advisory/vulnerability/legal caution; not ecology or occurrence.",
        "grade": "B",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "profile-available-gates-required",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "White croaker",
          "scientificName": "Genyonemus lineatus"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "320395",
          "WoRMS": "280830"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine nearshore/bays"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine nearshore/bays"
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Demersal soft sand–mud habitat, sometimes sand-bottom kelp; surf zone to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Demersal soft sand–mud habitat, sometimes sand-bottom kelp; surf zone to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine nearshore/bays"
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Demersal soft sand–mud habitat, sometimes sand-bottom kelp; surf zone to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "marine nearshore/bays"
            ],
            "substrateStructureDepth": [
              "Demersal soft sand–mud habitat, sometimes sand-bottom kelp; surf zone to deeper water."
            ]
          }
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "crustaceans",
          "polychaetes",
          "clams",
          "small fish"
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Primarily benthic/epibenthic feeder.",
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Study-specific spawning/diel findings do not support a Bay Bite catch window."
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "contaminant bioaccumulation",
          "nearshore fishing pressure",
          "shallow juvenile habitat"
        ],
        "sourceIds": [
          "source:cdfw-white-croaker",
          "source:oehha-white-croaker"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "unknown",
        "reason": "No separately classified legal source directly supports retained text; live rule resolution remains mandatory.",
        "sourceIds": []
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "crustaceans",
              "polychaetes",
              "clams",
              "small fish"
            ],
            "habitats": [
              "habitat:surf",
              "habitat:pier",
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth"
            ],
            "lureFamily": "bottom presentation over mapped soft bottom",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "marine nearshore/bays"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "marine nearshore/bays"
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Demersal soft sand–mud habitat, sometimes sand-bottom kelp; surf zone to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Demersal soft sand–mud habitat, sometimes sand-bottom kelp; surf zone to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "marine nearshore/bays"
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Demersal soft sand–mud habitat, sometimes sand-bottom kelp; surf zone to deeper water."
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "crustaceans",
          "polychaetes",
          "clams",
          "small fish"
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Study-specific spawning/diel findings do not support a Bay Bite catch window."
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "known",
        "value": [
          {
            "forageGuilds": [
              "crustaceans",
              "polychaetes",
              "clams",
              "small fish"
            ],
            "habitats": [
              "habitat:surf",
              "habitat:pier",
              "habitat:bay-shore",
              "habitat:estuary",
              "habitat:estuary-mouth"
            ],
            "lureFamily": "bottom presentation over mapped soft bottom",
            "profileSize": "qualitative only",
            "depthZone": "mapped shore-reachable habitat only",
            "retrieve": "controlled for substrate/current and safety",
            "rigWeight": "minimum needed for safe control; no universal number",
            "vibration": "qualitative only; no frequency claim"
          }
        ],
        "sourceIds": [
          "source:cdfw-white-croaker"
        ],
        "limitations": [
          "Field heuristic outside scientific coverage; no causal lure-effectiveness claim."
        ]
      }
    }
  },
  "species:white-sturgeon": {
    "id": "species:white-sturgeon",
    "commonName": "White sturgeon",
    "scientificName": "Acipenser transmontanus",
    "authorityIdentifiers": {
      "NCBI": "7904",
      "WoRMS": "238345"
    },
    "domain": {
      "environmentClasses": [
        "freshwater–brackish–estuarine with occasional coastal movement"
      ],
      "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
    },
    "lifeStages": [
      {
        "stage": "unknown/mixed",
        "waterAndSalinity": [
          "freshwater–brackish–estuarine with occasional coastal movement"
        ],
        "substrateStructureDepth": [
          "Large rivers, Delta and estuary channels; spawning eggs adhere to hard river substrate; feeding/residence is demersal."
        ]
      }
    ],
    "habitat": {
      "compatible": [
        "habitat:bay-shore",
        "habitat:tidal-slough",
        "habitat:estuary"
      ],
      "incompatible": [
        "habitat:surf",
        "habitat:jetty",
        "habitat:breakwater",
        "habitat:rocky-shore"
      ],
      "nuances": [
        "Compatibility is conditional on mapped substrate/structure/salinity/depth and shore reachability; catalog label alone is insufficient."
      ]
    },
    "substrateStructureSalinityDepthExposure": [
      "Large rivers, Delta and estuary channels; spawning eggs adhere to hard river substrate; feeding/residence is demersal."
    ],
    "seasonalPhenology": [
      "Adults move riverward seasonally and spawn broadly February–June; individual salinity histories vary. Not a target window."
    ],
    "dielLight": [
      "Unknown for actionable scoring; light may be used only as a visibility/control input."
    ],
    "forageGuilds": [
      "benthic prey (exact local composition unresolved)"
    ],
    "feedingMode": "Demersal benthic feeder.",
    "conditionResponses": [
      {
        "input": "current",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wave",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "wind",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "clarity",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      },
      {
        "input": "light",
        "rule": "Assess presentation control and safety only; no feeding multiplier is asserted.",
        "uncertainty": "Requires fresh, representative local observation and mapped geometry."
      }
    ],
    "shoreAccessibility": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
    "shorePresentations": [],
    "vulnerabilities": [
      "long lived",
      "late maturity",
      "infrequent female spawning",
      "habitat loss",
      "entrainment",
      "contaminants",
      "poaching",
      "vessel strikes",
      "HAB mortality"
    ],
    "localHistoricalEvidence": {
      "catalogAcceptedEdgeCount": 0,
      "status": "zero-edge-blocked",
      "limitations": [
        "Accepted-client catalog count; not independent observations, abundance, absence, seasonality, or current presence."
      ]
    },
    "legalIdentityRuleStatus": {
      "status": "conservation-legal-alert-first",
      "statement": "CONSERVATION/LEGAL ALERT FIRST. CESA candidate protections; zero-edge non-recommendable. The cited 2025–26 catch-and-release season ended June 30, 2026, so status is unresolved on checked date; no recommendation. Report card and special barbless-hook/handling rules apply when a lawful season exists.",
      "checkedAt": "2026-08-13",
      "actionable": false,
      "limitations": [
        "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
      ]
    },
    "evidence": [
      {
        "sourceId": "source:cdfw-white-sturgeon",
        "supports": "Only conservation vulnerability and legal/status caution; not ecology unless separately cited.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-sturgeon-card",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:cdfw-sturgeon-opener",
        "supports": "Only legalIdentityRuleStatus; not ecology or occurrence.",
        "grade": "A",
        "limitations": "Does not establish current local presence or lure effectiveness."
      },
      {
        "sourceId": "source:frontiers-sturgeon",
        "supports": "Only exact-taxon biology fields allowed by registry; not law, current occurrence, or lure efficacy.",
        "grade": "B",
        "limitations": "Does not establish current local presence or lure effectiveness."
      }
    ],
    "uncertainty": [
      "No current local presence claim.",
      "No calibrated abundance, catch probability, bite window, temperature/pressure/solunar threshold, or causal lure claim.",
      "Numeric physiology/response curves remain unknown unless separately sourced and validated."
    ],
    "recommendability": "blocked-zero-edge",
    "profileVersion": "exact-taxon-science:v1",
    "reviewedAt": "2026-08-13",
    "claimProvenance": {
      "taxonomy": {
        "state": "known",
        "value": {
          "commonName": "White sturgeon",
          "scientificName": "Acipenser transmontanus"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Authority records verify identity only."
        ]
      },
      "authorityIdentifiers": {
        "state": "known",
        "value": {
          "NCBI": "7904",
          "WoRMS": "238345"
        },
        "sourceIds": [
          "source:ncbi-taxonomy",
          "source:worms-taxonomy"
        ],
        "limitations": [
          "Identifiers re-fetched and matched to canonical name."
        ]
      },
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "freshwater–brackish–estuarine with occasional coastal movement"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "freshwater–brackish–estuarine with occasional coastal movement"
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Large rivers, Delta and estuary channels; spawning eggs adhere to hard river substrate; feeding/residence is demersal."
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Large rivers, Delta and estuary channels; spawning eggs adhere to hard river substrate; feeding/residence is demersal."
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "freshwater–brackish–estuarine with occasional coastal movement"
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Large rivers, Delta and estuary channels; spawning eggs adhere to hard river substrate; feeding/residence is demersal."
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "lifeStages": {
        "state": "known",
        "value": [
          {
            "stage": "unknown/mixed",
            "waterAndSalinity": [
              "freshwater–brackish–estuarine with occasional coastal movement"
            ],
            "substrateStructureDepth": [
              "Large rivers, Delta and estuary channels; spawning eggs adhere to hard river substrate; feeding/residence is demersal."
            ]
          }
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "benthic prey (exact local composition unresolved)"
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "feedingMode": {
        "state": "known",
        "value": "Demersal benthic feeder.",
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "shoreAccessibility": {
        "state": "known",
        "value": "Conditional on safely reachable mapped habitat; historical occurrence is not current presence.",
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Adults move riverward seasonally and spawn broadly February–June; individual salinity histories vary. Not a target window."
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "vulnerabilities": {
        "state": "known",
        "value": [
          "long lived",
          "late maturity",
          "infrequent female spawning",
          "habitat loss",
          "entrainment",
          "contaminants",
          "poaching",
          "vessel strikes",
          "HAB mortality"
        ],
        "sourceIds": [
          "source:frontiers-sturgeon",
          "source:cdfw-white-sturgeon"
        ],
        "limitations": [
          "Biology, conservation, and advisory caution remain distinct."
        ]
      },
      "localHistoricalEvidence": {
        "state": "unknown",
        "reason": "Accepted-edge count is retained reviewed metadata, but no independently fetched occurrence artifact directly supports the per-profile count.",
        "sourceIds": []
      },
      "legalIdentityRuleStatus": {
        "state": "known",
        "value": {
          "status": "conservation-legal-alert-first",
          "statement": "CONSERVATION/LEGAL ALERT FIRST. CESA candidate protections; zero-edge non-recommendable. The cited 2025–26 catch-and-release season ended June 30, 2026, so status is unresolved on checked date; no recommendation. Report card and special barbless-hook/handling rules apply when a lawful season exists.",
          "checkedAt": "2026-08-13",
          "actionable": false,
          "limitations": [
            "Must resolve exact taxon, date, area, mode, MPA, access, gear, size/retention intent and current official rule."
          ]
        },
        "sourceIds": [
          "source:cdfw-white-sturgeon",
          "source:cdfw-sturgeon-card",
          "source:cdfw-sturgeon-opener"
        ],
        "limitations": [
          "Time-sensitive; re-fetch at evaluation; does not support ecology."
        ]
      },
      "presentation": {
        "state": "unknown",
        "reason": "No supported field-heuristic presentation is available.",
        "sourceIds": []
      }
    },
    "claims": {
      "domain": {
        "state": "known",
        "value": {
          "environmentClasses": [
            "freshwater–brackish–estuarine with occasional coastal movement"
          ],
          "regionScope": "Greater Bay Area; biology may be regional and does not establish current local presence"
        },
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "environment": {
        "state": "known",
        "value": [
          "freshwater–brackish–estuarine with occasional coastal movement"
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "substrate": {
        "state": "known",
        "value": [
          "Large rivers, Delta and estuary channels; spawning eggs adhere to hard river substrate; feeding/residence is demersal."
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "structure": {
        "state": "known",
        "value": [
          "Large rivers, Delta and estuary channels; spawning eggs adhere to hard river substrate; feeding/residence is demersal."
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "salinity": {
        "state": "known",
        "value": [
          "freshwater–brackish–estuarine with occasional coastal movement"
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "depth": {
        "state": "known",
        "value": [
          "Large rivers, Delta and estuary channels; spawning eggs adhere to hard river substrate; feeding/residence is demersal."
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Combined reviewed text is not an atomized quantitative measurement."
        ]
      },
      "forage": {
        "state": "known",
        "value": [
          "benthic prey (exact local composition unresolved)"
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy."
        ]
      },
      "season": {
        "state": "known",
        "value": [
          "Adults move riverward seasonally and spawn broadly February–June; individual salinity histories vary. Not a target window."
        ],
        "sourceIds": [
          "source:frontiers-sturgeon"
        ],
        "limitations": [
          "Regional/species biology does not establish current local presence, abundance, catch probability, or lure efficacy.",
          "Life-history timing is not a bite window or regulation season."
        ]
      },
      "presentation": {
        "state": "unknown",
        "reason": "No supported field-heuristic presentation is available.",
        "sourceIds": []
      }
    },
    "targetingPolicy": "conservation-legal-alert-first"
  }
} as const satisfies Readonly<Record<string, ExactTaxonScienceRecord>>);

export const reviewedExpansionSources = deepFreeze([
  {
    "id": "source:cdfw-bat-ray",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/bat-ray/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-black-rockfish",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/black-rockfish/false",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-blue-rockfish",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/blue-rockfish/false/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-brown-rockfish",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/brown-rockfish/false/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-cabezon",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/cabezon/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-groundfish-2026",
    "sourceClass": "CDFW current regulation summary",
    "url": "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Groundfish-Summary",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "legal-regulation",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "legalIdentityRuleStatus"
    ],
    "title": "CDFW current regulation summary",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-catfish-monitoring",
    "sourceClass": "CDFW peer-reviewed monitoring",
    "url": "https://journal.wildlife.ca.gov/2024/12/27/experimental-gillnet-study-to-inform-future-large-fish-monitoring-in-the-san-francisco-estuary/",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW peer-reviewed monitoring",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:smithsonian-channel-catfish",
    "sourceClass": "Smithsonian institutional synthesis",
    "url": "https://invasions.si.edu/nemesis/species_summary/163998",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "Smithsonian institutional synthesis",
    "sourceType": "authoritative-agency-publication",
    "publisher": "Smithsonian Institution",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-jacksmelt",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/jacksmelt/true/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-kelp-greenling",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/kelp-greenling/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:noaa-kelp-greenling",
    "sourceClass": "NOAA agency life-history database",
    "url": "https://apps-afsc.fisheries.noaa.gov/ichthyo/LHDataLH.php?GSID=Hexagrammos%21decagrammus",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "NOAA agency life-history database",
    "sourceType": "authoritative-agency-publication",
    "publisher": "NOAA",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-leopard-shark",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/leopard-shark/false/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-sf-bay-regs",
    "sourceClass": "CDFW current SF Bay regulation map",
    "url": "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Fishing-Map/sf-bay",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "legal-regulation",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "legalIdentityRuleStatus"
    ],
    "title": "CDFW current SF Bay regulation map",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:noaa-lingcod",
    "sourceClass": "NOAA agency species profile",
    "url": "https://www.fisheries.noaa.gov/species/lingcod",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "NOAA agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "NOAA",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-lingcod",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/lingcod/false/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-monkeyface",
    "sourceClass": "CDFW agency species account PDF",
    "url": "https://nrm.dfg.ca.gov/FileHandler.ashx?DocumentID=34299",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species account PDF",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:ca-waterboards-staghorn",
    "sourceClass": "California State Water Resources Control Board-hosted agency technical species account",
    "url": "https://www.waterboards.ca.gov/centralcoast/water_issues/programs/duke_energy/docs/sampling/staghornsculpin.pdf",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "California State Water Resources Control Board-hosted agency technical species account",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California State Water Resources Control Board",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-general-ocean",
    "sourceClass": "CDFW current general ocean regulations",
    "url": "https://wildlife.ca.gov/Fishing/Ocean/Regulations/Sport-Fishing/General-Ocean-Fishing-Regs",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "legal-regulation",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "legalIdentityRuleStatus"
    ],
    "title": "CDFW current general ocean regulations",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-pile",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/pile-perch/false/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-surfperch-account",
    "sourceClass": "CDFW agency fisheries account PDF",
    "url": "https://nrm.dfg.ca.gov/FileHandler.ashx?DocumentID=34362",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency fisheries account PDF",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-redtail",
    "sourceClass": "CDFW enhanced status report",
    "url": "https://marinespecies.wildlife.ca.gov/barred-surfperch-and-redtail-surfperch/the-species/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW enhanced status report",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:usfws-rubberlip",
    "sourceClass": "USFWS exact-species taxonomy page",
    "url": "https://www.fws.gov/species/rubberlip-seaperch-rhacochilus-toxotes",
    "fetchedVia": "direct+jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "verification": {
      "direct": {
        "httpStatus": 200,
        "contentMatch": "Rubberlip Seaperch / Rhacochilus toxotes"
      },
      "jina": {
        "httpStatus": 200,
        "contentMatch": "Rubberlip Seaperch / Rhacochilus toxotes"
      },
      "limitation": "Identity/taxonomy only; not ecology."
    },
    "role": "taxonomy-metadata",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "taxonomy",
      "authorityIdentifiers"
    ],
    "title": "USFWS exact-species taxonomy page",
    "sourceType": "secondary-metadata",
    "publisher": "U.S. Fish and Wildlife Service",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Identity/taxonomy only; not ecology."
  },
  {
    "id": "source:cdfw-starry",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/starry-flounder/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-striped-seaperch",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/striped-seaperch/false/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-topsmelt",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/topsmelt/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-walleye",
    "sourceClass": "CDFW agency species profile",
    "url": "https://marinespecies.wildlife.ca.gov/walleye-surfperch/false/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW agency species profile",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-white-croaker",
    "sourceClass": "CDFW enhanced status report",
    "url": "https://marinespecies.wildlife.ca.gov/white-croaker/true/",
    "fetchedVia": "jina",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "CDFW enhanced status report",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:oehha-white-croaker",
    "sourceClass": "California OEHHA consumption advisory",
    "url": "https://oehha.ca.gov/fish/species/white-croaker",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "consumption-advisory",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "vulnerabilities",
      "legalIdentityRuleStatus"
    ],
    "title": "California OEHHA consumption advisory",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California OEHHA",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:oehha-sf-bay",
    "sourceClass": "California OEHHA consumption advisory",
    "url": "https://oehha.ca.gov/fish/advisories/san-francisco-bay",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "consumption-advisory",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "vulnerabilities",
      "legalIdentityRuleStatus"
    ],
    "title": "California OEHHA consumption advisory",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California OEHHA",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-white-sturgeon",
    "sourceClass": "CDFW conservation/legal status page",
    "url": "https://wildlife.ca.gov/Conservation/Fishes/Sturgeon/White-Sturgeon",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "conservation-status",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "vulnerabilities",
      "legalIdentityRuleStatus"
    ],
    "title": "CDFW conservation/legal status page",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-sturgeon-card",
    "sourceClass": "CDFW regulation/report-card page",
    "url": "https://wildlife.ca.gov/Conservation/Fishes/Sturgeon/report-card",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "legal-regulation",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "legalIdentityRuleStatus"
    ],
    "title": "CDFW regulation/report-card page",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-sturgeon-opener",
    "sourceClass": "CDFW 2025–26 season notice",
    "url": "https://wildlife.ca.gov/News/Archive/white-sturgeon-opener-kicks-off-with-a-no-fee-report-card-for-this-season",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "legal-regulation",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "legalIdentityRuleStatus"
    ],
    "title": "CDFW 2025–26 season notice",
    "sourceType": "authoritative-agency-publication",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:frontiers-sturgeon",
    "sourceClass": "Peer-reviewed telemetry/geochemistry study",
    "url": "https://www.frontiersin.org/journals/marine-science/articles/10.3389/fmars.2022.859038/full",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "Peer-reviewed telemetry/geochemistry study",
    "sourceType": "authoritative-agency-publication",
    "publisher": "Frontiers in Marine Science",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:cdfw-bay-study",
    "sourceClass": "CDFW primary standardized survey",
    "url": "https://wildlife.ca.gov/Conservation/Delta/Bay-Study",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "historical-occurrence",
    "claimStatus": "supplemental-not-foundation",
    "foundationForProfileClaims": false,
    "allowedClaimFields": [
      "localHistoricalEvidence"
    ],
    "title": "CDFW primary standardized survey",
    "sourceType": "official-monitoring-dataset",
    "publisher": "California Department of Fish and Wildlife",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:noaa-benthic",
    "sourceClass": "NOAA agency mapped habitat service",
    "url": "https://coast.noaa.gov/arcgis/rest/services/Hosted/san_francisco_bay_2011/FeatureServer",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "biology",
    "claimStatus": "supplemental-not-foundation",
    "foundationForProfileClaims": false,
    "allowedClaimFields": [
      "domain",
      "environment",
      "substrate",
      "structure",
      "salinity",
      "depth",
      "lifeStages",
      "season",
      "forage",
      "feedingMode",
      "vulnerabilities",
      "shoreAccessibility",
      "presentation"
    ],
    "title": "NOAA agency mapped habitat service",
    "sourceType": "authoritative-agency-publication",
    "publisher": "NOAA",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:obis-api",
    "sourceClass": "OBIS historical occurrence aggregator",
    "url": "https://api.obis.org/v3/",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "historical-occurrence",
    "claimStatus": "supplemental-not-foundation",
    "foundationForProfileClaims": false,
    "allowedClaimFields": [
      "localHistoricalEvidence"
    ],
    "title": "OBIS historical occurrence aggregator",
    "sourceType": "official-monitoring-dataset",
    "publisher": "OBIS",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:gbif-api",
    "sourceClass": "GBIF historical occurrence aggregator",
    "url": "https://techdocs.gbif.org/en/openapi/v1/occurrence",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "historical-occurrence",
    "claimStatus": "supplemental-not-foundation",
    "foundationForProfileClaims": false,
    "allowedClaimFields": [
      "localHistoricalEvidence"
    ],
    "title": "GBIF historical occurrence aggregator",
    "sourceType": "official-monitoring-dataset",
    "publisher": "GBIF",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:inat-api",
    "sourceClass": "iNaturalist community occurrence API",
    "url": "https://api.inaturalist.org/v1/docs/",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "role": "historical-occurrence",
    "claimStatus": "supplemental-not-foundation",
    "foundationForProfileClaims": false,
    "allowedClaimFields": [
      "localHistoricalEvidence"
    ],
    "title": "iNaturalist community occurrence API",
    "sourceType": "official-monitoring-dataset",
    "publisher": "iNaturalist",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:ncbi-taxonomy",
    "sourceClass": "NCBI Taxonomy authority service",
    "url": "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=taxonomy&id={NCBI_ID}",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "verification": {
      "recordsChecked": 21,
      "identifierNameMatches": 21
    },
    "role": "taxonomy-metadata",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "taxonomy",
      "authorityIdentifiers"
    ],
    "title": "NCBI Taxonomy authority service",
    "sourceType": "secondary-metadata",
    "publisher": "NCBI",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:worms-taxonomy",
    "sourceClass": "WoRMS Aphia authority service",
    "url": "https://www.marinespecies.org/rest/AphiaRecordByAphiaID/{APHIA_ID}",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "verification": {
      "recordsChecked": 13,
      "identifierNameMatches": 13
    },
    "role": "taxonomy-metadata",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "taxonomy",
      "authorityIdentifiers"
    ],
    "title": "WoRMS Aphia authority service",
    "sourceType": "secondary-metadata",
    "publisher": "World Register of Marine Species",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  },
  {
    "id": "source:gbif-species-match",
    "sourceClass": "GBIF species-match taxonomy service",
    "url": "https://api.gbif.org/v1/species/match?name={SCIENTIFIC_NAME}",
    "fetchedVia": "direct",
    "httpStatus": 200,
    "fetchedAt": "2026-08-13",
    "verifiedFetched": true,
    "verification": {
      "recordsChecked": 21,
      "exactMatches": 21,
      "canonicalNameMatches": 21
    },
    "role": "taxonomy-metadata",
    "claimStatus": "foundation",
    "foundationForProfileClaims": true,
    "allowedClaimFields": [
      "taxonomy",
      "authorityIdentifiers"
    ],
    "title": "GBIF species-match taxonomy service",
    "sourceType": "secondary-metadata",
    "publisher": "GBIF",
    "checkedAt": "2026-08-13",
    "reachability": "verified-http",
    "limitations": "Use only for the explicitly allowed claim fields; does not establish current local presence or catch probability."
  }
] as const satisfies readonly ScientificSourceRegistryRecord[]);
