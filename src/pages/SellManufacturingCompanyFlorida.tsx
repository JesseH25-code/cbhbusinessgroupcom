import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Factory, Shield, TrendingUp, Users } from "lucide-react";

const faqItems = [
  {
    q: "How much is my manufacturing company worth in Florida?",
    a: "Manufacturing company valuation depends on adjusted EBITDA, equipment condition, customer diversification, and production capacity. Florida manufacturers typically trade at 4x–7x EBITDA, with higher multiples for proprietary products and strong customer contracts.",
  },
  {
    q: "What do buyers look for in a manufacturing acquisition?",
    a: "Key factors include production efficiency, equipment condition and age, customer concentration, skilled workforce availability, supply chain resilience, and margin quality. Companies with recurring orders and diversified customer bases command premiums.",
  },
  {
    q: "How is manufacturing equipment valued in a sale?",
    a: "Equipment is typically appraised separately using fair market value or orderly liquidation value methods. Well-maintained, modern equipment adds significant tangible asset value beyond the EBITDA-based enterprise valuation.",
  },
  {
    q: "Will my employees be retained after the sale?",
    a: "Most strategic and PE acquirers plan to retain the existing workforce, especially skilled operators and management. Employment continuity is typically addressed in the purchase agreement to ensure a smooth transition.",
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

const SellManufacturingCompanyFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell a Manufacturing Company in Florida | M&A Advisory"
      description="Expert M&A advisory for selling your Florida manufacturing company. Confidential process, professional valuation, and strategic buyer identification for manufacturers."
      path="/sell-manufacturing-company-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell a Manufacturing Company in Florida", path: "/sell-manufacturing-company-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Manufacturing M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Manufacturing Company in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            CBH Business Group advises manufacturing company owners on confidential sale transactions. 
            We position your company around production capabilities, equipment assets, customer relationships, 
            and workforce depth to attract premium buyers.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Manufacturing Valuation</p>
          <h2 className="text-3xl font-serif text-foreground">What Drives Manufacturing Company Value</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Production Capacity", desc: "Utilization rates, expansion capability, and production efficiency metrics directly impact valuation multiples." },
            { title: "Customer Contracts", desc: "Long-term customer agreements with recurring orders demonstrate revenue predictability and reduce buyer risk." },
            { title: "Equipment & Facilities", desc: "Modern, well-maintained equipment and owned or long-term leased facilities add tangible value." },
            { title: "Supply Chain Position", desc: "Diversified supplier base and strategic position in the supply chain create competitive advantages." },
            { title: "Skilled Workforce", desc: "Experienced operators, engineers, and quality personnel are critical retention assets for acquirers." },
            { title: "IP & Proprietary Processes", desc: "Proprietary products, patents, or unique manufacturing processes command significant premium multiples." },
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
          <h2 className="text-3xl font-serif text-foreground">Manufacturing Transaction Expertise</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Factory, title: "Sector Knowledge", desc: "Understanding of production economics, capex cycles, and manufacturing-specific financial normalization." },
            { icon: Shield, title: "Total Confidentiality", desc: "Customers, suppliers, and employees are never informed. NDA-protected outreach only." },
            { icon: Users, title: "Strategic Buyers", desc: "PE platforms, strategic acquirers seeking product/geographic expansion, and international buyers." },
            { icon: TrendingUp, title: "Maximum Value", desc: "Competitive process to capture premium industrial multiples in Florida's growing market." },
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
          <Link to="/industries#manufacturing" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Manufacturing & Distribution</p>
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

export default SellManufacturingCompanyFlorida;
