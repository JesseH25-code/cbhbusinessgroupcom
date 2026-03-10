import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Calculator, Shield, TrendingUp, BarChart3, Users } from "lucide-react";

interface CityConfig {
  city: string;
  region?: string;
  path: string;
  parentPath: string;
  parentLabel: string;
  heroDescription: string;
  whyItems: { icon: typeof Calculator; title: string; desc: string }[];
  faqItems: { q: string; a: string }[];
  relatedLinks: { to: string; label: string; desc: string }[];
}

const ValuationCalculatorLanding = ({ config }: { config: CityConfig }) => {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <Layout>
      <SEOHead
        title={`Free Business Valuation Calculator ${config.city} | CBH Business Group`}
        description={`Use our free business valuation calculator for ${config.city} businesses. Get an instant EBITDA-based estimate of your company's value. Confidential and no obligation.`}
        path={config.path}
        jsonLd={faqJsonLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: config.parentLabel, path: config.parentPath },
          { name: `Business Valuation Calculator ${config.city}`, path: config.path },
        ]}
      />

      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">
              {config.city} Business Valuation
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              Free Business Valuation Calculator — {config.city}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {config.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/valuation-calculator">
                <Button variant="hero" size="lg">
                  <Calculator className="mr-2 w-4 h-4" /> Start Free Valuation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="lg">
                  Request Formal Valuation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-widest uppercase text-primary mb-3">How It Works</p>
              <h2 className="text-3xl font-serif text-foreground">
                Get Your {config.city} Business Valuation in 3 Steps
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Select Your Industry",
                  desc: "Choose from 9 industry sectors and sub-categories to apply the right valuation multiples for your business.",
                },
                {
                  step: "02",
                  title: "Enter Business Profile",
                  desc: "Provide key details — revenue, EBITDA, growth trend, customer concentration, and recurring revenue.",
                },
                {
                  step: "03",
                  title: "Get Your Estimate",
                  desc: "Receive an instant EBITDA-based valuation range. Request a formal valuation with one click — no re-entry needed.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-serif text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-serif text-sm text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Why {config.city} Owners Choose CBH</p>
            <h2 className="text-3xl font-serif text-foreground">Local Expertise, National Reach</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {config.whyItems.map((item, i) => (
              <div key={i} className="text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-sm text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs tracking-widest uppercase text-primary mb-3">What You'll Get</p>
              <h2 className="text-2xl font-serif text-foreground mb-6">Calculator vs. Formal Valuation</h2>
              <div className="space-y-4">
                <div className="border border-border p-4">
                  <h3 className="font-serif text-sm text-foreground mb-1">Free Calculator Estimate</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    An EBITDA-based range using industry multiples and business health adjustments. 
                    Ideal for a quick directional understanding of what your business may be worth.
                  </p>
                </div>
                <div className="border border-primary/30 bg-primary/5 p-4">
                  <h3 className="font-serif text-sm text-primary mb-1">Formal Valuation — One Click</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    After receiving your estimate, request a comprehensive valuation with one click. 
                    All your data carries forward — no forms to re-fill. A senior advisor contacts you within one business day.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-primary mb-3">Key Valuation Drivers</p>
              <h2 className="text-2xl font-serif text-foreground mb-6">What Impacts Your Multiple</h2>
              <div className="space-y-3">
                {[
                  "EBITDA quality & margin consistency",
                  "Revenue growth trend (3+ years)",
                  "Customer diversification (<20% concentration)",
                  "Recurring or contractual revenue",
                  "Management independence from owner",
                  "Documented systems & SOPs",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Common Questions</p>
            <h2 className="text-3xl font-serif text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {config.faqItems.map((faq, i) => (
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
            {config.relatedLinks.map((link, i) => (
              <Link key={i} to={link.to} className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
                <p className="font-serif text-sm text-foreground mb-1">{link.label}</p>
                <p className="text-xs text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-foreground mb-4">
            Find Out What Your {config.city} Business Is Worth
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Our free calculator takes less than 3 minutes. No obligation. Completely confidential.
          </p>
          <Link to="/valuation-calculator">
            <Button variant="hero" size="lg">
              <Calculator className="mr-2 w-4 h-4" /> Start Free Valuation Calculator
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ValuationCalculatorLanding;
