import React, { memo } from 'react'
import { Language, TRANSLATIONS, BILINGUAL_CONTENT } from '../data/translations'
import { SectionHeading } from './SectionHeading'
import { PlaygroundCard } from './PlaygroundCard'
import { PlaygroundItem } from '../types/content'

interface PlaygroundSectionProps {
  lang: Language
}

export const PlaygroundSection: React.FC<PlaygroundSectionProps> = memo(({ lang }) => {
  const t = TRANSLATIONS[lang].playground
  const playgroundItems = BILINGUAL_CONTENT[lang].playground as PlaygroundItem[]

  return (
    <section id="playground" className="w-full h-full shrink-0 relative flex flex-col justify-center px-5 sm:px-8">
      <div className="max-w-content mx-auto w-full my-auto pt-16">
        <SectionHeading
          number={t.number}
          tag={t.tag}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {playgroundItems.map((item) => (
            <PlaygroundCard key={item.id} item={item} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
})

PlaygroundSection.displayName = 'PlaygroundSection'

