import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroTrustStrip from "@/components/HeroTrustStrip";
import IndustryExplorer from "@/components/IndustryExplorer";
import { ArrowRight, Building2, LineChart, FileText, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const buyerTypes = [
  { type: "Private Equity", desc: "Platform and add-on acquisitions for PE-backed portfolio companies." },
  { type: "Family Offices", desc: "Direct investments seeking long-term value creation and stable cash flows." },
  { type: "Strategic Acquirers", desc: "Operating companies pursuing horizontal or vertical growth through acquisition." },
  { type: "Search Funds & Independent Sponsors", desc: "Entrepreneurial acquirers seeking a single platform investment." },
];

const buyersFaq = [
  {
    q: "How do I get access to deal flow?",
    a: "Submit your acquisition criteria through our buyer registration form. Once verified, you'll receive anonymized opportunity summaries matching your criteria. Full Confidential Information Memorandums (CIMs) are provided upon execution of deal-specific NDAs.",
  },
  {
    q: "What is the typical acquisition size range?",
    a: "We focus on businesses with enterprise values between $3M and $50M, typically generating $1M–$8M in adjusted EBITDA. Transaction structures include full acquisitions, majority recapitalizations, and management buyouts.",
  },
  {
    q: "Do you work with individual buyers?",
    a: "Yes. We work with individual buyers, search funds, independent sponsors, family offices, private equity firms, and strategic acquirers. All prospective buyers must demonstrate financial capacity and strategic alignment before receiving confidential materials.",
  },
  {
    q: "What industries are available?",
    a: "Our deal flow spans multiple sectors including construction, professional services, healthcare, technology, manufacturing, consumer products, and business services. Opportunities vary based on current engagements.",
  },
];

const buyersFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: buyersFaq.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const rangeOptions = ["$1M or less", "$1M–$3M", "$3M–$5M", "$5M–$10M", "$10M+"];

const MultiSelectRanges = ({
  label,
  selected,
  onChange,
}: {
  label: string;
  selected: string[];
  onChange: (vals: string[]) => void;
}) => (
  <div>
    <label className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">{label}</label>
    <div className="flex flex-wrap gap-2">
      {rangeOptions.map((opt) => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() =>
              onChange(active ? selected.filter((s) => s !== opt) : [...selected, opt])
            }
            className={`px-3 py-1.5 text-xs border transition-colors ${
              active
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary/50"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  </div>
);

const Buyers = () => {
  const [form, setForm] = useState({
    name: "", firm: "", email: "", criteria: "", type: "",
    revenueRanges: [] as string[],
    ebitdaRanges: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await supabase.functions.invoke("send-buyer-email", {
        body: {
          name: form.name,
          firm: form.firm,
          email: form.email,
          buyer_type: form.type,
          criteria: form.criteria,
          revenue_ranges: form.revenueRanges,
          ebitda_ranges: form.ebitdaRanges,
        },
      });
      if (response.error) throw response.error;
      setSubmitted(true);
      toast.success("Submission received — we'll be in touch within 48 hours.");
    } catch (err) {
      console.error("Buyer submission error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Florida Business Acquisition Opportunities — Confidential Deal Flow"
        description="Confidential deal flow for PE firms, family offices, and strategic acquirers. Pre-vetted Florida lower middle-market opportunities ($3M–$50M EV). Register for matched targets."
        path="/buyers"
        jsonLd={buyersFaqJsonLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "For Buyers", path: "/buyers" },
        ]}
      />

      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">For Acquirers</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Join Our Acquisition Network</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We maintain a confidential network of qualified strategic and financial buyers seeking 
              lower middle-market opportunities in the $3M–$50M enterprise value range.
            </p>
            <HeroTrustStrip />
            <a href="#buyer-form" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide uppercase hover:bg-primary/90 transition-colors">
              Register as a Buyer <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Buyer Profiles</p>
            <h2 className="text-3xl font-serif text-foreground mb-12">Types of Qualified Buyers</h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {buyerTypes.map((b, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-card border border-border p-8">
                <h3 className="font-serif text-lg text-foreground mb-2">{b.type}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <IndustryExplorer />

      <section id="buyer-form" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-16"
          >
            <motion.div variants={fadeUp}>
              <p className="text-xs tracking-widest uppercase text-primary mb-3">Process</p>
              <h2 className="text-3xl font-serif text-foreground mb-6">NDA-Protected Access</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All deal information is shared under strict non-disclosure agreements. 
                Prospective buyers must demonstrate financial capacity and strategic alignment 
                before receiving confidential materials.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Once approved, you will receive anonymized opportunity summaries matching your 
                acquisition criteria. Full CIMs are provided upon execution of deal-specific NDAs.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-serif text-foreground mb-6">Submit Acquisition Criteria</h2>
              {submitted ? (
                <div className="bg-card border border-primary/30 p-8 text-center">
                  <p className="text-primary font-serif text-lg mb-2">Submission Received</p>
                  <p className="text-sm text-muted-foreground">We will review your criteria and respond within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { key: "name", label: "Full Name", type: "text" },
                    { key: "firm", label: "Firm / Organization", type: "text" },
                    { key: "email", label: "Email Address", type: "email" },
                    { key: "type", label: "Buyer Type (PE, Strategic, Family Office, Other)", type: "text" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">{field.label}</label>
                      <input
                        type={field.type}
                        required
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                      />
                    </div>
                  ))}
                  <MultiSelectRanges
                    label="Target Revenue Range (select all that apply)"
                    selected={form.revenueRanges}
                    onChange={(vals) => setForm({ ...form, revenueRanges: vals })}
                  />
                  <MultiSelectRanges
                    label="Target EBITDA Range (select all that apply)"
                    selected={form.ebitdaRanges}
                    onChange={(vals) => setForm({ ...form, ebitdaRanges: vals })}
                  />
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Acquisition Criteria</label>
                    <textarea
                      required
                      rows={4}
                      value={form.criteria}
                      onChange={(e) => setForm({ ...form, criteria: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Industry preferences, geography, structure..."
                    />
                  </div>
                  <Button variant="hero" size="lg" type="submit" className="w-full" disabled={submitting}>
                    {submitting ? "Submitting..." : "Join Acquisition Network"} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
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
              {buyersFaq.map((faq, i) => (
                <motion.div key={i} variants={fadeUp} className="border-b border-border pb-6">
                  <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Resources — reduces bounce by surfacing next steps */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Continue Exploring</p>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">Related Buyer Resources</h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
          >
            {[
              { icon: Building2, title: "Active Opportunities", desc: "Current confidential acquisition targets.", path: "/opportunities" },
              { icon: LineChart, title: "2026 Florida M&A Benchmarks", desc: "Sector EBITDA multiples and trends.", path: "/florida-ma-benchmarks" },
              { icon: FileText, title: "M&A Glossary", desc: "Key terms used in deal documents.", path: "/glossary" },
              { icon: BookOpen, title: "Resource Library", desc: "Buyer guides and exit planning.", path: "/resources" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link
                  to={item.path}
                  className="block bg-card border border-border p-6 h-full hover:border-primary/40 transition-all group"
                >
                  <item.icon className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-serif text-base text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Buyers;
