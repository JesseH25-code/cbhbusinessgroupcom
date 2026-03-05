
-- 1. Add SELECT policy to contact_submissions for authenticated users only
CREATE POLICY "Authenticated users can read submissions"
ON public.contact_submissions
FOR SELECT
TO authenticated
USING (true);

-- 2. Drop overly permissive ALL policies on blog_posts and opportunities, replace with role-scoped ones
DROP POLICY IF EXISTS "Authenticated users can manage posts" ON public.blog_posts;
CREATE POLICY "Authenticated users can manage posts"
ON public.blog_posts
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated users can manage opportunities" ON public.opportunities;
CREATE POLICY "Authenticated users can manage opportunities"
ON public.opportunities
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
