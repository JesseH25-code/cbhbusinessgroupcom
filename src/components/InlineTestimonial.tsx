import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "CBH walked us through every step — the valuation, the buyer meetings, the paperwork. We closed in under 7 months.",
    attribution: "Commercial Plumbing Company Owner",
    detail: "Tampa Bay · Sold at 4.8x EBITDA",
  },
  {
    quote: "They positioned our backlog, bonding capacity, and crew depth in a way that got buyers competing against each other.",
    attribution: "General Contractor & Founder",
    detail: "Central Florida · $12M Transaction",
  },
  {
    quote: "We had three offers within 90 days of going to market. CBH addressed every buyer concern upfront.",
    attribution: "Roofing Company Owner",
    detail: "South Florida · Strategic Acquisition",
  },
];

const InlineTestimonial = () => {
  // Pick a random testimonial each render (consistent per page load)
  const t = testimonials[Math.floor(Math.random() * testimonials.length)];

  return (
    <div className="my-12 border-l-2 border-primary/30 pl-6 py-2">
      <Quote className="w-5 h-5 text-primary/30 mb-2" strokeWidth={1.5} />
      <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">
        "{t.quote}"
      </p>
      <div className="flex gap-0.5 mb-1">
        {[...Array(5)].map((_, j) => (
          <Star key={j} className="w-3 h-3 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-xs font-medium text-foreground">{t.attribution}</p>
      <p className="text-xs text-muted-foreground">{t.detail}</p>
    </div>
  );
};

export default InlineTestimonial;
