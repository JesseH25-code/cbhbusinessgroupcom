import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, ExternalLink } from "lucide-react";

const consultingServices = [
  {
    title: "Exit Planning & Pre-Sale Advisory",
    subtitle: "Maximize Value Before You Go to Market",
    description:
      "Most business owners leave significant value on the table by going to market too early. Our exit planning practice identifies gaps, builds value, and positions your company for maximum multiples — typically over a 12–36 month horizon.",
    points: [
      "Comprehensive value driver assessment and gap analysis",
      "EBITDA normalization and financial statement clean-up",
      "Customer and revenue concentration mitigation strategies",
      "Management team strengthening and succession planning",
      "Key person dependency reduction",
      "Operational documentation and process formalization",
    ],
  },
  {
    title: "Business Operations Consulting",
    subtitle: "Strengthen the Engine That Drives Value",
    description:
      "Operational efficiency directly impacts valuation multiples. We work alongside ownership to improve margins, streamline processes, and build the kind of infrastructure buyers pay premiums for.",
    points: [
      "Operational efficiency and margin improvement initiatives",
      "Revenue growth strategy and market expansion planning",
      "Financial reporting and KPI dashboard implementation",
      "Technology systems assessment and optimization",
      "Workforce planning and organizational design",
      "Vendor and supply chain rationalization",
    ],
  },
  {
    title: "AI, Automation & Workflow Optimization",
    subtitle: "Modernize Operations Without a Full Engagement",
    description:
      "Not every company needs a comprehensive consulting engagement. For owners looking to gain immediate operational leverage, we design and implement targeted AI solutions, workflow automations, and process optimizations that reduce costs, improve efficiency, and drive measurable improvements to net profitability — directly impacting EBITDA and exit valuation.",
    points: [
      "AI-powered process automation to eliminate manual bottlenecks",
      "Workflow design and integration across existing technology platforms",
      "Intelligent reporting and decision-support systems",
      "Cost reduction through operational streamlining and automation",
      "Revenue cycle and billing process optimization",
      "Scalable systems that increase enterprise value and buyer attractiveness",
    ],
  },
];

const consultingFaq = [
  {
    q: "How does consulting relate to your M&A advisory services?",
    a: "Our consulting practice is designed to complement our M&A work. Many clients engage us for consulting first — to build value and prepare their business — then transition to a full M&A engagement when they're ready to sell. This integrated approach consistently delivers higher transaction values.",
  },
  {
    q: "How long does an exit planning engagement typically last?",
    a: "Most exit planning engagements span 12–36 months, depending on the complexity of the business and the gaps identified. Some owners engage us years before they plan to sell to maximize their runway for value creation.",
  },
  {
    q: "Can I engage CBH for consulting without planning to sell?",
    a: "Absolutely. Many of our consulting clients are focused purely on operational improvement and growth — with no near-term exit in mind. The disciplines we bring (financial clarity, operational efficiency, risk mitigation) create value regardless of your timeline.",
  },
  {
    q: "What size companies do you work with for consulting?",
    a: "We typically work with privately held companies generating $1M–$50M in annual revenue. Our sweet spot is businesses with $500K–$5M in EBITDA that want to professionalize operations and accelerate growth.",
  },
];

const consultingFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: consultingFaq.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const Consulting = () => (
  <Layout>
    <SEOHead
      title="Business Consulting & Exit Planning"
      description="Exit planning, pre-sale advisory, and business operations consulting for privately held companies. Maximize value before you go to market."
      path="/consulting"
      jsonLd={consultingFaqJsonLd}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Consulting", path: "/consulting" },
      ]}
    />

    {/* Hero */}
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Consulting</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Build Value. Then Capture It.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Our consulting practice helps business owners strengthen operations, eliminate risk factors, 
            and position their companies for premium valuations — whether you're planning an exit or 
            simply want to run a better business.
          </p>
          <a
            href="https://cbhconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-semibold tracking-wide uppercase"
          >
            Visit CBH Consulting <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24">
      <div className="container mx-auto px-6 space-y-20">
        {consultingServices.map((service, i) => (
          <div key={i} className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-primary mb-2">{service.subtitle}</p>
              <h2 className="text-2xl font-serif text-foreground mb-4">{service.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
            <div className="md:col-span-2 bg-card border border-border p-8">
              <ul className="space-y-3">
                {service.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Bridge to M&A */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">The CBH Advantage</p>
          <h2 className="text-3xl font-serif text-foreground mb-6">
            Consulting + M&A Advisory — One Integrated Platform
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Most consulting firms hand you a report and walk away. We stay with you through execution — and 
            when you're ready to transact, our M&A advisory team already knows your business inside and out. 
            This continuity eliminates the friction, duplication, and lost context that comes with switching advisors.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6">
              <p className="font-serif text-foreground mb-1">Phase 1</p>
              <p className="text-xs text-muted-foreground">Assess & Plan</p>
            </div>
            <div className="bg-card border border-border p-6">
              <p className="font-serif text-foreground mb-1">Phase 2</p>
              <p className="text-xs text-muted-foreground">Build & Optimize</p>
            </div>
            <div className="bg-card border border-border p-6">
              <p className="font-serif text-foreground mb-1">Phase 3</p>
              <p className="text-xs text-muted-foreground">Transact & Exit</p>
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
            {consultingFaq.map((faq, i) => (
              <div key={i} className="border-b border-border pb-6">
                <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA with external link */}
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Build Value?</h2>
        <p className="text-muted-foreground mb-8">
          Whether you're planning an exit or strengthening operations, every conversation begins in confidence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <a href="https://cbhconsulting.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg">
              Visit CBH Consulting <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  </Layout>
);

export default Consulting;
