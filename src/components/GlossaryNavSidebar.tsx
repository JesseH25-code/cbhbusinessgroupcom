import { Link, useParams } from "react-router-dom";
import { glossaryTerms } from "@/lib/glossary-data";
import { BookOpen, ChevronRight } from "lucide-react";

const GlossaryNavSidebar = () => {
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = glossaryTerms.findIndex((t) => t.slug === slug);
  const prev = currentIndex > 0 ? glossaryTerms[currentIndex - 1] : null;
  const next = currentIndex < glossaryTerms.length - 1 ? glossaryTerms[currentIndex + 1] : null;

  // Pick 4 random terms that aren't the current one
  const others = glossaryTerms
    .filter((t) => t.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <nav className="border border-border bg-card p-5">
      <p className="text-xs tracking-widest uppercase text-primary mb-4 flex items-center gap-1.5">
        <BookOpen className="w-3.5 h-3.5" /> Browse Glossary
      </p>

      {/* Prev / Next navigation */}
      <div className="flex gap-2 mb-4">
        {prev ? (
          <Link
            to={`/glossary/${prev.slug}`}
            className="flex-1 text-xs text-muted-foreground hover:text-primary transition-colors border border-border px-3 py-2 text-center"
          >
            ← {prev.term}
          </Link>
        ) : <div className="flex-1" />}
        {next ? (
          <Link
            to={`/glossary/${next.slug}`}
            className="flex-1 text-xs text-muted-foreground hover:text-primary transition-colors border border-border px-3 py-2 text-center"
          >
            {next.term} →
          </Link>
        ) : <div className="flex-1" />}
      </div>

      {/* Other terms */}
      <div className="space-y-1">
        {others.map((t) => (
          <Link
            key={t.slug}
            to={`/glossary/${t.slug}`}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
          >
            <ChevronRight className="w-3 h-3" /> {t.term}
          </Link>
        ))}
      </div>

      <Link
        to="/glossary"
        className="block mt-4 pt-3 border-t border-border text-xs text-primary hover:underline"
      >
        View All Terms →
      </Link>
    </nav>
  );
};

export default GlossaryNavSidebar;
