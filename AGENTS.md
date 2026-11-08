# Repository-wide instructions: Vietnam website legal compliance

> Applies to all agents and contributors working on this website. This is an engineering safety rule, not legal advice or a declaration that the website is compliant.

## Mandatory gate

Before adding, changing, enabling, or deploying any feature that collects data, publishes third-party content, enables user-generated content, sells/promotes goods or services, tracks visitors, accepts payments, or targets children:

1. Read `skills/vietnam-website-legal-compliance/SKILL.md`.
2. Identify the feature's legal-risk category and affected data/content/transactions.
3. Check the current official Vietnamese legal sources listed in that skill. Do not rely on model memory or stale summaries.
4. Update `compliance/LEGAL_FEATURE_REGISTER.md` and `compliance/LEGAL_REVIEW_LOG.md`.
5. If a legal classification, required notice/registration/permit, lawful basis, consent, cross-border transfer, or content right is uncertain, STOP and ask the owner for a decision or qualified Vietnamese legal review.
6. Do not ship a feature marked `BLOCKED` or `REVIEW_REQUIRED`.

## Hard engineering rules

- Never collect personal data just in case. Collect the minimum necessary for a stated purpose.
- Never treat silence, pre-ticked boxes, or bundled/forced unrelated consent as consent.
- Do not load non-essential analytics/advertising trackers before the required user choice has been implemented and verified.
- Do not expose secrets, access tokens, personal data, or private user submissions in client code, logs, analytics, URLs, or public repositories.
- Do not add scraped, copied, generated-from-unlicensed, or otherwise unverified images, video, music, fonts, logos, articles, or code.
- Do not enable comments, accounts, uploads, messaging, marketplace, checkout, payment, affiliate, ad-tech, or social-network-like features without a documented review.
- Do not present NMC Corp as a registered legal entity, company, or website owner unless the owner confirms the exact legal entity and authority to use that name.
- Do not generate fake company details, tax codes, addresses, legal representative names, license numbers, consent records, copyright permissions, or compliance badges.
- Do not write policy pages that claim practices the implementation does not actually follow.
- Do not represent a technical checklist, cookie banner, privacy page, or this skill as proof of legal compliance.

## Required pre-deploy checks

Run project tests and review:

- Privacy notice accurately describes every data field, purpose, retention period, recipient/processor, and contact route.
- Consent is specific, informed, recorded where required, revocable where applicable, and not preselected.
- Cookie/tracker inventory matches actual network requests and scripts.
- All media/assets have documented ownership, licence, permission, or a valid legal basis.
- User-generated content features have moderation, reporting/takedown, retention, and escalation design reviewed.
- E-commerce, affiliate, advertising, payment, and cross-border functions have been classified against current law.
- Footer/legal pages, contact details, and owner identity are accurate.
- No secrets or unnecessary personal data are committed or exposed.
- `LEGAL_FEATURE_REGISTER.md` has no unresolved `BLOCKED` item for the release.

## Change-control

Any new feature or vendor integration that changes data collection, data location, tracking, monetization, user posting, or transactions must trigger a fresh compliance review.

Record reviewer, date, official sources checked, decision, and unresolved issues in `compliance/LEGAL_REVIEW_LOG.md`.