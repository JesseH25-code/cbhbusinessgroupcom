import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Sell-Side M&A Advisory",
    subtitle: "Full Transaction Execution",
    points: [
      "Comprehensive business valuation and financial modeling",
      "Preparation of Confidential Information Memorandum (CIM)",
      "Targeted, NDA-protected outreach to qualified buyers",
      "Management of competitive bid dynamics and LOI negotiation",
      "Coordination of due diligence, legal documentation, and closing",
    ],
  },
  {
    title: "Business Valuation",
    subtitle: "Market-Based Valuation Advisory",
    points: [
      "EBITDA normalization and add-back analysis",
      "Comparable transaction and industry multiple benchmarking",
      "Identification of value-enhancing adjustments",
      "Defensible valuation narrative for buyer conversations",
      "Clear financial positioning for market readiness",
    ],
  },
  {
    title: "Exit Planning",
    subtitle: "12–36 Month Pre-Sale Strategy",
    points: [
      "Identification of value drivers and risk factors",
      "Financial normalization and reporting improvements",
      "Revenue concentration mitigation strategies",
      "Management team strengthening and succession planning",
      "Operational efficiency and margin improvement initiatives",
    ],
  },
  {
    title: "Deal Structuring",
    subtitle: "Transaction Architecture",
    points: [
      "Asset vs. stock sale analysis and optimization",
      "Earnout, seller financing, and rollover equity structures",
      "Working capital and closing mechanics",
      "Tax-efficient transaction planning",
      "Post-closing transition and non-compete frameworks",
    ],
  },
  {
    title: "Buyer Representation",
    subtitle: "Acquisition-Side Advisory",
    points: [
      "Target identification and screening",
      "Valuation and offer structuring guidance",
      "Negotiation support and LOI preparation",
      "Due diligence coordination",
      "Post-acquisition integration planning",
    ],
  },
];

const Services = () => (
  <Layout>
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Advisory Services</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Structured Process. Measurable Outcomes.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every CBH engagement is built around a defined process, clear milestones, and a commitment 
            to maximizing value for our clients. We bring disciplined execution to every transaction.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6 space-y-16">
        {services.map((service, i) => (
          <div key={i} className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <p className="text-xs tracking-widest uppercase text-primary mb-2">{service.subtitle}</p>
              <h2 className="text-2xl font-serif text-foreground">{service.title}</h2>
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

    <section className="py-20 bg-secondary border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Discuss Your Situation?</h2>
        <p className="text-muted-foreground mb-8">Every conversation begins in confidence.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Services;
