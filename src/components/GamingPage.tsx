import React, { useState } from 'react'
import { Language, BILINGUAL_CONTENT } from '../data/translations'
import { PlaygroundItem } from '../types/content'
import { PlaygroundCard } from './PlaygroundCard'
import { Gamepad2, ArrowLeft, Filter, Trophy, Target, Shield, Zap } from 'lucide-react'

interface GamingPageProps {
  lang: Language
  onBack: () => void
}

export const GamingPage: React.FC<GamingPageProps> = ({ lang, onBack }) => {
  const items = BILINGUAL_CONTENT[lang].playground as PlaygroundItem[]
  const [selectedGame, setSelectedGame] = useState<string>('all')

  const games = [
    { id: 'all', label: lang === 'VI' ? 'TẤT CẢ TỰA GAME' : 'ALL GAMES' },
    { id: 'tft', label: lang === 'VI' ? 'TFT // ĐTCL' : 'TFT // TACTICS' },
    { id: 'lol', label: lang === 'VI' ? 'LOL // LMHT' : 'LOL // LEAGUE' },
    { id: 'fco', label: 'FC ONLINE' },
    { id: 'pubgm', label: 'PUBG MOBILE' }
  ]

  const filteredItems = items.filter((item) => {
    if (selectedGame === 'all') return true
    return item.id.includes(selectedGame)
  })

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white relative overflow-x-hidden pt-20 pb-16">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 grid-backdrop opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 animate-fade-in">
        {/* Top Header & Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-[11px] font-mono uppercase tracking-widest mb-3">
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>GAMING HUB // ESPORTS COMPENDIUM</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-text tracking-tight uppercase">
              {lang === 'VI' ? 'TÂM ĐIỂM CHIẾN THUẬT & CẨM NANG META' : 'GAMING HUB & RANKED META PLAYBOOK'}
            </h1>
            <p className="text-sm text-brand-subtext font-light mt-1 max-w-2xl">
              {lang === 'VI'
                ? 'Tổng hợp cẩm nang chuyên sâu, thông số cài đặt độ nhạy và cẩm nang leo rank cho 4 tựa game cốt lõi: TFT, LOL, FC Online & PUBG Mobile.'
                : 'Curated competitive meta tier lists, sensitivity setups, and macro playbooks for TFT, League, FC Online & PUBG Mobile.'}
            </p>
          </div>

          <button
            onClick={onBack}
            className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-secondary border border-brand-border hover:border-brand-accent text-brand-subtext hover:text-white text-xs font-mono transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'VI' ? 'VỀ TRANG CHỦ' : 'BACK TO HOME'}</span>
          </button>
        </div>

        {/* Feature Highlights Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="p-4 rounded-2xl bg-brand-secondary/80 border border-brand-border/70 flex items-center gap-3">
            <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-brand-muted block uppercase">
                {lang === 'VI' ? 'Đấu Trường Chân Lý' : 'Teamfight Tactics'}
              </span>
              <span className="text-xs font-mono font-bold text-brand-text">S-Tier Comps</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-brand-secondary/80 border border-brand-border/70 flex items-center gap-3">
            <Zap className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-brand-muted block uppercase">
                {lang === 'VI' ? 'Liên Minh Huyền Thoại' : 'League of Legends'}
              </span>
              <span className="text-xs font-mono font-bold text-brand-text">Macro & Ward</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-brand-secondary/80 border border-brand-border/70 flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-brand-muted block uppercase">FC Online</span>
              <span className="text-xs font-mono font-bold text-brand-text">4-2-3-1 Tactics</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-brand-secondary/80 border border-brand-border/70 flex items-center gap-3">
            <Target className="w-5 h-5 text-rose-400 shrink-0" />
            <div>
              <span className="text-[10px] font-mono text-brand-muted block uppercase">PUBG Mobile</span>
              <span className="text-xs font-mono font-bold text-brand-text">Gyro Calibration</span>
            </div>
          </div>
        </div>

        {/* Game Filter Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
          <span className="text-xs font-mono text-brand-muted flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>{lang === 'VI' ? 'LỌC THEO GAME:' : 'FILTER BY GAME:'}</span>
          </span>
          {games.map((g) => {
            const isSelected = selectedGame === g.id
            return (
              <button
                key={g.id}
                onClick={() => setSelectedGame(g.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all shrink-0 ${
                  isSelected
                    ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-600/30'
                    : 'bg-brand-secondary border border-brand-border text-brand-subtext hover:text-white'
                }`}
              >
                {g.label}
              </button>
            )
          })}
        </div>

        {/* Game Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {filteredItems.map((item) => (
            <PlaygroundCard key={item.id} item={item} lang={lang} />
          ))}
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
            GAMING WITH MEEE &bull; COMPETITIVE ESPORTS
          </span>
        </div>
      </div>
    </div>
  )
}

export default GamingPage
