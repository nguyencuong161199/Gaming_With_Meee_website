import React, { memo } from 'react'
import { Language, TRANSLATIONS } from '../data/translations'
import { BRAND, SOCIAL_LINKS } from '../data/contentData'
import { SectionHeading } from './SectionHeading'
import { SocialLinks } from './SocialLinks'
import { Footer } from './Footer'
import { LegalTab } from './LegalModal'
import { UpdateBoard } from './UpdateBoard'
import { UpdateItem } from '../types/content'
import { useRiotDataDragon } from '../hooks/useRiotDataDragon'
import {
  Sparkles,
  Gamepad2,
  GraduationCap,
  ShoppingBag,
  ArrowRight,
  Play,
  ArrowDownRight,
  Phone,
  Mail,
  Flame,
  Award,
  Video,
  Activity,
  ShieldCheck
} from 'lucide-react'

interface HomePageProps {
  lang: Language
  onNavigateView: (view: 'about' | 'academy' | 'gaming' | 'store' | 'connect') => void
  onReplayIntro?: () => void
  onOpenLegal?: (tab?: LegalTab) => void
  onSelectUpdate?: (update: UpdateItem) => void
  onRequireLogin?: () => void
}

export const HomePage: React.FC<HomePageProps> = memo(({
  lang,
  onNavigateView,
  onReplayIntro,
  onOpenLegal,
  onSelectUpdate,
  onRequireLogin
}) => {
  const t = TRANSLATIONS[lang]
  const riotData = useRiotDataDragon()

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white relative overflow-x-hidden pt-16">
      {/* Ambient Atmospheric Glow (Lightweight GPU) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px]" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-[130px]" />
        <div className="absolute inset-0 grid-backdrop opacity-20" />
      </div>

      {/* 1. HERO SECTION (DYNAMIC KEY VISUAL WITH AMBIENT MOTION & COMMAND DECK) */}
      <section className="min-h-[75vh] md:min-h-[82vh] flex flex-col justify-center items-center text-center px-4 sm:px-8 relative z-10 py-6 sm:py-10 overflow-hidden">
        {/* Ambient Video Motion Key Visual (Muted, Feathered, Non-blocking) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-[0.16] mix-blend-screen filter saturate-150 scale-105"
            src="/assets/intro-gwm.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/60 to-[#020617]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#020617_80%)]" />
        </div>

        {/* Floating Replay Intro Button */}
        {onReplayIntro && (
          <div className="absolute top-2 right-4 sm:right-8 z-20">
            <button
              onClick={onReplayIntro}
              aria-label="Replay Intro Video"
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-secondary/85 hover:bg-brand-elevated border border-brand-border hover:border-brand-accent backdrop-blur-xl text-xs font-mono tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <Play className="w-3.5 h-3.5 text-brand-accent group-hover:scale-110 transition-transform fill-brand-accent/20" />
              <span className="text-brand-subtext group-hover:text-brand-text text-[11px]">
                {lang === 'VI' ? 'XEM LẠI INTRO' : 'REPLAY INTRO'}
              </span>
            </button>
          </div>
        )}

        {/* High-Contrast Hero Key Visual Command Deck */}
        <div className="relative mb-5 z-10 flex items-center justify-center gap-4 sm:gap-6">
          {/* Left Satellite Badge: Esports Meta Radar (Visible on lg+) */}
          <div className="hidden lg:flex flex-col items-end gap-1 p-3 rounded-2xl bg-brand-secondary/80 border border-brand-border/70 backdrop-blur-md shadow-xl text-right hover:border-purple-500/50 transition-colors">
            <div className="flex items-center gap-2 text-[10px] font-mono text-purple-400 font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <Activity className="w-3.5 h-3.5 text-purple-400" />
              <span>LIVE ESPORTS META</span>
            </div>
            <div className="text-[11px] font-mono text-brand-text font-semibold">
              TFT S13 • LOL S14 • FCO
            </div>
            <div className="text-[9px] font-mono text-brand-muted">
              S-TIER COMPS &amp; MACRO
            </div>
          </div>

          {/* Central Cybernetic Emblem Frame */}
          <div className="relative group">
            {/* Outer Animated Glow Ring */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-brand-accent via-cyan-400 to-amber-400 opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Tech Corner HUD Brackets */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-amber-400 z-20 pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400 z-20 pointer-events-none" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-amber-400 z-20 pointer-events-none" />

            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden border-2 border-brand-accent/90 bg-slate-950 shadow-2xl flex items-center justify-center">
              <img
                src="/assets/nmc-gwm-logo.jpeg"
                alt="Gaming With Meee & NMC Corp Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-2.5">
                <span className="text-[10px] font-mono text-cyan-300 font-bold tracking-widest uppercase">
                  GAMING WITH MEEE
                </span>
                <span className="text-[8px] font-mono text-brand-muted">
                  NMC CORP &bull; EST. 2024
                </span>
              </div>
            </div>
          </div>

          {/* Right Satellite Badge: Academy & AI Telemetry (Visible on lg+) */}
          <div className="hidden lg:flex flex-col items-start gap-1 p-3 rounded-2xl bg-brand-secondary/80 border border-brand-border/70 backdrop-blur-md shadow-xl text-left hover:border-emerald-500/50 transition-colors">
            <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400 font-bold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ACADEMY &amp; AI</span>
            </div>
            <div className="text-[11px] font-mono text-brand-text font-semibold">
              PSM I 97.5% • CCAR-F
            </div>
            <div className="text-[9px] font-mono text-brand-muted">
              {lang === 'VI' ? '1.450+ LƯỢT THI XÁC MINH' : '1,450+ VERIFIED EXAMS'}
            </div>
          </div>
        </div>

        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-secondary/90 border border-brand-border text-brand-accent text-xs font-mono font-medium tracking-widest uppercase mb-4 shadow-md backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.hero.tagline}</span>
        </div>

        {/* Oversized Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-brand-text leading-[0.95] tracking-tight uppercase mb-4 max-w-5xl">
          {t.hero.headline1} <br />
          <span className="text-stroke-tech">{t.hero.headline2}</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text via-brand-accent to-sky-400">
            {t.hero.headline3}
          </span>
        </h1>

        {/* Minimalist Subhead with Creator Attribution */}
        <p className="text-sm sm:text-base md:text-lg text-brand-subtext font-light tracking-wide max-w-xl mb-6 leading-relaxed">
          <span className="block">
            {t.hero.subheadPrefix} <span className="text-brand-text font-semibold">NMC Corp</span> &bull; {lang === 'VI' ? 'Tác giả:' : 'Creator:'} <strong className="text-brand-accent font-medium">Nguyễn Mạnh Cường (Edward)</strong>
          </span>
          <span className="block mt-1">
            {lang === 'VI' ? 'Hệ sinh thái ' : 'Exploring '}
            <span className="text-brand-accent font-medium">Gaming Esports</span>,{' '}
            <span className="text-brand-accent font-medium">NMC Academy (PSM I &amp; CCAR)</span> &amp;{' '}
            <span className="text-brand-accent font-medium">AI Technology</span>.
          </span>
        </p>

        {/* Action CTAs: Direct Jump to Key Hubs (Comfortably Above the Fold) */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => onNavigateView('academy')}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 hover:from-blue-500 hover:via-sky-400 hover:to-cyan-300 text-white font-mono text-xs font-black uppercase tracking-wider border-2 border-cyan-300/60 hover:border-cyan-200 shadow-xl shadow-cyan-500/35 hover:shadow-cyan-400/60 hover:-translate-y-0.5 active:scale-95 transition-all group"
          >
            <GraduationCap className="w-4.5 h-4.5 text-cyan-100 group-hover:scale-110 transition-transform drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
              {lang === 'VI' ? 'THI THỬ ACADEMY' : 'ACADEMY EXAMS'}
            </span>
            <ArrowDownRight className="w-4 h-4 text-cyan-100 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onNavigateView('gaming')}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-secondary/90 hover:bg-brand-elevated border border-purple-500/50 hover:border-purple-400 backdrop-blur-md text-brand-text hover:text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-purple-950/40 hover:shadow-purple-500/25 hover:-translate-y-0.5 active:scale-95 transition-all group"
          >
            <Gamepad2 className="w-4.5 h-4.5 text-purple-400 group-hover:scale-110 transition-transform" />
            <span>{lang === 'VI' ? 'CẨM NANG GAMING' : 'GAMING HUB'}</span>
          </button>

          <button
            onClick={() => onNavigateView('store')}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-brand-secondary/90 hover:bg-brand-elevated border border-amber-500/50 hover:border-amber-400 backdrop-blur-md text-brand-text hover:text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-950/40 hover:shadow-amber-500/25 hover:-translate-y-0.5 active:scale-95 transition-all group"
          >
            <ShoppingBag className="w-4.5 h-4.5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span>{lang === 'VI' ? 'CỬA HÀNG STORE' : 'STORE & GEAR'}</span>
          </button>
        </div>

        {/* Social Proof Line (Above the fold) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mt-6 pt-5 border-t border-brand-border/40 text-[11px] sm:text-xs font-mono text-brand-subtext">
          <span className="flex items-center gap-1.5 text-amber-400 font-semibold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            <span>⭐</span> 4.9/5 {lang === 'VI' ? 'Đánh giá học viên' : 'Student Rating'}
          </span>
          <span className="flex items-center gap-1.5 text-blue-400 font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
            <span>🎯</span> 1.450+ {lang === 'VI' ? 'lượt thi PSM I & CCAR' : 'Completed Exams'}
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <span>👥</span> 5.000+ {lang === 'VI' ? 'thành viên Esports' : 'Community Members'}
          </span>
        </div>

        {/* 4 Games Quick Ticker */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
          {[
            { id: 'tft', name: '🎮 TFT Mùa 13 (Arcane)', color: 'text-amber-400 border-amber-500/30 hover:border-amber-400' },
            { id: 'lol', name: '⚔️ LOL S14 Meta', color: 'text-cyan-400 border-cyan-500/30 hover:border-cyan-400' },
            { id: 'fco', name: '⚽ FC Online 4-2-3-1', color: 'text-emerald-400 border-emerald-500/30 hover:border-emerald-400' },
            { id: 'pubgm', name: '🎯 PUBG Mobile Gyro', color: 'text-rose-400 border-rose-500/30 hover:border-rose-400' }
          ].map((g) => (
            <button
              key={g.id}
              onClick={() => onNavigateView('gaming')}
              className={`px-3 py-1 rounded-full bg-slate-900/80 border ${g.color} text-[11px] font-mono transition-all hover:scale-105 active:scale-95`}
            >
              {g.name}
            </button>
          ))}
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
                  ✓ {lang === 'VI' ? 'CCAR-F (10 câu)' : 'CCAR-F (10 questions)'}
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-emerald-400">
                  Pass: 85%
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between font-mono text-xs text-cyan-400 group-hover:text-cyan-300 font-bold tracking-wider uppercase">
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
                  ? 'Tìm hiểu về tác giả Nguyễn Mạnh Cường, thương hiệu mẹ NMC Corp và triết lý: "Play. Explore. Create." Kết hợp giữa sáng tạo nội dung gaming, công nghệ AI và phân tích tài chính.'
                  : 'Learn about creator Nguyen Manh Cuong, parent brand NMC Corp, and the philosophy: "Play. Explore. Create." Merging gaming culture with synthetic intelligence.'}
              </p>

              {/* Badges Matrix */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-[11px] font-mono text-brand-subtext">
                  {lang === 'VI' ? '👤 Tác giả: Nguyễn Mạnh Cường' : '👤 Creator: Nguyen Manh Cuong'}
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

      {/* 3. DYNAMIC COMMUNITY & LATEST ACTIVITY SECTION */}
      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 relative z-10 border-t border-brand-border/50">
        <SectionHeading
          number="02"
          tag={lang === 'VI' ? 'CỘNG ĐỒNG & HOẠT ĐỘNG // COMMUNITY PULSE' : 'COMMUNITY PULSE // LATEST ACTIVITY'}
          title={lang === 'VI' ? 'CẬP NHẬT MỚI NHẤT & BẢNG VÀNG' : 'LATEST META & HALL OF FAME'}
          subtitle={
            lang === 'VI'
              ? 'Theo dõi liên tục các phân tích meta hotfix, bảng vàng học viên đạt chứng chỉ quốc tế và các cẩm nang thực chiến mới nhất.'
              : 'Real-time hotfix meta breakdowns, verified student certification scorecards, and pro gameplay tactics.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Card 1: Meta Hotfix Live Riot Sync */}
          <div
            onClick={() => onNavigateView('gaming')}
            className="group rounded-3xl bg-brand-secondary border border-brand-border hover:border-amber-500/80 p-6 transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" />
                  <span>RIOT LIVE // {riotData.patchLabel}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
                <span className="text-[10px] font-mono text-brand-muted">
                  {lang === 'VI' ? 'HÔM NAY' : 'TODAY'}
                </span>
              </div>

              <h4 className="font-display font-bold text-lg text-brand-text group-hover:text-amber-400 transition-colors mb-2 leading-snug">
                {lang === 'VI'
                  ? `Meta ${riotData.patchLabel}: Caitlyn & Cảnh Binh Siêu Gánh Kèo`
                  : `Meta ${riotData.patchLabel}: Caitlyn & Enforcer S-Tier Setup`}
              </h4>
              <p className="text-xs text-brand-subtext font-light leading-relaxed mb-4">
                {lang === 'VI'
                  ? `Hệ thống Data Dragon tự động đồng bộ bản cập nhật ${riotData.patchLabel} (v${riotData.patchVersion}). Tỷ lệ thắng Caitlyn đạt 68.2% ở bậc Thách Đấu. Đã cập nhật cẩm nang Fast 8.`
                  : `Riot Data Dragon auto-syncs live patch ${riotData.patchLabel} (v${riotData.patchVersion}). Caitlyn top-4 rate at 68.2% in Challenger lobbies. Fast-8 tempo playbook refreshed.`}
              </p>
            </div>

            <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
              <span>{lang === 'VI' ? 'XEM CHI TIẾT ĐỘI HÌNH' : 'VIEW META COMP'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Academy Hall of Fame */}
          <div
            onClick={() => onNavigateView('academy')}
            className="group rounded-3xl bg-brand-secondary border border-brand-border hover:border-blue-500/80 p-6 transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>BẢNG VÀNG TUẦN NÀY</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">
                  97.5% PASS
                </span>
              </div>

              <h4 className="font-display font-bold text-lg text-brand-text group-hover:text-blue-400 transition-colors mb-2 leading-snug">
                {lang === 'VI'
                  ? '14 Học Viên Vượt Qua Kỳ Thi PSM I Chuẩn Scrum.org'
                  : '14 Students Cleared Official Scrum.org PSM I Exam'}
              </h4>
              <p className="text-xs text-brand-subtext font-light leading-relaxed mb-4">
                {lang === 'VI'
                  ? 'Thành tích nổi bật: Trần Hoàng Nam (FPT Software) đạt 78/80 câu thi thật. Ngân hàng đề thi 15 câu đã đồng bộ định nghĩa Scrum Guide 2020.'
                  : 'Standout score: Tran Hoang Nam (FPT) scored 78/80 on official exam. 15-question bank updated with Scrum Guide 2020 leadership definitions.'}
              </p>
            </div>

            <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between font-mono text-xs text-blue-400 font-bold uppercase tracking-wider">
              <span>{lang === 'VI' ? 'THI THỬ ACADEMY NGAY' : 'TAKE MOCK EXAM'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Creator Video Highlight */}
          <a
            href={SOCIAL_LINKS.find((s) => s.platform === 'TikTok')?.url || 'https://www.tiktok.com/@_gamingwithmeee'}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-brand-secondary border border-brand-border hover:border-pink-500/80 p-6 transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-400 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" />
                  <span>HIGHLIGHT & CLIP TIKTOK</span>
                </span>
                <span className="text-[10px] font-mono text-brand-muted">
                  45K+ VIEWS
                </span>
              </div>

              <h4 className="font-display font-bold text-lg text-brand-text group-hover:text-pink-400 transition-colors mb-2 leading-snug">
                {lang === 'VI'
                  ? 'Kỹ Thuật Ghìm Tâm Con Quay PUBG Mobile & Sút ZD FC Online'
                  : 'PUBG Mobile Gyro Spray & FC Online ZD Curler Guides'}
              </h4>
              <p className="text-xs text-brand-subtext font-light leading-relaxed mb-4">
                {lang === 'VI'
                  ? 'Clip mẹo chỉnh độ nhạy Gyroscope sấy M416 x3 không giật trên kênh Gaming with meee thu hút hàng chục ngàn lượt xem và bình luận.'
                  : 'Practical video demo on 3x scope spray calibration and finesse finishes on Gaming with meee TikTok channel.'}
              </p>
            </div>

            <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between font-mono text-xs text-pink-400 font-bold uppercase tracking-wider">
              <span>{lang === 'VI' ? 'THEO DÕI TRÊN TIKTOK' : 'WATCH ON TIKTOK'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* 3. REALTIME UPDATE BOARD SECTION (SUPABASE CLOUD & WEBSOCKET) */}
      <div className="border-t border-brand-border/50">
        <UpdateBoard
          lang={lang}
          onSelectUpdate={onSelectUpdate}
          onRequireLogin={onRequireLogin}
        />
      </div>

      {/* 4. SECTION: KẾT NỐI & LIÊN HỆ */}
      <section id="connect" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 relative z-10 border-t border-brand-border/50">
        <SectionHeading
          number="04"
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
        onOpenLegal={onOpenLegal}
      />
    </div>
  )
})

HomePage.displayName = 'HomePage'
export default HomePage
