import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit2, Trash2, LogOut, ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Opportunity {
  id: string;
  title: string;
  sector: string;
  location: string;
  revenue_range: string;
  ebitda_range: string | null;
  description: string;
  highlights: string[] | null;
  status: string;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

const AdminOpportunities = () => {
  const [session, setSession] = useState<any>(null);
  const [editing, setEditing] = useState<Opportunity | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({
    title: "",
    sector: "",
    location: "",
    revenue_range: "",
    ebitda_range: "",
    description: "",
    highlights: "",
    status: "active",
    sort_order: "0",
  });
  const navigate = useNavigate();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (!session) navigate("/admin");
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) navigate("/admin");
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const { data: opportunities, isLoading } = useQuery({
    queryKey: ["admin-opportunities"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("opportunities")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data as Opportunity[];
    },
    enabled: !!session,
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        title: form.title,
        sector: form.sector,
        location: form.location,
        revenue_range: form.revenue_range,
        ebitda_range: form.ebitda_range || null,
        description: form.description,
        highlights: form.highlights ? form.highlights.split("\n").map(h => h.trim()).filter(Boolean) : [],
        status: form.status,
        sort_order: parseInt(form.sort_order) || 0,
      };
      if (editing) {
        const { error } = await supabase.from("opportunities").update(payload).eq("id", editing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("opportunities").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast({ title: editing ? "Opportunity updated" : "Opportunity created" });
      queryClient.invalidateQueries({ queryKey: ["admin-opportunities"] });
      resetForm();
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("opportunities").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast({ title: "Opportunity deleted" });
      queryClient.invalidateQueries({ queryKey: ["admin-opportunities"] });
    },
  });

  const resetForm = () => {
    setEditing(null);
    setCreating(false);
    setForm({ title: "", sector: "", location: "", revenue_range: "", ebitda_range: "", description: "", highlights: "", status: "active", sort_order: "0" });
  };

  const startEdit = (opp: Opportunity) => {
    setEditing(opp);
    setCreating(true);
    setForm({
      title: opp.title,
      sector: opp.sector,
      location: opp.location,
      revenue_range: opp.revenue_range,
      ebitda_range: opp.ebitda_range || "",
      description: opp.description,
      highlights: opp.highlights?.join("\n") || "",
      status: opp.status,
      sort_order: String(opp.sort_order),
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (!session) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card px-6 py-4 flex items-center justify-between">
        <h1 className="font-serif text-lg text-foreground">Opportunities Admin</h1>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate("/admin/blog")}>
            <ArrowLeft className="w-4 h-4 mr-1" /> Blog Admin
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/opportunities")}>
            View Listings
          </Button>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-1" /> Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 max-w-4xl">
        {creating ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-foreground">{editing ? "Edit Opportunity" : "New Opportunity"}</h2>
              <Button variant="ghost" size="sm" onClick={resetForm}>Cancel</Button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); saveMutation.mutate(); }} className="space-y-5">
              <div>
                <Label>Title (e.g. "Regional HVAC Services Platform")</Label>
                <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Sector</Label>
                  <Input value={form.sector} onChange={(e) => setForm({ ...form, sector: e.target.value })} required placeholder="e.g. Business Services" />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required placeholder="e.g. Southeast U.S." />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Revenue Range</Label>
                  <Input value={form.revenue_range} onChange={(e) => setForm({ ...form, revenue_range: e.target.value })} required placeholder="e.g. $8M – $12M" />
                </div>
                <div>
                  <Label>EBITDA Range (optional)</Label>
                  <Input value={form.ebitda_range} onChange={(e) => setForm({ ...form, ebitda_range: e.target.value })} placeholder="e.g. $1.5M – $2M" />
                </div>
              </div>
              <div>
                <Label>Description</Label>
                <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required rows={4} placeholder="Brief, confidential description of the opportunity..." />
              </div>
              <div>
                <Label>Highlights (one per line)</Label>
                <Textarea value={form.highlights} onChange={(e) => setForm({ ...form, highlights: e.target.value })} rows={4} placeholder={"20+ years operating history\nDiversified customer base\nStrong recurring revenue"} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Status</Label>
                  <Select value={form.status} onValueChange={(v) => setForm({ ...form, status: v })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="under_loi">Under LOI</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                      <SelectItem value="withdrawn">Withdrawn</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Sort Order</Label>
                  <Input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} />
                </div>
              </div>
              <Button type="submit" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? "Saving..." : editing ? "Update Opportunity" : "Create Opportunity"}
              </Button>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-foreground">All Opportunities</h2>
              <Button size="sm" onClick={() => setCreating(true)}>
                <Plus className="w-4 h-4 mr-1" /> New Opportunity
              </Button>
            </div>
            {isLoading ? (
              <p className="text-muted-foreground">Loading…</p>
            ) : opportunities && opportunities.length > 0 ? (
              <div className="space-y-3">
                {opportunities.map((opp) => (
                  <div key={opp.id} className="bg-card border border-border p-4 flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-foreground font-medium truncate">{opp.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {opp.sector} · {opp.location} · {opp.revenue_range} · 
                        <span className={opp.status === "active" ? " text-green-400" : " text-muted-foreground"}>
                          {" "}{opp.status.replace("_", " ").toUpperCase()}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button variant="ghost" size="icon" onClick={() => startEdit(opp)}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          if (confirm("Delete this opportunity?")) deleteMutation.mutate(opp.id);
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-12">No opportunities yet. Create your first listing.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOpportunities;
