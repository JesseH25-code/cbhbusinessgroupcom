import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my technology company in Florida?",
    a: "Selling a tech company requires specialized preparation: documenting your tech stack, intellectual property, recurring revenue metrics, customer retention rates, and team capabilities. An M&A advisor experienced in tech transactions will position these assets to attract strategic and financial buyers.",
  },
  {
    q: "What are technology company valuation multiples?",
    a: "Florida tech companies in the $3M–$50M range typically see multiples of 4x–8x EBITDA or 2x–5x revenue for SaaS/recurring revenue models. Key drivers include revenue retention rates, growth trajectory, customer concentration, and proprietary technology.",
  },
  {
    q: "Do tech companies sell on revenue or EBITDA multiples?",
    a: "It depends on the business model. SaaS companies with high gross margins and strong retention often sell on revenue multiples (2x–5x ARR). IT services, MSPs, and other tech businesses typically sell on EBITDA multiples (4x–8x). Hybrid models may use blended approaches.",
  },
  {
    q: "What makes a tech company attractive to acquirers?",
    a: "Key attractors include recurring/subscription revenue, low customer churn, proprietary technology or IP, skilled and retainable team, scalable architecture, strong gross margins (60%+), and a clear growth trajectory. Companies with these traits command premium multiples.",
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

const SellTechnologyCompanyFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell a Technology Company in Florida | Tech M&A"
      description="Specialized M&A advisory for Florida technology companies. Expert valuations for SaaS, IT services, and software businesses valued $3M–$50M."
      path="/sell-technology-company-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell a Technology Company in Florida", path: "/sell-technology-company-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Technology M&A Advisory</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Technology Company in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Technology companies require specialized M&A expertise — from recurring revenue analysis 
            to IP valuation and tech team retention planning. CBH Business Group provides hands-on 
            advisory for Florida tech founders and owners pursuing a strategic exit.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Tech M&A Expertise</p>
          <h2 className="text-3xl font-serif text-foreground">Why Tech Founders Choose CBH</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "SaaS Metrics Analysis", desc: "ARR, MRR, churn, LTV/CAC — we speak the language of tech acquirers." },
            { icon: Shield, title: "IP Protection", desc: "Confidential process that protects your proprietary technology and team." },
            { icon: Users, title: "Strategic Buyers", desc: "Access to PE-backed platforms, strategic acquirers, and tech-focused funds." },
            { icon: TrendingUp, title: "Premium Multiples", desc: "Positioning your recurring revenue and growth metrics for maximum value." },
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
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
            <p className="text-xs text-muted-foreground">Statewide M&A advisory</p>
          </Link>
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">EBITDA analysis & multiples</p>
          </Link>
          <Link to="/industries" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">All Industries</p>
            <p className="text-xs text-muted-foreground">Sector expertise overview</p>
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

export default SellTechnologyCompanyFlorida;
