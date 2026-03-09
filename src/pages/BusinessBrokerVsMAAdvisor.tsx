import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight } from "lucide-react";

const faqItems = [
  {
    q: "What is the difference between a business broker and an M&A advisor?",
    a: "Business brokers typically handle smaller transactions (under $2M) using listing-based approaches similar to real estate. M&A advisors manage larger, more complex transactions ($3M–$100M+) using targeted, confidential outreach to strategic and financial buyers with sophisticated deal structures.",
  },
  {
    q: "When should I use an M&A advisor instead of a broker?",
    a: "If your business is valued above $3M, has complex operations, requires sophisticated deal structures (earnouts, rollover equity, seller financing), or needs exposure to PE firms and strategic acquirers, an M&A advisor is the appropriate choice.",
  },
  {
    q: "How are M&A advisors compensated?",
    a: "M&A advisors typically charge a retainer fee plus a success fee based on the transaction value (usually 3–5% for transactions in the $3M–$50M range, with the percentage decreasing as deal size increases). Brokers often charge higher percentages (8–12%) on smaller transactions.",
  },
  {
    q: "Do M&A advisors get better prices than brokers?",
    a: "Generally, yes — for businesses that fit their profile. M&A advisors create competitive auction dynamics, access institutional buyers, and negotiate more sophisticated deal structures. The combination typically results in higher total consideration, even after accounting for advisory fees.",
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

const BusinessBrokerVsMAAdvisor = () => (
  <Layout>
    <SEOHead
      title="Business Broker vs M&A Advisor | Key Differences"
      description="Understand the differences between a business broker and M&A advisor. Learn which is right for your business sale based on size, complexity, and goals."
      path="/business-broker-vs-ma-advisor"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/blog" },
        { name: "Business Broker vs M&A Advisor", path: "/business-broker-vs-ma-advisor" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">M&A Knowledge Base</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Business Broker vs. M&A Advisor
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choosing the right representation is critical to your outcome. Understanding the 
            fundamental differences between a business broker and an M&A advisor will help you 
            make the right decision for your business sale.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif text-foreground mb-8 text-center">Side-by-Side Comparison</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary border border-border p-8">
              <h3 className="font-serif text-xl text-foreground mb-6">Business Broker</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="border-b border-border pb-3"><span className="text-foreground font-medium">Deal Size:</span> Under $2M typically</li>
                <li className="border-b border-border pb-3"><span className="text-foreground font-medium">Approach:</span> Listing-based, public marketing</li>
                <li className="border-b border-border pb-3"><span className="text-foreground font-medium">Buyers:</span> Individual buyers, first-time acquirers</li>
                <li className="border-b border-border pb-3"><span className="text-foreground font-medium">Deal Structure:</span> Simple asset or stock sales</li>
                <li className="border-b border-border pb-3"><span className="text-foreground font-medium">Fees:</span> 8–12% success fee</li>
                <li><span className="text-foreground font-medium">Process:</span> List, show, negotiate, close</li>
              </ul>
            </div>
            <div className="bg-secondary border-2 border-primary/30 p-8">
              <h3 className="font-serif text-xl text-foreground mb-6">M&A Advisor</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="border-b border-border pb-3"><span className="text-foreground font-medium">Deal Size:</span> $3M–$100M+</li>
                <li className="border-b border-border pb-3"><span className="text-foreground font-medium">Approach:</span> Targeted, confidential outreach</li>
                <li className="border-b border-border pb-3"><span className="text-foreground font-medium">Buyers:</span> PE firms, strategics, family offices</li>
                <li className="border-b border-border pb-3"><span className="text-foreground font-medium">Deal Structure:</span> Complex — earnouts, rollover, seller notes</li>
                <li className="border-b border-border pb-3"><span className="text-foreground font-medium">Fees:</span> Retainer + 3–5% success fee</li>
                <li><span className="text-foreground font-medium">Process:</span> Valuation, CIM, auction, LOI, DD, close</li>
              </ul>
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
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Link to="/how-to-sell-a-business" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">How to Sell a Business</p>
            <p className="text-xs text-muted-foreground">Step-by-step guide</p>
          </Link>
          <Link to="/services" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Our Services</p>
            <p className="text-xs text-muted-foreground">CBH advisory process</p>
          </Link>
          <Link to="/what-is-ebitda" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">What is EBITDA?</p>
            <p className="text-xs text-muted-foreground">Valuation fundamentals</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Need M&A Advisory?</h2>
        <p className="text-muted-foreground mb-8">Find out if CBH Business Group is the right fit for your transaction.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Advisory Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default BusinessBrokerVsMAAdvisor;
