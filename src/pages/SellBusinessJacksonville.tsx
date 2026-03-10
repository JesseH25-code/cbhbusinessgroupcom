import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Jacksonville?",
    a: "Begin with a professional business valuation, then engage an M&A advisor familiar with the Northeast Florida market. The process involves confidential buyer outreach, LOI negotiation, due diligence, and closing — typically 6–9 months.",
  },
  {
    q: "What industries are active in Jacksonville M&A?",
    a: "Jacksonville has strong M&A activity in logistics and transportation, healthcare, financial services, manufacturing, construction, and professional services. The city's port and military presence also drive demand in defense contracting and related sectors.",
  },
  {
    q: "What is my Jacksonville business worth?",
    a: "Jacksonville businesses in the $3M–$50M range typically trade at 3x–7x adjusted EBITDA. The city's lower cost of operations compared to South Florida can be attractive to acquirers, potentially supporting competitive deal dynamics.",
  },
  {
    q: "Is Jacksonville a good market for selling a business?",
    a: "Yes. Jacksonville is Florida's largest city by area and has a diversified economy anchored by logistics, healthcare, and financial services. Its growing population, business-friendly environment, and lower cost structure attract both strategic acquirers and PE-backed platforms.",
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

const SellBusinessJacksonville = () => (
  <Layout>
    <SEOHead
      title="Sell a Business in Jacksonville | M&A Advisory"
      description="M&A advisory for Jacksonville business owners. Professional valuations, confidential buyer outreach, and deal execution for businesses valued $3M–$50M."
      path="/sell-business-jacksonville"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Jacksonville", path: "/sell-business-jacksonville" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Jacksonville M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Business in Jacksonville
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Jacksonville's diversified economy — anchored by logistics, healthcare, and financial services — 
            creates strong buyer demand across multiple sectors. CBH Business Group provides confidential 
            M&A advisory for Northeast Florida business owners.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why Jacksonville Owners Choose CBH</p>
          <h2 className="text-3xl font-serif text-foreground">Northeast Florida M&A Expertise</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Local Valuation", desc: "Jacksonville-market analysis with normalized EBITDA and industry benchmarks." },
            { icon: Shield, title: "Full Confidentiality", desc: "NDA-protected buyer outreach from initial contact through closing." },
            { icon: Users, title: "Strategic Buyers", desc: "Access to acquirers targeting Jacksonville's logistics, healthcare, and services sectors." },
            { icon: TrendingUp, title: "Competitive Dynamics", desc: "Jacksonville's growth attracts PE firms and strategic acquirers seeking Florida platforms." },
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
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
            <p className="text-xs text-muted-foreground">Statewide M&A advisory</p>
          </Link>
          <Link to="/sell-manufacturing-company-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Manufacturing M&A</p>
            <p className="text-xs text-muted-foreground">Sell a manufacturing company</p>
          </Link>
          <Link to="/business-valuation-calculator-jacksonville" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Jacksonville Valuation Calculator</p>
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

export default SellBusinessJacksonville;
