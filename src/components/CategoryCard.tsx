import React, { memo } from 'react'
import { CategoryInfo } from '../types/content'
import { Language, TRANSLATIONS } from '../data/translations'
import { Gamepad2, Cpu, Sparkles, ArrowRight, Layers } from 'lucide-react'

interface CategoryCardProps {
  category: CategoryInfo
  lang?: Language
  onSelect?: (category: CategoryInfo) => void
}

export const CategoryCard: React.FC<CategoryCardProps> = memo(({ category, lang = 'EN', onSelect }) => {
  const t = TRANSLATIONS[lang].explore

  const getIcon = (name: string) => {
    switch (name) {
      case 'Gamepad2':
        return <Gamepad2 className="w-8 h-8 text-brand-accent" />
      case 'Cpu':
        return <Cpu className="w-8 h-8 text-cyan-400" />
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-sky-400" />
      default:
        return <Layers className="w-8 h-8 text-brand-accent" />
    }
  }

  const handleClick = () => {
    onSelect?.(category)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
      className="group relative rounded-2xl bg-brand-secondary/90 border border-brand-border hover:border-brand-accent/70 p-7 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer hover:-translate-y-1 shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
    >
      <div className="absolute top-0 right-0 w-36 h-36 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/15 transition-all duration-500 pointer-events-none" />

      {/* Decorative Index Tag */}
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 rounded-xl bg-brand-elevated border border-brand-border/80 group-hover:scale-110 transition-transform duration-300">
          {getIcon(category.iconName)}
        </div>
        <span className="font-mono text-xs text-brand-muted tracking-widest uppercase border border-brand-border px-2.5 py-1 rounded-full bg-brand-bg/50">
          {category.count} {t.dispatches}
        </span>
      </div>

      {/* Core Typography */}
      <div>
        <h3 className="font-display font-bold text-2xl text-brand-text group-hover:text-brand-accent transition-colors tracking-tight uppercase leading-none mb-2">
          {category.name}
        </h3>

        <p className="font-mono text-xs text-brand-accent tracking-wider uppercase mb-3">
          // {category.tagline}
        </p>

        <p className="text-brand-subtext text-xs sm:text-sm font-light leading-relaxed mb-6">
          {category.description}
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="pt-4 border-t border-brand-border/50 flex items-center justify-between text-xs font-mono text-brand-subtext group-hover:text-white transition-colors">
        <span className="tracking-widest uppercase font-medium">{t.exploreDomain}</span>
        <div className="w-7 h-7 rounded-full bg-brand-elevated flex items-center justify-center group-hover:bg-brand-accent group-hover:text-white transition-all">
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  )
})

CategoryCard.displayName = 'CategoryCard'
