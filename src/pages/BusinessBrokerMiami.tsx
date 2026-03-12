import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3, Scale, Building2 } from "lucide-react";

const faqItems = [
  {
    q: "What does a business broker in Miami do?",
    a: "A business broker in Miami helps owners sell their businesses by providing valuations, marketing the business confidentially, identifying and qualifying buyers, facilitating negotiations, and managing the transaction through closing. Most brokers focus on businesses valued under $2M.",
  },
  {
    q: "What's the difference between a Miami business broker and an M&A advisor?",
    a: "Business brokers typically handle smaller transactions (under $2M) using listing-based approaches. M&A advisors like CBH Business Group work with mid-market companies ($3M–$50M+) using proactive buyer outreach, competitive bidding processes, and sophisticated deal structuring to maximize sale price.",
  },
  {
    q: "How much does a business broker charge in Miami?",
    a: "Miami business brokers typically charge 8–12% commission on smaller deals. M&A advisors for mid-market transactions ($3M+) generally charge 3–6% on a success-fee basis, often with a small retainer. The higher sale prices achieved through M&A advisory typically more than offset the fees.",
  },
  {
    q: "How do I choose the right business broker or M&A advisor in Miami?",
    a: "Look for industry experience, a track record of closed transactions in your size range, a clear process for maintaining confidentiality, and references from past clients. For businesses with $1M+ EBITDA, an M&A advisor with institutional buyer relationships will typically deliver better results than a traditional broker.",
  },
  {
    q: "Do I need a business broker to sell my business in Miami?",
    a: "While you can sell without one, businesses sold through professional intermediaries consistently achieve 20–40% higher prices than FSBO (for sale by owner) transactions. The broker or advisor manages confidentiality, buyer qualification, and negotiations — allowing you to focus on running your business during the sale.",
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

const BusinessBrokerMiami = () => (
  <Layout>
    <SEOHead
      title="Business Broker Miami | M&A Advisory Services"
      description="Looking for a business broker in Miami? Compare brokers vs. M&A advisors and find the right partner to sell your Miami business for maximum value. Free consultation."
      path="/business-broker-miami"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Business Broker vs M&A Advisor", path: "/business-broker-vs-ma-advisor" },
        { name: "Business Broker Miami", path: "/business-broker-miami" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Miami M&A Services</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Business Broker in Miami
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Searching for a business broker in Miami? Whether you're selling a small business or a 
            mid-market company, understanding the difference between a traditional broker and an M&A 
            advisor can mean the difference between an average sale and a premium exit.
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
          <h2 className="text-3xl font-serif text-foreground mb-8">Business Broker vs. M&A Advisor in Miami</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-border p-8">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-foreground">Traditional Business Broker</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Best for businesses under $2M in value</li>
                <li>• Listing-based approach (similar to real estate)</li>
                <li>• Commission: 8–12% of sale price</li>
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
                <li>• Success fee: 3–6% (higher sale prices offset)</li>
                <li>• Competitive bidding process</li>
                <li>• Strategic deal structuring & negotiation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why CBH Business Group</p>
          <h2 className="text-3xl font-serif text-foreground">Miami's M&A Advisory Advantage</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Users, title: "International Buyer Network", desc: "Miami's global connectivity means access to domestic and Latin American acquirers." },
            { icon: Shield, title: "NDA-Protected Process", desc: "Complete confidentiality from first meeting through closing." },
            { icon: BarChart3, title: "Data-Driven Valuations", desc: "Miami-specific comparable analysis for accurate pricing." },
            { icon: TrendingUp, title: "Premium Results", desc: "20–40% higher sale prices vs. unadvised transactions." },
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

    <section className="py-24">
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
          <Link to="/sell-my-business-miami" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell My Business Miami</p>
            <p className="text-xs text-muted-foreground">Miami owner's exit guide</p>
          </Link>
          <Link to="/sell-business-miami" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Miami</p>
            <p className="text-xs text-muted-foreground">Full Miami M&A guide</p>
          </Link>
          <Link to="/business-valuation-calculator-miami" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Miami Valuation Calculator</p>
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
        <h2 className="text-2xl font-serif text-foreground mb-4">Find the Right Partner for Your Miami Business Sale</h2>
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

export default BusinessBrokerMiami;
