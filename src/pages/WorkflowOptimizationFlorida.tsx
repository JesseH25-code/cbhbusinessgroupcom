import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Workflow, Timer, CheckCircle, Layers, Settings, RefreshCw } from "lucide-react";

const faqItems = [
  {
    q: "What is workflow optimization?",
    a: "Workflow optimization is the process of analyzing, redesigning, and automating your business processes to eliminate waste, reduce errors, and increase throughput. It involves mapping current workflows, identifying bottlenecks and redundancies, and implementing streamlined solutions — often using automation and technology integrations.",
  },
  {
    q: "How does workflow optimization differ from AI consulting?",
    a: "Workflow optimization focuses on process design — how work moves through your organization. AI consulting adds an intelligence layer on top of those workflows: automating decisions, predicting outcomes, and processing unstructured data. Most clients benefit from both, and we typically start with workflow optimization as the foundation for AI implementation.",
  },
  {
    q: "What ROI can I expect from workflow optimization?",
    a: "Clients typically see 20–40% time savings in targeted processes within 60–90 days. For a business with $500K in annual administrative costs, a 30% efficiency gain saves $150K per year — which flows directly to EBITDA and multiplies at exit.",
  },
  {
    q: "Which business processes benefit most from optimization?",
    a: "The highest-ROI targets are usually: accounts receivable and billing, customer onboarding, project management and delivery, inventory and supply chain, HR and employee onboarding, reporting and compliance. We identify your specific bottlenecks during our discovery phase.",
  },
  {
    q: "Do you work with our existing software and tools?",
    a: "Absolutely. We build on your existing technology stack — whether that's QuickBooks, Salesforce, HubSpot, Monday.com, or industry-specific platforms. Our approach is to connect and optimize what you already have before recommending new tools.",
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
  name: "Workflow Optimization Consulting for Florida Businesses",
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
    "Workflow optimization, process automation, and operational streamlining for Florida businesses. Eliminate bottlenecks, reduce costs, and increase profitability.",
};

const WorkflowOptimizationFlorida = () => (
  <Layout>
    <SEOHead
      title="Workflow Optimization Florida | Streamline Operations"
      description="Workflow optimization and process automation for Florida businesses. Eliminate bottlenecks, reduce costs by 20-40%, and increase EBITDA. Free process audit available."
      path="/workflow-optimization-florida"
      jsonLd={[faqJsonLd, serviceJsonLd]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Consulting", path: "/consulting" },
        { name: "Workflow Optimization", path: "/workflow-optimization-florida" },
      ]}
    />

    {/* Hero */}
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">
            Workflow Optimization
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Streamline Operations. Eliminate Waste. Increase Margins.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Most businesses lose 20–30% of productive capacity to inefficient processes, manual 
            workarounds, and disconnected systems. We redesign your workflows to eliminate friction 
            and unlock operational leverage — without disrupting your team.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            The result: lower costs, faster delivery, higher{" "}
            <Link to="/what-is-ebitda" className="text-primary hover:text-primary/80 underline">
              EBITDA
            </Link>
            , and a more valuable business.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Request Free Process Audit <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Process */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Our Approach</p>
          <h2 className="text-3xl font-serif text-foreground">How We Optimize Your Workflows</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Layers, title: "Map & Diagnose", desc: "We document your current processes end-to-end, identifying bottlenecks, redundancies, and manual pain points." },
            { icon: Settings, title: "Redesign", desc: "We architect streamlined workflows that eliminate waste and integrate automation where it delivers the highest ROI." },
            { icon: RefreshCw, title: "Implement", desc: "We build and deploy the optimized workflows using your existing technology stack, with minimal disruption." },
            { icon: CheckCircle, title: "Measure & Refine", desc: "We track KPIs to validate results and continuously refine processes for sustained improvement." },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-sm text-foreground mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Common Workflows */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">High-Impact Areas</p>
            <h2 className="text-3xl font-serif text-foreground">Workflows We Optimize</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Workflow,
                title: "Revenue Cycle & Billing",
                points: [
                  "Automated invoicing and payment follow-up",
                  "Revenue recognition and reconciliation",
                  "Accounts receivable aging and collections workflows",
                ],
              },
              {
                icon: Timer,
                title: "Customer Onboarding & Delivery",
                points: [
                  "Standardized onboarding sequences with automated triggers",
                  "Project kickoff and delivery milestone tracking",
                  "Client communication and status reporting automation",
                ],
              },
              {
                icon: Settings,
                title: "Back-Office Operations",
                points: [
                  "HR onboarding and offboarding processes",
                  "Vendor management and procurement workflows",
                  "Compliance tracking and document management",
                ],
              },
              {
                icon: Layers,
                title: "Cross-Platform Integration",
                points: [
                  "CRM ↔ accounting software synchronization",
                  "Project management ↔ billing system automation",
                  "Data flow between field operations and office systems",
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
          <Link to="/ai-automation-consulting-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">AI & Automation</p>
            <p className="text-xs text-muted-foreground">AI-powered solutions</p>
          </Link>
          <Link to="/valuation-calculator" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Valuation Calculator</p>
            <p className="text-xs text-muted-foreground">Estimate your business value</p>
          </Link>
          <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Sell a Business</p>
            <p className="text-xs text-muted-foreground">Florida M&A advisory</p>
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">
          Ready to Streamline Your Operations?
        </h2>
        <p className="text-muted-foreground mb-8">
          We'll map your processes and identify the highest-impact optimization opportunities — no obligation.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Free Process Audit <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default WorkflowOptimizationFlorida;
