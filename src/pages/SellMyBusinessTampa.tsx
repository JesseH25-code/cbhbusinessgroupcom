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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Tampa Bay · Hillsborough & Pinellas · Pop. 3.2M</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell My Business in Tampa
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Tampa Bay is the fastest-growing major metro in Florida, with 3.2M residents,
            ~190,000 active businesses, and a per-capita influx of new residents that has
            outpaced almost every other U.S. metro since 2020. That growth is fueling
            unusually strong M&A demand for Hillsborough and Pinellas County businesses.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            We advise Tampa-area owners — from South Tampa professional services firms,
            to Brandon HVAC and roofing operators, to St. Pete tech and healthcare
            companies — on confidential, full-process exits. Median lower-middle-market sale
            prices in the Tampa Bay region run $1.5M–$7M, with EBITDA multiples typically
            3.0x–6.5x.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">The Tampa Bay Market</p>
          <h2 className="text-3xl font-serif text-foreground mb-6">Why Tampa Bay Owners Sell Right Now</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Two demographic forces dominate Tampa Bay M&A: a 60+ owner-operator generation
              that built businesses through the 2010s and is now ready for retirement, and a
              steady influx of relocating PE-backed strategics looking to plant Florida flags.
              That combination is producing dense buyer competition for $1M–$10M EBITDA businesses.
            </p>
            <p>
              The most common reasons we see Tampa owners selling: founder retirement after a
              long build, partner buyouts in family businesses, exits ahead of property-insurance
              inflation pressuring margins, and opportunistic sales from owners who realize a
              <em> Tampa business broker</em> can't access the institutional buyers that actually
              pay premium multiples.
            </p>
            <p>
              Whether you searched "<em>sell my business in Tampa</em>,"
              "<em>Tampa business broker</em>," or "<em>Tampa business valuation</em>," your
              starting point is the same: a confidential conversation about what your business
              is worth today and what would change that number in 12–18 months.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Active Sectors in Tampa Bay</p>
            <h2 className="text-3xl font-serif text-foreground">Where Tampa M&A Is Most Active</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { icon: HardHat, title: "Construction & Trades", desc: "HVAC, roofing, plumbing, and electrical contractors with $1M+ EBITDA are seeing aggressive PE rollup activity across the I-4 corridor." },
              { icon: Stethoscope, title: "Healthcare Services", desc: "Dental, dermatology, behavioral health, and home-health platforms in Tampa Bay regularly transact at 5x–7x EBITDA." },
              { icon: Briefcase, title: "Professional & B2B Services", desc: "Accounting, IT services, and staffing firms in Westshore and Brandon attract both strategic and institutional buyers." },
              { icon: Anchor, title: "Marine & Logistics", desc: "Port Tampa Bay's expansion is driving demand for marine services, logistics, and warehousing operators with recurring revenue." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border p-6">
                <item.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-base text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
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
