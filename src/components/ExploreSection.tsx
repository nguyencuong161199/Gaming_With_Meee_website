import React, { memo } from 'react'
import { Language, TRANSLATIONS, BILINGUAL_CONTENT } from '../data/translations'
import { SectionHeading } from './SectionHeading'
import { CategoryCard } from './CategoryCard'
import { CategoryInfo } from '../types/content'

interface ExploreSectionProps {
  lang: Language
  onSelectCategory?: (category: CategoryInfo) => void
}

export const ExploreSection: React.FC<ExploreSectionProps> = memo(({ lang, onSelectCategory }) => {
  const t = TRANSLATIONS[lang].explore
  const categories = BILINGUAL_CONTENT[lang].categories as CategoryInfo[]

  return (
    <section id="explore" className="w-full h-full shrink-0 relative flex flex-col justify-center px-5 sm:px-8">
      <div className="max-w-content mx-auto w-full my-auto pt-16">
        <SectionHeading
          number={t.number}
          tag={t.tag}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              lang={lang}
              onSelect={onSelectCategory}
            />
          ))}
        </div>
      </div>
    </section>
  )
})

ExploreSection.displayName = 'ExploreSection'

