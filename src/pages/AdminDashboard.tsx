import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { BarChart3, FileText, Users, Mail, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalBlogPosts: 0,
    publishedPosts: 0,
    contactSubmissions: 0,
    buyerSubmissions: 0,
    activeOpportunities: 0,
    recentContacts: [] as any[],
    recentBuyers: [] as any[],
    recentPosts: [] as any[],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { navigate("/admin"); return; }
      const { data: roleData } = await supabase.rpc("has_role", { _user_id: session.user.id, _role: "admin" });
      if (!roleData) { navigate("/admin"); return; }
      fetchStats();
    };
    checkAuth();
  }, [navigate]);

  const fetchStats = async () => {
    const [blogRes, publishedRes, contactRes, buyerRes, oppRes, recentContactRes, recentBuyerRes, recentPostRes] = await Promise.all([
      supabase.from("blog_posts").select("id", { count: "exact", head: true }),
      supabase.from("blog_posts").select("id", { count: "exact", head: true }).eq("published", true),
      supabase.from("contact_submissions").select("id", { count: "exact", head: true }),
      supabase.from("buyer_submissions").select("id", { count: "exact", head: true }),
      supabase.from("opportunities").select("id", { count: "exact", head: true }).eq("status", "active"),
      supabase.from("contact_submissions").select("*").order("created_at", { ascending: false }).limit(5),
      supabase.from("buyer_submissions").select("*").order("created_at", { ascending: false }).limit(5),
      supabase.from("blog_posts").select("title, slug, created_at, published").order("created_at", { ascending: false }).limit(5),
    ]);

    setStats({
      totalBlogPosts: blogRes.count || 0,
      publishedPosts: publishedRes.count || 0,
      contactSubmissions: contactRes.count || 0,
      buyerSubmissions: buyerRes.count || 0,
      activeOpportunities: oppRes.count || 0,
      recentContacts: recentContactRes.data || [],
      recentBuyers: recentBuyerRes.data || [],
      recentPosts: recentPostRes.data || [],
    });
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading dashboard...</p>
      </div>
    );
  }

  const statCards = [
    { label: "Seller Leads", value: stats.contactSubmissions, icon: Mail, color: "text-primary" },
    { label: "Buyer Registrations", value: stats.buyerSubmissions, icon: Users, color: "text-primary" },
    { label: "Published Posts", value: stats.publishedPosts, icon: FileText, color: "text-primary" },
    { label: "Active Opportunities", value: stats.activeOpportunities, icon: TrendingUp, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-secondary px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-5 h-5 text-primary" />
            <h1 className="font-serif text-lg text-foreground">Admin Dashboard</h1>
          </div>
          <div className="flex gap-3 text-sm">
            <Link to="/admin/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link to="/admin/opportunities" className="text-muted-foreground hover:text-foreground transition-colors">Opportunities</Link>
            <button onClick={async () => { await supabase.auth.signOut(); navigate("/admin"); }} className="text-muted-foreground hover:text-foreground transition-colors">Logout</button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {statCards.map((s) => (
            <div key={s.label} className="bg-card border border-border p-5">
              <div className="flex items-center justify-between mb-2">
                <s.icon className={`w-5 h-5 ${s.color}`} strokeWidth={1.5} />
              </div>
              <p className="font-serif text-2xl text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Recent Seller Leads */}
          <div className="bg-card border border-border p-6">
            <h2 className="font-serif text-foreground mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" /> Recent Seller Leads
            </h2>
            {stats.recentContacts.length === 0 ? (
              <p className="text-sm text-muted-foreground">No submissions yet.</p>
            ) : (
              <div className="space-y-3">
                {stats.recentContacts.map((c: any) => (
                  <div key={c.id} className="border-b border-border pb-3 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-foreground font-medium">{c.company}</p>
                        <p className="text-xs text-muted-foreground">{c.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-primary">{c.revenue} rev · {c.ebitda} EBITDA</p>
                        <p className="text-xs text-muted-foreground">{c.timeline}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Buyer Registrations */}
          <div className="bg-card border border-border p-6">
            <h2 className="font-serif text-foreground mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" /> Recent Buyer Registrations
            </h2>
            {stats.recentBuyers.length === 0 ? (
              <p className="text-sm text-muted-foreground">No registrations yet.</p>
            ) : (
              <div className="space-y-3">
                {stats.recentBuyers.map((b: any) => (
                  <div key={b.id} className="border-b border-border pb-3 last:border-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-foreground font-medium">{b.name}</p>
                        <p className="text-xs text-muted-foreground">{b.firm} · {b.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-primary">{b.buyer_type}</p>
                        <p className="text-xs text-muted-foreground max-w-[200px] truncate">{b.criteria}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Blog Posts */}
          <div className="bg-card border border-border p-6 lg:col-span-2">
            <h2 className="font-serif text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" /> Recent Blog Posts
            </h2>
            <div className="space-y-2">
              {stats.recentPosts.map((p: any) => (
                <div key={p.slug} className="flex items-center justify-between border-b border-border pb-2 last:border-0">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">{p.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(p.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </p>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded ml-3 ${p.published ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"}`}>
                    {p.published ? "Published" : "Draft"}
                  </span>
                </div>
              ))}
            </div>
            <Link to="/admin/blog" className="inline-flex items-center gap-1 text-xs text-primary mt-4 hover:underline">
              Manage all posts <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
