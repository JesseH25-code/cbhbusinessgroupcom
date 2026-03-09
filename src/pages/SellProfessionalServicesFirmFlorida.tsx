import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "How do I sell my professional services firm in Florida?",
    a: "Selling a professional services firm requires careful planning around client retention, key employee agreements, and transition timelines. An M&A advisor helps structure the deal to protect client relationships while maximizing valuation through earnout structures and retention incentives.",
  },
  {
    q: "What are professional services firm valuation multiples?",
    a: "Florida professional services firms in the $3M–$50M range typically trade at 4x–7x adjusted EBITDA. Key drivers include recurring/contracted revenue, client diversification, employee retention rates, and the owner's role in day-to-day operations.",
  },
  {
    q: "What types of professional services firms does CBH advise?",
    a: "We work with accounting firms, engineering firms, IT consulting, staffing agencies, marketing/PR agencies, architecture firms, environmental services, and other B2B professional services companies. The common thread is businesses with $3M–$50M in value.",
  },
  {
    q: "How do I reduce key-person risk before selling?",
    a: "Start 12–24 months before a sale by delegating client relationships, building management depth, documenting processes, and creating retention incentives for key employees. Reducing owner dependency is one of the most impactful steps to increase valuation multiples.",
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

const SellProfessionalServicesFirmFlorida = () => (
  <Layout>
    <SEOHead
      title="Sell a Professional Services Firm in Florida | M&A"
      description="M&A advisory for Florida professional services firms. Expert guidance for selling accounting, engineering, consulting, and staffing businesses valued $3M–$50M."
      path="/sell-professional-services-firm-florida"
      jsonLd={faqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Industries", path: "/industries" },
        { name: "Sell a Professional Services Firm", path: "/sell-professional-services-firm-florida" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Professional Services M&A</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Sell Your Professional Services Firm in Florida
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Professional services firms require specialized deal structures that protect client relationships, 
            retain key employees, and maximize long-term value. CBH Business Group provides expert M&A 
            advisory for Florida professional services owners.
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
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Our Approach</p>
          <h2 className="text-3xl font-serif text-foreground">People-First M&A for Services Firms</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: BarChart3, title: "Revenue Quality", desc: "Analysis of recurring vs. project revenue, client concentration, and retention rates." },
            { icon: Shield, title: "Client Protection", desc: "Deal structures that ensure smooth client transitions and relationship continuity." },
            { icon: Users, title: "Team Retention", desc: "Employee retention planning and incentive structures built into the deal." },
            { icon: TrendingUp, title: "Earnout Optimization", desc: "Structuring earnouts that align buyer and seller interests post-close." },
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
          <Link to="/sell-technology-company-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Technology M&A</p>
            <p className="text-xs text-muted-foreground">Sell a tech company</p>
          </Link>
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">EBITDA analysis & multiples</p>
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

export default SellProfessionalServicesFirmFlorida;
