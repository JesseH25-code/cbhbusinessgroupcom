import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, BarChart3, BookOpen } from "lucide-react";

const STORAGE_KEY = "cbh_exit_popup_dismissed";
const DISMISS_DURATION = 3 * 24 * 60 * 60 * 1000; // 3 days

const ExitIntentPopup = () => {
  const [visible, setVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed && Date.now() - Number(dismissed) < DISMISS_DURATION) return;

    // Wait 5 seconds before arming the trigger
    const armTimeout = setTimeout(() => {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 5 && !hasTriggered) {
          setVisible(true);
          setHasTriggered(true);
        }
      };

      // Mobile: trigger on scroll-up after scrolling down
      let lastScrollY = window.scrollY;
      let maxScrollY = 0;
      const handleScroll = () => {
        const currentY = window.scrollY;
        if (currentY > maxScrollY) maxScrollY = currentY;
        if (maxScrollY > 600 && currentY < lastScrollY - 100 && !hasTriggered) {
          setVisible(true);
          setHasTriggered(true);
        }
        lastScrollY = currentY;
      };

      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("scroll", handleScroll);
      };
    }, 5000);

    return () => clearTimeout(armTimeout);
  }, [hasTriggered]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="relative bg-card border border-border max-w-md w-full p-8 animate-fade-in shadow-2xl">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="gold-divider w-16 mb-6" />
        <h3 className="font-serif text-xl text-foreground mb-2">
          Before You Go —
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          Find out what your business could be worth in today's market with our free, confidential valuation tools and expert guides.
        </p>

        <div className="space-y-3">
          <Link to="/valuation-calculator" onClick={dismiss}>
            <Button variant="default" size="lg" className="w-full justify-start gap-3">
              <BarChart3 className="w-5 h-5" />
              Free Business Valuation Calculator
            </Button>
          </Link>
          <Link to="/resources" onClick={dismiss}>
            <Button variant="outline" size="lg" className="w-full justify-start gap-3 mt-2">
              <BookOpen className="w-5 h-5" />
              Download Free M&A Guides
            </Button>
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-6 text-center">
          100% Confidential · No Obligation
        </p>
      </div>
    </div>
  );
};

export default ExitIntentPopup;
