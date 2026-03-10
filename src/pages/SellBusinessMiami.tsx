import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Miami?",
    a: "Selling a business in Miami involves obtaining a professional valuation, preparing financial documentation, engaging an M&A advisor who understands the South Florida market, identifying qualified buyers under NDA, negotiating deal terms, and closing the transaction. Miami's diverse economy and international buyer pool can create competitive dynamics that drive premium valuations.",
  },
  {
    q: "What industries are strongest for M&A in Miami?",
    a: "Miami's M&A market is particularly active in healthcare, hospitality and restaurants, technology, professional services, import/export, real estate services, and construction. The city's position as a gateway to Latin America also attracts international acquirers looking for U.S. market entry.",
  },
  {
    q: "How long does it take to sell a business in Miami?",
    a: "A typical transaction takes 6–9 months from engagement to closing. Miami's active buyer market can sometimes accelerate timelines, especially for well-prepared businesses with clean financials and strong EBITDA margins.",
  },
  {
    q: "What are Miami business valuation multiples?",
    a: "Miami businesses in the $3M–$50M range typically see EBITDA multiples of 3x–7x, depending on industry, growth trajectory, customer concentration, and recurring revenue. Miami's strong economic growth and population influx can support premium multiples compared to other Florida markets.",
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

const SellBusinessMiami = () => (
  <Layout>
    <SEOHead
      title="Sell a Business in Miami | M&A Advisory"
      description="Expert M&A advisory for selling your Miami business. Confidential valuations, strategic buyer identification, and premium deal execution for businesses valued $3M–$50M."
      path="/sell-business-miami"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Miami", path: "/sell-business-miami" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Miami M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Business in Miami
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Miami's dynamic economy and international buyer pool create unique opportunities for business 
            owners pursuing a strategic exit. CBH Business Group provides hands-on M&A advisory tailored 
            to the South Florida market — from valuation through closing.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Request Confidential Valuation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why Miami Owners Choose CBH</p>
          <h2 className="text-3xl font-serif text-foreground">Local Expertise, National Reach</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Market-Based Valuation", desc: "Miami-specific comparable analysis with EBITDA normalization and industry benchmarking." },
            { icon: Shield, title: "Total Confidentiality", desc: "NDA-protected process ensuring your employees, customers, and competitors never know." },
            { icon: Users, title: "International Buyer Access", desc: "Miami's global connectivity means access to domestic and international acquirers." },
            { icon: TrendingUp, title: "Premium Multiples", desc: "Competitive process management leveraging Miami's strong demand dynamics." },
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
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
            <p className="text-xs text-muted-foreground">Statewide M&A advisory</p>
          </Link>
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">EBITDA analysis & multiples</p>
          </Link>
          <Link to="/business-valuation-calculator-miami" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Miami Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Free EBITDA-based estimate</p>
          </Link>
          <Link to="/sell-restaurant-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Restaurant</p>
            <p className="text-xs text-muted-foreground">Food & hospitality M&A</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Explore Your Options?</h2>
        <p className="text-muted-foreground mb-8">Every conversation is confidential. No obligation.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Advisory Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default SellBusinessMiami;
