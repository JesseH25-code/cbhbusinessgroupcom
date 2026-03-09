import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my HVAC company in Florida?",
    a: "Selling an HVAC company involves documenting your service agreement base, technician roster, equipment fleet, and financial performance. An M&A advisor will normalize your EBITDA, highlight recurring revenue from maintenance contracts, and position your company to attract PE-backed consolidators and strategic acquirers.",
  },
  {
    q: "What are HVAC company valuation multiples in Florida?",
    a: "Florida HVAC companies in the $3M–$50M range typically trade at 4x–7x adjusted EBITDA. Companies with strong service agreement bases, residential and commercial diversification, and growing maintenance revenue command the highest multiples.",
  },
  {
    q: "Why is HVAC such an active M&A sector?",
    a: "HVAC is one of the most active M&A sectors due to recurring revenue from service contracts, essential-service demand (especially in Florida's climate), fragmented markets ripe for consolidation, and strong cash flow characteristics. Private equity firms have been aggressively building HVAC platforms.",
  },
  {
    q: "What makes an HVAC company valuable to buyers?",
    a: "Key value drivers include maintenance/service agreement revenue, diversified customer base (residential + commercial), strong technician team with certifications, modern fleet and equipment, documented processes, and consistent growth in both revenue and margins.",
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

const SellHVACCompanyFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell an HVAC Company in Florida | HVAC M&A"
      description="Specialized M&A advisory for Florida HVAC companies. Expert valuations for residential and commercial HVAC businesses valued $3M–$50M."
      path="/sell-hvac-company-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell an HVAC Company in Florida", path: "/sell-hvac-company-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">HVAC M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your HVAC Company in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Florida's climate makes HVAC an essential service — and one of the most active M&A sectors 
            in the state. CBH Business Group helps HVAC owners maximize value by positioning service 
            agreements, technician teams, and growth metrics for today's aggressive buyer market.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">HVAC M&A Expertise</p>
          <h2 className="text-3xl font-serif text-foreground">Why HVAC Owners Choose CBH</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Recurring Revenue Focus", desc: "Valuation that properly weights service agreements and maintenance contracts." },
            { icon: Shield, title: "Team Protection", desc: "Confidential process that protects technician retention throughout." },
            { icon: Users, title: "PE Platform Access", desc: "Direct relationships with PE-backed HVAC consolidators actively acquiring." },
            { icon: TrendingUp, title: "Premium Multiples", desc: "Florida's climate-driven demand supports strong HVAC valuations." },
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
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
            <p className="text-xs text-muted-foreground">Statewide M&A advisory</p>
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

export default SellHVACCompanyFlorida;
