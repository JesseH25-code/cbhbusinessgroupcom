import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3, Scale, Building2 } from "lucide-react";

const faqItems = [
  {
    q: "What does a business broker in Fort Lauderdale do?",
    a: "A Fort Lauderdale business broker helps owners sell through valuations, confidential marketing, buyer qualification, and closing coordination. For mid-market companies ($3M+), M&A advisors provide strategic buyer outreach and competitive bidding to maximize sale price.",
  },
  {
    q: "How much does a business broker charge in Fort Lauderdale?",
    a: "Fort Lauderdale brokers charge 8–12% for smaller transactions. M&A advisors handling mid-market deals ($3M+) charge 3–6% on a success-fee basis. South Florida's premium buyer demand often means M&A advisory delivers significantly higher net proceeds.",
  },
  {
    q: "What industries are active for M&A in Fort Lauderdale?",
    a: "Fort Lauderdale's M&A market is driven by marine and yachting, technology, healthcare, professional services, real estate services, and hospitality. Broward County's concentration of family offices and wealth managers also drives direct investment activity.",
  },
  {
    q: "How do I find the best business broker in Fort Lauderdale?",
    a: "Look for transaction experience in your industry and size range, South Florida market expertise, a structured confidentiality process, and verifiable references. For businesses with $1M+ EBITDA, an M&A advisor with institutional relationships will outperform a traditional listing broker.",
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

const BusinessBrokerFortLauderdale = () => (
  <Layout>
    <SEOHead
      title="Business Broker Fort Lauderdale | M&A Advisory"
      description="Looking for a business broker in Fort Lauderdale? Compare brokers vs. M&A advisors for selling your Broward County business. Free confidential consultation."
      path="/business-broker-fort-lauderdale"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Business Broker vs M&A Advisor", path: "/business-broker-vs-ma-advisor" },
        { name: "Business Broker Fort Lauderdale", path: "/business-broker-fort-lauderdale" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Fort Lauderdale M&A Services</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Business Broker in Fort Lauderdale
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Fort Lauderdale's affluent market and concentration of family offices make Broward County 
            one of South Florida's most active M&A markets. The right intermediary can mean the difference 
            between a standard sale and a premium exit.
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
          <h2 className="text-3xl font-serif text-foreground mb-8">Business Broker vs. M&A Advisor in Fort Lauderdale</h2>
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
          <Link to="/sell-my-business-fort-lauderdale" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell My Business Fort Lauderdale</p>
            <p className="text-xs text-muted-foreground">Fort Lauderdale owner's exit guide</p>
          </Link>
          <Link to="/sell-business-fort-lauderdale" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Fort Lauderdale</p>
            <p className="text-xs text-muted-foreground">Full Fort Lauderdale M&A guide</p>
          </Link>
          <Link to="/business-valuation-calculator-fort-lauderdale" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Fort Lauderdale Calculator</p>
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
        <h2 className="text-2xl font-serif text-foreground mb-4">Find the Right Partner for Your Fort Lauderdale Business Sale</h2>
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

export default BusinessBrokerFortLauderdale;
