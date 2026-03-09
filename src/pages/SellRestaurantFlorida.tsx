import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, UtensilsCrossed, Shield, TrendingUp, Users } from "lucide-react";

const faqItems = [
  {
    q: "How much is my restaurant worth in Florida?",
    a: "Restaurant valuation depends on adjusted cash flow (SDE or EBITDA), lease terms, brand strength, and location. Florida restaurants typically sell for 2x–4x adjusted earnings, though multi-unit concepts with strong systems can command higher multiples.",
  },
  {
    q: "How long does it take to sell a restaurant in Florida?",
    a: "A typical restaurant sale takes 4–8 months with professional representation. Key factors include lease transferability, financial documentation quality, and the breadth of buyer outreach.",
  },
  {
    q: "Should I sell my restaurant as an asset sale or stock sale?",
    a: "Most restaurant transactions are structured as asset sales, which allow buyers to step up the tax basis on equipment and improvements. Your M&A advisor and tax professional will recommend the optimal structure based on your specific situation.",
  },
  {
    q: "Can I sell my restaurant confidentially?",
    a: "Absolutely. Confidentiality is critical in restaurant sales to protect employee morale, customer loyalty, and vendor relationships. We use NDA-protected outreach and never publicly list businesses.",
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

const SellRestaurantFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell a Restaurant in Florida | M&A Advisory"
      description="Expert M&A advisory for selling your Florida restaurant. Confidential process, professional valuation, and qualified buyer identification for restaurant businesses."
      path="/sell-restaurant-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell a Restaurant in Florida", path: "/sell-restaurant-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Restaurant M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Restaurant Business in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            CBH Business Group provides confidential M&A advisory for Florida restaurant owners — from single-unit 
            operations to multi-location concepts. We handle valuation, buyer targeting, lease negotiations, 
            and closing so you can focus on operations.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Restaurant Valuation</p>
          <h2 className="text-3xl font-serif text-foreground">What Drives Restaurant Value</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Lease Quality & Terms", desc: "Favorable lease terms, renewal options, and below-market rents significantly impact restaurant valuation." },
            { title: "Revenue Consistency", desc: "Stable or growing revenue trends over 3+ years demonstrate demand resilience and operational strength." },
            { title: "Brand & Concept Strength", desc: "Differentiated concepts with loyal customer bases and strong online reviews command premium multiples." },
            { title: "Systems & Processes", desc: "Documented recipes, training programs, and operational procedures enable smooth ownership transitions." },
            { title: "Staff Retention", desc: "Low turnover and experienced management teams reduce buyer risk and increase transaction confidence." },
            { title: "Multi-Unit Scalability", desc: "Proven concepts with replicable models attract PE buyers seeking roll-up opportunities in Florida." },
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
          <h2 className="text-3xl font-serif text-foreground">A Process Built for Restaurant Owners</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: UtensilsCrossed, title: "Industry Knowledge", desc: "We understand food cost ratios, lease negotiations, and the buyer landscape for restaurant transactions." },
            { icon: Shield, title: "Total Confidentiality", desc: "Employees, vendors, and customers are never informed. NDA-protected process throughout." },
            { icon: Users, title: "Qualified Buyers", desc: "Strategic acquirers, multi-unit operators, PE-backed restaurant groups, and experienced independents." },
            { icon: TrendingUp, title: "Maximum Value", desc: "Competitive process management to drive premium multiples on your adjusted earnings." },
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

    {/* Internal Links */}
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

export default SellRestaurantFlorida;
