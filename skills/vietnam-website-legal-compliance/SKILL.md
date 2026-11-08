---
name: vietnam-website-legal-compliance
description: Review website features and code changes for Vietnam legal and regulatory risks before implementation or deployment. Use whenever the project collects personal data, uses cookies/analytics/ads, publishes content, embeds third-party media, enables user accounts/comments/uploads, monetizes, sells, takes payments, or changes its operator/domain.
---

# Vietnam Website Legal Compliance Skill

## Purpose and limits

Act as a cautious engineering compliance assistant for a Vietnam-facing website.

Prevent avoidable omissions by detecting legal-risk triggers, asking for missing facts, and creating a review trail.

This skill is NOT a lawyer, legal opinion, permit, filing, or guarantee of compliance.

Laws and implementing instruments change. The official Vietnamese text and current agency guidance control.

Never claim:
- "Compliant"
- "No licence needed"
- "No filing needed"
- "Legally safe"

unless the exact activity and current law have been verified.

For uncertain or high-impact matters, recommend review by qualified Vietnamese counsel or the competent authority.

## Project context

- Brand: Gaming with meee.
- Brand architecture: a creator/content brand under NMC Corp.
- Do not assume NMC Corp is a registered company/legal entity.
- Ask the owner for the actual legal person/entity operating the site.
- Intended baseline may be a portfolio/editorial content website.
- Verify actual features; do not assume the website remains informational.
- Jurisdiction: Vietnam.
- Also assess foreign laws if targeting users, processing data, or doing business abroad.

## Trigger words / features requiring review

Run this skill before implementation or deployment if a request mentions or code introduces:

- Contact forms, newsletter, login, registration, profiles, comments, user uploads, direct messages, community, forum, social feed.
- Cookies, pixels, analytics, advertising SDKs, retargeting, personalization, embedded third-party scripts.
- Affiliate links, sponsored posts, product listings, shopping cart, checkout, payments, subscriptions, digital goods, marketplace.
- News aggregation, republishing, scraping, AI-generated media, music, stock footage, game footage, trademarks, celebrity/person likeness.
- Children/minors, contests, giveaways, location, sensitive data, identity documents.
- Hosting/provider changes, overseas processors, cloud storage, analytics, email marketing, cross-border data transfers.
- Domain/operator/business identity changes.

## Required workflow

### 1. Establish facts first

Ask only for facts necessary to classify the feature:

- Who is the actual website operator (individual, household business, company, other)? Exact legal name and jurisdiction?
- What does the feature do, and who can use it?
- Does it collect or infer personal data? Which fields, for what purpose, how long, where stored, who receives it?
- Are third-party services involved? Name each vendor and data destination.
- Is money, a product/service, commission, advertising, or a transaction involved?
- Can visitors publish, share, comment, message, or upload content?
- Does it target children or include child users?

Do not invent missing facts. Mark them `UNKNOWN`.

### 2. Classify the feature

Assign one or more:

- `CONTENT_PUBLISHING`
- `PERSONAL_DATA`
- `COOKIES_TRACKING`
- `THIRD_PARTY_EMBED`
- `COPYRIGHT_IP`
- `ADVERTISING_AFFILIATE`
- `E_COMMERCE_DIRECT`
- `E_COMMERCE_INTERMEDIARY`
- `USER_GENERATED_CONTENT`
- `SOCIAL_NETWORK_OR_AGGREGATION`
- `CHILDREN`
- `CROSS_BORDER_PROCESSING`
- `SECURITY`
- `DOMAIN_AND_OPERATOR_DISCLOSURE`

Set status:

- `LOW_RISK_PENDING_CHECK`: no obvious trigger but basic checks remain.
- `REVIEW_REQUIRED`: legal classification or implementation details need verification.
- `BLOCKED`: do not implement/deploy until required decision, consent, rights, filing, or professional review is completed.
- `CLEARED_FOR_ENGINEERING`: engineering controls are documented; this is not a legal certification.

### 3. Check current primary sources

At minimum inspect relevant official sources below, and search for amendments/new instruments effective on the review date.

Prefer:
- vanban.chinhphu.vn
- vbpl.moj.gov.vn
- congbao.chinhphu.vn
- Official ministry/agency portals.

Record title, number, effective date, status, URL, and date checked.

Core source register (identified as of 2026-11-08; re-verify before each release):

1. Law on Personal Data Protection No. 91/2025/QH15, effective 2026-01-01:
https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=

2. Decree 356/2025/ND-CP detailing the Personal Data Protection Law, effective 2026-01-01:
https://chinhphu.vn/?classid=1&docid=216387&pageid=27160

3. Decree 330/2026/ND-CP on administrative penalties in cybersecurity and personal data protection, effective 2026-08-19:
https://chinhphu.vn/?docid=219266&pageid=27160

4. Law on E-Commerce No. 122/2025/QH15, effective 2026-07-01:
https://vanban.chinhphu.vn/?classid=1&docid=216503&pageid=27160&typegroupid=3

5. Decree 248/2026/ND-CP detailing the E-Commerce Law, effective 2026-07-01:
https://vanban.chinhphu.vn/?docid=218747&orggroupid=2&pageid=27160

6. Decree 147/2024/ND-CP on management, provision and use of Internet services and online information, effective 2024-12-25:
https://vanban.chinhphu.vn/?classid=1&docid=211654&orggroupid=2&pageid=27160

7. Intellectual Property Law and amendments, including Law 07/2022/QH15 (effective 2023-01-01):
https://chinhphu.vn/?classid=1&docid=206240&orggroupid=1&pageid=27160

Consumer protection, advertising, cybersecurity, information security, domain-name and tax rules may also apply depending on the feature.

Identify and verify current instruments rather than assuming this list is exhaustive.

### Important temporal warning

The E-Commerce Law 122/2025/QH15 and Decree 248/2026/ND-CP have applied since 2026-07-01.

Do NOT use old Decree 52/2013/ND-CP or Decree 85/2021/ND-CP as the sole current basis for a 2026 decision.

Check transition provisions and the current consolidated legal framework.

### 4. Feature-specific controls

#### Personal data

- Create a data inventory before adding collection.
- Minimize fields and purposes; no speculative collection.
- Document the legal basis for each purpose.
- Where consent is required, implement clear, specific, informed, separate choices.
- No pre-ticked controls or silence-as-consent.
- Record consent evidence and version/time where required.
- Provide withdrawal and data-rights request paths as applicable.
- Define retention/deletion, access control, encryption in transit/at rest where appropriate, incident response, and processor/vendor responsibilities.
- Determine whether sensitive personal data, children’s data, profiling, automated processing, or cross-border transfers are involved.
- Escalate these for specific legal review.
- Never place personal data in URLs, public logs, source maps, analytics events, or public storage.
- Privacy notice must match actual code and vendor behavior.
- Do not fabricate retention periods or legal bases.

#### Cookies, analytics, advertising trackers

- Inventory every cookie, local-storage key, pixel, SDK, embedded script, and network destination.
- Categorize strictly necessary vs analytics/advertising/personalization.
- Verify current Vietnamese requirements and any foreign rules.
- Where consent/choice is required, block non-essential tracking until valid choice.
- Provide reject as accessible as accept, granular settings, and withdrawal.
- A banner alone does not make tracking lawful.
- Do not add trackers before review.

#### Copyright and intellectual property

- Maintain an asset register: asset, creator/source, licence/permission, allowed commercial use, attribution, territory, expiry, evidence.
- Do not copy articles, images, video, music, game assets, logos, fonts, or code without a verified licence/permission/legal basis.
- For AI-generated assets, verify the tool's terms, input rights, output restrictions, likeness/publicity/privacy issues, and third-party rights.
- AI generation is not an automatic copyright clearance.
- For embeds, verify platform terms and avoid downloading/rehosting content without rights.
- Use original writing and properly attributed quotations.
- Attribution alone does not replace permission where permission is required.

#### Content publishing / aggregation / social features

- Distinguish own editorial content from republishing, news aggregation, forums, user-generated content, and social-network functionality.
- Do not assume a blog is a licensed news site.
- Equally, do not assume a site that aggregates or republishes third-party information is just a blog.
- Before adding public comments, accounts, feeds, messaging, uploads, sharing communities, or user pages, assess Decree 147/2024/ND-CP and any current amendments/implementing guidance.
- Escalate whether the feature constitutes a social network or another regulated online information service.
- If UGC is approved, design reporting, moderation, takedown, evidence preservation, repeat-abuser handling, child-safety, and response workflows before launch.

#### E-commerce, affiliate, ads, payments

- Determine whether the site merely links to a third-party affiliate merchant, advertises/sponsors content, directly sells goods/services, accepts orders/payments, or provides a platform for third-party sellers.
- These are not interchangeable.
- Assess Law 122/2025/QH15 and Decree 248/2026/ND-CP, including notice/registration and platform/operator obligations, before enabling commercial features.
- Do not assume that "affiliate only" is automatically exempt.
- Document the exact user journey, who contracts with the buyer, who takes payment, and who fulfils the order.
- For ads and sponsorships, assess advertising, consumer-protection, disclosure, sector-specific restrictions, and platform terms.
- Do not implement checkout/payment collection until merchant identity, consumer terms, tax/invoice, payment-provider, refund, security, and required filings have been reviewed.

#### Domain, operator identity and public disclosures

- Use a properly registered domain and confirm registrant/administrative contact obligations.
- Show accurate operator/contact details where required.
- Never fabricate a legal entity, address, tax code, legal representative, licence, or registration confirmation.
- Brand architecture is not corporate structure.
- Do not call NMC Corp a parent company, corporation, or legal operator unless the owner confirms the registered legal entity and supporting details.

#### Security

- Apply secure authentication, least privilege, secrets management, dependency updates, input validation, output encoding, CSRF protections where applicable, secure headers, backups, and incident logging.
- Use OWASP guidance as an engineering baseline, not as a substitute for Vietnamese legal obligations.
- Avoid collecting identity documents or sensitive information unless strictly necessary and separately reviewed.

### 5. Required deliverables for each review

Create/update:

1. `compliance/LEGAL_FEATURE_REGISTER.md`: feature, data/content/transaction, classification, status, owner, evidence, required actions.
2. `compliance/LEGAL_REVIEW_LOG.md`: date, change/feature, official sources checked, findings, unresolved issues, reviewer, decision.
3. Privacy/terms/cookie/copyright pages only after verifying the real implementation and actual operator details.
4. Tests verifying consent defaults, tracker blocking, deletion/access controls, permissions, and moderation controls where applicable.

### 6. Response format to the project owner

For every triggered review, report:

- Feature and user journey
- Risk category and status
- Applicable law(s), effective dates, official URLs and date checked
- What the code currently does
- Required engineering changes
- Required business/legal decisions or filings
- What is not yet known
- Release recommendation: `BLOCK`, `HOLD FOR REVIEW`, or `ENGINEERING CHECKS DOCUMENTED`

Never bury a blocker in a footnote.

Never state that a feature is legally approved based solely on this skill.