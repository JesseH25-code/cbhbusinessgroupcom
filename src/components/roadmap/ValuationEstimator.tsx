import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const steps = [
  {
    label: "Industry",
    question: "What industry is your business in?",
    options: ["Home Services", "Professional Services", "Construction", "Manufacturing", "Retail", "E-commerce", "Technology", "Healthcare", "Other"],
  },
  {
    label: "Revenue",
    question: "What is your annual revenue?",
    options: ["Under $1M", "$1M–$3M", "$3M–$10M", "$10M–$25M", "$25M+"],
  },
  {
    label: "Profit",
    question: "What is your annual net profit or EBITDA?",
    options: ["Under $100K", "$100K–$500K", "$500K–$1M", "$1M–$3M", "$3M+"],
  },
  {
    label: "Owner Dependence",
    question: "How dependent is the business on the owner?",
    options: ["Fully owner-operated", "Owner involved daily", "Management team in place"],
  },
  {
    label: "Recurring Revenue",
    question: "What percentage of revenue is recurring?",
    options: ["None", "Under 25%", "25–50%", "50–75%", "Over 75%"],
  },
];

const profitMidpoints: Record<string, number> = {
  "Under $100K": 75000,
  "$100K–$500K": 300000,
  "$500K–$1M": 750000,
  "$1M–$3M": 2000000,
  "$3M+": 4000000,
};

const getMultiple = (ownerDep: string, recurring: string): [number, number] => {
  let baseLow = 3;
  let baseHigh = 5;

  if (ownerDep === "Fully owner-operated") { baseLow = 2; baseHigh = 3; }
  else if (ownerDep === "Owner involved daily") { baseLow = 3; baseHigh = 5; }
  else { baseLow = 5; baseHigh = 7; }

  // Recurring revenue bonus
  if (recurring === "50–75%") { baseLow += 0.5; baseHigh += 1; }
  else if (recurring === "Over 75%") { baseLow += 1; baseHigh += 2; }

  return [baseLow, baseHigh];
};

const formatCurrency = (n: number) => {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
};

const ValuationEstimator = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [leadData, setLeadData] = useState({ name: "", email: "", phone: "", company: "" });
  const [showResult, setShowResult] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSelect = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setShowLeadCapture(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleSubmitLead = async () => {
    if (!leadData.name || !leadData.email) {
      toast({ title: "Please provide your name and email", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      await supabase.from("contact_submissions").insert({
        company: leadData.company || "N/A",
        email: leadData.email,
        revenue: answers[1] || "N/A",
        ebitda: answers[2] || "N/A",
        timeline: "Valuation Estimator Lead",
        message: `Valuation Estimator: Industry: ${answers[0]}, Revenue: ${answers[1]}, Profit: ${answers[2]}, Owner Dep: ${answers[3]}, Recurring: ${answers[4]}, Name: ${leadData.name}, Phone: ${leadData.phone || "N/A"}`,
      });
      setShowResult(true);
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    }
    setSubmitting(false);
  };

  if (showResult) {
    const profit = profitMidpoints[answers[2]] || 300000;
    const [multLow, multHigh] = getMultiple(answers[3], answers[4]);
    const valLow = profit * multLow;
    const valHigh = profit * multHigh;

    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <DollarSign className="w-5 h-5" />
            <span className="font-sans text-sm font-semibold tracking-wider uppercase">Estimate Complete</span>
          </div>
          <h3 className="font-serif text-3xl text-foreground mb-2">Estimated Business Value</h3>
          <p className="text-primary font-serif text-3xl mt-4">{formatCurrency(valLow)} – {formatCurrency(valHigh)}</p>
          <p className="text-muted-foreground text-sm mt-2">Based on {multLow}–{multHigh}× EBITDA multiple</p>
        </div>

        <Card className="bg-secondary border-border">
          <CardContent className="p-6 space-y-3">
            <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-3">Key Insights</h4>
            <p className="text-muted-foreground text-sm">• Businesses with recurring revenue typically sell for higher multiples.</p>
            <p className="text-muted-foreground text-sm">• Companies with management teams attract more buyers and command premium valuations.</p>
            <p className="text-muted-foreground text-sm">• Documented financials increase buyer confidence and reduce deal friction.</p>
          </CardContent>
        </Card>

        <p className="text-muted-foreground text-xs text-center italic">This tool provides a simplified estimate based on common market valuation ranges. Actual valuations depend on financial performance, industry, growth trends, and deal structure.</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="hero" size="lg" asChild>
            <a href="/valuation-calculator">Get a Professional Valuation</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="/contact">Schedule a Consultation</a>
          </Button>
        </div>
      </div>
    );
  }

  if (showLeadCapture) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center mb-4">
          <h3 className="font-serif text-2xl text-foreground mb-2">Almost There</h3>
          <p className="text-muted-foreground">Enter your details to see your estimated business value.</p>
        </div>
        <div className="space-y-4 max-w-md mx-auto">
          {[
            { label: "Name", key: "name" as const, required: true },
            { label: "Email", key: "email" as const, required: true },
            { label: "Phone", key: "phone" as const, required: false },
            { label: "Company Name", key: "company" as const, required: false },
          ].map((field) => (
            <div key={field.key}>
              <label className="text-xs font-sans font-semibold tracking-widest uppercase text-muted-foreground mb-1 block">
                {field.label} {field.required && <span className="text-primary">*</span>}
              </label>
              <input
                type={field.key === "email" ? "email" : "text"}
                value={leadData[field.key]}
                onChange={(e) => setLeadData({ ...leadData, [field.key]: e.target.value })}
                className="w-full bg-card border border-border rounded px-4 py-3 text-foreground font-sans text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          ))}
          <Button variant="hero" size="lg" className="w-full" onClick={handleSubmitLead} disabled={submitting}>
            {submitting ? "Calculating..." : "See My Estimated Value"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-2">
        {steps.map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-border"}`} />
        ))}
      </div>
      <p className="text-muted-foreground text-sm font-sans">Step {step + 1} of {steps.length} — {steps[step].label}</p>

      <h3 className="font-serif text-2xl text-foreground">{steps[step].question}</h3>

      <div className="space-y-3">
        {steps[step].options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            className={`w-full text-left p-4 border rounded transition-all font-sans text-sm ${
              answers[step] === opt
                ? "border-primary bg-primary/10 text-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="ghost" onClick={handleBack} disabled={step === 0}>
          <ArrowLeft className="w-4 h-4 mr-1" /> Back
        </Button>
        <Button variant="hero" onClick={handleNext} disabled={!answers[step]}>
          Next <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default ValuationEstimator;
