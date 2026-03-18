import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Bot, Zap, TrendingUp, DollarSign, Cog, BarChart3 } from "lucide-react";

const faqItems = [
  {
    q: "What types of AI can be implemented in a small or mid-size business?",
    a: "Most small and mid-size businesses benefit from practical AI applications: automated customer communication, intelligent document processing, predictive analytics for inventory or demand, AI-powered CRM workflows, automated bookkeeping and reconciliation, and smart reporting dashboards. You don't need cutting-edge technology — the ROI comes from eliminating repetitive manual tasks.",
  },
  {
    q: "How does AI and automation improve EBITDA?",
    a: "AI and automation reduce labor costs, eliminate errors, accelerate processes, and improve throughput — all of which flow directly to the bottom line. A business that automates $150K in manual processes sees that savings reflected in EBITDA, which at a 4x–6x multiple translates to $600K–$900K in additional enterprise value.",
  },
  {
    q: "How long does it take to implement AI and automation?",
    a: "Most targeted implementations take 4–12 weeks depending on complexity. We start with a discovery phase to identify the highest-ROI opportunities, then implement in sprints so you see measurable results quickly. Full operational transformations may span 3–6 months.",
  },
  {
    q: "Do I need to be planning a sale to benefit from AI consulting?",
    a: "Not at all. Most clients engage us purely for operational improvement — the cost savings and efficiency gains deliver immediate ROI regardless of your exit timeline. However, the improvements also directly increase your company's valuation if and when you do decide to sell.",
  },
  {
    q: "What industries benefit most from business automation in Florida?",
    a: "Every industry benefits, but we see the fastest ROI in healthcare practices, construction and trades, professional services, manufacturing, restaurants and hospitality, and technology companies. Florida's competitive labor market makes automation particularly valuable for businesses struggling with staffing costs.",
  },
  {
    q: "How much does AI and automation consulting cost?",
    a: "Engagements typically range from $10K–$75K depending on scope. We structure every engagement around measurable ROI — most clients see 3x–10x return within the first year through cost reduction and efficiency gains. We'll outline expected ROI before you commit.",
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI & Automation Consulting for Florida Businesses",
  provider: {
    "@type": "Organization",
    name: "CBH Business Group",
    url: "https://cbhbusinessgroup.com",
  },
  areaServed: {
    "@type": "State",
    name: "Florida",
  },
  description:
    "AI implementation, workflow automation, and process optimization consulting for Florida businesses. Reduce costs, improve efficiency, and increase EBITDA and exit valuation.",
};

const AIAutomationConsultingFlorida = () => (
  <Layout>
    <SEOHead
      title="AI & Automation Consulting Florida | Increase EBITDA"
      description="AI implementation and business automation consulting for Florida companies. Reduce costs, streamline operations, and increase EBITDA and exit valuation. Free ROI assessment."
      path="/ai-automation-consulting-florida"
      jsonLd={[faqJsonLd, serviceJsonLd]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Consulting", path: "/consulting" },
        { name: "AI & Automation Consulting", path: "/ai-automation-consulting-florida" },
      ]}
    />

    {/* Hero */}
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">
            AI & Automation Consulting
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Implement AI & Automation to Drive Profitability
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            You don't need a full consulting engagement to modernize your operations. We design and 
            implement targeted AI solutions and workflow automations that eliminate manual bottlenecks, 
            reduce costs, and deliver measurable improvements to your bottom line.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            Every dollar saved through automation flows directly to{" "}
            <Link to="/what-is-ebitda" className="text-primary hover:text-primary/80 underline">
              EBITDA
            </Link>{" "}
            — increasing net profits today and your{" "}
            <Link to="/business-valuation" className="text-primary hover:text-primary/80 underline">
              exit valuation
            </Link>{" "}
            tomorrow.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get a Free ROI Assessment <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Value Proposition */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">The Impact</p>
          <h2 className="text-3xl font-serif text-foreground">
            How AI & Automation Increase Your Company's Value
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: DollarSign,
              title: "Reduce Operating Costs",
              desc: "Automate repetitive tasks — data entry, scheduling, invoicing, reporting — and reallocate labor to revenue-generating activities.",
            },
            {
              icon: TrendingUp,
              title: "Increase EBITDA & Margins",
              desc: "Every efficiency gain drops straight to the bottom line. Clients typically see 15–30% cost reduction in targeted processes within 90 days.",
            },
            {
              icon: BarChart3,
              title: "Higher Exit Valuation",
              desc: "Buyers pay premiums for scalable, systematized businesses. AI-driven operations signal sophistication and reduce key-person risk.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border p-8 text-center">
              <item.icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-lg text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What We Implement */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Our Services</p>
            <h2 className="text-3xl font-serif text-foreground">What We Implement</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Bot,
                title: "AI-Powered Process Automation",
                points: [
                  "Automated customer communication and follow-up sequences",
                  "Intelligent document processing and data extraction",
                  "AI-driven lead scoring and sales pipeline management",
                  "Predictive analytics for inventory, demand, and staffing",
                ],
              },
              {
                icon: Zap,
                title: "Workflow Design & Integration",
                points: [
                  "End-to-end workflow mapping and optimization",
                  "Cross-platform integrations between existing tools",
                  "Automated reporting and real-time dashboards",
                  "Approval workflows and task routing systems",
                ],
              },
              {
                icon: Cog,
                title: "Operational Streamlining",
                points: [
                  "Billing and revenue cycle automation",
                  "Automated bookkeeping and financial reconciliation",
                  "HR and onboarding process automation",
                  "Quality control and compliance monitoring systems",
                ],
              },
              {
                icon: BarChart3,
                title: "Intelligent Reporting & Decision Support",
                points: [
                  "Real-time KPI dashboards with automated data feeds",
                  "AI-powered financial forecasting and scenario modeling",
                  "Customer analytics and retention prediction",
                  "Operational performance monitoring and alerts",
                ],
              },
            ].map((service, i) => (
              <div key={i} className="bg-card border border-border p-8">
                <service.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-foreground mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ROI Example */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">The Math</p>
            <h2 className="text-3xl font-serif text-foreground">
              How Automation Multiplies Your Exit Value
            </h2>
          </div>
          <div className="bg-card border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-primary mb-4">Before Automation</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>Revenue: $5M</p>
                  <p>Operating Costs: $3.8M</p>
                  <p>EBITDA: $1.2M</p>
                  <p>Valuation (5x): <span className="text-foreground font-semibold">$6.0M</span></p>
                </div>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-primary mb-4">After Automation</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>Revenue: $5M</p>
                  <p>Operating Costs: $3.5M <span className="text-primary">(−$300K)</span></p>
                  <p>EBITDA: $1.5M <span className="text-primary">(+25%)</span></p>
                  <p>Valuation (5x): <span className="text-foreground font-semibold">$7.5M</span></p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                A $300K annual cost reduction creates{" "}
                <span className="text-foreground font-semibold">$1.5M in additional enterprise value</span>{" "}
                at a 5x multiple — before accounting for revenue growth from improved operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ */}
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

    {/* Related Resources */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-primary mb-6 text-center">Related Resources</p>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <Link to="/consulting" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Consulting Services</p>
            <p className="text-xs text-muted-foreground">Full advisory overview</p>
          </Link>
          <Link to="/workflow-optimization-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Workflow Optimization</p>
            <p className="text-xs text-muted-foreground">Process design & integration</p>
          </Link>
          <Link to="/what-is-ebitda" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">What Is EBITDA?</p>
            <p className="text-xs text-muted-foreground">Understanding the key metric</p>
          </Link>
          <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
            <p className="text-xs text-muted-foreground">How companies are valued</p>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">
          Ready to Modernize Your Operations?
        </h2>
        <p className="text-muted-foreground mb-8">
          We'll identify the highest-ROI automation opportunities in your business — no obligation.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Free ROI Assessment <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default AIAutomationConsultingFlorida;
