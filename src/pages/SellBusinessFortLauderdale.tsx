import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Fort Lauderdale?",
    a: "Engage an M&A advisor who understands the Broward County market. The process includes professional valuation, confidential buyer outreach, LOI negotiation, due diligence, and closing — typically 6–9 months from engagement.",
  },
  {
    q: "What industries are active in Fort Lauderdale M&A?",
    a: "Fort Lauderdale has strong M&A activity in marine services, healthcare, technology, real estate services, hospitality, and professional services. The yachting and marine industry is particularly unique to the region.",
  },
  {
    q: "What is my Fort Lauderdale business worth?",
    a: "Broward County businesses in the $3M–$50M range typically trade at 3x–7x adjusted EBITDA. Fort Lauderdale's affluent market and proximity to Miami can support premium valuations for well-positioned companies.",
  },
  {
    q: "How does Fort Lauderdale compare to Miami for M&A?",
    a: "Fort Lauderdale offers many of Miami's advantages — international connectivity, growing population, strong economy — often with lower operating costs. Many buyers view the broader South Florida market as a single opportunity, which benefits Fort Lauderdale sellers.",
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

const SellBusinessFortLauderdale = () => (
  <Layout>
    <SEOHead
      title="Sell a Business in Fort Lauderdale | M&A Advisory"
      description="M&A advisory for Fort Lauderdale and Broward County business owners. Confidential valuations and strategic deal execution for businesses valued $3M–$50M."
      path="/sell-business-fort-lauderdale"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Fort Lauderdale", path: "/sell-business-fort-lauderdale" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Fort Lauderdale M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Business in Fort Lauderdale
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Fort Lauderdale and Broward County offer a unique combination of South Florida market 
            dynamics with a business-friendly environment. CBH Business Group provides confidential 
            M&A advisory for business owners ready to explore a strategic exit.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why Fort Lauderdale Owners Choose CBH</p>
          <h2 className="text-3xl font-serif text-foreground">Broward County M&A Expertise</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Local Valuation", desc: "Broward County comparable analysis with EBITDA normalization and benchmarking." },
            { icon: Shield, title: "Total Confidentiality", desc: "NDA-protected process ensuring complete discretion throughout." },
            { icon: Users, title: "South Florida Buyers", desc: "Access to acquirers targeting the broader South Florida corridor." },
            { icon: TrendingUp, title: "Premium Positioning", desc: "Leverage Fort Lauderdale's growth dynamics for optimal valuations." },
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
          <Link to="/sell-business-miami" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Miami</p>
            <p className="text-xs text-muted-foreground">Miami M&A advisory</p>
          </Link>
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
            <p className="text-xs text-muted-foreground">Statewide M&A advisory</p>
          </Link>
          <Link to="/business-valuation-calculator-fort-lauderdale" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Fort Lauderdale Calculator</p>
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

export default SellBusinessFortLauderdale;
