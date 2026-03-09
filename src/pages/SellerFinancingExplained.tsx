import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight } from "lucide-react";

const faqItems = [
  {
    q: "What is seller financing in a business sale?",
    a: "Seller financing (also called a seller note or vendor take-back) is when the seller agrees to finance a portion of the purchase price. The buyer pays a portion at closing and the remainder over time with interest, typically over 3–7 years.",
  },
  {
    q: "Why would a seller agree to finance part of the deal?",
    a: "Seller financing can expand the buyer pool, accelerate the sale timeline, command a higher total purchase price, provide favorable tax treatment through installment sale reporting, and generate ongoing interest income. It's a strategic tool, not a concession.",
  },
  {
    q: "What percentage of the deal is typically seller-financed?",
    a: "Seller notes typically represent 10–30% of the total purchase price. In SBA-financed deals, a 10% seller note is common. In larger transactions, the percentage varies based on buyer capitalization, deal structure, and negotiated terms.",
  },
  {
    q: "Is seller financing risky for the seller?",
    a: "There is risk, but it's mitigated through proper deal structuring: security interests in business assets, personal guarantees, financial covenants, and subordination agreements. A well-structured seller note with a capable buyer presents manageable risk for meaningful upside.",
  },
  {
    q: "What are typical seller financing terms?",
    a: "Common terms include 3–7 year repayment periods, interest rates of 5–8%, monthly or quarterly payments, and security interests in business assets. Terms are negotiable and should align with the business's cash flow capacity under new ownership.",
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

const SellerFinancingExplained = () => (
  <Layout>
    <SEOHead
      title="Seller Financing Explained | Business Sale Guide"
      description="Learn how seller financing works in business sales. Understand seller notes, deal structures, typical terms, and how to use seller financing strategically."
      path="/seller-financing-explained"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/blog" },
        { name: "Seller Financing Explained", path: "/seller-financing-explained" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">M&A Knowledge Base</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Seller Financing Explained
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Seller financing is one of the most powerful — and most misunderstood — tools in M&A deal 
            structuring. When used strategically, it can increase your total sale price, expand your 
            buyer pool, and provide favorable tax treatment.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif text-foreground mb-6">How Seller Financing Works</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            In a seller-financed transaction, the buyer pays a portion of the purchase price at closing 
            (typically 70–90%) and signs a promissory note for the remainder. The seller receives the 
            balance plus interest over an agreed-upon period, secured by the business assets.
          </p>
          
          <h2 className="text-2xl font-serif text-foreground mb-6">Example Deal Structure</h2>
          <div className="bg-secondary border border-border p-6 mb-8">
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground">Enterprise Value</span>
                <span className="text-primary font-mono">$8,000,000</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground">Cash at Close (75%)</span>
                <span className="font-mono text-muted-foreground">$6,000,000</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground">Seller Note (25%)</span>
                <span className="font-mono text-muted-foreground">$2,000,000</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground">Seller Note Rate</span>
                <span className="font-mono text-muted-foreground">6.0%</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground">Seller Note Term</span>
                <span className="font-mono text-muted-foreground">5 years</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground font-medium">Total Consideration</span>
                <span className="text-primary font-mono font-medium">$8,330,000+</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-serif text-foreground mb-6">Benefits for Sellers</h2>
          <ul className="text-muted-foreground space-y-3 mb-8 list-disc pl-5 text-sm">
            <li><strong className="text-foreground">Higher total price</strong> — buyers often pay a premium for seller financing flexibility</li>
            <li><strong className="text-foreground">Larger buyer pool</strong> — more acquirers can qualify with seller financing</li>
            <li><strong className="text-foreground">Tax advantages</strong> — installment sale treatment can spread capital gains over time</li>
            <li><strong className="text-foreground">Interest income</strong> — earn 5–8% on the seller note balance</li>
            <li><strong className="text-foreground">Faster closing</strong> — reduces external financing requirements</li>
          </ul>

          <h2 className="text-2xl font-serif text-foreground mb-6">Key Protections for Sellers</h2>
          <ul className="text-muted-foreground space-y-3 list-disc pl-5 text-sm">
            <li>Security interest in business assets (UCC filing)</li>
            <li>Personal guarantee from the buyer</li>
            <li>Financial reporting covenants (quarterly/annual)</li>
            <li>Minimum EBITDA or debt service coverage requirements</li>
            <li>Acceleration clauses for payment default</li>
          </ul>
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
          <Link to="/business-broker-vs-ma-advisor" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Broker vs. M&A Advisor</p>
            <p className="text-xs text-muted-foreground">Choosing representation</p>
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
        <h2 className="text-2xl font-serif text-foreground mb-4">Questions About Deal Structure?</h2>
        <p className="text-muted-foreground mb-8">Our team can help you understand your options. No obligation.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Advisory Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default SellerFinancingExplained;
