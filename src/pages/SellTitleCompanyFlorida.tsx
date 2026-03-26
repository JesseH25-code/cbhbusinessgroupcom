import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, FileCheck } from "lucide-react";

const faqItems = [
  {
    q: "How much is my title company worth in Florida?",
    a: "Title company valuation depends on annual title order volume, revenue per file, escrow trust compliance, underwriter relationships, and referral source diversity. Florida title companies typically sell for 4x–8x adjusted EBITDA, with companies handling commercial transactions and maintaining strong compliance records commanding the highest multiples.",
  },
  {
    q: "How long does it take to sell a title company in Florida?",
    a: "A typical title company sale takes 5–10 months with professional representation. Key factors include underwriter consent requirements, escrow trust audits, regulatory compliance review, and the breadth of buyer outreach to strategic acquirers and PE-backed platforms.",
  },
  {
    q: "What happens to my underwriter agreements when I sell?",
    a: "Underwriter agency agreements are typically assigned or re-executed with the acquiring entity. An experienced M&A advisor ensures underwriter consent is obtained early and negotiates terms that protect your deal value and client relationships throughout the transition.",
  },
  {
    q: "Can I sell my title company confidentially?",
    a: "Absolutely. Confidentiality is critical in title company sales to protect referral relationships, staff retention, and underwriter partnerships. We use NDA-protected outreach and never publicly list businesses.",
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

const SellTitleCompanyFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell a Title Company in Florida | M&A Advisory"
      description="Expert M&A advisory for selling your Florida title company. Confidential valuations, underwriter transition guidance, and qualified buyer access for companies valued $3M–$50M."
      path="/sell-title-company-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell a Title Company in Florida", path: "/sell-title-company-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Title Company M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Title Company in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            CBH Business Group provides confidential M&A advisory for Florida title company owners — from independent
            agencies to multi-office operations. We handle file volume analysis, escrow compliance review, underwriter
            transitions, buyer targeting, and closing so you can focus on serving your clients.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Title Company Valuation</p>
          <h2 className="text-3xl font-serif text-foreground">What Drives Title Company Value</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Title Order Volume", desc: "Consistent monthly file counts demonstrate market demand and revenue predictability that buyers prioritize." },
            { title: "Revenue Per File", desc: "Higher revenue per closing — driven by commercial transactions, refinancing, and premium services — increases valuation." },
            { title: "Referral Source Diversity", desc: "Companies with diverse referral networks (realtors, lenders, attorneys) reduce concentration risk and attract more buyers." },
            { title: "Escrow Compliance Record", desc: "Clean escrow trust accounting and regulatory compliance history are critical due diligence factors for acquirers." },
            { title: "Underwriter Relationships", desc: "Strong relationships with multiple title underwriters provide operational flexibility and buyer confidence." },
            { title: "Commercial Capabilities", desc: "Title companies handling commercial real estate transactions command premium valuations due to higher revenue per file and complexity barriers." },
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
          <h2 className="text-3xl font-serif text-foreground">A Process Built for Title Company Owners</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: FileCheck, title: "Underwriter Navigation", desc: "We manage underwriter consent, agency agreement transfers, and compliance requirements throughout the transaction." },
            { icon: Shield, title: "Total Confidentiality", desc: "Referral partners, staff, and underwriters are never informed prematurely. NDA-protected process throughout." },
            { icon: Users, title: "Qualified Buyers", desc: "National title underwriters, PE-backed platforms, and strategic acquirers actively seeking Florida title operations." },
            { icon: TrendingUp, title: "Maximum Value", desc: "Competitive process management to drive premium multiples on your title order volume and escrow operations." },
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

export default SellTitleCompanyFlorida;
