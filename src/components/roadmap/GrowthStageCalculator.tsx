import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const questions = [
  {
    question: "What is your annual revenue?",
    options: [
      { label: "Under $1M", value: "startup" },
      { label: "$1M–$3M", value: "operator" },
      { label: "$3M–$10M", value: "systemized" },
      { label: "$10M–$30M", value: "scale" },
      { label: "$30M+", value: "expansion" },
    ],
  },
  {
    question: "How many employees do you have?",
    options: [
      { label: "1–5 (just me and contractors)", value: "startup" },
      { label: "5–15", value: "operator" },
      { label: "15–50", value: "systemized" },
      { label: "50–150", value: "scale" },
      { label: "150+", value: "expansion" },
    ],
  },
  {
    question: "What is your biggest constraint right now?",
    options: [
      { label: "Getting enough customers", value: "startup" },
      { label: "I can't do everything myself anymore", value: "operator" },
      { label: "Inconsistent lead generation", value: "systemized" },
      { label: "Finding and retaining strong leaders", value: "scale" },
      { label: "Capital deployment and expansion", value: "expansion" },
    ],
  },
  {
    question: "How involved are you in daily operations?",
    options: [
      { label: "I do almost everything", value: "startup" },
      { label: "I handle sales and oversee operations", value: "operator" },
      { label: "I focus on strategy but still involved", value: "systemized" },
      { label: "My executive team runs the day-to-day", value: "scale" },
      { label: "I focus on acquisitions and capital", value: "expansion" },
    ],
  },
  {
    question: "Do you have a dedicated marketing system?",
    options: [
      { label: "No — mostly word of mouth", value: "startup" },
      { label: "Some basic marketing, nothing consistent", value: "operator" },
      { label: "We have a marketing manager/team", value: "systemized" },
      { label: "Full marketing department with funnels and analytics", value: "scale" },
      { label: "Multiple channels, brand portfolio", value: "expansion" },
    ],
  },
  {
    question: "Do you have department leaders who manage their own teams?",
    options: [
      { label: "No — I manage everyone", value: "startup" },
      { label: "I have a few key people but no formal managers", value: "operator" },
      { label: "Yes — managers for operations, sales, or marketing", value: "systemized" },
      { label: "Full executive team (COO, VP Sales, CMO, CFO)", value: "scale" },
      { label: "Executive leadership plus corporate development", value: "expansion" },
    ],
  },
  {
    question: "How documented are your processes?",
    options: [
      { label: "Nothing is documented", value: "startup" },
      { label: "Some processes written down, most in my head", value: "operator" },
      { label: "SOPs for most key functions", value: "systemized" },
      { label: "Comprehensive playbooks and dashboards", value: "scale" },
      { label: "Fully systemized with integration playbooks", value: "expansion" },
    ],
  },
];

const stageDetails: Record<string, { name: string; revenue: string; constraint: string; nextSteps: string[] }> = {
  startup: {
    name: "Startup (Founder Hustle)",
    revenue: "$0–$1M",
    constraint: "Customer acquisition — you need to prove consistent demand.",
    nextSteps: [
      "Build a repeatable sales process with scripts and a CRM",
      "Focus on direct outreach: calls, networking, and referrals",
      "Validate your offer — find out why customers buy and why they hesitate",
      "Keep expenses low — use contractors and virtual assistants",
    ],
  },
  operator: {
    name: "Operator",
    revenue: "$1M–$3M",
    constraint: "Founder bandwidth — you're the bottleneck.",
    nextSteps: [
      "Hire fulfillment staff to remove yourself from service delivery",
      "Document your key processes into standard operating procedures",
      "Bring on an operations/admin coordinator",
      "Start training a junior sales rep to handle prospecting",
    ],
  },
  systemized: {
    name: "Systemized",
    revenue: "$3M–$10M",
    constraint: "Predictable lead generation — growth stalls without marketing systems.",
    nextSteps: [
      "Hire a marketing manager and build repeatable lead generation funnels",
      "Bring on a sales manager to lead and train your sales team",
      "Install KPI dashboards and CRM automation",
      "Shift your role from operator to strategist and culture builder",
    ],
  },
  scale: {
    name: "Scale",
    revenue: "$10M–$30M",
    constraint: "Leadership capacity — you need executives who can run departments.",
    nextSteps: [
      "Hire a COO, VP of Sales, CMO, or CFO to lead key functions",
      "Implement financial forecasting and executive dashboards",
      "Establish a leadership meeting cadence with your executive team",
      "Focus on strategic planning and capital allocation",
    ],
  },
  expansion: {
    name: "Expansion",
    revenue: "$30M+",
    constraint: "Leverage — growth now requires acquisitions, partnerships, and capital.",
    nextSteps: [
      "Build a corporate development function for acquisitions",
      "Hire investor relations and analytics team members",
      "Develop acquisition pipeline and integration playbooks",
      "Focus on capital strategy, distribution, and partnership opportunities",
    ],
  },
};

interface Props {
  onComplete?: () => void;
}

const GrowthStageCalculator = ({ onComplete }: Props) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Calculate result
      const counts: Record<string, number> = {};
      answers.forEach((a) => {
        counts[a] = (counts[a] || 0) + 1;
      });
      const stage = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(stage);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  if (result) {
    const details = stageDetails[result];
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <CheckCircle className="w-5 h-5" />
            <span className="font-sans text-sm font-semibold tracking-wider uppercase">Assessment Complete</span>
          </div>
          <h3 className="font-serif text-3xl text-foreground mb-2">Your Growth Stage</h3>
          <p className="text-primary font-serif text-2xl">{details.name}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-secondary border-border">
            <CardContent className="p-6">
              <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-3">Revenue Range</h4>
              <p className="text-foreground text-lg">{details.revenue}</p>
            </CardContent>
          </Card>
          <Card className="bg-secondary border-border">
            <CardContent className="p-6">
              <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-3">Primary Constraint</h4>
              <p className="text-foreground text-lg">{details.constraint}</p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-secondary border-border">
          <CardContent className="p-6">
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Recommended Next Steps</h4>
            <ul className="space-y-3">
              {details.nextSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-0.5 font-sans font-semibold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-muted-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="hero" size="lg" onClick={onComplete}>
            Schedule a Consultation
          </Button>
          <Button variant="heroOutline" size="lg" onClick={() => { setResult(null); setCurrentQ(0); setAnswers([]); }}>
            Retake Assessment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="flex items-center gap-2 mb-2">
        {questions.map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= currentQ ? "bg-primary" : "bg-border"}`} />
        ))}
      </div>
      <p className="text-muted-foreground text-sm font-sans">Question {currentQ + 1} of {questions.length}</p>

      <h3 className="font-serif text-2xl text-foreground">{questions[currentQ].question}</h3>

      <div className="space-y-3">
        {questions[currentQ].options.map((opt) => (
          <button
            key={opt.value + opt.label}
            onClick={() => handleSelect(opt.value)}
            className={`w-full text-left p-4 border rounded transition-all font-sans text-sm ${
              answers[currentQ] === opt.value
                ? "border-primary bg-primary/10 text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="ghost" onClick={handleBack} disabled={currentQ === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>
        <Button variant="hero" onClick={handleNext} disabled={!answers[currentQ]}>
          {currentQ === questions.length - 1 ? "See Results" : "Next"} <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default GrowthStageCalculator;
