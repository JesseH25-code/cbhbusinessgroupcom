import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, Search, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I buy a business in Florida?",
    a: "The acquisition process starts with defining your criteria (industry, size, geography, investment capacity). An M&A advisor can source off-market opportunities, manage due diligence, negotiate deal terms, and coordinate financing — giving you access to deals not publicly listed.",
  },
  {
    q: "What should I look for when buying a Florida business?",
    a: "Key factors include adjusted EBITDA trends, customer concentration (below 20% ideal), management depth beyond the owner, recurring revenue characteristics, competitive moat, and growth trajectory. Understanding the seller's motivation and timeline is also critical.",
  },
  {
    q: "How much does it cost to buy a business in Florida?",
    a: "Businesses in our focus range ($3M–$50M enterprise value) typically require 10–30% equity with the remainder financed through SBA loans, seller financing, or institutional debt. Total acquisition cost includes purchase price, transaction fees, and working capital requirements.",
  },
  {
    q: "Can I buy a business with an SBA loan?",
    a: "Yes, SBA 7(a) loans are commonly used for business acquisitions up to $5M. For larger transactions, conventional bank financing, mezzanine debt, or private equity structures are more common. Deal structure significantly impacts financing options.",
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

const BuyBusinessFlorida = () => (
  <Layout>
    <SEOHead
      title="Buy a Business in Florida | Acquisition Advisory"
      description="Find and acquire a Florida business with expert M&A advisory. Off-market deal sourcing, due diligence, and deal structuring for acquisitions in the $3M–$50M range."
      path="/buy-a-business-in-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Buyers", path: "/buyers" },
        { name: "Buy a Business in Florida", path: "/buy-a-business-in-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Acquisition Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Buy a Business in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Whether you're a first-time acquirer, search fund, or PE-backed platform, CBH Business Group 
            helps you identify, evaluate, and close acquisitions in Florida's $3M–$50M market. Access 
            off-market opportunities through our proprietary deal flow.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Buyer Services</p>
          <h2 className="text-3xl font-serif text-foreground">How We Help Buyers</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Search, title: "Deal Sourcing", desc: "Off-market opportunities across Florida's key industries and metro areas." },
            { icon: BarChart3, title: "Due Diligence", desc: "Comprehensive financial, operational, and market analysis of target companies." },
            { icon: Shield, title: "Deal Structuring", desc: "Optimize purchase price, financing, earnouts, and closing conditions." },
            { icon: Users, title: "Transition Support", desc: "Post-close integration planning and management transition assistance." },
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
            <p className="text-xs text-muted-foreground">Active deals available</p>
          </Link>
          <Link to="/buyers" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">For Buyers</p>
            <p className="text-xs text-muted-foreground">Our buyer services</p>
          </Link>
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">How businesses are valued</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Looking to Acquire?</h2>
        <p className="text-muted-foreground mb-8">Tell us your criteria and we'll match you with opportunities.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Discuss Acquisition Criteria <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default BuyBusinessFlorida;
