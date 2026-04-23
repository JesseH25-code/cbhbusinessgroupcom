export interface IndustryCityData {
  slug: string;
  industry: string;
  city: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroLabel: string;
  heroHeading: string;
  heroDescription: string;
  whyChooseHeading: string;
  features: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  multipleRange: string;
  relatedLinks: { to: string; title: string; subtitle: string }[];
}

interface CityProfile {
  key: string;
  name: string;
  stateRegion: string;
  population: string;
  demographic: string;
  anchors: string[];
  neighborhoods: string[];
  growthNote: string;
  buyerNote: string;
  industryNotes?: Partial<Record<string, string>>;
}

const cities: CityProfile[] = [
  {
    key: "miami", name: "Miami", stateRegion: "South Florida",
    population: "6.2M-person Miami-Dade/Broward metro",
    demographic: "bilingual workforce and the strongest LATAM trade corridor in the U.S.",
    anchors: ["PortMiami", "Miami International Airport", "Brickell financial district", "the Wynwood/Doral logistics corridor"],
    neighborhoods: ["Brickell", "Doral", "Coral Gables", "Aventura", "Wynwood", "Kendall"],
    growthNote: "Miami's role as the LATAM gateway, no state income tax, and constant inbound capital push valuation multiples above the Florida average for sellers with clean books.",
    buyerNote: "PE platforms headquartered in New York, Miami family offices, and LATAM strategics actively bid on Miami-based targets.",
    industryNotes: {
      "Healthcare": "Concierge medicine, dermatology, and dental rollups around Coral Gables and Aventura draw aggressive PE bids.",
      "Restaurant": "South Beach, Brickell, and Wynwood concepts with proven unit economics attract hospitality PE and celebrity-backed groups.",
      "Construction": "Vertical condo and mixed-use construction in Brickell and Edgewater keeps backlogs full and bonded contractors in demand.",
      "Insurance": "Coastal property exposure and bilingual books make Miami agencies prime aggregator targets.",
    },
  },
  {
    key: "tampa", name: "Tampa", stateRegion: "Tampa Bay",
    population: "3.3M-person Tampa Bay metro",
    demographic: "fast-growing professional workforce anchored by USF and MacDill AFB",
    anchors: ["Port Tampa Bay", "MacDill Air Force Base", "USF Health", "the Westshore business district"],
    neighborhoods: ["Westshore", "South Tampa", "Hyde Park", "Channelside", "Carrollwood", "Wesley Chapel"],
    growthNote: "Tampa's relocation boom \u2014 finance, defense, and healthcare HQs moving from the Northeast \u2014 has tightened inventory and lifted multiples for well-run businesses.",
    buyerNote: "Tampa attracts strong interest from Southeast PE platforms, Florida family offices, and strategic acquirers expanding the I-4 corridor.",
    industryNotes: {
      "Technology": "Tampa's cybersecurity and fintech cluster (anchored around USF and the Embarc Collective) draws strategic tech buyers.",
      "Healthcare": "Specialty practices in South Tampa and around AdventHealth/USF Health are top targets for PE-backed MSOs.",
      "Professional Services": "Westshore-based accounting, legal, and wealth firms benefit from Tampa's HQ relocation wave.",
    },
  },
  {
    key: "orlando", name: "Orlando", stateRegion: "Central Florida",
    population: "2.9M-person Orlando metro",
    demographic: "tourism, defense simulation, and a young hospitality workforce",
    anchors: ["Walt Disney World", "Universal Orlando", "Lockheed Martin", "Lake Nona Medical City", "the UCF research corridor"],
    neighborhoods: ["Lake Nona", "Winter Park", "Dr. Phillips", "Lake Mary", "Baldwin Park", "Downtown Orlando"],
    growthNote: "Orlando's tourism rebound, Lake Nona Medical City build-out, and Modeling/Simulation/Training cluster create deep buyer pools across both consumer and B2B sectors.",
    buyerNote: "Hospitality strategics, defense primes, and PE-backed healthcare platforms are the most active acquirers in the Orlando metro.",
    industryNotes: {
      "Restaurant": "I-Drive and Disney-adjacent concepts with documented per-cap and traffic data attract hospitality PE.",
      "Technology": "Modeling/Simulation/Training (MS&T) and defense-tech firms near UCF draw both PE and strategic defense buyers.",
      "Healthcare": "Lake Nona-adjacent specialty practices and ASCs are heavily courted by national MSOs.",
    },
  },
  {
    key: "jacksonville", name: "Jacksonville", stateRegion: "Northeast Florida",
    population: "1.7M-person Jacksonville metro",
    demographic: "logistics, naval, and Fortune 500 financial services workforce",
    anchors: ["JAXPORT", "Naval Station Mayport", "NAS Jacksonville", "Mayo Clinic", "the Southside financial corridor"],
    neighborhoods: ["Riverside", "San Marco", "Southside", "Mandarin", "St. Johns Town Center", "Nocatee"],
    growthNote: "Jacksonville's logistics, distribution, and financial services scale make it Florida's quietly dominant Tier-1 M&A market \u2014 often at more reasonable entry multiples than South Florida.",
    buyerNote: "Southeast strategics, logistics rollups, and PE platforms targeting the I-95 corridor consistently bid on Jacksonville businesses.",
    industryNotes: {
      "Manufacturing": "Westside and Northside industrial corridors near JAXPORT support strong manufacturing M&A activity.",
      "Construction": "Nocatee, St. Johns County, and downtown JAX redevelopment keep contractor backlogs deep.",
      "Professional Services": "Southside financial-services firms benefit from Jacksonville's Fortune 500 footprint.",
    },
  },
  {
    key: "fort-lauderdale", name: "Fort Lauderdale", stateRegion: "South Florida",
    population: "1.95M-person Broward County metro",
    demographic: "marine industry, hospitality, and a dense base of relocated finance professionals",
    anchors: ["Port Everglades", "Fort Lauderdale-Hollywood Airport", "the Las Olas financial corridor", "the global yachting industry"],
    neighborhoods: ["Las Olas", "Flagler Village", "Coral Ridge", "Weston", "Plantation", "Pompano Beach"],
    growthNote: "Fort Lauderdale's mix of yachting, hospitality, and the Wall Street South migration to Las Olas has created exceptionally deep buyer pools for $3M\u2013$50M businesses.",
    buyerNote: "Marine strategics, hospitality PE, and Las Olas-based family offices and PE shops bid actively here.",
    industryNotes: {
      "Manufacturing": "Marine manufacturing, yacht refit, and aerospace MRO around FXE and Port Everglades trade at premium multiples.",
      "Professional Services": "Las Olas wealth management, accounting, and legal firms benefit from the finance migration.",
      "Restaurant": "Las Olas, Flagler Village, and beach concepts with year-round per-cap attract hospitality groups.",
    },
  },
  {
    key: "naples", name: "Naples", stateRegion: "Southwest Florida",
    population: "400K Collier County / SWFL coastal market",
    demographic: "the highest concentration of UHNW retirees in Florida",
    anchors: ["5th Avenue South", "the Ritz-Carlton/Mediterra luxury corridor", "Arthrex's global HQ", "NCH Healthcare System"],
    neighborhoods: ["Old Naples", "Pelican Bay", "Park Shore", "Mediterra", "Ave Maria", "North Naples"],
    growthNote: "Naples' UHNW resident base supports premium pricing and recurring demand \u2014 luxury home services, concierge healthcare, and high-end hospitality regularly trade above standard Florida multiples.",
    buyerNote: "Family offices, lifestyle PE funds, and luxury-brand strategics dominate the Naples buyer pool.",
    industryNotes: {
      "Healthcare": "Concierge medicine, plastic surgery, and dermatology practices serving Pelican Bay and Port Royal command premium PE bids.",
      "Construction": "Custom homebuilders and luxury renovation contractors in Port Royal and Mediterra trade at the top of the range.",
      "Landscaping": "Estate-grade landscaping and irrigation firms serving gated golf communities trade at premium recurring-revenue multiples.",
      "Restaurant": "5th Ave South and Mercato chef-driven concepts attract lifestyle-focused PE groups.",
    },
  },
  {
    key: "sarasota", name: "Sarasota", stateRegion: "Southwest Florida",
    population: "850K Sarasota-Manatee metro",
    demographic: "affluent retirees, an arts community, and rapid relocation-driven growth",
    anchors: ["Lakewood Ranch", "Sarasota Memorial Health System", "downtown Sarasota's bayfront redevelopment"],
    neighborhoods: ["Lakewood Ranch", "Downtown Sarasota", "Siesta Key", "St. Armands", "University Park", "Venice"],
    growthNote: "Lakewood Ranch is one of the fastest-selling master-planned communities in the U.S., and Sarasota-Manatee's relocation pace keeps demand strong across home services, healthcare, and professional services.",
    buyerNote: "Lakewood Ranch\u2013based platforms, Tampa Bay strategics, and SWFL family offices are consistent acquirers.",
    industryNotes: {
      "Construction": "Lakewood Ranch and Wellen Park expansion keeps homebuilders and trade contractors in heavy demand.",
      "Healthcare": "Sarasota Memorial-aligned specialty groups draw PE and health-system bids.",
    },
  },
  {
    key: "palm-beach", name: "Palm Beach", stateRegion: "Palm Beach County",
    population: "1.5M Palm Beach County",
    demographic: "Wall Street South finance migration plus deep UHNW resident base",
    anchors: ["Worth Avenue", "the Royal Palm office corridor", "the West Palm Beach financial cluster", "Mar-a-Lago and Palm Beach Island"],
    neighborhoods: ["Palm Beach Island", "West Palm Beach", "Boca Raton", "Delray Beach", "Wellington", "Jupiter"],
    growthNote: "The Wall Street South finance migration has flooded Palm Beach County with capital \u2014 buyer competition for quality $3M\u2013$50M businesses is among the most aggressive in Florida.",
    buyerNote: "Newly relocated PE shops, family offices, and hedge funds based on Royal Palm Way and in West Palm are actively deploying.",
    industryNotes: {
      "Professional Services": "Wealth management, accounting, and law firms around Royal Palm Way trade at premium multiples to relocated finance buyers.",
      "Construction": "Custom homebuilders, renovation, and concierge construction firms across Palm Beach and Boca Raton stay backlogged for years.",
      "Healthcare": "Concierge primary care, aesthetics, and dental DSOs across Boca and Delray draw aggressive MSO bids.",
      "Landscaping": "Estate landscape firms serving Palm Beach Island and Wellington equestrian estates command top-tier recurring multiples.",
    },
  },
  {
    key: "boca-raton", name: "Boca Raton", stateRegion: "South Florida",
    population: "100K city / 1.5M Palm Beach County",
    demographic: "headquarters cluster, FAU research base, and affluent professional residents",
    anchors: ["FAU", "Boca Raton Innovation Campus", "the Town Center business district", "Office Depot, ADT, and other corporate HQs"],
    neighborhoods: ["Town Center", "East Boca", "Mizner Park", "West Boca", "Royal Palm Yacht Club"],
    growthNote: "Boca's HQ density, education base, and Palm Beach finance spillover create unusually deep buyer pools for B2B and professional services.",
    buyerNote: "Corporate strategics, HQ-based PE, and family offices headquartered along Glades Road are consistent acquirers.",
    industryNotes: {
      "Technology": "Boca Raton Innovation Campus and the FAU tech corridor make B2B SaaS and IT services highly competitive targets.",
      "Healthcare": "Boca Regional / Baptist Health-aligned practices draw national MSO and PE interest.",
    },
  },
  {
    key: "delray-beach", name: "Delray Beach", stateRegion: "South Florida",
    population: "70K city / 1.5M Palm Beach County",
    demographic: "walkable downtown, hospitality-heavy economy, and affluent second-home owners",
    anchors: ["Atlantic Avenue", "the downtown hospitality district", "Delray Medical Center"],
    neighborhoods: ["Atlantic Avenue", "Pineapple Grove", "East Delray", "West Delray"],
    growthNote: "Atlantic Avenue's year-round foot traffic and Delray's reputation as one of South Florida's strongest small-city economies sustain premium pricing in food service and home services.",
    buyerNote: "Hospitality PE, Boca and Palm Beach family offices, and South Florida home-service consolidators are the active buyer set.",
    industryNotes: {
      "Restaurant": "Atlantic Avenue and Pineapple Grove concepts with proven seasonal economics draw hospitality PE.",
    },
  },
  {
    key: "west-palm-beach", name: "West Palm Beach", stateRegion: "Palm Beach County",
    population: "120K city / 1.5M county metro",
    demographic: "Wall Street South finance migration with a fast-growing CityPlace/downtown core",
    anchors: ["Rosemary Square / CityPlace", "Brightline West Palm station", "the Okeechobee Boulevard finance corridor"],
    neighborhoods: ["Downtown WPB", "CityPlace/Rosemary", "Northwood", "El Cid", "Flagler Drive"],
    growthNote: "West Palm has become the operational hub for the Palm Beach finance migration \u2014 office absorption is at historic highs and so is buyer demand for local services.",
    buyerNote: "Newly relocated finance shops, Palm Beach family offices, and South Florida PE platforms are aggressively acquiring.",
  },
  {
    key: "jupiter", name: "Jupiter", stateRegion: "Palm Beach County",
    population: "75K town / Northern Palm Beach",
    demographic: "marine industry, golf and equestrian wealth, and growing biotech footprint",
    anchors: ["Jupiter Inlet", "Scripps Florida / Max Planck biotech cluster", "the Abacoa/Loxahatchee corridor"],
    neighborhoods: ["Admirals Cove", "Jupiter Island", "Abacoa", "Tequesta"],
    growthNote: "Jupiter combines marine services, biotech research, and ultra-affluent residential demand \u2014 a rare three-engine local economy that keeps service businesses backlogged.",
    buyerNote: "Marine strategics, biotech-adjacent PE, and Palm Beach family offices acquire aggressively in Jupiter.",
    industryNotes: {
      "Construction": "Custom homebuilders serving Admirals Cove and Jupiter Island trade at premium multiples.",
    },
  },
  {
    key: "fort-myers", name: "Fort Myers", stateRegion: "Southwest Florida",
    population: "830K Lee County metro",
    demographic: "rapid retiree relocation, post-Hurricane Ian rebuild economy",
    anchors: ["Lee Health system", "RSW (Southwest Florida International)", "Gartner's regional HQ", "the Daniels Parkway corridor"],
    neighborhoods: ["Downtown Fort Myers", "Gateway", "McGregor Boulevard", "Cape Coral side"],
    growthNote: "Lee County is rebuilding and growing simultaneously after Hurricane Ian \u2014 construction, restoration, healthcare, and home services are all running at peak demand.",
    buyerNote: "SWFL family offices, Naples-based platforms, and national rebuild-focused PE are deploying capital here.",
    industryNotes: {
      "Construction": "Hurricane Ian rebuild plus continued in-migration keeps general contractors, roofers, and trades booked years out.",
      "HVAC": "Storm rebuild plus year-round cooling makes Lee County HVAC one of the hottest M&A sectors in Florida.",
    },
  },
  {
    key: "cape-coral", name: "Cape Coral", stateRegion: "Southwest Florida",
    population: "220K city / 830K Lee County metro",
    demographic: "fastest-growing large city in the U.S. by net migration in recent years",
    anchors: ["the Cape Coral canal system (400+ miles)", "the Pine Island Road retail corridor", "Lee Health"],
    neighborhoods: ["South Cape", "Pelican", "Cape Harbour", "Northwest Cape"],
    growthNote: "Cape Coral's per-capita growth and canal-access lifestyle have made it one of the most attractive home-services markets in the country.",
    buyerNote: "Lee County and Naples-based PE platforms, plus national consolidators, target Cape Coral home-services rollups.",
    industryNotes: {
      "Lawncare": "Cape Coral's grid of single-family homes makes it one of the most route-dense lawncare markets in Florida.",
      "HVAC": "Year-round cooling demand plus rapid new construction make HVAC a top sector.",
    },
  },
  {
    key: "st-petersburg", name: "St. Petersburg", stateRegion: "Tampa Bay",
    population: "265K city / 3.3M Tampa Bay metro",
    demographic: "creative-class downtown, marine industry, and growing tech footprint",
    anchors: ["Downtown St. Pete waterfront", "Bayfront Health", "the Innovation District (USFSP, AMRoC, MSC)", "the Grand Central / EDGE District"],
    neighborhoods: ["Downtown St. Pete", "EDGE District", "Old Northeast", "Kenwood", "Skyway Marina"],
    growthNote: "St. Pete's downtown renaissance, Innovation District, and waterfront redevelopment are pulling capital and population across the bay from Tampa.",
    buyerNote: "Tampa Bay PE, hospitality groups, and marine strategics are active buyers in St. Pete.",
  },
  {
    key: "clearwater", name: "Clearwater", stateRegion: "Tampa Bay",
    population: "120K city / 3.3M Tampa Bay metro",
    demographic: "beach tourism, healthcare, and a long-standing aerospace/marine base",
    anchors: ["Clearwater Beach", "BayCare Health", "the U.S. 19 corridor", "Honeywell Aerospace"],
    neighborhoods: ["Clearwater Beach", "Downtown Clearwater", "Countryside", "Dunedin (adjacent)"],
    growthNote: "Clearwater's tourism-plus-healthcare combination produces unusually steady cash flow for both consumer and B2B targets.",
    buyerNote: "Tampa Bay PE, hospitality strategics, and BayCare-aligned MSOs acquire here.",
  },
  {
    key: "lakeland", name: "Lakeland", stateRegion: "I-4 Corridor",
    population: "770K Polk County metro",
    demographic: "logistics, distribution, and Publix-anchored economy on the I-4 corridor",
    anchors: ["Publix Super Markets HQ", "Amazon Air at Lakeland Linder", "the I-4 logistics corridor", "Lakeland Regional Health"],
    neighborhoods: ["Downtown Lakeland", "South Lakeland", "Lake Mirror district", "Lakeland Highlands"],
    growthNote: "Lakeland sits at the geographic and logistical center of the I-4 corridor \u2014 distribution, manufacturing, and trades businesses benefit from massive new warehouse and logistics demand.",
    buyerNote: "Logistics PE, I-4 industrial platforms, and Tampa/Orlando strategics consistently target Lakeland.",
    industryNotes: {
      "Manufacturing": "I-4 corridor logistics access makes Lakeland manufacturers prime PE targets.",
    },
  },
  {
    key: "ocala", name: "Ocala", stateRegion: "North Central Florida",
    population: "390K Marion County metro",
    demographic: "horse country, distribution boom, and rapid retiree growth via The Villages spillover",
    anchors: ["FedEx Ground megahub", "AutoZone, Chewy, and Amazon distribution centers", "World Equestrian Center", "Ocala Regional"],
    neighborhoods: ["Downtown Ocala", "Heath Brook", "Golden Ocala area", "WEC corridor"],
    growthNote: "Ocala has become one of Florida's biggest distribution and logistics nodes, while World Equestrian Center has reshaped the local hospitality and home-services economy.",
    buyerNote: "Logistics PE, equestrian-lifestyle investors, and Central Florida strategics acquire in Ocala.",
  },
  {
    key: "the-villages", name: "The Villages", stateRegion: "Central Florida",
    population: "150K+ master-planned retirement community",
    demographic: "the largest active-adult retirement community in the U.S.",
    anchors: ["The Villages developer-controlled town squares", "UF Health The Villages Hospital", "Brownwood and Lake Sumter Landing"],
    neighborhoods: ["Brownwood", "Lake Sumter Landing", "Spanish Springs", "Wildwood"],
    growthNote: "The Villages' 150K+ active-adult population creates extraordinary recurring demand for healthcare, home services, golf, and hospitality \u2014 almost unique in the U.S.",
    buyerNote: "PE-backed home-services and healthcare consolidators view The Villages as a flagship submarket.",
    industryNotes: {
      "Healthcare": "Primary care, podiatry, cardiology, and dermatology serving the 65+ population draw aggressive PE/MSO bids.",
      "Lawncare": "Density of homes on golf-cart-accessible streets makes route economics exceptional.",
      "HVAC": "55+ population plus year-round cooling makes residential HVAC one of the strongest local sectors.",
    },
  },
  {
    key: "gainesville", name: "Gainesville", stateRegion: "North Central Florida",
    population: "350K Alachua County metro",
    demographic: "University of Florida research/medical hub and a young professional workforce",
    anchors: ["University of Florida", "UF Health Shands", "Innovation Square (Gainesville's tech/research district)"],
    neighborhoods: ["Downtown Gainesville", "Haile Plantation", "Innovation Square", "Tioga"],
    growthNote: "UF research spending, Shands' regional medical draw, and a steady stream of Gator-affiliated startups give Gainesville unusual depth for a mid-size metro.",
    buyerNote: "University-affiliated PE, healthcare MSOs, and Central Florida strategics acquire in Gainesville.",
    industryNotes: {
      "Healthcare": "UF Health-adjacent specialty practices and ASCs are top targets for national MSOs.",
      "Technology": "Innovation Square spinouts and biotech startups attract university-affiliated and national PE.",
    },
  },
  {
    key: "tallahassee", name: "Tallahassee", stateRegion: "North Florida",
    population: "390K Tallahassee MSA",
    demographic: "state capital, FSU/FAMU university base, and government-anchored economy",
    anchors: ["the Florida State Capitol", "Florida State University", "FAMU", "Tallahassee Memorial HealthCare"],
    neighborhoods: ["Midtown", "Downtown", "Killearn", "Southwood"],
    growthNote: "State government, two major universities, and a steady Capitol-services economy make Tallahassee one of Florida's most recession-resistant M&A markets.",
    buyerNote: "Government-services PE, healthcare MSOs, and Southeast strategics acquire in Tallahassee.",
    industryNotes: {
      "Professional Services": "Government-relations, accounting, and law firms benefit from the Capitol economy.",
    },
  },
  {
    key: "pensacola", name: "Pensacola", stateRegion: "Northwest Florida",
    population: "510K Pensacola metro",
    demographic: "naval aviation, Gulf Coast hospitality, and a fast-growing healthcare base",
    anchors: ["NAS Pensacola (home of the Blue Angels)", "Baptist Health Care", "Navy Federal Credit Union HQ", "Pensacola Beach"],
    neighborhoods: ["Downtown Pensacola", "East Hill", "Perdido Key", "Pensacola Beach"],
    growthNote: "Navy Federal's HQ growth, NAS Pensacola, and the Gulf Coast tourism rebound have lifted both B2B and consumer business performance across the metro.",
    buyerNote: "Defense-services PE, Gulf Coast hospitality strategics, and Southeast platforms acquire in Pensacola.",
  },
  {
    key: "destin", name: "Destin", stateRegion: "Northwest Florida / Emerald Coast",
    population: "300K Destin\u2013Fort Walton Beach\u2013Crestview metro",
    demographic: "premier Gulf Coast tourism market with high-income second-home owners",
    anchors: ["Destin Harbor", "30A and Sandestin", "Eglin Air Force Base", "Hurlburt Field"],
    neighborhoods: ["Destin Harbor", "Crystal Beach", "Sandestin", "Miramar Beach", "30A corridor"],
    growthNote: "Destin and 30A draw some of the highest-spending tourism dollars in the Southeast \u2014 restaurant, marine, and home-services businesses serving second-home owners trade at premium multiples.",
    buyerNote: "Hospitality PE, marine strategics, and Eglin-defense-adjacent platforms acquire in the Emerald Coast.",
    industryNotes: {
      "Restaurant": "Destin Harbor and 30A concepts with proven seasonal per-cap attract national hospitality PE.",
      "Construction": "Custom homebuilders along 30A and Sandestin trade at premium multiples.",
    },
  },
  {
    key: "panama-city", name: "Panama City", stateRegion: "Northwest Florida",
    population: "200K Bay County metro",
    demographic: "tourism, Tyndall AFB rebuild, and a fast-recovering post-Hurricane Michael economy",
    anchors: ["Tyndall Air Force Base", "Naval Support Activity Panama City", "Panama City Beach tourism corridor"],
    neighborhoods: ["Panama City Beach", "Downtown Panama City", "Lynn Haven", "Pier Park"],
    growthNote: "Tyndall's multi-billion-dollar rebuild plus PCB tourism growth keep construction, hospitality, and trades businesses at peak utilization.",
    buyerNote: "Defense-services PE, hospitality strategics, and rebuild-focused platforms acquire here.",
  },
  {
    key: "st-cloud", name: "St. Cloud", stateRegion: "Central Florida",
    population: "70K city / 410K Osceola County",
    demographic: "fast-growing Lake Nona/southeast Orlando bedroom community",
    anchors: ["the Lake Nona Medical City corridor", "Lake Nona Performance Club", "Narcoossee Road growth corridor"],
    neighborhoods: ["Narcoossee Road corridor", "Lakeshore", "downtown St. Cloud", "Harmony"],
    growthNote: "St. Cloud is one of the fastest-growing cities in Central Florida thanks to Lake Nona spillover and Narcoossee Road expansion \u2014 home-services and trades businesses see compounding demand.",
    buyerNote: "Central Florida home-services consolidators and Lake Nona-adjacent PE acquire in St. Cloud.",
  },
  {
    key: "kissimmee", name: "Kissimmee", stateRegion: "Central Florida",
    population: "80K city / 410K Osceola County",
    demographic: "vacation-rental capital of the U.S. with a large bilingual workforce",
    anchors: ["Walt Disney World (adjacent)", "the U.S. 192 vacation rental corridor", "Celebration"],
    neighborhoods: ["Celebration", "Poinciana", "Downtown Kissimmee", "U.S. 192 corridor"],
    growthNote: "Kissimmee's vacation-rental and theme-park-adjacent economy creates uniquely durable demand for property services, hospitality, and home services.",
    buyerNote: "Hospitality PE, vacation-rental platforms, and Central Florida home-services rollups acquire here.",
  },
];

interface IndustryProfile {
  key: string;
  name: string;
  slugPrefix: string;
  multipleRange: string;
  statePageLink: string;
  baseFeatures: { title: string; desc: (city: CityProfile) => string }[];
  baseFaqs: (city: CityProfile) => { q: string; a: string }[];
  heroDesc: (city: CityProfile) => string;
}

const anchorPhrase = (city: CityProfile) => {
  const a = city.anchors;
  if (a.length >= 2) return `${a[0]} and ${a[1]}`;
  return a[0] || city.name;
};
const neighborhoodPhrase = (city: CityProfile) => {
  const n = city.neighborhoods;
  if (n.length >= 3) return `${n[0]}, ${n[1]}, and ${n[2]}`;
  if (n.length === 2) return `${n[0]} and ${n[1]}`;
  return n[0] || city.name;
};

const industries: IndustryProfile[] = [
  {
    key: "hvac", name: "HVAC", slugPrefix: "sell-hvac-company",
    multipleRange: "4x\u20137x", statePageLink: "/sell-hvac-company-florida",
    baseFeatures: [
      { title: "Service Agreement Valuation", desc: (c) => `Proper weighting of recurring maintenance revenue across ${neighborhoodPhrase(c)}.` },
      { title: "Technician Retention", desc: () => "Confidential process that protects your team throughout the transaction." },
      { title: "PE Platform Access", desc: (c) => `Direct relationships with PE-backed HVAC consolidators currently rolling up the ${c.stateRegion} market.` },
      { title: "Climate-Driven Demand", desc: (c) => `${c.name}'s year-round cooling load \u2014 supported by ${anchorPhrase(c)} \u2014 anchors premium HVAC valuations.` },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my HVAC company in ${c.name}?`, a: `Selling an HVAC company in ${c.name} involves documenting your service-agreement base across submarkets like ${neighborhoodPhrase(c)}, your technician roster, equipment fleet, and trailing-twelve financial performance. CBH normalizes EBITDA, isolates recurring maintenance revenue, and positions your company for the PE-backed consolidators currently active in ${c.stateRegion}.` },
      { q: `What are HVAC valuation multiples in ${c.name}?`, a: `HVAC companies in ${c.name} valued $3M\u2013$50M typically trade at 4x\u20137x adjusted EBITDA. ${c.industryNotes?.["HVAC"] ?? `Companies with strong service-agreement bases serving ${neighborhoodPhrase(c)}, certified technicians, and growing maintenance revenue command the top of that range.`}` },
      { q: `Why is ${c.name} a strong market for HVAC M&A?`, a: `${c.growthNote} For HVAC specifically, ${c.name}'s climate produces year-round cooling demand and ${anchorPhrase(c)} drives commercial mechanical work. ${c.buyerNote}` },
    ],
    heroDesc: (c) => `${c.name}'s climate makes HVAC one of the most active M&A sectors in ${c.stateRegion}. ${c.industryNotes?.["HVAC"] ?? `With cooling demand running year-round across ${neighborhoodPhrase(c)} and commercial mechanical work tied to ${anchorPhrase(c)}, HVAC operators here have unusual leverage in negotiations.`} CBH Business Group helps ${c.name} HVAC owners maximize value by positioning service agreements, technician depth, and growth metrics for today's aggressive buyer market.`,
  },
  {
    key: "construction", name: "Construction", slugPrefix: "sell-construction-company",
    multipleRange: "3.5x\u20136x", statePageLink: "/sell-construction-company-florida",
    baseFeatures: [
      { title: "Backlog Analysis", desc: (c) => `Expert valuation of your project pipeline and contracted revenue across ${neighborhoodPhrase(c)}.` },
      { title: "License & Bond Transfer", desc: () => "Guidance on transferring contractor licenses, bonds, and insurance to buyers." },
      { title: "Subcontractor Relationships", desc: (c) => `Positioning your established ${c.name}-area subcontractor network as a defensible value driver.` },
      { title: "Local Growth Tailwinds", desc: (c) => `${anchorPhrase(c)} keeps ${c.name} construction backlogs deep and acquirers attentive.` },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my construction company in ${c.name}?`, a: `Selling a construction company in ${c.name} requires documenting your project backlog, bonding capacity, key client relationships across ${neighborhoodPhrase(c)}, and equipment assets. CBH normalizes earnings around project-based revenue cycles and connects you with strategic and PE buyers active in ${c.stateRegion}.` },
      { q: `What are construction company multiples in ${c.name}?`, a: `Construction companies in ${c.name} valued $3M\u2013$50M typically trade at 3.5x\u20136x adjusted EBITDA. ${c.industryNotes?.["Construction"] ?? `Specialty contractors with recurring commercial clients tied to ${anchorPhrase(c)}, strong safety records, and diversified revenue command premium valuations.`}` },
      { q: `What makes ${c.name} construction firms attractive to buyers?`, a: `${c.growthNote} ${c.industryNotes?.["Construction"] ?? `Buyers value established GC and developer relationships, skilled labor, active bonding capacity, and exposure to ${anchorPhrase(c)}.`} ${c.buyerNote}` },
    ],
    heroDesc: (c) => `${c.industryNotes?.["Construction"] ?? `${c.name}'s construction market is running hot \u2014 backlogs are deep around ${neighborhoodPhrase(c)} and acquirers are actively bidding on bonded, well-staffed firms.`} CBH Business Group helps ${c.name} construction owners achieve premium exits through strategic positioning, normalized financials, and targeted buyer outreach.`,
  },
  {
    key: "healthcare", name: "Healthcare", slugPrefix: "sell-healthcare-business",
    multipleRange: "5x\u20139x", statePageLink: "/sell-healthcare-business-florida",
    baseFeatures: [
      { title: "Regulatory Compliance", desc: (c) => `Navigate Florida healthcare licensing and compliance requirements specific to ${c.name} transactions.` },
      { title: "Payor Mix Analysis", desc: () => "Expert assessment of insurance contracts, Medicare/Medicaid reimbursement, and private pay revenue." },
      { title: "Provider Retention", desc: (c) => `Confidential strategies to retain providers and staff serving ${neighborhoodPhrase(c)} through the transition.` },
      { title: "Demographic Tailwinds", desc: (c) => `${c.demographic} creates the long-term patient demand buyers underwrite to.` },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my healthcare business in ${c.name}?`, a: `Selling a healthcare business in ${c.name} requires careful regulatory compliance, payor-mix documentation, provider-contract review, and patient-transition planning. CBH runs the process under HIPAA-compliant data rooms and connects you with healthcare-focused acquirers active across ${c.stateRegion}.` },
      { q: `What are healthcare business multiples in ${c.name}?`, a: `Healthcare businesses in ${c.name} valued $3M\u2013$50M typically trade at 5x\u20139x adjusted EBITDA. ${c.industryNotes?.["Healthcare"] ?? `Multi-location practices, specialty services, and strong commercial-payor mixes drive the highest valuations.`}` },
      { q: `Why are ${c.name} healthcare practices in demand?`, a: `${c.growthNote} On the clinical side, ${c.demographic}, and proximity to ${anchorPhrase(c)} make ${c.name} practices attractive to PE-backed MSOs and health systems. ${c.buyerNote}` },
    ],
    heroDesc: (c) => `Healthcare M&A in ${c.name} requires specialized expertise \u2014 from Florida regulatory compliance and payor-mix analysis to provider retention. ${c.industryNotes?.["Healthcare"] ?? `Practices serving ${neighborhoodPhrase(c)} consistently draw interest from national MSOs and PE-backed platforms.`} CBH Business Group helps ${c.name} healthcare owners navigate complex transactions while maximizing value and continuity of care.`,
  },
  {
    key: "manufacturing", name: "Manufacturing", slugPrefix: "sell-manufacturing-company",
    multipleRange: "4x\u20137x", statePageLink: "/sell-manufacturing-company-florida",
    baseFeatures: [
      { title: "Equipment & Asset Valuation", desc: (c) => `Comprehensive assessment of machinery, tooling, and real estate across ${c.name}'s industrial corridors.` },
      { title: "Customer Concentration", desc: () => "Strategies to mitigate customer concentration risk and maximize buyer confidence." },
      { title: "Supply Chain Positioning", desc: (c) => `Highlighting logistics advantages tied to ${anchorPhrase(c)}.` },
      { title: "Workforce Analysis", desc: () => "Documenting skilled labor, certifications, and training programs that drive value." },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my manufacturing company in ${c.name}?`, a: `Selling a manufacturing company in ${c.name} involves equipment valuation, customer-contract documentation, capacity analysis, and owner-expense normalization. CBH positions your capabilities, ${c.name}'s logistics advantages, and growth potential to strategic and PE buyers active in ${c.stateRegion}.` },
      { q: `What are manufacturing multiples in ${c.name}?`, a: `Manufacturing companies in ${c.name} valued $3M\u2013$50M typically trade at 4x\u20137x adjusted EBITDA. ${c.industryNotes?.["Manufacturing"] ?? `Companies with proprietary products, diverse customers, modern equipment, and strong margins command the top of the range.`}` },
      { q: `What makes ${c.name} attractive for manufacturing M&A?`, a: `${c.growthNote} For manufacturing specifically, ${anchorPhrase(c)} provides logistics advantages and ${c.demographic} supplies the workforce. ${c.buyerNote}` },
    ],
    heroDesc: (c) => `${c.industryNotes?.["Manufacturing"] ?? `Manufacturing M&A in ${c.name} demands expertise in equipment valuation, customer-contract analysis, and supply-chain positioning around ${anchorPhrase(c)}.`} CBH Business Group helps ${c.name} manufacturing owners achieve premium exits by connecting them with strategic acquirers and PE platforms actively consolidating the sector.`,
  },
  {
    key: "technology", name: "Technology", slugPrefix: "sell-technology-company",
    multipleRange: "5x\u201310x", statePageLink: "/sell-technology-company-florida",
    baseFeatures: [
      { title: "Recurring Revenue Focus", desc: (c) => `Expert valuation of SaaS, managed services, and subscription revenue for ${c.name}-based platforms.` },
      { title: "IP & Product Assessment", desc: () => "Documenting intellectual property, proprietary technology, and competitive moats." },
      { title: "Team & Talent", desc: (c) => `Positioning your ${c.name} engineering team \u2014 supported by ${anchorPhrase(c)} \u2014 as a key acquisition driver.` },
      { title: "Growth Metrics", desc: () => "Highlighting ARR, net retention, and unit economics that tech buyers prioritize." },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my technology company in ${c.name}?`, a: `Selling a tech company in ${c.name} means documenting recurring revenue metrics, IP, retention, and growth trajectory. CBH positions your tech assets and ARR profile to strategic buyers and PE firms active in ${c.stateRegion}.` },
      { q: `What are tech multiples in ${c.name}?`, a: `Tech companies in ${c.name} valued $3M\u2013$50M typically trade at 5x\u201310x adjusted EBITDA, with SaaS often valued on revenue multiples. ${c.industryNotes?.["Technology"] ?? `Strong net retention, ARR growth, and low churn command the top of the range.`}` },
      { q: `Why is ${c.name} a growing tech M&A market?`, a: `${c.growthNote} For tech specifically, ${anchorPhrase(c)} and ${c.demographic} are accelerating the talent pool. ${c.buyerNote}` },
    ],
    heroDesc: (c) => `${c.industryNotes?.["Technology"] ?? `${c.name}'s tech sector is maturing fast, supported by ${anchorPhrase(c)} and a deepening engineering talent pool.`} CBH Business Group helps ${c.name} tech owners navigate complex valuations and connect with the right strategic and financial buyers.`,
  },
  {
    key: "professional-services", name: "Professional Services", slugPrefix: "sell-professional-services-firm",
    multipleRange: "3x\u20136x", statePageLink: "/sell-professional-services-firm-florida",
    baseFeatures: [
      { title: "Client Transition Planning", desc: (c) => `Structured handoff strategies that protect client relationships across ${neighborhoodPhrase(c)}.` },
      { title: "Revenue Per Professional", desc: () => "Benchmarking productivity metrics against industry standards to demonstrate value." },
      { title: "Key Person Risk", desc: (c) => `Mitigating owner-dependence to maximize buyer confidence in the ${c.name} market.` },
      { title: "Recurring Engagement Value", desc: () => "Highlighting retainer-based and recurring client engagements." },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my professional services firm in ${c.name}?`, a: `Selling a professional services firm in ${c.name} requires demonstrating transferable client relationships, team capability, and post-transition revenue sustainability. CBH positions your recurring engagements and team depth to acquirers focused on ${c.stateRegion}.` },
      { q: `What are professional services multiples in ${c.name}?`, a: `Professional services firms in ${c.name} valued $3M\u2013$50M typically trade at 3x\u20136x adjusted EBITDA. ${c.industryNotes?.["Professional Services"] ?? `Firms with diversified clients, deep benches beyond the owner, and recurring engagements command premium valuations.`}` },
      { q: `What drives value in a ${c.name} professional services firm?`, a: `${c.growthNote} ${c.industryNotes?.["Professional Services"] ?? `Buyers reward predictable recurring revenue, low client concentration, and strong retention \u2014 all reinforced by ${anchorPhrase(c)}.`} ${c.buyerNote}` },
    ],
    heroDesc: (c) => `${c.industryNotes?.["Professional Services"] ?? `Professional services M&A in ${c.name} hinges on demonstrating transferable value \u2014 client relationships across ${neighborhoodPhrase(c)}, team depth, and recurring engagements.`} CBH Business Group helps ${c.name} firms position their practices for premium exits with strategic buyers and PE-backed platforms.`,
  },
  {
    key: "restaurant", name: "Restaurant", slugPrefix: "sell-restaurant",
    multipleRange: "3x\u20135x", statePageLink: "/sell-restaurant-florida",
    baseFeatures: [
      { title: "Multi-Unit Positioning", desc: (c) => `Positioning multi-location restaurant groups across ${neighborhoodPhrase(c)} for franchise and PE buyers.` },
      { title: "Real Estate Analysis", desc: () => "Separating real estate value from operating business value for optimal deal structure." },
      { title: "Brand & Concept Value", desc: (c) => `Documenting brand equity, concept differentiation, and market position in the ${c.name} dining scene.` },
      { title: "Management Team", desc: () => "Highlighting operational management depth that enables hands-off ownership." },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my restaurant business in ${c.name}?`, a: `Selling a restaurant in ${c.name} involves documenting normalized cash flow, lease terms, management depth, and brand value. CBH positions your concept to multi-unit operators, franchise groups, and hospitality investors active in ${c.stateRegion}.` },
      { q: `What are restaurant multiples in ${c.name}?`, a: `Restaurant businesses in ${c.name} valued $3M\u2013$50M typically trade at 3x\u20135x adjusted EBITDA. ${c.industryNotes?.["Restaurant"] ?? `Multi-unit concepts with strong management, proven unit economics, and growth runway command the top of the range.`}` },
      { q: `What makes a ${c.name} restaurant group attractive?`, a: `${c.growthNote} ${c.industryNotes?.["Restaurant"] ?? `Buyers value brand recognition, profitable units across ${neighborhoodPhrase(c)}, experienced management, and favorable leases.`} ${c.buyerNote}` },
    ],
    heroDesc: (c) => `${c.industryNotes?.["Restaurant"] ?? `${c.name}'s dining scene across ${neighborhoodPhrase(c)} makes it a prime market for restaurant M&A.`} CBH Business Group helps ${c.name} restaurant owners achieve premium valuations by positioning brand equity, management depth, and unit economics for sophisticated buyers.`,
  },
  {
    key: "insurance", name: "Insurance", slugPrefix: "sell-insurance-company",
    multipleRange: "6x\u201310x", statePageLink: "/sell-insurance-company-florida",
    baseFeatures: [
      { title: "Book of Business Valuation", desc: (c) => `Expert assessment of commission revenue, retention rates, and carrier mix for the ${c.name} market.` },
      { title: "Carrier Transfer Support", desc: () => "Guidance on carrier consent, appointment transfers, and contingency considerations." },
      { title: "Producer Retention", desc: (c) => `Confidential strategies to retain producers and staff serving ${neighborhoodPhrase(c)} through close.` },
      { title: "PE Aggregator Access", desc: (c) => `Direct relationships with PE-backed insurance aggregators acquiring across ${c.stateRegion}.` },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my insurance agency in ${c.name}?`, a: `Selling an insurance agency in ${c.name} involves documenting your book of business, commission revenue, retention, carrier relationships, and producer team. CBH positions your recurring revenue and growth to PE-backed aggregators and strategic buyers active in ${c.stateRegion}.` },
      { q: `What are insurance agency multiples in ${c.name}?`, a: `Insurance agencies in ${c.name} valued $3M\u2013$50M typically trade at 6x\u201310x adjusted EBITDA or 1.5x\u20133x annual revenue. ${c.industryNotes?.["Insurance"] ?? `Agencies with high retention, commercial-lines focus, and diversified carriers command the top end.`}` },
      { q: `Why is ${c.name} a strong market for insurance agency M&A?`, a: `${c.growthNote} For insurance specifically, Florida's coastal exposure and ${c.demographic} drive durable premium volume. ${c.buyerNote}` },
    ],
    heroDesc: (c) => `${c.industryNotes?.["Insurance"] ?? `${c.name}'s growing population and Florida's unique coastal insurance landscape make it a prime market for agency M&A.`} CBH Business Group helps ${c.name} agency owners maximize value by positioning book quality, retention, and producer depth for PE-backed aggregators and strategic buyers.`,
  },
  {
    key: "lawncare", name: "Lawncare", slugPrefix: "sell-lawncare-business",
    multipleRange: "3x\u20135x", statePageLink: "/sell-lawncare-business-florida",
    baseFeatures: [
      { title: "Recurring Contract Valuation", desc: (c) => `Expert assessment of monthly maintenance contracts and recurring revenue across ${neighborhoodPhrase(c)}.` },
      { title: "Route Optimization Analysis", desc: (c) => `Highlighting route density and service efficiency in the ${c.name} market.` },
      { title: "Crew & Equipment Review", desc: () => "Comprehensive evaluation of crew capabilities, training, and equipment assets." },
      { title: "Year-Round Revenue", desc: (c) => `${c.name}'s climate supports 12-month mowing and treatment schedules that buyers underwrite to.` },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my lawncare business in ${c.name}?`, a: `Selling a lawncare business in ${c.name} involves documenting recurring service contracts, route efficiency, crew capabilities, and equipment. CBH positions your route density and recurring revenue to PE-backed consolidators and strategic acquirers active in ${c.stateRegion}.` },
      { q: `What are lawncare multiples in ${c.name}?`, a: `Lawncare businesses in ${c.name} valued $3M\u2013$50M typically trade at 3x\u20135x adjusted EBITDA. ${c.industryNotes?.["Lawncare"] ?? `High-retention recurring contracts, efficient routes, and a balanced residential/commercial mix command premium valuations.`}` },
      { q: `Why is ${c.name} a strong lawncare M&A market?`, a: `${c.growthNote} ${c.industryNotes?.["Lawncare"] ?? `${c.name}'s year-round growing season and ${c.demographic} make route density and recurring revenue exceptionally attractive to consolidators.`} ${c.buyerNote}` },
    ],
    heroDesc: (c) => `${c.industryNotes?.["Lawncare"] ?? `Year-round growth and population pressure across ${neighborhoodPhrase(c)} make ${c.name} one of Florida's strongest markets for lawncare M&A.`} CBH Business Group helps ${c.name} lawncare owners maximize value by positioning recurring contracts, route density, and crew depth for PE-backed buyers.`,
  },
  {
    key: "landscaping", name: "Landscaping", slugPrefix: "sell-landscaping-business",
    multipleRange: "3.5x\u20136x", statePageLink: "/sell-landscaping-business-florida",
    baseFeatures: [
      { title: "Contract Revenue Value", desc: (c) => `Expert valuation of maintenance contracts and recurring service agreements across ${neighborhoodPhrase(c)}.` },
      { title: "Fleet & Equipment", desc: () => "Comprehensive assessment of vehicles, equipment, and capital assets." },
      { title: "Route Density", desc: (c) => `Highlighting route efficiency and market penetration in the ${c.name} market.` },
      { title: "Year-Round Revenue", desc: (c) => `${c.name}'s climate supports 12-month revenue streams that buyers value highly.` },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my landscaping business in ${c.name}?`, a: `Selling a landscaping business in ${c.name} involves documenting maintenance contracts, equipment, crew capabilities, and route efficiency. CBH positions your recurring revenue to PE-backed consolidators and strategic acquirers active in ${c.stateRegion}.` },
      { q: `What are landscaping multiples in ${c.name}?`, a: `Landscaping businesses in ${c.name} valued $3M\u2013$50M typically trade at 3.5x\u20136x adjusted EBITDA. ${c.industryNotes?.["Landscaping"] ?? `Companies with strong commercial maintenance contracts, efficient routing, and diversified services command premium valuations.`}` },
      { q: `Why are ${c.name} landscaping firms attractive to buyers?`, a: `${c.growthNote} ${c.industryNotes?.["Landscaping"] ?? `Year-round growing season plus ${c.demographic} produce consistent, scalable revenue PE platforms are aggressively acquiring.`} ${c.buyerNote}` },
    ],
    heroDesc: (c) => `${c.industryNotes?.["Landscaping"] ?? `Year-round demand and population growth across ${neighborhoodPhrase(c)} make ${c.name} one of Florida's strongest landscaping M&A markets.`} CBH Business Group helps ${c.name} landscaping owners maximize value by positioning maintenance contracts, route density, and equipment for aggressive buyers.`,
  },
  {
    key: "title-company", name: "Title Company", slugPrefix: "sell-title-company",
    multipleRange: "4x\u20138x", statePageLink: "/sell-title-company-florida",
    baseFeatures: [
      { title: "File & Revenue Analysis", desc: (c) => `Expert valuation of order volume, fee structure, and revenue mix in the ${c.name} market.` },
      { title: "Underwriter Relationships", desc: () => "Guidance on title underwriter agreements, agency contracts, and transition requirements." },
      { title: "Escrow Operations Review", desc: (c) => `Assessment of escrow trust accounting, compliance history, and operational efficiency in ${c.name}.` },
      { title: "Real Estate Market Leverage", desc: (c) => `${c.name}'s active real estate market \u2014 supported by ${anchorPhrase(c)} \u2014 drives strong title order volume.` },
    ],
    baseFaqs: (c) => [
      { q: `How do I sell my title company in ${c.name}?`, a: `Selling a title company in ${c.name} involves documenting order volume, revenue per file, escrow operations, underwriter relationships, and referral network. CBH positions your recurring revenue and market position to strategic acquirers and PE-backed consolidators active in ${c.stateRegion}.` },
      { q: `What are title company multiples in ${c.name}?`, a: `Title companies in ${c.name} valued $3M\u2013$50M typically trade at 4x\u20138x adjusted EBITDA. Companies with diversified referral sources, strong escrow compliance, and commercial title capabilities command the highest multiples.` },
      { q: `Why is ${c.name} a strong title-company M&A market?`, a: `${c.growthNote} For title specifically, transaction volume across ${neighborhoodPhrase(c)} and Florida's attorney-optional closing environment attract national underwriters and PE-backed platforms. ${c.buyerNote}` },
    ],
    heroDesc: (c) => `${c.name}'s real estate market \u2014 supported by ${anchorPhrase(c)} \u2014 makes it a prime location for title company acquisitions. CBH Business Group helps ${c.name} title company owners maximize value by positioning order volume, escrow operations, and referral networks for strategic buyers and PE-backed consolidators.`,
  },
];

export function generateAllIndustryCityPages(): IndustryCityData[] {
  const pages: IndustryCityData[] = [];

  for (const industry of industries) {
    for (const city of cities) {
      const slug = `${industry.slugPrefix}-${city.key}`;
      const article = industry.name === "HVAC" ? "an" : "a";
      const suffix = industry.name === "Restaurant" ? "Business" : "Company";
      const displayName = industry.name === "Title Company" ? "Title Company" : `${industry.name} ${suffix}`;

      pages.push({
        slug,
        industry: industry.name,
        city: city.name,
        title: `Sell ${article} ${displayName} in ${city.name}`,
        metaTitle: `Sell ${article} ${displayName} in ${city.name}, FL | CBH M&A Advisory`,
        metaDescription: `M&A advisory for ${industry.name.toLowerCase()} businesses in ${city.name}, Florida. ${city.growthNote.split(".")[0]}. Confidential valuations, strategic buyers, premium exits for $3M\u2013$50M companies.`,
        heroLabel: `${industry.name} M&A \u2014 ${city.name}`,
        heroHeading: `Sell Your ${displayName} in ${city.name}`,
        heroDescription: industry.heroDesc(city),
        whyChooseHeading: `Why ${city.name} ${industry.name} Owners Choose CBH`,
        features: industry.baseFeatures.map((f) => ({ title: f.title, desc: f.desc(city) })),
        faqs: industry.baseFaqs(city),
        multipleRange: industry.multipleRange,
        relatedLinks: [
          { to: industry.statePageLink, title: `${industry.name} M&A \u2014 Florida`, subtitle: "Statewide advisory" },
          { to: `/sell-business-${city.key}`, title: `Sell a Business in ${city.name}`, subtitle: "All industries" },
          { to: "/business-valuation", title: "Business Valuation", subtitle: "EBITDA analysis & multiples" },
        ],
      });
    }
  }

  return pages;
}

export const industryCityPages = generateAllIndustryCityPages();

export function getIndustryCityPage(slug: string): IndustryCityData | undefined {
  return industryCityPages.find((p) => p.slug === slug);
}

export const allCityKeys = cities.map((c) => c.key);
export const allCityNames = cities.map((c) => ({ key: c.key, name: c.name, region: c.stateRegion }));
