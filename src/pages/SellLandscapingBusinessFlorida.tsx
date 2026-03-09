import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my landscaping business in Florida?",
    a: "Start by documenting your recurring maintenance contracts, equipment inventory, crew certifications, and financial performance. An M&A advisor will normalize EBITDA, highlight recurring revenue, and connect you with strategic acquirers and PE-backed landscape consolidators.",
  },
  {
    q: "What are landscaping business valuation multiples?",
    a: "Florida landscaping businesses in the $3M–$50M range typically trade at 3x–6x adjusted EBITDA. Companies with high percentages of recurring maintenance contracts, commercial accounts, and diversified customer bases command the highest multiples.",
  },
  {
    q: "Why is landscaping an active M&A sector in Florida?",
    a: "Florida's year-round growing season, rapid development, and HOA/commercial maintenance demand create a large, recurring revenue base. PE firms are actively consolidating the fragmented landscape industry, creating strong buyer competition for quality operators.",
  },
  {
    q: "What makes a landscaping company attractive to buyers?",
    a: "Key value drivers include percentage of revenue from recurring maintenance contracts, commercial vs. residential mix, crew retention and depth, equipment condition, geographic density of accounts, and demonstrated ability to grow without owner involvement.",
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

const SellLandscapingBusinessFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell a Landscaping Business in Florida | M&A"
      description="M&A advisory for Florida landscaping companies. Expert valuations for commercial and residential landscape businesses valued $3M–$50M."
      path="/sell-landscaping-business-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell a Landscaping Business", path: "/sell-landscaping-business-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Landscaping M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Landscaping Business in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Florida's year-round growing season and PE-driven consolidation have made landscaping one of 
            the most active M&A sectors. CBH Business Group helps landscape company owners maximize value 
            by positioning recurring contracts, crew depth, and operational systems for today's buyers.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Landscape M&A Expertise</p>
          <h2 className="text-3xl font-serif text-foreground">Why Landscape Owners Choose CBH</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Contract Valuation", desc: "Proper weighting of recurring maintenance revenue and contract terms." },
            { icon: Shield, title: "Crew Protection", desc: "Confidential process protecting crew retention and customer relationships." },
            { icon: Users, title: "Consolidator Access", desc: "Direct relationships with PE-backed landscape platforms actively acquiring." },
            { icon: TrendingUp, title: "Florida Premium", desc: "Year-round operations and growth dynamics support strong multiples." },
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
          <Link to="/sell-construction-company-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Construction M&A</p>
            <p className="text-xs text-muted-foreground">Sell a construction company</p>
          </Link>
          <Link to="/sell-hvac-company-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">HVAC M&A</p>
            <p className="text-xs text-muted-foreground">Sell an HVAC company</p>
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

export default SellLandscapingBusinessFlorida;
