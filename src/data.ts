import { evidenceForSpotId, researchSourceForId, researchSpots, type ResearchSensorBinding, type ResearchSpeciesEdge } from './fishing-smarts/research-catalog';
import { deepFreeze } from './deep-freeze';

export type Region = 'SF Coast' | 'Peninsula' | 'Marin/North Bay' | 'East Bay' | 'South Bay' | 'Half Moon Bay' | 'Carquinez/Delta' | 'Sonoma Coast' | 'Point Reyes' | 'Napa/San Pablo' | 'Western Delta' | 'Suisun Marsh' | 'Petaluma River';
export type Species =
  | 'Surfperch'
  | 'Striped Bass'
  | 'Halibut'
  | 'Rockfish'
  | 'Cabezon'
  | 'Lingcod'
  | 'Greenling'
  | 'Jacksmelt'
  | 'White Croaker'
  | 'Leopard Shark'
  | 'Bat Ray'
  | 'Smoothhound Shark'
  | 'Sturgeon'
  | 'Flounder/Sole'
  | 'Salmon'
  | 'Dungeness Crab'
  | 'Rock Crab';
export type Safety = 'Green' | 'Caution' | 'Hazard';

export interface SpeciesProfile {
  habitat: string;
  seasonalPattern: string;
  tideTrigger: string;
  rigs: string[];
  baits: string[];
  lures?: string[];
  identification: string;
  releaseOrRegulation: string;
}

export interface SpotIntel {
  waterRead: string;
  setup: string;
  primaryRigs: string[];
  baitPlan: string[];
  speciesNotes: Array<{ species: Species; whyHere: string; plan: string }>;
  legalChecklist: string[];
  safetyChecklist: string[];
  confidence: 'Field pattern' | 'Multi-source guidance' | 'Owner-listed access';
}

export interface Spot {
  id: string;
  name: string;
  region: Region;
  lat: number;
  lng: number;
  coordinatePrecision: string;
  coordinateStatus: 'exact-named-feature' | 'approximate-centroid';
  type: 'Surf' | 'Pier' | 'Jetty' | 'Bay Shore' | 'Marina' | 'Breakwater';
  safety: Safety;
  score: number;
  tideStation: string;
  bestWindow: string;
  biteReason: string;
  species: Species[];
  tactics: string[];
  accessNote: string;
  sourceNote: string;
  accessStatus?: {
    state: 'open' | 'partially-open' | 'closed' | 'unknown';
    affectedArea: string;
    checkedAt: string;
    sourceUrl: string;
  };
  stableId?: string;
  environmentClass?: string;
  ownerJurisdiction?: string;
  licenseBoundary?: string;
  physicalProfile?: { summary: string; substrate: string; salinity: string; exposure: string; grounding: string };
  safetyDetails?: string[];
  mpaScreen?: { status: string; warning: string; checkedAt: string };
  advisoryChecks?: string[];
  sensorBindings?: readonly ResearchSensorBinding[];
  evidenceEdges?: readonly ResearchSpeciesEdge[];
  sourceLinks?: Array<{ label: string; url: string }>;
  intel?: SpotIntel;
  conditions: {
    tide: string;
    swell: string;
    wind: string;
    water: string;
  };
}

const speciesLabelById: Record<string, Species> = {
  'species:barred-surfperch': 'Surfperch', 'species:redtail-surfperch': 'Surfperch', 'species:pile-perch': 'Surfperch', 'species:rubberlip-seaperch': 'Surfperch', 'species:striped-seaperch': 'Surfperch', 'species:walleye-surfperch': 'Surfperch',
  'species:striped-bass': 'Striped Bass', 'species:california-halibut': 'Halibut', 'species:black-rockfish': 'Rockfish', 'species:blue-rockfish': 'Rockfish', 'species:brown-rockfish': 'Rockfish', 'species:cabezon': 'Cabezon', 'species:lingcod': 'Lingcod', 'species:kelp-greenling': 'Greenling', 'species:jacksmelt': 'Jacksmelt', 'species:topsmelt': 'Jacksmelt', 'species:white-croaker': 'White Croaker', 'species:leopard-shark': 'Leopard Shark', 'species:bat-ray': 'Bat Ray', 'species:white-sturgeon': 'Sturgeon', 'species:starry-flounder': 'Flounder/Sole', 'species:pacific-staghorn-sculpin': 'Flounder/Sole', 'species:monkeyface-prickleback': 'Greenling', 'species:channel-catfish': 'Flounder/Sole'
};
const typeByHabitat: Record<string, Spot['type']> = { 'habitat:surf': 'Surf', 'habitat:pier': 'Pier', 'habitat:jetty': 'Jetty', 'habitat:breakwater': 'Breakwater', 'habitat:bay-shore': 'Bay Shore', 'habitat:rocky-shore': 'Bay Shore', 'habitat:estuary': 'Bay Shore', 'habitat:estuary-mouth': 'Bay Shore' };
// The generated accepted catalog is the only client data authority. Legacy draft
// records remain source-only during migration and are deliberately not projected
// into the browser bundle.
const legacyById = new Map<string, Spot>();
function cacheStationKey(record: (typeof researchSpots)[number]): string {
  if (record.region === 'Sonoma Coast') return 'Bodega Harbor';
  if (record.region === 'Half Moon Bay') return 'Half Moon Bay';
  if (record.region === 'Point Reyes') return 'Bolinas Lagoon';
  if (record.region === 'Carquinez/Delta' || record.region === 'Western Delta' || record.region === 'Suisun Marsh') return 'Martinez-Amorco Pier';
  if (record.region === 'South Bay') return 'Redwood City';
  if (record.region === 'East Bay') return record.coordinates.lon < -122.3 ? 'Richmond' : 'Alameda';
  if (record.region === 'Napa/San Pablo' || record.region === 'Petaluma River') return 'San Rafael';
  return record.environmentClass === 'open_coast' ? 'San Francisco' : 'San Francisco';
}

/** Deterministic UI projection of the generated, validated v2 research artifact. */
export const spots: Spot[] = researchSpots.map((record, index) => {
  const legacy = legacyById.get(record.legacyId);
  const evidenceEdges = evidenceForSpotId(record.id);
  const species = Array.from(new Set(evidenceEdges.map((edge) => speciesLabelById[edge.speciesId]).filter((item): item is Species => Boolean(item))));
  const sources = record.sourceIds.map((id) => researchSourceForId(id)).filter((item) => item !== undefined);
  return {
    id: record.legacyId, stableId: record.id, name: record.displayName, region: record.region as Region,
    lat: record.coordinates.lat, lng: record.coordinates.lon, coordinatePrecision: record.coordinates.precision,
    coordinateStatus: record.coordinates.precision.startsWith('exact named feature') ? 'exact-named-feature' : 'approximate-centroid',
    type: typeByHabitat[record.habitatIds[0]] ?? 'Bay Shore',
    safety: record.physicalProfile.exposure.match(/sneaker|surge|cliff/i) ? 'Caution' : 'Green', score: legacy?.score ?? 50 + (index % 21),
    tideStation: cacheStationKey(record), bestWindow: legacy?.bestWindow ?? 'Verify same-day tide, access, weather, and legal status',
    biteReason: record.physicalProfile.summary, species: species.length ? species : ['Flounder/Sole'], tactics: [...record.tactics],
    accessNote: `${record.access.conditions} ${record.licenseBoundary}`, sourceNote: 'Research accepted for access, MPA point-screen, and local evidence gates only; this is not legal target-now status.',
    conditions: legacy?.conditions ?? { tide: 'Use locality binding below', swell: record.environmentClass === 'open_coast' ? 'Use compatible wave binding below' : 'Ocean wave unavailable inland', wind: 'Use locality binding below', water: 'Use locality binding below' },
    environmentClass: record.environmentClass, ownerJurisdiction: record.ownerJurisdiction, licenseBoundary: record.licenseBoundary, physicalProfile: record.physicalProfile,
    safetyDetails: [...record.safety.hazardsAndRetreat, record.safety.closureConstraints], mpaScreen: { status: record.mpaAdjudication.status, warning: record.mpaAdjudication.warning, checkedAt: record.mpaAdjudication.checkedAt },
    advisoryChecks: [...record.advisories.sameDayChecks], sensorBindings: record.sensorBindings, evidenceEdges, sourceLinks: sources.map((source) => ({ label: source.title, url: source.url }))
  };
});

export function spotCountLabel(list: readonly Spot[]): string {
  return `${list.length} researched spots`;
}

export function isActionableSpot(spot: Spot): boolean {
  return spot.accessStatus?.state !== 'closed';
}

/** Shared field database: every spot receives the same evidence-weighted detail
 * structure, while the existing spot notes remain the local override layer. */
export const speciesProfiles: Record<Species, SpeciesProfile> = {
  Surfperch: { habitat: 'Sandy surf, the first trough, and foamy wash.', seasonalPattern: 'Year-round; strongest spring through fall on clean beaches.', tideTrigger: 'Incoming tide covering the inner trough; first part of the ebb can also work.', rigs: ['Carolina rig: 1/2–2 oz egg sinker, bead, swivel, 18–24 in 6–12 lb leader, size 4–6 hook.', 'Two-hook high-low with 2–4 oz pyramid sinker when current requires it.'], baits: ['Soft-shell sand crab', 'Pile worm', '2 in Gulp! Sandworm'], lures: ['Small grub or sandworm imitation'], identification: 'Barred and redtail surfperch are deep-bodied surf fish; confirm species before keeping.', releaseOrRegulation: 'Surfperch seasons, combined bag limits, and redtail minimum size change—check current CDFW rules.' },
  'Striped Bass': { habitat: 'Rip edges, creek mouths, points, current seams, and deep beach cuts.', seasonalPattern: 'Year-round; coastal surf activity commonly builds spring through fall.', tideTrigger: 'Moving water, especially an incoming push or first ebb after high slack.', rigs: ['Fish-finder rig with 2–4 oz pyramid, 18–24 in 20–30 lb leader, 2/0–5/0 circle hook.', 'Sliding sinker or Carolina-style presentation over sand.'], baits: ['Fresh anchovy or sardine', 'Pile worm', 'Live bait where legal'], lures: ['Lucky Craft FM 110', 'Hair raiser', 'Metal spoon', '3–5 in swimbait'], identification: 'Silver sides, two separated dorsal fins, and dark horizontal stripes.', releaseOrRegulation: 'CDFW currently lists an 18 in minimum and two-fish daily limit in the SF Bay region; verify before fishing.' },
  Halibut: { habitat: 'Sandy bottom beside pilings, channel edges, eelgrass, and harbor mouths.', seasonalPattern: 'Best spring through summer, with warm-water windows extending later in the year.', tideTrigger: 'Slow-to-moderate incoming tide; avoid the hardest current.', rigs: ['Carolina or sliding sinker with 12–20 lb leader.', 'Drop-shot with a 3–5 in swimbait or live-bait hook.'], baits: ['Live shiner', 'Anchovy', 'Sardine strip'], lures: ['3–5 in paddle-tail swimbait', 'Fluke-style soft plastic'], identification: 'Flatfish with both eyes on one side; California halibut have a large mouth and prominent teeth.', releaseOrRegulation: 'CDFW currently lists California halibut north of Point Sur at 22 in minimum and two-fish daily limit; verify current rules.' },
  Rockfish: { habitat: 'Rock piles, kelp edges, jetty pockets, and deeper structure.', seasonalPattern: 'Season and depth rules vary; accessible nearshore opportunities are often best spring through fall.', tideTrigger: 'Moving water covering structure without unsafe surge.', rigs: ['Light high-low with squid or shrimp flies where legal.', 'Single-hook swimbait or jig for selective rockfish.'], baits: ['Squid strip', 'Shrimp', 'Mussel or clam where legal'], lures: ['Small swimbait', 'Metal jig'], identification: 'Many species look alike; use a current CDFW identification guide before retention.', releaseOrRegulation: 'Rockfish/cabezon/greenling rules, depth seasons, aggregate limits, and species closures are dynamic; check CDFW every trip.' },
  Cabezon: { habitat: 'Rock crevices, jetty corners, tide pools, and kelp-covered structure.', seasonalPattern: 'Nearshore opportunity is strongest when structure is safely fishable.', tideTrigger: 'Flood tide washing food into rock pockets.', rigs: ['Short high-low or single-hook bottom rig.', 'Poke-pole presentation only from stable, legal footing.'], baits: ['Squid strip', 'Shrimp', 'Mussel where legal'], lures: ['Small swimbait tight to structure'], identification: 'Large blunt head, fleshy cirri, and mottled camouflage.', releaseOrRegulation: 'Cabezon is managed with groundfish rules; verify season, limit, and size requirements before retention.' },
  Lingcod: { habitat: 'Deep rock piles, jetty structure, and current-facing reef edges.', seasonalPattern: 'Seasonal and access-dependent; more realistic from substantial structure than open sand.', tideTrigger: 'Moving water around rock edges.', rigs: ['Heavy single-hook swimbait or jig; avoid snag-prone multi-hook rigs.', 'Poke-pole only where legal and safe.'], baits: ['Squid', 'Anchovy'], lures: ['5–8 in swimbait', 'Metal jig'], identification: 'Long body, large mouth, and prominent canine teeth.', releaseOrRegulation: 'Lingcod seasons, size, and depth rules vary; check current CDFW groundfish regulations.' },
  Greenling: { habitat: 'Shallow rocky intertidal pockets and kelp-covered rocks.', seasonalPattern: 'Nearshore opportunity follows safe low-swell access.', tideTrigger: 'Flooding water over crevices.', rigs: ['Small high-low or single-hook bait rig.', 'Poke-pole presentation from stable ground only.'], baits: ['Mussel', 'Shrimp', 'Squid'], identification: 'Small elongated rock fish with mottled coloration; identify carefully.', releaseOrRegulation: 'Kelp/rock greenling are included in changing groundfish rules; verify current CDFW limits.' },
  Jacksmelt: { habitat: 'Piers, harbor edges, bait schools, and current seams.', seasonalPattern: 'Often available year-round, with stronger surface activity during baitfish periods.', tideTrigger: 'Moving tide and visible bait.', rigs: ['Sabiki or small-hook high-low with light leader.', 'Small float rig when fish are suspended.'], baits: ['Small bits of shrimp or fish'], lures: ['Tiny metal or micro-jig'], identification: 'Slender silver fish with a pointed head and dark back.', releaseOrRegulation: 'Use legal hook and bait configurations; check pier and local posted rules.' },
  'White Croaker': { habitat: 'Sandy/muddy bay bottom around piers and urban structure.', seasonalPattern: 'Common in protected bay water; activity improves with warmer water and tide movement.', tideTrigger: 'Moving tide over bottom.', rigs: ['Small high-low bait rig with size 6–10 hooks.', 'Light fish-finder rig.'], baits: ['Squid', 'Shrimp', 'Anchovy'], identification: 'Small croaker with silvery sides and a faint dark lateral line.', releaseOrRegulation: 'Check current CDFW bay rules and consumption advisories for urban waters.' },
  'Leopard Shark': { habitat: 'Mudflats, channels, estuary mouths, and sandy bay bottom.', seasonalPattern: 'Commoner in warmer months and during bait/pregnancy aggregations, but presence varies.', tideTrigger: 'Flood tide pushing scent and bait across flats.', rigs: ['Fish-finder rig with 20–40 lb leader and appropriately sized circle hook.', 'Keep bait near bottom without excessive slack.'], baits: ['Squid', 'Anchovy', 'Sardine', 'Mackerel where legal'], identification: 'Distinctive dark saddle and spot pattern over a silvery body.', releaseOrRegulation: 'Shark limits and hook requirements change; use circle hooks where required and verify CDFW rules.' },
  'Bat Ray': { habitat: 'Mudflats, marina bottoms, channels, and pier shadow lines.', seasonalPattern: 'Warm-water and summer activity often improves in protected bay areas.', tideTrigger: 'Flood or ebb moving food over bottom.', rigs: ['Heavy fish-finder or high-low with abrasion-resistant leader.', 'Use a landing net or lip-safe handling plan.'], baits: ['Squid', 'Anchovy', 'Sardine'], identification: 'Broad diamond-shaped disc with a long tail.', releaseOrRegulation: 'Handle carefully and verify current bay regulations and local pier rules.' },
  'Smoothhound Shark': { habitat: 'Sandy bottom, channels, and protected marina water.', seasonalPattern: 'Warmer-water seasonal visitor; local abundance is variable.', tideTrigger: 'Moving tide along channel edges.', rigs: ['Fish-finder rig with circle hook and abrasion-resistant leader.'], baits: ['Squid', 'Anchovy', 'Shrimp'], identification: 'Small smooth-skinned shark with blunt head and low dorsal fins.', releaseOrRegulation: 'Verify current shark regulations and handle/release with care.' },
  Sturgeon: { habitat: 'Deep channels, river mouths, and brackish Bay/Delta edges.', seasonalPattern: 'Migration and regulations are highly seasonal and restrictive.', tideTrigger: 'Moving tide along deep channel edges.', rigs: ['Heavy sliding sinker rig only where legal.', 'Use gear appropriate to the current and avoid snagging.'], baits: ['Grass shrimp', 'Ghost shrimp where legal', 'Anchovy'], identification: 'Long body with bony scutes and a pointed snout.', releaseOrRegulation: 'Do not target retention without checking current CDFW rules; SF Bay sturgeon retention has been closed in recent regulations.' },
  'Flounder/Sole': { habitat: 'Sandy or muddy bottom, channel margins, and pier pilings.', seasonalPattern: 'Year-round possibility; warmer shallow water can improve activity.', tideTrigger: 'Flood tide moving food over bottom.', rigs: ['Small fish-finder or high-low rig.', 'Drop-shot near structure.'], baits: ['Squid', 'Shrimp', 'Anchovy'], identification: 'Flat-bodied bottom fish; identify species before retention.', releaseOrRegulation: '“Other flatfish” rules vary by species; verify identification and current CDFW limits.' },
  Salmon: { habitat: 'Bait-rich coastal water, harbor mouths, and seasonal migration lanes.', seasonalPattern: 'Highly seasonal and quota/closure dependent.', tideTrigger: 'Bait movement and manageable current.', rigs: ['Use only currently legal salmon gear and hook configuration.'], baits: ['Check current legal bait rules'], lures: ['Check current legal lure rules'], identification: 'Species identification is essential; salmon regulations are tightly controlled.', releaseOrRegulation: 'Salmon seasons, quotas, and ocean restrictions can close quickly; check CDFW/NOAA before targeting.' },
  'Dungeness Crab': { habitat: 'Sandy/muddy bottom near harbor channels and structure.', seasonalPattern: 'Seasonal fishery with annual opening, health, and area changes.', tideTrigger: 'Slack-to-moving tide; soak timing depends on current.', rigs: ['Legal crab snare or hoop net from an allowed location.'], baits: ['Fish carcass or approved bait'], identification: 'Purple-brown shell with white-tipped claws.', releaseOrRegulation: 'Verify season, size, sex, gear, marine protected areas, and CDPH health advisories.' },
  'Rock Crab': { habitat: 'Rocky jetty pockets and harbor structure.', seasonalPattern: 'Year-round possibility subject to local regulations.', tideTrigger: 'Flood tide covering structure.', rigs: ['Legal hoop net or hand line where permitted.', 'Avoid unsafe rock hopping.'], baits: ['Squid', 'Fish carcass'], identification: 'Broad crab with dark red/brown shell and robust claws.', releaseOrRegulation: 'Verify current crab size, sex, gear, and health rules.' }
};

function buildSpotIntel(spot: Spot): SpotIntel {
  const profiles = spot.species.map((species) => speciesProfiles[species]);
  const first = spot.species[0];
  return {
    waterRead: spot.biteReason,
    setup: spot.type === 'Surf' ? 'Read the beach before casting: locate the first safe trough, rip edge, bait, and clean water. Move after 15–20 quiet minutes.' : 'Start by identifying the current seam, depth change, pilings, and bait level. Fish the moving water, not necessarily the strongest water.',
    primaryRigs: Array.from(new Set(profiles.flatMap((p) => p.rigs))).slice(0, 5),
    baitPlan: Array.from(new Set(profiles.flatMap((p) => p.baits))).slice(0, 6),
    speciesNotes: spot.species.map((species) => ({ species, whyHere: speciesProfiles[species].habitat, plan: `${speciesProfiles[species].tideTrigger} ${speciesProfiles[species].rigs[0]}` })),
    legalChecklist: [spot.type === 'Pier' || spot.type === 'Jetty' || spot.type === 'Breakwater' ? 'Confirm this exact structure qualifies for license-free public-pier fishing; adjacent shore usually does not.' : 'Carry a valid California license for shore/beach fishing.', ...spot.species.filter((s) => ['Halibut', 'Striped Bass', 'Surfperch', 'Sturgeon', 'Salmon', 'Dungeness Crab', 'Rockfish', 'Cabezon', 'Lingcod'].includes(s)).map((s) => `${s}: check current CDFW season, size, bag, hook, and closure rules.`), 'Check current CDFW notices and posted local access rules before keeping fish.'],
    safetyChecklist: [spot.safety === 'Hazard' ? 'This is a go/no-go hazard location: leave if swell, surge, cliffs, or access are questionable.' : 'Keep a safe stance and never turn your back on the ocean.', spot.type === 'Surf' ? 'Watch sneaker waves, rip currents, and lateral sweep; do not wade beyond safe footing.' : 'Watch slippery surfaces, surge, current, and overhead/boat traffic.', 'Carry a phone, tell someone your plan, and fish with a retreat route.'],
    confidence: spot.accessStatus?.sourceUrl ? 'Owner-listed access' : first ? 'Multi-source guidance' : 'Field pattern'
  };
}

export function getSpotIntel(spot: Spot): SpotIntel {
  return spot.intel ?? buildSpotIntel(spot);
}

export const tideSeries = [
  { time: '04:00', height: 0.9, bite: 52 },
  { time: '06:00', height: 1.8, bite: 83 },
  { time: '08:00', height: 3.7, bite: 91 },
  { time: '10:00', height: 5.2, bite: 75 },
  { time: '12:00', height: 4.8, bite: 45 },
  { time: '14:00', height: 3.2, bite: 54 },
  { time: '16:00', height: 1.9, bite: 66 },
  { time: '18:00', height: 2.4, bite: 74 },
  { time: '20:00', height: 4.1, bite: 62 }
];

export const speciesMomentum = [
  { species: 'Surfperch', score: 88, trend: '+12%' },
  { species: 'Striped Bass', score: 78, trend: '+7%' },
  { species: 'Halibut', score: 66, trend: '+1%' },
  { species: 'Rockfish', score: 71, trend: '+8%' },
  { species: 'Leopard Shark', score: 61, trend: '+3%' },
  { species: 'Jacksmelt', score: 69, trend: '+4%' },
];

export const regions = [...new Set(spots.map((spot) => spot.region))].sort() as Region[];
export const allSpecies: Species[] = ['Surfperch', 'Striped Bass', 'Halibut', 'Rockfish', 'Cabezon', 'Lingcod', 'Greenling', 'Jacksmelt', 'White Croaker', 'Leopard Shark', 'Bat Ray', 'Smoothhound Shark', 'Sturgeon', 'Flounder/Sole', 'Salmon', 'Dungeness Crab', 'Rock Crab'];

export const dailyReport = {
  date: 'Today',
  headline: 'Flood tide is the money tide — surfperch early, stripers if the bait stacks up.',
  summary: 'Listen up, angler: the greater Bay is giving you a clean morning window before west wind roughs up the open coast. Peninsula beaches get first crack for perch, Golden Gate piers get striper/halibut shots around the tide turn, and East/South Bay mudflat piers are better saved for the warmer flood later in the day.',
  topPick: 'Linda Mar dawn flood',
  captainNote: 'Keep it mobile. If the first trough is dead after 20 minutes, move. The fish owe you nothing — make the boots do the work.'
};

export const researchSources = [
  { label: 'CDFW — California Beach Fishing: public piers, jetties, access caveats, and license guidance', url: 'https://wildlife.ca.gov/Fishing/Ocean/Beach-Fishing' },
  { label: 'CDFW — Current Ocean Recreational Fishing Regulations: San Francisco Bay region', url: 'https://wildlife.ca.gov/Fishing/Ocean/Regulations/Fishing-Map/SF-Bay' },
  { label: 'CDFW — Fishing for Striped Bass from shore and piers', url: 'https://wildlife.ca.gov/Fishing/Inland/Striped-Bass' },
  { label: 'NOAA Fisheries — California recreational rockfish information', url: 'https://www.fisheries.noaa.gov/west-coast/recreational-fishing/california-recreational-rockfish-information' }
];

// Freeze after every projection and internal working copy has been constructed.
// App consumers retain the same references, values, order, and IDs.
for (const publicData of [spots, speciesProfiles, tideSeries, speciesMomentum, regions, allSpecies, dailyReport, researchSources]) {
  deepFreeze(publicData);
}

export function safetyColor(safety: Safety) {
  if (safety === 'Green') return '#22c55e';
  if (safety === 'Caution') return '#f59e0b';
  return '#ef4444';
}

export function scoreColor(score: number) {
  if (score >= 80) return '#22c55e';
  if (score >= 65) return '#facc15';
  return '#fb7185';
}
