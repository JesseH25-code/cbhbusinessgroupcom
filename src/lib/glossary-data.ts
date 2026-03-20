export interface GlossaryTermData {
  slug: string;
  term: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroDescription: string;
  definition: string;
  sections: { heading: string; content: string }[];
  faqs: { q: string; a: string }[];
  relatedTerms: { to: string; title: string }[];
  relatedPages: { to: string; title: string; subtitle: string }[];
}

export const glossaryTerms: GlossaryTermData[] = [
  {
    slug: "asset-sale-vs-stock-sale",
    term: "Asset Sale vs. Stock Sale",
    metaTitle: "Asset Sale vs Stock Sale | Key Differences Explained",
    metaDescription: "Understand the critical differences between asset sales and stock sales in M&A transactions. Tax implications, liability transfer, and which structure works best for your deal.",
    heroHeading: "Asset Sale vs. Stock Sale: What Business Owners Need to Know",
    heroDescription: "The deal structure you choose — asset sale or stock sale — can have six- or seven-figure implications on your after-tax proceeds. Understanding the differences is essential before entering any M&A transaction.",
    definition: "In an asset sale, the buyer purchases specific assets and liabilities of the business (equipment, contracts, inventory, goodwill). In a stock sale, the buyer purchases the owner's shares, acquiring the entire entity including all assets, liabilities, contracts, and obligations.",
    sections: [
      { heading: "How Asset Sales Work", content: "In an asset sale, the buyer selects which assets to acquire — typically equipment, inventory, intellectual property, customer lists, and goodwill. The seller retains the legal entity and any liabilities not explicitly assumed by the buyer. The purchase price is allocated across asset classes, which affects depreciation schedules and tax treatment for both parties. Asset sales are more common in lower middle market transactions and are generally preferred by buyers because they can 'step up' the tax basis of acquired assets and avoid inheriting unknown liabilities." },
      { heading: "How Stock Sales Work", content: "In a stock sale, the buyer acquires the seller's ownership interest (shares or membership units) in the entity. The company itself doesn't change — it retains all assets, liabilities, contracts, permits, and licenses. Stock sales are simpler from an operational standpoint because contracts and relationships don't need to be reassigned. However, buyers inherit all liabilities, including unknown or contingent ones, which is why thorough due diligence is critical." },
      { heading: "Tax Implications", content: "For sellers, stock sales are often preferable because proceeds are typically taxed at long-term capital gains rates. In an asset sale, the allocation of purchase price across asset categories can result in a portion being taxed as ordinary income (e.g., depreciation recapture on equipment). For buyers, asset sales are generally preferred because they can depreciate or amortize the stepped-up basis of acquired assets, creating tax shields that improve after-tax returns." },
      { heading: "Which Structure Is Right for Your Deal?", content: "The optimal structure depends on entity type (C-corp vs. S-corp vs. LLC), the relative tax positions of buyer and seller, the nature of the business's contracts and licenses, and the liability profile. In many lower middle market transactions, the structure becomes a negotiation point — buyers prefer asset sales, sellers prefer stock sales, and the purchase price may be adjusted to bridge the gap. An experienced M&A advisor can model both scenarios to determine the net economic impact." },
    ],
    faqs: [
      { q: "Which is better for sellers — asset sale or stock sale?", a: "Stock sales are generally more tax-efficient for sellers because proceeds are taxed at capital gains rates. However, the optimal structure depends on your entity type, tax basis, and the specific deal terms. An M&A advisor can model both scenarios to determine your best outcome." },
      { q: "Why do buyers prefer asset sales?", a: "Buyers prefer asset sales because they can select specific assets, avoid inheriting unknown liabilities, and 'step up' the tax basis of acquired assets for future depreciation deductions. This structure gives buyers more control and tax advantages." },
      { q: "Can the deal structure affect the purchase price?", a: "Yes. Because the tax implications differ significantly between structures, the purchase price is often adjusted to account for the tax impact on the disadvantaged party. This is a common negotiation point in M&A transactions." },
    ],
    relatedTerms: [
      { to: "/glossary/due-diligence-checklist", title: "Due Diligence Checklist" },
      { to: "/glossary/working-capital-adjustment", title: "Working Capital Adjustment" },
      { to: "/glossary/purchase-agreement", title: "Purchase Agreement" },
    ],
    relatedPages: [
      { to: "/how-to-sell-a-business", title: "How to Sell a Business", subtitle: "Complete selling guide" },
      { to: "/seller-financing-explained", title: "Seller Financing", subtitle: "Financing structures" },
      { to: "/business-valuation", title: "Business Valuation", subtitle: "Valuation services" },
    ],
  },
  {
    slug: "letter-of-intent",
    term: "Letter of Intent (LOI)",
    metaTitle: "Letter of Intent (LOI) in M&A | What You Need to Know",
    metaDescription: "Learn what a Letter of Intent means in M&A transactions, what it should include, and how to negotiate key terms. Expert guidance for business owners.",
    heroHeading: "Letter of Intent (LOI): The Critical First Step in M&A",
    heroDescription: "A Letter of Intent sets the framework for your entire deal. Understanding its components, binding vs. non-binding provisions, and negotiation leverage points is essential to protecting your interests.",
    definition: "A Letter of Intent (LOI) is a document outlining the preliminary terms and conditions of a proposed acquisition. It typically includes the purchase price, deal structure, key contingencies, exclusivity period, and timeline. While most provisions are non-binding, certain clauses — like exclusivity and confidentiality — are typically binding.",
    sections: [
      { heading: "Key Components of an LOI", content: "A well-structured LOI includes: the proposed purchase price and how it was determined, deal structure (asset vs. stock sale), payment terms (cash at closing, seller financing, earnouts), key assumptions about working capital, a due diligence timeline and scope, exclusivity/no-shop period, conditions to closing, representations and warranties overview, and employment or transition requirements for the seller." },
      { heading: "Binding vs. Non-Binding Provisions", content: "Most LOI provisions are non-binding — meaning either party can walk away before signing a definitive agreement. However, certain clauses are typically binding: exclusivity (preventing the seller from soliciting other offers during a specified period), confidentiality obligations, responsibility for transaction costs, and governing law provisions. Understanding which terms bind you is critical before signing." },
      { heading: "The Exclusivity Period", content: "The exclusivity (or 'no-shop') clause prevents the seller from entertaining competing offers for a defined period — typically 60 to 120 days. This gives the buyer time to conduct due diligence without competitive pressure. Sellers should negotiate the shortest reasonable exclusivity period with clear milestones and termination rights if the buyer fails to progress." },
      { heading: "Negotiating the LOI", content: "The LOI stage is where sellers have the most leverage — before exclusivity locks them into a single buyer. Key negotiation points include: purchase price and valuation methodology, working capital targets, earnout structures and triggers, seller transition requirements, and the scope of representations and warranties. Having an experienced M&A advisor at this stage can significantly impact your final deal economics." },
    ],
    faqs: [
      { q: "Is a Letter of Intent legally binding?", a: "Most provisions in an LOI are non-binding, meaning either party can walk away. However, certain clauses like exclusivity, confidentiality, and expense allocation are typically binding. Always have legal counsel review before signing." },
      { q: "How long does the LOI stage last?", a: "The LOI itself can be negotiated in 1-3 weeks. The exclusivity period it creates typically runs 60-120 days, during which due diligence and definitive agreement negotiations occur." },
      { q: "Should I sign an LOI without an M&A advisor?", a: "It's strongly recommended to have an M&A advisor before signing an LOI. The LOI sets the framework for the entire deal, and terms agreed at this stage are difficult to renegotiate later. An advisor ensures you don't leave value on the table." },
    ],
    relatedTerms: [
      { to: "/glossary/due-diligence-checklist", title: "Due Diligence Checklist" },
      { to: "/glossary/purchase-agreement", title: "Purchase Agreement" },
      { to: "/glossary/earnout", title: "Earnout" },
    ],
    relatedPages: [
      { to: "/how-to-sell-a-business", title: "How to Sell a Business", subtitle: "Complete selling guide" },
      { to: "/business-broker-vs-ma-advisor", title: "Broker vs. M&A Advisor", subtitle: "Choosing representation" },
      { to: "/contact", title: "Get Expert Guidance", subtitle: "Confidential consultation" },
    ],
  },
  {
    slug: "due-diligence-checklist",
    term: "Due Diligence Checklist",
    metaTitle: "M&A Due Diligence Checklist | Complete Guide for Sellers",
    metaDescription: "Comprehensive due diligence checklist for M&A transactions. Know what buyers will examine and how to prepare your business for scrutiny.",
    heroHeading: "M&A Due Diligence Checklist: What Buyers Will Examine",
    heroDescription: "Due diligence is where deals are made or broken. Knowing what buyers will scrutinize — and preparing for it in advance — can mean the difference between a smooth closing and a failed transaction.",
    definition: "Due diligence is the comprehensive investigation a buyer conducts after signing a Letter of Intent. It covers financial records, legal matters, operations, customers, employees, contracts, intellectual property, and regulatory compliance. The goal is to verify the seller's representations and identify risks that could affect valuation or deal terms.",
    sections: [
      { heading: "Financial Due Diligence", content: "Buyers will examine 3-5 years of financial statements, tax returns, accounts receivable/payable aging, revenue by customer, gross margin analysis, working capital trends, capital expenditure history, and debt schedules. They'll look for add-backs, owner adjustments, and one-time items that affect normalized EBITDA. A Quality of Earnings (QoE) report from an independent accounting firm is standard in transactions above $5M." },
      { heading: "Legal & Compliance Due Diligence", content: "This covers corporate formation documents, contracts (customer, vendor, lease, employment), pending or threatened litigation, regulatory compliance history, permits and licenses, intellectual property registrations, and insurance policies. Any material legal issues discovered can delay closing or trigger purchase price adjustments." },
      { heading: "Operational Due Diligence", content: "Buyers assess the business's operational infrastructure: key processes and SOPs, technology systems, supply chain dependencies, facility conditions, equipment maintenance records, and organizational structure. They're evaluating whether the business can operate independently of the owner and scale under new management." },
      { heading: "Customer & Market Due Diligence", content: "Customer concentration is one of the biggest deal-killers in M&A. Buyers analyze revenue by customer, contract terms, renewal rates, customer acquisition costs, churn, and competitive positioning. If any single customer represents more than 15-20% of revenue, expect heightened scrutiny and potential risk-mitigation structures like earnouts." },
      { heading: "How to Prepare", content: "Start preparing 12-18 months before going to market. Organize a virtual data room with all documents categorized. Address known issues proactively — resolve pending legal matters, clean up financial records, document key processes, and reduce customer concentration where possible. Sellers who are well-prepared experience faster closings, fewer purchase price reductions, and stronger negotiating positions." },
    ],
    faqs: [
      { q: "How long does due diligence take?", a: "Due diligence typically takes 60-90 days for lower middle market transactions ($3M–$50M). Complex businesses or those with regulatory requirements may take longer. Well-prepared sellers can accelerate the timeline significantly." },
      { q: "What kills deals during due diligence?", a: "Common deal-killers include undisclosed liabilities, customer concentration above 20%, declining financial trends, key person dependency, regulatory non-compliance, and significant discrepancies between represented and actual financial performance." },
      { q: "Should I prepare a data room before going to market?", a: "Absolutely. Having a well-organized virtual data room ready before engaging buyers demonstrates professionalism, accelerates the process, and reduces the risk of deal fatigue. An M&A advisor can provide a detailed data room checklist." },
    ],
    relatedTerms: [
      { to: "/glossary/quality-of-earnings", title: "Quality of Earnings Report" },
      { to: "/glossary/letter-of-intent", title: "Letter of Intent (LOI)" },
      { to: "/glossary/working-capital-adjustment", title: "Working Capital Adjustment" },
    ],
    relatedPages: [
      { to: "/how-to-sell-a-business", title: "How to Sell a Business", subtitle: "Complete selling guide" },
      { to: "/business-valuation", title: "Business Valuation", subtitle: "Valuation services" },
      { to: "/sell-business-florida", title: "Sell a Business in Florida", subtitle: "Florida M&A advisory" },
    ],
  },
  {
    slug: "quality-of-earnings",
    term: "Quality of Earnings (QoE) Report",
    metaTitle: "Quality of Earnings Report | What Sellers Need to Know",
    metaDescription: "Understand Quality of Earnings reports in M&A — what they analyze, why buyers require them, and how to prepare. Expert M&A guidance for business owners.",
    heroHeading: "Quality of Earnings Reports: The Buyer's Verification Tool",
    heroDescription: "A Quality of Earnings report is the financial magnifying glass buyers use to verify your EBITDA. Understanding what it examines — and preparing for it — can prevent surprises that derail your deal.",
    definition: "A Quality of Earnings (QoE) report is an independent financial analysis conducted by a third-party accounting firm during due diligence. It verifies the seller's reported earnings, adjusts for non-recurring items, analyzes revenue sustainability, and establishes a normalized EBITDA baseline that both parties use for valuation and deal pricing.",
    sections: [
      { heading: "What a QoE Report Analyzes", content: "A QoE report goes far beyond a standard audit. It examines revenue quality (recurring vs. one-time), customer concentration, gross margin trends, working capital requirements, owner add-backs and adjustments, non-recurring expenses and income, accounting policy consistency, and revenue recognition practices. The output is a 'normalized' or 'adjusted' EBITDA figure that both buyer and seller use as the basis for valuation." },
      { heading: "Sell-Side vs. Buy-Side QoE", content: "A sell-side QoE is commissioned by the seller before going to market. It identifies and addresses potential issues proactively, establishes a defensible EBITDA figure, and demonstrates financial sophistication to buyers. A buy-side QoE is commissioned by the buyer during due diligence to verify the seller's numbers. Having a sell-side QoE prepared can reduce the likelihood of surprises during the buy-side analysis." },
      { heading: "Common QoE Adjustments", content: "Typical adjustments include: above- or below-market owner compensation, personal expenses run through the business, one-time legal or consulting fees, non-recurring revenue or expenses, related-party transactions at non-market rates, and changes in accounting methods. The goal is to present what the business would earn under normalized, arms-length operations." },
      { heading: "Impact on Deal Value", content: "The QoE directly impacts deal value because it establishes the EBITDA figure to which the valuation multiple is applied. A QoE that confirms or increases stated EBITDA strengthens the seller's position. Conversely, a QoE that reveals overstated earnings typically leads to purchase price reductions or deal renegotiation. This is why proactive preparation is essential." },
    ],
    faqs: [
      { q: "How much does a Quality of Earnings report cost?", a: "QoE reports for businesses in the $3M–$50M range typically cost $25,000–$75,000 depending on complexity. While this seems significant, the investment protects against much larger purchase price adjustments or deal failures." },
      { q: "Should sellers get their own QoE before going to market?", a: "For businesses valued above $5M, a sell-side QoE is strongly recommended. It helps establish a defensible EBITDA, identifies issues before buyers find them, and demonstrates financial credibility that can accelerate the deal process." },
      { q: "What if the QoE shows lower EBITDA than reported?", a: "If the QoE identifies legitimate adjustments that reduce EBITDA, the purchase price will likely be renegotiated. This is why proactive preparation and a sell-side QoE are so valuable — they let you address issues before they become negotiation leverage for the buyer." },
    ],
    relatedTerms: [
      { to: "/glossary/due-diligence-checklist", title: "Due Diligence Checklist" },
      { to: "/what-is-ebitda", title: "What Is EBITDA?" },
      { to: "/glossary/working-capital-adjustment", title: "Working Capital Adjustment" },
    ],
    relatedPages: [
      { to: "/business-valuation", title: "Business Valuation", subtitle: "Valuation services" },
      { to: "/business-valuation-calculator-florida", title: "Valuation Calculator", subtitle: "Estimate your value" },
      { to: "/florida-ma-benchmarks", title: "Florida M&A Benchmarks", subtitle: "Industry multiples" },
    ],
  },
  {
    slug: "working-capital-adjustment",
    term: "Working Capital Adjustment",
    metaTitle: "Working Capital Adjustment in M&A | How It Affects Your Deal",
    metaDescription: "Learn how working capital adjustments work in M&A transactions, how the peg is calculated, and how to protect your proceeds at closing.",
    heroHeading: "Working Capital Adjustments: The Hidden Deal Variable",
    heroDescription: "Working capital adjustments are one of the most misunderstood — and financially significant — elements of M&A transactions. A poorly negotiated working capital peg can cost sellers hundreds of thousands at closing.",
    definition: "A working capital adjustment is a mechanism in M&A transactions that ensures the buyer receives the business with a 'normal' level of working capital (current assets minus current liabilities) at closing. The parties agree on a target working capital amount (the 'peg'), and the purchase price is adjusted up or down based on the actual working capital delivered at closing versus the target.",
    sections: [
      { heading: "Why Working Capital Matters", content: "Working capital is the cash a business needs to fund day-to-day operations — accounts receivable, inventory, prepaid expenses, minus accounts payable and accrued liabilities. When a buyer acquires a business, they expect to receive enough working capital to continue normal operations without injecting additional cash. Without a working capital adjustment mechanism, sellers could extract working capital before closing, leaving the buyer short." },
      { heading: "How the Peg Is Calculated", content: "The working capital peg is typically based on the trailing 12-month average of net working capital, though 6-month or 24-month averages are also used. Both parties negotiate which line items to include and exclude (e.g., cash, debt, tax liabilities are usually excluded). The calculation methodology should be clearly defined in the LOI and purchase agreement to avoid disputes." },
      { heading: "The True-Up Process", content: "At closing, estimated working capital is compared to the peg, with a preliminary adjustment to the purchase price. Within 60-90 days post-closing, a final working capital statement is prepared. If actual working capital exceeds the peg, the buyer pays the seller the difference. If it falls short, the seller reimburses the buyer. A collar (typically $25K-$100K) is sometimes used to avoid adjustments for minor variances." },
      { heading: "Protecting Your Proceeds", content: "Sellers should: negotiate a working capital peg based on a period that reflects normal operations (not seasonal peaks), clearly define included/excluded line items, understand the impact of timing on accounts receivable collections and payable payments near closing, and have their M&A advisor model various scenarios to anticipate the adjustment amount." },
    ],
    faqs: [
      { q: "What happens if working capital is below the target at closing?", a: "If actual working capital at closing falls below the agreed-upon peg, the purchase price is reduced by the shortfall amount. This is why understanding and managing working capital in the months leading up to closing is critical." },
      { q: "Can working capital disputes kill a deal?", a: "Working capital disagreements rarely kill deals outright but can cause significant closing delays and post-closing disputes. Clear definitions and calculation methodologies in the purchase agreement minimize this risk." },
      { q: "How much does the working capital adjustment typically affect the price?", a: "For businesses in the $3M–$50M range, working capital adjustments typically range from $50K to $500K. The impact depends on the seasonality of the business, payment terms, and how well the seller manages working capital through closing." },
    ],
    relatedTerms: [
      { to: "/glossary/quality-of-earnings", title: "Quality of Earnings Report" },
      { to: "/glossary/purchase-agreement", title: "Purchase Agreement" },
      { to: "/glossary/due-diligence-checklist", title: "Due Diligence Checklist" },
    ],
    relatedPages: [
      { to: "/what-is-ebitda", title: "What Is EBITDA?", subtitle: "EBITDA explained" },
      { to: "/how-to-sell-a-business", title: "How to Sell a Business", subtitle: "Complete guide" },
      { to: "/business-valuation", title: "Business Valuation", subtitle: "Valuation services" },
    ],
  },
  {
    slug: "earnout",
    term: "Earnout",
    metaTitle: "Earnouts in M&A | How They Work & How to Negotiate",
    metaDescription: "Understand earnout structures in M&A deals — how they bridge valuation gaps, common pitfalls, and negotiation strategies for business sellers.",
    heroHeading: "Earnouts: Bridging the Valuation Gap in M&A",
    heroDescription: "Earnouts tie a portion of your purchase price to future performance. When structured well, they bridge valuation gaps. When structured poorly, they become a source of post-closing conflict.",
    definition: "An earnout is a contractual provision in an M&A transaction where a portion of the purchase price is contingent on the business achieving specified performance targets after closing. Earnouts are used to bridge valuation gaps between buyer and seller expectations, often tied to revenue, EBITDA, or customer retention milestones over a 1-3 year period.",
    sections: [
      { heading: "When Earnouts Are Used", content: "Earnouts are common when buyer and seller disagree on valuation — typically when the seller's growth projections are more optimistic than the buyer's assessment. They're also used in high-growth businesses where future performance is uncertain, when seller involvement is critical post-closing, or when the buyer wants to mitigate risk in a new market or industry." },
      { heading: "Common Earnout Structures", content: "Earnouts can be structured around revenue targets (simpler, harder for buyer to manipulate), EBITDA targets (more comprehensive but subject to accounting interpretation), customer retention rates, or specific milestone achievements. The measurement period typically runs 1-3 years, with payments made annually or upon achievement. The earnout amount in lower middle market deals typically ranges from 10-30% of total consideration." },
      { heading: "Key Negotiation Points", content: "Critical terms to negotiate include: the performance metric (revenue is generally safer for sellers than EBITDA), measurement methodology and accounting standards, the seller's operational authority during the earnout period, protections against buyer actions that could reduce earnout performance (e.g., shifting costs, reducing investment), acceleration triggers, and dispute resolution mechanisms." },
      { heading: "Risks and Pitfalls", content: "The biggest risk for sellers is loss of control. After closing, the buyer controls the business and can make decisions that negatively impact earnout metrics — allocating corporate overhead, reducing marketing spend, or restructuring operations. Sellers should negotiate specific operational covenants and 'deemed earned' provisions that protect against buyer interference. Treat earnout dollars as bonus compensation, not guaranteed proceeds." },
    ],
    faqs: [
      { q: "What percentage of earnouts actually pay out?", a: "Industry studies suggest roughly 60-70% of earnouts result in some payment, but only about 30-40% pay out fully. This underscores the importance of negotiating achievable targets and strong protections against buyer manipulation." },
      { q: "Should I accept an earnout in my deal?", a: "Earnouts can be valuable if they bridge a genuine valuation gap and you retain meaningful operational control. However, minimize the earnout portion of total consideration and ensure metrics are within your control. An experienced M&A advisor can help structure earnouts that maximize your probability of full payment." },
      { q: "How are earnout disputes resolved?", a: "Earnout disputes are typically resolved through a defined dispute resolution process in the purchase agreement — usually starting with an independent accounting firm review, escalating to mediation, then arbitration. Clear measurement definitions and accounting standards in the agreement reduce dispute risk." },
    ],
    relatedTerms: [
      { to: "/glossary/letter-of-intent", title: "Letter of Intent (LOI)" },
      { to: "/glossary/purchase-agreement", title: "Purchase Agreement" },
      { to: "/glossary/asset-sale-vs-stock-sale", title: "Asset Sale vs. Stock Sale" },
    ],
    relatedPages: [
      { to: "/seller-financing-explained", title: "Seller Financing", subtitle: "Financing structures" },
      { to: "/how-to-sell-a-business", title: "How to Sell a Business", subtitle: "Complete selling guide" },
      { to: "/contact", title: "Get Expert Guidance", subtitle: "Confidential consultation" },
    ],
  },
  {
    slug: "purchase-agreement",
    term: "Purchase Agreement (Definitive Agreement)",
    metaTitle: "M&A Purchase Agreement | Key Terms for Business Sellers",
    metaDescription: "Understand the definitive purchase agreement in M&A transactions — key clauses, representations & warranties, indemnification, and what sellers must know before signing.",
    heroHeading: "The Purchase Agreement: Your Deal's Final Blueprint",
    heroDescription: "The definitive purchase agreement is the legally binding document that governs your entire transaction. Every clause matters — from representations and warranties to indemnification caps and survival periods.",
    definition: "The purchase agreement (also called the definitive agreement or acquisition agreement) is the comprehensive, legally binding contract that finalizes an M&A transaction. It supersedes the LOI and contains all deal terms including purchase price, representations and warranties, indemnification provisions, closing conditions, and post-closing obligations.",
    sections: [
      { heading: "Representations and Warranties", content: "Reps and warranties are statements of fact made by both buyer and seller about the business, its operations, and legal status. Seller representations typically cover: accuracy of financial statements, title to assets, compliance with laws, status of contracts, employee matters, tax compliance, and absence of undisclosed liabilities. These representations survive closing and form the basis for indemnification claims." },
      { heading: "Indemnification", content: "The indemnification section defines each party's obligation to compensate the other for losses arising from breaches of representations, warranties, or covenants. Key negotiation points include: indemnification caps (typically 10-20% of purchase price for general reps), deductible baskets (the threshold before claims are payable), survival periods (how long reps remain enforceable — typically 12-24 months), and escrow holdbacks to fund potential claims." },
      { heading: "Closing Conditions", content: "Conditions precedent to closing include: satisfactory completion of due diligence, obtaining required third-party consents, regulatory approvals, absence of material adverse changes, execution of ancillary agreements (employment, non-compete, transition services), and accuracy of representations at closing. Either party can walk away if conditions aren't met." },
      { heading: "Post-Closing Obligations", content: "Common post-closing obligations include: seller transition assistance (typically 3-12 months), non-compete and non-solicitation covenants, working capital true-up procedures, earnout administration, and tax cooperation. Understanding these obligations before signing prevents surprises after you've closed." },
    ],
    faqs: [
      { q: "How long does it take to negotiate a purchase agreement?", a: "Purchase agreement negotiations typically take 4-8 weeks in lower middle market transactions. Complex deals or those with significant regulatory requirements may take longer. Having experienced M&A counsel is essential to protect your interests without creating unnecessary delays." },
      { q: "What is an indemnification escrow?", a: "An escrow holdback is a portion of the purchase price (typically 5-15%) held by a third-party escrow agent for 12-24 months post-closing. It serves as a fund to cover potential indemnification claims. Unclaimed escrow funds are released to the seller after the survival period expires." },
      { q: "Can I negotiate the non-compete terms?", a: "Yes. Non-compete duration (typically 3-5 years), geographic scope, and industry restrictions are all negotiable. Overly broad non-competes can limit future opportunities, so push for reasonable, narrowly defined restrictions that protect the buyer's legitimate interests without unnecessarily restricting your career." },
    ],
    relatedTerms: [
      { to: "/glossary/letter-of-intent", title: "Letter of Intent (LOI)" },
      { to: "/glossary/due-diligence-checklist", title: "Due Diligence Checklist" },
      { to: "/glossary/earnout", title: "Earnout" },
    ],
    relatedPages: [
      { to: "/how-to-sell-a-business", title: "How to Sell a Business", subtitle: "Complete selling guide" },
      { to: "/business-broker-vs-ma-advisor", title: "Broker vs. M&A Advisor", subtitle: "Choosing representation" },
      { to: "/contact", title: "Schedule Consultation", subtitle: "Confidential M&A guidance" },
    ],
  },
  {
    slug: "ebitda-multiples",
    term: "EBITDA Multiples",
    metaTitle: "EBITDA Multiples Explained | Business Valuation Guide",
    metaDescription: "Understand how EBITDA multiples work in business valuation and M&A. Learn what drives multiples higher and how to position your business for a premium valuation.",
    heroHeading: "EBITDA Multiples: How Businesses Are Valued in M&A",
    heroDescription: "Your EBITDA multiple is the single biggest lever in determining your business's sale price. Understanding what drives multiples — and how to improve yours — can add millions to your exit.",
    definition: "An EBITDA multiple is a valuation ratio used in M&A to determine a business's enterprise value. It's calculated as Enterprise Value ÷ EBITDA. For example, a business with $2M in EBITDA valued at a 5x multiple would have an enterprise value of $10M. Multiples vary significantly by industry, size, growth rate, and risk profile.",
    sections: [
      { heading: "How Multiples Are Determined", content: "EBITDA multiples are driven by supply and demand in the M&A market. Key factors include: industry sector (technology and healthcare command higher multiples than service businesses), business size (larger businesses receive higher multiples due to lower risk), growth trajectory, revenue predictability, customer diversification, management depth, and competitive positioning. Multiples also fluctuate with economic cycles and interest rate environments." },
      { heading: "Typical Multiple Ranges by Industry", content: "In the lower middle market ($3M–$50M enterprise value), typical EBITDA multiples include: Technology/SaaS (5x–10x), Healthcare (5x–9x), Manufacturing (4x–7x), HVAC/Mechanical (4x–7x), Construction (3.5x–6x), Professional Services (3x–6x), Landscaping (3.5x–6x), and Restaurants (3x–5x). These ranges are broad because individual company characteristics significantly impact where within the range a business falls." },
      { heading: "What Drives Premium Multiples", content: "Businesses that command premium multiples share common characteristics: recurring revenue (service contracts, subscriptions), low customer concentration (no customer >10-15% of revenue), strong management team that operates independently, consistent revenue and EBITDA growth, defensible market position, scalable operations, and clean financial reporting. Each of these factors can be improved with intentional preparation." },
      { heading: "The Multiple Expansion Effect", content: "Improving your EBITDA multiple even by 0.5x has a massive impact on enterprise value. For a $3M EBITDA business, the difference between a 4.5x and 5.0x multiple is $1.5M in additional value. This is why working with an M&A advisor who understands multiple optimization — not just finding a buyer — can have an outsized impact on your proceeds." },
    ],
    faqs: [
      { q: "What is a good EBITDA multiple for my business?", a: "A 'good' multiple depends on your industry, size, and growth profile. Use our free valuation calculator for an initial estimate, or contact us for a confidential analysis based on current market comparable transactions." },
      { q: "How can I increase my EBITDA multiple before selling?", a: "Key strategies include: diversifying your customer base, building recurring revenue streams, developing a management team that can operate without you, documenting processes and SOPs, demonstrating consistent growth, and cleaning up financial reporting. Start these improvements 12-24 months before going to market." },
      { q: "Do EBITDA multiples change with market conditions?", a: "Yes. Multiples are influenced by interest rates, credit availability, buyer demand, and economic confidence. In strong M&A markets, multiples expand; in downturns, they compress. An M&A advisor can help you time your exit to optimize market conditions." },
    ],
    relatedTerms: [
      { to: "/what-is-ebitda", title: "What Is EBITDA?" },
      { to: "/glossary/quality-of-earnings", title: "Quality of Earnings Report" },
      { to: "/glossary/earnout", title: "Earnout" },
    ],
    relatedPages: [
      { to: "/business-valuation-calculator-florida", title: "Valuation Calculator", subtitle: "Estimate your value" },
      { to: "/florida-ma-benchmarks", title: "Florida M&A Benchmarks", subtitle: "Industry multiples data" },
      { to: "/business-valuation", title: "Business Valuation Services", subtitle: "Professional valuation" },
    ],
  },
  {
    slug: "confidential-information-memorandum",
    term: "Confidential Information Memorandum (CIM)",
    metaTitle: "Confidential Information Memorandum (CIM) | M&A Guide",
    metaDescription: "Learn what a CIM is in M&A, what it should include, and why it's critical to attracting qualified buyers. Expert guidance for business sellers.",
    heroHeading: "The CIM: Your Business's Sales Document",
    heroDescription: "A Confidential Information Memorandum is the comprehensive document that presents your business to potential buyers. Its quality directly impacts the number and caliber of offers you receive.",
    definition: "A Confidential Information Memorandum (CIM), also called an Offering Memorandum or Information Memorandum, is a detailed document prepared by the seller's M&A advisor that presents the business to prospective buyers. It includes financial performance, operations overview, market position, growth opportunities, and management structure — everything a buyer needs to evaluate the opportunity and submit an initial offer.",
    sections: [
      { heading: "What a CIM Includes", content: "A professional CIM typically covers: executive summary, investment highlights, company history and overview, products/services description, market and competitive analysis, organizational structure, financial performance (3-5 years), normalized EBITDA analysis, growth opportunities, facility and equipment overview, and key transaction considerations. The document is typically 30-60 pages and distributed only to pre-qualified, NDA-signed buyers." },
      { heading: "Why CIM Quality Matters", content: "The CIM is your business's first impression with potential buyers. A well-crafted CIM generates more competitive interest, establishes credibility, reduces buyer questions during due diligence, and positions the business's story in the most favorable light. Poorly written CIMs with inconsistent data or missing information signal risk and reduce buyer confidence — often leading to lower offers or disengagement." },
      { heading: "The Preparation Process", content: "Creating a CIM typically takes 3-6 weeks and involves extensive collaboration between the seller and M&A advisor. The advisor conducts management interviews, analyzes financial data, researches market positioning, identifies growth narratives, and crafts a compelling investment thesis. The seller provides financial records, operational data, and reviews drafts for accuracy." },
      { heading: "Distribution and Confidentiality", content: "CIMs are shared only with buyers who have signed non-disclosure agreements and been pre-qualified financially and strategically. The distribution strategy — how many buyers see the CIM and when — is carefully managed to create competitive tension while maintaining confidentiality. A broad but controlled process typically yields the best results." },
    ],
    faqs: [
      { q: "Who prepares the CIM?", a: "The CIM is prepared by the seller's M&A advisor or investment banker. While sellers provide the underlying data and review for accuracy, the advisor crafts the narrative, analyzes the financials, and presents the opportunity in a professional format that resonates with sophisticated buyers." },
      { q: "How many buyers typically receive the CIM?", a: "In a lower middle market transaction, 50-150 potential buyers may be contacted with a teaser (anonymous summary), and 15-30 qualified buyers typically receive the full CIM after signing NDAs. The exact number depends on the industry, business profile, and go-to-market strategy." },
      { q: "Can I write my own CIM?", a: "While possible, a self-prepared CIM rarely achieves the same results as one prepared by an experienced M&A advisor. Advisors understand what buyers look for, how to normalize financials, and how to present growth narratives that drive competitive offers. The CIM is too important to your deal outcome to cut corners." },
    ],
    relatedTerms: [
      { to: "/glossary/letter-of-intent", title: "Letter of Intent (LOI)" },
      { to: "/glossary/due-diligence-checklist", title: "Due Diligence Checklist" },
      { to: "/glossary/ebitda-multiples", title: "EBITDA Multiples" },
    ],
    relatedPages: [
      { to: "/how-to-sell-a-business", title: "How to Sell a Business", subtitle: "Complete selling guide" },
      { to: "/sellers", title: "For Sellers", subtitle: "Seller services overview" },
      { to: "/contact", title: "Start the Process", subtitle: "Confidential consultation" },
    ],
  },
  {
    slug: "non-compete-agreement",
    term: "Non-Compete Agreement",
    metaTitle: "Non-Compete Agreements in M&A | What Sellers Should Know",
    metaDescription: "Understand non-compete agreements in business sales — typical terms, negotiation strategies, and how to protect your future while satisfying buyer requirements.",
    heroHeading: "Non-Compete Agreements in M&A: Protecting Both Sides",
    heroDescription: "Every business sale includes a non-compete agreement. Understanding what's standard, what's negotiable, and how to protect your post-sale options is essential before you sign.",
    definition: "A non-compete agreement (also called a restrictive covenant) in M&A is a contractual provision that prevents the seller from starting, owning, or working in a competing business for a specified period and within a defined geographic area after the sale. It protects the buyer's investment by ensuring the seller doesn't recreate the business they just sold.",
    sections: [
      { heading: "Standard Non-Compete Terms", content: "In lower middle market transactions, non-compete agreements typically include: duration of 3-5 years (2-3 years is aggressive; 7+ years is unusual), geographic scope matching the business's service area, industry scope limited to the specific business activities sold, non-solicitation of employees and customers (often 2-3 years), and exceptions for passive investments (typically <5% ownership in public companies)." },
      { heading: "What's Negotiable", content: "While buyers will insist on some form of non-compete, several elements are negotiable: the duration (shorter is better for sellers), geographic restrictions (narrow to actual markets served), activity definitions (ensure you can work in adjacent but non-competing fields), exceptions for specific activities or investments, and compensation for the non-compete (sometimes structured as a separate payment for tax purposes)." },
      { heading: "Enforceability Considerations", content: "Non-compete enforceability varies by state. Florida is generally favorable to enforcing non-competes under its statute (F.S. § 542.335), which presumes reasonable durations of 2 years or less for business sale non-competes. Overly broad non-competes risk being narrowed by courts. The key is reasonableness — the restrictions should protect the buyer's legitimate business interests without unreasonably restricting the seller's livelihood." },
      { heading: "Tax Treatment", content: "The allocation of purchase price to a non-compete agreement has tax implications. Payments for non-competes are generally amortizable by the buyer over 15 years and taxed as ordinary income to the seller. This differs from goodwill treatment, so the allocation between goodwill and non-compete can affect both parties' after-tax economics. This allocation is typically negotiated as part of the purchase price allocation in the definitive agreement." },
    ],
    faqs: [
      { q: "Can I negotiate a shorter non-compete period?", a: "Yes. While 3-5 years is standard, you can negotiate shorter periods, especially if you have less direct customer contact or if the business has strong brand and operational independence from you personally. The key leverage point is demonstrating that the business doesn't depend on your personal relationships." },
      { q: "What happens if I violate the non-compete?", a: "Violating a non-compete can result in injunctive relief (court order to stop the competing activity), monetary damages, forfeiture of earnout or escrow payments, and legal fees. In Florida, courts regularly enforce reasonable non-competes, so treat these obligations seriously." },
      { q: "Are non-competes required in every business sale?", a: "Virtually every business sale includes a non-compete. Buyers are paying for the business's future earning potential and need assurance that the seller won't immediately recreate a competing business. The absence of a non-compete would significantly reduce the purchase price or eliminate buyer interest entirely." },
    ],
    relatedTerms: [
      { to: "/glossary/purchase-agreement", title: "Purchase Agreement" },
      { to: "/glossary/earnout", title: "Earnout" },
      { to: "/glossary/letter-of-intent", title: "Letter of Intent (LOI)" },
    ],
    relatedPages: [
      { to: "/how-to-sell-a-business", title: "How to Sell a Business", subtitle: "Complete selling guide" },
      { to: "/sell-business-florida", title: "Sell a Business in Florida", subtitle: "Florida M&A advisory" },
      { to: "/contact", title: "Get Expert Guidance", subtitle: "Confidential consultation" },
    ],
  },
];

export function getGlossaryTerm(slug: string): GlossaryTermData | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
