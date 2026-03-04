import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, FileText } from "lucide-react";

const faqItems = [
  {
    q: "What is a business valuation?",
    a: "A business valuation is a professional assessment of what your company is worth in the current market. It analyzes financial performance, growth potential, risk factors, and comparable transactions to determine a defensible enterprise value — typically expressed as a multiple of adjusted EBITDA.",
  },
  {
    q: "How is EBITDA calculated for valuation purposes?",
    a: "EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) is calculated from your financial statements, then adjusted for owner compensation, one-time expenses, non-recurring items, and other add-backs. This 'adjusted EBITDA' represents the true earning power of your business.",
  },
  {
    q: "What valuation multiples apply to my industry?",
    a: "Multiples vary significantly by industry, size, growth rate, and risk profile. Lower middle-market businesses ($3M–$50M) typically see multiples ranging from 3x to 7x adjusted EBITDA. Factors like recurring revenue, customer diversification, and management depth push multiples higher.",
  },
  {
    q: "How long does a business valuation take?",
    a: "A comprehensive market-based valuation typically takes 2–4 weeks, depending on the complexity of your financial records and the level of EBITDA normalization required. The process includes financial analysis, industry benchmarking, and preparation of a valuation summary.",
  },
  {
    q: "What's the difference between a broker opinion of value and a formal appraisal?",
    a: "A broker opinion of value (BOV) provides a market-based estimate of what your business would likely sell for, based on comparable transactions and market conditions. A formal appraisal is a more rigorous, standards-based assessment often required for legal, tax, or estate purposes.",
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

const multipleFactors = [
  { factor: "Revenue Growth", impact: "3+ years of consistent organic growth increases multiples by 0.5–1.5x" },
  { factor: "Customer Diversification", impact: "No single customer >15% of revenue signals lower risk to buyers" },
  { factor: "Recurring Revenue", impact: "Subscription or contract-based revenue commands premium multiples" },
  { factor: "Management Independence", impact: "Businesses that operate without the owner are worth materially more" },
  { factor: "EBITDA Margins", impact: "Above-industry margins demonstrate pricing power and operational efficiency" },
  { factor: "Documented Systems", impact: "SOPs, clean data, and scalable infrastructure signal institutional readiness" },
];

const BusinessValuation = () => (
  <Layout>
    <SEOHead
      title="Business Valuation Advisory | How Much Is My Business Worth?"
      description="Professional business valuation advisory for companies valued $3M–$50M. EBITDA analysis, industry benchmarking, and market-based valuation to determine what your business is worth."
      path="/business-valuation"
      jsonLd={faqJsonLd}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Valuation Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            How Much Is Your Business Worth?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Understanding your company's value is the foundation of any successful transaction. 
            Our market-based valuation approach provides a clear, defensible assessment that 
            positions your business for maximum value.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Request a Valuation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Methodology</p>
          <h2 className="text-3xl font-serif text-foreground mb-6">What Drives Your Multiple</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Enterprise value = Adjusted EBITDA × Industry Multiple. The multiple applied to your earnings 
            depends on several key factors that buyers evaluate when determining risk and growth potential.
          </p>
          <div className="space-y-6">
            {multipleFactors.map((item, i) => (
              <div key={i} className="flex gap-6 items-start border-b border-border pb-6">
                <span className="text-primary font-serif text-lg opacity-50 shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-foreground mb-1">{item.factor}</h3>
                  <p className="text-sm text-muted-foreground">{item.impact}</p>
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

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Get a Confidential Valuation Assessment</h2>
        <p className="text-muted-foreground mb-8">No obligation. Complete discretion.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Begin the Conversation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default BusinessValuation;
