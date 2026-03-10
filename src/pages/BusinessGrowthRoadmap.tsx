import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { ChevronDown, ArrowRight, Target, Users, TrendingUp, Building2, Landmark, AlertTriangle } from "lucide-react";
import GrowthStageCalculator from "@/components/roadmap/GrowthStageCalculator";
import SellabilityScoreTool from "@/components/roadmap/SellabilityScoreTool";
import ValuationEstimator from "@/components/roadmap/ValuationEstimator";

/* ─── FAQ Data ────────────────────────────────────────────────────── */

const roadmapFaqItems = [
  {
    q: "What are the five stages of business growth?",
    a: "The five stages are Startup ($0–$1M), Operator ($1M–$3M), Systemized ($3M–$10M), Scale ($10M–$30M), and Expansion ($30M+). Each stage has a unique primary constraint, required founder skills, and organizational structure.",
  },
  {
    q: "How do I know what stage my business is in?",
    a: "Your stage is primarily determined by annual revenue, organizational structure, and the founder's role. Use our Growth Stage Calculator to answer a few diagnostic questions and identify your current stage along with the constraint holding you back.",
  },
  {
    q: "What is a sellability score?",
    a: "A sellability score (0–100) measures how attractive your business is to potential buyers. It evaluates factors like revenue size, profit margins, owner dependence, customer concentration, recurring revenue, financial documentation, and management team strength.",
  },
  {
    q: "How can I increase my business valuation?",
    a: "Key strategies include reducing owner dependence, building a management team, increasing recurring revenue, diversifying your customer base, documenting processes and financials, and demonstrating consistent growth over 3+ years.",
  },
  {
    q: "When should I start planning to sell my business?",
    a: "Ideally, begin planning 12–24 months before your target exit. This gives you time to optimize financials, reduce owner dependence, strengthen your management team, and address any operational weaknesses that could compress valuation multiples.",
  },
  {
    q: "What is the biggest bottleneck that stops companies from scaling?",
    a: "The most common bottleneck is founder dependency — when the business relies too heavily on the owner for operations, sales, or decision-making. Building management layers, documenting processes, and delegating systematically are key to breaking through.",
  },
];

const roadmapFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: roadmapFaqItems.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

/* ─── Data ───────────────────────────────────────────────────────── */

const stages = [
  { name: "Startup", revenue: "$0–$1M", constraint: "Sales", icon: Target },
  { name: "Operator", revenue: "$1M–$3M", constraint: "Founder bandwidth", icon: Users },
  { name: "Systemized", revenue: "$3M–$10M", constraint: "Marketing", icon: TrendingUp },
  { name: "Scale", revenue: "$10M–$30M", constraint: "Leadership", icon: Building2 },
  { name: "Expansion", revenue: "$30M+", constraint: "Capital & leverage", icon: Landmark },
];

const detailedStages = [
  {
    id: "startup",
    title: "Stage 1 — Startup (Founder Hustle)",
    revenue: "$0–$1M",
    constraint: "Customer acquisition.",
    founderRole: "Salesperson and operator. Revenue depends almost entirely on founder effort.",
    skills: ["Sales & closing", "Offer creation", "Direct outreach", "Customer discovery"],
    hires: [
      { role: "Virtual Assistant", desc: "Scheduling, CRM updates, inbox management" },
      { role: "Contractors", desc: "Freelancers, subcontractors, delivery partners" },
    ],
    orgStructure: "Founder → Customers",
    systems: ["Basic CRM", "Sales scripts", "Simple invoicing", "Onboarding checklist"],
    metrics: ["Number of conversations", "Close rate", "Revenue per sale"],
    breakthrough: "Consistent revenue and proven demand.",
  },
  {
    id: "operator",
    title: "Stage 2 — Operator",
    revenue: "$1M–$3M",
    constraint: "Founder bandwidth — growth slows because the founder cannot handle every task.",
    founderRole: "Primary sales closer, hiring manager, and operations leader.",
    skills: ["Hiring", "Training", "Delegation", "Process documentation"],
    hires: [
      { role: "Fulfillment Staff", desc: "Technicians, consultants, service providers" },
      { role: "Operations / Admin", desc: "Scheduling, billing, client communication" },
      { role: "Junior Sales Rep", desc: "Prospecting, qualifying leads, setting appointments" },
    ],
    orgStructure: "Founder / CEO → Admin / Operations → Fulfillment Team → Sales Rep",
    systems: ["CRM", "SOP documentation", "Onboarding processes", "Service delivery checklists"],
    metrics: ["Leads & appointments", "Close rate", "Delivery time", "Customer satisfaction"],
    breakthrough: "Founder removed from fulfillment.",
  },
  {
    id: "systemized",
    title: "Stage 3 — Systemized",
    revenue: "$3M–$10M",
    constraint: "Predictable lead generation — operations work, but growth slows because demand fluctuates.",
    founderRole: "Operator → Strategist. Focus shifts to strategy, culture, and capital allocation.",
    skills: ["Marketing strategy", "Leadership", "Financial literacy (CAC & LTV)", "Culture building"],
    hires: [
      { role: "Marketing Manager", desc: "Advertising, funnels, analytics" },
      { role: "Sales Manager", desc: "Sales team, pipeline, training" },
      { role: "Operations Manager", desc: "Fulfillment team, efficiency, quality" },
      { role: "Customer Success Manager", desc: "Retention, referrals, upsells" },
    ],
    orgStructure: "CEO → Marketing Manager / Sales Manager / Operations Manager → Teams",
    systems: ["Marketing funnels", "CRM automation", "KPI dashboards", "Pipeline tracking"],
    metrics: ["Customer Acquisition Cost (CAC)", "Lifetime Value (LTV)", "LTV ≥ 3× CAC"],
    breakthrough: "Predictable marketing engine.",
  },
  {
    id: "scale",
    title: "Stage 4 — Scale",
    revenue: "$10M–$30M",
    constraint: "Leadership capacity — the founder cannot manage everything.",
    founderRole: "Visionary and strategist. Focus on long-term strategy, leadership development, and capital allocation.",
    skills: ["Organizational design", "Executive leadership", "Strategic planning", "Capital allocation"],
    hires: [
      { role: "COO", desc: "Runs operations" },
      { role: "VP of Sales", desc: "Leads revenue organization" },
      { role: "CMO", desc: "Leads marketing strategy" },
      { role: "CFO", desc: "Finance and forecasting" },
    ],
    orgStructure: "CEO → Executive Team (COO, CMO, VP Sales, CFO) → Department Managers → Teams",
    systems: ["Financial forecasting", "Executive dashboards", "Leadership meetings", "Performance management"],
    metrics: ["Revenue growth rate", "Executive performance", "Department P&L"],
    breakthrough: "Executives manage operations.",
  },
  {
    id: "expansion",
    title: "Stage 5 — Expansion",
    revenue: "$30M+",
    constraint: "Leverage — growth requires acquisitions, capital, and distribution.",
    founderRole: "Investor and architect.",
    skills: ["Acquisitions", "Capital strategy", "Partnerships", "Distribution"],
    hires: [
      { role: "Head of Corporate Development", desc: "Handles acquisitions" },
      { role: "M&A Team", desc: "Deal sourcing and integration" },
      { role: "Investor Relations", desc: "Communicates with investors" },
      { role: "Analytics Team", desc: "Data insights" },
    ],
    orgStructure: "CEO → Executive Leadership → Corporate Development → Departments",
    systems: ["Acquisition pipeline", "Financial modeling", "Integration playbooks"],
    metrics: ["Acquisition ROI", "Capital efficiency", "Enterprise value"],
    breakthrough: "Growth through acquisitions and expansion.",
  },
];

const founderEvolution = [
  { stage: "$0–$1M", identity: "Salesperson", skill: "Selling", responsibilities: "Lead gen, sales, delivery, support", decisions: "What to sell, who to target", time: "80% selling, 20% operations" },
  { stage: "$1M–$3M", identity: "Operator", skill: "Hiring", responsibilities: "Building team, documenting processes", decisions: "Who to hire, what to delegate", time: "50% sales, 30% management, 20% strategy" },
  { stage: "$3M–$10M", identity: "Leader", skill: "Marketing", responsibilities: "Setting vision, managing managers", decisions: "Marketing strategy, culture, capital", time: "20% sales, 40% leadership, 40% strategy" },
  { stage: "$10M–$30M", identity: "Executive", skill: "Leadership", responsibilities: "Leading executives, strategic planning", decisions: "Org design, capital allocation", time: "10% operations, 90% strategy" },
  { stage: "$30M+", identity: "Investor", skill: "Capital allocation", responsibilities: "M&A, partnerships, capital strategy", decisions: "Acquisitions, exits, expansion", time: "100% strategic" },
];

const bottlenecks = [
  { title: "Founder Dependency", desc: "The company relies too heavily on the founder for sales, delivery, or decisions. Build management layers and delegate." },
  { title: "Weak Offer", desc: "Customers aren't excited to buy. Improve your value proposition with clear outcomes, timelines, and reduced risk." },
  { title: "Inconsistent Lead Generation", desc: "Sales fluctuate month to month. Install marketing systems and build repeatable lead generation funnels." },
  { title: "Sales Process Breakdown", desc: "Sales team cannot consistently close deals. Standardize scripts, training, and pipeline management." },
  { title: "Operational Chaos", desc: "Poor delivery systems lead to customer issues and wasted resources. Document SOPs and hire operations management." },
  { title: "Leadership Gaps", desc: "Managers aren't capable of running their departments. Hire experienced leaders who can own outcomes." },
  { title: "Poor Capital Allocation", desc: "Money is invested poorly across the business. Implement strategic financial planning and forecasting." },
];

const orgDepartments = [
  { dept: "Sales", roles: ["Sales Manager", "4 Closers", "2 Appointment Setters"] },
  { dept: "Marketing", roles: ["Marketing Director", "Media Buyer", "Content Specialist"] },
  { dept: "Operations", roles: ["Operations Manager", "Delivery Team", "Customer Success"] },
  { dept: "Finance", roles: ["Controller", "Admin Assistant"] },
];

/* ─── Component ──────────────────────────────────────────────────── */

const BusinessGrowthRoadmap = () => {
  const calcRef = useRef<HTMLDivElement>(null);
  const sellabilityRef = useRef<HTMLDivElement>(null);
  const [openStages, setOpenStages] = useState<Record<string, boolean>>({});
  const [openDepts, setOpenDepts] = useState<Record<string, boolean>>({});

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleStage = (id: string) => setOpenStages((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleDept = (d: string) => setOpenDepts((prev) => ({ ...prev, [d]: !prev[d] }));

  return (
    <Layout>
      <SEOHead
        title="Business Growth Roadmap — Scale from Startup to $100M+"
        description="A clear framework showing how businesses scale from startup to $100M+. Identify your growth stage, calculate your sellability score, and estimate your business value."
        path="/business-growth-roadmap"
      />

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <p className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Business Growth Framework</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">The Business Growth Roadmap</h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Understand exactly what stage your business is in and what it takes to scale to the next level.
          </p>

          {/* Visual timeline */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0 mb-12">
            {stages.map((s, i) => (
              <div key={s.name} className="flex items-center">
                <a href={`#${s.name.toLowerCase()}`} className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-primary/40 flex items-center justify-center bg-secondary group-hover:bg-primary/10 transition-colors">
                    <s.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className="text-xs font-sans font-semibold tracking-wider uppercase text-foreground mt-2">{s.name}</span>
                  <span className="text-[10px] text-muted-foreground">{s.revenue}</span>
                </a>
                {i < stages.length - 1 && <div className="hidden md:block w-8 lg:w-16 h-px bg-primary/30 mx-2" />}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => scrollTo(calcRef)}>
              Identify Your Growth Stage <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => scrollTo(sellabilityRef)}>
              Calculate Your Sellability Score
            </Button>
          </div>
        </div>
      </section>

      {/* ── Growth Stages Overview Table ──────────────────── */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">The Five Growth Stages</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Every business scales through predictable phases. Each phase has a primary constraint, required skills, and different organizational structure.</p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-xs font-sans font-semibold tracking-widest uppercase text-primary">Stage</th>
                  <th className="text-left py-4 px-4 text-xs font-sans font-semibold tracking-widest uppercase text-primary">Revenue</th>
                  <th className="text-left py-4 px-4 text-xs font-sans font-semibold tracking-widest uppercase text-primary">Primary Constraint</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((s) => (
                  <tr key={s.name} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                    <td className="py-4 px-4">
                      <a href={`#${s.name.toLowerCase()}`} className="text-foreground hover:text-primary transition-colors font-sans font-semibold">{s.name}</a>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground font-sans">{s.revenue}</td>
                    <td className="py-4 px-4 text-muted-foreground font-sans">{s.constraint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Detailed Stage Sections ──────────────────────── */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-12">Detailed Stage Breakdown</h2>

          {detailedStages.map((stage) => (
            <div key={stage.id} id={stage.id}>
              <Collapsible open={openStages[stage.id] || false} onOpenChange={() => toggleStage(stage.id)}>
                <CollapsibleTrigger className="w-full">
                  <Card className="bg-card border-border hover:border-primary/30 transition-colors cursor-pointer">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="text-left">
                        <h3 className="font-serif text-xl md:text-2xl text-foreground">{stage.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">Revenue: {stage.revenue} · {stage.constraint.split("—")[0]}</p>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openStages[stage.id] ? "rotate-180" : ""}`} />
                    </CardContent>
                  </Card>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="bg-card border border-t-0 border-border p-6 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-2">Primary Constraint</h4>
                        <p className="text-muted-foreground text-sm">{stage.constraint}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-2">Founder Role</h4>
                        <p className="text-muted-foreground text-sm">{stage.founderRole}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-3">Skills Required</h4>
                      <div className="flex flex-wrap gap-2">
                        {stage.skills.map((s) => (
                          <span key={s} className="bg-primary/10 text-primary px-3 py-1 rounded text-xs font-sans font-semibold">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-3">Recommended Hires</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {stage.hires.map((h) => (
                          <div key={h.role} className="bg-secondary p-3 rounded border border-border">
                            <p className="text-foreground font-sans font-semibold text-sm">{h.role}</p>
                            <p className="text-muted-foreground text-xs mt-1">{h.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-2">Organizational Structure</h4>
                        <p className="text-muted-foreground text-sm font-mono">{stage.orgStructure}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-2">Systems Needed</h4>
                        <ul className="space-y-1">
                          {stage.systems.map((s) => (
                            <li key={s} className="text-muted-foreground text-sm flex items-center gap-2">
                              <span className="w-1 h-1 bg-primary rounded-full" /> {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="border-t border-border pt-4">
                      <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-2">Breakthrough to Next Level</h4>
                      <p className="text-foreground font-sans">{stage.breakthrough}</p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </section>

      {/* ── Founder Skill Evolution ──────────────────────── */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">Founder Skill Evolution</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">How the founder must evolve through each growth stage.</p>

          {/* Visual ladder */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
            {founderEvolution.map((f, i) => (
              <div key={f.identity} className="flex items-center">
                <div className="text-center">
                  <span className="block text-primary font-serif text-lg">{f.identity}</span>
                  <span className="block text-[10px] text-muted-foreground">{f.stage}</span>
                </div>
                {i < founderEvolution.length - 1 && <ArrowRight className="w-4 h-4 text-primary/40 mx-2" />}
              </div>
            ))}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  {["Revenue", "Identity", "Core Skill", "Key Decisions", "Time Allocation"].map((h) => (
                    <th key={h} className="text-left py-3 px-4 text-xs font-sans font-semibold tracking-widest uppercase text-primary">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {founderEvolution.map((f) => (
                  <tr key={f.identity} className="border-b border-border/50">
                    <td className="py-3 px-4 text-foreground font-sans text-sm">{f.stage}</td>
                    <td className="py-3 px-4 text-primary font-sans font-semibold text-sm">{f.identity}</td>
                    <td className="py-3 px-4 text-muted-foreground font-sans text-sm">{f.skill}</td>
                    <td className="py-3 px-4 text-muted-foreground font-sans text-sm">{f.decisions}</td>
                    <td className="py-3 px-4 text-muted-foreground font-sans text-sm">{f.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Revenue Model ────────────────────────────────── */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">Revenue Math to Reach $10M</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Understanding the numbers behind scaling.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Revenue Formula</h4>
                <p className="text-foreground font-mono text-lg mb-4">Revenue = Customers × Avg Revenue Per Customer</p>
                <div className="bg-secondary p-4 rounded border border-border">
                  <p className="text-primary font-sans font-semibold">Example</p>
                  <p className="text-muted-foreground mt-1">2,000 customers × $5,000 = <span className="text-foreground font-semibold">$10,000,000</span></p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Pipeline Required</h4>
                <div className="space-y-3">
                  {[
                    { label: "Leads Required", value: "10,000", note: "40% → appointments" },
                    { label: "Appointments", value: "4,000", note: "25% → sales" },
                    { label: "Customers", value: "1,000", note: "at $10K each" },
                    { label: "Revenue", value: "$10M", note: "" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center border-b border-border/50 pb-2 last:border-0">
                      <div>
                        <span className="text-foreground font-sans text-sm">{item.label}</span>
                        {item.note && <span className="text-muted-foreground text-xs ml-2">({item.note})</span>}
                      </div>
                      <span className="text-primary font-sans font-semibold">{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Sales Team Capacity</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">Typical closer: <span className="text-foreground">20 deals/mo = 240/yr</span></p>
                  <p className="text-muted-foreground">Revenue per closer: <span className="text-foreground">240 × $10K = $2.4M</span></p>
                  <p className="text-muted-foreground">Closers needed for $10M: <span className="text-primary font-semibold">≈ 4 closers</span></p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Example P&L at $10M</h4>
                <div className="space-y-2 text-sm">
                  {[
                    { label: "Revenue", value: "$10M" },
                    { label: "Marketing", value: "$3M" },
                    { label: "Payroll", value: "$4.2M" },
                    { label: "Other Expenses", value: "$800K" },
                    { label: "Profit (20%)", value: "$2M", highlight: true },
                  ].map((item) => (
                    <div key={item.label} className={`flex justify-between ${item.highlight ? "border-t border-border pt-2" : ""}`}>
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className={item.highlight ? "text-primary font-semibold" : "text-foreground"}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── $10M Org Structure ────────────────────────────── */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">$10M Company Organizational Structure</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Click each department to see typical roles.</p>

          <div className="max-w-2xl mx-auto">
            {/* CEO */}
            <div className="text-center mb-6">
              <div className="inline-block bg-primary/10 border border-primary/30 px-6 py-3 rounded">
                <span className="text-primary font-sans font-semibold text-sm tracking-wider uppercase">CEO</span>
              </div>
              <div className="w-px h-6 bg-primary/30 mx-auto" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {orgDepartments.map((dept) => (
                <Collapsible key={dept.dept} open={openDepts[dept.dept] || false} onOpenChange={() => toggleDept(dept.dept)}>
                  <CollapsibleTrigger className="w-full">
                    <div className="bg-card border border-border hover:border-primary/30 p-4 rounded cursor-pointer transition-colors text-center">
                      <span className="text-foreground font-sans font-semibold text-sm">{dept.dept}</span>
                      <ChevronDown className={`w-4 h-4 text-primary mx-auto mt-1 transition-transform ${openDepts[dept.dept] ? "rotate-180" : ""}`} />
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="bg-secondary border border-t-0 border-border rounded-b p-3 space-y-1">
                      {dept.roles.map((r) => (
                        <p key={r} className="text-muted-foreground text-xs font-sans">{r}</p>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottlenecks ──────────────────────────────────── */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">7 Bottlenecks That Stop Companies From Scaling</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Identify what's holding your business back.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {bottlenecks.map((b, i) => (
              <Card key={b.title} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-sans font-semibold text-sm mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-primary" />
                        <h4 className="text-foreground font-sans font-semibold text-sm">{b.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">{b.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-secondary border border-border rounded p-6 max-w-lg">
              <p className="text-foreground font-serif text-lg mb-2">Final Strategic Principle</p>
              <p className="text-muted-foreground text-sm">Businesses scale when the founder evolves: <span className="text-primary font-semibold">Salesperson → Operator → Leader → Executive → Investor</span>. Companies stall when founders remain stuck in earlier roles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Growth Stage Calculator ──────────────────────── */}
      <section ref={calcRef} className="py-20 border-t border-border" id="growth-calculator">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">Growth Stage Calculator</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Answer a few questions to identify your current growth stage and what's holding you back.</p>
          <GrowthStageCalculator onComplete={() => window.location.href = "/contact"} />
        </div>
      </section>

      {/* ── Sellability Score ────────────────────────────── */}
      <section ref={sellabilityRef} className="py-20 border-t border-border bg-secondary/30" id="sellability-score">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">Sellability Score</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Estimate how ready your business is to sell and what improvements could increase your valuation.</p>
          <SellabilityScoreTool onComplete={() => window.location.href = "/contact"} />
        </div>
      </section>

      {/* ── Valuation Estimator ──────────────────────────── */}
      <section className="py-20 border-t border-border" id="valuation-estimator">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-4">Business Valuation Estimator</h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-4">Estimate what your business might be worth in today's market.</p>
          <p className="text-muted-foreground text-xs text-center italic mb-12">This tool provides a simplified estimate based on common market valuation ranges. Actual valuations depend on financial performance, industry, growth trends, and deal structure.</p>
          <ValuationEstimator />
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────── */}
      <section className="py-20 border-t border-border bg-secondary/30">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Not Sure How to Scale or Prepare for an Exit?</h2>
          <p className="text-muted-foreground text-lg mb-10">
            We help business owners identify growth constraints, scale operations, and maximize their company's value before selling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/valuation-calculator">Get a Business Valuation</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessGrowthRoadmap;
