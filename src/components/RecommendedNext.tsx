import { Link, useLocation } from "react-router-dom";
import { ArrowRight, BarChart3, BookOpen, FileText, Users, Phone, TrendingUp } from "lucide-react";

interface Recommendation {
  title: string;
  desc: string;
  path: string;
  icon: React.ElementType;
}

const allRecommendations: Recommendation[] = [
  { title: "Free Business Valuation", desc: "Get an instant estimate of what your business could be worth.", path: "/valuation-calculator", icon: BarChart3 },
  { title: "Business Growth Roadmap", desc: "Diagnostic tools to assess your sellability and growth stage.", path: "/business-growth-roadmap", icon: TrendingUp },
  { title: "Free M&A Guides", desc: "Download expert guides on exit planning, valuation, and due diligence.", path: "/resources", icon: BookOpen },
  { title: "How to Sell a Business", desc: "Step-by-step guide to the M&A process for business owners.", path: "/how-to-sell-a-business", icon: FileText },
  { title: "Join the Buyer Network", desc: "Register as a qualified acquirer to access deal flow.", path: "/buyers", icon: Users },
  { title: "Request a Consultation", desc: "Speak confidentially with an M&A advisor about your goals.", path: "/contact", icon: Phone },
  { title: "Case Studies", desc: "See how we've helped business owners achieve successful exits.", path: "/case-studies", icon: FileText },
  { title: "What Is EBITDA?", desc: "Understanding the key metric that drives business valuations.", path: "/what-is-ebitda", icon: BarChart3 },
  { title: "Seller Financing Explained", desc: "How seller financing works and when it makes sense.", path: "/seller-financing-explained", icon: FileText },
];

// Pages that should NOT show recommendations
const excludedPaths = ["/admin", "/admin/blog", "/admin/opportunities"];

const RecommendedNext = () => {
  const { pathname } = useLocation();

  if (excludedPaths.some((p) => pathname.startsWith(p))) return null;

  // Filter out current page and pick 3 contextual recommendations
  const filtered = allRecommendations.filter((r) => r.path !== pathname);

  // Prioritize based on page context
  let picks: Recommendation[];
  if (pathname.includes("valuation") || pathname.includes("ebitda")) {
    picks = prioritize(filtered, ["/how-to-sell-a-business", "/resources", "/contact"]);
  } else if (pathname.includes("sell-") || pathname === "/sellers") {
    picks = prioritize(filtered, ["/valuation-calculator", "/resources", "/contact"]);
  } else if (pathname.includes("buy") || pathname === "/buyers" || pathname === "/opportunities") {
    picks = prioritize(filtered, ["/case-studies", "/contact", "/resources"]);
  } else if (pathname === "/resources" || pathname === "/blog") {
    picks = prioritize(filtered, ["/valuation-calculator", "/business-growth-roadmap", "/contact"]);
  } else if (pathname === "/business-growth-roadmap") {
    picks = prioritize(filtered, ["/valuation-calculator", "/resources", "/contact"]);
  } else {
    picks = prioritize(filtered, ["/valuation-calculator", "/business-growth-roadmap", "/resources"]);
  }

  return (
    <section className="py-16 bg-secondary border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs tracking-widest uppercase text-primary mb-2">Continue Exploring</p>
          <h2 className="text-2xl font-serif text-foreground">You Might Also Find Helpful</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {picks.map((rec) => (
            <Link
              key={rec.path}
              to={rec.path}
              className="bg-card border border-border p-6 hover:border-primary/30 transition-colors group flex flex-col"
            >
              <rec.icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
              <h3 className="font-serif text-sm text-foreground group-hover:text-primary transition-colors mb-2 flex items-center gap-2">
                {rec.title}
                <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{rec.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

function prioritize(pool: Recommendation[], preferredPaths: string[]): Recommendation[] {
  const preferred = preferredPaths
    .map((p) => pool.find((r) => r.path === p))
    .filter(Boolean) as Recommendation[];
  const rest = pool.filter((r) => !preferredPaths.includes(r.path));
  return [...preferred, ...rest].slice(0, 3);
}

export default RecommendedNext;
