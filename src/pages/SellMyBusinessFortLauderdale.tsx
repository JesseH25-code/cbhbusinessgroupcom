import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Sailboat, Wallet, Stethoscope, Cpu } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Fort Lauderdale?",
    a: "Start with a confidential valuation referenced to Broward County comparable transactions, then engage an M&A advisor to prepare deal materials, run an NDA-protected buyer process across South Florida and out-of-state PE, and negotiate to close. Fort Lauderdale mid-market deals typically take 6–9 months end-to-end.",
  },
  {
    q: "What is my Fort Lauderdale business worth?",
    a: "Fort Lauderdale businesses typically sell for 3.5x–7.0x EBITDA. Marine industry suppliers (yacht refit, brokerage, MRO), specialty healthcare practices, and IT services firms regularly transact at the higher end of that range thanks to Broward's concentration of high-net-worth buyers.",
  },
  {
    q: "Is Fort Lauderdale a good market to sell a business?",
    a: "Yes. Broward County has 1.95M residents and ~135,000 active businesses. Its proximity to Miami's LATAM buyer pool, the marine cluster around Port Everglades, and the rapid growth of family offices in Fort Lauderdale and Boca create deep demand for $2M–$25M lower-middle-market companies.",
  },
  {
    q: "How quickly can I sell my Fort Lauderdale business?",
    a: "A well-prepared Fort Lauderdale business — clean financials, sub-25% customer concentration, documented operations — can close in 6–9 months. Marine and IT services deals occasionally move faster due to dedicated PE rollup activity in those niches.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const SellMyBusinessFortLauderdale = () => (
  <Layout>
    <SEOHead
      title="Sell My Business in Fort Lauderdale | M&A Advisory"
      description="Want to sell your business in Fort Lauderdale? Confidential valuations, qualified buyer access, and expert deal execution for Broward County business owners. Free consultation."
      path="/sell-my-business-fort-lauderdale"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Fort Lauderdale", path: "/sell-business-fort-lauderdale" },
        { name: "Sell My Business in Fort Lauderdale", path: "/sell-my-business-fort-lauderdale" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Fort Lauderdale Business Sales</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell My Business in Fort Lauderdale
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Fort Lauderdale's thriving economy — anchored by marine, tech, healthcare, and professional 
            services — creates exceptional opportunities for business owners pursuing a strategic exit. 
            We provide hands-on M&A advisory tailored to the Broward County market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get My Free Valuation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/valuation-calculator">
              <Button variant="outline" size="lg">
                Try the Valuation Calculator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why Fort Lauderdale Owners Choose CBH</p>
          <h2 className="text-3xl font-serif text-foreground">Broward County M&A Expertise</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Local Market Intelligence", desc: "Broward County-specific valuation analysis with South Florida comparable transactions." },
            { icon: Shield, title: "Complete Confidentiality", desc: "NDA-protected process ensuring your business sale stays private until you decide otherwise." },
            { icon: Users, title: "Premium Buyer Access", desc: "Family offices, PE firms, and strategic acquirers concentrated in the South Florida corridor." },
            { icon: TrendingUp, title: "Maximized Exit Value", desc: "Competitive process leveraging Fort Lauderdale's strong demand dynamics." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-sm text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-secondary">
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

    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-primary mb-6 text-center">Related Resources</p>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Link to="/sell-business-fort-lauderdale" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Fort Lauderdale</p>
            <p className="text-xs text-muted-foreground">Full Fort Lauderdale M&A guide</p>
          </Link>
          <Link to="/business-valuation-calculator-fort-lauderdale" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Fort Lauderdale Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Free EBITDA-based estimate</p>
          </Link>
          <Link to="/business-broker-fort-lauderdale" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Broker Fort Lauderdale</p>
            <p className="text-xs text-muted-foreground">Broker vs. M&A advisor</p>
          </Link>
          <Link to="/how-to-sell-a-business" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">How to Sell a Business</p>
            <p className="text-xs text-muted-foreground">Step-by-step guide</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Sell Your Fort Lauderdale Business?</h2>
        <p className="text-muted-foreground mb-8">Every conversation is confidential. No obligation.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule My Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default SellMyBusinessFortLauderdale;
