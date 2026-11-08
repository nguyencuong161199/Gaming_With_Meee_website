import React, { useState, lazy, Suspense } from 'react'
import { Navbar, AppView } from './components/Navbar'
import { LoginModal } from './components/LoginModal'
import { IntroScreen } from './components/IntroScreen'
import { MeeeAIAssistant } from './components/MeeeAIAssistant'
import { Language } from './data/translations'
import { useLocalStorage } from './hooks/useLocalStorage'

// Lazy load portal views for maximum performance & instant code splitting
const HomePage = lazy(() => import('./components/HomePage'))
const AboutPage = lazy(() => import('./components/AboutPage'))
const AcademyPage = lazy(() => import('./components/AcademyPage'))
const GamingPage = lazy(() => import('./components/GamingPage'))
const StorePage = lazy(() => import('./components/StorePage'))

export const App: React.FC = () => {
  const [lang, setLang] = useLocalStorage<Language>('gwm_lang', 'EN')
  const [currentView, setCurrentView] = useState<AppView>('home')
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !localStorage.getItem('gwm_intro_seen')
    } catch {
      return false
    }
  })

  // Auto scroll to top on page view switch
  const handleNavigateView = (view: AppView) => {
    if (view === 'connect') {
      setCurrentView('home')
      setTimeout(() => {
        const el = document.getElementById('connect')
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 80)
      return
    }

    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const handleIntroComplete = () => {
    setShowIntro(false)
    try {
      localStorage.setItem('gwm_intro_seen', 'true')
    } catch {
      // ignore
    }
  }

  const handleReplayIntro = () => {
    setShowIntro(true)
  }

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang)
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white relative">
      {/* Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigateView={handleNavigateView}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      {/* Main Content Area - Suspense Lazy Loaded for Instant Performance */}
      <main className="relative z-10">
        <Suspense
          fallback={
            <div className="min-h-screen bg-brand-bg flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-brand-accent border-t-transparent animate-spin" />
                <span className="font-mono text-xs text-brand-muted tracking-widest uppercase">
                  NMC CORP // LOADING VIEW...
                </span>
              </div>
            </div>
          }
        >
          {currentView === 'home' && (
            <HomePage
              lang={lang}
              onNavigateView={handleNavigateView}
              onReplayIntro={handleReplayIntro}
            />
          )}

          {currentView === 'about' && (
            <AboutPage
              lang={lang}
              onBack={() => handleNavigateView('home')}
            />
          )}

          {currentView === 'academy' && (
            <AcademyPage
              lang={lang}
              onBack={() => handleNavigateView('home')}
              onRequireLogin={() => setIsLoginModalOpen(true)}
            />
          )}

          {currentView === 'gaming' && (
            <GamingPage
              lang={lang}
              onBack={() => handleNavigateView('home')}
            />
          )}

          {currentView === 'store' && (
            <StorePage
              lang={lang}
              onBack={() => handleNavigateView('home')}
            />
          )}
        </Suspense>
      </main>

      {/* Global Cyberpunk AI Multi-Agent Assistant */}
      <MeeeAIAssistant
        lang={lang}
        onOpenAcademy={() => handleNavigateView('academy')}
        onOpenStore={() => handleNavigateView('store')}
      />

      {/* Login & Authentication Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        lang={lang}
      />

      {/* Cinematic Fullscreen Intro Video Screen */}
      {showIntro && (
        <IntroScreen
          onComplete={handleIntroComplete}
          lang={lang}
        />
      )}
    </div>
  )
}

export default App
