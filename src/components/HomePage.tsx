import React, { memo } from 'react'
import { Language, TRANSLATIONS } from '../data/translations'
import { BRAND, SOCIAL_LINKS } from '../data/contentData'
import { SectionHeading } from './SectionHeading'
import { SocialLinks } from './SocialLinks'
import { Footer } from './Footer'
import {
  Sparkles,
  Gamepad2,
  GraduationCap,
  ShoppingBag,
  ArrowRight,
  Play,
  ArrowDownRight,
  Phone,
  Mail
} from 'lucide-react'

interface HomePageProps {
  lang: Language
  onNavigateView: (view: 'about' | 'academy' | 'gaming' | 'store' | 'connect') => void
  onReplayIntro?: () => void
}

export const HomePage: React.FC<HomePageProps> = memo(({
  lang,
  onNavigateView,
  onReplayIntro
}) => {
  const t = TRANSLATIONS[lang]

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white relative overflow-x-hidden pt-16">
      {/* Ambient Atmospheric Logo & Glow (Lightweight GPU) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[130px]" />
        <div className="absolute inset-0 grid-backdrop opacity-20" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center text-center px-5 sm:px-8 relative z-10 my-auto py-12">
        {/* Floating Replay Intro Button */}
        {onReplayIntro && (
          <div className="absolute top-4 right-4 sm:right-8 z-20">
            <button
              onClick={onReplayIntro}
              aria-label="Replay Intro Video"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-brand-secondary/85 hover:bg-brand-elevated border border-brand-border hover:border-brand-accent backdrop-blur-xl text-xs font-mono tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <Play className="w-3.5 h-3.5 text-brand-accent group-hover:scale-110 transition-transform fill-brand-accent/20" />
              <span className="text-brand-subtext group-hover:text-brand-text text-[11px]">
                {lang === 'VI' ? 'XEM LẠI INTRO' : 'REPLAY INTRO'}
              </span>
            </button>
          </div>
        )}

        {/* Ambient Logo Graphic */}
        <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl overflow-hidden opacity-25 filter contrast-125 brightness-95 pointer-events-none border border-brand-accent/20 shadow-2xl shadow-brand-accent/10 mb-6">
          <img
            src="/assets/nmc-gwm-logo.jpeg"
            alt="NMC GWM Background Logo"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-secondary/90 border border-brand-border text-brand-accent text-xs font-mono font-medium tracking-widest uppercase mb-5 shadow-md backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.hero.tagline}</span>
        </div>

        {/* Oversized Headline */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[88px] text-brand-text leading-[0.9] tracking-tighter uppercase mb-5 max-w-5xl">
          {t.hero.headline1} <br />
          <span className="text-stroke-tech">{t.hero.headline2}</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-brand-accent to-sky-400">
            {t.hero.headline3}
          </span>
        </h1>

        {/* Minimalist Subhead (2 Clean Balanced Lines) */}
        <p className="text-sm sm:text-base md:text-lg text-brand-subtext font-light tracking-wide max-w-xl mb-8 leading-relaxed">
          <span className="block">
            {t.hero.subheadPrefix} <span className="text-brand-text font-semibold">NMC Corp</span>
          </span>
          <span className="block mt-1 sm:mt-1.5">
            {lang === 'VI' ? 'Khám phá ' : 'Exploring '}
            <span className="text-brand-accent font-medium">Gaming</span>,{' '}
            <span className="text-brand-accent font-medium">Technology</span> &amp;{' '}
            <span className="text-brand-accent font-medium">AI</span>.
          </span>
        </p>

        {/* Action CTAs: Direct Jump to Key Hubs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigateView('academy')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-accent/30 hover:shadow-brand-accent/50 hover:-translate-y-0.5 transition-all group"
          >
            <GraduationCap className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>{lang === 'VI' ? 'THI THỬ ACADEMY' : 'ACADEMY EXAMS'}</span>
            <ArrowDownRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigateView('gaming')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-secondary/80 hover:bg-brand-elevated border border-brand-border hover:border-brand-accent backdrop-blur-md text-brand-text font-mono text-xs font-medium uppercase tracking-wider transition-all"
          >
            <Gamepad2 className="w-4 h-4 text-brand-accent" />
            <span>{lang === 'VI' ? 'CẨM NANG GAMING' : 'GAMING HUB'}</span>
          </button>

          <button
            onClick={() => onNavigateView('store')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-secondary/80 hover:bg-brand-elevated border border-brand-border hover:border-brand-accent backdrop-blur-md text-brand-text font-mono text-xs font-medium uppercase tracking-wider transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-brand-accent" />
            <span>{lang === 'VI' ? 'CỬA HÀNG STORE' : 'STORE & GEAR'}</span>
          </button>
        </div>
      </section>

      {/* 2. BENTO SHOWCASE GRID // 4 TRỤ CỘT CHÍNH */}
      <section id="hubs" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 relative z-10 border-t border-brand-border/50">
        <SectionHeading
          number="01"
          tag={lang === 'VI' ? 'HỆ SINH THÁI // ECOSYSTEM' : 'ECOSYSTEM // HUBS'}
          title={lang === 'VI' ? 'CÁC CHUYÊN MỤC TRỌNG TÂM' : 'CORE ECOSYSTEM HUBS'}
          subtitle={
            lang === 'VI'
              ? 'Lựa chọn từng chuyên mục bên dưới để truy cập giao diện chuyên biệt và tính năng tương tác chuyên sâu.'
              : 'Select any portal hub below to enter the dedicated interactive experience and complete resources.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Card 1: NMC ACADEMY */}
          <div
            onClick={() => onNavigateView('academy')}
            className="group relative rounded-3xl bg-brand-secondary border border-brand-border hover:border-blue-500/80 p-7 transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[10px] font-mono font-bold tracking-wider uppercase">
                  MOCK EXAMS
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-brand-text group-hover:text-blue-400 transition-colors uppercase tracking-tight mb-2">
                NMC ACADEMY
              </h3>
              <p className="text-sm text-brand-subtext font-light leading-relaxed mb-6">
                {lang === 'VI'
                  ? 'Nền tảng thi thử chứng chỉ quốc tế: Scrum Master (PSM I chuẩn Scrum Guide 2020) & Federal Reserve CCAR. Tính giờ thực, giải thích chi tiết đáp án và trích dẫn chuẩn.'
                  : 'Official-standard certification simulator: Professional Scrum Master (PSM I) & Federal Reserve CCAR. Realistic timer, rationales, and performance scorecards.'}
              </p>

              {/* Badges Matrix */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  ✓ {lang === 'VI' ? 'PSM I™ (15 câu)' : 'PSM I™ (15 questions)'}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  ✓ {lang === 'VI' ? 'CCAR-F (5 câu)' : 'CCAR-F (5 questions)'}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-emerald-400">
                  Pass: 85%
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between font-mono text-xs text-blue-400 font-bold tracking-wider uppercase">
              <span>{lang === 'VI' ? 'VÀO PHÒNG THI THỬ' : 'ENTER EXAM PORTAL'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: GAMING HUB */}
          <div
            onClick={() => onNavigateView('gaming')}
            className="group relative rounded-3xl bg-brand-secondary border border-brand-border hover:border-purple-500/80 p-7 transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30 text-[10px] font-mono font-bold tracking-wider uppercase">
                  {lang === 'VI' ? '4 TỰA GAME ESPORTS' : '4 CORE ESPORTS'}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-brand-text group-hover:text-purple-400 transition-colors uppercase tracking-tight mb-2">
                GAMING HUB
              </h3>
              <p className="text-sm text-brand-subtext font-light leading-relaxed mb-6">
                {lang === 'VI'
                  ? 'Cổng chuyên mục dành cho 4 tựa game cốt lõi: Đấu Trường Chân Lý (TFT), LMHT, FC Online và PUBG Mobile. Chọn từng game để xem cẩm nang, đội hình S-Tier và thông số thi đấu.'
                  : 'Dedicated portals for 4 core titles: Teamfight Tactics, League of Legends, FC Online, and PUBG Mobile with S-Tier comps and pro configs.'}
              </p>

              {/* Badges Matrix */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  🎮 TFT
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  ⚔️ LOL
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  ⚽ FC Online
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  🎯 PUBG Mobile
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between font-mono text-xs text-purple-400 font-bold tracking-wider uppercase">
              <span>{lang === 'VI' ? 'KHÁM PHÁ CÁC TỰA GAME' : 'EXPLORE GAME HUBS'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: NMC STORE */}
          <div
            onClick={() => onNavigateView('store')}
            className="group relative rounded-3xl bg-brand-secondary border border-brand-border hover:border-amber-500/80 p-7 transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] font-mono font-bold tracking-wider uppercase">
                  CYBER SHOP
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-brand-text group-hover:text-amber-400 transition-colors uppercase tracking-tight mb-2">
                NMC STORE
              </h3>
              <p className="text-sm text-brand-subtext font-light leading-relaxed mb-6">
                {lang === 'VI'
                  ? 'Cửa hàng phụ kiện phím cơ, lót chuột kính cường lực siêu trượt và trọn bộ tài liệu ôn thi PSM I. Hiển thị rõ giá VNĐ, số lượng kho còn lại và đặt mua Shopee chính hãng.'
                  : 'Curated custom keycaps, frictionless glass mousepads, and complete exam master kits. Live inventory counters, VND pricing, and official Shopee links.'}
              </p>

              {/* Badges Matrix */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  {lang === 'VI' ? '🛒 Keycap PBT Neon' : '🛒 PBT Neon Keycaps'}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  {lang === 'VI' ? '📚 Bộ đề PSM I 300+' : '📚 300+ PSM I Mock Bank'}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  {lang === 'VI' ? '⚡ Lót chuột Kính FPS' : '⚡ FPS Glass Mousepad'}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between font-mono text-xs text-amber-400 font-bold tracking-wider uppercase">
              <span>{lang === 'VI' ? 'GHÉ THĂM CỬA HÀNG' : 'VISIT STORE'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: GIỚI THIỆU */}
          <div
            onClick={() => onNavigateView('about')}
            className="group relative rounded-3xl bg-brand-secondary border border-brand-border hover:border-emerald-500/80 p-7 transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

            <div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold tracking-wider uppercase">
                  ABOUT & BRAND
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-brand-text group-hover:text-emerald-400 transition-colors uppercase tracking-tight mb-2">
                {lang === 'VI' ? 'GIỚI THIỆU // NMC CORP' : 'ABOUT // NMC CORP'}
              </h3>
              <p className="text-sm text-brand-subtext font-light leading-relaxed mb-6">
                {lang === 'VI'
                  ? 'Tìm hiểu về tác giả Nguyễn Cường, thương hiệu mẹ NMC Corp và triết lý: "Play. Explore. Create." Kết hợp giữa sáng tạo nội dung gaming, công nghệ AI và phân tích tài chính.'
                  : 'Learn about creator Nguyen Cuong, parent brand NMC Corp, and the philosophy: "Play. Explore. Create." Merging gaming culture with synthetic intelligence.'}
              </p>

              {/* Badges Matrix */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  {lang === 'VI' ? '👤 Tác giả: Nguyễn Cường' : '👤 Creator: Nguyen Cuong'}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  🏢 NMC Corp
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  {lang === 'VI' ? '✨ Triết lý sáng tạo' : '✨ Creative Philosophy'}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between font-mono text-xs text-emerald-400 font-bold tracking-wider uppercase">
              <span>{lang === 'VI' ? 'TÌM HIỂU THÊM' : 'READ BIO & STORY'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: KẾT NỐI & LIÊN HỆ */}
      <section id="connect" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 relative z-10 border-t border-brand-border/50">
        <SectionHeading
          number="02"
          tag={t.connect.tag}
          title={t.connect.title}
          subtitle={t.connect.subtitle}
        />

        {/* Social Grid */}
        <SocialLinks links={SOCIAL_LINKS} lang={lang} />

        {/* Direct Contact Banner */}
        <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-brand-secondary/90 border border-brand-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div>
              <span className="font-mono text-[10px] text-brand-muted uppercase tracking-wider block">
                {t.connect.contactPerson}
              </span>
              <span className="font-display font-bold text-lg text-brand-text">
                {BRAND.contactPerson}
              </span>
            </div>
            <a
              href={`tel:${BRAND.phone}`}
              className="inline-flex items-center gap-2 font-mono text-sm text-brand-accent hover:underline"
            >
              <Phone className="w-4 h-4" />
              <span>{BRAND.phone}</span>
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center gap-2 font-mono text-sm text-brand-subtext hover:text-brand-accent hover:underline"
            >
              <Mail className="w-4 h-4" />
              <span>{BRAND.email}</span>
            </a>
          </div>

          <a
            href={`tel:${BRAND.phone}`}
            className="px-5 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md shadow-brand-accent/20"
          >
            {t.connect.callNow} ({BRAND.phone})
          </a>
        </div>
      </section>

      {/* 4. FOOTER */}
      <Footer
        lang={lang}
        onBackToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateScreen={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  )
})

HomePage.displayName = 'HomePage'
export default HomePage
