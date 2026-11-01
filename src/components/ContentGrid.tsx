import React, { useState, useMemo, memo } from 'react'
import { StoryItem } from '../types/content'
import { Language, TRANSLATIONS, BILINGUAL_CONTENT } from '../data/translations'
import { FeaturedStoryCard } from './FeaturedStoryCard'
import { SectionHeading } from './SectionHeading'
import { Filter } from 'lucide-react'

interface ContentGridProps {
  lang?: Language
  onSelectStory?: (story: StoryItem) => void
}

interface CategoryFilter {
  id: string
  labelVI: string
  labelEN: string
}

const CATEGORY_TABS: CategoryFilter[] = [
  { id: 'ALL', labelVI: 'TẤT CẢ', labelEN: 'ALL' },
  { id: 'gaming', labelVI: 'Gaming', labelEN: 'Gaming' },
  { id: 'ai-tech', labelVI: 'AI & Công nghệ', labelEN: 'AI & Technology' },
  { id: 'entertainment', labelVI: 'Giải trí số', labelEN: 'Entertainment' }
]

export const ContentGrid: React.FC<ContentGridProps> = memo(({ lang = 'EN', onSelectStory }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('ALL')
  const t = TRANSLATIONS[lang].stories

  const stories = BILINGUAL_CONTENT[lang].stories as StoryItem[]

  const filteredStories = useMemo(() => {
    if (selectedCategoryId === 'ALL') return stories

    return stories.filter((s) => {
      const catLower = s.category.toLowerCase()
      if (selectedCategoryId === 'gaming') {
        return catLower.includes('gaming')
      }
      if (selectedCategoryId === 'ai-tech') {
        return catLower.includes('ai') || catLower.includes('công nghệ') || catLower.includes('tech')
      }
      if (selectedCategoryId === 'entertainment') {
        return catLower.includes('giải trí') || catLower.includes('entertain')
      }
      return true
    })
  }, [stories, selectedCategoryId])

  return (
    <section id="stories" className="h-screen w-full flex flex-col justify-center relative overflow-hidden pt-16 pb-8">
      <div className="max-w-content mx-auto px-5 sm:px-8 w-full my-auto">
        {/* Section Heading & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <SectionHeading
            number={t.number}
            tag={t.tag}
            title={t.title}
            subtitle={t.subtitle}
          />

          {/* Category Filter Tabs */}
          <div className="flex items-center flex-wrap gap-2 pb-2 md:pb-0" role="tablist" aria-label="Category filter">
            <span className="text-xs font-mono text-brand-muted flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" />
              <span>{t.filter}</span>
            </span>
            {CATEGORY_TABS.map((tab) => {
              const isSelected = selectedCategoryId === tab.id
              const label = lang === 'VI' ? tab.labelVI : tab.labelEN
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategoryId(tab.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent ${
                    isSelected
                      ? 'bg-brand-accent text-white font-bold shadow-md shadow-brand-accent/20'
                      : 'bg-brand-secondary border border-brand-border text-brand-subtext hover:text-brand-text'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStories.map((story) => (
            <FeaturedStoryCard
              key={story.id}
              story={story}
              lang={lang}
              onSelectStory={onSelectStory}
            />
          ))}
        </div>
      </div>
    </section>
  )
})

ContentGrid.displayName = 'ContentGrid'
