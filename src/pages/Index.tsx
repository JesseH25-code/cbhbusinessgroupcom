import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { organizationJsonLd, localBusinessJsonLd } from "@/lib/seo-data";
import heroImage from "@/assets/hero-skyline.jpg";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";
import ConfidentialPopup from "@/components/ConfidentialPopup";

const stats = [
  { value: "$3M–$50M", label: "Transaction Range" },
  { value: "Sell-Side", label: "Advisory Focus" },
  { value: "Florida", label: "Headquartered" },
  { value: "Confidential", label: "Process Driven" },
];

const steps = [
  { num: "01", title: "Business Valuation & Financial Normalization", desc: "Comprehensive analysis of earnings, EBITDA adjustments, and defensible market-based valuation." },
  { num: "02", title: "Strategic Positioning & Investment Thesis", desc: "Building a clear narrative that communicates your company's competitive strengths and growth potential." },
  { num: "03", title: "Targeted Buyer Identification & Outreach", desc: "Disciplined, confidential outreach to pre-qualified strategic acquirers, PE groups, and individual buyers." },
  { num: "04", title: "Negotiation & Deal Structuring", desc: "Managing competitive dynamics, structuring terms, and protecting your interests through closing." },
  { num: "05", title: "Closing & Transition", desc: "Coordinating due diligence, legal documentation, and a smooth ownership transition." },
];

const deals: { industry: string; revenue: string; ebitda: string; ebitdaLabel?: string; txValue: string; structure: string; outcome: string; highlights: string[] }[] = [
  {
    industry: "Construction & Infrastructure Services",
    revenue: "$30M",
    ebitda: "$4.2M",
    txValue: "$20M",
    structure: "Majority Recapitalization — 20% Equity Retained",
    outcome: "Advised ownership through a structured sale process targeting both strategic and financial buyers. Transaction resulted in a $20M majority sale while ownership retained 20% equity for future liquidity participation. Process included financial normalization, backlog positioning, and disciplined negotiation of working capital terms.",
    highlights: [
      "Competitive buyer outreach",
      "Multiple qualified discussions",
      "Structured equity rollover",
      "Transition alignment with management",
    ],
  },
  {
    industry: "Consumer Products / Apparel",
    revenue: "$6M",
    ebitda: "$1.4M",
    ebitdaLabel: "Net Income",
    txValue: "$4.9M",
    structure: "100% Strategic Acquisition",
    outcome: "Executed full sale to a strategic acquirer seeking brand expansion and channel growth. Confidential process generated multiple qualified discussions. Final terms delivered complete liquidity to ownership with structured transition support.",
    highlights: [
      "Strategic buyer alignment",
      "Clean full-exit structure",
      "Negotiated favorable closing terms",
      "Confidential process management",
    ],
  },
  {
    industry: "Engineering & Professional Services",
    revenue: "$6M",
    ebitda: "$3M",
    ebitdaLabel: "Net Income",
    txValue: "$12M",
    structure: "Majority Sale — 20% Equity Retained",
    outcome: "Advised ownership through a structured majority sale valued at $12M while retaining 20% equity. The transaction provided immediate liquidity with continued participation in long-term value creation through structured ongoing quarterly distributions.",
    highlights: [
      "High-margin professional services platform",
      "Equity rollover with long-term distribution rights",
      "Structured for recurring quarterly income participation",
      "Negotiated alignment between majority buyer and retained ownership",
    ],
  },
];

const Index = () => {
  const [closedAmount, setClosedAmount] = useState(23654765);

  useEffect(() => {
    const interval = setInterval(() => {
      setClosedAmount((prev) => prev + 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const formatDollars = (amount: number) =>
    "$" + amount.toLocaleString("en-US");

  return (
    <Layout>
      <SEOHead
        title="CBH Business Group | M&A Advisory for Businesses $3M–$50M"
        description="Florida-based M&A advisory and business brokerage firm specializing in strategic sale transactions, valuation advisory, and exit planning for businesses valued $3M–$50M."
        path="/"
        jsonLd={[organizationJsonLd, localBusinessJsonLd]}
      />
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <img src={heroImage} alt="Florida skyline" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            {/* Live Ticker */}
            <div className="inline-flex items-center gap-3 bg-card/80 backdrop-blur border border-border rounded-full px-5 py-2 mb-8 mt-8 md:mt-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Deal Volume to Date:</span>
              <span className="text-sm font-serif font-semibold text-primary tabular-nums">{formatDollars(closedAmount)}</span>
            </div>

            <div className="gold-divider w-24 mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-foreground animate-fade-in">
              Strategic M&A Advisory for Businesses Valued $3M–$50M.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              CBH Business Group advises owners of privately held companies through confidential sale transactions, 
              valuation advisory, and structured exit planning. We are not a listing service — we provide 
              hands-on advisory, buyer targeting, negotiation, and deal structuring.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-12 md:pb-0 max-w-2xl">
              <Link to="/contact">
                <Button variant="heroOutline" size="lg" className="w-full">Request Confidential Valuation</Button>
              </Link>
              <Link to="/valuation-calculator">
                <Button variant="heroOutline" size="lg" className="w-full">Free Business Valuation</Button>
              </Link>
              <Link to="/buyers#buyer-form">
                <Button variant="heroOutline" size="lg" className="w-full">Join Buyer Network</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="border-y border-border bg-secondary">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-serif text-primary mb-1">{stat.value}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Approach */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">A Disciplined Advisory Approach</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 group">
                <span className="text-primary font-serif text-2xl opacity-50 group-hover:opacity-100 transition-opacity">{step.num}</span>
                <div className="border-l border-border pl-6 pb-2">
                  <h3 className="font-serif text-lg text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transaction Experience */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Track Record</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Selected Transaction Experience</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {deals.map((deal, i) => (
              <div key={i} className="bg-card border border-border p-8 hover:border-primary/30 transition-colors duration-300 flex flex-col">
                <p className="text-xs tracking-widest uppercase text-primary mb-5">{deal.industry}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Revenue</span>
                    <span className="text-foreground font-medium">{deal.revenue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{deal.ebitdaLabel || "EBITDA"}</span>
                    <span className="text-foreground font-medium">{deal.ebitda}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Transaction Value</span>
                    <span className="text-foreground font-medium">{deal.txValue}</span>
                  </div>
                  <div className="flex justify-between text-sm items-start gap-4">
                    <span className="text-muted-foreground shrink-0">Structure</span>
                    <span className="text-foreground font-medium text-right">{deal.structure}</span>
                  </div>
                </div>
                <div className="gold-divider mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">{deal.outcome}</p>
                <ul className="mt-4 space-y-2">
                  {deal.highlights.map((h, j) => (
                    <li key={j} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exit Readiness */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Exit Planning</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Preparation and Structure Drive Valuation.</h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The most impactful value creation happens before a business goes to market. 
              Our exit readiness framework addresses the key factors that buyers evaluate 
              when determining what a company is worth.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: BarChart3, title: "Financial Normalization", desc: "Clean, adjusted financials that reflect true earnings power and EBITDA clarity." },
              { icon: TrendingUp, title: "Growth Narrative", desc: "A credible, data-supported case for continued value creation post-transaction." },
              { icon: Shield, title: "Risk Mitigation", desc: "Addressing customer concentration, key-person dependency, and operational risks." },
              { icon: Users, title: "Working Capital Clarity", desc: "Clear definitions and benchmarks for smooth deal mechanics and closing." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-sm text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                Begin Exit Planning <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 bg-secondary border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Client Confidence</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Trusted by Business Owners Across Florida</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                quote: "CBH Business Group managed our entire sale process with professionalism and discretion. They delivered a result that exceeded our expectations.",
                attribution: "— Construction Services Company, Southeast FL",
                metric: "$20M Transaction",
              },
              {
                quote: "Their structured approach and buyer outreach generated multiple qualified offers. We felt in control at every stage of the process.",
                attribution: "— Consumer Products Company, Central FL",
                metric: "$4.9M Transaction",
              },
              {
                quote: "The team's financial acumen and negotiation skills were critical to structuring a deal that met both our liquidity and long-term goals.",
                attribution: "— Engineering & Professional Services, FL",
                metric: "$12M Transaction",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-card border border-border p-8 flex flex-col">
                <p className="text-primary font-serif text-sm mb-4">{testimonial.metric}</p>
                <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">"{testimonial.quote}"</p>
                <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border">{testimonial.attribution}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            {[
              { value: "100%", label: "Client Confidentiality" },
              { value: "$37M+", label: "Deal Volume" },
              { value: "6–9 Mo", label: "Avg. Timeline" },
              { value: "3x–7x", label: "EBITDA Multiples" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-serif text-primary mb-1">{stat.value}</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Landing Pages */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Industry Expertise</p>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Sector-Specific Advisory</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Every industry has unique valuation drivers and buyer landscapes. We bring sector fluency to every engagement.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Construction & Engineering", path: "/sell-construction-company-florida" },
              { label: "Healthcare Services", path: "/sell-healthcare-business-florida" },
              { label: "Manufacturing & Distribution", path: "/sell-manufacturing-company-florida" },
              { label: "Technology Companies", path: "/sell-technology-company-florida" },
              { label: "HVAC & Mechanical", path: "/sell-hvac-company-florida" },
              { label: "Professional Services", path: "/sell-professional-services-firm-florida" },
              { label: "Landscaping & Outdoor", path: "/sell-landscaping-business-florida" },
              { label: "Restaurants & Food Service", path: "/sell-restaurant-florida" },
              { label: "All Industries", path: "/industries" },
            ].map((item, i) => (
              <Link key={i} to={item.path} className="bg-card border border-border p-6 hover:border-primary/30 transition-colors group">
                <p className="font-serif text-sm text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                  {item.label}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet CTA */}
      <section className="py-20 bg-secondary border-y border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">The 8 Drivers of Enterprise Value</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            A practical framework for understanding what moves valuation multiples in the lower middle market.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Request the Guide <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <ConfidentialPopup />
    </Layout>
  );
};

export default Index;
