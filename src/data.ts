export type Region = 'SF Coast' | 'Peninsula' | 'Marin/North Bay' | 'East Bay' | 'South Bay' | 'Half Moon Bay' | 'Carquinez/Delta' | 'Sonoma Coast';
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

export interface Spot {
  id: string;
  name: string;
  region: Region;
  lat: number;
  lng: number;
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
  conditions: {
    tide: string;
    swell: string;
    wind: string;
    water: string;
  };
}

const baseSpots: Spot[] = [
  {
    id: 'ocean-beach',
    name: 'Ocean Beach',
    region: 'SF Coast',
    lat: 37.7597,
    lng: -122.5107,
    type: 'Surf',
    safety: 'Caution',
    score: 78,
    tideStation: 'San Francisco',
    bestWindow: '6:20–9:10 AM · incoming push',
    biteReason: 'Long troughs and soft morning wind favor perch early; stripers patrol cuts if bait shows. CDFW notes summer surf fishing off SF beaches can be excellent when anchovies pull bass close.',
    species: ['Surfperch', 'Striped Bass', 'Leopard Shark'],
    tactics: ['Carolina rig + camo Gulp sandworm', 'Lucky Craft 110 in metallic sardine', 'Walk until you find darker trough water', 'Avoid big NW swell / short-period sneaker days'],
    accessNote: 'License required from beach. Watch rip currents, sneaker waves, and heavy side sweep.',
    sourceNote: 'CDFW beach-fishing guidance: early/late, incoming high tide, mild-moderate surf; CDFW striped bass page names SF beaches for summer surf casting.',
    conditions: { tide: 'Flood 5:42 AM → high 10:58 AM', swell: '4.2 ft @ 11s NW', wind: 'W 7–11 kt', water: '55°F' }
  },
  {
    id: 'baker-beach',
    name: 'Baker Beach',
    region: 'SF Coast',
    lat: 37.7934,
    lng: -122.4830,
    type: 'Surf',
    safety: 'Caution',
    score: 68,
    tideStation: 'Golden Gate',
    bestWindow: '5:40–8:30 AM · dawn flood',
    biteReason: 'Best when swell is down and crab/bait movement is visible along the beach slope. Golden Gate current can make this feast-or-famine.',
    species: ['Surfperch', 'Striped Bass', 'Leopard Shark', 'Bat Ray'],
    tactics: ['Sandworm for perch', 'Chunk bait after dusk for sharks/rays', 'Work troughs closest to sandbars', 'Skip days with ripping lateral current'],
    accessNote: 'License required from beach. Strong current and surf; avoid swimming/wading deep.',
    sourceNote: 'Surf species/tide timing follows CDFW beach-fishing guidance; shark/ray presence is common SF Bay/surf structure pattern.',
    conditions: { tide: 'Flood morning', swell: '3.8 ft @ 10s', wind: 'W 8 kt', water: '55°F' }
  },
  {
    id: 'torpedo-wharf',
    name: 'Torpedo Wharf / Fort Point Pier',
    region: 'SF Coast',
    lat: 37.8081,
    lng: -122.4752,
    type: 'Pier',
    safety: 'Green',
    score: 73,
    tideStation: 'Golden Gate',
    bestWindow: 'Slack-to-moving tide · sunrise or sunset',
    biteReason: 'Golden Gate current, rocky edges, bait, and depth give this pier real striper/halibut upside when water movement is not ripping too hard.',
    species: ['Striped Bass', 'Halibut', 'Rockfish', 'Jacksmelt', 'Leopard Shark', 'Bat Ray'],
    tactics: ['Swimbait or hair raiser on current seams', 'Live shiner/anchovy for halibut', 'Sabiki for smelt/bait', 'Fish the tide turn, not max current'],
    accessNote: 'CDFW-listed public pier: no license required on the pier, but size/bag/season rules still apply.',
    sourceNote: 'CDFW lists Torpedo Wharf as a San Francisco public pier; pierfishing.com notes stripers and halibut most years.',
    conditions: { tide: 'Fast Gate exchange; favor tide turns', swell: 'Protected but current-heavy', wind: 'W 10 kt', water: '55°F' }
  },
  {
    id: 'pier-7',
    name: 'Pier 7 — Embarcadero',
    region: 'SF Coast',
    lat: 37.7987,
    lng: -122.3960,
    type: 'Pier',
    safety: 'Green',
    score: 57,
    tideStation: 'San Francisco',
    bestWindow: 'Evening flood · low wind',
    biteReason: 'Urban pier with steady small fish and shark/ray potential. Better as a quick-access city option than a trophy hunt.',
    species: ['Jacksmelt', 'Surfperch', 'Leopard Shark', 'Bat Ray', 'Rockfish', 'Flounder/Sole'],
    tactics: ['Sabiki or size 8 hooks for smelt/perch', 'Squid/anchovy bottom rig for sharks/rays', 'Keep a pier net handy'],
    accessNote: 'CDFW-listed public pier: no license required on the pier. Check current access/closures.',
    sourceNote: 'CDFW public pier list includes Pier 7; pierfishing.com describes jacksmelt, sharks/rays, blue rockfish, shinerperch.',
    conditions: { tide: 'Flood/ebb both fishable', swell: 'Protected bay', wind: 'W 8–13 kt', water: '58°F' }
  },
  {
    id: 'pier-14',
    name: 'Pier 14 — Embarcadero',
    region: 'SF Coast',
    lat: 37.7934,
    lng: -122.3891,
    type: 'Pier',
    safety: 'Green',
    score: 60,
    tideStation: 'San Francisco',
    bestWindow: 'Evening moving tide',
    biteReason: 'Deeper city-water access with a shot at sharks/rays, perch, smelt, and occasional striper/halibut when bait pushes along the waterfront.',
    species: ['Jacksmelt', 'Surfperch', 'Striped Bass', 'Halibut', 'Leopard Shark', 'Bat Ray', 'Flounder/Sole'],
    tactics: ['Live bait or swimbait for halibut/striper', 'Hi-low bait rig for perch/smelt', 'Squid chunks on bottom for rays/sharks'],
    accessNote: 'CDFW-listed public pier: no license required on the pier. Urban wind can be stiff.',
    sourceNote: 'CDFW public pier list includes Pier 14; SF Bay CDFW regs list halibut, striper, leopard shark, surfperch and other species as district fisheries.',
    conditions: { tide: 'Moving tide preferred', swell: 'Protected bay', wind: 'W 10 kt', water: '58°F' }
  },
  {
    id: 'candlestick',
    name: 'Candlestick Point / Pier',
    region: 'SF Coast',
    lat: 37.7130,
    lng: -122.3860,
    type: 'Pier',
    safety: 'Green',
    score: 66,
    tideStation: 'Hunters Point',
    bestWindow: 'South Bay flood · spring/summer',
    biteReason: 'CDFW specifically calls the Candlestick area a favored South SF Bay shore-angling area for stripers during spring/summer.',
    species: ['Striped Bass', 'Halibut', 'Leopard Shark', 'Bat Ray', 'Jacksmelt', 'Flounder/Sole'],
    tactics: ['Swimbaits along current seams', 'Anchovy/pile worm bottom rig', 'Fish windy points carefully'],
    accessNote: 'CDFW-listed public pier area. Check park hours and shoreline access.',
    sourceNote: 'CDFW striped bass page names south SF Bay around Candlestick Park for shore angling; CDFW lists Candlestick Fishing Pier.',
    conditions: { tide: 'Flood best', swell: 'Protected bay chop', wind: 'W/NW 12 kt', water: '60°F' }
  },
  {
    id: 'linda-mar',
    name: 'Linda Mar / Pacifica State Beach',
    region: 'Peninsula',
    lat: 37.5946,
    lng: -122.5036,
    type: 'Surf',
    safety: 'Green',
    score: 82,
    tideStation: 'Half Moon Bay',
    bestWindow: '5:50–8:45 AM · dawn flood',
    biteReason: 'Gentler beach shape makes this the cleanest surfperch play; creek-mouth edges can hold schoolie stripers and occasional halibut on calm summer sand.',
    species: ['Surfperch', 'Striped Bass', 'Halibut'],
    tactics: ['Light Carolina rig 1 oz', 'Sand crabs if you can dig them', 'Swimbait slow-roll on flat sandy lanes', 'Walk the beach until you find crab shells/bird life'],
    accessNote: 'License required from beach. Safer than high-energy cliff beaches, but still respect surf.',
    sourceNote: 'CDFW beach-fishing guidance supports incoming tide/early morning; Pacifica coast is called out by CDFW as a popular striped bass/surf location.',
    conditions: { tide: 'Low 4:58 AM → high 11:21 AM', swell: '3.0 ft @ 12s', wind: 'Calm then W 8 kt', water: '56°F' }
  },
  {
    id: 'pacifica-pier',
    name: 'Pacifica Pier',
    region: 'Peninsula',
    lat: 37.6334,
    lng: -122.4938,
    type: 'Pier',
    safety: 'Caution',
    score: 71,
    tideStation: 'San Francisco',
    bestWindow: '7:00–10:30 AM · high tide approach',
    biteReason: 'Historically a high-species pier: perch/smelt/kingfish for steady action, plus striper and salmon flashes when bait stacks. CDFW currently flags Pacifica Pier as closed, so verify before going.',
    species: ['Surfperch', 'Striped Bass', 'Jacksmelt', 'White Croaker', 'Salmon', 'Dungeness Crab', 'Leopard Shark'],
    tactics: ['Hi-lo rig size 6 hooks', 'Pile worm/shrimp strips', 'Crab snares only when legal/open', 'Watch closure status before planning'],
    accessNote: 'CDFW lists Pacifica Pier but marks it currently closed. No-license pier rules apply only when legally open and fishing from pier.',
    sourceNote: 'CDFW public pier list marks Pacifica Pier currently closed; pierfishing.com reports surfperch, jacksmelt, kingfish/white croaker and occasional striped bass.',
    conditions: { tide: 'Flood through late morning', swell: '3.5 ft @ 10s', wind: 'SW 6 kt', water: '56°F' }
  },
  {
    id: 'mussel-rock',
    name: 'Mussel Rock / Thornton',
    region: 'Peninsula',
    lat: 37.6697,
    lng: -122.4949,
    type: 'Surf',
    safety: 'Hazard',
    score: 63,
    tideStation: 'San Francisco',
    bestWindow: 'Only if swell drops · first outgoing',
    biteReason: 'Deep structure draws big fish, but cliffs and sneaker sets demand respect. Scout before committing. This is productive water with ugly consequences if you get casual.',
    species: ['Striped Bass', 'Surfperch', 'Rockfish', 'Leopard Shark'],
    tactics: ['Heavy pyramid sinker fish-finder', 'Fresh anchovy or sardine', 'Do not stand below active cliffs', 'Leave if swell wraps around rocks'],
    accessNote: 'License required. High cliff and surf hazard. Never stand under unstable bluffs.',
    sourceNote: 'Local pattern based on structure and Bay Area surf tactics; safety warning aligns with known Daly City cliff/swell risk.',
    conditions: { tide: 'High 10:58 AM then ebb', swell: '4.5 ft @ 11s', wind: 'W 10 kt', water: '55°F' }
  },
  {
    id: 'pillar-point',
    name: 'Pillar Point Jetty / HMB Harbor',
    region: 'Half Moon Bay',
    lat: 37.5025,
    lng: -122.4853,
    type: 'Jetty',
    safety: 'Caution',
    score: 76,
    tideStation: 'Half Moon Bay',
    bestWindow: '8:00–11:15 AM · flood over rocks',
    biteReason: 'Rock pockets wake up as water covers structure; good for rockfish/cabezon/greenling when swell is manageable. CDFW lists HMB east/west jetties and Pillar Point Harbor Fishing Pier.',
    species: ['Rockfish', 'Cabezon', 'Greenling', 'Lingcod', 'Surfperch', 'Rock Crab', 'Dungeness Crab'],
    tactics: ['Poke pole mussel strips', 'High-low with squid', 'Swimbait or shrimp fly near rock pockets', 'Keep one eye on surge channels'],
    accessNote: 'Some jetty/breakwater sections may qualify as public pier structures, but verify exact legal boundary. Rocks are slippery.',
    sourceNote: 'CDFW lists Halfmoon Bay East/West Jetties and Pillar Point Harbor Fishing Pier; SF Bay regs list groundfish families including rockfish/cabezon/greenling/lingcod.',
    conditions: { tide: 'Flood into late morning', swell: '3.2 ft @ 13s', wind: 'NW 9 kt', water: '55°F' }
  },
  {
    id: 'oyster-point',
    name: 'Oyster Point Pier / Marina',
    region: 'Peninsula',
    lat: 37.6622,
    lng: -122.3768,
    type: 'Pier',
    safety: 'Green',
    score: 62,
    tideStation: 'Oyster Point',
    bestWindow: 'Evening flood · warmer water',
    biteReason: 'South Bay marina structure and flats make this a steady shark/ray/smelt pier with striper windows when bait and current line up.',
    species: ['Jacksmelt', 'Leopard Shark', 'Smoothhound Shark', 'Bat Ray', 'Striped Bass', 'Halibut', 'Flounder/Sole'],
    tactics: ['Sabiki or small hooks for smelt', 'Squid/anchovy bottom rig for sharks/rays', 'Swimbait edges for striper/halibut'],
    accessNote: 'CDFW-listed public pier: no license required on the pier. Check access/parking status.',
    sourceNote: 'CDFW lists Oyster Point Pier; pierfishing.com reports jacksmelt, sharays/smoothhound-bat ray-leopard shark, and some striped bass.',
    conditions: { tide: 'Evening incoming', swell: 'Protected bay', wind: 'NW 10 kt', water: '60°F' }
  },
  {
    id: 'coyote-point',
    name: 'Coyote Point Jetty / Shore',
    region: 'South Bay',
    lat: 37.5894,
    lng: -122.3194,
    type: 'Jetty',
    safety: 'Green',
    score: 64,
    tideStation: 'San Mateo Bridge',
    bestWindow: '2 hrs before high',
    biteReason: 'Halibut and stripers use the flats when tide pushes bait across warmer South Bay shallows. Sharks/rays are common bottom-game options.',
    species: ['Halibut', 'Striped Bass', 'Leopard Shark', 'Bat Ray', 'Jacksmelt', 'Flounder/Sole'],
    tactics: ['Swimbait bounced slow', 'Live shiner if available', 'Fish wind-protected sides of points', 'Squid/anchovy bottom rig for sharks/rays'],
    accessNote: 'CDFW-listed public jetty. Park rules/fees may apply.',
    sourceNote: 'CDFW lists Coyote Point Jetty; CDFW striped bass page notes South SF Bay shore angling can be good spring/summer.',
    conditions: { tide: 'Midday flood', swell: 'Protected bay', wind: 'NW 9 kt', water: '61°F' }
  },
  {
    id: 'redwood-city-pier',
    name: 'Redwood City Pier',
    region: 'South Bay',
    lat: 37.5080,
    lng: -122.2110,
    type: 'Pier',
    safety: 'Green',
    score: 58,
    tideStation: 'Redwood City',
    bestWindow: 'Last half of flood',
    biteReason: 'Slough/mudflat water with shark/ray and flatfish potential; warmer shallow water can wake up stripers and halibut.',
    species: ['Leopard Shark', 'Bat Ray', 'Smoothhound Shark', 'Striped Bass', 'Halibut', 'Flounder/Sole', 'Jacksmelt'],
    tactics: ['Ghost shrimp or anchovy bottom rig', 'Fish channel edges', 'Use enough weight for tidal flow'],
    accessNote: 'CDFW-listed public pier. Mudflat currents and wind matter more than ocean swell.',
    sourceNote: 'CDFW lists Redwood City Pier; SF Bay regs cover leopard shark, flatfish, halibut, striped bass and other bay species.',
    conditions: { tide: 'Flood over flats', swell: 'Protected slough', wind: 'NW 8 kt', water: '62°F' }
  },
  {
    id: 'dumbarton-pier',
    name: 'Dumbarton Pier',
    region: 'South Bay',
    lat: 37.5054,
    lng: -122.1145,
    type: 'Pier',
    safety: 'Green',
    score: 60,
    tideStation: 'Dumbarton Bridge',
    bestWindow: 'Incoming tide over mudflats',
    biteReason: 'Classic South Bay mudflat pier: sharks, rays, stripers, flounder/sole and occasional halibut when bait gets pushed along channels.',
    species: ['Leopard Shark', 'Bat Ray', 'Smoothhound Shark', 'Striped Bass', 'Halibut', 'Flounder/Sole', 'Sturgeon'],
    tactics: ['Ghost shrimp/grass shrimp', 'Anchovy chunks', 'Long soak on fish-finder rig', 'Check sturgeon status before targeting'],
    accessNote: 'CDFW-listed public pier. Sturgeon retention currently closed in SF Bay regs — treat as catch/avoid unless rules change.',
    sourceNote: 'CDFW lists Dumbarton Pier; SF Bay regs list bay shark/halibut/striper species and closed sturgeon status.',
    conditions: { tide: 'Incoming over flats', swell: 'Protected bay', wind: 'NW 10 kt', water: '62°F' }
  },
  {
    id: 'berkeley-pier',
    name: 'Berkeley Pier / Marina Shore',
    region: 'East Bay',
    lat: 37.8637,
    lng: -122.3152,
    type: 'Marina',
    safety: 'Green',
    score: 61,
    tideStation: 'Berkeley',
    bestWindow: 'Evening incoming',
    biteReason: 'Bay current seams are the play. CDFW names Berkeley Pier and Ashby shoreline as favored striper bank-fishing locations; pier reports show broad species variety.',
    species: ['Striped Bass', 'Halibut', 'Jacksmelt', 'Surfperch', 'Leopard Shark', 'Bat Ray', 'Flounder/Sole', 'Rockfish'],
    tactics: ['Hair raiser / swimbait near current seams', 'Live bait for halibut on sandy edges', 'Small sabiki for bait/jacksmelt', 'Bottom rig for sharks/rays'],
    accessNote: 'Check current Berkeley Pier access; nearby marina shoreline still useful. License may be required off non-pier shoreline.',
    sourceNote: 'CDFW striped bass page names Berkeley Fishing Pier and Ashby shoreline; pierfishing.com thread lists many Berkeley species including surfperch, bat ray, skates, rockfish.',
    conditions: { tide: 'Evening flood', swell: 'Protected bay', wind: 'W 12 kt', water: '59°F' }
  },
  {
    id: 'alameda-rock-wall',
    name: 'Alameda Rock Wall',
    region: 'East Bay',
    lat: 37.7704,
    lng: -122.3066,
    type: 'Breakwater',
    safety: 'Caution',
    score: 72,
    tideStation: 'Alameda',
    bestWindow: 'Moving tide · dawn/evening',
    biteReason: 'Rock wall plus bay current equals one of the better East Bay shore plays for halibut/striper, with sharks/rays and perch/smelt around.',
    species: ['Halibut', 'Striped Bass', 'Leopard Shark', 'Bat Ray', 'Jacksmelt', 'Surfperch', 'Flounder/Sole'],
    tactics: ['Swimbaits and jerkbaits along rock edges', 'Live bait for halibut', 'Squid/anchovy bottom rig', 'Wear good shoes on rocks'],
    accessNote: 'CDFW-listed Alameda Rock Wall. Verify where public-pier/no-license rules apply vs adjacent shoreline.',
    sourceNote: 'CDFW lists Alameda Rock Wall; SF Bay regs list halibut, striper, leopard shark, surfperch and flatfish fisheries.',
    conditions: { tide: 'Both tide turns fish', swell: 'Protected bay', wind: 'W 11 kt', water: '59°F' }
  },
  {
    id: 'emeryville-marina',
    name: 'Emeryville Marina Pier',
    region: 'East Bay',
    lat: 37.8429,
    lng: -122.3101,
    type: 'Pier',
    safety: 'Green',
    score: 55,
    tideStation: 'Berkeley',
    bestWindow: 'Afternoon/evening flood',
    biteReason: 'Good access and protected water. Better for smelt/perch/sharks/rays than trophy hunting, but stripers cruise when bait is pinned to the rocks.',
    species: ['Jacksmelt', 'Surfperch', 'Striped Bass', 'Leopard Shark', 'Bat Ray', 'Flounder/Sole'],
    tactics: ['Sabiki/small bait for smelt', 'Anchovy bottom rig', 'Cast swimbaits along riprap/current edges'],
    accessNote: 'CDFW-listed public pier. Wind exposure can be annoying.',
    sourceNote: 'CDFW lists Emeryville Marina Pier; SF Bay regs cover common bay shore species.',
    conditions: { tide: 'Flood preferred', swell: 'Protected bay', wind: 'W 13 kt', water: '59°F' }
  },
  {
    id: 'san-leandro-marina',
    name: 'San Leandro Marina Pier',
    region: 'East Bay',
    lat: 37.6956,
    lng: -122.1919,
    type: 'Pier',
    safety: 'Green',
    score: 54,
    tideStation: 'San Leandro Marina',
    bestWindow: 'Incoming tide',
    biteReason: 'Protected East Bay pier with mudflat/channel species: sharks, rays, smelt, stripers and flatfish windows.',
    species: ['Leopard Shark', 'Bat Ray', 'Jacksmelt', 'Striped Bass', 'Flounder/Sole', 'Halibut'],
    tactics: ['Ghost shrimp/anchovy bottom rig', 'Small hooks for smelt', 'Fish channel edges on the flood'],
    accessNote: 'CDFW-listed public pier. Check local marina access and construction status.',
    sourceNote: 'CDFW lists San Leandro Marina Pier; SF Bay regs list leopard shark, striped bass, halibut and flatfish as district species.',
    conditions: { tide: 'Flood over flats', swell: 'Protected bay', wind: 'W 10 kt', water: '61°F' }
  },
  {
    id: 'point-pinole',
    name: 'Point Pinole Pier',
    region: 'East Bay',
    lat: 38.0058,
    lng: -122.3623,
    type: 'Pier',
    safety: 'Green',
    score: 67,
    tideStation: 'Point Pinole',
    bestWindow: 'Moving tide · herring/bait periods',
    biteReason: 'North Bay current and bait lanes make this a serious striper/shark/ray pier with seasonal sturgeon history — but rules matter.',
    species: ['Striped Bass', 'Leopard Shark', 'Bat Ray', 'Sturgeon', 'Jacksmelt', 'Flounder/Sole'],
    tactics: ['Anchovy/pile worm for stripers', 'Grass shrimp/ghost shrimp for bay bottom game', 'Fish current breaks, not dead slack'],
    accessNote: 'CDFW-listed public pier. Sturgeon retention currently closed in SF Bay regs — check rules before targeting.',
    sourceNote: 'CDFW lists Pt. Pinole Pier; SF Bay regs identify striper, leopard shark, flatfish and closed sturgeon status.',
    conditions: { tide: 'Moving tide best', swell: 'San Pablo Bay chop', wind: 'SW 10 kt', water: '60°F' }
  },
  {
    id: 'china-camp',
    name: 'China Camp Shoreline',
    region: 'Marin/North Bay',
    lat: 38.0017,
    lng: -122.4620,
    type: 'Bay Shore',
    safety: 'Green',
    score: 59,
    tideStation: 'San Rafael',
    bestWindow: 'Last 2 hrs incoming',
    biteReason: 'Mudflat channels move bait on the flood; better for leopard sharks, rays and occasional stripers than surf species.',
    species: ['Leopard Shark', 'Bat Ray', 'Striped Bass', 'Sturgeon', 'Flounder/Sole'],
    tactics: ['Fish-finder rig', 'Ghost shrimp / grass shrimp', 'Target channel edges, not dead flats', 'Check sturgeon closure before targeting'],
    accessNote: 'License required from shoreline. Park rules apply.',
    sourceNote: 'Species based on San Pablo/SF Bay fisheries listed by CDFW; nearby official public-pier options exist at McNears/Paradise/Elephant Rock.',
    conditions: { tide: 'Flood afternoon', swell: 'Bay chop only', wind: 'SW 10 kt', water: '60°F' }
  },
  {
    id: 'fort-baker',
    name: 'Fort Baker Pier / Jetty',
    region: 'Marin/North Bay',
    lat: 37.8312,
    lng: -122.4787,
    type: 'Pier',
    safety: 'Green',
    score: 70,
    tideStation: 'Golden Gate',
    bestWindow: 'Gate tide turn',
    biteReason: 'Golden Gate-adjacent structure with striper/halibut upside and smelt/perch/shark/ray options when the current behaves.',
    species: ['Striped Bass', 'Halibut', 'Jacksmelt', 'Surfperch', 'Leopard Shark', 'Bat Ray', 'Rockfish'],
    tactics: ['Fish tide changes', 'Swimbait/hair raiser along rocks', 'Live bait for halibut', 'Sabiki for smelt'],
    accessNote: 'CDFW lists Fort Baker Pier and Fort Baker Jetty. Verify exact open areas.',
    sourceNote: 'CDFW public pier list includes Fort Baker Pier/Jetty; CDFW striped bass page names Golden Gate/south tower bay areas for summer/fall striper concentrations.',
    conditions: { tide: 'Tide turn only if current ripping', swell: 'Gate chop', wind: 'W 12 kt', water: '56°F' }
  },
  {
    id: 'paradise-beach',
    name: 'Paradise Beach Pier',
    region: 'Marin/North Bay',
    lat: 37.9171,
    lng: -122.4764,
    type: 'Pier',
    safety: 'Green',
    score: 63,
    tideStation: 'Tiburon',
    bestWindow: 'Incoming tide into evening',
    biteReason: 'Protected North Bay pier with a real shot at halibut/stripers, plus sharks/rays and smelt/perch for steady action.',
    species: ['Striped Bass', 'Halibut', 'Leopard Shark', 'Bat Ray', 'Jacksmelt', 'Surfperch', 'Flounder/Sole'],
    tactics: ['Live bait or swimbait for halibut', 'Anchovy/pile worm for stripers', 'Bottom rig for sharks/rays'],
    accessNote: 'CDFW-listed public pier; park access/fees may apply.',
    sourceNote: 'CDFW lists Paradise Beach County Park Pier; SF Bay regs cover target bay species.',
    conditions: { tide: 'Incoming/evening', swell: 'Protected bay', wind: 'SW 8 kt', water: '59°F' }
  },
  {
    id: 'mcnears-beach',
    name: 'McNears Beach Pier',
    region: 'Marin/North Bay',
    lat: 37.9961,
    lng: -122.4482,
    type: 'Pier',
    safety: 'Green',
    score: 65,
    tideStation: 'San Rafael',
    bestWindow: 'Moving tide · late flood',
    biteReason: 'San Pablo Bay influence gives stripers, halibut, smelt and shark/ray action, with sturgeon history under changing rules.',
    species: ['Striped Bass', 'Halibut', 'Jacksmelt', 'Leopard Shark', 'Bat Ray', 'Sturgeon'],
    tactics: ['Anchovy/pile worm for stripers', 'Live bait for halibut', 'Ghost shrimp if legally available', 'Check sturgeon closure'],
    accessNote: 'CDFW-listed public pier; county park rules/fees may apply.',
    sourceNote: 'CDFW lists McNears Beach County Park Pier; pierfishing reports mention stripers, halibut, jacksmelt, sharays and occasional sturgeon.',
    conditions: { tide: 'Late flood', swell: 'San Pablo Bay chop', wind: 'SW 10 kt', water: '60°F' }
  },
  {
    id: 'bodega-jetty',
    name: 'Bodega Bay Jetties / Spud Point Pier',
    region: 'Sonoma Coast',
    lat: 38.3275,
    lng: -123.0490,
    type: 'Jetty',
    safety: 'Hazard',
    score: 74,
    tideStation: 'Bodega Harbor',
    bestWindow: 'Small swell · flood over rocks',
    biteReason: 'North-coast rock and harbor structure opens a bigger groundfish/crab menu than inner Bay spots, but the ocean side gets dangerous fast.',
    species: ['Rockfish', 'Cabezon', 'Greenling', 'Lingcod', 'Surfperch', 'Dungeness Crab', 'Rock Crab'],
    tactics: ['Poke pole/rock bait near pockets', 'Shrimp flies/squid hi-low', 'Crab snares only in legal season', 'Avoid ocean side during swell'],
    accessNote: 'CDFW lists Bodega Bay South Jetty, North Jetty note, and Spud Point Public Pier. Rocks/surge are serious.',
    sourceNote: 'CDFW public pier list includes Bodega Bay jetties and Spud Point; SF management regs list groundfish families and crab statuses.',
    conditions: { tide: 'Flood over structure', swell: '4 ft @ 12s ocean side', wind: 'NW 11 kt', water: '54°F' }
  },
  {
    id: 'martinez-marina',
    name: 'Martinez Marina Pier',
    region: 'Carquinez/Delta',
    lat: 38.0194,
    lng: -122.1371,
    type: 'Pier',
    safety: 'Green',
    score: 62,
    tideStation: 'Martinez-Amorco Pier',
    bestWindow: 'Moving tide · spring/fall striper push',
    biteReason: 'Carquinez/Delta edge water: stripers and shark/ray-style bottom action, with historic sturgeon context — but current sturgeon rules are restrictive.',
    species: ['Striped Bass', 'Sturgeon', 'Leopard Shark', 'Bat Ray', 'Flounder/Sole', 'Jacksmelt'],
    tactics: ['Pile worms/anchovy for stripers', 'Ghost shrimp-style bottom presentations where legal', 'Fish current seams', 'Check sturgeon closure'],
    accessNote: 'CDFW-listed public pier. Carquinez current can be strong.',
    sourceNote: 'CDFW lists Martinez Marina Pier; CDFW striped bass page describes seasonal movement toward Suisun/Delta and Bay/Delta shore opportunities.',
    conditions: { tide: 'Moving tide', swell: 'Inland strait', wind: 'W 12 kt', water: '61°F' }
  },
  {
    id: 'benicia-pier',
    name: 'Benicia Point / 9th Street Pier',
    region: 'Carquinez/Delta',
    lat: 38.0460,
    lng: -122.1586,
    type: 'Pier',
    safety: 'Green',
    score: 64,
    tideStation: 'Benicia',
    bestWindow: 'Strong but fishable current · tide changes',
    biteReason: 'Classic strait current. Good for stripers and seasonal migration lanes; sturgeon history exists but regulations must be checked hard.',
    species: ['Striped Bass', 'Sturgeon', 'Flounder/Sole', 'Jacksmelt', 'Bat Ray'],
    tactics: ['Bait near bottom with enough lead', 'Adjust weight to current', 'Fish tide changes', 'Use larger hooks to reduce undersized striper swallowing'],
    accessNote: 'CDFW lists Benicia Point Fishing Pier and 9th Street Pier. Check sturgeon closure and local access.',
    sourceNote: 'CDFW public pier list includes Benicia piers; CDFW striped bass page emphasizes current/sinker adjustment and seasonal Delta/Bay movement.',
    conditions: { tide: 'Tide changes best', swell: 'Inland strait', wind: 'W 10 kt', water: '61°F' }
  }
];


const expandedSpots: Spot[] = [
  ...baseSpots,
  {
    id: 'islais-creek-pier', name: 'Islais Creek Pier', region: 'SF Coast', lat: 37.7462, lng: -122.3858, type: 'Pier', safety: 'Green', score: 52, tideStation: 'Hunters Point', bestWindow: 'Flood over channel edges', biteReason: 'Urban channel pier with protected water, small fish action, sharks/rays, and occasional striper when bait moves through the industrial shoreline.', species: ['Jacksmelt','Surfperch','Striped Bass','Leopard Shark','Bat Ray','Flounder/Sole'], tactics: ['Small hooks or sabiki for smelt','Anchovy/squid bottom rig','Cast swimbaits along channel edges'], accessNote: 'CDFW-listed public pier. Urban shoreline; verify access and parking.', sourceNote: 'CDFW lists Islais Creek Pier as a San Francisco public pier; SF Bay regs cover listed bay species.', conditions: { tide: 'Flood preferred', swell: 'Protected channel', wind: 'W 10 kt', water: '59°F' }
  },
  {
    id: 'agua-vista-pier', name: 'Agua Vista Pier', region: 'SF Coast', lat: 37.7673, lng: -122.3868, type: 'Pier', safety: 'Green', score: 50, tideStation: 'San Francisco', bestWindow: 'Evening incoming', biteReason: 'Mission Bay urban pier with protected water and small-species reliability; better for quick sessions than trophies.', species: ['Jacksmelt','Surfperch','Leopard Shark','Bat Ray','Flounder/Sole','Striped Bass'], tactics: ['Sabiki/small bait','Bottom rig with squid','Light swimbait near pilings'], accessNote: 'CDFW-listed public pier. Check city access/posted rules.', sourceNote: 'CDFW lists Agua Vista Pier; SF Bay district species/regulations apply.', conditions: { tide: 'Moving tide', swell: 'Protected bay', wind: 'W 9 kt', water: '59°F' }
  },
  {
    id: 'south-beach-harbor-pier', name: 'South Beach Harbor Pier', region: 'SF Coast', lat: 37.7829, lng: -122.3881, type: 'Pier', safety: 'Green', score: 53, tideStation: 'San Francisco', bestWindow: 'Slack-to-flood near dusk', biteReason: 'Harbor edge structure holds smelt/perch; stripers and halibut are possible when bait hugs the waterfront.', species: ['Jacksmelt','Surfperch','Halibut','Striped Bass','Bat Ray','Leopard Shark'], tactics: ['Small bait rigs','Live bait/swimbait for halibut','Fish shadow lines and pilings'], accessNote: 'CDFW-listed public pier; verify exact fishing area.', sourceNote: 'CDFW lists South Beach Harbor Pier; SF Bay species list supports halibut/striper/shark/perch possibilities.', conditions: { tide: 'Slack-to-flood', swell: 'Protected harbor', wind: 'W 10 kt', water: '58°F' }
  },
  {
    id: 'pier-45', name: 'Pier 45 / Fisherman’s Wharf', region: 'SF Coast', lat: 37.8094, lng: -122.4150, type: 'Pier', safety: 'Green', score: 51, tideStation: 'San Francisco', bestWindow: 'Early morning before crowds/wind', biteReason: 'Touristy but fishable public pier zone with smelt/perch and shark/ray bottom options; occasional striper near bait.', species: ['Jacksmelt','Surfperch','White Croaker','Leopard Shark','Bat Ray','Striped Bass'], tactics: ['Small hooks for smelt/perch','Squid/anchovy bottom rig','Fish early before boat traffic'], accessNote: 'CDFW-listed public pier. Check posted areas, crowds, and current closure status.', sourceNote: 'CDFW lists Pier 45; SF Bay regs and common pier species inform species set.', conditions: { tide: 'Morning moving tide', swell: 'Protected wharf', wind: 'W 11 kt', water: '57°F' }
  },
  {
    id: 'fort-mason-piers', name: 'Fort Mason Piers 2/3', region: 'SF Coast', lat: 37.8061, lng: -122.4305, type: 'Pier', safety: 'Green', score: 58, tideStation: 'San Francisco', bestWindow: 'Gate tide turn / evening', biteReason: 'North waterfront depth and current give smelt/perch action plus striper/halibut possibility when bait runs along the wall.', species: ['Jacksmelt','Surfperch','Striped Bass','Halibut','Rockfish','Leopard Shark','Bat Ray'], tactics: ['Sabiki/small bait for smelt','Swimbait at current seams','Bottom bait for sharks/rays'], accessNote: 'CDFW-listed public piers. Verify open areas around Fort Mason.', sourceNote: 'CDFW lists Fort Mason Pier 2 and Pier 3; SF Bay species list applies.', conditions: { tide: 'Tide turn best', swell: 'Protected bay chop', wind: 'W 12 kt', water: '56°F' }
  },
  {
    id: 'st-francis-jetty', name: 'Saint Francis Jetty / Marina Green', region: 'SF Coast', lat: 37.8079, lng: -122.4471, type: 'Jetty', safety: 'Caution', score: 65, tideStation: 'Golden Gate', bestWindow: 'Dawn/evening tide turn', biteReason: 'Current, rocks, and bait movement make this a legit city striper/halibut lane with perch/smelt around structure.', species: ['Striped Bass','Halibut','Jacksmelt','Surfperch','Rockfish','Bat Ray'], tactics: ['Jerkbait/swimbait along rocks','Live bait for halibut','Fish tide turns, avoid max rip'], accessNote: 'CDFW-listed public jetty. Slippery rocks and strong current.', sourceNote: 'CDFW lists Saint Francis Jetty; CDFW striped bass guidance supports Golden Gate/SF Bay current areas.', conditions: { tide: 'Gate tide turn', swell: 'Bay chop/current', wind: 'W 13 kt', water: '56°F' }
  },
  {
    id: 'crissy-field', name: 'Crissy Field Shoreline', region: 'SF Coast', lat: 37.8049, lng: -122.4650, type: 'Bay Shore', safety: 'Green', score: 69, tideStation: 'Golden Gate', bestWindow: 'Flood tide over flats', biteReason: 'Sandy bay flats and Golden Gate bait movement make Crissy a classic shore shot for halibut and stripers.', species: ['Halibut','Striped Bass','Surfperch','Leopard Shark','Bat Ray'], tactics: ['Swimbait fan-cast across flats','Live bait where legal','Fish the flood, cover ground'], accessNote: 'License required from shore. Watch windsurfers/kites and protected areas.', sourceNote: 'Local shore pattern plus CDFW Golden Gate/SF Bay striper and halibut species references.', conditions: { tide: 'Flood over flats', swell: 'Protected bay', wind: 'W 12 kt', water: '56°F' }
  },
  {
    id: 'china-beach', name: 'China Beach', region: 'SF Coast', lat: 37.7883, lng: -122.4903, type: 'Surf', safety: 'Caution', score: 57, tideStation: 'Golden Gate', bestWindow: 'Small swell incoming', biteReason: 'Pocket beach with perch/striper potential on calm conditions; current and rocks make it selective.', species: ['Surfperch','Striped Bass','Leopard Shark'], tactics: ['Light Carolina rig','Cast small plugs on calm edges','Avoid big swell/high surge'], accessNote: 'License required. Small beach with surge/rocks; verify park access.', sourceNote: 'Species/tide behavior inferred from SF beach surf guidance and CDFW striper beach notes.', conditions: { tide: 'Incoming preferred', swell: 'Small only', wind: 'W 9 kt', water: '55°F' }
  },
  {
    id: 'lands-end', name: 'Lands End / Sutro Baths Rocks', region: 'SF Coast', lat: 37.7790, lng: -122.5137, type: 'Bay Shore', safety: 'Hazard', score: 58, tideStation: 'Golden Gate', bestWindow: 'Low swell only · tide turn', biteReason: 'Deep rocky water can hold rockfish/stripers, but access and surge are hazardous. This is scout-first water.', species: ['Rockfish','Striped Bass','Surfperch','Cabezon','Greenling'], tactics: ['Only fish safe/legal shore zones','High-low squid/shrimp near rock pockets','Leave if surge reaches ledges'], accessNote: 'License required. Extreme cliff/rock/swell hazard; many zones are unsafe or inaccessible.', sourceNote: 'Groundfish species from SF Bay/ocean regs; safety and tactics based on rocky shore pattern.', conditions: { tide: 'Tide turn only', swell: 'Low swell required', wind: 'W 10 kt', water: '55°F' }
  },
  {
    id: 'rodeo-beach', name: 'Rodeo Beach', region: 'Marin/North Bay', lat: 37.8328, lng: -122.5381, type: 'Surf', safety: 'Caution', score: 62, tideStation: 'Golden Gate', bestWindow: 'Dawn incoming / moderate surf', biteReason: 'Marin beach with surfperch and striper potential when bait pushes into the cove and swell is not too chunky.', species: ['Surfperch','Striped Bass','Leopard Shark'], tactics: ['Carolina rig sandworm','Metal or plug for stripers','Watch shorebreak and rips'], accessNote: 'License required. Surf and rip currents; check park rules.', sourceNote: 'CDFW striper page notes summer surf fishing off Marin beaches can be excellent; CDFW beach timing applies.', conditions: { tide: 'Incoming high', swell: 'Moderate surf', wind: 'NW 10 kt', water: '55°F' }
  },
  {
    id: 'muir-beach', name: 'Muir Beach', region: 'Marin/North Bay', lat: 37.8626, lng: -122.5826, type: 'Surf', safety: 'Caution', score: 56, tideStation: 'Bolinas Lagoon', bestWindow: 'Incoming morning', biteReason: 'Smaller cove beach; surfperch are the main play with occasional striper when bait and low swell line up.', species: ['Surfperch','Striped Bass','Leopard Shark'], tactics: ['Small Carolina rig','Fish foamy troughs','Skip heavy swell days'], accessNote: 'License required. Check parking and beach conditions.', sourceNote: 'CDFW Marin beach striper/surf guidance plus surfperch beach tactics.', conditions: { tide: 'Incoming morning', swell: '3–4 ft manageable', wind: 'NW 9 kt', water: '55°F' }
  },
  {
    id: 'stinson-beach', name: 'Stinson Beach', region: 'Marin/North Bay', lat: 37.9005, lng: -122.6450, type: 'Surf', safety: 'Caution', score: 64, tideStation: 'Bolinas Lagoon', bestWindow: 'Early incoming tide', biteReason: 'Long sandy beach with perch consistency and a real striper window in summer/fall when bait slides inside casting range.', species: ['Surfperch','Striped Bass','Leopard Shark'], tactics: ['Sand crabs/Gulp sandworms','Walk for troughs and cuts','Throw metal/plug if birds or bait show'], accessNote: 'License required. Shark/surf advisories possible; check park signs.', sourceNote: 'CDFW notes Marin beaches can provide summer surf striper sport; CDFW beach-fishing tide guidance applies.', conditions: { tide: 'Early flood', swell: '3.5 ft @ 12s', wind: 'NW 8 kt', water: '55°F' }
  },
  {
    id: 'bolinas-beach', name: 'Bolinas Beach / Lagoon Mouth', region: 'Marin/North Bay', lat: 37.9085, lng: -122.6860, type: 'Surf', safety: 'Caution', score: 66, tideStation: 'Bolinas Lagoon', bestWindow: 'Tide exchange near lagoon mouth', biteReason: 'Lagoon mouth creates bait/current structure for perch, stripers and occasional halibut on calmer sand lanes.', species: ['Surfperch','Striped Bass','Halibut','Leopard Shark'], tactics: ['Carolina rig for perch','Swimbait near tide seams','Respect lagoon currents and closures'], accessNote: 'License required. Check local closures/sensitive habitat zones.', sourceNote: 'CDFW surf/striped-bass beach guidance; lagoon-mouth habitat pattern.', conditions: { tide: 'Exchange tide', swell: 'Small/moderate', wind: 'NW 8 kt', water: '55°F' }
  },
  {
    id: 'elephant-rock', name: 'Elephant Rock Pier', region: 'Marin/North Bay', lat: 37.8733, lng: -122.4581, type: 'Pier', safety: 'Green', score: 58, tideStation: 'Tiburon', bestWindow: 'Evening incoming', biteReason: 'Small Marin pier option for smelt/perch with halibut/striper/shark/ray potential in nearby current lanes.', species: ['Jacksmelt','Surfperch','Halibut','Striped Bass','Leopard Shark','Bat Ray'], tactics: ['Small bait rigs','Swimbait/live bait for halibut','Bottom rig for sharks/rays'], accessNote: 'CDFW-listed public pier. Verify current access.', sourceNote: 'CDFW lists Elephant Rock Pier; SF Bay species list supports target set.', conditions: { tide: 'Incoming evening', swell: 'Protected bay', wind: 'SW 8 kt', water: '58°F' }
  },
  {
    id: 'acqua-hotel-pier', name: 'Acqua Hotel Pier', region: 'Marin/North Bay', lat: 37.8906, lng: -122.5179, type: 'Pier', safety: 'Green', score: 49, tideStation: 'Richardson Bay', bestWindow: 'Late flood', biteReason: 'Protected Richardson Bay access: mostly small fish, flatfish, sharks/rays, and occasional striper/halibut when bait appears.', species: ['Jacksmelt','Flounder/Sole','Leopard Shark','Bat Ray','Striped Bass','Halibut'], tactics: ['Small hooks for smelt','Bottom rig with squid/anchovy','Fish the channel edge'], accessNote: 'CDFW-listed public pier. Confirm parking/access rules.', sourceNote: 'CDFW lists Acqua Hotel Pier; SF Bay district species references.', conditions: { tide: 'Late flood', swell: 'Protected bay', wind: 'SW 7 kt', water: '59°F' }
  },
  {
    id: 'san-antonio-pier', name: 'San Antonio Pier / Oakland Estuary', region: 'East Bay', lat: 37.7892, lng: -122.2509, type: 'Pier', safety: 'Green', score: 52, tideStation: 'Oakland Inner Harbor', bestWindow: 'Moving estuary tide', biteReason: 'Estuary pier with small fish, rays/sharks, flatfish and occasional striper moving through urban channels.', species: ['Jacksmelt','Surfperch','Striped Bass','Flounder/Sole','Leopard Shark','Bat Ray'], tactics: ['Small bait rig','Bottom rig near channel','Cast swimbait along current seam'], accessNote: 'CDFW-listed public pier.', sourceNote: 'CDFW lists San Antonio Pier and San Antonio North Pier; SF Bay species list applies.', conditions: { tide: 'Moving tide', swell: 'Protected estuary', wind: 'W 9 kt', water: '60°F' }
  },
  {
    id: 'jack-london-pier', name: 'Webster St. / Jack London Pier', region: 'East Bay', lat: 37.7950, lng: -122.2760, type: 'Pier', safety: 'Green', score: 54, tideStation: 'Oakland Inner Harbor', bestWindow: 'Evening flood/ebb movement', biteReason: 'Oakland Estuary structure and current: good urban access for smelt/perch/sharks/rays and a striper shot.', species: ['Jacksmelt','Surfperch','Striped Bass','Leopard Shark','Bat Ray','Flounder/Sole'], tactics: ['Sabiki/small bait','Anchovy/squid bottom rig','Swimbait near pilings'], accessNote: 'CDFW-listed public pier. Urban access/parking varies.', sourceNote: 'CDFW lists Webster St. (Jack London) Pier; SF Bay district species apply.', conditions: { tide: 'Moving tide', swell: 'Protected estuary', wind: 'W 8 kt', water: '60°F' }
  },
  {
    id: 'union-point-park', name: 'Union Point Park Pier', region: 'East Bay', lat: 37.7829, lng: -122.2439, type: 'Pier', safety: 'Green', score: 51, tideStation: 'Oakland Inner Harbor', bestWindow: 'Moving tide', biteReason: 'Protected Oakland estuary pier with smelt/perch and bottom species; stripers slide through with bait/current.', species: ['Jacksmelt','Surfperch','Striped Bass','Leopard Shark','Bat Ray','Flounder/Sole'], tactics: ['Small hooks for smelt/perch','Bottom rig with squid','Cast bait along channel'], accessNote: 'CDFW-listed public pier.', sourceNote: 'CDFW lists Union Point Park Pier; SF Bay regs cover species set.', conditions: { tide: 'Moving tide', swell: 'Protected estuary', wind: 'W 9 kt', water: '60°F' }
  },
  {
    id: 'arrowhead-marsh', name: 'Arrowhead Marsh / MLK Pier', region: 'East Bay', lat: 37.7363, lng: -122.2088, type: 'Pier', safety: 'Green', score: 53, tideStation: 'San Leandro Bay', bestWindow: 'Flood over marsh channels', biteReason: 'Marsh channels favor sharks/rays, flatfish, smelt and occasional stripers as bait floods in.', species: ['Leopard Shark','Bat Ray','Flounder/Sole','Jacksmelt','Striped Bass','Halibut'], tactics: ['Ghost shrimp/anchovy bottom rig','Target channel edges','Respect wildlife refuge rules'], accessNote: 'CDFW-listed public pier; wildlife area restrictions may apply.', sourceNote: 'CDFW lists Arrowhead Marsh/MLK Pier; species from SF Bay district fisheries and habitat pattern.', conditions: { tide: 'Flood over marsh', swell: 'Protected marsh', wind: 'W 8 kt', water: '61°F' }
  },
  {
    id: 'doolittle-pier', name: 'Doolittle Drive Pier', region: 'East Bay', lat: 37.7359, lng: -122.2109, type: 'Pier', safety: 'Green', score: 50, tideStation: 'San Leandro Bay', bestWindow: 'Incoming channel push', biteReason: 'San Leandro Bay channel access with bottom-species reliability and possible striper/halibut on moving water.', species: ['Leopard Shark','Bat Ray','Jacksmelt','Striped Bass','Halibut','Flounder/Sole'], tactics: ['Bottom rig with shrimp/anchovy','Fish the current seam','Small bait for smelt'], accessNote: 'CDFW-listed public pier. Check local parking/posted rules.', sourceNote: 'CDFW lists Doolittle Drive Pier; SF Bay district species apply.', conditions: { tide: 'Incoming channel', swell: 'Protected bay', wind: 'W 8 kt', water: '61°F' }
  },
  {
    id: 'port-view-park', name: 'Port View Park Pier', region: 'East Bay', lat: 37.7955, lng: -122.3174, type: 'Pier', safety: 'Green', score: 49, tideStation: 'Oakland Outer Harbor', bestWindow: 'Evening moving tide', biteReason: 'Outer harbor access for perch/smelt, sharks/rays, flatfish, and occasional striper when bait rides the port edge.', species: ['Jacksmelt','Surfperch','Leopard Shark','Bat Ray','Flounder/Sole','Striped Bass'], tactics: ['Small bait rigs','Bottom rig for sharks/rays','Cast near structure/current'], accessNote: 'CDFW-listed public pier. Industrial port surroundings; verify access.', sourceNote: 'CDFW lists Port View Park Pier; species from SF Bay district and pier patterns.', conditions: { tide: 'Moving tide', swell: 'Protected harbor', wind: 'W 10 kt', water: '59°F' }
  },
  {
    id: 'estuary-park-pier', name: 'Estuary Park Pier', region: 'East Bay', lat: 37.7907, lng: -122.2866, type: 'Pier', safety: 'Green', score: 50, tideStation: 'Oakland Inner Harbor', bestWindow: 'Moving tide', biteReason: 'Close urban estuary water with small fish and bottom species; stripers possible when current pins bait.', species: ['Jacksmelt','Surfperch','Striped Bass','Leopard Shark','Bat Ray','Flounder/Sole'], tactics: ['Small hooks for smelt','Anchovy/squid bottom rig','Swimbait around pilings'], accessNote: 'CDFW-listed public pier.', sourceNote: 'CDFW lists Estuary Park Pier; SF Bay species regs apply.', conditions: { tide: 'Moving tide', swell: 'Protected estuary', wind: 'W 8 kt', water: '60°F' }
  },
  {
    id: 'ferry-point', name: 'Ferry Point Pier / Miller Knox', region: 'East Bay', lat: 37.9102, lng: -122.3841, type: 'Pier', safety: 'Green', score: 60, tideStation: 'Richmond', bestWindow: 'Moving tide near point', biteReason: 'Richmond point current and depth offer stripers, sharks/rays, smelt and flatfish; good access when wind allows.', species: ['Striped Bass','Jacksmelt','Leopard Shark','Bat Ray','Flounder/Sole','Halibut'], tactics: ['Anchovy/pile worm for stripers','Bottom rig for sharks/rays','Swimbait on point current'], accessNote: 'CDFW-listed public pier. Park rules apply.', sourceNote: 'CDFW lists Ferry Point Pier; SF Bay species list informs targets.', conditions: { tide: 'Moving tide', swell: 'Bay chop', wind: 'SW 11 kt', water: '59°F' }
  },
  {
    id: 'vincent-park-pier', name: 'Barbara & Jay Vincent Park Pier / Jetty', region: 'East Bay', lat: 37.9097, lng: -122.3879, type: 'Pier', safety: 'Green', score: 59, tideStation: 'Richmond', bestWindow: 'Flood/ebb movement', biteReason: 'Richmond shoreline access with current-driven striper/shark/ray and smelt potential.', species: ['Striped Bass','Jacksmelt','Leopard Shark','Bat Ray','Flounder/Sole','Halibut'], tactics: ['Fish current seams','Bottom bait rigs','Small hooks for smelt'], accessNote: 'CDFW-listed public pier and jetty.', sourceNote: 'CDFW lists Barbara and Jay Vincent Park Pier/Jetty; SF Bay district species apply.', conditions: { tide: 'Moving tide', swell: 'Bay chop', wind: 'SW 10 kt', water: '59°F' }
  },
  {
    id: 'eckley-pier', name: 'Eckley Pier', region: 'East Bay', lat: 38.0410, lng: -122.2280, type: 'Pier', safety: 'Green', score: 57, tideStation: 'Carquinez Strait', bestWindow: 'Tide changes', biteReason: 'Carquinez edge with striper and bottom-game potential; current controls everything.', species: ['Striped Bass','Sturgeon','Bat Ray','Flounder/Sole','Jacksmelt'], tactics: ['Anchovy/pile worm for stripers','Adjust sinker to current','Check sturgeon closure'], accessNote: 'CDFW-listed public pier. Strong current; verify park access.', sourceNote: 'CDFW lists Eckley Pier; CDFW striper page describes current/sinker needs and Bay/Delta migration.', conditions: { tide: 'Tide changes', swell: 'Inland strait', wind: 'W 12 kt', water: '61°F' }
  },
  {
    id: 'vallejo-waterfront', name: 'Vallejo Waterfront / Independence Park Pier', region: 'Carquinez/Delta', lat: 38.1025, lng: -122.2639, type: 'Pier', safety: 'Green', score: 58, tideStation: 'Vallejo', bestWindow: 'Moving tide', biteReason: 'North Bay/Carquinez transition water with stripers, smelt, rays and historical sturgeon context.', species: ['Striped Bass','Sturgeon','Jacksmelt','Bat Ray','Flounder/Sole'], tactics: ['Bait near bottom','Fish tide changes','Check sturgeon rules before targeting'], accessNote: 'CDFW-listed Vallejo waterfront/launch ramp pier options. Check access.', sourceNote: 'CDFW lists Vallejo Launch Ramp Fishing Pier and Vallejo Waterfront; CDFW striped bass/SSF Bay regs inform species.', conditions: { tide: 'Moving tide', swell: 'Inland strait', wind: 'SW 10 kt', water: '61°F' }
  },
  {
    id: 'cuttings-wharf', name: 'Cuttings Wharf', region: 'Marin/North Bay', lat: 38.1988, lng: -122.3157, type: 'Pier', safety: 'Green', score: 55, tideStation: 'Napa River', bestWindow: 'Tide movement in river', biteReason: 'Napa River tidal water: stripers and bottom species are the game; current and water temp drive the bite.', species: ['Striped Bass','Sturgeon','Bat Ray','Flounder/Sole','Jacksmelt'], tactics: ['Pile worm/anchovy for stripers','Bottom rig near channel','Check sturgeon closure'], accessNote: 'CDFW-listed public pier in Napa County. Check access/parking.', sourceNote: 'CDFW lists Cuttings Wharf; CDFW striper migration and Bay/Delta guidance applies.', conditions: { tide: 'River tide movement', swell: 'Tidal river', wind: 'SW 8 kt', water: '62°F' }
  },
  {
    id: 'montara-state-beach', name: 'Montara State Beach', region: 'Half Moon Bay', lat: 37.5447, lng: -122.5165, type: 'Surf', safety: 'Caution', score: 63, tideStation: 'Half Moon Bay', bestWindow: 'Incoming morning tide', biteReason: 'Steep sandy beach with perch/striper potential; safer than cliff pocket zones but still open-coast surf.', species: ['Surfperch','Striped Bass','Leopard Shark'], tactics: ['Carolina rig sandworm','Cast plugs if bait visible','Avoid heavy shorebreak'], accessNote: 'License required. Open coast surf hazards.', sourceNote: 'CDFW beach-fishing guidance and San Mateo beach striper mention support surf species/timing.', conditions: { tide: 'Incoming morning', swell: '3.5 ft @ 12s', wind: 'NW 8 kt', water: '55°F' }
  },
  {
    id: 'gray-whale-cove', name: 'Gray Whale Cove', region: 'Half Moon Bay', lat: 37.5633, lng: -122.5141, type: 'Surf', safety: 'Caution', score: 55, tideStation: 'Half Moon Bay', bestWindow: 'Small swell incoming', biteReason: 'Pocket beach with surfperch possibilities; occasional striper when bait stacks, but limited space and swell sensitivity.', species: ['Surfperch','Striped Bass','Leopard Shark'], tactics: ['Light Carolina rig','Fish inside trough only on calm days','Respect beach access/stairs'], accessNote: 'License required. Steep access and surf caution.', sourceNote: 'CDFW beach timing and San Mateo surf striper guidance.', conditions: { tide: 'Incoming', swell: 'Small only', wind: 'NW 8 kt', water: '55°F' }
  },
  {
    id: 'half-moon-bay-state-beach', name: 'Half Moon Bay State Beach', region: 'Half Moon Bay', lat: 37.4642, lng: -122.4455, type: 'Surf', safety: 'Green', score: 65, tideStation: 'Half Moon Bay', bestWindow: 'Early incoming high tide', biteReason: 'Long sandy beach with reliable perch hunting and striper possibility in summer/fall bait windows.', species: ['Surfperch','Striped Bass','Halibut','Leopard Shark'], tactics: ['Find troughs and crab beds','Carolina rig sandworms/sand crabs','Slow swimbaits on flatter sand'], accessNote: 'License required. Park rules/fees may apply.', sourceNote: 'CDFW beach-fishing guidance: early/dusk, incoming high tide, mild-moderate surf; San Mateo beaches called out for summer surf striper.', conditions: { tide: 'Early incoming', swell: '3 ft @ 12s', wind: 'NW 7 kt', water: '55°F' }
  },
  {
    id: 'redondo-beach-hmb', name: 'Redondo Beach / Poplar Edge', region: 'Half Moon Bay', lat: 37.4384, lng: -122.4436, type: 'Surf', safety: 'Caution', score: 60, tideStation: 'Half Moon Bay', bestWindow: 'Incoming morning / dusk', biteReason: 'Open sandy coast with perch and occasional striper/halibut; beach structure changes fast after swell.', species: ['Surfperch','Striped Bass','Halibut','Leopard Shark'], tactics: ['Walk for cuts/troughs','Sand crab/Gulp sandworm','Swimbait calm sand lanes'], accessNote: 'License required. Open coast, cliff/access caution in places.', sourceNote: 'CDFW beach-fishing guidance and San Mateo surf striper reference.', conditions: { tide: 'Incoming/dusk', swell: '3.4 ft @ 12s', wind: 'NW 8 kt', water: '55°F' }
  },
  {
    id: 'pomponio-state-beach', name: 'Pomponio State Beach', region: 'Half Moon Bay', lat: 37.2926, lng: -122.4070, type: 'Surf', safety: 'Caution', score: 61, tideStation: 'Half Moon Bay', bestWindow: 'Incoming tide, low wind', biteReason: 'South San Mateo surf zone: perch first, stripers when bait rides the beach, sharks/rays on chunk bait.', species: ['Surfperch','Striped Bass','Leopard Shark','Bat Ray'], tactics: ['Carolina rig troughs','Metal/plug if birds/bait','Chunk bait for sharks/rays'], accessNote: 'License required. Remote beach; surf safety matters.', sourceNote: 'CDFW beach-fishing timing; San Mateo beach striper mention.', conditions: { tide: 'Incoming', swell: '3.5 ft @ 12s', wind: 'NW 8 kt', water: '55°F' }
  },
  {
    id: 'pescadero-state-beach', name: 'Pescadero State Beach', region: 'Half Moon Bay', lat: 37.2644, lng: -122.4121, type: 'Surf', safety: 'Caution', score: 62, tideStation: 'Half Moon Bay', bestWindow: 'Morning incoming around troughs', biteReason: 'Productive-looking sand/rock mix for surfperch with striper windows when bait is present; watch sanctuary/lagoon boundaries.', species: ['Surfperch','Striped Bass','Leopard Shark','Bat Ray'], tactics: ['Fish foamy troughs','Sand crabs/sandworms','Do not crowd lagoon-sensitive zones'], accessNote: 'License required. Check protected area/lagoon signage and surf conditions.', sourceNote: 'CDFW beach-fishing guidance and San Mateo surf striper reference.', conditions: { tide: 'Morning incoming', swell: '3.6 ft @ 12s', wind: 'NW 8 kt', water: '55°F' }
  },
  {
    id: 'san-gregorio-state-beach', name: 'San Gregorio State Beach', region: 'Half Moon Bay', lat: 37.3237, lng: -122.4038, type: 'Surf', safety: 'Caution', score: 60, tideStation: 'Half Moon Bay', bestWindow: 'Incoming around creek mouth edges', biteReason: 'Creek-mouth-adjacent beach structure can hold perch and occasional stripers when conditions are clean.', species: ['Surfperch','Striped Bass','Leopard Shark'], tactics: ['Carolina rig near troughs','Throw metal/plug if bait shows','Avoid closed/sensitive creek zones'], accessNote: 'License required. Check posted habitat closures and surf.', sourceNote: 'CDFW beach-fishing timing; San Mateo beach striper guidance.', conditions: { tide: 'Incoming', swell: '3–4 ft', wind: 'NW 8 kt', water: '55°F' }
  },
  {
    id: 'bean-hollow', name: 'Bean Hollow / Pebble Beach', region: 'Half Moon Bay', lat: 37.2267, lng: -122.4112, type: 'Surf', safety: 'Hazard', score: 54, tideStation: 'Half Moon Bay', bestWindow: 'Very small swell only', biteReason: 'Rocky pocket/reef terrain can hold perch/rockfish-type structure fish, but surge and slippery rocks are the boss.', species: ['Surfperch','Rockfish','Cabezon','Greenling'], tactics: ['Fish only from safe dry positions','Hi-low bait near pockets','Skip anything with surge'], accessNote: 'License required. High rock/surge hazard; do not fish wet rocks.', sourceNote: 'Groundfish/surfperch from SF management species and local rocky shore pattern.', conditions: { tide: 'Low swell/tide turn', swell: 'Small only', wind: 'NW 8 kt', water: '55°F' }
  },
  {
    id: 'pacifica-rockaway', name: 'Rockaway Beach', region: 'Peninsula', lat: 37.6097, lng: -122.4977, type: 'Surf', safety: 'Caution', score: 59, tideStation: 'Half Moon Bay', bestWindow: 'Incoming morning', biteReason: 'Small Pacifica pocket beach with perch and occasional striper; best on mild surf before crowds/wind.', species: ['Surfperch','Striped Bass','Leopard Shark'], tactics: ['Light Carolina rig','Work edge of rocks and sand lanes','Skip big swell'], accessNote: 'License required. Watch shorebreak and rocks.', sourceNote: 'CDFW beach-fishing guidance and Pacifica/San Mateo surf striper reference.', conditions: { tide: 'Incoming morning', swell: '3 ft @ 11s', wind: 'W 7 kt', water: '56°F' }
  },
  {
    id: 'sharp-park-beach', name: 'Sharp Park Beach', region: 'Peninsula', lat: 37.6345, lng: -122.4942, type: 'Surf', safety: 'Caution', score: 61, tideStation: 'San Francisco', bestWindow: 'High tide approach', biteReason: 'Beach adjacent to Pacifica Pier zone; perch, smelt/nearshore bait, stripers and sharks are all possible depending on surf and bait.', species: ['Surfperch','Striped Bass','Leopard Shark','Jacksmelt'], tactics: ['Carolina rig troughs','Plug/metal for stripers','Chunk bait on calmer evenings'], accessNote: 'License required from beach. Pier closure status does not equal beach closure.', sourceNote: 'Pacifica/Pierfishing species notes plus CDFW San Mateo surf guidance.', conditions: { tide: 'High approach', swell: '3.4 ft @ 11s', wind: 'W 8 kt', water: '56°F' }
  }
];

export const spots: Spot[] = expandedSpots;

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

export const regions: Region[] = ['SF Coast', 'Peninsula', 'Marin/North Bay', 'East Bay', 'South Bay', 'Half Moon Bay', 'Carquinez/Delta', 'Sonoma Coast'];
export const allSpecies: Species[] = ['Surfperch', 'Striped Bass', 'Halibut', 'Rockfish', 'Cabezon', 'Lingcod', 'Greenling', 'Jacksmelt', 'White Croaker', 'Leopard Shark', 'Bat Ray', 'Smoothhound Shark', 'Sturgeon', 'Flounder/Sole', 'Salmon', 'Dungeness Crab', 'Rock Crab'];

export const dailyReport = {
  date: 'Today',
  headline: 'Flood tide is the money tide — surfperch early, stripers if the bait stacks up.',
  summary: 'Listen up, angler: the greater Bay is giving you a clean morning window before west wind roughs up the open coast. Peninsula beaches get first crack for perch, Golden Gate piers get striper/halibut shots around the tide turn, and East/South Bay mudflat piers are better saved for the warmer flood later in the day.',
  topPick: 'Linda Mar dawn flood',
  captainNote: 'Keep it mobile. If the first trough is dead after 20 minutes, move. The fish owe you nothing — make the boots do the work.'
};

export const researchSources = [
  'CDFW California Beach Fishing public piers/jetties/breakwaters list',
  'CDFW SF Bay Ocean Recreational Fishing Regulations species list',
  'CDFW Fishing for Striped Bass shore and pier guidance',
  'PierFishing.com Bay Area pier species notes and reports'
];

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
