import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroTrustStrip from "@/components/HeroTrustStrip";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3, FileText } from "lucide-react";
import { speakableJsonLd } from "@/lib/seo-data";

const faqItems = [
  {
    q: "How do I sell my business in Florida?",
    a: "Selling a business in Florida involves several steps: obtaining a professional business valuation, preparing financial documentation, engaging an M&A advisor, identifying and vetting qualified buyers under NDA, negotiating deal terms, completing due diligence, and closing the transaction. The process typically takes 6–9 months with professional guidance.",
  },
  {
    q: "How much is my Florida business worth?",
    a: "Business value is primarily determined by adjusted EBITDA multiplied by an industry-specific multiple. Factors like revenue diversification, management depth, recurring revenue, and growth trajectory all influence the multiple. Businesses in the $3M–$50M range typically see multiples of 3x–7x EBITDA depending on these factors.",
  },
  {
    q: "Do I need a broker or M&A advisor to sell my business?",
    a: "While not legally required, business owners who work with an M&A advisor typically achieve significantly higher sale prices. An advisor manages buyer outreach, negotiations, due diligence, and closing — allowing you to continue running your business while maximizing transaction value.",
  },
  {
    q: "What taxes will I pay when selling my business in Florida?",
    a: "Florida has no state income tax, which can be advantageous. However, federal capital gains taxes apply. The tax impact depends on the deal structure (asset sale vs. stock sale), holding period, and other factors. We recommend working with a tax advisor alongside your M&A advisor to optimize the structure.",
  },
  {
    q: "How do I keep the sale of my business confidential?",
    a: "Confidentiality is maintained through NDA-protected buyer outreach, anonymized marketing materials, controlled information disclosure, and careful management of employee, customer, and vendor communications. A professional M&A advisor manages this entire process.",
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

const SellBusinessFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell a Business in Florida — Confidential M&A Advisory ($3M–$50M)"
      description="Sell your Florida business with a boutique M&A firm. Confidential valuations, vetted PE & strategic buyers, and proven 6–9 month closings for $3M–$50M companies."
      path="/sell-business-florida"
      jsonLd={[faqJsonLd, speakableJsonLd("/sell-business-florida")]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Florida M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Business in Florida with Confidence
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            CBH Business Group provides hands-on M&A advisory for Florida business owners ready to explore 
            a strategic exit. We handle valuation, buyer targeting, negotiation, and closing — so you can 
            focus on running your business until the deal is done.
          </p>
          <HeroTrustStrip />
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why Florida Owners Choose CBH</p>
          <h2 className="text-3xl font-serif text-foreground">A Process Built for Business Owners</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Professional Valuation", desc: "Market-based valuation with EBITDA normalization and industry benchmarking." },
            { icon: Shield, title: "Total Confidentiality", desc: "NDA-protected process. Your employees, customers, and competitors never know." },
            { icon: Users, title: "Qualified Buyers Only", desc: "Pre-vetted strategic acquirers, PE firms, and family offices — no tire-kickers." },
            { icon: TrendingUp, title: "Maximum Value", desc: "Competitive process management designed to drive premium multiples." },
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

    {/* Internal Links */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-primary mb-6 text-center">Related Resources</p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">EBITDA analysis & industry multiples</p>
          </Link>
          <Link to="/how-to-sell-a-business" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">How to Sell a Business</p>
            <p className="text-xs text-muted-foreground">Step-by-step M&A guide</p>
          </Link>
          <Link to="/valuation-calculator" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Estimate your business value</p>
          </Link>
          <Link to="/glossary" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">M&A Glossary</p>
            <p className="text-xs text-muted-foreground">Key terms explained</p>
          </Link>
          <Link to="/florida-ma-benchmarks" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Florida M&A Benchmarks</p>
            <p className="text-xs text-muted-foreground">Industry multiples data</p>
          </Link>
          <Link to="/industries" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Industry Expertise</p>
            <p className="text-xs text-muted-foreground">Sector-specific M&A advisory</p>
          </Link>
          <Link to="/what-is-ebitda" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">What Is EBITDA?</p>
            <p className="text-xs text-muted-foreground">Understanding the key metric</p>
          </Link>
          <Link to="/blog" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">M&A Insights</p>
            <p className="text-xs text-muted-foreground">Expert articles & guides</p>
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

export default SellBusinessFlorida;
