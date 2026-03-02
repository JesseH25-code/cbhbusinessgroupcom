import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-skyline.jpg";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const stats = [
  { value: "$2.4B+", label: "Transaction Value Advised" },
  { value: "$18M", label: "Average Deal Size" },
  { value: "14", label: "Industries Represented" },
  { value: "340+", label: "Qualified Buyer Network" },
];

const steps = [
  { num: "01", title: "Enterprise Valuation & Financial Normalization", desc: "Comprehensive financial analysis, EBITDA adjustments, and market-based valuation modeling." },
  { num: "02", title: "Market Positioning & Investment Thesis", desc: "Crafting a compelling narrative that articulates your competitive advantages and growth trajectory." },
  { num: "03", title: "Targeted Buyer Outreach", desc: "Disciplined outreach to pre-qualified strategic acquirers and financial sponsors." },
  { num: "04", title: "Negotiation & Deal Structuring", desc: "Managing competitive dynamics, structuring terms, and maximizing total consideration." },
  { num: "05", title: "Closing & Post-Transaction Transition", desc: "Coordinating diligence, legal documentation, and seamless ownership transfer." },
];

const deals = [
  { industry: "Specialty Manufacturing", revenue: "$28M", ebitda: "$4.2M", structure: "100% Strategic Acquisition", outcome: "Closed at 7.8x EBITDA with earnout structure exceeding initial ask by 22%." },
  { industry: "Healthcare Services", revenue: "$16M", ebitda: "$2.8M", structure: "PE Recapitalization (70/30)", outcome: "Owner retained 30% equity with institutional partner, achieving partial liquidity and growth capital." },
  { industry: "B2B Technology", revenue: "$12M", ebitda: "$3.1M", structure: "Strategic Sale to Public Company", outcome: "Competitive process generated 4 LOIs. Closed at 9.2x EBITDA with favorable working capital terms." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="gold-divider w-24 mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 text-foreground animate-fade-in">
              Strategic M&A Advisory for Businesses Valued $3M–$50M.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl" style={{ animationDelay: "0.2s" }}>
              We help founders and ownership groups maximize enterprise value and execute structured 
              transactions with qualified strategic and financial buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.4s" }}>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Request Confidential Valuation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">
                  Schedule Advisory Consultation
                </Button>
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
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Structured Advisory Approach</h2>
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
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">Representative Transactions</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {deals.map((deal, i) => (
              <div key={i} className="bg-card border border-border p-8 hover:border-primary/30 transition-colors duration-300">
                <p className="text-xs tracking-widest uppercase text-primary mb-4">{deal.industry}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Revenue</span>
                    <span className="text-foreground font-medium">{deal.revenue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">EBITDA</span>
                    <span className="text-foreground font-medium">{deal.ebitda}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Structure</span>
                    <span className="text-foreground font-medium">{deal.structure}</span>
                  </div>
                </div>
                <div className="gold-divider mb-4" />
                <p className="text-sm text-muted-foreground leading-relaxed">{deal.outcome}</p>
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
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Preparation Drives Multiple Expansion.</h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The most impactful value creation occurs 12–36 months before a transaction. Our exit readiness 
              framework addresses the key drivers that strategic and financial buyers evaluate.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: BarChart3, title: "Financial Normalization", desc: "Clean, adjusted financials that reflect true earnings power." },
              { icon: TrendingUp, title: "Growth Narrative", desc: "Articulating a credible path to continued value creation." },
              { icon: Shield, title: "Risk Mitigation", desc: "Addressing customer concentration, key-person, and operational risks." },
              { icon: Users, title: "Working Capital Clarity", desc: "Clear definitions and benchmarks for smooth deal mechanics." },
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

      {/* Lead Magnet CTA */}
      <section className="py-20 bg-secondary border-y border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">The 8 Drivers of Enterprise Value</h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            A structured framework for understanding what moves valuation multiples in the lower middle market.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Request the Guide <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
