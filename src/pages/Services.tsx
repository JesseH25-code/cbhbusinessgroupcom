import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight } from "lucide-react";
import { speakableJsonLd } from "@/lib/seo-data";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

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

const servicesFaq = [
  {
    q: "What fees does an M&A advisor charge?",
    a: "Most M&A advisors charge a success-based fee (a percentage of the transaction value) plus a smaller monthly retainer. This structure aligns our interests with yours — we succeed when you do. Fee structures vary based on deal size and complexity.",
  },
  {
    q: "Do I need an M&A advisor to sell my business?",
    a: "While not legally required, owners who use an M&A advisor typically achieve 20–40% higher valuations than those who sell independently. An advisor manages the entire process — from valuation and buyer identification to negotiation and closing — while you continue running your business.",
  },
  {
    q: "What is a Confidential Information Memorandum (CIM)?",
    a: "A CIM is a comprehensive document that presents your business to prospective buyers. It includes financial performance, growth opportunities, operational overview, and investment thesis — all prepared under strict confidentiality protocols.",
  },
  {
    q: "How do you find buyers for my business?",
    a: "We conduct targeted, confidential outreach to pre-qualified buyers including private equity firms, strategic acquirers, family offices, and independent sponsors. Each potential buyer is vetted for financial capacity and strategic fit before receiving any information about your company.",
  },
  {
    q: "What is the difference between asset sale and stock sale?",
    a: "In an asset sale, the buyer purchases specific assets and liabilities. In a stock sale, the buyer acquires the entire entity including all assets, liabilities, and contracts. Each structure has different tax implications, liability exposure, and complexity. We advise on the optimal structure for your situation.",
  },
];

const servicesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: servicesFaq.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const Services = () => (
  <Layout>
    <SEOHead
      title="M&A Advisory Services"
      description="Sell-side M&A advisory, business valuation, exit planning, deal structuring, and buyer representation for privately held businesses valued $3M–$50M."
      path="/services"
      jsonLd={[servicesFaqJsonLd, speakableJsonLd("/services")]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
      ]}
    />
    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Advisory Services</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Structured Process. Measurable Outcomes.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every CBH engagement is built around a defined process, clear milestones, and a commitment 
            to maximizing value for our clients. We bring disciplined execution to every transaction.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-24">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="container mx-auto px-6 space-y-16"
      >
        {services.map((service, i) => (
          <motion.div key={i} variants={fadeUp} className="grid md:grid-cols-3 gap-8 items-start">
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
          </motion.div>
        ))}
      </motion.div>
    </section>

    {/* FAQ Section */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Common Questions</p>
            <h2 className="text-3xl font-serif text-foreground mb-8">Frequently Asked Questions</h2>
          </motion.div>
          <div className="space-y-6">
            {servicesFaq.map((faq, i) => (
              <motion.div key={i} variants={fadeUp} className="border-b border-border pb-6">
                <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Related Resources */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-primary mb-6 text-center">Related Resources</p>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <Link to="/sell-business-florida" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center block">
              <p className="font-serif text-sm text-foreground mb-1">Sell a Business in Florida</p>
              <p className="text-xs text-muted-foreground">State-specific M&A guidance</p>
            </Link>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link to="/business-valuation" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center block">
              <p className="font-serif text-sm text-foreground mb-1">Business Valuation</p>
              <p className="text-xs text-muted-foreground">How much is your business worth?</p>
            </Link>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Link to="/sellers" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center block">
              <p className="font-serif text-sm text-foreground mb-1">For Sellers</p>
              <p className="text-xs text-muted-foreground">What drives valuation multiples</p>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>

    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="py-20 border-t border-border"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Discuss Your Situation?</h2>
        <p className="text-muted-foreground mb-8">Every conversation begins in confidence.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </motion.section>
  </Layout>
);

export default Services;
