import React, { useState } from 'react'
import { Language } from '../data/translations'
import { GAMING_DATA, GameItem } from '../data/gamingData'
import {
  Gamepad2,
  ArrowLeft,
  ArrowRight,
  Trophy,
  Sliders,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  ExternalLink
} from 'lucide-react'

interface GamingPageProps {
  lang: Language
  onBack: () => void
}

type DetailTab = 'comps' | 'settings' | 'guides'

export const GamingPage: React.FC<GamingPageProps> = ({ lang, onBack }) => {
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<DetailTab>('comps')

  const activeGame: GameItem | undefined = GAMING_DATA.find((g) => g.id === selectedGameId)

  const handleSelectGame = (gameId: string) => {
    setSelectedGameId(gameId)
    setActiveTab('comps')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToAllGames = () => {
    setSelectedGameId(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white relative overflow-x-hidden pt-20 pb-16">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 grid-backdrop opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 animate-fade-in">
        {/* ======================================================== */}
        {/* 1. MAIN OVERVIEW: 4 GAMES SHOWCASE (NO MIXING, LOGOS SHOWN) */}
        {/* ======================================================== */}
        {!activeGame && (
          <div>
            {/* Top Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-brand-border">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[11px] font-mono uppercase tracking-widest mb-3">
                  <Gamepad2 className="w-3.5 h-3.5" />
                  <span>GAMING HUB</span>
                </div>
                <h1 className="font-display font-black text-3xl sm:text-5xl text-brand-text tracking-tight uppercase">
                  GAMING HUB
                </h1>
                <p className="text-sm text-brand-subtext font-light mt-1.5 max-w-2xl leading-relaxed">
                  {lang === 'VI'
                    ? 'Chọn tựa game bên dưới để khám phá chi tiết chiến thuật, đội hình S-Tier, cẩm nang leo rank và thông số cài đặt thi đấu tối ưu.'
                    : 'Select a game title below to explore specialized tactical setups, S-Tier comps, ranked playbooks, and competitive configurations.'}
                </p>
              </div>

              <button
                onClick={onBack}
                className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-secondary border border-brand-border hover:border-brand-accent text-brand-subtext hover:text-white text-xs font-mono transition-all shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{lang === 'VI' ? 'VỀ TRANG CHỦ' : 'BACK TO HOME'}</span>
              </button>
            </div>

            {/* 4 Discrete Game Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mb-12">
              {GAMING_DATA.map((game) => {
                return (
                  <div
                    key={game.id}
                    onClick={() => handleSelectGame(game.id)}
                    className={`group relative rounded-3xl bg-brand-secondary/90 border border-brand-border ${game.accentBorder} p-6 sm:p-8 transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden`}
                  >
                    {/* Atmospheric Glow */}
                    <div
                      className={`absolute -top-16 -right-16 w-48 h-48 ${game.glowColor} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform`}
                    />

                    <div>
                      {/* Logo Container */}
                      <div className="h-24 sm:h-28 px-6 py-4 rounded-2xl bg-black/60 border border-white/10 flex items-center justify-center overflow-hidden mb-6 shadow-inner group-hover:border-white/20 transition-colors">
                        <img
                          src={game.logo}
                          alt={game.name}
                          className={`max-h-16 sm:max-h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-105 ${
                            game.logoNeedsInvert ? 'brightness-0 invert opacity-95' : ''
                          }`}
                        />
                      </div>

                      {/* Developer & Genre Badges */}
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono">
                        <span className="px-2.5 py-0.5 rounded-md bg-brand-elevated border border-brand-border text-brand-muted">
                          {game.developer}
                        </span>
                        <span className={`font-semibold ${game.accentColor}`}>
                          &bull; {lang === 'VI' ? game.genreVi : game.genreEn}
                        </span>
                      </div>

                      {/* Game Title */}
                      <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-text group-hover:text-white transition-colors tracking-tight uppercase mb-2">
                        {lang === 'VI' ? game.nameVi : game.nameEn}
                      </h2>

                      {/* Tagline */}
                      <p className="text-xs sm:text-sm text-brand-subtext font-light leading-relaxed mb-6">
                        {lang === 'VI' ? game.taglineVi : game.taglineEn}
                      </p>

                      {/* Feature Highlights Pill Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {game.featureBadges?.map((badge, bIdx) => (
                          <span
                            key={bIdx}
                            className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border/70 text-[11px] font-mono text-brand-subtext flex items-center gap-1.5"
                          >
                            {badge.iconType === 'trophy' && <Trophy className="w-3.5 h-3.5 text-amber-400" />}
                            {badge.iconType === 'sliders' && <Sliders className="w-3.5 h-3.5 text-cyan-400" />}
                            {badge.iconType === 'book' && <BookOpen className="w-3.5 h-3.5 text-emerald-400" />}
                            <span>{lang === 'VI' ? badge.labelVi : badge.labelEn}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action CTA */}
                    <div className="pt-4 border-t border-brand-border/60 flex items-center justify-between font-mono text-xs font-bold tracking-wider uppercase">
                      <span className={game.accentColor}>
                        {lang === 'VI' ? 'VÀO CHI TIẾT TỰA GAME' : 'ENTER GAME PORTAL'}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-brand-elevated border border-brand-border group-hover:border-white/30 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                        <ArrowRight className="w-4 h-4 text-brand-text" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom Back Button */}
            <div className="flex items-center justify-between pt-6 border-t border-brand-border/60">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-accent/25"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{lang === 'VI' ? 'QUAY LẠI TRANG CHỦ' : 'BACK TO HOME'}</span>
              </button>

              <span className="font-mono text-xs text-brand-muted">
                GAMING WITH MEEE &bull; 4 CORE ESPORTS
              </span>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* 2. DEDICATED GAME DETAIL VIEW (IN-DEPTH TACTICS & COMPS) */}
        {/* ======================================================== */}
        {activeGame && (
          <div className="animate-fade-in">
            {/* Top Sub-Navigation Bar */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-border">
              <button
                onClick={handleBackToAllGames}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-secondary border border-brand-border hover:border-brand-accent text-brand-subtext hover:text-white text-xs font-mono transition-all shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{lang === 'VI' ? '← DANH SÁCH TỰA GAME' : '← ALL GAMES'}</span>
              </button>

              <span className="font-mono text-xs text-brand-muted hidden sm:inline">
                GAMING HUB &bull; {activeGame.name.toUpperCase()}
              </span>
            </div>

            {/* Game Hero Banner Card */}
            <div className="rounded-3xl bg-brand-secondary/90 border border-brand-border p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 mb-8 shadow-2xl backdrop-blur-md relative overflow-hidden">
              <div
                className={`absolute -top-20 -right-20 w-64 h-64 ${activeGame.glowColor} rounded-full blur-3xl pointer-events-none`}
              />

              {/* Logo Box */}
              <div className="w-36 h-28 sm:w-44 sm:h-32 px-5 py-4 rounded-2xl bg-black/70 border border-white/15 flex items-center justify-center shrink-0 shadow-2xl">
                <img
                  src={activeGame.logo}
                  alt={activeGame.name}
                  className={`max-h-20 sm:max-h-24 w-auto object-contain ${
                    activeGame.logoNeedsInvert ? 'brightness-0 invert opacity-95' : ''
                  }`}
                />
              </div>

              {/* Game Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-elevated border border-brand-border text-xs font-mono mb-3">
                  <span className="text-brand-muted">{activeGame.developer}</span>
                  <span className={activeGame.accentColor}>
                    &bull; {lang === 'VI' ? activeGame.genreVi : activeGame.genreEn}
                  </span>
                </div>
                <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-text uppercase tracking-tight mb-2">
                  {lang === 'VI' ? activeGame.nameVi : activeGame.nameEn}
                </h1>
                <p className="text-sm text-brand-subtext font-light leading-relaxed max-w-3xl">
                  {lang === 'VI' ? activeGame.descriptionVi : activeGame.descriptionEn}
                </p>
              </div>
            </div>

            {/* In-Depth Interactive Tabs */}
            <div className="flex items-center gap-2 border-b border-brand-border/80 mb-8 overflow-x-auto pb-2 scrollbar-none">
              <button
                onClick={() => setActiveTab('comps')}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                  activeTab === 'comps'
                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/25'
                    : 'bg-brand-secondary/80 border border-brand-border text-brand-subtext hover:text-white'
                }`}
              >
                <Trophy className="w-4 h-4" />
                <span>
                  {lang === 'VI'
                    ? (activeGame.tabTitles?.tab1Vi || 'ĐỘI HÌNH & CHIẾN THUẬT S-TIER')
                    : (activeGame.tabTitles?.tab1En || 'S-TIER COMPS & FORMATIONS')}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                  activeTab === 'settings'
                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/25'
                    : 'bg-brand-secondary/80 border border-brand-border text-brand-subtext hover:text-white'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>
                  {lang === 'VI'
                    ? (activeGame.tabTitles?.tab2Vi || 'CÀI ĐẶT THI ĐẤU & THÔNG SỐ')
                    : (activeGame.tabTitles?.tab2En || 'PRO SETTINGS & CONTROLS')}
                </span>
              </button>

              <button
                onClick={() => setActiveTab('guides')}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                  activeTab === 'guides'
                    ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/25'
                    : 'bg-brand-secondary/80 border border-brand-border text-brand-subtext hover:text-white'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>
                  {lang === 'VI'
                    ? (activeGame.tabTitles?.tab3Vi || 'CẨM NANG LEO RANK')
                    : (activeGame.tabTitles?.tab3En || 'RANKED MACRO PLAYBOOK')}
                </span>
              </button>
            </div>

            {/* TAB CONTENT 1: S-TIER COMPS */}
            {activeTab === 'comps' && (
              <div className="space-y-6 mb-12">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-xs font-bold uppercase text-brand-accent tracking-widest flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {lang === 'VI'
                        ? '// CÁC ĐỘI HÌNH & BÀI ĐÁNH ĐẠT HIỆU QUẢ CAO NHẤT'
                        : '// HIGHEST WIN-RATE META FORMATIONS'}
                    </span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {activeGame.metaComps.map((comp) => (
                    <div
                      key={comp.id}
                      className="p-6 sm:p-7 rounded-2xl bg-brand-secondary border border-brand-border hover:border-brand-accent/50 transition-all shadow-xl flex flex-col justify-between"
                    >
                      <div>
                        {/* Tier & Title */}
                        <div className="flex items-center justify-between gap-3 mb-3">
                          <span className="px-3 py-1 rounded-md bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono text-xs font-black tracking-wider">
                            {comp.tier}
                          </span>
                          <span className="text-[11px] font-mono text-brand-muted">
                            META RECOMMENDED
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-xl text-brand-text mb-2">
                          {comp.name}
                        </h4>

                        <p className="text-xs text-brand-subtext font-light leading-relaxed mb-5">
                          {lang === 'VI' ? comp.playstyleVi : comp.playstyleEn}
                        </p>

                        {/* Core Units / Positions */}
                        <div className="mb-4">
                          <span className="text-[10px] font-mono text-brand-muted block uppercase mb-1.5">
                            {lang === 'VI' ? 'Quân cờ / Nhân sự chủ chốt:' : 'Core Units / Roster:'}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {comp.coreUnits.map((unit, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border text-xs font-mono text-brand-text"
                              >
                                {unit}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Core Items / Tactics */}
                        <div className="mb-5">
                          <span className="text-[10px] font-mono text-brand-muted block uppercase mb-1.5">
                            {lang === 'VI' ? 'Trang bị / Chiến thuật cần có:' : 'Key Items / Build Strategy:'}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {comp.coreItemsOrTactics.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-accent/30 text-xs font-mono text-brand-accent"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Pro Tip Box */}
                      <div className="p-3.5 rounded-xl bg-brand-bg/60 border border-brand-border/60 text-xs text-brand-subtext flex items-start gap-2.5">
                        <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">
                          <strong className="text-brand-text font-bold">
                            {lang === 'VI' ? 'Mẹo thực chiến: ' : 'Pro Tip: '}
                          </strong>
                          {lang === 'VI' ? comp.tipsVi : comp.tipsEn}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: SETTINGS & CONFIGS */}
            {activeTab === 'settings' && (
              <div className="mb-12">
                <h3 className="font-mono text-xs font-bold uppercase text-brand-accent tracking-widest mb-6 flex items-center gap-2">
                  <Sliders className="w-4 h-4" />
                  <span>
                    {lang === 'VI'
                      ? '// THÔNG SỐ CÀI ĐẶT THI ĐẤU CHUẨN XÁC'
                      : '// COMPETITIVE HARDWARE & INPUT CALIBRATION'}
                  </span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {activeGame.settings.map((stg, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-brand-secondary border border-brand-border shadow-lg"
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <h4 className="font-display font-bold text-base text-brand-text">
                          {lang === 'VI' ? stg.nameVi : stg.nameEn}
                        </h4>
                        <span className="px-2 py-0.5 rounded bg-brand-accent/15 text-brand-accent font-mono text-[10px] font-bold uppercase">
                          CONFIG
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-brand-elevated border border-brand-border/80 font-mono text-xs font-bold text-emerald-400 mb-3">
                        {stg.value}
                      </div>

                      <p className="text-xs text-brand-subtext font-light leading-relaxed">
                        {lang === 'VI' ? stg.noteVi : stg.noteEn}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: RANKED MACRO GUIDES */}
            {activeTab === 'guides' && (
              <div className="mb-12">
                <h3 className="font-mono text-xs font-bold uppercase text-brand-accent tracking-widest mb-6 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>
                    {lang === 'VI'
                      ? '// CẨM NANG VĨ MÔ & CHIẾN THUẬT LEO RANK'
                      : '// ADVANCED MACRO & DECISION-MAKING GUIDES'}
                  </span>
                </h3>

                <div className="space-y-6">
                  {activeGame.guides.map((g) => (
                    <div
                      key={g.id}
                      className="p-6 sm:p-7 rounded-2xl bg-brand-secondary border border-brand-border shadow-xl"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-brand-accent/15 border border-brand-accent/30 text-brand-accent text-[10px] font-mono font-bold uppercase tracking-wider">
                          {g.tag}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-xl text-brand-text mb-2">
                        {lang === 'VI' ? g.titleVi : g.titleEn}
                      </h4>

                      <p className="text-xs sm:text-sm text-brand-subtext font-light leading-relaxed mb-6">
                        {lang === 'VI' ? g.summaryVi : g.summaryEn}
                      </p>

                      <div className="p-4 rounded-xl bg-brand-elevated/70 border border-brand-border/60">
                        <span className="font-mono text-[11px] font-bold text-brand-text block mb-3 uppercase tracking-wider">
                          {lang === 'VI' ? 'Các nguyên tắc cốt lõi cần nhớ:' : 'Core Execution Rules:'}
                        </span>
                        <div className="space-y-2.5">
                          {(lang === 'VI' ? g.keyPointsVi : g.keyPointsEn).map((pt, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-brand-subtext font-light">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{pt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Navigation Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-brand-border/60">
              <button
                onClick={handleBackToAllGames}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-secondary hover:bg-brand-elevated border border-brand-border text-brand-subtext hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{lang === 'VI' ? 'CHỌN GAME KHÁC' : 'CHOOSE ANOTHER GAME'}</span>
              </button>

              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-accent/25"
              >
                <span>{lang === 'VI' ? 'VỀ TRANG CHỦ' : 'BACK TO HOME'}</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GamingPage
