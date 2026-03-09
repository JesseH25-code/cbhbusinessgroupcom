import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    slug: "manufacturing",
    name: "Manufacturing & Distribution",
    headline: "M&A Advisory for Manufacturing & Distribution Companies",
    description:
      "CBH Business Group advises founder-led and family-owned manufacturing and distribution companies on strategic transactions. We understand the valuation drivers unique to this sector — from production capacity and supply chain positioning to customer diversification and margin quality.",
    drivers: [
      "Production efficiency and capacity utilization rates",
      "Customer concentration and contract quality",
      "Supply chain resilience and vendor relationships",
      "Equipment condition and capital expenditure requirements",
      "Skilled workforce retention and labor market positioning",
      "Recurring vs. project-based revenue mix",
    ],
    buyerTypes: "Strategic acquirers seeking geographic or product line expansion, PE platforms building industrial services portfolios, and international buyers seeking U.S. manufacturing footprints.",
  },
  {
    slug: "healthcare",
    name: "Healthcare Services",
    headline: "M&A Advisory for Healthcare Services Companies",
    description:
      "Healthcare transactions require regulatory awareness, compliance sensitivity, and disciplined financial presentation. CBH Business Group guides healthcare business owners through structured sale processes tailored to strategic acquirers and private equity healthcare platforms.",
    drivers: [
      "Payer mix quality and reimbursement rate stability",
      "Regulatory compliance and licensure standing",
      "Patient census growth and referral source diversification",
      "Clinical staff recruitment and retention metrics",
      "Technology adoption and EHR infrastructure",
      "Multi-location scalability and geographic density",
    ],
    buyerTypes: "PE-backed healthcare platforms pursuing roll-up strategies, health systems seeking outpatient service expansion, and strategic acquirers consolidating specialty service lines.",
  },
  {
    slug: "technology",
    name: "Technology & SaaS",
    headline: "M&A Advisory for Technology & SaaS Companies",
    description:
      "We help technology founders and shareholders articulate scalable revenue models, customer retention metrics, and strategic buyer synergies to maximize valuation multiples. Our structured process ensures technical and financial diligence is managed efficiently.",
    drivers: [
      "Annual recurring revenue (ARR) growth rate and quality",
      "Net revenue retention and churn metrics",
      "Customer acquisition cost (CAC) and lifetime value (LTV) ratios",
      "Product differentiation and competitive moat",
      "Engineering team depth and technical debt profile",
      "Contract quality and expansion revenue potential",
    ],
    buyerTypes: "Strategic technology acquirers seeking product or market expansion, PE firms investing in vertical SaaS platforms, and growth equity investors targeting Rule of 40+ companies.",
  },
  {
    slug: "construction",
    name: "Construction & Engineering",
    headline: "M&A Advisory for Construction & Engineering Firms",
    description:
      "CBH Business Group structures transactions around backlog quality, bonding capacity, and recurring project pipelines to properly represent enterprise value in this sector. Our team understands the cyclicality and risk profile that buyers evaluate.",
    drivers: [
      "Backlog quality, duration, and margin profile",
      "Bonding capacity and surety relationships",
      "Project type diversification (public vs. private)",
      "Estimating accuracy and project delivery track record",
      "Key personnel and project manager retention",
      "Equipment fleet condition and ownership vs. lease structure",
    ],
    buyerTypes: "Regional and national contractors seeking geographic expansion, PE-backed platforms building specialty trades portfolios, and infrastructure-focused investors.",
  },
  {
    slug: "business-services",
    name: "Business Services",
    headline: "M&A Advisory for Business Services Companies",
    description:
      "Service businesses with recurring revenue and strong margins command premium valuations when properly positioned. We focus on EBITDA clarity, growth narrative, and demonstrating the scalability that attracts institutional buyers.",
    drivers: [
      "Contract quality and recurring revenue percentage",
      "Customer retention rates and contract duration",
      "Technician and field workforce scalability",
      "Route density and geographic coverage efficiency",
      "Owner dependence and management team depth",
      "Cross-sell and upsell revenue opportunities",
    ],
    buyerTypes: "PE platforms executing buy-and-build strategies in fragmented service sectors, strategic acquirers seeking density and scale, and family offices investing in essential services businesses.",
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    headline: "M&A Advisory for Financial Services Firms",
    description:
      "Financial service transactions require confidentiality, compliance sensitivity, and buyer qualification discipline. CBH Business Group manages these processes with the discretion and rigor these businesses demand.",
    drivers: [
      "Assets under management (AUM) growth and retention",
      "Revenue quality: recurring fees vs. transactional income",
      "Client demographics and generational transfer risk",
      "Regulatory compliance and licensing standing",
      "Technology platform and operational scalability",
      "Key advisor retention and succession readiness",
    ],
    buyerTypes: "Consolidating RIA platforms, PE-backed insurance distribution networks, strategic acquirers expanding service lines, and next-generation partners seeking internal succession.",
  },
];

const industryJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Industry Expertise — CBH Business Group",
  description:
    "CBH Business Group provides M&A advisory services across manufacturing, healthcare, technology, construction, business services, and financial services sectors.",
  url: "https://cbhbusinessgroup.com/industries",
};

const Industries = () => (
  <Layout>
    <SEOHead
      title="Industry Expertise — M&A Advisory by Sector"
      description="Sector-specific M&A advisory for manufacturing, healthcare, technology, construction, business services, and financial services. Valuation drivers and buyer landscapes by industry."
      path="/industries"
      jsonLd={industryJsonLd}
    />

    {/* Hero */}
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Sector Expertise</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Industry-Specific Advisory</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every industry has unique valuation drivers, buyer landscapes, and transaction dynamics. 
            We bring sector fluency to every engagement.
          </p>
        </div>
      </div>
    </section>

    {/* Industry Sections */}
    {industries.map((ind, i) => {
      const landingPageMap: Record<string, string> = {
        manufacturing: "/sell-manufacturing-company-florida",
        healthcare: "/sell-healthcare-business-florida",
        construction: "/sell-construction-company-florida",
      };
      const landingPage = landingPageMap[ind.slug];

      return (
        <section key={ind.slug} id={ind.slug} className={`py-24 ${i % 2 === 1 ? "bg-secondary" : ""}`}>
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              <p className="text-xs tracking-widest uppercase text-primary mb-3">{ind.name}</p>
              <h2 className="text-3xl font-serif text-foreground mb-6">{ind.headline}</h2>
              <p className="text-muted-foreground leading-relaxed mb-10">{ind.description}</p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-serif text-foreground mb-4 text-lg">Key Valuation Drivers</h3>
                  <ul className="space-y-3">
                    {ind.drivers.map((driver, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                        {driver}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-foreground mb-4 text-lg">Typical Buyer Landscape</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.buyerTypes}</p>
                  {landingPage && (
                    <Link to={landingPage} className="inline-flex items-center gap-1 text-sm text-primary mt-4 hover:underline">
                      Sell Your {ind.name.split(" ")[0]} Company in Florida <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>

            <div className="gold-divider mt-16" />
          </div>
        </section>
      );
    })}

    {/* CTA */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Discuss Your Industry-Specific Transaction</h2>
        <p className="text-muted-foreground mb-8">We bring sector fluency to every engagement.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Industries;
