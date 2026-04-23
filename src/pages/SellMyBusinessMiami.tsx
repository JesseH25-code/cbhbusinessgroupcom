import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Globe2, Building2, Plane, Ship } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Miami?",
    a: "Start with a confidential valuation tied to Miami-Dade comparable transactions, then engage a Florida M&A advisor to prepare a confidential information memorandum, run a competitive process with vetted U.S. and Latin American buyers, and close under NDA. Most Miami businesses in the $3M–$50M EBITDA range close within 6–9 months.",
  },
  {
    q: "What is my Miami business worth?",
    a: "Miami-Dade businesses typically trade between 3.5x and 7.5x EBITDA. Logistics, trade, marine, hospitality, and bilingual professional services often command a 0.5–1.0x premium over Florida averages because of LATAM-facing demand and PortMiami / MIA cargo flows.",
  },
  {
    q: "When is the best time to sell my business in Miami?",
    a: "Sell when EBITDA is trending up, customer concentration is below 25%, and the owner can be replaced. Miami buyer demand has been strongest in Q1 and Q4, when capital deployment from family offices in Brickell, Coral Gables, and Aventura accelerates ahead of fiscal year-end.",
  },
  {
    q: "Do I need a business broker in Miami or an M&A advisor?",
    a: "Sub-$1M revenue main-street businesses are typically handled by a business broker. For $3M+ revenue Miami companies, an M&A advisor adds buyer competition, deal structuring, and tax-efficient terms that typically improve net proceeds by 20–40% versus a single-buyer broker process.",
  },
  {
    q: "How do I sell my Miami business without employees or competitors finding out?",
    a: "We use blind teasers (no company name, address, or identifying photos), NDAs before any buyer sees the CIM, and staged data-room access. In a city as networked as Miami, we also screen prospective buyers against your customer and competitor list before disclosure.",
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

const SellMyBusinessMiami = () => (
  <Layout>
    <SEOHead
      title="Sell My Business in Miami | Miami-Dade M&A Advisor"
      description="Sell your business in Miami with confidential valuations, LATAM buyer access, and Miami-Dade M&A expertise. Serving Brickell, Doral, Coral Gables & Aventura owners."
      path="/sell-my-business-miami"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Miami", path: "/sell-business-miami" },
        { name: "Sell My Business in Miami", path: "/sell-my-business-miami" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Miami-Dade County · Population 2.7M</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell My Business in Miami
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Miami is the most internationally connected M&A market in the Southeast U.S. Home to over
            2.7 million residents, 320,000+ active businesses, and the busiest cruise port in the world,
            Miami-Dade attracts buyers from New York, Madrid, São Paulo, and Bogotá looking for
            U.S.-based platforms with Latin American reach.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            We advise Miami business owners — from Brickell professional services firms to Doral logistics
            operators and Hialeah manufacturers — on confidential, full-process sales. Median lower-middle-market
            sale prices in Miami-Dade run $1.8M–$8M, with EBITDA multiples typically 3.5x–7.5x depending on
            recurring revenue and customer concentration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get My Free Valuation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/valuation-calculator">
              <Button variant="outline" size="lg">
                Try the Valuation Calculator
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">The Miami Market</p>
          <h2 className="text-3xl font-serif text-foreground mb-6">Why Miami Owners Sell Right Now</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Three forces are driving record M&A activity in Miami: a wave of out-of-state private
              equity opening South Florida offices, family offices relocating from the Northeast post-2020,
              and Latin American capital seeking dollar-denominated platforms. The result is unusually deep
              buyer demand for $2M–$25M Miami-based companies.
            </p>
            <p>
              The most common reasons Miami owners decide to sell: founders aged 55+ ready for retirement
              after a decade of growth, partner buyouts following property and lifestyle inflation, and
              opportunistic exits ahead of insurance, hurricane, and condo-reform cost pressures squeezing
              margins. Whatever the reason, the strategy is the same — quietly run a full process and let
              competitive tension set the price.
            </p>
            <p>
              Whether you searched "<em>sell my business in Miami</em>," "<em>Miami business broker</em>,"
              or "<em>Miami business valuation</em>," your first step is the same: a confidential
              conversation about what your company is actually worth — and what it would take to be
              positioned for a premium exit in 12–18 months.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Active Sectors in Miami-Dade</p>
          <h2 className="text-3xl font-serif text-foreground">Where Miami M&A Is Most Active</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Ship, title: "Logistics & Trade", desc: "PortMiami and MIA cargo flows make freight forwarders, customs brokers, and 3PLs highly acquisitive — typical multiples 4.5x–6.5x EBITDA." },
            { icon: Globe2, title: "LATAM-Facing Services", desc: "Bilingual professional services, fintech, and trade finance firms see premium offers from cross-border strategics." },
            { icon: Building2, title: "Construction & Trades", desc: "South Florida's permanent build-out cycle drives demand for HVAC, electrical, and concrete contractors with $1M+ EBITDA." },
            { icon: Plane, title: "Hospitality & Tourism", desc: "Restaurant groups, marine services, and aviation MRO businesses near MIA continue to attract PE rollup capital." },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border p-6">
              <item.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-base text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Common Questions</p>
          <h2 className="text-3xl font-serif text-foreground mb-8">Frequently Asked Questions About Selling a Business in Miami</h2>
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
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Link to="/sell-business-miami" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Miami</p>
            <p className="text-xs text-muted-foreground">Full Miami M&A guide</p>
          </Link>
          <Link to="/business-valuation-calculator-miami" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Miami Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Free EBITDA-based estimate</p>
          </Link>
          <Link to="/business-broker-miami" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Broker Miami</p>
            <p className="text-xs text-muted-foreground">Broker vs. M&A advisor</p>
          </Link>
          <Link to="/how-to-sell-a-business" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">How to Sell a Business</p>
            <p className="text-xs text-muted-foreground">Step-by-step guide</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Sell Your Miami Business?</h2>
        <p className="text-muted-foreground mb-8">Every conversation is confidential. No obligation, no pressure.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule My Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default SellMyBusinessMiami;
