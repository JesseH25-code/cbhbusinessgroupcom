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
      title="Sell My Business in Miami | Confidential M&A Advisory"
      description="Ready to sell your business in Miami? Get a confidential valuation, access qualified buyers, and maximize your exit value with expert M&A advisory. Free consultation."
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Miami Business Sales</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell My Business in Miami
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Thinking "I want to sell my business in Miami"? You're not alone — Miami's thriving economy 
            and international buyer demand make it one of the strongest markets in Florida for business 
            exits. We guide owner-operators through every step, from valuation to closing.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">The Process</p>
          <h2 className="text-3xl font-serif text-foreground mb-8">How We Help You Sell Your Miami Business</h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Confidential Valuation", desc: "We analyze your financials, industry multiples, and Miami market conditions to determine what your business is truly worth — at no cost and under strict NDA." },
              { step: "2", title: "Strategic Preparation", desc: "We prepare a comprehensive offering memorandum, normalize your EBITDA, and position your business to attract premium offers from qualified buyers." },
              { step: "3", title: "Targeted Buyer Outreach", desc: "We leverage our network of private equity firms, strategic acquirers, and high-net-worth individuals — including Miami's unique international buyer pool." },
              { step: "4", title: "Negotiation & Closing", desc: "We manage competing offers, structure deal terms that protect your interests, and coordinate with attorneys and CPAs through a smooth closing." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 text-primary flex items-center justify-center font-serif text-lg">
                  {item.step}
                </div>
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
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why Miami Business Owners Choose CBH</p>
          <h2 className="text-3xl font-serif text-foreground">Your Advantage in the Miami Market</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Users, title: "International Buyer Access", desc: "Miami's position as a gateway to Latin America attracts cross-border acquirers who pay premium multiples for U.S. businesses." },
            { icon: Shield, title: "100% Confidential Process", desc: "Your employees, customers, and competitors will never know your business is for sale until you decide to tell them." },
            { icon: TrendingUp, title: "Premium Exit Valuations", desc: "Our competitive bidding process and strategic positioning consistently deliver 20–40% above initial expectations." },
            { icon: BarChart3, title: "Miami Market Intelligence", desc: "Deep knowledge of local multiples, buyer activity, and industry trends specific to the South Florida market." },
            { icon: Clock, title: "Efficient 6–9 Month Timeline", desc: "Structured process that moves efficiently from engagement to closing without sacrificing value." },
            { icon: CheckCircle, title: "No Upfront Fees", desc: "Success-based fee structure means we only get paid when you successfully close your transaction." },
          ].map((item, i) => (
            <div key={i} className="text-center p-6">
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
