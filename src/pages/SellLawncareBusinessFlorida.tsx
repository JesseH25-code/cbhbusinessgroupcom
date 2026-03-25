import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, Leaf } from "lucide-react";

const faqItems = [
  {
    q: "How much is my lawncare business worth in Florida?",
    a: "Lawncare business valuation depends on recurring service contracts, route density, equipment condition, and crew reliability. Florida lawncare companies typically sell for 3x–5x adjusted EBITDA, with businesses featuring strong recurring residential and commercial contracts commanding premium multiples.",
  },
  {
    q: "How long does it take to sell a lawncare business in Florida?",
    a: "A typical lawncare business sale takes 4–8 months with professional representation. Key factors include contract transferability, equipment condition, crew retention plans, and the quality of financial documentation.",
  },
  {
    q: "What's the difference between selling a lawncare vs. landscaping business?",
    a: "Lawncare businesses focus on recurring maintenance services — mowing, fertilization, weed control, and pest management. Landscaping businesses include design, installation, and hardscaping. Lawncare's recurring revenue model often commands higher multiples due to predictability.",
  },
  {
    q: "Can I sell my lawncare business confidentially?",
    a: "Absolutely. Confidentiality protects your customer relationships, crew morale, and competitive position. We use NDA-protected outreach and never publicly list businesses.",
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

const SellLawncareBusinessFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell a Lawncare Business in Florida | M&A Advisory"
      description="Expert M&A advisory for selling your Florida lawncare business. Confidential valuations, recurring revenue positioning, and qualified buyer access for companies valued $3M–$50M."
      path="/sell-lawncare-business-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell a Lawncare Business in Florida", path: "/sell-lawncare-business-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Lawncare M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Lawncare Business in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            CBH Business Group provides confidential M&A advisory for Florida lawncare business owners — from 
            residential maintenance operations to commercial mowing and fertilization companies. We handle 
            recurring revenue valuation, route analysis, buyer targeting, and closing.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Lawncare Valuation</p>
          <h2 className="text-3xl font-serif text-foreground">What Drives Lawncare Business Value</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Recurring Service Contracts", desc: "Monthly and seasonal maintenance contracts form the backbone of lawncare valuation — predictable, transferable revenue." },
            { title: "Route Density & Efficiency", desc: "Tightly clustered service routes reduce drive time and fuel costs, directly improving margins and buyer appeal." },
            { title: "Customer Retention Rate", desc: "High retention (85%+) signals customer satisfaction and revenue stability, commanding premium multiples." },
            { title: "Crew Stability", desc: "Reliable, trained crews reduce buyer risk. Documented training programs and low turnover increase deal confidence." },
            { title: "Equipment Condition", desc: "Well-maintained mowers, trucks, and spray equipment reduce capital expenditure requirements for buyers." },
            { title: "Year-Round Revenue", desc: "Florida's climate enables 12-month service — a major advantage over seasonal markets that buyers value highly." },
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
          <h2 className="text-3xl font-serif text-foreground">A Process Built for Lawncare Owners</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Leaf, title: "Industry Knowledge", desc: "We understand route economics, contract structures, chemical application licensing, and the lawncare buyer landscape." },
            { icon: Shield, title: "Total Confidentiality", desc: "Customers, crews, and competitors are never informed. NDA-protected process throughout." },
            { icon: Users, title: "Qualified Buyers", desc: "PE-backed lawn & landscape platforms, regional consolidators, and experienced owner-operators seeking Florida routes." },
            { icon: TrendingUp, title: "Maximum Value", desc: "Competitive process management to drive premium multiples on your recurring contract revenue." },
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
          <Link to="/sell-landscaping-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Landscaping Business</p>
            <p className="text-xs text-muted-foreground">Design & installation focused</p>
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

export default SellLawncareBusinessFlorida;
