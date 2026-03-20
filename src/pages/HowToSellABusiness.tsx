import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight } from "lucide-react";

const faqItems = [
  {
    q: "When is the right time to sell my business?",
    a: "The best time to sell is when your business is performing well and growing — not when you're burned out or the business is declining. Ideally, begin planning 12–24 months before your target exit date to optimize valuation and prepare the business for transition.",
  },
  {
    q: "How do I prepare my business for sale?",
    a: "Key preparation steps include cleaning up financials (3 years of audited/reviewed statements), reducing owner dependency, diversifying your customer base, documenting processes, resolving any legal or compliance issues, and building management depth.",
  },
  {
    q: "Should I tell my employees I'm selling?",
    a: "Generally, no — not until the deal is near closing. Premature disclosure can cause employee anxiety, departures, and competitive intelligence leaks. Your M&A advisor will help you manage confidentiality and plan employee communications for the appropriate time.",
  },
  {
    q: "What is the role of an M&A advisor in selling a business?",
    a: "An M&A advisor manages the entire sale process: valuation, buyer identification and outreach, NDA management, CIM preparation, buyer meetings, LOI negotiation, due diligence coordination, and closing. This allows you to continue running the business while maximizing sale value.",
  },
  {
    q: "What are the steps to sell a business?",
    a: "The typical process: (1) Engage an M&A advisor, (2) Business valuation and preparation, (3) Confidential buyer outreach, (4) Buyer meetings and management presentations, (5) LOI negotiation, (6) Due diligence, (7) Definitive agreement negotiation, (8) Closing and transition.",
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

const HowToSellABusiness = () => (
  <Layout>
    <SEOHead
      title="How to Sell a Business | Step-by-Step M&A Guide"
      description="Complete guide to selling your business. Learn the M&A process from valuation to closing, including preparation, buyer outreach, negotiation, and transition planning."
      path="/how-to-sell-a-business"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/blog" },
        { name: "How to Sell a Business", path: "/how-to-sell-a-business" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">M&A Knowledge Base</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            How to Sell a Business
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Selling a business is one of the most significant financial decisions you'll ever make. 
            This guide walks you through each step of the M&A process — from initial preparation 
            through closing and beyond.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif text-foreground mb-8">The 8-Step Sale Process</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Engage an M&A Advisor", desc: "Select an advisor with experience in your industry and deal size. They'll manage the entire process, protect confidentiality, and maximize your outcome." },
              { step: "02", title: "Business Valuation", desc: "Your advisor will analyze 3+ years of financials, normalize EBITDA, benchmark against industry comparables, and determine a defensible valuation range." },
              { step: "03", title: "Prepare Marketing Materials", desc: "A Confidential Information Memorandum (CIM) presents your business to qualified buyers — highlighting financial performance, growth opportunities, and competitive advantages." },
              { step: "04", title: "Confidential Buyer Outreach", desc: "Your advisor identifies and contacts strategic acquirers, PE firms, and qualified individuals under NDA — creating competitive tension among interested parties." },
              { step: "05", title: "Buyer Meetings", desc: "Management presentations with qualified buyers allow them to understand the business, ask questions, and develop conviction — while you assess cultural and strategic fit." },
              { step: "06", title: "LOI Negotiation", desc: "Negotiate the Letter of Intent covering price, structure, earnout terms, transition requirements, and key closing conditions. This sets the framework for the final deal." },
              { step: "07", title: "Due Diligence", desc: "The buyer's team examines financial records, legal documents, contracts, operations, and compliance. Thorough preparation minimizes surprises and deal friction." },
              { step: "08", title: "Closing & Transition", desc: "Finalize definitive agreements, complete the closing, and execute the transition plan. Most sellers provide 3–12 months of transition support post-close." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 border-b border-border pb-8 last:border-0">
                <div className="text-primary font-mono text-2xl font-light w-12 shrink-0">{item.step}</div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Link to="/what-is-ebitda" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">What is EBITDA?</p>
            <p className="text-xs text-muted-foreground">Understanding valuations</p>
          </Link>
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">EBITDA analysis & multiples</p>
          </Link>
          <Link to="/seller-financing-explained" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Seller Financing</p>
            <p className="text-xs text-muted-foreground">Deal structure options</p>
          </Link>
          <Link to="/glossary/due-diligence-checklist" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Due Diligence Checklist</p>
            <p className="text-xs text-muted-foreground">What buyers examine</p>
          </Link>
          <Link to="/glossary/letter-of-intent" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Letter of Intent (LOI)</p>
            <p className="text-xs text-muted-foreground">The critical first step</p>
          </Link>
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell in Florida</p>
            <p className="text-xs text-muted-foreground">Florida M&A advisory</p>
          </Link>
          <Link to="/glossary" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">M&A Glossary</p>
            <p className="text-xs text-muted-foreground">Key terms explained</p>
          </Link>
          <Link to="/valuation-calculator" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Estimate your value</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Start the Process?</h2>
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

export default HowToSellABusiness;
