import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, HardHat, Shield, TrendingUp, Users } from "lucide-react";

const faqItems = [
  {
    q: "How much is my construction company worth in Florida?",
    a: "Construction company valuation depends on adjusted EBITDA, backlog quality, bonding capacity, and equipment assets. Florida construction firms typically trade at 3x–6x EBITDA, with higher multiples for specialty trades and strong recurring revenue streams.",
  },
  {
    q: "How do buyers evaluate construction company backlog?",
    a: "Buyers assess backlog duration, margin profile, contract types (fixed-price vs. cost-plus), customer concentration, and the mix of public vs. private sector work. A diversified backlog with strong margins commands premium valuations.",
  },
  {
    q: "What role does bonding capacity play in valuation?",
    a: "Bonding capacity is a significant value driver. Established surety relationships and high bonding limits demonstrate financial stability and enable larger project pursuit, making your company more attractive to strategic acquirers.",
  },
  {
    q: "Can I sell my construction company while maintaining confidentiality?",
    a: "Yes. Confidentiality is essential to protect employee retention, customer relationships, and bonding relationships. We manage the entire process under NDA with targeted, discrete outreach to pre-qualified buyers.",
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

const SellConstructionCompanyFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell a Construction Company in Florida | M&A Advisory"
      description="Expert M&A advisory for selling your Florida construction company. Confidential process, professional valuation, and qualified buyer identification for contractors and specialty trades."
      path="/sell-construction-company-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell a Construction Company in Florida", path: "/sell-construction-company-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Construction M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Construction Company in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            CBH Business Group advises construction company owners through confidential sale transactions. 
            We structure deals around backlog quality, bonding capacity, equipment assets, and workforce 
            depth to maximize your transaction value.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Construction Valuation</p>
          <h2 className="text-3xl font-serif text-foreground">What Drives Construction Company Value</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Backlog Quality", desc: "Duration, margin profile, and contract diversity in your project backlog directly impact enterprise value." },
            { title: "Bonding Capacity", desc: "Strong surety relationships and high bonding limits signal financial stability and growth potential." },
            { title: "Equipment Fleet", desc: "Owned equipment with documented maintenance history adds tangible asset value to the transaction." },
            { title: "Workforce Depth", desc: "Licensed operators, skilled tradespeople, and experienced project managers reduce buyer transition risk." },
            { title: "Customer Diversification", desc: "Balanced mix of public and private sector clients with no single customer exceeding 20% of revenue." },
            { title: "Safety Record", desc: "Strong EMR ratings and documented safety programs demonstrate operational maturity to acquirers." },
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
          <h2 className="text-3xl font-serif text-foreground">Construction Transaction Expertise</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: HardHat, title: "Sector Knowledge", desc: "Deep understanding of WIP schedules, percentage-of-completion accounting, and construction finance." },
            { icon: Shield, title: "Total Confidentiality", desc: "Bonding companies, employees, and subcontractors are never informed. NDA-protected process." },
            { icon: Users, title: "Qualified Buyers", desc: "Regional contractors, PE-backed platforms, national firms seeking Florida market entry." },
            { icon: TrendingUp, title: "Maximum Value", desc: "Competitive process to drive premium multiples on your adjusted EBITDA." },
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
          <Link to="/industries#construction" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Construction & Engineering</p>
            <p className="text-xs text-muted-foreground">Sector overview</p>
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

export default SellConstructionCompanyFlorida;
