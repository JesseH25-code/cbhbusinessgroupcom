import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({
    company: "", revenue: "", ebitda: "", timeline: "", email: "", phone: "", message: "", confidentiality: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
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
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("There was an issue submitting your inquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass = "w-full bg-card border border-border px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none transition-colors";

  return (
    <Layout>
      <SEOHead
        title="Contact — Confidential M&A Inquiry"
        description="Begin a confidential conversation about selling your business. Submit an inquiry and a senior CBH Business Group advisor will respond within one business day."
        path="/contact"
      />
      <section className="py-24 bg-gradient-section">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xs tracking-widest uppercase text-primary mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Begin the Conversation.</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every engagement begins with a confidential discussion. Share your situation below 
              and a senior advisor will respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-card border border-primary/30 p-12 text-center">
                <p className="text-primary font-serif text-2xl mb-3">Thank You.</p>
                <p className="text-muted-foreground">A senior advisor will contact you within one business day. All information is held in strict confidence.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Company Name</label>
                  <input type="text" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={fieldClass} />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Revenue Range</label>
                    <select value={form.revenue} onChange={(e) => setForm({ ...form, revenue: e.target.value })} className={fieldClass} required>
                      <option value="">Select</option>
                      <option>$0 – $1M</option>
                      <option>$1M – $5M</option>
                      <option>$5M – $10M</option>
                      <option>$10M – $25M</option>
                      <option>$25M – $50M</option>
                      <option>$50M – $100M</option>
                      <option>$100M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">EBITDA Range</label>
                    <select value={form.ebitda} onChange={(e) => setForm({ ...form, ebitda: e.target.value })} className={fieldClass} required>
                      <option value="">Select</option>
                      <option>$0 – $1M</option>
                      <option>$1M – $3M</option>
                      <option>$3M – $5M</option>
                      <option>$5M – $10M</option>
                      <option>$10M+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Transaction Timeline</label>
                  <select value={form.timeline} onChange={(e) => setForm({ ...form, timeline: e.target.value })} className={fieldClass} required>
                    <option value="">Select</option>
                    <option>Within 6 months</option>
                    <option>6–12 months</option>
                    <option>1–2 years</option>
                    <option>2–5 years (exit planning)</option>
                  </select>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Email</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={fieldClass} />
                  </div>
                  <div>
                    <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-muted-foreground mb-1 block">Additional Information</label>
                  <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${fieldClass} resize-none`} placeholder="Industry, transaction goals, or any other relevant details..." />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    checked={form.confidentiality}
                    onChange={(e) => setForm({ ...form, confidentiality: e.target.checked })}
                    className="mt-1 accent-primary"
                  />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    I acknowledge that all information submitted will be treated as strictly confidential 
                    and will not be shared with any third party without my explicit written consent.
                  </p>
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Submit Confidential Inquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
