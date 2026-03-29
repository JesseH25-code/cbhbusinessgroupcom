import { useParams, Navigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, BookOpen } from "lucide-react";
import { getGlossaryTerm, glossaryTerms } from "@/lib/glossary-data";
import GlossaryNavSidebar from "@/components/GlossaryNavSidebar";

const GlossaryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getGlossaryTerm(slug) : undefined;

  if (!data) return <Navigate to="/glossary" replace />;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const definitionJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.term,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "M&A Glossary",
      url: "https://cbhbusinessgroup.com/glossary",
    },
  };

  return (
    <Layout>
      <SEOHead
        title={data.metaTitle}
        description={data.metaDescription}
        path={`/glossary/${data.slug}`}
        jsonLd={[faqJsonLd, definitionJsonLd]}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "M&A Glossary", path: "/glossary" },
          { name: data.term, path: `/glossary/${data.slug}` },
        ]}
      />

      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <Link to="/glossary" className="text-xs tracking-widest uppercase text-primary mb-3 inline-flex items-center gap-1.5 hover:underline">
              <BookOpen className="w-3.5 h-3.5" /> M&A Glossary
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6 mt-3">
              {data.heroHeading}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {data.heroDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_280px] gap-10">
            <div>
              <div className="bg-secondary border border-border p-8 mb-12">
                <p className="text-xs tracking-widest uppercase text-primary mb-3">Definition</p>
                <p className="text-foreground leading-relaxed">{data.definition}</p>
              </div>

              <div className="space-y-12">
                {data.sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="text-2xl font-serif text-foreground mb-4">{section.heading}</h2>
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <GlossaryNavSidebar />
              </div>
            </aside>
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

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-primary mb-4">Related Terms</p>
                <div className="space-y-2">
                  {data.relatedTerms.map((term, i) => (
                    <Link key={i} to={term.to} className="block text-sm text-foreground hover:text-primary transition-colors">
                      → {term.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-primary mb-4">Related Resources</p>
                <div className="space-y-3">
                  {data.relatedPages.map((link, i) => (
                    <Link key={i} to={link.to} className="block bg-card border border-border p-4 hover:border-primary/30 transition-colors">
                      <p className="font-serif text-sm text-foreground">{link.title}</p>
                      <p className="text-xs text-muted-foreground">{link.subtitle}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
};

export default GlossaryPage;
