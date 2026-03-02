import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactForm {
  company: string;
  revenue: string;
  ebitda: string;
  timeline: string;
  email: string;
  phone?: string;
  message?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ContactForm = await req.json();

    // Validate required fields
    if (!body.company || !body.revenue || !body.ebitda || !body.timeline || !body.email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Store in database
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error: dbError } = await supabase.from("contact_submissions").insert({
      company: body.company,
      revenue: body.revenue,
      ebitda: body.ebitda,
      timeline: body.timeline,
      email: body.email,
      phone: body.phone || null,
      message: body.message || null,
    });

    if (dbError) {
      console.error("Database error:", dbError);
    }

    // Send email notification via Supabase's built-in email (using Edge Function email)
    const emailHtml = `
      <h2>New Confidential Inquiry — CBH Advisory</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Company</td><td style="padding:8px;border-bottom:1px solid #ddd;">${body.company}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Revenue</td><td style="padding:8px;border-bottom:1px solid #ddd;">${body.revenue}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">EBITDA</td><td style="padding:8px;border-bottom:1px solid #ddd;">${body.ebitda}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Timeline</td><td style="padding:8px;border-bottom:1px solid #ddd;">${body.timeline}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border-bottom:1px solid #ddd;">${body.email}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Phone</td><td style="padding:8px;border-bottom:1px solid #ddd;">${body.phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${body.message || "No additional details"}</td></tr>
      </table>
    `;

    // Use Resend API to send email
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    
    if (RESEND_API_KEY) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "CBH Business Group <inquiries@cbhbusinessgroup.com>",
          to: ["jesse@cbhadvisory.com"],
          subject: `New Inquiry: ${body.company}`,
          html: emailHtml,
          reply_to: body.email,
        }),
      });

      if (!emailRes.ok) {
        const errText = await emailRes.text();
        console.error("Email send error:", errText);
      }
    } else {
      console.log("RESEND_API_KEY not set — email not sent, but submission saved to database.");
    }

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
