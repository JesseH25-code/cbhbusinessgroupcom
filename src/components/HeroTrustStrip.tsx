import { Shield, TrendingUp, CheckCircle2 } from "lucide-react";

/**
 * Compact trust strip designed to sit directly below hero copy.
 * Reduces bounce by surfacing proof + key stats above the fold.
 */
const HeroTrustStrip = () => (
  <div className="mt-8 mb-2 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl">
    <div className="flex items-start gap-2.5">
      <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
      <div>
        <p className="text-xs font-medium text-foreground leading-tight">NDA-Protected</p>
        <p className="text-[11px] text-muted-foreground leading-snug">Every conversation confidential</p>
      </div>
    </div>
    <div className="flex items-start gap-2.5">
      <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
      <div>
        <p className="text-xs font-medium text-foreground leading-tight">$37M+ Deal Volume</p>
        <p className="text-[11px] text-muted-foreground leading-snug">Active FL transactions</p>
      </div>
    </div>
    <div className="flex items-start gap-2.5">
      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
      <div>
        <p className="text-xs font-medium text-foreground leading-tight">$3M–$50M Range</p>
        <p className="text-[11px] text-muted-foreground leading-snug">Lower middle-market focus</p>
      </div>
    </div>
  </div>
);

export default HeroTrustStrip;