import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart3, DollarSign, Building2, Clock, Users, Target } from "lucide-react";

const benchmarks = [
  {
    industry: "Construction & Trades",
    ebitdaMultiple: "3.5x – 5.5x",
    medianRevenue: "$4M – $12M",
    avgTimeline: "7–10 months",
    keyDrivers: ["Backlog depth", "Licensed workforce", "Recurring contracts", "Equipment condition"],
    link: "/sell-construction-company-florida",
  },
  {
    industry: "Healthcare & Medical",
    ebitdaMultiple: "5x – 8x",
    medianRevenue: "$3M – $15M",
    avgTimeline: "8–12 months",
    keyDrivers: ["Payer mix", "Provider retention", "Regulatory compliance", "Patient volume trends"],
    link: "/sell-healthcare-business-florida",
  },
  {
    industry: "Manufacturing",
    ebitdaMultiple: "4x – 6.5x",
    medianRevenue: "$5M – $20M",
    avgTimeline: "8–11 months",
    keyDrivers: ["Customer concentration", "Equipment age", "Proprietary processes", "Supply chain resilience"],
    link: "/sell-manufacturing-company-florida",
  },
  {
    industry: "Technology & SaaS",
    ebitdaMultiple: "6x – 12x",
    medianRevenue: "$2M – $15M",
    avgTimeline: "6–9 months",
    keyDrivers: ["Recurring revenue %", "Churn rate", "IP ownership", "Scalable architecture"],
    link: "/sell-technology-company-florida",
  },
  {
    industry: "HVAC & Mechanical",
    ebitdaMultiple: "4x – 6x",
    medianRevenue: "$3M – $10M",
    avgTimeline: "6–9 months",
    keyDrivers: ["Service agreement base", "Technician retention", "Territory density", "Seasonal stability"],
    link: "/sell-hvac-company-florida",
  },
  {
    industry: "Professional Services",
    ebitdaMultiple: "3x – 5x",
    medianRevenue: "$2M – $8M",
    avgTimeline: "6–8 months",
    keyDrivers: ["Client retention rate", "Owner dependence", "Recurring engagements", "Team depth"],
    link: "/sell-professional-services-firm-florida",
  },
  {
    industry: "Landscaping & Outdoor Services",
    ebitdaMultiple: "3x – 4.5x",
    medianRevenue: "$2M – $8M",
    avgTimeline: "5–8 months",
    keyDrivers: ["Contract base", "Equipment fleet", "Crew retention", "Route density"],
    link: "/sell-landscaping-business-florida",
  },
  {
    industry: "Restaurants & Food Service",
    ebitdaMultiple: "2.5x – 4x",
    medianRevenue: "$1.5M – $6M",
    avgTimeline: "4–7 months",
    keyDrivers: ["Lease terms", "Brand strength", "Management team", "Unit economics"],
    link: "/sell-restaurant-florida",
  },
];

const valuationDrivers = [
  { icon: TrendingUp, title: "EBITDA Growth", desc: "3+ years of consistent earnings growth commands premium multiples." },
  { icon: Users, title: "Customer Diversification", desc: "No single customer >15–20% of revenue reduces concentration risk." },
  { icon: Target, title: "Recurring Revenue", desc: "Contracted or subscription-based revenue models attract strategic acquirers." },
  { icon: Building2, title: "Owner Independence", desc: "Businesses that operate without the owner earn 20–40% higher multiples." },
  { icon: Clock, title: "Clean Financials", desc: "3 years of audited/reviewed financials accelerate due diligence and close." },
  { icon: DollarSign, title: "Market Timing", desc: "Industry demand cycles and interest rates affect deal volume and pricing." },
];

const FloridaMABenchmarks = () => (
  <Layout>
    <SEOHead
      title="Florida M&A Industry Benchmarks 2025 | Valuation Multiples by Sector"
      description="Free Florida M&A benchmarks: EBITDA multiples, median deal sizes, and valuation drivers across 8 industries. Data-driven insights for business owners planning an exit."
      canonical="https://cbhbusinessgroup.com/florida-ma-benchmarks"
    />

    {/* Hero */}
    <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="text-xs tracking-widest uppercase text-primary mb-4">Free Industry Data</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-6">
          Florida M&A Industry Benchmarks
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Valuation multiples, deal timelines, and key value drivers across Florida's most active M&A sectors. 
          Updated for 2025 market conditions.
        </p>
      </div>
    </section>

    {/* Quick Stats Bar */}
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { stat: "3x – 12x", label: "EBITDA Multiple Range" },
            { stat: "$3M – $50M", label: "Transaction Range" },
            { stat: "6 – 12 mo", label: "Avg. Time to Close" },
            { stat: "8", label: "Industries Covered" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-serif text-2xl md:text-3xl text-primary">{item.stat}</p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industry Benchmarks Table */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-primary mb-2">By Industry</p>
          <h2 className="font-serif text-3xl text-foreground mb-4">Valuation Multiples & Deal Data</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">
            Ranges reflect typical transactions for privately held Florida businesses valued $3M–$50M.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border border-border text-sm">
            <thead>
              <tr className="bg-secondary">
                <th className="text-left p-4 font-sans font-semibold text-xs uppercase tracking-widest text-foreground">Industry</th>
                <th className="text-center p-4 font-sans font-semibold text-xs uppercase tracking-widest text-foreground">EBITDA Multiple</th>
                <th className="text-center p-4 font-sans font-semibold text-xs uppercase tracking-widest text-foreground">Median Revenue</th>
                <th className="text-center p-4 font-sans font-semibold text-xs uppercase tracking-widest text-foreground">Avg. Timeline</th>
                <th className="text-left p-4 font-sans font-semibold text-xs uppercase tracking-widest text-foreground">Key Value Drivers</th>
              </tr>
            </thead>
            <tbody>
              {benchmarks.map((b, i) => (
                <tr key={b.industry} className={`border-t border-border ${i % 2 === 0 ? "bg-background" : "bg-secondary/50"}`}>
                  <td className="p-4">
                    <Link to={b.link} className="text-foreground hover:text-primary transition-colors font-medium">
                      {b.industry}
                    </Link>
                  </td>
                  <td className="p-4 text-center font-serif text-primary font-medium">{b.ebitdaMultiple}</td>
                  <td className="p-4 text-center text-muted-foreground">{b.medianRevenue}</td>
                  <td className="p-4 text-center text-muted-foreground">{b.avgTimeline}</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1.5">
                      {b.keyDrivers.map((d) => (
                        <span key={d} className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded">{d}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {benchmarks.map((b) => (
            <Link key={b.industry} to={b.link} className="block border border-border bg-card p-5 hover:border-primary/30 transition-colors">
              <h3 className="font-serif text-lg text-foreground mb-3">{b.industry}</h3>
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Multiple</p>
                  <p className="font-serif text-primary font-medium text-sm">{b.ebitdaMultiple}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Revenue</p>
                  <p className="text-sm text-foreground">{b.medianRevenue}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase">Timeline</p>
                  <p className="text-sm text-foreground">{b.avgTimeline}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {b.keyDrivers.map((d) => (
                  <span key={d} className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded">{d}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted-foreground mt-6 italic">
          * Data reflects market observations from CBH Business Group's transaction experience and industry sources. 
          Actual multiples vary based on company-specific factors. Not a guarantee of valuation.
        </p>
      </div>
    </section>

    {/* Valuation Drivers */}
    <section className="py-20 bg-secondary border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-primary mb-2">What Drives Value</p>
          <h2 className="font-serif text-3xl text-foreground mb-4">6 Factors That Determine Your Multiple</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuationDrivers.map((d) => (
            <div key={d.title} className="bg-card border border-border p-6">
              <d.icon className="w-6 h-6 text-primary mb-3" strokeWidth={1.5} />
              <h3 className="font-serif text-foreground mb-2">{d.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Related Resources */}
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="font-serif text-2xl text-foreground text-center mb-8">Related Resources</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Free Valuation Calculator", desc: "Get an instant EBITDA-based estimate of your business value.", path: "/valuation-calculator" },
            { title: "What Is EBITDA?", desc: "Understand the metric that drives M&A valuations.", path: "/what-is-ebitda" },
            { title: "How to Sell a Business", desc: "Step-by-step guide to the M&A process.", path: "/how-to-sell-a-business" },
            { title: "Broker vs. M&A Advisor", desc: "Key differences and when each makes sense.", path: "/business-broker-vs-ma-advisor" },
            { title: "Seller Financing Explained", desc: "How seller notes work in M&A transactions.", path: "/seller-financing-explained" },
            { title: "Growth Roadmap Tools", desc: "Assess your sellability score and growth stage.", path: "/business-growth-roadmap" },
          ].map((r) => (
            <Link key={r.path} to={r.path} className="border border-border bg-card p-5 hover:border-primary/30 transition-colors group">
              <h3 className="font-serif text-sm text-foreground group-hover:text-primary transition-colors mb-1 flex items-center gap-2">
                {r.title} <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-secondary border-t border-border">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <BarChart3 className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
        <h2 className="font-serif text-3xl text-foreground mb-4">Want a Personalized Valuation?</h2>
        <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
          These benchmarks are starting points. Your business has unique characteristics that affect its value. 
          Request a confidential valuation from our advisory team.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/business-valuation" className="bg-primary text-primary-foreground px-8 py-3 text-sm tracking-wider uppercase hover:bg-primary/90 transition-colors">
            Request Valuation
          </Link>
          <Link to="/contact" className="border border-primary text-primary px-8 py-3 text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>

    {/* JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dataset",
          name: "Florida M&A Industry Benchmarks 2025",
          description: "Valuation multiples, deal timelines, and key value drivers across 8 Florida industries for businesses valued $3M–$50M.",
          url: "https://cbhbusinessgroup.com/florida-ma-benchmarks",
          creator: { "@type": "Organization", name: "CBH Business Group" },
          temporalCoverage: "2025",
          spatialCoverage: { "@type": "Place", name: "Florida, United States" },
          keywords: ["M&A benchmarks", "EBITDA multiples", "Florida business valuation", "industry multiples"],
        }),
      }}
    />
  </Layout>
);

export default FloridaMABenchmarks;
