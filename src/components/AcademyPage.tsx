import React, { useState, useEffect } from 'react'
import { EXAM_PACKAGES } from '../data/academyData'
import { ExamPackage, UserExamAttempt } from '../types/academy'
import { AcademyCatalog } from './academy/AcademyCatalog'
import { ExamSimulator } from './academy/ExamSimulator'
import { ExamResultView } from './academy/ExamResultView'
import { Language } from '../data/translations'
import { supabase } from '../lib/supabase'
import { useAuth } from '../context/AuthContext'

interface AcademyPageProps {
  lang: Language
  onBack: () => void
  onRequireLogin?: () => void
}

const STORAGE_KEY = 'nmc_academy_attempts'

export const AcademyPage: React.FC<AcademyPageProps> = ({
  lang,
  onBack,
  onRequireLogin: _onRequireLogin
}) => {
  const { user } = useAuth()
  const [view, setView] = useState<'catalog' | 'exam' | 'result'>('catalog')
  const [activeExam, setActiveExam] = useState<ExamPackage | null>(null)
  const [currentAttempt, setCurrentAttempt] = useState<UserExamAttempt | null>(null)
  const [attempts, setAttempts] = useState<UserExamAttempt[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) return JSON.parse(saved)
    } catch {
      // ignore
    }
    return []
  })

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [view])

  const handleStartExam = (exam: ExamPackage) => {
    setActiveExam(exam)
    setView('exam')
  }

  const handleFinishExam = async (attempt: UserExamAttempt) => {
    setCurrentAttempt(attempt)
    const updated = [attempt, ...attempts]
    setAttempts(updated)

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // ignore
    }

    // Attempt cloud save to Supabase if authenticated
    if (user) {
      try {
        await supabase.from('mock_exam_results').insert([
          {
            user_id: user.id,
            user_name: user.name,
            exam_id: attempt.examId,
            exam_title: attempt.examTitle,
            score: attempt.score,
            total_questions: attempt.totalQuestions,
            correct_count: attempt.correctCount,
            passed: attempt.passed,
            time_spent_seconds: attempt.timeSpentSeconds,
            completed_at: attempt.completedAt
          }
        ])
      } catch (err) {
        console.warn('Could not sync exam result to Supabase:', err)
      }
    }

    setView('result')
  }

  const handleReviewAttempt = (attempt: UserExamAttempt) => {
    const foundExam = EXAM_PACKAGES.find((e) => e.id === attempt.examId) || EXAM_PACKAGES[0]
    setActiveExam(foundExam)
    setCurrentAttempt(attempt)
    setView('result')
  }

  const handleRetake = () => {
    if (activeExam) {
      setView('exam')
    } else {
      setView('catalog')
    }
  }

  const handleBackToCatalog = () => {
    setActiveExam(null)
    setCurrentAttempt(null)
    setView('catalog')
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white relative overflow-x-hidden pt-20 pb-16">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 grid-backdrop opacity-20" />
      </div>

      <div className="relative z-10">
        {view === 'catalog' && (
          <AcademyCatalog
            exams={EXAM_PACKAGES}
            onSelectExam={handleStartExam}
            recentAttempts={attempts}
            onReviewAttempt={handleReviewAttempt}
            lang={lang}
            onBackToHome={onBack}
          />
        )}

        {view === 'exam' && activeExam && (
          <ExamSimulator
            exam={activeExam}
            onFinishExam={handleFinishExam}
            onExitExam={handleBackToCatalog}
            lang={lang}
          />
        )}

        {view === 'result' && activeExam && currentAttempt && (
          <ExamResultView
            exam={activeExam}
            attempt={currentAttempt}
            onRetake={handleRetake}
            onBackToCatalog={handleBackToCatalog}
            lang={lang}
          />
        )}
      </div>
    </div>
  )
}

export default AcademyPage

