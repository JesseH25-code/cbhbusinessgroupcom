import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, Search, MapPin, Building2 } from "lucide-react";

const faqItems = [
  {
    q: "Where can I find businesses for sale in Florida?",
    a: "Quality businesses in the $3M–$50M range are rarely listed on public marketplaces. The best opportunities come through M&A advisors who manage confidential, off-market processes. Registering with an advisory firm like CBH Business Group gives you access to vetted deals before they reach the broader market.",
  },
  {
    q: "What types of Florida businesses are currently for sale?",
    a: "Active sectors include healthcare, construction, HVAC, technology, professional services, manufacturing, restaurants, and landscaping. Our current opportunities span multiple Florida metro areas including Miami, Tampa, Orlando, Jacksonville, and Fort Lauderdale.",
  },
  {
    q: "How do I get access to off-market business opportunities?",
    a: "Contact our team with your acquisition criteria — industry preferences, size range, geography, and investment capacity. After signing an NDA, we'll match you with relevant opportunities from our current deal flow and alert you to new opportunities as they arise.",
  },
  {
    q: "What is the process for buying a business through CBH?",
    a: "After defining criteria and signing an NDA, you'll review anonymized teasers. For opportunities of interest, you'll receive a Confidential Information Memorandum (CIM), followed by management meetings, LOI submission, due diligence, and closing. The entire process typically takes 3–6 months from LOI to close.",
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

const BusinessesForSaleFlorida = () => (
  <Layout>
    <SEOHead
      title="Businesses for Sale in Florida | Off-Market M&A"
      description="Access off-market Florida businesses for sale in the $3M–$50M range. Healthcare, construction, technology, and more — vetted opportunities through CBH Business Group."
      path="/businesses-for-sale-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Buyers", path: "/buyers" },
        { name: "Businesses for Sale in Florida", path: "/businesses-for-sale-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Florida Deal Flow</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Businesses for Sale in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            The best Florida businesses for sale aren't publicly listed. CBH Business Group provides 
            qualified buyers with access to confidential, off-market opportunities across Florida's 
            most active M&A sectors — from healthcare to construction to technology.
          </p>
          <Link to="/opportunities">
            <Button variant="hero" size="lg">
              View Current Opportunities <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Active Sectors</p>
          <h2 className="text-3xl font-serif text-foreground">Industries We Cover</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Building2, title: "Healthcare", desc: "Medical practices, home health, behavioral health, and healthcare services." },
            { icon: Search, title: "Construction & Trades", desc: "General contractors, HVAC, plumbing, electrical, and specialty trades." },
            { icon: MapPin, title: "Professional Services", desc: "Accounting, engineering, IT, staffing, and consulting firms." },
            { icon: Shield, title: "Technology", desc: "SaaS, IT services, MSPs, and software companies." },
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
          <Link to="/opportunities" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Current Opportunities</p>
            <p className="text-xs text-muted-foreground">View active listings</p>
          </Link>
          <Link to="/buy-a-business-in-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Buy a Business</p>
            <p className="text-xs text-muted-foreground">Acquisition advisory</p>
          </Link>
          <Link to="/industries" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Industries</p>
            <p className="text-xs text-muted-foreground">Sector expertise</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to See What's Available?</h2>
        <p className="text-muted-foreground mb-8">Share your acquisition criteria for personalized deal flow.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Register as a Buyer <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default BusinessesForSaleFlorida;
