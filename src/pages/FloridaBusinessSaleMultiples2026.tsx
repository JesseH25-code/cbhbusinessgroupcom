import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import RelatedResources from "@/components/RelatedResources";
import { ArrowRight, TrendingUp, Building2, BarChart3, FileDown } from "lucide-react";
import { speakableJsonLd } from "@/lib/seo-data";

const sectorData = [
  { sector: "HVAC & Mechanical", multiple: "4.0x – 6.5x", median: "5.2x", revenueRange: "$3M – $10M", trend: "↑", note: "PE roll-ups driving premiums for service-agreement-heavy operators." },
  { sector: "Construction & Trades", multiple: "3.5x – 5.5x", median: "4.4x", revenueRange: "$4M – $12M", trend: "→", note: "Backlog quality and licensed workforce remain primary value drivers." },
  { sector: "Healthcare Services", multiple: "5.0x – 9.0x", median: "6.8x", revenueRange: "$3M – $15M", trend: "↑", note: "Multi-site practices and favorable payor mix command top end of range." },
  { sector: "Manufacturing", multiple: "4.0x – 7.0x", median: "5.5x", revenueRange: "$5M – $20M", trend: "→", note: "Customer concentration discount applied above 25% from single client." },
  { sector: "Technology & SaaS", multiple: "6.0x – 12.0x", median: "8.5x", revenueRange: "$2M – $15M", trend: "↑", note: "Recurring revenue % and net retention drive multiple expansion." },
  { sector: "Professional Services", multiple: "3.0x – 5.0x", median: "4.0x", revenueRange: "$2M – $8M", trend: "→", note: "Owner dependency continues to compress multiples industry-wide." },
  { sector: "Insurance Agencies", multiple: "6.0x – 9.0x", median: "7.5x", revenueRange: "$2M – $10M", trend: "↑", note: "Commission revenue stability fuels strong PE-backed buyer demand." },
  { sector: "Title Companies", multiple: "4.0x – 8.0x", median: "5.8x", revenueRange: "$2M – $12M", trend: "→", note: "Tied to Florida real estate volume; strong commercial mix earns premium." },
  { sector: "Landscaping & Lawncare", multiple: "3.5x – 6.0x", median: "4.6x", revenueRange: "$3M – $10M", trend: "↑", note: "Recurring commercial maintenance contracts drive consolidator interest." },
  { sector: "Restaurants & Hospitality", multiple: "2.5x – 4.5x", median: "3.4x", revenueRange: "$2M – $8M", trend: "→", note: "Multi-unit operators with proven systems command upper range." },
];

const methodology = [
  { title: "Sample Size", desc: "Aggregated from 240+ Florida lower middle-market transactions closed Q1 2024 – Q1 2026." },
  { title: "EBITDA Definition", desc: "Adjusted EBITDA — normalized for owner compensation, one-time expenses, and non-recurring items." },
  { title: "Transaction Range", desc: "Enterprise values from $3M to $50M, excluding distressed sales and partial recapitalizations under 50%." },
  { title: "Data Sources", desc: "CBH Business Group transaction data, IBBA market pulse reports, and verified PitchBook FL deal records." },
];

const valueDrivers = [
  "Customer concentration below 25% from any single client",
  "Owner dependency reduced through documented systems and second-tier management",
  "Trailing 12-month revenue growth of 8%+ year-over-year",
  "Recurring or contracted revenue exceeding 40% of total",
  "Clean financial records with reviewed or audited statements (3+ years)",
  "Diversified vendor and supplier base",
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "2026 Florida Business Sale Multiples Report",
  description:
    "Comprehensive 2026 EBITDA multiple benchmarks across 10 Florida industries. Median multiples, revenue ranges, and value drivers for lower middle-market M&A transactions.",
  author: { "@type": "Organization", name: "CBH Business Group" },
  publisher: {
    "@type": "Organization",
    name: "CBH Business Group",
    logo: { "@type": "ImageObject", url: "https://cbhbusinessgroup.com/og-image.jpg" },
  },
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
  mainEntityOfPage: "https://cbhbusinessgroup.com/florida-business-sale-multiples-2026",
};

const FloridaBusinessSaleMultiples2026 = () => (
  <Layout>
    <SEOHead
      title="2026 Florida Business Sale Multiples Report — EBITDA Benchmarks by Industry"
      description="Free 2026 report: median EBITDA multiples across 10 Florida industries. Sector-by-sector data on what lower middle-market businesses ($3M–$50M) are trading for in 2026."
      path="/florida-business-sale-multiples-2026"
      jsonLd={[articleJsonLd, speakableJsonLd("/florida-business-sale-multiples-2026")]}
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "2026 FL Business Sale Multiples", path: "/florida-business-sale-multiples-2026" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Industry Report · Updated April 2026</p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6 leading-tight">
            2026 Florida Business Sale Multiples Report
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Median EBITDA multiples, revenue ranges, and value drivers for lower middle-market
            ($3M–$50M) transactions across 10 Florida industries. Aggregated from 240+ closed deals.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request Your Industry Multiple <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a
              href="#data"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-wide uppercase border border-border text-foreground hover:border-primary/50 transition-colors"
            >
              Jump to Data <FileDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* Snapshot stats */}
    <section className="py-12 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <p className="text-3xl font-serif text-foreground">240+</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Deals Analyzed</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-foreground">10</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">FL Industries</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-foreground">5.4x</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">Cross-Sector Median</p>
          </div>
          <div>
            <p className="text-3xl font-serif text-foreground">$3M–$50M</p>
            <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">EV Range</p>
          </div>
        </div>
      </div>
    </section>

    {/* Multiples table */}
    <section id="data" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Sector Benchmarks</p>
          <h2 className="text-3xl font-serif text-foreground mb-8">2026 Multiple Ranges by Industry</h2>

          <div className="overflow-x-auto border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="text-left p-4 font-serif text-foreground">Sector</th>
                  <th className="text-left p-4 font-serif text-foreground whitespace-nowrap">Multiple Range</th>
                  <th className="text-left p-4 font-serif text-foreground">Median</th>
                  <th className="text-left p-4 font-serif text-foreground whitespace-nowrap">Typical Revenue</th>
                  <th className="text-left p-4 font-serif text-foreground">Trend</th>
                </tr>
              </thead>
              <tbody>
                {sectorData.map((row, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-secondary/40 transition-colors">
                    <td className="p-4 font-medium text-foreground">{row.sector}</td>
                    <td className="p-4 text-muted-foreground whitespace-nowrap">{row.multiple}</td>
                    <td className="p-4 text-foreground font-medium">{row.median}</td>
                    <td className="p-4 text-muted-foreground whitespace-nowrap">{row.revenueRange}</td>
                    <td className="p-4 text-primary font-medium text-lg">{row.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {sectorData.slice(0, 6).map((row, i) => (
              <div key={i} className="bg-card border border-border p-5">
                <p className="font-serif text-base text-foreground mb-1">{row.sector}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{row.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Methodology */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Methodology</p>
          <h2 className="text-3xl font-serif text-foreground mb-8">How We Calculated These Multiples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {methodology.map((m, i) => (
              <div key={i} className="bg-card border border-border p-6">
                <BarChart3 className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                <h3 className="font-serif text-base text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Value drivers */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Premium Multiple Drivers</p>
          <h2 className="text-3xl font-serif text-foreground mb-6">What Pushes Multiples to the Top of the Range</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Across every sector in our 2026 dataset, the same fundamental characteristics
            consistently separate businesses that close at the top of their range from those that
            settle for median or below.
          </p>
          <ul className="space-y-3">
            {valueDrivers.map((driver, i) => (
              <li key={i} className="flex items-start gap-3">
                <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-1" strokeWidth={1.5} />
                <span className="text-sm text-foreground leading-relaxed">{driver}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-section border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <Building2 className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
        <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
          Where Does Your Business Fall in the Range?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Request a confidential indicative valuation using current 2026 Florida market data.
          No obligation — typical response within 48 hours.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Request Confidential Valuation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>

    <RelatedResources
      links={[
        { title: "Florida M&A Benchmarks", desc: "Full sector trend analysis and timelines.", to: "/florida-ma-benchmarks" },
        { title: "Valuation Calculator", desc: "Estimate your business value in 60 seconds.", to: "/valuation-calculator" },
        { title: "What Is EBITDA?", desc: "How adjusted EBITDA drives your multiple.", to: "/what-is-ebitda" },
        { title: "How to Sell a Business", desc: "Step-by-step exit playbook.", to: "/how-to-sell-a-business" },
      ]}
    />
  </Layout>
);

export default FloridaBusinessSaleMultiples2026;