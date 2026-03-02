
-- Create opportunities table for active deal listings
CREATE TABLE public.opportunities (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  sector TEXT NOT NULL,
  location TEXT NOT NULL,
  revenue_range TEXT NOT NULL,
  ebitda_range TEXT,
  description TEXT NOT NULL,
  highlights TEXT[] DEFAULT '{}'::text[],
  status TEXT NOT NULL DEFAULT 'active',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.opportunities ENABLE ROW LEVEL SECURITY;

-- Anyone can read active opportunities
CREATE POLICY "Anyone can read active opportunities"
ON public.opportunities
FOR SELECT
USING (status = 'active');

-- Authenticated users can manage opportunities
CREATE POLICY "Authenticated users can manage opportunities"
ON public.opportunities
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Trigger for updated_at
CREATE TRIGGER update_opportunities_updated_at
BEFORE UPDATE ON public.opportunities
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
