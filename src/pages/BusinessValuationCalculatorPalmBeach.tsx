import ValuationCalculatorLanding from "@/components/ValuationCalculatorLanding";
import { Calculator, Shield, TrendingUp, Users } from "lucide-react";

const config = {
  city: "Palm Beach",
  path: "/business-valuation-calculator-palm-beach",
  parentPath: "/business-valuation-calculator-florida",
  parentLabel: "Valuation Calculator Florida",
  heroDescription: "Palm Beach County's concentration of wealth, private equity firms, and family offices creates an exceptionally active buyer market. Use our free calculator to estimate your Palm Beach-area business's enterprise value.",
  whyItems: [
    { icon: Users, title: "PE & Family Office Hub", desc: "Palm Beach's concentration of private capital creates a deep pool of qualified acquirers." },
    { icon: Shield, title: "Absolute Discretion", desc: "The level of confidentiality Palm Beach business owners demand and deserve." },
    { icon: Calculator, title: "EBITDA-Based", desc: "Industry-standard methodology using normalized EBITDA and sector multipliers." },
    { icon: TrendingUp, title: "Premium Market", desc: "Palm Beach's unique buyer dynamics can support above-market valuation multiples." },
  ],
  faqItems: [
    { q: "What are valuation multiples in Palm Beach County?", a: "Palm Beach businesses often achieve EBITDA multiples of 3.5x–8x, supported by the county's concentration of private equity firms, family offices, and high-net-worth individual buyers. Industries like healthcare, technology, and financial services tend to command the highest multiples." },
    { q: "Why is Palm Beach a strong market for selling a business?", a: "Palm Beach County has one of the highest concentrations of investable capital in the U.S. This creates competitive buyer dynamics that can drive premium valuations, particularly for businesses with $1M+ EBITDA." },
    { q: "What industries command the highest valuations in Palm Beach?", a: "Financial services, healthcare, technology, luxury services, and professional services consistently command the strongest multiples. Businesses with recurring revenue and management independence are especially attractive to Palm Beach-based buyers." },
    { q: "How do I go from calculator estimate to formal valuation?", a: "After receiving your free estimate, click 'Request Formal Valuation' — all your data transfers automatically with no forms to re-fill. A senior advisor contacts you within one business day." },
  ],
  relatedLinks: [
    { to: "/business-valuation-calculator-fort-lauderdale", label: "Fort Lauderdale Calculator", desc: "Broward County valuation" },
    { to: "/business-valuation-calculator-miami", label: "Miami Calculator", desc: "South Florida valuation" },
    { to: "/business-valuation-calculator-florida", label: "Florida Calculator", desc: "Statewide valuation" },
  ],
};

const BusinessValuationCalculatorPalmBeach = () => <ValuationCalculatorLanding config={config} />;
export default BusinessValuationCalculatorPalmBeach;
