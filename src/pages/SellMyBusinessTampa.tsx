import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, HardHat, Stethoscope, Briefcase, Anchor } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Tampa?",
    a: "Begin with a confidential valuation benchmarked to recent Tampa Bay transactions in your sector, then engage an M&A advisor to prepare a CIM, run a controlled buyer process across Hillsborough and Pinellas counties, and negotiate to close. Tampa-area mid-market deals typically take 6–9 months from engagement to wire.",
  },
  {
    q: "What is my Tampa business worth?",
    a: "Tampa Bay businesses generally trade between 3.0x and 6.5x EBITDA. Construction trades and healthcare service platforms in the I-4 corridor frequently exceed 5x because of explicit PE rollup activity in those sectors. Owner-dependence and customer concentration are the two largest swing factors.",
  },
  {
    q: "Is now a good time to sell my business in Tampa?",
    a: "Tampa Bay added more net new residents per capita than nearly any other U.S. metro in the past five years, lifting demand for local services and the businesses that provide them. With private equity actively rolling up Tampa healthcare, HVAC, plumbing, and roofing platforms, well-run businesses are seeing competitive bidding.",
  },
  {
    q: "How can I sell my Tampa business confidentially?",
    a: "We use blind teasers (no city-level details that would identify you), NDAs before any buyer sees financials, and a staged data room. Tampa Bay's tight industry networks — especially in MacDill-area defense contracting and South Tampa professional services — make controlled disclosure essential.",
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

const SellMyBusinessTampa = () => (
  <Layout>
    <SEOHead
      title="Sell My Business in Tampa | Confidential M&A Advisory"
      description="Want to sell your business in Tampa? Get a confidential valuation, connect with qualified buyers, and maximize your exit value. Free consultation with experienced M&A advisors."
      path="/sell-my-business-tampa"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Tampa", path: "/sell-business-tampa" },
        { name: "Sell My Business in Tampa", path: "/sell-my-business-tampa" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Tampa Business Sales</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell My Business in Tampa
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Tampa Bay's booming economy and growing buyer demand make it one of Florida's strongest 
            markets for business exits. Whether you're planning your retirement or pursuing a new venture, 
            we help Tampa business owners achieve premium valuations with complete confidentiality.
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
          <h2 className="text-3xl font-serif text-foreground mb-8">How We Help You Sell Your Tampa Business</h2>
          <div className="space-y-8">
            {[
              { step: "1", title: "Confidential Valuation", desc: "We analyze your financials, Tampa Bay market conditions, and industry multiples to determine your business's true market value — at no cost." },
              { step: "2", title: "Strategic Preparation", desc: "We normalize EBITDA, prepare a comprehensive offering memorandum, and position your business to maximize buyer interest." },
              { step: "3", title: "Qualified Buyer Outreach", desc: "We target strategic acquirers, private equity groups, and qualified individual buyers with proven interest in the Tampa market." },
              { step: "4", title: "Negotiation & Closing", desc: "We manage the competitive process, structure favorable terms, and coordinate all parties through a smooth closing." },
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
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Link to="/sell-business-tampa" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Tampa</p>
            <p className="text-xs text-muted-foreground">Full Tampa M&A guide</p>
          </Link>
          <Link to="/business-valuation-calculator-tampa" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Tampa Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Free EBITDA-based estimate</p>
          </Link>
          <Link to="/business-broker-tampa" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Broker Tampa</p>
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
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Sell Your Tampa Business?</h2>
        <p className="text-muted-foreground mb-8">Every conversation is confidential. No obligation.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule My Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default SellMyBusinessTampa;
