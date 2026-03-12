import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3, Scale, Building2 } from "lucide-react";

const faqItems = [
  {
    q: "What does a business broker in Tampa do?",
    a: "A Tampa business broker helps owners sell their businesses through valuations, confidential marketing, buyer qualification, negotiation, and closing coordination. Traditional brokers focus on businesses under $2M, while M&A advisors handle mid-market companies ($3M+) with more sophisticated processes.",
  },
  {
    q: "How much does a business broker charge in Tampa?",
    a: "Tampa business brokers typically charge 8–12% commission on smaller transactions. M&A advisors working on mid-market deals ($3M+) generally charge 3–6% on a success-fee basis. The higher sale prices achieved through advisory services typically justify the investment.",
  },
  {
    q: "Should I use a business broker or M&A advisor in Tampa?",
    a: "If your business generates less than $500K in annual revenue, a traditional broker is appropriate. For businesses with $1M+ EBITDA, an M&A advisor's proactive buyer outreach, competitive process, and deal structuring expertise typically deliver significantly higher outcomes.",
  },
  {
    q: "How do I find the best business broker in Tampa?",
    a: "Look for closed transaction experience in your industry and size range, local Tampa Bay market knowledge, a clear confidentiality process, and client references. For mid-market businesses, prioritize advisors with institutional buyer relationships over traditional listing brokers.",
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

const BusinessBrokerTampa = () => (
  <Layout>
    <SEOHead
      title="Business Broker Tampa | M&A Advisory Services"
      description="Looking for a business broker in Tampa? Compare brokers vs. M&A advisors for selling your Tampa Bay business. Expert guidance, confidential process. Free consultation."
      path="/business-broker-tampa"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Business Broker vs M&A Advisor", path: "/business-broker-vs-ma-advisor" },
        { name: "Business Broker Tampa", path: "/business-broker-tampa" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Tampa Bay M&A Services</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Business Broker in Tampa
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Looking for a business broker in Tampa? The Tampa Bay area's rapid growth makes it one of 
            Florida's hottest M&A markets. Understanding whether you need a traditional broker or an 
            M&A advisor is the first step to maximizing your exit value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get a Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/business-broker-vs-ma-advisor">
              <Button variant="outline" size="lg">
                Broker vs. M&A Advisor Guide
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Understanding Your Options</p>
          <h2 className="text-3xl font-serif text-foreground mb-8">Business Broker vs. M&A Advisor in Tampa</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-foreground">Traditional Business Broker</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Best for businesses under $2M in value</li>
                <li>• Listing-based approach</li>
                <li>• Commission: 8–12%</li>
                <li>• Reactive buyer matching</li>
                <li>• Standard transaction process</li>
              </ul>
            </div>
            <div className="border-2 border-primary p-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-foreground">M&A Advisor (CBH Approach)</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Ideal for businesses $3M–$50M+ in value</li>
                <li>• Proactive, targeted buyer outreach</li>
                <li>• Success fee: 3–6%</li>
                <li>• Competitive bidding process</li>
                <li>• Strategic deal structuring</li>
              </ul>
            </div>
          </div>
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
          <Link to="/sell-my-business-tampa" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell My Business Tampa</p>
            <p className="text-xs text-muted-foreground">Tampa owner's exit guide</p>
          </Link>
          <Link to="/sell-business-tampa" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Tampa</p>
            <p className="text-xs text-muted-foreground">Full Tampa M&A guide</p>
          </Link>
          <Link to="/business-valuation-calculator-tampa" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Tampa Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Free EBITDA-based estimate</p>
          </Link>
          <Link to="/business-broker-vs-ma-advisor" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Broker vs. M&A Advisor</p>
            <p className="text-xs text-muted-foreground">Complete comparison</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Find the Right Partner for Your Tampa Business Sale</h2>
        <p className="text-muted-foreground mb-8">Free, confidential consultation — no obligation.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default BusinessBrokerTampa;
