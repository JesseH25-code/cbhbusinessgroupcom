import ValuationCalculatorLanding from "@/components/ValuationCalculatorLanding";
import { Calculator, Shield, TrendingUp, BarChart3 } from "lucide-react";

const config = {
  city: "Naples",
  path: "/business-valuation-calculator-naples",
  parentPath: "/business-valuation-calculator-florida",
  parentLabel: "Valuation Calculator Florida",
  heroDescription: "Naples and Southwest Florida's affluent market creates unique valuation dynamics for business owners. From construction to healthcare, use our free calculator to get an instant EBITDA-based estimate of your company's enterprise value.",
  whyItems: [
    { icon: BarChart3, title: "Southwest FL Data", desc: "Valuation benchmarks reflecting Naples and Collier County's high-income, growth-driven market." },
    { icon: Shield, title: "Strict Confidentiality", desc: "Your information is handled with the discretion Naples business owners expect." },
    { icon: Calculator, title: "EBITDA-Based", desc: "Industry-standard methodology using adjusted EBITDA and sector multipliers." },
    { icon: TrendingUp, title: "Affluent Market", desc: "Naples' wealth concentration and population growth drive premium buyer demand." },
  ],
  faqItems: [
    { q: "What are business valuation multiples in Naples?", a: "Naples-area businesses typically see EBITDA multiples of 3x–7x. Construction, healthcare, and professional services businesses in Southwest Florida often achieve above-average multiples due to the region's sustained growth and affluent customer base." },
    { q: "What industries are most active for M&A in Naples?", a: "Construction, home services, healthcare, wealth management, and real estate services are among the most active M&A sectors in the Naples / Collier County market." },
    { q: "How does Naples compare to other Florida markets?", a: "Naples businesses often benefit from higher revenue per customer and strong margins due to the affluent demographic. This can translate to premium valuations, particularly for service-based businesses with recurring revenue." },
    { q: "What do I need to use the calculator?", a: "Approximate revenue range, EBITDA range, years in business, employee count, and qualitative business health factors. The entire process takes under 3 minutes." },
  ],
  relatedLinks: [
    { to: "/business-valuation-calculator-florida", label: "Florida Calculator", desc: "Statewide valuation tool" },
    { to: "/business-valuation-calculator-miami", label: "Miami Calculator", desc: "South Florida valuation" },
    { to: "/sell-business-florida", label: "Sell a Business in Florida", desc: "Statewide M&A advisory" },
  ],
};

const BusinessValuationCalculatorNaples = () => <ValuationCalculatorLanding config={config} />;
export default BusinessValuationCalculatorNaples;
