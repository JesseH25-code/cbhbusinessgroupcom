import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const questions = [
  {
    question: "What is your annual revenue?",
    options: [
      { label: "Under $1M", score: 5 },
      { label: "$1M–$3M", score: 10 },
      { label: "$3M–$10M", score: 15 },
      { label: "$10M–$25M", score: 18 },
      { label: "$25M+", score: 20 },
    ],
  },
  {
    question: "What are your profit margins (EBITDA)?",
    options: [
      { label: "Under 5%", score: 3 },
      { label: "5–10%", score: 7 },
      { label: "10–20%", score: 12 },
      { label: "20%+", score: 15 },
    ],
  },
  {
    question: "How dependent is the business on the owner?",
    options: [
      { label: "Completely dependent — I do everything", score: 2 },
      { label: "Heavily involved in daily operations", score: 5 },
      { label: "Involved but have key managers", score: 10 },
      { label: "Management team runs the business", score: 15 },
    ],
  },
  {
    question: "What is your customer concentration?",
    options: [
      { label: "Top customer is over 30% of revenue", score: 3 },
      { label: "Top customer is 15–30% of revenue", score: 7 },
      { label: "Top customer is under 15% of revenue", score: 10 },
      { label: "Diversified — no customer over 5%", score: 15 },
    ],
  },
  {
    question: "What percentage of revenue is recurring or contractual?",
    options: [
      { label: "None — all project-based", score: 2 },
      { label: "Under 25%", score: 5 },
      { label: "25–50%", score: 10 },
      { label: "50–75%", score: 13 },
      { label: "Over 75%", score: 15 },
    ],
  },
  {
    question: "How well documented are your financials?",
    options: [
      { label: "Minimal records", score: 2 },
      { label: "Basic bookkeeping, no audited statements", score: 5 },
      { label: "CPA-prepared financials", score: 8 },
      { label: "Reviewed or audited financials with clean records", score: 10 },
    ],
  },
  {
    question: "How strong is your management team?",
    options: [
      { label: "No management layer — just the owner", score: 2 },
      { label: "A few key employees but no formal managers", score: 5 },
      { label: "Department managers in place", score: 8 },
      { label: "Full executive team that could operate without owner", score: 10 },
    ],
  },
];

const getScoreRange = (score: number) => {
  if (score >= 80) return { label: "Highly Attractive to Buyers", color: "text-green-400", desc: "Your business has strong fundamentals that buyers look for. You're well-positioned for a premium valuation." };
  if (score >= 60) return { label: "Sellable With Some Improvements", color: "text-primary", desc: "Your business has solid foundations but addressing a few areas could significantly increase your valuation and attract more qualified buyers." };
  if (score >= 40) return { label: "Needs Operational Improvements", color: "text-yellow-400", desc: "There are meaningful areas to strengthen before going to market. Addressing these could dramatically increase your sale price." };
  return { label: "Founder-Dependent Business", color: "text-red-400", desc: "Your business is heavily reliant on you. Building systems, management layers, and documented processes is critical before pursuing a sale." };
};

const improvements = [
  { threshold: 15, area: "Revenue Scale", tip: "Growing revenue and demonstrating consistent growth trends will significantly increase buyer interest and valuation multiples." },
  { threshold: 12, area: "Profitability", tip: "Improving margins through pricing strategy, cost reduction, or operational efficiency will directly increase your business value." },
  { threshold: 10, area: "Owner Independence", tip: "Building a management team that can operate without you is one of the most impactful things you can do for business value." },
  { threshold: 10, area: "Customer Diversification", tip: "Reducing concentration risk by diversifying your customer base makes your business more attractive and less risky to buyers." },
  { threshold: 10, area: "Recurring Revenue", tip: "Converting project-based revenue to recurring contracts or subscriptions can increase your valuation multiple by 1–3×." },
  { threshold: 8, area: "Financial Documentation", tip: "Clean, well-organized financials build buyer confidence and reduce friction during due diligence." },
  { threshold: 8, area: "Management Strength", tip: "Investing in experienced leaders who can run departments independently signals a scalable, transferable business." },
];

interface Props {
  onComplete?: () => void;
}

const SellabilityScoreTool = ({ onComplete }: Props) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [result, setResult] = useState<number | null>(null);

  const handleSelect = (score: number) => {
    const newScores = [...scores];
    newScores[currentQ] = score;
    setScores(newScores);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      const total = scores.reduce((sum, s) => sum! + (s || 0), 0) as number;
      setResult(total);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  if (result !== null) {
    const range = getScoreRange(result);
    const weakAreas = scores.map((s, i) => ({ ...improvements[i], score: s || 0 })).filter((item) => item.score < item.threshold);

    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <CheckCircle className="w-5 h-5" />
            <span className="font-sans text-sm font-semibold tracking-wider uppercase">Score Calculated</span>
          </div>
          <h3 className="font-serif text-3xl text-foreground mb-2">Your Sellability Score</h3>
          <div className="relative w-40 h-40 mx-auto my-6">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
              <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--primary))" strokeWidth="6" strokeDasharray={`${(result / 100) * 264} 264`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-4xl text-foreground">{result}</span>
            </div>
          </div>
          <p className={`font-serif text-xl ${range.color}`}>{range.label}</p>
          <p className="text-muted-foreground mt-2 max-w-lg mx-auto">{range.desc}</p>
        </div>

        {weakAreas.length > 0 && (
          <Card className="bg-secondary border-border">
            <CardContent className="p-6">
              <h4 className="text-xs font-sans font-semibold tracking-widest uppercase text-primary mb-4">Areas to Improve</h4>
              <div className="space-y-4">
                {weakAreas.map((item, i) => (
                  <div key={i} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <p className="text-foreground font-sans font-semibold mb-1">{item.area}</p>
                    <p className="text-muted-foreground text-sm">{item.tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="hero" size="lg" onClick={onComplete}>
            Schedule a Consultation
          </Button>
          <Button variant="heroOutline" size="lg" onClick={() => { setResult(null); setCurrentQ(0); setScores(new Array(questions.length).fill(null)); }}>
            Retake Assessment
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
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
            key={opt.label}
            onClick={() => handleSelect(opt.score)}
            className={`w-full text-left p-4 border rounded transition-all font-sans text-sm ${
              scores[currentQ] === opt.score
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
        <Button variant="hero" onClick={handleNext} disabled={scores[currentQ] === null}>
          {currentQ === questions.length - 1 ? "See Results" : "Next"} <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default SellabilityScoreTool;
