import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3, Scale, Building2 } from "lucide-react";

const faqItems = [
  {
    q: "What does a business broker in Jacksonville do?",
    a: "A Jacksonville business broker helps owners sell through valuations, confidential marketing, buyer qualification, negotiation, and closing coordination. For mid-market companies ($3M+), M&A advisors offer proactive buyer outreach and competitive processes that typically yield higher sale prices.",
  },
  {
    q: "How much does a business broker charge in Jacksonville?",
    a: "Jacksonville brokers typically charge 8–12% commission for smaller deals. M&A advisors for mid-market transactions ($3M+) charge 3–6% on a success-fee basis. The structured competitive process consistently delivers higher total proceeds.",
  },
  {
    q: "What industries drive M&A activity in Jacksonville?",
    a: "Jacksonville's M&A market is active in logistics and transportation, financial services, healthcare, construction, military/defense contracting, and professional services. The Port of Jacksonville and Navy presence create unique acquisition targets.",
  },
  {
    q: "Do I need a business broker to sell in Jacksonville?",
    a: "While not required, businesses sold through professional intermediaries achieve 20–40% higher prices. A broker or M&A advisor manages confidentiality, qualifies buyers, and negotiates on your behalf — letting you focus on running the business during the sale.",
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

const BusinessBrokerJacksonville = () => (
  <Layout>
    <SEOHead
      title="Business Broker Jacksonville | M&A Advisory"
      description="Looking for a business broker in Jacksonville? Compare brokers vs. M&A advisors for selling your Northeast Florida business. Free confidential consultation."
      path="/business-broker-jacksonville"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Business Broker vs M&A Advisor", path: "/business-broker-vs-ma-advisor" },
        { name: "Business Broker Jacksonville", path: "/business-broker-jacksonville" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Jacksonville M&A Services</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Business Broker in Jacksonville
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Jacksonville's diversified economy — logistics, financial services, healthcare, and defense — 
            creates strong M&A demand. Whether you need a traditional broker or a full-service M&A 
            advisor depends on your business's size and complexity.
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
          <h2 className="text-3xl font-serif text-foreground mb-8">Business Broker vs. M&A Advisor in Jacksonville</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-foreground">Traditional Business Broker</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Best for businesses under $2M</li>
                <li>• Listing-based approach</li>
                <li>• Commission: 8–12%</li>
                <li>• Reactive buyer matching</li>
              </ul>
            </div>
            <div className="border-2 border-primary p-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-foreground">M&A Advisor (CBH Approach)</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Ideal for businesses $3M–$50M+</li>
                <li>• Proactive, targeted outreach</li>
                <li>• Success fee: 3–6%</li>
                <li>• Competitive bidding process</li>
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
          <Link to="/sell-my-business-jacksonville" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell My Business Jacksonville</p>
            <p className="text-xs text-muted-foreground">Jacksonville owner's exit guide</p>
          </Link>
          <Link to="/sell-business-jacksonville" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Jacksonville</p>
            <p className="text-xs text-muted-foreground">Full Jacksonville M&A guide</p>
          </Link>
          <Link to="/business-valuation-calculator-jacksonville" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Jacksonville Valuation Calculator</p>
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
        <h2 className="text-2xl font-serif text-foreground mb-4">Find the Right Partner for Your Jacksonville Business Sale</h2>
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

export default BusinessBrokerJacksonville;
