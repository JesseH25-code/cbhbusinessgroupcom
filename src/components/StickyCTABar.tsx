import { useState, useEffect, forwardRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart3, X } from "lucide-react";

const DISMISSED_KEY = "cbh_sticky_cta_dismissed";

const StickyCTABar = forwardRef<HTMLDivElement>((_, ref) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const { pathname } = useLocation();

  // Don't show on pages that already have the calculator or admin pages
  const hideOn = ["/valuation-calculator", "/business-valuation", "/admin", "/contact"];
  const shouldHide = hideOn.some((p) => pathname.startsWith(p));

  useEffect(() => {
    const wasDismissed = sessionStorage.getItem(DISMISSED_KEY);
    if (wasDismissed) {
      setDismissed(true);
      return;
    }

    // Show after scrolling 400px
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (shouldHide || dismissed || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-card/95 backdrop-blur border-t border-primary/20 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link
            to="/valuation-calculator"
            className="flex items-center gap-3 group flex-1 min-w-0"
          >
            <BarChart3 className="w-5 h-5 text-primary shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-serif text-foreground group-hover:text-primary transition-colors truncate">
                What's Your Business Worth?
              </p>
              <p className="text-xs text-muted-foreground hidden sm:block">
                Free confidential valuation calculator — instant results
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/valuation-calculator"
              className="bg-primary text-primary-foreground text-xs font-medium px-4 py-2 hover:bg-primary/90 transition-colors"
            >
              Get Free Valuation
            </Link>
            <button
              onClick={() => {
                setDismissed(true);
                sessionStorage.setItem(DISMISSED_KEY, "1");
              }}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCTABar;
