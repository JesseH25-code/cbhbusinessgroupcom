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

const industries = [
  {
    key: "hvac",
    name: "HVAC",
    slugPrefix: "sell-hvac-company",
    multipleRange: "4x–7x",
    statePageLink: "/sell-hvac-company-florida",
    features: (city: string) => [
      { title: "Service Agreement Valuation", desc: `Proper weighting of recurring maintenance revenue in the ${city} market.` },
      { title: "Technician Retention", desc: "Confidential process that protects your team throughout the transaction." },
      { title: "PE Platform Access", desc: `Direct relationships with PE-backed HVAC consolidators acquiring in ${city}.` },
      { title: "Climate-Driven Demand", desc: `${city}'s year-round cooling needs support premium HVAC valuations.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my HVAC company in ${city}?`, a: `Selling an HVAC company in ${city} involves documenting your service agreement base, technician roster, equipment fleet, and financial performance. An M&A advisor will normalize your EBITDA, highlight recurring revenue, and position your company for PE-backed consolidators active in the ${city} market.` },
      { q: `What are HVAC valuation multiples in ${city}?`, a: `HVAC companies in ${city} valued $3M–$50M typically trade at 4x–7x adjusted EBITDA. Companies with strong residential and commercial service agreement bases, certified technicians, and growing maintenance revenue command the highest multiples.` },
      { q: `Why is ${city} a strong market for HVAC M&A?`, a: `${city}'s climate drives year-round demand for HVAC services. Combined with population growth and construction activity, the market creates consistent revenue streams that attract private equity consolidators and strategic buyers.` },
    ],
    heroDesc: (city: string) => `${city}'s climate makes HVAC an essential service — and one of the most active M&A sectors in the region. CBH Business Group helps HVAC owners in ${city} maximize value by positioning service agreements, technician teams, and growth metrics for today's aggressive buyer market.`,
  },
  {
    key: "construction",
    name: "Construction",
    slugPrefix: "sell-construction-company",
    multipleRange: "3.5x–6x",
    statePageLink: "/sell-construction-company-florida",
    features: (city: string) => [
      { title: "Backlog Analysis", desc: `Expert valuation of your project pipeline and contracted revenue in ${city}.` },
      { title: "License & Bond Transfer", desc: "Guidance on transferring contractor licenses, bonds, and insurance to buyers." },
      { title: "Subcontractor Relationships", desc: `Positioning your established ${city} subcontractor network as a key value driver.` },
      { title: "Growth Market Positioning", desc: `${city}'s construction boom makes your company attractive to national acquirers.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my construction company in ${city}?`, a: `Selling a construction company in ${city} requires documenting your project backlog, bonding capacity, key client relationships, and equipment assets. An M&A advisor will help normalize earnings, account for project-based revenue cycles, and connect you with strategic and financial buyers.` },
      { q: `What are construction company multiples in ${city}?`, a: `Construction companies in ${city} valued $3M–$50M typically trade at 3.5x–6x adjusted EBITDA. Specialty contractors with recurring commercial clients, strong safety records, and diversified revenue streams command premium valuations.` },
      { q: `What makes a ${city} construction company attractive to buyers?`, a: `Buyers value established relationships with general contractors and developers, a skilled labor force, active bonding capacity, diversified project types, and a strong safety record. ${city}'s growing infrastructure and development pipeline makes local firms especially attractive.` },
    ],
    heroDesc: (city: string) => `${city}'s construction market is booming — and acquirers are actively seeking established firms with strong backlogs, skilled crews, and bonding capacity. CBH Business Group helps construction company owners in ${city} achieve premium exits through strategic positioning and targeted buyer outreach.`,
  },
  {
    key: "healthcare",
    name: "Healthcare",
    slugPrefix: "sell-healthcare-business",
    multipleRange: "5x–9x",
    statePageLink: "/sell-healthcare-business-florida",
    features: (city: string) => [
      { title: "Regulatory Compliance", desc: `Navigate healthcare licensing and compliance requirements for ${city} transactions.` },
      { title: "Payor Mix Analysis", desc: "Expert assessment of insurance contracts, Medicare/Medicaid reimbursement, and private pay revenue." },
      { title: "Provider Retention", desc: `Confidential strategies to retain key providers and staff in ${city} throughout the sale.` },
      { title: "Demographic Tailwinds", desc: `${city}'s aging population creates long-term demand that buyers value highly.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my healthcare business in ${city}?`, a: `Selling a healthcare business in ${city} involves careful attention to regulatory compliance, provider contracts, payor mix documentation, and patient transition planning. An experienced M&A advisor ensures HIPAA compliance throughout the process and connects you with qualified healthcare acquirers.` },
      { q: `What are healthcare business multiples in ${city}?`, a: `Healthcare businesses in ${city} valued $3M–$50M typically trade at 5x–9x adjusted EBITDA. Multi-location practices, specialty services, and strong payor mixes with commercial insurance drive the highest valuations.` },
      { q: `Why are healthcare businesses in ${city} in high demand?`, a: `${city}'s growing and aging population drives increasing demand for healthcare services. Combined with Florida's favorable regulatory environment and strong reimbursement rates, healthcare businesses in ${city} attract both strategic health systems and private equity platforms.` },
    ],
    heroDesc: (city: string) => `Healthcare M&A in ${city} requires specialized expertise — from regulatory compliance and payor mix analysis to provider retention strategies. CBH Business Group helps healthcare business owners in ${city} navigate complex transactions while maximizing value and ensuring continuity of care.`,
  },
  {
    key: "manufacturing",
    name: "Manufacturing",
    slugPrefix: "sell-manufacturing-company",
    multipleRange: "4x–7x",
    statePageLink: "/sell-manufacturing-company-florida",
    features: (city: string) => [
      { title: "Equipment & Asset Valuation", desc: `Comprehensive assessment of machinery, tooling, and real estate in ${city}.` },
      { title: "Customer Concentration", desc: "Strategies to mitigate customer concentration risk and maximize buyer confidence." },
      { title: "Supply Chain Positioning", desc: `Highlighting your ${city} location advantages for logistics and distribution.` },
      { title: "Workforce Analysis", desc: `Documenting skilled labor, certifications, and training programs that drive value.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my manufacturing company in ${city}?`, a: `Selling a manufacturing company in ${city} involves valuing equipment, documenting customer contracts, analyzing production capacity, and normalizing owner-related expenses. An M&A advisor will position your company's capabilities, location advantages, and growth potential to attract strategic and PE buyers.` },
      { q: `What are manufacturing company multiples in ${city}?`, a: `Manufacturing companies in ${city} valued $3M–$50M typically trade at 4x–7x adjusted EBITDA. Companies with proprietary products, diverse customer bases, modern equipment, and strong margins command premium valuations.` },
      { q: `What makes ${city} attractive for manufacturing M&A?`, a: `${city}'s strategic location, port access, growing workforce, and business-friendly environment make it an attractive base for manufacturers. Buyers value the logistics advantages and lower operating costs compared to northeast markets.` },
    ],
    heroDesc: (city: string) => `Manufacturing M&A in ${city} demands expertise in equipment valuation, customer contract analysis, and supply chain positioning. CBH Business Group helps manufacturing owners in ${city} achieve premium exits by connecting them with strategic acquirers and PE platforms actively consolidating the sector.`,
  },
  {
    key: "technology",
    name: "Technology",
    slugPrefix: "sell-technology-company",
    multipleRange: "5x–10x",
    statePageLink: "/sell-technology-company-florida",
    features: (city: string) => [
      { title: "Recurring Revenue Focus", desc: `Expert valuation of SaaS, managed services, and subscription revenue in ${city}.` },
      { title: "IP & Product Assessment", desc: "Documenting intellectual property, proprietary technology, and competitive moats." },
      { title: "Team & Talent", desc: `Positioning your ${city} engineering and development team as a key acquisition driver.` },
      { title: "Growth Metrics", desc: `Highlighting ARR, net retention, and unit economics that tech buyers prioritize.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my technology company in ${city}?`, a: `Selling a tech company in ${city} involves documenting recurring revenue metrics, intellectual property, customer retention rates, and growth trajectory. An M&A advisor will position your company's technology assets and recurring revenue to maximize valuations from strategic buyers and PE firms.` },
      { q: `What are technology company multiples in ${city}?`, a: `Tech companies in ${city} valued $3M–$50M typically trade at 5x–10x adjusted EBITDA, with SaaS businesses often valued on revenue multiples. High net revenue retention, strong ARR growth, and low churn command the highest valuations.` },
      { q: `Why is ${city} a growing tech M&A market?`, a: `${city}'s expanding tech ecosystem, lower cost of living compared to Silicon Valley, no state income tax, and growing talent pool make it increasingly attractive for tech companies and acquirers alike. Remote work trends have further accelerated this shift.` },
    ],
    heroDesc: (city: string) => `${city}'s tech sector is maturing — and acquirers are actively seeking established technology companies with recurring revenue, strong IP, and talented teams. CBH Business Group helps tech owners in ${city} navigate complex valuations and connect with the right strategic and financial buyers.`,
  },
  {
    key: "professional-services",
    name: "Professional Services",
    slugPrefix: "sell-professional-services-firm",
    multipleRange: "3x–6x",
    statePageLink: "/sell-professional-services-firm-florida",
    features: (city: string) => [
      { title: "Client Transition Planning", desc: `Structured handoff strategies that protect client relationships in ${city}.` },
      { title: "Revenue Per Professional", desc: "Benchmarking productivity metrics against industry standards to demonstrate value." },
      { title: "Key Person Risk", desc: `Mitigating owner-dependence to maximize buyer confidence in ${city}.` },
      { title: "Recurring Engagement Value", desc: `Highlighting retainer-based and recurring client engagements.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my professional services firm in ${city}?`, a: `Selling a professional services firm in ${city} requires demonstrating transferable client relationships, documenting team capabilities, and proving revenue sustainability post-transition. An M&A advisor helps position your firm's recurring engagements and team depth to attract acquirers.` },
      { q: `What are professional services firm multiples in ${city}?`, a: `Professional services firms in ${city} valued $3M–$50M typically trade at 3x–6x adjusted EBITDA. Firms with diversified client bases, strong team depth beyond the owner, and recurring engagement models command premium valuations.` },
      { q: `What drives value in a ${city} professional services firm?`, a: `Buyers look for predictable recurring revenue, low client concentration, a deep bench of professionals, documented processes, and strong client retention rates. Firms in ${city} benefit from Florida's growing business community and demand for professional services.` },
    ],
    heroDesc: (city: string) => `Professional services M&A in ${city} hinges on demonstrating transferable value — client relationships, team depth, and recurring engagements. CBH Business Group helps professional services firm owners in ${city} position their practices for premium exits with strategic buyers and PE-backed platforms.`,
  },
  {
    key: "restaurant",
    name: "Restaurant",
    slugPrefix: "sell-restaurant",
    multipleRange: "3x–5x",
    statePageLink: "/sell-restaurant-florida",
    features: (city: string) => [
      { title: "Multi-Unit Positioning", desc: `Positioning multi-location restaurant groups in ${city} for franchise and PE buyers.` },
      { title: "Real Estate Analysis", desc: "Separating real estate value from operating business value for optimal deal structure." },
      { title: "Brand & Concept Value", desc: `Documenting brand equity, concept differentiation, and market position in ${city}.` },
      { title: "Management Team", desc: `Highlighting operational management depth that enables hands-off ownership.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my restaurant business in ${city}?`, a: `Selling a restaurant in ${city} involves documenting normalized cash flow, lease terms, management depth, brand value, and growth potential. An M&A advisor helps position your concept and operations to attract multi-unit operators, franchise groups, and hospitality-focused investors.` },
      { q: `What are restaurant valuation multiples in ${city}?`, a: `Restaurant businesses in ${city} valued $3M–$50M typically trade at 3x–5x adjusted EBITDA. Multi-unit concepts with strong management, proven unit economics, and growth runway command the highest valuations.` },
      { q: `What makes a ${city} restaurant group attractive to buyers?`, a: `Buyers value strong brand recognition, multiple profitable locations, experienced management teams, favorable lease terms, and scalable concepts. ${city}'s tourism industry and growing population create strong demand drivers.` },
    ],
    heroDesc: (city: string) => `${city}'s vibrant food scene and growing population make it a prime market for restaurant M&A. CBH Business Group helps restaurant owners in ${city} achieve premium valuations by positioning brand equity, management depth, and unit economics for sophisticated buyers.`,
  },
  {
    key: "insurance",
    name: "Insurance",
    slugPrefix: "sell-insurance-company",
    multipleRange: "6x–10x",
    statePageLink: "/sell-insurance-company-florida",
    features: (city: string) => [
      { title: "Book of Business Valuation", desc: `Expert assessment of your commission revenue, retention rates, and carrier mix in ${city}.` },
      { title: "Carrier Transfer Support", desc: "Guidance on carrier consent, appointment transfers, and contingency considerations." },
      { title: "Producer Retention", desc: `Confidential strategies to retain key producers and staff in ${city} throughout the sale.` },
      { title: "PE Aggregator Access", desc: `Direct relationships with PE-backed insurance aggregators actively acquiring in ${city}.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my insurance agency in ${city}?`, a: `Selling an insurance agency in ${city} involves documenting your book of business, commission revenue, retention rates, carrier relationships, and producer team. An M&A advisor will position your agency's recurring revenue and growth metrics to attract PE-backed aggregators and strategic buyers active in the ${city} market.` },
      { q: `What are insurance agency multiples in ${city}?`, a: `Insurance agencies in ${city} valued $3M–$50M typically trade at 6x–10x adjusted EBITDA or 1.5x–3x annual revenue. Agencies with high retention, commercial lines focus, and diversified carrier relationships command the highest multiples.` },
      { q: `Why is ${city} a strong market for insurance agency M&A?`, a: `${city}'s growing population, hurricane exposure, and robust commercial sector create strong demand for insurance services. Combined with Florida's unique coverage requirements, agencies in ${city} attract significant buyer interest from national aggregators and strategic acquirers.` },
    ],
    heroDesc: (city: string) => `${city}'s growing population and unique insurance landscape make it a prime market for agency M&A. CBH Business Group helps insurance agency owners in ${city} maximize value by positioning book quality, retention rates, and producer depth for PE-backed aggregators and strategic buyers.`,
  },
  {
    key: "lawncare",
    name: "Lawncare",
    slugPrefix: "sell-lawncare-business",
    multipleRange: "3x–5x",
    statePageLink: "/sell-lawncare-business-florida",
    features: (city: string) => [
      { title: "Recurring Contract Valuation", desc: `Expert assessment of monthly maintenance contracts and recurring revenue in ${city}.` },
      { title: "Route Optimization Analysis", desc: `Highlighting geographic route density and service efficiency in ${city}.` },
      { title: "Crew & Equipment Review", desc: "Comprehensive evaluation of crew capabilities, training programs, and equipment assets." },
      { title: "Year-Round Revenue", desc: `${city}'s climate supports 12-month mowing and treatment schedules that buyers value highly.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my lawncare business in ${city}?`, a: `Selling a lawncare business in ${city} involves documenting recurring service contracts, route efficiency, crew capabilities, and equipment assets. An M&A advisor will position your recurring revenue and route density to attract PE-backed consolidators and strategic acquirers active in the ${city} market.` },
      { q: `What are lawncare business multiples in ${city}?`, a: `Lawncare businesses in ${city} valued $3M–$50M typically trade at 3x–5x adjusted EBITDA. Companies with high-retention recurring contracts, efficient routes, and diversified residential/commercial mix command premium valuations.` },
      { q: `Why is ${city} a strong market for lawncare M&A?`, a: `${city}'s year-round growing season eliminates seasonal revenue gaps common in northern markets. Combined with population growth and HOA-driven demand, lawncare businesses in ${city} offer consistent, scalable revenue that PE platforms are actively acquiring.` },
    ],
    heroDesc: (city: string) => `Year-round demand and population growth make ${city} one of Florida's strongest markets for lawncare M&A. CBH Business Group helps lawncare business owners in ${city} maximize value by positioning recurring contracts, route density, and crew depth for aggressive PE-backed buyers.`,
  },
  {
    key: "landscaping",
    name: "Landscaping",
    slugPrefix: "sell-landscaping-business",
    multipleRange: "3.5x–6x",
    statePageLink: "/sell-landscaping-business-florida",
    features: (city: string) => [
      { title: "Contract Revenue Value", desc: `Expert valuation of maintenance contracts and recurring service agreements in ${city}.` },
      { title: "Fleet & Equipment", desc: "Comprehensive assessment of vehicles, equipment, and capital assets." },
      { title: "Route Density", desc: `Highlighting geographic route efficiency and market penetration in ${city}.` },
      { title: "Year-Round Revenue", desc: `${city}'s climate supports 12-month revenue streams that buyers value highly.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my landscaping business in ${city}?`, a: `Selling a landscaping business in ${city} involves documenting maintenance contracts, equipment assets, crew capabilities, and route efficiency. An M&A advisor will highlight your recurring revenue base and growth potential to attract PE-backed consolidators and strategic acquirers.` },
      { q: `What are landscaping business multiples in ${city}?`, a: `Landscaping businesses in ${city} valued $3M–$50M typically trade at 3.5x–6x adjusted EBITDA. Companies with strong commercial maintenance contracts, efficient routing, and diversified services command premium valuations.` },
      { q: `Why are landscaping businesses in ${city} attractive to buyers?`, a: `${city}'s year-round growing season eliminates seasonal revenue dips common in northern markets. Combined with population growth and commercial development, landscaping businesses in ${city} offer consistent, scalable revenue that private equity platforms are actively acquiring.` },
    ],
    heroDesc: (city: string) => `Year-round demand and population growth make ${city} one of Florida's strongest markets for landscaping M&A. CBH Business Group helps landscaping business owners in ${city} maximize value by positioning maintenance contracts, route density, and equipment assets for aggressive buyers.`,
  },
  {
    key: "title-company",
    name: "Title Company",
    slugPrefix: "sell-title-company",
    multipleRange: "4x–8x",
    statePageLink: "/sell-title-company-florida",
    features: (city: string) => [
      { title: "File & Revenue Analysis", desc: `Expert valuation of your title order volume, fee structure, and revenue mix in ${city}.` },
      { title: "Underwriter Relationships", desc: "Guidance on title underwriter agreements, agency contracts, and transition requirements." },
      { title: "Escrow Operations Review", desc: `Assessment of escrow trust accounting, compliance history, and operational efficiency in ${city}.` },
      { title: "Real Estate Market Leverage", desc: `${city}'s active real estate market drives strong title order volume that buyers value highly.` },
    ],
    faqs: (city: string) => [
      { q: `How do I sell my title company in ${city}?`, a: `Selling a title company in ${city} involves documenting your title order volume, revenue per file, escrow operations, underwriter relationships, and referral network. An M&A advisor will position your recurring revenue streams and market position to attract strategic acquirers and PE-backed consolidators active in the ${city} market.` },
      { q: `What are title company multiples in ${city}?`, a: `Title companies in ${city} valued $3M–$50M typically trade at 4x–8x adjusted EBITDA. Companies with diversified referral sources, strong escrow compliance records, and commercial title capabilities command the highest multiples.` },
      { q: `Why is ${city} a strong market for title company M&A?`, a: `${city}'s robust real estate transaction volume, population growth, and commercial development activity create consistent title order flow. Combined with Florida's attorney-optional closing environment, title companies in ${city} attract significant buyer interest from national underwriters and PE-backed platforms.` },
    ],
    heroDesc: (city: string) => `${city}'s thriving real estate market makes it a prime location for title company acquisitions. CBH Business Group helps title company owners in ${city} maximize value by positioning order volume, escrow operations, and referral networks for strategic buyers and PE-backed consolidators.`,
  },
];

const cities = [
  { key: "miami", name: "Miami", stateRegion: "South Florida" },
  { key: "tampa", name: "Tampa", stateRegion: "Tampa Bay" },
  { key: "orlando", name: "Orlando", stateRegion: "Central Florida" },
  { key: "jacksonville", name: "Jacksonville", stateRegion: "Northeast Florida" },
  { key: "fort-lauderdale", name: "Fort Lauderdale", stateRegion: "South Florida" },
];

export function generateAllIndustryCityPages(): IndustryCityData[] {
  const pages: IndustryCityData[] = [];

  for (const industry of industries) {
    for (const city of cities) {
      const slug = `${industry.slugPrefix}-${city.key}`;
      const article = ["HVAC"].includes(industry.name) ? "an" : "a";
      const suffix = ["Restaurant"].includes(industry.name) ? "Business" : "Company";
      const displayName = industry.name === "Title Company" ? "Title Company" : `${industry.name} ${suffix}`;
      pages.push({
        slug,
        industry: industry.name,
        city: city.name,
        title: `Sell ${article} ${displayName} in ${city.name}`,
        metaTitle: `Sell ${article} ${displayName} in ${city.name} | M&A Advisory`,
        metaDescription: `Expert M&A advisory for ${industry.name.toLowerCase()} businesses in ${city.name}, Florida. Confidential valuations, strategic buyer access, and premium exits for companies valued $3M–$50M.`,
        heroLabel: `${industry.name} M&A — ${city.name}`,
        heroHeading: `Sell Your ${displayName} in ${city.name}`,
        heroDescription: industry.heroDesc(city.name),
        whyChooseHeading: `Why ${city.name} ${industry.name} Owners Choose CBH`,
        features: industry.features(city.name),
        faqs: industry.faqs(city.name),
        multipleRange: industry.multipleRange,
        relatedLinks: [
          { to: industry.statePageLink, title: `${industry.name} M&A — Florida`, subtitle: "Statewide advisory" },
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
