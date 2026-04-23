import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Hospital, Cpu, Wrench, Hotel } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my business in Orlando?",
    a: "Engage a Florida M&A advisor who understands Central Florida's mix of healthcare, technology, simulation, and tourism-adjacent sectors. The full process — valuation, CIM preparation, NDA-protected buyer outreach across the I-4 corridor, negotiation, and closing — typically takes 6–9 months for Orlando businesses with $1M+ EBITDA.",
  },
  {
    q: "What is my Orlando business worth?",
    a: "Orlando businesses generally sell for 3.0x–6.5x EBITDA. Lake Nona healthcare services, simulation and modeling firms tied to the UCF / Lockheed corridor, and recurring-revenue B2B services tend to trade at the higher end. Tourism-dependent businesses still transact actively but at slightly compressed multiples.",
  },
  {
    q: "Is Orlando a good market to sell a business?",
    a: "Yes. Greater Orlando's metro population now exceeds 2.8 million and is projected to be Florida's fastest-growing major metro through 2030. Corporate relocations to Lake Nona's Medical City and continued buildout of the UCF research corridor have meaningfully diversified the buyer pool beyond hospitality.",
  },
  {
    q: "How long does it take to sell a business in Orlando?",
    a: "Most Orlando transactions close in 6–9 months. Well-prepared businesses — clean QoE-ready financials, documented SOPs, sub-25% customer concentration — sometimes close in 4–5 months. Complex deals (real estate, multi-entity structures, regulated healthcare) can extend to 10–12 months.",
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

const SellMyBusinessOrlando = () => (
  <Layout>
    <SEOHead
      title="Sell My Business in Orlando | Confidential M&A Advisory"
      description="Looking to sell your business in Orlando? Get a confidential valuation, access qualified buyers, and maximize your exit. Free consultation with Florida M&A advisors."
      path="/sell-my-business-orlando"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Sell a Business in Florida", path: "/sell-business-florida" },
        { name: "Sell a Business in Orlando", path: "/sell-business-orlando" },
        { name: "Sell My Business in Orlando", path: "/sell-my-business-orlando" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Greater Orlando · Orange & Seminole · Pop. 2.8M</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell My Business in Orlando
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Greater Orlando has 2.8M residents and roughly 175,000 active businesses, with
            a metro economy that has materially diversified beyond tourism over the last decade.
            Lake Nona's Medical City, the UCF / Lockheed simulation cluster, and the I-4 tech
            corridor have created a much deeper buyer pool than Orlando had even five years ago.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            We advise Central Florida owners — from Winter Park professional services firms
            to Sanford and Apopka contractors and Lake Nona healthcare platforms — on
            confidential, full-process sales. Typical lower-middle-market sale prices in
            Orange and Seminole counties run $1.5M–$8M, with EBITDA multiples generally
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
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Active Sectors in Greater Orlando</p>
          <h2 className="text-3xl font-serif text-foreground">Where Orlando M&A Is Most Active</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {[
            { icon: Hospital, title: "Healthcare & Life Sciences", desc: "Lake Nona's Medical City has anchored a strong rollup market for dental, dermatology, and specialty healthcare practices in Central Florida." },
            { icon: Cpu, title: "Tech, Simulation & Defense", desc: "The UCF / Central Florida Research Park / Lockheed corridor drives buyer demand for IT services, modeling and simulation, and defense-adjacent firms." },
            { icon: Wrench, title: "Construction & Home Services", desc: "Population growth across Orange, Seminole, Lake, and Osceola counties is fueling acquisitions of HVAC, electrical, and pool service operators." },
            { icon: Hotel, title: "Hospitality & Experience", desc: "Tourism-adjacent businesses still transact actively — restaurant groups, attractions services, transportation, and event production firms remain in demand." },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border p-6">
              <item.icon className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-base text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-base text-muted-foreground leading-relaxed">
            Whether you searched "<em>sell my business in Orlando</em>,"
            "<em>Orlando business broker</em>," or "<em>Orlando business valuation</em>,"
            the right starting point is a confidential, no-obligation conversation about
            what your company would actually trade for in today's Central Florida market.
          </p>
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
          <Link to="/sell-business-orlando" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Orlando</p>
            <p className="text-xs text-muted-foreground">Full Orlando M&A guide</p>
          </Link>
          <Link to="/business-valuation-calculator-orlando" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Orlando Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Free EBITDA-based estimate</p>
          </Link>
          <Link to="/business-broker-orlando" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Broker Orlando</p>
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
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Sell Your Orlando Business?</h2>
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

export default SellMyBusinessOrlando;
