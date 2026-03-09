import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, HeartPulse, Shield, TrendingUp, Users } from "lucide-react";

const faqItems = [
  {
    q: "How much is my healthcare business worth in Florida?",
    a: "Healthcare business valuation depends on adjusted EBITDA, payer mix quality, patient volume trends, and regulatory compliance. Florida healthcare businesses typically trade at 4x–8x EBITDA, with higher multiples for multi-location practices and recurring revenue models.",
  },
  {
    q: "What healthcare businesses are most in demand by buyers?",
    a: "PE-backed platforms actively seek home health, behavioral health, urgent care, dental, dermatology, physical therapy, and specialty physician practices. Multi-location businesses with strong management teams command the highest valuations.",
  },
  {
    q: "How do I maintain patient confidentiality during a sale?",
    a: "Patient information is never shared during the M&A process. HIPAA compliance is maintained throughout. Buyer due diligence focuses on aggregate metrics — patient counts, payer mix, and revenue trends — not individual patient data.",
  },
  {
    q: "What regulatory considerations affect healthcare M&A in Florida?",
    a: "Florida healthcare transactions require consideration of AHCA licensing, CON requirements (where applicable), Stark Law and Anti-Kickback compliance, and payer contract assignment provisions. Our process addresses these systematically.",
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

const SellHealthcareBusinessFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell a Healthcare Business in Florida | M&A Advisory"
      description="Expert M&A advisory for selling your Florida healthcare business. Confidential process for medical practices, home health, behavioral health, and specialty healthcare companies."
      path="/sell-healthcare-business-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell a Healthcare Business in Florida", path: "/sell-healthcare-business-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Healthcare M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Healthcare Business in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            CBH Business Group provides confidential M&A advisory for Florida healthcare business owners — 
            from physician practices and home health agencies to behavioral health platforms and specialty clinics. 
            We navigate regulatory complexity and deliver premium valuations.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Request Confidential Valuation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Healthcare Valuation</p>
          <h2 className="text-3xl font-serif text-foreground">What Drives Healthcare Business Value</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Payer Mix Quality", desc: "Strong commercial insurance mix with stable reimbursement rates commands higher multiples than Medicaid-heavy models." },
            { title: "Patient Volume Trends", desc: "Consistent growth in patient census and referral source diversification demonstrate market demand." },
            { title: "Regulatory Compliance", desc: "Clean compliance history, proper licensing, and documented HIPAA protocols reduce buyer risk." },
            { title: "Clinical Staff Depth", desc: "Retained providers with non-competes and established patient relationships ensure continuity post-sale." },
            { title: "Multi-Location Scale", desc: "Geographic density and multiple locations enable operational efficiencies that attract PE buyers." },
            { title: "Technology & Systems", desc: "Modern EHR systems, telehealth capabilities, and billing automation signal operational maturity." },
          ].map((driver, i) => (
            <div key={i} className="border-l border-primary/20 pl-6">
              <h3 className="font-serif text-foreground mb-2">{driver.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{driver.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Why CBH</p>
          <h2 className="text-3xl font-serif text-foreground">Healthcare Transaction Expertise</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: HeartPulse, title: "Sector Knowledge", desc: "Understanding of payer contracts, compliance requirements, and healthcare-specific deal structures." },
            { icon: Shield, title: "HIPAA Compliant Process", desc: "Patient data is never exposed. Due diligence uses aggregate metrics only." },
            { icon: Users, title: "Healthcare Buyers", desc: "PE-backed platforms, health systems, and strategic acquirers actively seeking Florida healthcare assets." },
            { icon: TrendingUp, title: "Premium Valuations", desc: "Competitive processes designed to capture the strong multiples in today's healthcare M&A market." },
          ].map((item, i) => (
            <div key={i} className="text-center">
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
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
            <p className="text-xs text-muted-foreground">General M&A advisory guide</p>
          </Link>
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">EBITDA analysis & multiples</p>
          </Link>
          <Link to="/industries#healthcare" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Healthcare Services</p>
            <p className="text-xs text-muted-foreground">Sector overview</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Explore Your Options?</h2>
        <p className="text-muted-foreground mb-8">Every conversation is confidential. No obligation.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Advisory Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default SellHealthcareBusinessFlorida;
