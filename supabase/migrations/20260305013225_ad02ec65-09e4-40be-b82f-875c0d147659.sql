
-- Remove the overly broad SELECT policy on contact_submissions
DROP POLICY IF EXISTS "Authenticated users can read submissions" ON public.contact_submissions;
