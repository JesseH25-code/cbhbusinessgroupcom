import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "construction-recapitalization",
    sector: "Construction",
    headline: "$20M Majority Recapitalization",
    transactionType: "Majority Recapitalization",
    enterpriseValue: "$20M",
    overview:
      "CBH Business Group represented the founding shareholders of a regional construction firm with over two decades of operating history. The company had established a strong reputation in commercial and infrastructure projects, with a diversified project pipeline and bonded capacity that positioned it well for institutional interest.",
    challenge:
      "The founders sought partial liquidity while retaining a meaningful equity stake and continued operational involvement. The challenge was structuring a transaction that delivered immediate value to the sellers while preserving the company's culture, bonding relationships, and key employee retention.",
    approach: [
      "Conducted comprehensive EBITDA normalization across multi-year project financials",
      "Prepared a detailed Confidential Information Memorandum emphasizing backlog quality, bonding capacity, and management depth",
      "Executed a targeted outreach campaign to private equity firms with construction and infrastructure platform strategies",
      "Negotiated a majority recapitalization structure allowing founders to retain a significant minority stake with board representation",
    ],
    outcome:
      "The transaction closed at a valuation reflecting the company's premium market position, strong backlog, and institutional-quality management team. The founders achieved meaningful liquidity while maintaining operational leadership and participating in future upside through their retained equity position.",
    highlights: [
      { label: "Enterprise Value", value: "$20M" },
      { label: "Structure", value: "Majority Recap" },
      { label: "Sector", value: "Construction" },
      { label: "Founder Role", value: "Retained Leadership" },
    ],
  },
  {
    id: "engineering-majority-sale",
    sector: "Engineering",
    headline: "$12M Majority Sale with Equity Rollover",
    transactionType: "Majority Sale — Structured Equity Rollover",
    enterpriseValue: "$12M",
    overview:
      "CBH Business Group advised the owner of a specialized engineering firm serving commercial and industrial clients. The firm had built a strong niche reputation over 15+ years, with deep technical expertise, long-standing client relationships, and a stable recurring revenue base from maintenance and inspection contracts.",
    challenge:
      "The owner was approaching retirement and needed a succession solution that would protect the firm's employees and client relationships. The priority was finding an acquirer who valued the technical team and would invest in the company's growth, while providing the owner with a structured exit that included ongoing distributions during a transition period.",
    approach: [
      "Normalized financials to reflect true owner earnings and recurring revenue quality",
      "Positioned the firm's technical certifications, client retention metrics, and recurring contract base as key value drivers",
      "Identified and engaged strategic acquirers and PE-backed platforms seeking engineering services add-ons",
      "Structured a transaction with upfront consideration, equity rollover into the acquiring entity, and ongoing distributions to the seller during a defined transition period",
    ],
    outcome:
      "The transaction delivered a premium valuation reflecting the firm's recurring revenue quality and technical differentiation. The structured equity rollover provided the seller with ongoing participation in the combined entity's growth, while the transition arrangement ensured continuity for clients and employees.",
    highlights: [
      { label: "Enterprise Value", value: "$12M" },
      { label: "Structure", value: "Sale + Equity Rollover" },
      { label: "Sector", value: "Engineering" },
      { label: "Post-Close", value: "Ongoing Distributions" },
    ],
  },
];

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Transaction Case Studies — CBH Business Group",
  description:
    "Real transaction outcomes from CBH Business Group's M&A advisory practice, including majority recapitalizations, structured sales, and equity rollover transactions.",
  url: "https://cbhbusinessgroup.com/case-studies",
};

const CaseStudies = () => (
  <Layout>
    <SEOHead
      title="Transaction Case Studies"
      description="Real M&A transaction outcomes: $20M construction recapitalization and $12M engineering majority sale with structured equity rollover. See how CBH Business Group delivers results."
      path="/case-studies"
      jsonLd={caseStudyJsonLd}
    />

    {/* Hero */}
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Transaction Experience</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Case Studies</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Representative transactions demonstrating our structured approach to sell-side advisory, 
            valuation optimization, and deal execution.
          </p>
        </div>
      </div>
    </section>

    {/* Case Studies */}
    {caseStudies.map((cs, i) => (
      <section key={cs.id} className={`py-24 ${i % 2 === 1 ? "bg-secondary" : ""}`}>
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">{cs.sector}</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2">{cs.headline}</h2>
            <p className="text-sm text-muted-foreground">{cs.transactionType}</p>
          </div>

          {/* Highlights Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-12">
            {cs.highlights.map((h, j) => (
              <div key={j} className="bg-card p-5">
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">{h.label}</p>
                <p className="font-serif text-lg text-primary">{h.value}</p>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-foreground mb-3">Overview</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">{cs.overview}</p>

              <h3 className="font-serif text-foreground mb-3">Challenge</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
            </div>
            <div>
              <h3 className="font-serif text-foreground mb-3">Our Approach</h3>
              <ul className="space-y-3 mb-8">
                {cs.approach.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <h3 className="font-serif text-foreground mb-3">Outcome</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{cs.outcome}</p>
            </div>
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Explore How We Can Represent Your Transaction</h2>
        <p className="text-muted-foreground mb-8">Every engagement begins in confidence.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
