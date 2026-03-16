import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const packages = [
  {
    name: "Foundational Estimate",
    price: "Free",
    priceNote: "No cost or commitment",
    description: "Quick preliminary estimate based on industry multiples and basic business metrics.",
    deliverables: [
      "Industry-based EBITDA multiple range",
      "Preliminary enterprise value estimate",
      "Key value driver summary",
    ],
    bestFor: "Curiosity or early-stage exploration",
    cta: "Use Free Calculator",
    ctaPath: "/valuation-calculator",
    highlight: false,
  },
  {
    name: "Market Benchmark Report",
    price: "$99",
    priceNote: "One-time fee",
    description: "Streamlined financial review with industry comparisons and basic retirement-planning insights.",
    deliverables: [
      "Financial statement overview",
      "Industry comparable analysis",
      "SDE / EBITDA benchmarking",
      "Basic retirement planning insights",
      "PDF report delivered within 5 business days",
    ],
    bestFor: "Small businesses wanting a general benchmark",
    cta: "Request This Package",
    ctaPath: "/contact?package=market-benchmark",
    highlight: false,
  },
  {
    name: "Comprehensive Valuation",
    price: "$497",
    priceNote: "Most popular",
    description: "Detailed analysis of financial statements, adjusted cash flow, and seller's discretionary earnings with industry comparables.",
    deliverables: [
      "3-year financial normalization",
      "SDE and EBITDA adjustments",
      "Industry comparable transaction data",
      "Value driver assessment",
      "Market positioning insights",
      "Detailed PDF report with advisor notes",
    ],
    bestFor: "Serious sellers preparing for market",
    cta: "Request This Package",
    ctaPath: "/contact?package=comprehensive",
    highlight: true,
  },
  {
    name: "Executive Valuation",
    price: "$1,200",
    priceNote: "CFO-grade analysis",
    description: "Comprehensive breakdown including SDE, EBITDA, asset values, and debt-service coverage prepared by a valuation expert.",
    deliverables: [
      "Full SDE & EBITDA normalization",
      "Asset-based valuation approach",
      "Debt-service coverage analysis",
      "Market positioning & buyer landscape",
      "Exit-planning action plan",
      "Tax implications overview",
      "1-hour advisory consultation included",
    ],
    bestFor: "Owners planning a near-term exit",
    cta: "Request This Package",
    ctaPath: "/contact?package=executive",
    highlight: false,
  },
  {
    name: "Investor-Ready Pitch Deck",
    price: "$400",
    priceNote: "Add-on or standalone",
    description: "Business valuation summary plus a professionally designed, investor-ready pitch deck with financial projections.",
    deliverables: [
      "Business valuation summary",
      "Professionally designed pitch deck",
      "2–10 year financial projections",
      "Market opportunity analysis",
      "Investment thesis narrative",
      "Delivered in PDF and editable format",
    ],
    bestFor: "Franchising, investment, or capital raise",
    cta: "Request This Package",
    ctaPath: "/contact?package=pitch-deck",
    highlight: false,
  },
];

const ValuationPackages = () => (
  <section className="py-24 bg-secondary">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-widest uppercase text-primary mb-3">Valuation Services</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Choose the Right Level of Analysis
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From a free quick estimate to a CFO-grade comprehensive valuation — select the package 
          that matches your stage and goals.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {packages.map((pkg) => (
          <motion.div
            key={pkg.name}
            variants={fadeUp}
            className={`bg-card border p-8 flex flex-col relative ${
              pkg.highlight
                ? "border-primary ring-1 ring-primary/20"
                : "border-border hover:border-primary/30"
            } transition-colors duration-300`}
          >
            {pkg.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-semibold tracking-widest uppercase px-4 py-1">
                  <Star className="w-3 h-3" /> Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="font-serif text-lg text-foreground mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-serif text-primary">{pkg.price}</span>
              </div>
              <p className="text-xs text-muted-foreground">{pkg.priceNote}</p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>

            <div className="gold-divider mb-4" />

            <ul className="space-y-3 mb-6 flex-1">
              {pkg.deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-muted-foreground mb-4">
              <span className="font-semibold text-foreground">Best for:</span> {pkg.bestFor}
            </p>

            <Link to={pkg.ctaPath}>
              <Button
                variant={pkg.highlight ? "hero" : "heroOutline"}
                size="lg"
                className="w-full"
              >
                {pkg.cta} <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center text-xs text-muted-foreground mt-10 max-w-xl mx-auto"
      >
        All paid packages include a confidential consultation. Payments are processed securely. 
        Contact us at{" "}
        <a href="tel:+19546036865" className="text-primary hover:underline">(954) 603-6865</a>
        {" "}with any questions.
      </motion.p>
    </div>
  </section>
);

export default ValuationPackages;
