import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Sell-Side M&A Advisory",
    subtitle: "Full Transaction Execution",
    points: [
      "Comprehensive enterprise valuation and financial modeling",
      "Preparation of Confidential Information Memorandum (CIM)",
      "Targeted outreach to qualified strategic and financial buyers",
      "Management of competitive bid dynamics and LOI negotiation",
      "Coordination of due diligence, legal documentation, and closing",
    ],
  },
  {
    title: "Exit Planning & Value Enhancement",
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
    title: "Enterprise Valuation",
    subtitle: "Market-Based Valuation Analysis",
    points: [
      "EBITDA normalization and add-back analysis",
      "Comparable transaction and precedent analysis",
      "Industry multiple benchmarking",
      "Identification of value-enhancing adjustments",
      "Defensible valuation narrative for buyer conversations",
    ],
  },
  {
    title: "Recapitalizations & Partial Liquidity",
    subtitle: "Structured Capital Events",
    points: [
      "Minority equity sales to institutional investors",
      "Growth capital partnerships with PE sponsors",
      "Management buyout structuring and financing",
      "ESOP evaluation and implementation support",
      "Structured dividend recapitalizations",
    ],
  },
  {
    title: "Strategic Buyer Advisory",
    subtitle: "Acquisition-Side Representation",
    points: [
      "Target identification and screening",
      "Valuation and deal structuring guidance",
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
            Structured Outcomes for Complex Transactions.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every engagement is built around a defined process, clear milestones, and measurable outcomes. 
            We bring institutional execution to the lower middle market.
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
