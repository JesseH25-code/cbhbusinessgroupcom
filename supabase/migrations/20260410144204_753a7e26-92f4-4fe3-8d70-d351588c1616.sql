ALTER TABLE public.buyer_submissions
ADD COLUMN revenue_ranges text[] DEFAULT '{}',
ADD COLUMN ebitda_ranges text[] DEFAULT '{}';