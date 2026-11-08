# Legal Feature Register

Last updated: 2026-11-08 (Post-Audit Remediation Applied)

Project: Gaming with meee / Creator brand by Nguyễn Mạnh Cường (Edward)
Target Jurisdiction: Vietnam
Operator legal identity: **Cá nhân - Nguyễn Mạnh Cường (Edward)** (Đã xác nhận: "NMC Corp" là tên thương hiệu sáng tạo cá nhân, không phải công ty đã đăng ký doanh nghiệp).

> This register is an engineering control document, not a legal certification or legal advice.
> Per AGENTS.md: Unknown legal classification = REVIEW_REQUIRED. Missing required approval, consent, rights, or filing = BLOCKED.

---

## Audited Feature Register & Remediation Status

| # | Feature / Component | Exact Code Location | Data / Content / Transaction Involved | Legal Classification | Status | Remediation Applied & Notes |
|---|---|---|---|---|---|---|
| 1 | **OAuth User Authentication** (Google & Facebook via Supabase) | `src/context/AuthContext.tsx`, `src/components/LoginModal.tsx`, `src/lib/supabase.ts` | Name, email, avatar URL, provider ID stored in `localStorage` & Supabase. | `PERSONAL_DATA`, `CROSS_BORDER_PROCESSING`, `SECURITY` | **CLEARED_FOR_ENGINEERING** | ✅ **Remediated**: (1) Unselected, mandatory consent checkbox added in `LoginModal.tsx`; (2) Comprehensive Privacy Policy published in `LegalModal.tsx` citing Law 91/2025/QH15; (3) User rights to access/delete data via email `nmc.corp16@gmail.com` documented. |
| 2 | **Article Comments & User Posting** | `src/components/ArticlePage.tsx` | User comments and public interactions. | `USER_GENERATED_CONTENT`, `PERSONAL_DATA`, `SOCIAL_NETWORK_OR_AGGREGATION` | **CLEARED_FOR_ENGINEERING** (PAUSED) | ✅ **Remediated**: Public comment submission form disabled. Placed in read-only archive mode with Decree 147/2024/ND-CP notice. Prevents unlicensed UGC risk. |
| 3 | **Academy Exam Result Syncing** | `src/components/AcademyPage.tsx` | Mock exam scores, duration, correct count synced to Supabase for logged-in users. | `PERSONAL_DATA`, `CROSS_BORDER_PROCESSING` | **CLEARED_FOR_ENGINEERING** | ✅ **Remediated**: Disclosed in Privacy Policy Tab 1; user consent obtained at login; deletion route provided. |
| 4 | **NMC Store (Physical & Digital Products)** | `src/components/StorePage.tsx`, `src/components/StoreSection.tsx` | Curated gear and educational study kits. | `E_COMMERCE_DIRECT`, `ADVERTISING_AFFILIATE` | **CLEARED_FOR_ENGINEERING** | ✅ **Remediated**: Owner confirmed **100% Shopee Affiliate Model**. Affiliate Disclosure banner added to `StorePage.tsx`. Website does not process payments or collect customer orders directly, exempting it from mandatory e-commerce sales notification under Law 122/2025/QH15 & Decree 248/2026/ND-CP. |
| 5 | **Third-Party Game Trademarks & Logos** | `public/assets/games/`, `src/components/Footer.tsx`, `src/components/LegalModal.tsx` | Logos and titles for LoL, TFT, FC Online, PUBG Mobile. | `COPYRIGHT_IP` | **CLEARED_FOR_ENGINEERING** | ✅ **Remediated**: Trademark fair use disclaimers added in `Footer.tsx` and Tab 3 of `LegalModal.tsx` acknowledging Riot Games, EA/Nexon, KRAFTON. |
| 6 | **Scrum.org & Fed CCAR Intellectual Property** | `src/data/academyData.ts`, `src/components/Footer.tsx`, `src/components/LegalModal.tsx` | PSM I™ references and Scrum Guide 2020 definitions. | `COPYRIGHT_IP`, `CONTENT_PUBLISHING` | **CLEARED_FOR_ENGINEERING** | ✅ **Remediated**: PSM I™ trademark disclaimer published in Footer and LegalModal stating independent educational prep not affiliated with or endorsed by Scrum.org. |
| 7 | **Intro Video Asset (`intro-gwm.mp4`)** | `public/assets/intro-gwm.mp4` | 9.2 MB video with background soundtrack. | `COPYRIGHT_IP` | **REVIEW_REQUIRED** | Owner recommended to verify commercial sync/royalty-free status of audio track. Video playback is currently optional with mute defaults. |
| 8 | **Operator Identity & "NMC Corp" Representation** | `src/components/Footer.tsx`, `src/components/AboutPage.tsx`, `src/components/LegalModal.tsx` | Representation of creator brand vs registered enterprise. | `DOMAIN_AND_OPERATOR_DISCLOSURE` | **CLEARED_FOR_ENGINEERING** | ✅ **Remediated**: Owner confirmed personal creator brand. Footer & About updated to: *"Thương hiệu sáng tạo cá nhân bởi Nguyễn Mạnh Cường (Edward)"* with direct contact info (Phone, Email). No false corporate entity claims. |
| 9 | **Storage & Client State Keys** | `src/hooks/useLocalStorage.ts`, `src/components/LegalModal.tsx` | `gwm_lang`, `gwm_intro_seen`, `gwm_auth_user`, `nmc_academy_attempts`. | `COOKIES_TRACKING` | **CLEARED_FOR_ENGINEERING** | ✅ **Remediated**: All functional storage tokens documented in Privacy Policy Tab 1. |
| 10 | **MEEE AI Assistant** | `src/components/MeeeAIAssistant.tsx`, `src/components/LegalModal.tsx` | Simulated conversational chatbot. | `CONTENT_PUBLISHING`, `SECURITY` | **CLEARED_FOR_ENGINEERING** | ✅ **Remediated**: Educational advisory disclaimer published in Terms of Service Tab 2. |
| 11 | **Realtime Update Board & Riot Data Dragon Integration** | `src/components/UpdateBoard.tsx`, `src/hooks/useRiotDataDragon.ts`, `src/components/GamingPage.tsx` | Admin-published patch & community announcements; public game metadata from Riot CDN (`ddragon.leagueoflegends.com`). No personal user data collected. | `CONTENT_PUBLISHING`, `COPYRIGHT_IP` | **CLEARED_FOR_ENGINEERING** | ✅ **Verified**: Read-only public API; authoring restricted strictly to authenticated admin; Riot Games trademark disclaimer already present in Tab 3 of `LegalModal.tsx`. |

---

## Release Gate Summary

- **Total features audited:** 11
- **Status BLOCKED:** 0 (All 2 P0 blockers successfully remediated)
- **Status CLEARED_FOR_ENGINEERING:** 10
- **Status REVIEW_REQUIRED:** 1 (Intro video audio licensing check by owner)

**RELEASE DECISION: CLEARED FOR STAGING / DEMO DEPLOYMENT**
Core legal compliance gates for Vietnam data protection (Law 91/2025), E-commerce (Law 122/2025), and UGC (Decree 147/2024) are fully addressed.
