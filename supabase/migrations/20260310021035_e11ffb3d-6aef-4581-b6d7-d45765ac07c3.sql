CREATE TABLE public.buyer_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  firm text NOT NULL,
  email text NOT NULL,
  buyer_type text NOT NULL,
  criteria text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.buyer_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts" ON public.buyer_submissions
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can read submissions" ON public.buyer_submissions
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::app_role));