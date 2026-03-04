import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import IndustryExplorer from "@/components/IndustryExplorer";
import { ArrowRight } from "lucide-react";

const buyerTypes = [
  { type: "Private Equity", desc: "Platform and add-on acquisitions for PE-backed portfolio companies." },
  { type: "Family Offices", desc: "Direct investments seeking long-term value creation and stable cash flows." },
  { type: "Strategic Acquirers", desc: "Operating companies pursuing horizontal or vertical growth through acquisition." },
  { type: "Search Funds & Independent Sponsors", desc: "Entrepreneurial acquirers seeking a single platform investment." },
];

const buyersFaq = [
  {
    q: "How do I get access to deal flow?",
    a: "Submit your acquisition criteria through our buyer registration form. Once verified, you'll receive anonymized opportunity summaries matching your criteria. Full Confidential Information Memorandums (CIMs) are provided upon execution of deal-specific NDAs.",
  },
  {
    q: "What is the typical acquisition size range?",
    a: "We focus on businesses with enterprise values between $3M and $50M, typically generating $1M–$8M in adjusted EBITDA. Transaction structures include full acquisitions, majority recapitalizations, and management buyouts.",
  },
  {
    q: "Do you work with individual buyers?",
    a: "Yes. We work with individual buyers, search funds, independent sponsors, family offices, private equity firms, and strategic acquirers. All prospective buyers must demonstrate financial capacity and strategic alignment before receiving confidential materials.",
  },
  {
    q: "What industries are available?",
    a: "Our deal flow spans multiple sectors including construction, professional services, healthcare, technology, manufacturing, consumer products, and business services. Opportunities vary based on current engagements.",
  },
];

const buyersFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: buyersFaq.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const Buyers = () => {
  const [form, setForm] = useState({ name: "", firm: "", email: "", criteria: "", type: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Join Our Acquisition Network"
        description="Qualified strategic and financial buyers seeking lower middle-market acquisition opportunities in the $3M–$50M enterprise value range. Join CBH Business Group's buyer network."
        path="/buyers"
        jsonLd={buyersFaqJsonLd}
      />
      {/* ... keep existing code (hero, buyer types, industry explorer, NDA + form sections) */}
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">For Acquirers</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Join Our Acquisition Network</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We maintain a confidential network of qualified strategic and financial buyers seeking 
              lower middle-market opportunities in the $3M–$50M enterprise value range.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Buyer Profiles</p>
          <h2 className="text-3xl font-serif text-foreground mb-12">Types of Qualified Buyers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {buyerTypes.map((b, i) => (
              <div key={i} className="bg-card border border-border p-8">
                <h3 className="font-serif text-lg text-foreground mb-2">{b.type}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustryExplorer />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xs tracking-widest uppercase text-primary mb-3">Process</p>
              <h2 className="text-3xl font-serif text-foreground mb-6">NDA-Protected Access</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All deal information is shared under strict non-disclosure agreements. 
                Prospective buyers must demonstrate financial capacity and strategic alignment 
                before receiving confidential materials.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Once approved, you will receive anonymized opportunity summaries matching your 
                acquisition criteria. Full CIMs are provided upon execution of deal-specific NDAs.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-serif text-foreground mb-6">Submit Acquisition Criteria</h2>
              {submitted ? (
                <div className="bg-card border border-primary/30 p-8 text-center">
                  <p className="text-primary font-serif text-lg mb-2">Submission Received</p>
                  <p className="text-sm text-muted-foreground">We will review your criteria and respond within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { key: "name", label: "Full Name", type: "text" },
                    { key: "firm", label: "Firm / Organization", type: "text" },
                    { key: "email", label: "Email Address", type: "email" },
                    { key: "type", label: "Buyer Type (PE, Strategic, Family Office, Other)", type: "text" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">{field.label}</label>
                      <input
                        type={field.type}
                        required
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Acquisition Criteria</label>
                    <textarea
                      required
                      rows={4}
                      value={form.criteria}
                      onChange={(e) => setForm({ ...form, criteria: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Industry preferences, size range, geography, structure..."
                    />
                  </div>
                  <Button variant="hero" size="lg" type="submit" className="w-full">
                    Join Acquisition Network <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Common Questions</p>
            <h2 className="text-3xl font-serif text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {buyersFaq.map((faq, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Buyers;
