import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { faqJsonLd } from "@/lib/seo-data";
import { ArrowRight } from "lucide-react";

const valueDrivers = [
  { title: "EBITDA Quality", desc: "Buyers pay premiums for clean, recurring, and growing earnings streams with defensible margins." },
  { title: "Revenue Diversification", desc: "Customer concentration above 20% compresses multiples. Diversified revenue commands higher valuations." },
  { title: "Management Depth", desc: "A business that operates without its founder is worth materially more than one that depends on them." },
  { title: "Growth Trajectory", desc: "Demonstrable, organic growth over 3+ years creates a compelling forward-looking investment thesis." },
  { title: "Recurring Revenue", desc: "Contractual or subscription-based revenue models receive premium multiples from acquirers." },
  { title: "Operational Systems", desc: "Documented processes, clean data, and scalable systems signal institutional readiness to buyers." },
];

const valueKillers = [
  "Customer concentration above 25% of revenue",
  "Owner-dependent operations with no succession plan",
  "Declining or stagnant revenue trends",
  "Unresolved legal, environmental, or regulatory issues",
  "Poor financial record-keeping or undocumented add-backs",
  "Key employee risk without retention agreements",
];

const faqItems = [
  {
    q: "What is M&A advisory?",
    a: "M&A (Mergers & Acquisitions) advisory involves a professional firm representing a business owner through the process of selling their company. An M&A advisor handles valuation, buyer identification, negotiations, and closing — ensuring the owner achieves maximum value while maintaining confidentiality.",
  },
  {
    q: "How long does it take to sell a business?",
    a: "A typical M&A transaction takes 6–9 months from engagement to closing. This includes preparation and valuation (months 1–2), buyer outreach (months 2–4), LOI negotiation and due diligence (months 4–6), and definitive agreements and closing (months 6–9).",
  },
  {
    q: "What is EBITDA and why does it matter?",
    a: "EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization. It represents the normalized cash earnings of your business and is the primary metric most acquirers use to determine valuation. Enterprise value is calculated by applying an industry-appropriate multiple to your adjusted EBITDA.",
  },
  {
    q: "What size businesses does CBH Business Group work with?",
    a: "We specialize in privately held businesses valued between $3M and $50M in enterprise value, focusing on sell-side advisory for owners ready to explore a strategic exit or sale transaction.",
  },
  {
    q: "What drives business valuation multiples?",
    a: "Key drivers include EBITDA quality, revenue diversification, management depth, recurring revenue models, documented operational systems, and a credible growth trajectory. These factors collectively determine the multiple applied to your earnings.",
  },
  {
    q: "Is the sale process confidential?",
    a: "Absolutely. Every engagement begins with a confidentiality agreement. No information is shared without your explicit approval. We use NDA-protected outreach and never publicly list businesses for sale.",
  },
];

const Sellers = () => (
  <Layout>
    <SEOHead
      title="Selling Your Business — What to Expect"
      description="Understand what drives business valuation, how M&A transactions are structured, and what to expect from a confidential sale process for businesses valued $3M–$50M."
      path="/sellers"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "For Sellers", path: "/sellers" },
      ]}
    />
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">For Business Owners</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Considering a Transaction?</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Understanding what drives valuation, how transactions are structured, and what to 
            expect from a confidential sale process.
          </p>
        </div>
      </div>
    </section>

    {/* Valuation Drivers */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Valuation</p>
          <h2 className="text-3xl font-serif text-foreground">What Drives Valuation Multiples</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {valueDrivers.map((driver, i) => (
            <div key={i} className="border-l border-primary/20 pl-6">
              <h3 className="font-serif text-foreground mb-2">{driver.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{driver.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* EBITDA vs EV */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Fundamentals</p>
          <h2 className="text-3xl font-serif text-foreground mb-6">EBITDA vs Enterprise Value</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">EBITDA</strong> (Earnings Before Interest, Taxes, Depreciation, and Amortization) 
            represents the normalized cash earnings of your business — the metric most acquirers use as 
            the foundation for valuation.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong className="text-foreground">Enterprise Value</strong> is calculated by applying an industry-appropriate 
            multiple to your adjusted EBITDA. For example, a business with $3M adjusted EBITDA at a 6x 
            multiple yields an $18M enterprise value.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The multiple applied depends on growth, risk profile, market dynamics, and buyer type. 
            Our role is to maximize that multiple through preparation and competitive process management.
          </p>
        </div>
      </div>
    </section>

    {/* Process & Timeline */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Process</p>
            <h2 className="text-3xl font-serif text-foreground mb-6">Confidential Process Overview</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>Every engagement begins with a confidentiality agreement. No information is shared with any party without your explicit approval.</p>
              <p>We create a comprehensive investment thesis, identify and pre-qualify buyers, manage all communications, and negotiate on your behalf — protecting your identity and business operations throughout.</p>
              <p>You remain in control at every stage. No commitment to sell is required until final terms are agreed upon.</p>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Timeline</p>
            <h2 className="text-3xl font-serif text-foreground mb-6">Typical Timeline: 6–9 Months</h2>
            <div className="space-y-4">
              {[
                { phase: "Months 1–2", label: "Preparation & Valuation" },
                { phase: "Months 2–4", label: "Market Outreach & Buyer Engagement" },
                { phase: "Months 4–6", label: "LOI Negotiation & Due Diligence" },
                { phase: "Months 6–9", label: "Definitive Agreements & Closing" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-baseline">
                  <span className="text-primary font-serif text-sm whitespace-nowrap">{item.phase}</span>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Value Killers */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Risk Factors</p>
          <h2 className="text-3xl font-serif text-foreground mb-8">Common Value Killers</h2>
          <div className="space-y-4">
            {valueKillers.map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-1.5 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Common Questions</p>
          <h2 className="text-3xl font-serif text-foreground mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i} className="border-b border-border pb-6">
                <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Internal Links */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-primary mb-6 text-center">Related Resources</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
            <p className="text-xs text-muted-foreground">Florida-specific guide</p>
          </Link>
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">EBITDA analysis & multiples</p>
          </Link>
          <Link to="/industries" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Industry Expertise</p>
            <p className="text-xs text-muted-foreground">Sector-specific advisory</p>
          </Link>
          <Link to="/opportunities" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Current Opportunities</p>
            <p className="text-xs text-muted-foreground">Active deal listings</p>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Request a Confidential Assessment</h2>
        <p className="text-muted-foreground mb-8">No obligation. Complete discretion.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Begin the Conversation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Sellers;
