import { useParams, Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, Shield, TrendingUp, Users, BarChart3 } from "lucide-react";
import { getIndustryCityPage } from "@/lib/industry-city-data";

const icons = [BarChart3, Shield, Users, TrendingUp];

const IndustryCityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getIndustryCityPage(slug) : undefined;

  if (!data) return <Navigate to="/industries" replace />;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <Layout>
      <SEOHead
        title={data.metaTitle}
        description={data.metaDescription}
        path={`/${data.slug}`}
        jsonLd={faqJsonLd}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: data.title, path: `/${data.slug}` },
        ]}
      />

      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">{data.heroLabel}</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              {data.heroHeading}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {data.heroDescription}
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Typical EBITDA multiples: <strong className="text-foreground">{data.multipleRange}</strong> for {data.city} {data.industry.toLowerCase()} businesses.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Request Confidential Valuation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">{data.industry} M&A Expertise</p>
            <h2 className="text-3xl font-serif text-foreground">{data.whyChooseHeading}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {data.features.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div key={i} className="text-center">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-sm text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Common Questions</p>
            <h2 className="text-3xl font-serif text-foreground mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {data.faqs.map((faq, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-primary mb-6 text-center">Related Resources</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {data.relatedLinks.map((link, i) => (
              <Link key={i} to={link.to} className="bg-card border border-border p-6 hover:border-primary/30 transition-colors text-center">
                <p className="font-serif text-sm text-foreground mb-1">{link.title}</p>
                <p className="text-xs text-muted-foreground">{link.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-foreground mb-4">Ready to Explore Your Options?</h2>
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
};

export default IndustryCityPage;
