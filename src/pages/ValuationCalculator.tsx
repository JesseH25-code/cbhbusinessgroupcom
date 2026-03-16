import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, ArrowLeft, Calculator, Shield, AlertTriangle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import ValuationPackages from "@/components/ValuationPackages";

const sectors = [
  {
    label: "Construction & Engineering",
    subcategories: ["General Contracting", "Specialty Trade", "Civil & Infrastructure", "Mechanical / Electrical"],
    multiplierRange: [3.5, 6.0],
  },
  {
    label: "Healthcare Services",
    subcategories: ["Home Health", "Behavioral Health", "Dental Practices", "Physician Practices", "Medical Devices"],
    multiplierRange: [5.0, 9.0],
  },
  {
    label: "Technology & Software",
    subcategories: ["SaaS / Cloud", "IT Services / MSP", "Custom Development", "Cybersecurity"],
    multiplierRange: [5.0, 12.0],
  },
  {
    label: "Manufacturing & Distribution",
    subcategories: ["Contract Manufacturing", "Food & Beverage", "Industrial Products", "Wholesale Distribution"],
    multiplierRange: [3.5, 6.5],
  },
  {
    label: "Professional Services",
    subcategories: ["Accounting / CPA", "Engineering Firms", "Consulting", "Staffing & Recruiting"],
    multiplierRange: [3.0, 6.0],
  },
  {
    label: "HVAC & Mechanical",
    subcategories: ["Residential HVAC", "Commercial HVAC", "Plumbing", "Fire Protection"],
    multiplierRange: [4.0, 7.0],
  },
  {
    label: "Restaurants & Food Service",
    subcategories: ["Quick Service / Fast Casual", "Full Service", "Catering", "Franchise Operations"],
    multiplierRange: [2.5, 4.5],
  },
  {
    label: "Landscaping & Outdoor Services",
    subcategories: ["Commercial Landscaping", "Residential Services", "Tree Services", "Irrigation"],
    multiplierRange: [3.0, 5.0],
  },
  {
    label: "Other",
    subcategories: ["Other"],
    multiplierRange: [3.0, 6.0],
  },
];

const revenueOptions = ["Under $1M", "$1M – $3M", "$3M – $5M", "$5M – $10M", "$10M – $20M", "$20M – $50M", "$50M+"];
const ebitdaOptions = ["Under $250K", "$250K – $500K", "$500K – $1M", "$1M – $2M", "$2M – $5M", "$5M – $10M", "$10M+"];
const yearsOptions = ["Less than 3 years", "3 – 5 years", "5 – 10 years", "10 – 20 years", "20+ years"];
const employeeOptions = ["1 – 5", "6 – 15", "16 – 50", "51 – 100", "100+"];
const ownerDependencyOptions = ["Very High — Business depends on me", "Moderate — Key managers in place", "Low — Fully managed by leadership team"];
const growthOptions = ["Declining", "Flat / Stable", "Moderate Growth (5–15%)", "Strong Growth (15%+)"];
const concentrationOptions = ["High — Top client is 25%+ of revenue", "Moderate — Top 3 clients are 30–50%", "Low — Well diversified"];
const recurringRevenueOptions = ["No recurring revenue", "Some repeat business (20–40%)", "Moderate recurring (40–70%)", "High recurring / contractual (70%+)"];

function parseEbitdaMidpoint(ebitda: string): number {
  const map: Record<string, number> = {
    "Under $250K": 150000,
    "$250K – $500K": 375000,
    "$500K – $1M": 750000,
    "$1M – $2M": 1500000,
    "$2M – $5M": 3500000,
    "$5M – $10M": 7500000,
    "$10M+": 12000000,
  };
  return map[ebitda] || 1000000;
}

function computeMultiplierAdjustment(data: {
  years: string;
  employees: string;
  ownerDependency: string;
  growth: string;
  concentration: string;
  recurringRevenue: string;
}): number {
  let adj = 0;

  // Years in business
  if (data.years === "20+ years") adj += 0.5;
  else if (data.years === "10 – 20 years") adj += 0.3;
  else if (data.years === "5 – 10 years") adj += 0.1;
  else if (data.years === "Less than 3 years") adj -= 0.5;

  // Owner dependency
  if (data.ownerDependency.startsWith("Low")) adj += 0.5;
  else if (data.ownerDependency.startsWith("Very")) adj -= 0.5;

  // Growth
  if (data.growth.startsWith("Strong")) adj += 0.5;
  else if (data.growth.startsWith("Moderate Growth")) adj += 0.2;
  else if (data.growth === "Declining") adj -= 0.5;

  // Customer concentration
  if (data.concentration.startsWith("Low")) adj += 0.3;
  else if (data.concentration.startsWith("High")) adj -= 0.4;

  // Recurring revenue
  if (data.recurringRevenue.startsWith("High")) adj += 0.6;
  else if (data.recurringRevenue.startsWith("Moderate")) adj += 0.3;
  else if (data.recurringRevenue.startsWith("Some")) adj += 0.1;

  // Employee scale
  if (data.employees === "100+") adj += 0.2;
  else if (data.employees === "51 – 100") adj += 0.1;

  return adj;
}

const ValuationCalculator = () => {
  const [step, setStep] = useState(1);
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [revenue, setRevenue] = useState("");
  const [ebitda, setEbitda] = useState("");
  const [years, setYears] = useState("");
  const [employees, setEmployees] = useState("");
  const [ownerDependency, setOwnerDependency] = useState("");
  const [growth, setGrowth] = useState("");
  const [concentration, setConcentration] = useState("");
  const [recurringRevenue, setRecurringRevenue] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ low: number; high: number } | null>(null);
  const [formalRequested, setFormalRequested] = useState(false);
  const [requestingFormal, setRequestingFormal] = useState(false);

  const sector = sectors.find((s) => s.label === selectedSector);

  const canProceedStep1 = selectedSector && selectedSubcategory;
  const canProceedStep2 = revenue && ebitda && years && employees && ownerDependency && growth && concentration && recurringRevenue;
  const canProceedStep3 = name.trim() && email.trim() && company.trim();

  const handleSubmit = async () => {
    if (!sector) return;
    setSubmitting(true);

    const ebitdaMid = parseEbitdaMidpoint(ebitda);
    const adj = computeMultiplierAdjustment({ years, employees, ownerDependency, growth, concentration, recurringRevenue });
    const baseLow = sector.multiplierRange[0] + adj;
    const baseHigh = sector.multiplierRange[1] + adj;
    const low = Math.max(ebitdaMid * Math.max(baseLow, 1.5), 0);
    const high = ebitdaMid * Math.max(baseHigh, 2.0);

    try {
      await supabase.functions.invoke("send-contact-email", {
        body: {
          company,
          email,
          phone: phone || "",
          revenue,
          ebitda,
          timeline: "Valuation Calculator Lead",
          message: `Valuation Calculator Submission\nSector: ${selectedSector}\nSubcategory: ${selectedSubcategory}\nRevenue: ${revenue}\nEBITDA: ${ebitda}\nYears: ${years}\nEmployees: ${employees}\nOwner Dependency: ${ownerDependency}\nGrowth: ${growth}\nConcentration: ${concentration}\nRecurring Revenue: ${recurringRevenue}\n\nEstimated Range: ${formatCurrency(low)} – ${formatCurrency(high)}`,
        },
      });
    } catch {
      // Still show results even if save fails
    }

    setResult({ low, high });
    setStep(4);
    setSubmitting(false);
  };

  const formatCurrency = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`;
    return `$${val.toFixed(0)}`;
  };

  const OptionButton = ({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-3 border text-sm transition-all duration-200 ${
        selected
          ? "border-primary bg-primary/10 text-foreground"
          : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );

  return (
    <Layout>
      <SEOHead
        title="Free Business Valuation Calculator | CBH Business Group"
        description="Get a preliminary estimate of your business's value based on industry multiples, financial performance, and key value drivers. Free and confidential."
        path="/valuation-calculator"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Valuation Calculator", path: "/valuation-calculator" },
        ]}
      />

      <section className="pt-32 pb-20 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2 mb-6">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-xs tracking-widest uppercase text-muted-foreground">Free Valuation Tool</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Business Valuation Calculator</h1>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Get a preliminary estimate of your company's enterprise value based on industry benchmarks, 
              financial performance, and key business characteristics.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="flex items-center justify-between mb-3">
              {["Industry", "Business Profile", "Your Information", "Valuation"].map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                    step > i + 1 ? "bg-primary text-primary-foreground" :
                    step === i + 1 ? "bg-primary text-primary-foreground" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    {step > i + 1 ? "✓" : i + 1}
                  </div>
                  <span className={`text-xs tracking-wide uppercase hidden sm:inline ${step === i + 1 ? "text-foreground" : "text-muted-foreground"}`}>{label}</span>
                </div>
              ))}
            </div>
            <div className="w-full bg-muted h-1 rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: `${((step - 1) / 3) * 100}%` }} />
            </div>
          </div>

          <div className="max-w-2xl mx-auto bg-card border border-border p-8 md:p-10">
            {/* Step 1: Industry */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-xl text-foreground mb-1">Select Your Industry</h2>
                  <p className="text-sm text-muted-foreground">Step 1 of 3</p>
                </div>
                <div>
                  <Label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Sector</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {sectors.map((s) => (
                      <OptionButton key={s.label} selected={selectedSector === s.label} onClick={() => { setSelectedSector(s.label); setSelectedSubcategory(""); }}>
                        {s.label}
                      </OptionButton>
                    ))}
                  </div>
                </div>
                {selectedSector && sector && (
                  <div>
                    <Label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Subcategory</Label>
                    <div className="grid grid-cols-1 gap-2">
                      {sector.subcategories.map((sub) => (
                        <OptionButton key={sub} selected={selectedSubcategory === sub} onClick={() => setSelectedSubcategory(sub)}>
                          {sub}
                        </OptionButton>
                      ))}
                    </div>
                  </div>
                )}
                <Button variant="hero" size="lg" className="w-full" disabled={!canProceedStep1} onClick={() => setStep(2)}>
                  Continue <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Step 2: Business Profile */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-serif text-xl text-foreground mb-1">Business Profile</h2>
                    <p className="text-sm text-muted-foreground">Step 2 of 3 — {selectedSector}</p>
                  </div>
                  <button onClick={() => setStep(1)} className="text-xs text-primary hover:underline flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                </div>

                <div>
                  <Label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Annual Revenue</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {revenueOptions.map((opt) => <OptionButton key={opt} selected={revenue === opt} onClick={() => setRevenue(opt)}>{opt}</OptionButton>)}
                  </div>
                </div>

                <div>
                  <Label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Annual EBITDA / Seller's Discretionary Earnings</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {ebitdaOptions.map((opt) => <OptionButton key={opt} selected={ebitda === opt} onClick={() => setEbitda(opt)}>{opt}</OptionButton>)}
                  </div>
                </div>

                <div>
                  <Label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Years in Business</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {yearsOptions.map((opt) => <OptionButton key={opt} selected={years === opt} onClick={() => setYears(opt)}>{opt}</OptionButton>)}
                  </div>
                </div>

                <div>
                  <Label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Number of Employees</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {employeeOptions.map((opt) => <OptionButton key={opt} selected={employees === opt} onClick={() => setEmployees(opt)}>{opt}</OptionButton>)}
                  </div>
                </div>

                <div>
                  <Label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Owner Dependency</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {ownerDependencyOptions.map((opt) => <OptionButton key={opt} selected={ownerDependency === opt} onClick={() => setOwnerDependency(opt)}>{opt}</OptionButton>)}
                  </div>
                </div>

                <div>
                  <Label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Revenue Growth Trend</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {growthOptions.map((opt) => <OptionButton key={opt} selected={growth === opt} onClick={() => setGrowth(opt)}>{opt}</OptionButton>)}
                  </div>
                </div>

                <div>
                  <Label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Customer Concentration</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {concentrationOptions.map((opt) => <OptionButton key={opt} selected={concentration === opt} onClick={() => setConcentration(opt)}>{opt}</OptionButton>)}
                  </div>
                </div>

                <div>
                  <Label className="text-xs tracking-widest uppercase text-muted-foreground mb-3 block">Recurring Revenue</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {recurringRevenueOptions.map((opt) => <OptionButton key={opt} selected={recurringRevenue === opt} onClick={() => setRecurringRevenue(opt)}>{opt}</OptionButton>)}
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full" disabled={!canProceedStep2} onClick={() => setStep(3)}>
                  Continue <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            )}

            {/* Step 3: Contact Info Gate */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-serif text-xl text-foreground mb-1">Unlock Your Valuation</h2>
                    <p className="text-sm text-muted-foreground">Step 3 of 3 — Enter your details to receive your estimate</p>
                  </div>
                  <button onClick={() => setStep(2)} className="text-xs text-primary hover:underline flex items-center gap-1">
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                </div>

                <div className="bg-secondary border border-border p-4 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Your information is treated with strict confidentiality. We will never share your data with third parties 
                    without your explicit consent.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Full Name *</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Smith" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email Address *</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="john@company.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Phone (Optional)</Label>
                    <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="company" className="text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Company Name *</Label>
                    <Input id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Company Name" />
                  </div>
                </div>

                <Button variant="hero" size="lg" className="w-full" disabled={!canProceedStep3 || submitting} onClick={handleSubmit}>
                  {submitting ? "Calculating..." : "Get My Valuation Estimate"}
                </Button>
              </div>
            )}

            {/* Step 4: Results */}
            {step === 4 && result && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="font-serif text-2xl text-foreground mb-2">Your Preliminary Valuation Estimate</h2>
                  <p className="text-sm text-muted-foreground">{selectedSector} — {selectedSubcategory}</p>
                </div>

                <div className="bg-secondary border border-border p-8 text-center">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Estimated Enterprise Value Range</p>
                  <p className="text-4xl md:text-5xl font-serif text-primary mb-2">
                    {formatCurrency(result.low)} – {formatCurrency(result.high)}
                  </p>
                  <p className="text-sm text-muted-foreground">Based on EBITDA: {ebitda}</p>
                </div>

                <div className="bg-accent/20 border border-accent p-4 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-xs text-muted-foreground leading-relaxed space-y-2">
                    <p className="font-semibold text-foreground">Important Disclaimer</p>
                    <p>
                      This estimate is for informational purposes only and does not constitute a formal business valuation, 
                      appraisal, or offer. Actual enterprise value depends on a comprehensive analysis of financial statements, 
                      market conditions, deal structure, buyer dynamics, and numerous other factors.
                    </p>
                    <p>
                      A formal, defensible valuation requires detailed financial review and normalization by a qualified 
                      M&A advisory professional.
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-6 text-center space-y-4">
                  {formalRequested ? (
                    <div className="bg-secondary border border-border p-6">
                      <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="font-serif text-lg text-foreground mb-2">Formal Valuation Requested</p>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        A senior advisor will review your information and contact you within one business day 
                        to discuss your comprehensive valuation.
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="font-serif text-lg text-foreground">Ready for a Comprehensive Valuation?</p>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        Our advisory team provides in-depth financial analysis, EBITDA normalization, and 
                        market-based valuation to establish a defensible asking price.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button
                          variant="hero"
                          size="lg"
                          disabled={requestingFormal}
                          onClick={async () => {
                            setRequestingFormal(true);
                            try {
                              await supabase.functions.invoke("send-contact-email", {
                                body: {
                                  company,
                                  email,
                                  phone: phone || "",
                                  revenue,
                                  ebitda,
                                  timeline: "Formal Valuation Request",
                                  message: `Formal Valuation Request (from Calculator)\nName: ${name}\nSector: ${selectedSector}\nSubcategory: ${selectedSubcategory}\nRevenue: ${revenue}\nEBITDA: ${ebitda}\nYears: ${years}\nEmployees: ${employees}\nOwner Dependency: ${ownerDependency}\nGrowth: ${growth}\nConcentration: ${concentration}\nRecurring Revenue: ${recurringRevenue}\n\nCalculator Estimate: ${formatCurrency(result!.low)} – ${formatCurrency(result!.high)}`,
                                },
                              });
                              setFormalRequested(true);
                              toast.success("Your formal valuation request has been submitted.");
                            } catch {
                              toast.error("There was an issue submitting your request. Please try again.");
                            } finally {
                              setRequestingFormal(false);
                            }
                          }}
                        >
                          {requestingFormal ? "Submitting..." : "Request Formal Valuation"} <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Link to="/consulting">
                          <Button variant="heroOutline" size="lg">Learn About Exit Planning</Button>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ValuationCalculator;
