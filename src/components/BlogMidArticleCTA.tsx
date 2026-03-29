import { Link } from "react-router-dom";
import { ArrowRight, Calculator } from "lucide-react";

const BlogMidArticleCTA = () => (
  <div className="my-10 p-6 border border-primary/20 bg-primary/5 not-prose">
    <div className="flex items-start gap-4">
      <Calculator className="w-8 h-8 text-primary flex-shrink-0 mt-1" strokeWidth={1.5} />
      <div>
        <p className="font-serif text-lg text-foreground mb-1">
          What's your business worth?
        </p>
        <p className="text-sm text-muted-foreground mb-3">
          Get a free, confidential estimate based on your industry, revenue, and EBITDA — in under 60 seconds.
        </p>
        <Link
          to="/valuation-calculator"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
        >
          Try the Valuation Calculator <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  </div>
);

export default BlogMidArticleCTA;
