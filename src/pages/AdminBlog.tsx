import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Plus, Edit2, Trash2, LogOut, ArrowLeft } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  cover_image_url: string | null;
  author: string;
  published: boolean;
  meta_description: string | null;
  tags: string[] | null;
  created_at: string;
  updated_at: string;
}

const generateSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const AdminBlog = () => {
  const [session, setSession] = useState<any>(null);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image_url: "",
    author: "CBH Business Group",
    published: false,
    meta_description: "",
    tags: "",
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

  const { data: posts, isLoading } = useQuery({
    queryKey: ["admin-blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data as BlogPost[];
    },
    enabled: !!session,
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      const payload = {
        title: form.title,
        slug: form.slug,
        excerpt: form.excerpt,
        content: form.content,
        cover_image_url: form.cover_image_url || null,
        author: form.author,
        published: form.published,
        meta_description: form.meta_description || null,
        tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      };
      if (editing) {
        const { error } = await supabase.from("blog_posts").update(payload).eq("id", editing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("blog_posts").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast({ title: editing ? "Post updated" : "Post created" });
      queryClient.invalidateQueries({ queryKey: ["admin-blog-posts"] });
      resetForm();
    },
    onError: (e: any) => toast({ title: "Error", description: e.message, variant: "destructive" }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast({ title: "Post deleted" });
      queryClient.invalidateQueries({ queryKey: ["admin-blog-posts"] });
    },
  });

  const resetForm = () => {
    setEditing(null);
    setCreating(false);
    setForm({ title: "", slug: "", excerpt: "", content: "", cover_image_url: "", author: "CBH Business Group", published: false, meta_description: "", tags: "" });
  };

  const startEdit = (post: BlogPost) => {
    setEditing(post);
    setCreating(true);
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      cover_image_url: post.cover_image_url || "",
      author: post.author,
      published: post.published,
      meta_description: post.meta_description || "",
      tags: post.tags?.join(", ") || "",
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
        <h1 className="font-serif text-lg text-foreground">Blog Admin</h1>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate("/admin/opportunities")}>
            Opportunities
          </Button>
          <Button variant="ghost" size="sm" onClick={() => navigate("/blog")}>
            <ArrowLeft className="w-4 h-4 mr-1" /> View Blog
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
              <h2 className="font-serif text-xl text-foreground">{editing ? "Edit Post" : "New Post"}</h2>
              <Button variant="ghost" size="sm" onClick={resetForm}>Cancel</Button>
            </div>
            <form
              onSubmit={(e) => { e.preventDefault(); saveMutation.mutate(); }}
              className="space-y-5"
            >
              <div>
                <Label>Title</Label>
                <Input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value, slug: editing ? form.slug : generateSlug(e.target.value) })}
                  required
                />
              </div>
              <div>
                <Label>Slug</Label>
                <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required />
              </div>
              <div>
                <Label>Excerpt (shown on listing)</Label>
                <Textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} required rows={2} />
              </div>
              <div>
                <Label>Content (HTML)</Label>
                <Textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required rows={14} className="font-mono text-xs" />
              </div>
              <div>
                <Label>Cover Image URL</Label>
                <Input value={form.cover_image_url} onChange={(e) => setForm({ ...form, cover_image_url: e.target.value })} placeholder="https://..." />
              </div>
              <div>
                <Label>Author</Label>
                <Input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} />
              </div>
              <div>
                <Label>Tags (comma-separated)</Label>
                <Input value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} placeholder="Valuation, Exit Planning" />
              </div>
              <div>
                <Label>Meta Description (SEO)</Label>
                <Textarea value={form.meta_description} onChange={(e) => setForm({ ...form, meta_description: e.target.value })} rows={2} />
              </div>
              <div className="flex items-center gap-3">
                <Switch checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} />
                <Label>Published</Label>
              </div>
              <Button type="submit" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? "Saving..." : editing ? "Update Post" : "Create Post"}
              </Button>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-xl text-foreground">All Posts</h2>
              <Button size="sm" onClick={() => setCreating(true)}>
                <Plus className="w-4 h-4 mr-1" /> New Post
              </Button>
            </div>
            {isLoading ? (
              <p className="text-muted-foreground">Loading…</p>
            ) : posts && posts.length > 0 ? (
              <div className="space-y-3">
                {posts.map((post) => (
                  <div key={post.id} className="bg-card border border-border p-4 flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-foreground font-medium truncate">{post.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {format(new Date(post.created_at), "MMM d, yyyy")} · {post.published ? "Published" : "Draft"}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Button variant="ghost" size="icon" onClick={() => startEdit(post)}>
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          if (confirm("Delete this post?")) deleteMutation.mutate(post.id);
                        }}
                      >
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-12">No posts yet. Create your first one.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminBlog;
