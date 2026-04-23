import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Anchor, Banknote, HeartPulse, Truck } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Jacksonville?",
    a: "Work with an M&A advisor who understands Northeast Florida's port-anchored economy. The process includes a confidential valuation tied to Duval and St. Johns County comparables, EBITDA normalization, NDA-protected outreach to logistics, financial services, and healthcare buyers, then negotiation and closing — typically 6–9 months for mid-market Jacksonville businesses.",
  },
  {
    q: "What is my Jacksonville business worth?",
    a: "Jacksonville businesses typically sell for 3.0x–6.0x EBITDA. The lower operating-cost base versus South Florida — labor, real estate, insurance — often translates to stronger normalized EBITDA margins, which in turn supports a more attractive enterprise value when adjusted for risk.",
  },
  {
    q: "Why is Jacksonville a strong market for selling a business?",
    a: "Jacksonville is Florida's largest city by land area (875 sq miles) and is anchored by JAXPORT, the region's third-largest container facility on the East Coast, plus major employers in financial services (Fidelity, Citi, Deutsche Bank), Mayo Clinic, and Naval Station Mayport. This diversified base supports steady buyer demand across cycles.",
  },
  {
    q: "Can I sell my Jacksonville business without anyone knowing?",
    a: "Yes. We run blind teasers, require executed NDAs before any company-identifying information is shared, and stage data-room access. Northeast Florida's defense and financial services networks are tighter than they appear, so disciplined buyer screening is critical.",
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

const SellMyBusinessJacksonville = () => (
  <Layout>
    <SEOHead
      title="Sell My Business in Jacksonville | M&A Advisory"
      description="Ready to sell your business in Jacksonville? Confidential valuations, qualified buyer access, and expert M&A advisory for Northeast Florida business owners. Free consultation."
      path="/sell-my-business-jacksonville"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Jacksonville", path: "/sell-business-jacksonville" },
        { name: "Sell My Business in Jacksonville", path: "/sell-my-business-jacksonville" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Jacksonville Business Sales</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell My Business in Jacksonville
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Jacksonville's diversified economy — spanning logistics, financial services, healthcare, and 
            construction — makes it one of Florida's most active M&A markets. We help Northeast Florida 
            business owners navigate confidential, value-maximizing exits.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why Jacksonville Owners Choose CBH</p>
          <h2 className="text-3xl font-serif text-foreground">Northeast Florida M&A Expertise</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Local Market Intelligence", desc: "Jacksonville-specific valuation analysis with Northeast Florida comparable transactions." },
            { icon: Shield, title: "100% Confidential", desc: "NDA-protected process ensuring complete privacy throughout your transaction." },
            { icon: Users, title: "Buyer Network", desc: "Access to PE firms, strategic acquirers, and individual buyers targeting the Jacksonville market." },
            { icon: TrendingUp, title: "Maximized Value", desc: "Competitive bidding process designed to achieve premium exit multiples." },
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
          <Link to="/sell-business-jacksonville" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Jacksonville</p>
            <p className="text-xs text-muted-foreground">Full Jacksonville M&A guide</p>
          </Link>
          <Link to="/business-valuation-calculator-jacksonville" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Jacksonville Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Free EBITDA-based estimate</p>
          </Link>
          <Link to="/business-broker-jacksonville" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Broker Jacksonville</p>
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
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Sell Your Jacksonville Business?</h2>
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

export default SellMyBusinessJacksonville;
