import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Orlando?",
    a: "Engage an M&A advisor who understands Central Florida's diverse economy. The process includes confidential valuation, financial preparation, strategic buyer outreach, negotiation, and closing — typically 6–9 months for businesses with $1M+ EBITDA.",
  },
  {
    q: "What is my Orlando business worth?",
    a: "Orlando businesses generally sell for 3x–6x EBITDA. Tourism-adjacent businesses, technology companies, and healthcare services often command premium multiples due to Orlando's strong economic diversification beyond hospitality.",
  },
  {
    q: "Is Orlando a good market to sell a business?",
    a: "Yes. Orlando's economy has diversified significantly beyond tourism into technology, healthcare, defense, and professional services. Population growth and corporate relocations drive strong buyer demand across multiple sectors.",
  },
  {
    q: "How long does it take to sell a business in Orlando?",
    a: "Most transactions close in 6–9 months. Well-prepared businesses with clean financials and strong EBITDA may close faster, while complex deals or niche industries may take up to 12 months.",
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

const SellMyBusinessOrlando = () => (
  <Layout>
    <SEOHead
      title="Sell My Business in Orlando | Confidential M&A Advisory"
      description="Looking to sell your business in Orlando? Get a confidential valuation, access qualified buyers, and maximize your exit. Free consultation with Florida M&A advisors."
      path="/sell-my-business-orlando"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Orlando", path: "/sell-business-orlando" },
        { name: "Sell My Business in Orlando", path: "/sell-my-business-orlando" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Orlando Business Sales</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell My Business in Orlando
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Orlando's economy has evolved far beyond tourism — and so has its M&A market. Whether you own 
            a technology company, healthcare practice, or professional services firm, we help Central Florida 
            business owners navigate a confidential, value-maximizing exit.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why Orlando Owners Choose CBH</p>
          <h2 className="text-3xl font-serif text-foreground">Central Florida M&A Expertise</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Market-Based Valuation", desc: "Orlando-specific analysis using local comparable transactions and industry benchmarks." },
            { icon: Shield, title: "Complete Confidentiality", desc: "NDA-protected process from first conversation through closing." },
            { icon: Users, title: "Qualified Buyer Network", desc: "Access to PE firms, strategic acquirers, and individuals targeting Central Florida." },
            { icon: TrendingUp, title: "Premium Outcomes", desc: "Competitive process designed to maximize your business's sale price." },
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
          <Link to="/sell-business-orlando" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Orlando</p>
            <p className="text-xs text-muted-foreground">Full Orlando M&A guide</p>
          </Link>
          <Link to="/business-valuation-calculator-orlando" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Orlando Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Free EBITDA-based estimate</p>
          </Link>
          <Link to="/business-broker-orlando" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Broker Orlando</p>
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
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Sell Your Orlando Business?</h2>
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

export default SellMyBusinessOrlando;
