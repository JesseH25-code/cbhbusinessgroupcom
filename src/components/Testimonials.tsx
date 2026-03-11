import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We'd been running our plumbing company for 28 years and had no idea where to start with selling. CBH walked us through every step — the valuation, the buyer meetings, the paperwork. We closed in under 7 months and the final number was more than we ever expected.",
    attribution: "Commercial Plumbing Company Owner",
    detail: "Tampa Bay · Sold at 4.8x EBITDA",
  },
  {
    quote: "CBH Business Group understood our construction business inside and out. They positioned our backlog, our bonding capacity, and our crew depth in a way that got buyers competing against each other. The result spoke for itself.",
    attribution: "General Contractor & Founder",
    detail: "Central Florida · $12M Transaction",
  },
  {
    quote: "Selling a roofing company isn't easy — buyers always question the warranty liabilities and seasonal revenue. CBH built a financial narrative that addressed every concern upfront. We had three offers within 90 days of going to market.",
    attribution: "Roofing Company Owner",
    detail: "South Florida · Strategic Acquisition",
  },
];

const Testimonials = () => (
  <section className="py-20 bg-secondary border-y border-border">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest uppercase text-primary mb-3">Client Experiences</p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">What Our Clients Say</h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
          Confidential feedback from business owners who trusted CBH Business Group with their most important transaction.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card border border-border p-6 flex flex-col">
            <Quote className="w-5 h-5 text-primary/40 mb-3" strokeWidth={1.5} />
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
              "{t.quote}"
            </p>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xs font-medium text-foreground">{t.attribution}</p>
              <p className="text-xs text-muted-foreground">{t.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/case-studies"
          className="text-xs text-primary hover:underline tracking-wider uppercase"
        >
          View Case Studies →
        </Link>
      </div>
    </div>

    {/* Review aggregate JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "CBH Business Group",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "3",
            bestRating: "5",
            worstRating: "5",
          },
        }),
      }}
    />
  </section>
);

export default Testimonials;
