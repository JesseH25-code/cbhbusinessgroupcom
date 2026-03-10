import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, Download, BookOpen, BarChart3, Shield, TrendingUp, Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

/* ─── Guide Data ─────────────────────────────────────────────────── */

const guides = [
  {
    id: "exit-planning",
    title: "The Florida Business Owner's Exit Planning Guide",
    description: "A comprehensive 20-page guide covering everything you need to know about preparing your business for a successful sale — from valuation drivers to deal structure.",
    topics: ["When to start planning your exit", "How buyers evaluate businesses", "EBITDA normalization explained", "Building management depth", "Transaction timeline & process"],
    icon: FileText,
    category: "Exit Planning",
  },
  {
    id: "valuation-drivers",
    title: "7 Factors That Drive Business Valuation Multiples",
    description: "Understand the key factors that determine whether your business commands a 3× or 7× EBITDA multiple — and what you can do to improve each one.",
    topics: ["Revenue diversification", "Recurring revenue models", "Management independence", "Growth trajectory", "Operational systems", "Financial documentation", "Industry positioning"],
    icon: BarChart3,
    category: "Valuation",
  },
  {
    id: "scaling-guide",
    title: "Scaling from $1M to $10M: A Founder's Playbook",
    description: "A step-by-step framework for founders looking to break through the operator stage and build a systemized, scalable company.",
    topics: ["Hiring your first managers", "Building marketing systems", "Delegation frameworks", "KPI dashboards", "Revenue math & pipeline planning"],
    icon: TrendingUp,
    category: "Growth",
  },
  {
    id: "due-diligence",
    title: "Due Diligence Checklist for Business Sellers",
    description: "Everything buyers will request during due diligence — organized into a clear checklist so you can prepare months in advance and avoid deal-killing surprises.",
    topics: ["Financial documents required", "Legal & compliance items", "Operational documentation", "Customer & vendor contracts", "Employee & HR records", "Insurance & risk items"],
    icon: Shield,
    category: "Transactions",
  },
  {
    id: "ma-process",
    title: "The M&A Process Explained: From Engagement to Closing",
    description: "A clear, jargon-free walkthrough of how M&A transactions work for lower-middle-market businesses, including timelines, key milestones, and what to expect.",
    topics: ["Engagement & preparation", "Confidential marketing", "Buyer outreach & NDAs", "LOI negotiation", "Due diligence", "Definitive agreements", "Closing & transition"],
    icon: BookOpen,
    category: "Transactions",
  },
];

const faqItems = [
  {
    q: "Are these guides really free?",
    a: "Yes. All guides are free to download. We ask for your name and email so we can send you the guide and notify you when we publish new resources.",
  },
  {
    q: "Who are these guides written for?",
    a: "These guides are written for privately held business owners in the lower middle market ($1M–$100M+ revenue) who are considering selling, planning for growth, or preparing for a future exit.",
  },
  {
    q: "Will I be contacted after downloading?",
    a: "You may receive a brief follow-up email with additional resources. We respect your time — no high-pressure sales tactics. You can unsubscribe at any time.",
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

/* ─── Component ──────────────────────────────────────────────────── */

const Resources = () => {
  const [activeGuide, setActiveGuide] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [submitting, setSubmitting] = useState(false);
  const [unlockedGuides, setUnlockedGuides] = useState<Set<string>>(new Set());

  const handleUnlock = async (guideId: string) => {
    if (!form.name || !form.email) {
      toast.error("Please enter your name and email.");
      return;
    }
    setSubmitting(true);
    const guide = guides.find((g) => g.id === guideId);
    try {
      const res = await supabase.functions.invoke("send-resource-email", {
        body: {
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          guideId,
          guideTitle: guide?.title || guideId,
        },
      });
      if (res.error) throw res.error;
      setUnlockedGuides((prev) => new Set([...prev, guideId]));
      setActiveGuide(null);
      toast.success("Guide unlocked! Check your email for a confirmation.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Free Resources & Guides for Business Owners"
        description="Download free guides on exit planning, business valuation, scaling, and M&A transactions. Expert resources for Florida business owners."
        path="/resources"
        jsonLd={faqJsonLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ]}
      />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Free Resources</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Guides & Resources for Business Owners
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Expert guides on exit planning, business valuation, scaling, and the M&A process — written for founders and owners of privately held companies.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => {
              const isUnlocked = unlockedGuides.has(guide.id);
              const isActive = activeGuide === guide.id;

              return (
                <Card key={guide.id} className="bg-card border-border hover:border-primary/30 transition-colors flex flex-col">
                  <CardContent className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <guide.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-primary bg-primary/10 px-2 py-1 rounded">
                        {guide.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-foreground mb-3">{guide.title}</h3>
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{guide.description}</p>

                    <div className="mb-6 flex-1">
                      <p className="text-xs font-sans font-semibold tracking-widest uppercase text-foreground mb-3">What's Inside</p>
                      <ul className="space-y-2">
                        {guide.topics.map((topic) => (
                          <li key={topic} className="text-sm text-muted-foreground flex items-start gap-2">
                            <ArrowRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {isUnlocked ? (
                      <div className="flex items-center gap-2 text-primary text-sm font-sans font-semibold">
                        <Download className="w-4 h-4" />
                        Guide unlocked — check your email
                      </div>
                    ) : isActive ? (
                      <div className="space-y-3 border-t border-border pt-4">
                        <p className="text-xs font-sans font-semibold tracking-widest uppercase text-foreground mb-2">
                          <Lock className="w-3 h-3 inline mr-1" />
                          Enter your info to unlock
                        </p>
                        <input
                          type="text"
                          placeholder="Full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        />
                        <input
                          type="email"
                          placeholder="Email address"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          placeholder="Company name (optional)"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className="w-full bg-secondary border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        />
                        <div className="flex gap-2">
                          <Button
                            variant="hero"
                            className="flex-1"
                            onClick={() => handleUnlock(guide.id)}
                            disabled={submitting}
                          >
                            {submitting ? "Unlocking…" : "Download Guide"}
                          </Button>
                          <Button
                            variant="heroOutline"
                            onClick={() => setActiveGuide(null)}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button
                        variant="hero"
                        className="w-full"
                        onClick={() => setActiveGuide(guide.id)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Free Guide
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="font-serif text-3xl text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqItems.map((faq) => (
              <div key={faq.q}>
                <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Need Personalized Guidance?</h2>
          <p className="text-muted-foreground mb-10">
            Our M&A advisors work with business owners across Florida to prepare for successful exits, maximize valuations, and navigate complex transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Schedule a Consultation <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link to="/business-valuation">
              <Button variant="heroOutline" size="lg">Get a Business Valuation</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
