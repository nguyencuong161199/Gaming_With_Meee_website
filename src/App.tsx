import React, { useState, useMemo, lazy, Suspense } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { ContentGrid } from './components/ContentGrid'
import { UpdateBoard } from './components/UpdateBoard'
import { ExploreSection } from './components/ExploreSection'
import { PlaygroundSection } from './components/PlaygroundSection'
import { AboutSection } from './components/AboutSection'
import { ConnectSection } from './components/ConnectSection'
import { ScreenNavigator } from './components/ScreenNavigator'
import { LoginModal } from './components/LoginModal'
import { ActiveArticle } from './types/content'
import { Language, TRANSLATIONS } from './data/translations'
import { useScreenSlider } from './hooks/useScreenSlider'
import { useLocalStorage } from './hooks/useLocalStorage'

// Lazy load ArticlePage to optimize initial bundle size
const ArticlePage = lazy(() => import('./components/ArticlePage'))

const TOTAL_SCREENS = 7

export const App: React.FC = () => {
  const [lang, setLang] = useLocalStorage<Language>('gwm_lang', 'EN')
  const [activeArticle, setActiveArticle] = useState<ActiveArticle>(null)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const { currentScreen, goToScreen } = useScreenSlider({
    totalScreens: TOTAL_SCREENS,
    disabled: activeArticle !== null || isLoginModalOpen,
    transitionDuration: 650
  })

  const t = TRANSLATIONS[lang]

  const screenNames = useMemo(
    () => [
      t.dots.home,
      t.dots.stories,
      t.dots.board,
      t.dots.explore,
      t.dots.playground,
      t.dots.about,
      t.dots.connect
    ],
    [t]
  )

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang)
  }

  // Dedicated Article Page View (Lazy-loaded)
  if (activeArticle) {
    return (
      <Suspense
        fallback={
          <div className="min-h-screen bg-brand-bg flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-brand-accent border-t-transparent animate-spin" />
          </div>
        }
      >
        <ArticlePage
          item={activeArticle.item}
          type={activeArticle.type}
          lang={lang}
          onBack={() => setActiveArticle(null)}
          onRequireLogin={() => setIsLoginModalOpen(true)}
        />
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
          lang={lang}
        />
      </Suspense>
    )
  }

  return (
    <div className="fixed inset-0 w-screen h-screen h-[100dvh] overflow-hidden bg-brand-bg text-brand-text font-sans select-none">
      {/* Top Navbar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigateScreen={goToScreen}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      {/* Atmospheric Logo Watermark Background (Fades in from Screen 1 onwards) */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-700 ${
          currentScreen >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.14] sm:opacity-[0.18] filter contrast-125 brightness-90"
          style={{
            backgroundImage: `url('/assets/nmc-gwm-logo.jpeg')`,
            backgroundPosition: 'center',
            backgroundSize: 'min(800px, 80vw)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 via-transparent to-brand-bg/95" />
        <div className="absolute inset-0 grid-backdrop opacity-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px]" />
      </div>

      {/* Right-side Screen Dot Navigator with Multilingual Tooltips */}
      <ScreenNavigator
        currentScreen={currentScreen}
        screenNames={screenNames}
        onNavigate={goToScreen}
      />

      {/* Full-Page Screen Slider Wrapper */}
      <main
        className="w-full h-full transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateY(-${currentScreen * 100}%)` }}
      >
        {/* Screen 0: Hero with Video Background */}
        <div className="w-full h-full shrink-0 relative">
          <HeroSection
            lang={lang}
            onExploreClick={() => goToScreen(1)}
            onBoardClick={() => goToScreen(2)}
          />
        </div>

        {/* Screen 1: Featured Stories */}
        <div className="w-full h-full shrink-0 relative">
          <ContentGrid
            lang={lang}
            onSelectStory={(story) => setActiveArticle({ item: story, type: 'story' })}
          />
        </div>

        {/* Screen 2: Live Bulletin / Update Board */}
        <div className="w-full h-full shrink-0 relative">
          <UpdateBoard
            lang={lang}
            onSelectUpdate={(update) => setActiveArticle({ item: update, type: 'update' })}
            onRequireLogin={() => setIsLoginModalOpen(true)}
          />
        </div>

        {/* Screen 3: Explore Categories */}
        <ExploreSection lang={lang} />

        {/* Screen 4: Creative Playground */}
        <PlaygroundSection lang={lang} />

        {/* Screen 5: Minimalist About */}
        <AboutSection lang={lang} />

        {/* Screen 6: Connect & Footer */}
        <ConnectSection
          lang={lang}
          onBackToTop={() => goToScreen(0)}
          onNavigateScreen={goToScreen}
        />
      </main>

      {/* Login & Authentication Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        lang={lang}
      />
    </div>
  )
}
