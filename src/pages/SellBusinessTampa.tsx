import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Tampa?",
    a: "Start with a professional valuation, prepare your financials, and engage an M&A advisor experienced in the Tampa Bay market. The process involves confidential buyer outreach, LOI negotiation, due diligence, and closing — typically taking 6–9 months.",
  },
  {
    q: "What industries are growing in Tampa Bay for M&A?",
    a: "Tampa Bay has strong M&A activity in healthcare, financial services, technology, construction, defense/government contracting, and professional services. The region's rapid population growth is fueling demand across nearly all sectors.",
  },
  {
    q: "What is my Tampa business worth?",
    a: "Tampa-area businesses valued at $3M–$50M typically trade at 3x–7x adjusted EBITDA. Multiples vary by industry, growth rate, customer diversification, management depth, and recurring revenue characteristics.",
  },
  {
    q: "Why is Tampa a good market for selling a business?",
    a: "Tampa Bay is one of the fastest-growing metro areas in the U.S., attracting both population and corporate relocations. This growth creates strong buyer demand from strategic acquirers and private equity firms looking to establish or expand their Florida presence.",
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

const SellBusinessTampa = () => (
  <Layout>
    <SEOHead
      title="Sell a Business in Tampa | M&A Advisory"
      description="M&A advisory for Tampa Bay business owners. Professional valuations, confidential buyer outreach, and strategic deal execution for businesses valued $3M–$50M."
      path="/sell-business-tampa"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Tampa", path: "/sell-business-tampa" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Tampa Bay M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Business in Tampa Bay
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Tampa Bay's booming economy and influx of corporate relocations make it one of Florida's most 
            active M&A markets. CBH Business Group helps Tampa Bay business owners navigate a confidential 
            sale process to maximize value.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why Tampa Owners Choose CBH</p>
          <h2 className="text-3xl font-serif text-foreground">Built for Tampa Bay Business Owners</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Market Valuation", desc: "Tampa Bay-specific comparable analysis with EBITDA normalization." },
            { icon: Shield, title: "Confidential Process", desc: "Full NDA protection for employees, customers, and competitors." },
            { icon: Users, title: "Qualified Buyers", desc: "Pre-vetted strategic acquirers and PE firms targeting Tampa Bay." },
            { icon: TrendingUp, title: "Growth Premium", desc: "Tampa's growth trajectory supports premium valuation multiples." },
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
          <Link to="/sell-healthcare-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Healthcare M&A</p>
            <p className="text-xs text-muted-foreground">Sell a healthcare business</p>
          </Link>
          <Link to="/business-valuation-calculator-tampa" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Tampa Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Free EBITDA-based estimate</p>
          </Link>
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">EBITDA analysis & multiples</p>
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

export default SellBusinessTampa;
