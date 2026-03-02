import { useState } from "react";
import { ChevronDown } from "lucide-react";

const industries = [
  {
    name: "Manufacturing & Distribution",
    subSectors: [
      "Precision Machining", "Contract Manufacturing", "Industrial Equipment",
      "Automotive Suppliers", "Aerospace Components", "Food & Beverage Manufacturing",
      "Specialty Chemicals", "Wholesale Distribution", "Logistics & Supply Chain Companies",
      "Building Materials Distribution",
    ],
    positioning: "We advise founder-led and family-owned manufacturing and distribution companies on valuation optimization, operational normalization, and strategic buyer outreach across domestic and international markets.",
  },
  {
    name: "Healthcare Services",
    subSectors: [
      "Home Health & Hospice", "Behavioral Health Services", "Specialty Clinics",
      "Medical Billing & RCM", "Dental & Multi-Location Practices", "Physical Therapy Groups",
      "Senior Care Services", "Diagnostic & Imaging Centers", "Healthcare Staffing",
    ],
    positioning: "Healthcare transactions require regulatory awareness and disciplined financial presentation. We guide owners through structured sale processes tailored to strategic acquirers and private equity healthcare platforms.",
  },
  {
    name: "Business Services",
    subSectors: [
      "Commercial Landscaping", "HVAC & Plumbing Services", "Facility Maintenance",
      "Security & Fire Protection", "Staffing & Recruiting Firms", "Marketing Agencies",
      "IT Managed Services (MSPs)", "Janitorial Services", "Professional Consulting Firms",
    ],
    positioning: "Service businesses with recurring revenue and strong margins command premium valuations when properly positioned. We focus on EBITDA clarity and growth narrative.",
  },
  {
    name: "Technology & SaaS",
    subSectors: [
      "Vertical SaaS Platforms", "Recurring Revenue Software", "Cybersecurity Firms",
      "IT Services & Integrators", "Data Analytics Companies", "AI-Driven Platforms",
      "GovTech Solutions", "FinTech Platforms", "Subscription-Based Tech Services",
    ],
    positioning: "We help technology founders articulate scalable revenue models, customer retention metrics, and strategic buyer synergies to maximize valuation multiples.",
  },
  {
    name: "Industrial Services",
    subSectors: [
      "Field Services", "Environmental Services", "Infrastructure Maintenance",
      "Utility Contractors", "Oil & Gas Support Services", "Waste Management",
      "Equipment Rental Companies", "Specialty Contracting", "Engineering Services",
    ],
    positioning: "Industrial services businesses require clear backlog reporting, project margin visibility, and operational normalization to attract strategic and financial buyers.",
  },
  {
    name: "Consumer Products",
    subSectors: [
      "Branded CPG Companies", "E-Commerce Brands", "Private Label Manufacturing",
      "Food & Beverage Brands", "Direct-to-Consumer Businesses", "Subscription Product Companies",
      "Franchise Operators", "Specialty Retail Brands",
    ],
    positioning: "Consumer businesses benefit from strong brand positioning, channel diversification, and margin clarity during the transaction process.",
  },
  {
    name: "Construction & Engineering",
    subSectors: [
      "General Contractors", "Specialty Trade Contractors", "Civil Engineering Firms",
      "Commercial Construction", "Design-Build Firms", "Infrastructure Contractors",
      "Mechanical Contractors", "Electrical Contractors", "Development Firms",
    ],
    positioning: "We structure transactions around backlog, bonding capacity, and recurring project pipelines to properly represent enterprise value.",
  },
  {
    name: "Financial Services",
    subSectors: [
      "Insurance Agencies", "Wealth Management Firms", "RIA Practices",
      "Accounting Firms", "Payroll Services", "Lending Companies",
      "Specialty Finance Firms", "FinTech Service Providers",
    ],
    positioning: "Financial service transactions require confidentiality, compliance sensitivity, and buyer qualification discipline.",
  },
];

const IndustryExplorer = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-primary mb-3">Target Sectors</p>
        <h2 className="text-3xl font-serif text-foreground mb-4">Industries We Cover</h2>
        <p className="text-sm text-muted-foreground mb-12 max-w-2xl">
          CBH Business Group maintains deep sector fluency across the industries below. 
          We understand the valuation drivers, buyer landscape, and transaction dynamics specific to each.
        </p>

        {/* Desktop: Hover mega-menu */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-px bg-border">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className={`bg-card px-5 py-4 text-sm font-sans font-semibold tracking-wide cursor-pointer transition-colors duration-200 flex items-center justify-between ${
                    activeIndex === i
                      ? "text-primary bg-card"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{ind.name}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeIndex === i ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </div>

                {activeIndex === i && (
                  <div className="absolute top-full left-0 z-40 w-[680px] bg-card border border-border shadow-lg animate-fade-in"
                    style={{
                      // Keep panel within viewport
                      ...(i % 4 >= 2 ? { right: 0, left: "auto" } : {}),
                    }}
                  >
                    <div className="grid grid-cols-2 gap-0">
                      {/* Left: Sub-sectors */}
                      <div className="p-6 border-r border-border">
                        <p className="text-[10px] tracking-widest uppercase text-primary mb-4 font-semibold">
                          Sub-Sectors
                        </p>
                        <ul className="space-y-1.5">
                          {ind.subSectors.map((sub, j) => (
                            <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Positioning */}
                      <div className="p-6 flex flex-col justify-between">
                        <div>
                          <p className="text-[10px] tracking-widest uppercase text-primary mb-4 font-semibold">
                            Our Approach
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {ind.positioning}
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-border">
                          <p className="text-xs text-muted-foreground/60">
                            $3M – $50M Enterprise Value
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-px">
          {industries.map((ind, i) => (
            <div key={i} className="bg-card border border-border">
              <button
                onClick={() => setMobileOpen(mobileOpen === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-sm font-sans font-semibold tracking-wide text-left transition-colors"
              >
                <span className={mobileOpen === i ? "text-primary" : "text-muted-foreground"}>
                  {ind.name}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    mobileOpen === i ? "rotate-180 text-primary" : "text-muted-foreground"
                  }`}
                />
              </button>

              {mobileOpen === i && (
                <div className="px-5 pb-5 animate-fade-in">
                  <p className="text-[10px] tracking-widest uppercase text-primary mb-3 font-semibold">
                    Sub-Sectors
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {ind.subSectors.map((sub, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-border pt-4">
                    <p className="text-[10px] tracking-widest uppercase text-primary mb-2 font-semibold">
                      Our Approach
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {ind.positioning}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExplorer;
