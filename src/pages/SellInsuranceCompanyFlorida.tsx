import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, FileCheck } from "lucide-react";

const faqItems = [
  {
    q: "How much is my insurance agency worth in Florida?",
    a: "Insurance agency valuation depends on recurring commission revenue, retention rates, carrier mix, and book composition (personal vs. commercial lines). Florida agencies typically sell for 1.5x–3x annual revenue or 6x–10x adjusted EBITDA, with commercial-focused books commanding the highest multiples.",
  },
  {
    q: "How long does it take to sell an insurance agency in Florida?",
    a: "A typical insurance agency sale takes 4–9 months with professional representation. Key factors include carrier consent requirements, book transfer provisions, and the breadth of buyer outreach to strategic acquirers and PE-backed aggregators.",
  },
  {
    q: "What happens to my carrier appointments when I sell?",
    a: "Carrier appointments are typically transferred to the acquiring entity. An experienced M&A advisor ensures carrier consent letters are obtained early in the process and negotiates terms that protect both your clients and your deal value.",
  },
  {
    q: "Can I sell my insurance agency confidentially?",
    a: "Absolutely. Confidentiality is critical in insurance agency sales to protect client relationships, producer retention, and carrier partnerships. We use NDA-protected outreach and never publicly list businesses.",
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

const SellInsuranceCompanyFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell an Insurance Agency in Florida | M&A Advisory"
      description="Expert M&A advisory for selling your Florida insurance agency. Confidential valuations, carrier transfer guidance, and qualified buyer access for agencies valued $3M–$50M."
      path="/sell-insurance-company-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell an Insurance Agency in Florida", path: "/sell-insurance-company-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Insurance Agency M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Insurance Agency in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            CBH Business Group provides confidential M&A advisory for Florida insurance agency owners — from independent 
            P&C agencies to multi-line brokerages. We handle book valuation, carrier transitions, buyer targeting, 
            and closing so you can focus on serving your clients.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Agency Valuation</p>
          <h2 className="text-3xl font-serif text-foreground">What Drives Insurance Agency Value</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Recurring Commission Revenue", desc: "Stable renewal commissions and recurring revenue streams are the foundation of insurance agency valuation." },
            { title: "Client Retention Rate", desc: "High retention rates (90%+) demonstrate client loyalty and predictable revenue, commanding premium multiples." },
            { title: "Book Composition", desc: "Commercial lines, specialty programs, and diversified carrier relationships increase buyer appeal and valuation." },
            { title: "Producer Team Depth", desc: "Agencies with multiple producers beyond the owner reduce key-person risk and attract more buyer interest." },
            { title: "Technology & Systems", desc: "Modern agency management systems, digital quoting, and CRM platforms signal operational maturity to buyers." },
            { title: "Growth Trajectory", desc: "Agencies with consistent organic growth and new business pipeline command premium valuations from PE-backed buyers." },
          ].map((driver, i) => (
            <div key={i} className="border-l border-primary/20 pl-6">
              <h3 className="font-serif text-foreground mb-2">{driver.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{driver.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why CBH</p>
          <h2 className="text-3xl font-serif text-foreground">A Process Built for Agency Owners</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: FileCheck, title: "Carrier Navigation", desc: "We manage carrier consent, appointment transfers, and contingency considerations throughout the transaction." },
            { icon: Shield, title: "Total Confidentiality", desc: "Clients, producers, and carriers are never informed prematurely. NDA-protected process throughout." },
            { icon: Users, title: "Qualified Buyers", desc: "PE-backed insurance aggregators, strategic agencies, and experienced independent buyers actively seeking Florida books." },
            { icon: TrendingUp, title: "Maximum Value", desc: "Competitive process management to drive premium multiples on your recurring commission revenue." },
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
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
            <p className="text-xs text-muted-foreground">General M&A advisory guide</p>
          </Link>
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">EBITDA analysis & multiples</p>
          </Link>
          <Link to="/industries" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">All Industries</p>
            <p className="text-xs text-muted-foreground">Sector-specific advisory</p>
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

export default SellInsuranceCompanyFlorida;
