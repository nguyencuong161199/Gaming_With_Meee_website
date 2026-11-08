# Legal Review Log

## 2026-11-08 — Initial Codebase Compliance Audit

- **Project:** Gaming with meee / NMC Corp (`Gaming_With_Meee_website`)
- **Scope:** Full repository audit across all components, data structures, external integrations, third-party assets, e-commerce links, forms, and storage keys.
- **Auditor:** Automated Engineering Compliance Assistant (per `AGENTS.md` and `vietnam-website-legal-compliance` skill).
- **Audit Decision:** **HOLD FOR REVIEW / BLOCKED FROM PRODUCTION DEPLOYMENT** until remediation of 2 BLOCKED features and 7 REVIEW_REQUIRED items.

---

### 1. Applicable Official Legal Sources Checked (as of 2026-11-08)

1. **Law on Personal Data Protection No. 91/2025/QH15** (Effective 2026-01-01):
   - Official URL: `https://vanban.chinhphu.vn/?classid=1&docid=214590&pageid=27160&typegroup=`
   - Relevant Provisions: Chapter II (Consent requirements, rights of data subjects), Article 20 (Cross-border data transfer impact assessment and consent).
2. **Decree 356/2025/ND-CP** detailing the Personal Data Protection Law (Effective 2026-01-01):
   - Official URL: `https://chinhphu.vn/?classid=1&docid=216387&pageid=27160`
   - Relevant Provisions: Technical standards for consent records, data retention, and cross-border transfer filing dossier.
3. **Decree 330/2026/ND-CP** on administrative penalties in cybersecurity and personal data protection (Effective 2026-08-19):
   - Official URL: `https://chinhphu.vn/?docid=219266&pageid=27160`
4. **Law on E-Commerce No. 122/2025/QH15** (Effective 2026-07-01):
   - Official URL: `https://vanban.chinhphu.vn/?classid=1&docid=216503&pageid=27160&typegroupid=3`
   - Relevant Provisions: Website classification, commercial promotion obligations, mandatory notification of sales websites.
5. **Decree 248/2026/ND-CP** detailing the E-Commerce Law (Effective 2026-07-01):
   - Official URL: `https://vanban.chinhphu.vn/?docid=218747&orggroupid=2&pageid=27160`
   - Relevant Provisions: Procedures for e-commerce website notification (online.gov.vn) and required consumer terms.
6. **Decree 147/2024/ND-CP** on management, provision and use of Internet services and online information (Effective 2024-12-25):
   - Official URL: `https://vanban.chinhphu.vn/?classid=1&docid=211654&orggroupid=2&pageid=27160`
   - Relevant Provisions: User-generated content (UGC), user comment moderation, user account verification via domestic phone or eID, 180-day log retention.
7. **Law on Intellectual Property No. 50/2005/QH11** as amended by **Law 07/2022/QH15** (Effective 2023-01-01):
   - Official URL: `https://chinhphu.vn/?classid=1&docid=206240&orggroupid=1&pageid=27160`
   - Relevant Provisions: Trademark fair use, copyright licensing of multimedia assets.
8. **Law on Protection of Consumers' Rights No. 19/2023/QH15** (Effective 2024-07-01):
   - Relevant Provisions: Truth in advertising, disclosure of trader identity and contact info.

---

### 2. Detailed Findings by Audit Domain

#### A. Website Features & Architecture
- **Features identified:**
  1. Hero section with looping background video and sound replay button.
  2. Bento Showcase navigation into 4 specialized hubs: Academy, Gaming Hub, Store, About.
  3. Academy certification mock exam engine (PSM I & CCAR-F) with timers, automated grading, and Supabase cloud synchronization.
  4. Gaming Hub with guides, competitive settings, and meta compositions for 4 games.
  5. NMC Store showcasing physical keycaps, mousepads, and digital PSM I preparation materials with Shopee search redirects and direct mail order triggers.
  6. MEEE AI Chatbot Assistant (client-side heuristic response engine).
  7. User Authentication system (Google & Facebook OAuth via Supabase, guest bypass, admin key bypass).
  8. Interactive Article and Community Comments system (`ArticlePage.tsx`).
  9. System Announcement Board (`UpdateBoard.tsx`).
  10. Social Links & Direct Contact banner.

#### B. Forms, Cookies, Trackers, APIs, and Third-Party Scripts
- **Third-Party Network Endpoints:**
  - Supabase backend: `https://dlcuupqowxpvtvsagfpl.supabase.co` (Handles Auth, `comments`, `mock_exam_results`, `system_announcements`). Hosted overseas.
  - Google Fonts CDN: `https://fonts.googleapis.com` & `https://fonts.gstatic.com` (Loads Inter, Space Grotesk, Space Mono).
  - Unsplash Image CDN: `https://images.unsplash.com` (Product catalog images).
  - Outbound redirects: `https://shopee.vn`, `https://www.facebook.com`, `https://www.instagram.com`, `https://www.tiktok.com`, `https://www.youtube.com`.
- **Local Storage Inventory:**
  - `gwm_lang`: UI language selection (`VI` / `EN`).
  - `gwm_intro_seen`: Flag to prevent intro video replay.
  - `gwm_auth_user`: Active user profile object (ID, name, email, avatar, provider, role).
  - `nmc_academy_attempts`: Local backup of user mock exam scores.
  - `gwm_board_updates`: Local backup of announcements.
  - `gwm_comments_<id>`: Local backup of user comments per article.
  - `gwm_notified_prods`: IDs of products user requested stock notification for.
  - Supabase internal tokens: `sb-dlcuupqowxpvtvsagfpl-auth-token`.
- **Trackers:** No Google Tag Manager, Google Analytics, Facebook Pixel, or ad-tech tracking SDKs detected in current code.

#### C. Personal Data Collection & Compliance Gap
- **Data collected:** User ID, Full Name, Email, Avatar Photo, OAuth Provider ID, Exam Test Performance/Scores, and User-submitted comment text.
- **Compliance Gaps:**
  - **No Privacy Policy:** The website has NO published Privacy Policy or Notice on Processing Personal Data explaining legal basis, purpose, retention, and contact details as required by Law 91/2025/QH15.
  - **No Prior Informed Consent:** OAuth login initiates directly without an explicit checkbox or consent modal informing users of data processing.
  - **No Data Subject Rights Mechanism:** No interface or documented workflow for users to request data access, correction, or deletion.
  - **Cross-Border Transfer:** User data is transmitted to and hosted on Supabase servers abroad without a Cross-Border Transfer Impact Assessment (Đánh giá tác động chuyển dữ liệu ra nước ngoài) or explicit cross-border disclosure.

#### D. Licensing of Assets (Images, Videos, Fonts, Music, Trademarks)
- **Game Trademarks:**
  - SVGs for FC Online, League of Legends, PUBG Mobile, and TFT located in `public/assets/games/`.
  - **Issue:** Used without a trademark disclaimer. Could be perceived as official association.
- **Intro Video (`public/assets/intro-gwm.mp4`):**
  - Contains full audio soundtrack and high-definition 3D graphics.
  - **Issue:** No commercial license agreement, proof of purchase, or creator attribution documented in the repo.
- **Scrum.org & PSM I™ IP:**
  - Course content cites Scrum Guide 2020 definitions and offers PSM I exam preparation.
  - **Issue:** "PSM I" and "Professional Scrum Master" are registered trademarks of Scrum.org. Needs trademark non-affiliation disclaimer.
- **Fonts:**
  - SIL Open Font License (OFL) for Inter, Space Grotesk, Space Mono. Fully compliant for commercial web embedding.

#### E. E-Commerce & Commercial Monetization
- **Store Offerings:**
  - Sells physical products (Keycaps 680,000 VND, Mousepad 380,000 VND) and digital study materials (PSM I Kit 249,000 VND).
  - External links currently lead to Shopee keyword search pages rather than a registered official merchant storefront.
  - "Notify when in stock" opens an email client to `nmc.corp16@gmail.com`.
- **E-Commerce Law Classification:**
  - Under Law on E-Commerce 122/2025/QH15 and Decree 248/2026/ND-CP:
    - If the website directly fulfills orders for digital study kits or takes orders via email/phone, it is classified as a **Website TMĐT bán hàng (E-Commerce Sales Website)**.
    - An E-Commerce Sales Website must complete **Notification of E-Commerce Website (Thông báo website thương mại điện tử bán hàng)** with the Ministry of Industry and Trade (Bộ Công Thương) via `online.gov.vn`.
    - Operating without notification violates Decree 248/2026/ND-CP and Decree 98/2020/ND-CP.
    - Required mandatory disclosures: General trading conditions, delivery & digital fulfillment policy, payment methods, returns & refund policy, and customer personal data protection policy.

#### F. User-Generated Content (UGC) & Social Network Risks
- **Article Comments (`ArticlePage.tsx`):**
  - Allows authenticated users to write and post public comments that sync to cloud Supabase table `comments`.
  - **Regulatory Risk:** Under Decree 147/2024/ND-CP (effective 2024-12-25), websites providing public interactive comments must:
    1. Authenticate user identity with Vietnamese phone number or electronic personal identity (VNeID/eID).
    2. Retain user posting logs and IP connection data for at least 180 days.
    3. Implement 24h/48h content takedown and moderation workflows upon authority notice.
  - Failure to meet these conditions makes public UGC functionality non-compliant.

---

### 3. Prioritized Remediation Action Plan

#### Priority 0 (P0 - Immediate Blockers Before Any Deployment)
1. **Disable Public Comments Feature:** Keep `ArticlePage.tsx` comments disabled or restricted to read-only admin notes until Decree 147/2024/ND-CP user verification and moderation architecture can be implemented.
2. **Draft & Publish Mandatory Privacy Notice:**
   - Create a dedicated `/privacy` page detailing: Data Controller identity (Nguyễn Mạnh Cường / NMC Corp), collected fields (Name, Email, Avatar, Exam scores), purpose (Account creation, score tracking), retention duration, and user rights (deletion/correction).
3. **Implement Pre-Auth Informed Consent Checkbox:**
   - In `LoginModal.tsx`, add an unselected mandatory checkbox before Google/Facebook OAuth: *"Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo vệ dữ liệu cá nhân của Gaming with meee."*

#### Priority 1 (P1 - Compliance Notices & E-Commerce Disclaimers)
4. **Clarify Operator Legal Identity & Footer Disclosures:**
   - If "NMC Corp" is not yet registered as a formal enterprise, update footer to clarify: *"Gaming with meee là thương hiệu nội dung số cá nhân sáng tạo bởi Nguyễn Mạnh Cường (Edward)."*
   - Add full legal identification in footer: Full name of owner, contact address, phone number, email.
5. **Classify Store Model & Notify Ministry of Industry & Trade (MOIT):**
   - If selling digital products directly: Register notification at `online.gov.vn` per Law 122/2025/QH15 & Decree 248/2026/ND-CP.
   - If purely an affiliate redirect: Update Shopee buttons to exact official shop URLs and add an Affiliate Disclosure statement.
   - Publish mandatory E-Commerce policies (Payment, Delivery, Returns, Refunds).
6. **Add Intellectual Property Disclaimers:**
   - **Game Logos:** Add footer notice clarifying fair use and ownership by Riot Games, EA/Nexon, and KRAFTON.
   - **Scrum.org:** Add notice stating PSM I™ is a trademark of Scrum.org and NMC Academy is an independent preparation platform.

#### Priority 2 (P2 - Asset Documentation & Cross-Border Compliance)
7. **License Verification for `intro-gwm.mp4`:**
   - Audit the audio track and visual animations in `intro-gwm.mp4`. Ensure commercial sync rights or replace with fully cleared royalty-free media.
8. **Draft Cross-Border Transfer Assessment:**
   - Prepare internal documentation for Supabase cloud database usage according to Article 20 of Law 91/2025/QH15 and Decree 356/2025/ND-CP.


---

### 4. Remediation Implemented & Review Decisions (2026-11-08)

- **Operator Identity Decision:** Owner confirmed "NMC Corp" is a personal creative creator brand operated by Nguyễn Mạnh Cường (Edward), not a registered company.
  - *Action:* Updated footer and legal documentation to reflect: *"Thương hiệu sáng tạo cá nhân bởi Nguyễn Mạnh Cường (Edward)"*. Removed any misleading claims of corporate registration.
- **Store Monetization Decision:** Owner selected **Phương án A (100% Shopee Affiliate Model)**.
  - *Action:* Added Affiliate Disclosure Banner to `StorePage.tsx`. Confirmed website does not collect payments or take direct orders. Law on E-Commerce 122/2025/QH15 sales website notification is not triggered.
- **UGC Public Comments (Decree 147/2024/ND-CP):**
  - *Action:* Disabled comment submission form in `ArticlePage.tsx`; placed in read-only archive mode with compliance notice to eliminate regulatory risk of hosting unlicensed UGC without phone/eID account verification.
- **Personal Data Protection (Law 91/2025/QH15 & Decree 356/2025/ND-CP):**
  - *Action:* Deployed `LegalModal.tsx` containing comprehensive Privacy Policy (Tab 1), Terms & Affiliate Disclosure (Tab 2), and IP Disclaimers (Tab 3).
  - *Action:* Added unselected, mandatory consent checkbox before Google/Facebook OAuth in `LoginModal.tsx` linking to Privacy Policy and Terms.
  - *Action:* Documented user rights to access, export, or request deletion of account and exam scores via `nmc.corp16@gmail.com`.
- **IP & Trademark Disclaimers (Law 07/2022/QH15):**
  - *Action:* Published fair-use disclaimers for Riot Games (LoL, TFT), EA/Nexon (FC Online), KRAFTON (PUBG Mobile), and independent educational status for Scrum.org (PSM I™).

**Final Release Gate Status:** **CLEARED FOR ENGINEERING / STAGING DEPLOYMENT**. All BLOCKED items resolved.
