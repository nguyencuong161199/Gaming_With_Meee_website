import React, { memo } from 'react'
import { StoryItem } from '../types/content'
import { Language, TRANSLATIONS } from '../data/translations'
import { Clock, Calendar, ArrowUpRight, PlayCircle } from 'lucide-react'

interface FeaturedStoryCardProps {
  story: StoryItem
  lang?: Language
  onSelectStory?: (story: StoryItem) => void
}

const CATEGORY_STYLES: Record<string, string> = {
  Gaming: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
  'AI & Technology': 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
  'AI & Công nghệ': 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
  Entertainment: 'text-sky-400 border-sky-500/30 bg-sky-500/10',
  'Giải trí số': 'text-sky-400 border-sky-500/30 bg-sky-500/10'
}

export const FeaturedStoryCard: React.FC<FeaturedStoryCardProps> = memo(({
  story,
  lang = 'EN',
  onSelectStory
}) => {
  const isLarge = story.layoutSpan === 'large'
  const isMedium = story.layoutSpan === 'medium'
  const t = TRANSLATIONS[lang].stories

  const categoryColor =
    CATEGORY_STYLES[story.category] ||
    'text-brand-accent border-brand-accent/30 bg-brand-accent/10'

  const handleClick = () => {
    onSelectStory?.(story)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <article
      tabIndex={0}
      role="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`group relative rounded-2xl bg-brand-secondary/80 border border-brand-border hover:border-brand-accent/60 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
        isLarge
          ? 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-brand-secondary via-brand-secondary to-brand-elevated'
          : isMedium
          ? 'md:col-span-2'
          : 'col-span-1'
      }`}
    >
      {/* Decorative Top Gradient Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top Metadata Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium border ${categoryColor}`}>
              {story.category}
            </span>
            {story.badge && (
              <span className="px-2 py-0.5 rounded bg-brand-elevated text-brand-text text-[10px] font-mono tracking-wider uppercase border border-brand-border">
                {story.badge}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-brand-muted">
            {story.date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{story.date}</span>
              </span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{story.readTime}</span>
            </span>
          </div>
        </div>

        {/* Headline */}
        <h3
          className={`font-display font-bold text-brand-text group-hover:text-brand-accent transition-colors tracking-tight uppercase leading-[1.1] mb-3 ${
            isLarge
              ? 'text-2xl sm:text-3xl'
              : isMedium
              ? 'text-xl sm:text-2xl'
              : 'text-lg sm:text-xl'
          }`}
        >
          {story.title}
        </h3>

        {/* Subtitle / Teaser */}
        <p className="text-brand-subtext text-xs sm:text-sm font-light leading-relaxed mb-4">
          {story.subtitle}
        </p>

        {/* Extended summary on large layout */}
        {isLarge && (
          <p className="text-brand-muted text-xs leading-relaxed mb-6 hidden sm:block border-l-2 border-brand-accent/40 pl-3 italic">
            "{story.summary}"
          </p>
        )}
      </div>

      {/* Card Footer */}
      <div className="pt-4 border-t border-brand-border/40 flex items-center justify-between mt-auto">
        <span className="inline-flex items-center gap-1 text-xs font-mono text-brand-accent group-hover:text-white font-medium tracking-wider uppercase">
          <span>{t.readStory}</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>

        {story.mediaType === 'video' && (
          <span className="p-1 rounded-full bg-brand-elevated text-brand-accent group-hover:scale-110 transition-transform">
            <PlayCircle className="w-4 h-4" />
          </span>
        )}
      </div>
    </article>
  )
})

FeaturedStoryCard.displayName = 'FeaturedStoryCard'
