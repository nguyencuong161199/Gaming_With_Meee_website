import React, { useState, useEffect, useRef } from 'react'
import { Clock, Flag, ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Send } from 'lucide-react'
import { ExamPackage, UserExamAttempt } from '../../types/academy'
import { Language } from '../../data/translations'

interface ExamSimulatorProps {
  exam: ExamPackage
  onFinishExam: (attempt: UserExamAttempt) => void
  onExitExam: () => void
  lang?: Language
}

export const ExamSimulator: React.FC<ExamSimulatorProps> = ({
  exam,
  onFinishExam,
  onExitExam,
  lang = 'VI'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<number, string[]>>({})
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([])
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(exam.durationMinutes * 60)
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [showExitModal, setShowExitModal] = useState(false)
  const startTimeRef = useRef<number>(Date.now())

  // Countdown Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmit(true) // Auto-submit when time expires
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const currentQ = exam.questions[currentIndex]

  const handleSelectOption = (optionId: string) => {
    setUserAnswers((prev) => {
      const qId = currentQ.id
      const currentSelected = prev[qId] || []

      // If multi-choice
      if (currentQ.isMultiple) {
        if (currentSelected.includes(optionId)) {
          return { ...prev, [qId]: currentSelected.filter((id) => id !== optionId) }
        } else {
          return { ...prev, [qId]: [...currentSelected, optionId] }
        }
      }

      // Single-choice
      return { ...prev, [qId]: [optionId] }
    })
  }

  const toggleFlag = (qId: number) => {
    setFlaggedQuestions((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    )
  }

  const answeredCount = Object.keys(userAnswers).filter(
    (k) => userAnswers[Number(k)]?.length > 0
  ).length
  const unansweredCount = exam.totalQuestions - answeredCount

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handleSubmit = (_auto = false) => {
    setShowSubmitModal(false)
    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000)

    let correctCount = 0
    exam.questions.forEach((q) => {
      const chosen = userAnswers[q.id] || []
      const correct = q.correctAnswers
      const isCorrect =
        chosen.length === correct.length &&
        chosen.every((id) => correct.includes(id)) &&
        correct.every((id) => chosen.includes(id))

      if (isCorrect) correctCount++
    })

    const score = Number(((correctCount / exam.totalQuestions) * 100).toFixed(1))
    const passed = score >= exam.passRate

    const attempt: UserExamAttempt = {
      id: `attempt-${Date.now()}`,
      examId: exam.id,
      examTitle: exam.title,
      score,
      totalQuestions: exam.totalQuestions,
      correctCount,
      passed,
      timeSpentSeconds: timeSpent,
      userAnswers,
      flaggedQuestions,
      completedAt: new Date().toISOString()
    }

    onFinishExam(attempt)
  }

  const isLowTime = timeLeftSeconds < 300 // < 5 mins

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 text-brand-text animate-fade-in select-none">
      {/* Top Floating Control Bar */}
      <div className="sticky top-20 z-30 mb-6 p-4 rounded-2xl bg-brand-secondary/95 border border-brand-border/90 shadow-2xl backdrop-blur-xl flex flex-wrap items-center justify-between gap-4">
        {/* Left: Exam Info & Question Counter */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowExitModal(true)}
            className="p-2 rounded-xl bg-brand-elevated hover:bg-brand-border text-brand-subtext hover:text-white transition-colors text-xs font-mono"
            title={lang === 'VI' ? 'Thoát bài thi' : 'Exit Exam'}
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h2 className="font-display font-bold text-sm sm:text-base text-brand-text leading-tight truncate max-w-xs sm:max-w-md">
              {exam.title}
            </h2>
            <span className="text-[11px] font-mono text-brand-accent">
              {lang === 'VI'
                ? `Câu ${currentIndex + 1} / ${exam.totalQuestions} (${answeredCount} đã làm)`
                : `Question ${currentIndex + 1} / ${exam.totalQuestions} (${answeredCount} answered)`}
            </span>
          </div>
        </div>

        {/* Center: Timer */}
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-sm font-bold border transition-all ${
            isLowTime
              ? 'bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse shadow-lg shadow-rose-900/40'
              : 'bg-brand-elevated border-brand-border text-brand-accent'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>{formatTime(timeLeftSeconds)}</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => toggleFlag(currentQ.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono transition-all border ${
              flaggedQuestions.includes(currentQ.id)
                ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                : 'bg-brand-elevated border-brand-border text-brand-subtext hover:text-white'
            }`}
          >
            <Flag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {flaggedQuestions.includes(currentQ.id)
                ? (lang === 'VI' ? 'ĐÃ ĐÁNH DẤU' : 'FLAGGED')
                : (lang === 'VI' ? 'ĐÁNH DẤU' : 'FLAG')}
            </span>
          </button>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold tracking-wider uppercase shadow-lg shadow-emerald-900/40 transition-all active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{lang === 'VI' ? 'NỘP BÀI' : 'SUBMIT'}</span>
          </button>
        </div>
      </div>

      {/* Main Content Layout: Question Card (Left) + Navigator Grid (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Question & Options (8 Cols) */}
        <div className="lg:col-span-8 bg-brand-secondary/80 border border-brand-border rounded-2xl p-6 sm:p-8 shadow-xl">
          {/* Question Metadata Badge */}
          <div className="flex items-center justify-between gap-3 mb-4 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-brand-elevated border border-brand-border text-brand-accent">
              {lang === 'VI' ? `Chủ đề: ${currentQ.topic}` : `Topic: ${currentQ.topic}`}
            </span>
            <span className="text-brand-muted">
              {currentQ.isMultiple
                ? (lang === 'VI' ? 'Chọn nhiều đáp án' : 'Select all that apply')
                : (lang === 'VI' ? 'Chọn 1 đáp án duy nhất' : 'Single choice')}
            </span>
          </div>

          {/* Question Text (Bilingual) */}
          <div className="mb-6">
            <p className="font-display font-semibold text-lg sm:text-xl text-brand-text leading-snug mb-2">
              {currentQ.question}
            </p>
            {currentQ.questionVi && (
              <p className="text-sm text-brand-subtext font-light italic leading-relaxed border-l-2 border-brand-accent/40 pl-3">
                {currentQ.questionVi}
              </p>
            )}
          </div>

          {/* Options List */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((opt) => {
              const isSelected = (userAnswers[currentQ.id] || []).includes(opt.id)

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 border flex items-start gap-3.5 group ${
                    isSelected
                      ? 'bg-brand-accent/15 border-brand-accent text-brand-text shadow-md shadow-brand-accent/10'
                      : 'bg-brand-elevated/70 hover:bg-brand-elevated border-brand-border hover:border-brand-border/90 text-brand-subtext hover:text-white'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-brand-accent text-white shadow-sm'
                        : 'bg-brand-secondary border border-brand-border text-brand-muted group-hover:text-white'
                    }`}
                  >
                    {opt.id}
                  </div>
                  <div className="flex-1 text-sm font-light pt-0.5">
                    <div className="text-brand-text font-normal mb-0.5">{opt.text}</div>
                    {opt.textVi && <div className="text-xs text-brand-muted">{opt.textVi}</div>}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-brand-border/60">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-elevated border border-brand-border text-xs font-mono disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand-secondary transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{lang === 'VI' ? 'CÂU TRƯỚC' : 'PREVIOUS'}</span>
            </button>

            <span className="text-xs font-mono text-brand-muted hidden sm:inline">
              {lang === 'VI' ? 'Mẹo: Có thể dùng phím mũi tên hoặc click lưới bên phải' : 'Tip: Use arrow keys or click question grid on right'}
            </span>

            {currentIndex < exam.totalQuestions - 1 ? (
              <button
                onClick={() => setCurrentIndex((prev) => Math.min(exam.totalQuestions - 1, prev + 1))}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-mono font-bold transition-all shadow-md shadow-brand-accent/20"
              >
                <span>{lang === 'VI' ? 'CÂU TIẾP THEO' : 'NEXT QUESTION'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowSubmitModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold transition-all shadow-md shadow-emerald-900/30"
              >
                <span>{lang === 'VI' ? 'NỘP BÀI THI' : 'SUBMIT EXAM'}</span>
                <Send className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Question Navigator Matrix (4 Cols) */}
        <div className="lg:col-span-4 bg-brand-secondary/80 border border-brand-border rounded-2xl p-6 shadow-xl sticky top-44">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-brand-border/60">
            <h3 className="font-mono text-xs font-bold uppercase text-brand-text tracking-wider">
              {lang === 'VI' ? `BẢNG CÂU HỎI (${exam.totalQuestions})` : `QUESTION GRID (${exam.totalQuestions})`}
            </h3>
            <div className="text-[11px] font-mono text-emerald-400 font-bold">
              {lang === 'VI' ? `${answeredCount}/${exam.totalQuestions} đã làm` : `${answeredCount}/${exam.totalQuestions} done`}
            </div>
          </div>

          {/* Color Legend */}
          <div className="flex items-center justify-between text-[10px] font-mono text-brand-muted mb-4 pb-3 border-b border-brand-border/40">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-brand-accent" />
              <span>{lang === 'VI' ? 'Đã chọn' : 'Answered'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-500/80" />
              <span>{lang === 'VI' ? 'Đánh dấu' : 'Flagged'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-brand-elevated border border-brand-border" />
              <span>{lang === 'VI' ? 'Chưa làm' : 'Empty'}</span>
            </div>
          </div>

          {/* Matrix Grid */}
          <div className="grid grid-cols-5 gap-2 max-h-[360px] overflow-y-auto pr-1">
            {exam.questions.map((q, idx) => {
              const isAnswered = (userAnswers[q.id] || []).length > 0
              const isFlagged = flaggedQuestions.includes(q.id)
              const isCurrent = idx === currentIndex

              let btnStyle = 'bg-brand-elevated border-brand-border text-brand-muted'
              if (isFlagged) {
                btnStyle = 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
              } else if (isAnswered) {
                btnStyle = 'bg-brand-accent text-white font-bold shadow-sm shadow-brand-accent/30 border-transparent'
              }

              if (isCurrent) {
                btnStyle += ' ring-2 ring-white ring-offset-2 ring-offset-brand-bg scale-105'
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-9 rounded-lg font-mono text-xs transition-all flex items-center justify-center border relative ${btnStyle}`}
                >
                  <span>{idx + 1}</span>
                  {isFlagged && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />
                  )}
                </button>
              )
            })}
          </div>

          {/* Bottom Submit Shortcut */}
          <button
            onClick={() => setShowSubmitModal(true)}
            className="w-full mt-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/30"
          >
            {lang === 'VI' ? 'HOÀN THÀNH & NỘP BÀI' : 'FINISH & SUBMIT'}
          </button>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-bg/85 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-brand-secondary border border-brand-border rounded-2xl p-6 sm:p-7 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-brand-text mb-2">
              {lang === 'VI' ? 'XÁC NHẬN NỘP BÀI THI?' : 'SUBMIT EXAM CONFIRMATION'}
            </h3>
            <p className="text-sm text-brand-subtext font-light mb-4">
              {lang === 'VI' ? (
                <>
                  Bạn đã trả lời <span className="text-brand-text font-bold">{answeredCount}</span> /{' '}
                  {exam.totalQuestions} câu hỏi.
                </>
              ) : (
                <>
                  You have answered <span className="text-brand-text font-bold">{answeredCount}</span> of{' '}
                  {exam.totalQuestions} questions.
                </>
              )}
              {unansweredCount > 0 && (
                <span className="block mt-1 text-amber-400 font-medium">
                  {lang === 'VI'
                    ? `⚠️ Còn ${unansweredCount} câu bạn chưa chọn đáp án!`
                    : `⚠️ You still have ${unansweredCount} unanswered questions!`}
                </span>
              )}
            </p>
            <div className="flex items-center gap-3 justify-end pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2.5 rounded-xl bg-brand-elevated border border-brand-border text-xs font-mono text-brand-subtext hover:text-white"
              >
                {lang === 'VI' ? 'TIẾP TỤC LÀM BÀI' : 'CONTINUE TEST'}
              </button>
              <button
                onClick={() => handleSubmit(false)}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold tracking-wider uppercase shadow-lg shadow-emerald-900/40"
              >
                {lang === 'VI' ? 'XÁC NHẬN NỘP' : 'CONFIRM SUBMIT'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-bg/85 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-brand-secondary border border-brand-border rounded-2xl p-6 sm:p-7 shadow-2xl">
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-brand-text mb-2">
              {lang === 'VI' ? 'BẠN MUỐN RỜI BÀI THI?' : 'EXIT EXAM SESSION?'}
            </h3>
            <p className="text-sm text-brand-subtext font-light mb-5">
              {lang === 'VI'
                ? 'Kết quả của bài thi này sẽ không được lưu nếu bạn thoát bây giờ. Bạn có chắc chắn muốn quay về danh sách đề không?'
                : 'Your current progress will not be recorded if you leave now. Are you sure you want to exit?'}
            </p>
            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={() => setShowExitModal(false)}
                className="px-4 py-2.5 rounded-xl bg-brand-elevated border border-brand-border text-xs font-mono text-brand-subtext hover:text-white"
              >
                {lang === 'VI' ? 'Ở LẠI' : 'STAY'}
              </button>
              <button
                onClick={onExitExam}
                className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-mono font-bold tracking-wider uppercase"
              >
                {lang === 'VI' ? 'THOÁT RA NGOÀI' : 'LEAVE EXAM'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

