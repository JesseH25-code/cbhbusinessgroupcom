import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight } from "lucide-react";

const faqItems = [
  {
    q: "What does EBITDA stand for?",
    a: "EBITDA stands for Earnings Before Interest, Taxes, Depreciation, and Amortization. It represents the operating cash earnings of a business before accounting for capital structure, tax strategies, and non-cash expenses.",
  },
  {
    q: "Why is EBITDA important for selling a business?",
    a: "EBITDA is the primary metric buyers and acquirers use to determine business value. Enterprise value is calculated by applying an industry-specific multiple to your adjusted EBITDA. A higher EBITDA — and a higher multiple — directly translates to a higher sale price.",
  },
  {
    q: "What is adjusted EBITDA?",
    a: "Adjusted EBITDA normalizes your reported EBITDA by adding back owner-specific expenses (above-market salary, personal expenses run through the business, one-time costs) and removing non-recurring items. This gives buyers a true picture of the business's earning power under new ownership.",
  },
  {
    q: "What is a good EBITDA margin?",
    a: "EBITDA margins vary significantly by industry. Service businesses typically range from 15–30%, while manufacturing might be 10–20%. Technology/SaaS companies can exceed 30%. What matters most is how your margin compares to industry benchmarks and whether it's trending up.",
  },
  {
    q: "How do EBITDA multiples work?",
    a: "A multiple is applied to your adjusted EBITDA to determine enterprise value. For example, a business with $2M EBITDA at a 5x multiple would have an enterprise value of $10M. Multiples range from 3x–8x+ depending on industry, size, growth, and quality factors.",
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

const WhatIsEBITDA = () => (
  <Layout>
    <SEOHead
      title="What is EBITDA? | Business Valuation Guide"
      description="Learn what EBITDA means, how adjusted EBITDA works, and why EBITDA multiples determine your business's sale price. Expert M&A guide from CBH Business Group."
      path="/what-is-ebitda"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/blog" },
        { name: "What is EBITDA?", path: "/what-is-ebitda" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">M&A Knowledge Base</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            What is EBITDA?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            EBITDA is the single most important metric in determining what your business is worth. 
            Understanding how it's calculated, adjusted, and applied is essential for any business 
            owner considering a sale or exit.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto prose prose-sm">
          <h2 className="text-2xl font-serif text-foreground mb-4">EBITDA Explained</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            EBITDA — Earnings Before Interest, Taxes, Depreciation, and Amortization — strips away 
            financing decisions, tax strategies, and non-cash accounting entries to reveal the true 
            operating cash flow of a business. This standardized metric allows apples-to-apples 
            comparison across companies regardless of their capital structure.
          </p>
          
          <h2 className="text-2xl font-serif text-foreground mb-4">The EBITDA Formula</h2>
          <div className="bg-secondary border border-border p-6 mb-6">
            <p className="font-mono text-sm text-foreground text-center">
              Net Income + Interest + Taxes + Depreciation + Amortization = EBITDA
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6">
            For a business owner considering a sale, the more important figure is <strong className="text-foreground">adjusted EBITDA</strong>, 
            which adds back owner-specific expenses, one-time costs, and normalizes compensation to 
            market rates. This adjusted figure represents what a new owner could expect to earn.
          </p>

          <h2 className="text-2xl font-serif text-foreground mb-4">Common EBITDA Adjustments</h2>
          <ul className="text-muted-foreground space-y-2 mb-6 list-disc pl-5">
            <li>Above-market owner compensation → adjusted to market-rate salary</li>
            <li>Owner personal expenses run through the business</li>
            <li>One-time legal, consulting, or restructuring costs</li>
            <li>Non-recurring revenue or expenses</li>
            <li>Related-party transactions at non-market rates</li>
            <li>Rent adjustments if property is owner-occupied</li>
          </ul>

          <h2 className="text-2xl font-serif text-foreground mb-4">EBITDA Multiples by Industry</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Enterprise value is calculated by multiplying adjusted EBITDA by an industry-appropriate 
            multiple. These multiples reflect the market's assessment of growth potential, risk, and 
            quality within each sector:
          </p>
          <div className="bg-secondary border border-border p-6 mb-6">
            <div className="space-y-3 text-sm">
              {[
                { industry: "Technology / SaaS", range: "5x – 8x+" },
                { industry: "Healthcare Services", range: "5x – 7x" },
                { industry: "Professional Services", range: "4x – 7x" },
                { industry: "Construction / Trades", range: "3x – 6x" },
                { industry: "Manufacturing", range: "4x – 6x" },
                { industry: "Restaurants / Hospitality", range: "3x – 5x" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between border-b border-border pb-2 last:border-0 last:pb-0">
                  <span className="text-foreground">{row.industry}</span>
                  <span className="text-primary font-mono">{row.range}</span>
                </div>
              ))}
            </div>
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
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">Full valuation guide</p>
          </Link>
          <Link to="/how-to-sell-a-business" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">How to Sell a Business</p>
            <p className="text-xs text-muted-foreground">Step-by-step guide</p>
          </Link>
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
            <p className="text-xs text-muted-foreground">Florida M&A advisory</p>
          </Link>
          <Link to="/glossary/ebitda-multiples" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">EBITDA Multiples Guide</p>
            <p className="text-xs text-muted-foreground">How multiples work</p>
          </Link>
          <Link to="/glossary/quality-of-earnings" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Quality of Earnings</p>
            <p className="text-xs text-muted-foreground">QoE reports explained</p>
          </Link>
          <Link to="/florida-ma-benchmarks" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Florida M&A Benchmarks</p>
            <p className="text-xs text-muted-foreground">Industry data & multiples</p>
          </Link>
          <Link to="/valuation-calculator" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Estimate your value</p>
          </Link>
          <Link to="/glossary" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">M&A Glossary</p>
            <p className="text-xs text-muted-foreground">All key terms</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Want to Know Your EBITDA?</h2>
        <p className="text-muted-foreground mb-8">Get a confidential, no-obligation EBITDA analysis from our team.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Request EBITDA Analysis <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default WhatIsEBITDA;
