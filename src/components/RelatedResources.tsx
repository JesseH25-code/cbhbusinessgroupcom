import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface RelatedLink {
  title: string;
  desc: string;
  to: string;
}

interface RelatedResourcesProps {
  heading?: string;
  label?: string;
  links: RelatedLink[];
}

/**
 * Reusable internal-linking block to drop into pages and lift pages-per-visit.
 * Designed for footer-of-content placement to reduce bounce.
 */
const RelatedResources = ({
  heading = "Continue Exploring",
  label = "Related Resources",
  links,
}: RelatedResourcesProps) => (
  <section className="py-16 border-t border-border">
    <div className="container mx-auto px-6">
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest uppercase text-primary mb-3">{label}</p>
        <h2 className="text-2xl md:text-3xl font-serif text-foreground">{heading}</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {links.map((link, i) => (
          <Link
            key={i}
            to={link.to}
            className="group bg-card border border-border p-5 hover:border-primary/40 transition-colors"
          >
            <p className="font-serif text-sm text-foreground mb-1.5 group-hover:text-primary transition-colors">
              {link.title}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{link.desc}</p>
            <span className="inline-flex items-center gap-1 text-[11px] tracking-widest uppercase text-primary">
              Read <ArrowRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default RelatedResources;