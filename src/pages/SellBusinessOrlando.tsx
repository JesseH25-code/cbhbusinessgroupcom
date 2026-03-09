import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Orlando?",
    a: "Selling a business in Orlando starts with a professional valuation, followed by confidential buyer outreach managed by an M&A advisor. The process includes LOI negotiation, due diligence, and closing — typically 6–9 months with proper preparation.",
  },
  {
    q: "What industries are strong for M&A in Orlando?",
    a: "Orlando has a thriving M&A market in hospitality and tourism services, healthcare, technology, construction, aerospace/defense, and professional services. The region's diversifying economy beyond tourism creates opportunities across multiple sectors.",
  },
  {
    q: "How much is my Orlando business worth?",
    a: "Orlando businesses in the $3M–$50M range typically trade at 3x–7x adjusted EBITDA. Tourism-adjacent businesses may see different multiples than B2B companies. Key value drivers include customer diversification, management depth, and growth trajectory.",
  },
  {
    q: "Is Orlando's economy too dependent on tourism for good valuations?",
    a: "Orlando's economy has diversified significantly. While tourism remains important, sectors like healthcare, tech, defense, and simulation/training have grown substantially. Businesses in these non-tourism sectors often command strong multiples from acquirers seeking Florida market exposure.",
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

const SellBusinessOrlando = () => (
  <Layout>
    <SEOHead
      title="Sell a Business in Orlando | M&A Advisory"
      description="M&A advisory for Orlando business owners. Professional valuation, confidential buyer outreach, and strategic deal execution for businesses valued $3M–$50M."
      path="/sell-business-orlando"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Orlando", path: "/sell-business-orlando" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Orlando M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Business in Orlando
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Orlando's rapidly diversifying economy creates strong demand from acquirers across multiple 
            sectors. CBH Business Group provides confidential, hands-on M&A advisory for Central Florida 
            business owners pursuing a strategic exit.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why Orlando Owners Choose CBH</p>
          <h2 className="text-3xl font-serif text-foreground">Central Florida M&A Expertise</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Accurate Valuation", desc: "Orlando-market comparable analysis with normalized EBITDA benchmarking." },
            { icon: Shield, title: "Full Confidentiality", desc: "NDA-protected process from first conversation through closing." },
            { icon: Users, title: "Diverse Buyer Pool", desc: "Strategic acquirers, PE firms, and search funds targeting Central Florida." },
            { icon: TrendingUp, title: "Growth Market", desc: "Orlando's expanding economy supports strong deal activity and valuations." },
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
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
            <p className="text-xs text-muted-foreground">Statewide M&A advisory</p>
          </Link>
          <Link to="/sell-construction-company-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Construction M&A</p>
            <p className="text-xs text-muted-foreground">Sell a construction company</p>
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

export default SellBusinessOrlando;
