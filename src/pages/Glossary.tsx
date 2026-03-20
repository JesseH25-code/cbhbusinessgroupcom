import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, BookOpen } from "lucide-react";
import { glossaryTerms } from "@/lib/glossary-data";

const Glossary = () => (
  <Layout>
    <SEOHead
      title="M&A Glossary | Key Terms for Business Sellers & Buyers"
      description="Comprehensive M&A glossary covering essential terms for business owners — from EBITDA multiples and earnouts to due diligence and purchase agreements."
      path="/glossary"
      breadcrumbs={[
        { name: "Home", path: "/" },
        { name: "M&A Glossary", path: "/glossary" },
      ]}
    />

    <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-xs tracking-widest uppercase text-primary mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Educational Resource
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            M&A Glossary
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Understanding M&A terminology is essential to navigating a successful transaction. 
            This glossary covers the key terms every business owner should know — whether you're 
            preparing to sell, evaluating an acquisition, or planning your exit strategy.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {glossaryTerms.map((term) => (
              <Link
                key={term.slug}
                to={`/glossary/${term.slug}`}
                className="block bg-card border border-border p-6 hover:border-primary/30 transition-colors group"
              >
                <h2 className="font-serif text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {term.term}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {term.definition}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <p className="text-xs tracking-widest uppercase text-primary mb-6 text-center">Related Resources</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <Link to="/what-is-ebitda" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">What Is EBITDA?</p>
            <p className="text-xs text-muted-foreground">Complete EBITDA guide</p>
          </Link>
          <Link to="/how-to-sell-a-business" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">How to Sell a Business</p>
            <p className="text-xs text-muted-foreground">Step-by-step guide</p>
          </Link>
          <Link to="/florida-ma-benchmarks" className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
            <p className="font-serif text-sm text-foreground mb-1">Florida M&A Benchmarks</p>
            <p className="text-xs text-muted-foreground">Industry data & multiples</p>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-serif text-foreground mb-4">Need Expert M&A Guidance?</h2>
        <p className="text-muted-foreground mb-8">Every conversation is confidential. No obligation.</p>
        <Link to="/contact">
          <Button variant="hero" size="lg">
            Schedule Advisory Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>
  </Layout>
);

export default Glossary;
