# Funngro SEO Audit Report

Audit date: 10 June 2026  
Scope checked: `https://www.funngro.com/`, `/earn`, `/for-brands`, `robots.txt`, `sitemap.xml`

## Executive Summary

Funngro already has a strong SEO base: clear homepage metadata, Open Graph tags, Twitter tags, schema markup, a public robots file and a sitemap that includes earning, brand, story, blog, trust and legal pages. The biggest opportunity is route-level SEO. The initial HTML returned for `/earn` and `/for-brands` currently uses homepage metadata and a homepage canonical, so those pages may not get their full value in non-JavaScript crawlers, link previews and some SEO tools.

## What Is Working Well

- Homepage title and description clearly position Funngro around online earning and large brand campaigns.
- `robots.txt` allows crawl access and points to the sitemap.
- `sitemap.xml` includes major pages such as `/earn`, `/for-brands`, `/stories`, `/blog`, `/trust`, `/faq`, `/contact`, `/careers` and legal pages.
- The homepage includes Open Graph and Twitter card metadata for social sharing.
- Organization and WebSite structured data are present.
- Security headers such as HSTS, referrer policy and `x-content-type-options` are present.
- Blog and story pages create useful topical depth around teen earning and brand work.

## Priority Issues

| Priority | Finding | Why It Matters | Recommended Fix |
| --- | --- | --- | --- |
| P1 | Canonical host is inconsistent. The site is accessed on `www.funngro.com`, sitemap URLs use `www`, while the homepage canonical points to `funngro.com`. | Mixed canonical signals can split ranking equity and confuse reporting. | Pick one canonical host, preferably `https://www.funngro.com`, then 301 redirect the other host and update all canonicals, sitemap URLs and OG URLs. |
| P1 | `/earn` and `/for-brands` return homepage title, description and canonical in initial HTML. | Route-specific pages may not rank or preview correctly if metadata only appears after JavaScript runs. | Pre-render or server-render route-specific metadata for every public route. Each route needs a unique title, description, canonical, OG title and OG image. |
| P2 | Main JavaScript bundle appears large for a marketing homepage. | Large JS can affect Core Web Vitals, especially on mobile networks. | Run Lighthouse, split non-critical sections, defer analytics, compress images and keep above-the-fold CSS lean. |
| P2 | High-intent keywords can be mapped more directly to routes. | Good content exists, but search intent should be explicit in headings and internal links. | Build keyword-led sections for "earn online as a teen in India", "teen earning app", "Gen Z marketing India", "campus ambassador campaigns" and "UGC creators India". |
| P2 | Structured data can be expanded per route. | Rich results and crawler clarity improve when each page has matching schema. | Add FAQPage schema on FAQ sections, HowTo schema for earning steps and Service schema for brand campaign pages. |
| P3 | Meta keywords are present. | Search engines mostly ignore this field and it can look dated. | Keep focus on title, description, headings, internal links and schema instead. |

## Recommended Page Metadata

### Teen / Earn Page

- Suggested title: `How to Earn Online as a Teen in India | Funngro`
- Suggested description: `Start earning online with Funngro by completing brand campaigns, referrals, content, surveys and app testing. Learn skills and get paid through UPI.`
- Primary keywords: `earn online as a teen in India`, `teen earning app`, `UPI earning`, `student freelancing`, `brand promotion app`
- Suggested schema: `MobileApplication`, `HowTo`, `FAQPage`

### Company / Brand Page

- Suggested title: `Funngro for Brands | Gen Z Campaigns and Teen Creators`
- Suggested description: `Launch brand promotion, sampling, UGC, surveys, referrals and app testing campaigns with Funngro's verified network of young Indian creators.`
- Primary keywords: `Gen Z marketing India`, `hire teen creators`, `campus ambassador campaigns`, `UGC creators India`, `app testing India`
- Suggested schema: `Service`, `Organization`, `FAQPage`

## Content Opportunities

- Add an earning guide: "How teens in India can earn online safely in 2026".
- Add parent trust content around safety, verification, payout rules and time commitment.
- Add brand landing pages by vertical: fintech, D2C, FMCG, edtech, gaming and beauty.
- Add case-study pages with campaign objective, cohort, proof type, completion rate and learning.
- Strengthen internal links from blog pages to `/earn`, `/for-brands`, `/trust` and `/faq`.
- Add page-specific OG images for teen earners, brand campaigns and success stories.

## Technical SEO Checklist

- Use one canonical host across site, sitemap and social tags.
- Pre-render public routes or use server-side rendering for route metadata.
- Keep each route to one clear H1.
- Add descriptive image alt text and explicit image width and height where possible.
- Add breadcrumb schema on nested pages.
- Validate sitemap after every deployment.
- Monitor Google Search Console for indexed pages, duplicate canonicals and Core Web Vitals.
- Run Lighthouse on mobile and fix LCP, CLS and INP issues before launch.

## Sources Checked

- https://www.funngro.com/
- https://www.funngro.com/earn
- https://www.funngro.com/for-brands
- https://www.funngro.com/robots.txt
- https://www.funngro.com/sitemap.xml
