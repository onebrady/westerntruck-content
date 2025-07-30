export const reportData = {
  title: "WesternTruck.com Analytics",
  subtitle: "Technical SEO Performance Report",
  date: "January 2025",

  // Technical SEO Highlights
  technicalHighlights: {
    title: "Technical SEO Highlights",
    description: "Key Performance Indicators for Technical SEO",
    kpis: [
      {
        name: "HTML Load Time <2s (Core Pages)",
        current: 88,
        target: 95,
        unit: "%",
      },
      {
        name: "Unique URLs With Self-Canonicalization",
        current: 95,
        target: 100,
        unit: "%",
      },
      {
        name: "Pages With schema.org Product Markup",
        current: 83,
        target: 100,
        unit: "%",
      },
      {
        name: "Mobile Accessibility (Core Pages)",
        current: 98,
        target: 100,
        unit: "%",
      },
      {
        name: "Valid (200) HTTP Status on Key URLs",
        current: 99,
        target: 100,
        unit: "%",
      },
    ],
  },

  // Critical Improvements
  criticalImprovements: {
    title: "Most Critical Technical SEO Improvements",
    description: "Priority fixes to implement for maximum impact",
    improvements: [
      {
        id: 1,
        title: "Redirect & Canonical Inconsistencies",
        problem:
          "/inventory?sort=price has a canonical tag referencing itself rather than the main /inventory page, or some URLs use different www/non-www/HTTP/HTTPS variations.",
        issue:
          "Some product and root URLs return 301 redirect chains, and a few inventory/archive pages canonicalize to non-standard or redirected URL formats. This causes dilution of ranking equity and wastes crawl budget.",
        solution: [
          "Enforce single canonical URL for each core page (HTTPS, non-www, no params).",
          "Audit and update all canonical tags to point to clean, indexable URLs.",
          "Eliminate all multi-step redirects—redirect in one step directly to the canonical.",
        ],
        priority: "High",
        impact: "High",
      },
      {
        id: 2,
        title: "Duplicate/Thin Inventory Content",
        problem:
          "100+ inventory URLs with nearly identical content or minimal product differentiation; e.g., multiple lowboy trailer listings with only small SKU changes.",
        issue:
          "Creates index bloat, forces Google to crawl duplicate content, and diminishes authority of key model pages.",
        solution: [
          "Merge or prune thin/near-duplicate pages, using canonical tags for true variants.",
          "Consolidate unique attributes or archive outdated inventory.",
          "Noindex overly thin listings until unique content is added.",
        ],
        priority: "High",
        impact: "Medium",
      },
      {
        id: 3,
        title: "Schema Markup Coverage Gaps",
        problem:
          "While some inventory uses schema.org Product, main category and service pages lack structured data for Breadcrumbs, FAQs, or Service schema.",
        issue:
          "Reduces eligibility for rich SERP features and broader search visibility.",
        solution: [
          "Add full schema coverage to all major category, service, and guide pages:",
          "Breadcrumb, Product, FAQPage, Service, and LocalBusiness where appropriate.",
          "Use JSON-LD on all templates to improve consistency and reduce manual errors.",
        ],
        priority: "Medium",
        impact: "Medium",
      },
    ],
  },

  // Company Info
  company: {
    name: "WesternTruck",
    phone: "(888) 615-1388",
    website: "https://www.westerntruck.com/",
    tagline: "SERVING THE CONSTRUCTION INDUSTRY SINCE 1983",
  },
};
