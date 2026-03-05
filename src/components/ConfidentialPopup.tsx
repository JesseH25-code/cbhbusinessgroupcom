import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ConfidentialPopup = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    company: "",
    revenue: "",
    ebitda: "",
    timeline: "",
    email: "",
    phone: "",
    message: "",
    confidentiality: false,
  });

  useEffect(() => {
    const dismissed = sessionStorage.getItem("cbh-popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {

      setOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem("cbh-popup-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          company: form.company,
          revenue: form.revenue,
          ebitda: form.ebitda,
          timeline: form.timeline,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
      });

      if (error) throw error;
      setSubmitted(true);
      sessionStorage.setItem("cbh-popup-dismissed", "true");
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("There was an issue submitting your inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full bg-background border border-border px-4 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none transition-colors";

  return (
    <Dialog open={open} onOpenChange={(v) => !v && handleClose()}>
      <DialogContent className="sm:max-w-lg bg-card border-border p-0 gap-0 overflow-hidden" aria-describedby="confidential-popup-desc">
        {/* Header */}
        <div className="bg-secondary px-6 py-5 border-b border-border">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" strokeWidth={1.5} />
            <DialogTitle className="font-serif text-lg text-foreground">
              Confidential Inquiry
            </DialogTitle>
          </div>
          <p id="confidential-popup-desc" className="text-xs text-muted-foreground mt-2 leading-relaxed">
            All information is held in strict confidence and will never be shared without your explicit written consent.
          </p>
        </div>

        {submitted ? (
          <div className="px-6 py-12 text-center">
            <Shield className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <p className="text-primary font-serif text-xl mb-2">Thank You.</p>
            <p className="text-sm text-muted-foreground">
              A senior advisor will contact you within one business day. Your information is held in strict confidence.
            </p>
            <Button variant="heroOutline" size="sm" className="mt-6" onClick={handleClose}>
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1 block">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className={fieldClass}
                />
              </div>
              <div>
                <label className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1 block">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1 block">
                  Revenue Range *
                </label>
                <select
                  required
                  value={form.revenue}
                  onChange={(e) => setForm({ ...form, revenue: e.target.value })}
                  className={fieldClass}
                >
                  <option value="">Select</option>
                  <option>$5M – $10M</option>
                  <option>$10M – $25M</option>
                  <option>$25M – $50M</option>
                  <option>$50M – $100M</option>
                  <option>$100M+</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1 block">
                  EBITDA Range *
                </label>
                <select
                  required
                  value={form.ebitda}
                  onChange={(e) => setForm({ ...form, ebitda: e.target.value })}
                  className={fieldClass}
                >
                  <option value="">Select</option>
                  <option>$1M – $3M</option>
                  <option>$3M – $5M</option>
                  <option>$5M – $10M</option>
                  <option>$10M+</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1 block">
                  Timeline *
                </label>
                <select
                  required
                  value={form.timeline}
                  onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                  className={fieldClass}
                >
                  <option value="">Select</option>
                  <option>Within 6 months</option>
                  <option>6–12 months</option>
                  <option>1–2 years</option>
                  <option>2–5 years</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1 block">
                  Phone
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1 block">
                Additional Details
              </label>
              <textarea
                rows={2}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${fieldClass} resize-none`}
                placeholder="Industry, goals, or any relevant context..."
              />
            </div>

            {/* Confidentiality acknowledgment */}
            <div className="flex items-start gap-3 bg-secondary/50 border border-border p-3 rounded">
              <input
                type="checkbox"
                required
                checked={form.confidentiality}
                onChange={(e) => setForm({ ...form, confidentiality: e.target.checked })}
                className="mt-0.5 accent-primary"
              />
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                <span className="text-primary font-medium">Confidentiality Guarantee:</span> I acknowledge that all
                information submitted will be treated as strictly confidential and will not be shared with any third
                party without my explicit written consent.
              </p>
            </div>

            <Button variant="hero" size="lg" type="submit" className="w-full" disabled={loading}>
              <Shield className="w-4 h-4 mr-2" />
              {loading ? "Submitting..." : "Submit Confidential Inquiry"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConfidentialPopup;
