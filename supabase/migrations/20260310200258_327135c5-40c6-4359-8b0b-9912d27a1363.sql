-- Create a public storage bucket for guide PDFs
INSERT INTO storage.buckets (id, name, public)
VALUES ('guides', 'guides', true);

-- Allow anyone to read guide files
CREATE POLICY "Anyone can read guides"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'guides');

-- Allow admins to manage guide files
CREATE POLICY "Admins can manage guides"
ON storage.objects
FOR ALL
TO authenticated
USING (bucket_id = 'guides' AND public.has_role(auth.uid(), 'admin'))
WITH CHECK (bucket_id = 'guides' AND public.has_role(auth.uid(), 'admin'));