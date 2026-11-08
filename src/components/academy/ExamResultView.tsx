import React, { useState } from 'react'
import { CheckCircle2, XCircle, RotateCcw, ArrowLeft, Clock, BookOpen } from 'lucide-react'
import { ExamPackage, UserExamAttempt } from '../../types/academy'
import { Language } from '../../data/translations'

interface ExamResultViewProps {
  exam: ExamPackage
  attempt: UserExamAttempt
  onRetake: () => void
  onBackToCatalog: () => void
  lang?: Language
}

export const ExamResultView: React.FC<ExamResultViewProps> = ({
  exam,
  attempt,
  onRetake,
  onBackToCatalog,
  lang = 'VI'
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'incorrect' | 'correct'>('all')

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}m ${secs}s`
  }

  const reviewQuestions = exam.questions.filter((q) => {
    const chosen = attempt.userAnswers[q.id] || []
    const correct = q.correctAnswers
    const isCorrect =
      chosen.length === correct.length &&
      chosen.every((id) => correct.includes(id)) &&
      correct.every((id) => chosen.includes(id))

    if (filterMode === 'incorrect') return !isCorrect
    if (filterMode === 'correct') return isCorrect
    return true
  })

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 text-brand-text animate-fade-in select-none">
      {/* Top Banner with Scorecard */}
      <div
        className={`relative overflow-hidden rounded-3xl p-6 sm:p-10 border mb-10 shadow-2xl ${
          attempt.passed
            ? 'bg-gradient-to-br from-emerald-950/60 via-brand-secondary to-brand-bg border-emerald-500/50 shadow-emerald-950/30'
            : 'bg-gradient-to-br from-rose-950/60 via-brand-secondary to-brand-bg border-rose-500/50 shadow-rose-950/30'
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left">
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 border ${
                attempt.passed
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                  : 'bg-rose-500/20 border-rose-400 text-rose-300'
              }`}
            >
              {attempt.passed ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              <span>
                {attempt.passed
                  ? (lang === 'VI' ? 'PASSED // ĐẠT TIÊU CHUẨN' : 'PASSED // CERTIFIED')
                  : (lang === 'VI' ? 'FAILED // CHƯA ĐẠT MỤC TIÊU' : 'FAILED // NEEDS IMPROVEMENT')}
              </span>
            </div>

            <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-text mb-2">
              {exam.title}
            </h1>
            <p className="text-sm text-brand-subtext font-light max-w-xl">
              {attempt.passed
                ? (lang === 'VI'
                    ? `Chúc mừng bạn! Bạn đã vượt qua mức điểm chuẩn ${exam.passRate}% của kỳ thi chuẩn quốc tế.`
                    : `Congratulations! You passed above the official benchmark of ${exam.passRate}%.`)
                : (lang === 'VI'
                    ? `Điểm số của bạn cần đạt tối thiểu ${exam.passRate}% để vượt qua chứng chỉ này. Hãy xem lại các câu sai bên dưới và luyện tập lại nhé!`
                    : `You need at least ${exam.passRate}% to pass this certification. Review the incorrect answers below and retry!`)}
            </p>
          </div>

          {/* Large Radial Score Badge */}
          <div className="flex flex-col items-center justify-center">
            <div
              className={`w-36 h-36 rounded-full border-4 flex flex-col items-center justify-center p-4 shadow-2xl backdrop-blur-md ${
                attempt.passed
                  ? 'border-emerald-400 bg-emerald-950/40 text-emerald-400 shadow-emerald-500/20'
                  : 'border-rose-400 bg-rose-950/40 text-rose-400 shadow-rose-500/20'
              }`}
            >
              <span className="font-display font-black text-4xl sm:text-5xl leading-none tracking-tight">
                {attempt.score.toFixed(0)}%
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-brand-subtext mt-1">
                {attempt.correctCount} / {attempt.totalQuestions} {lang === 'VI' ? 'CÂU' : 'QS'}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 mt-8 font-mono text-xs">
          <div className="text-center">
            <span className="text-[10px] text-brand-muted block uppercase">
              {lang === 'VI' ? 'Kết quả' : 'Result'}
            </span>
            <span className={`font-bold text-sm ${attempt.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
              {attempt.correctCount} {lang === 'VI' ? 'câu đúng' : 'correct'}
            </span>
          </div>
          <div className="text-center border-x border-white/10">
            <span className="text-[10px] text-brand-muted block uppercase">
              {lang === 'VI' ? 'Thời gian làm bài' : 'Time spent'}
            </span>
            <span className="font-bold text-brand-text text-sm flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-accent" />
              {formatTime(attempt.timeSpentSeconds)}
            </span>
          </div>
          <div className="text-center">
            <span className="text-[10px] text-brand-muted block uppercase">
              {lang === 'VI' ? 'Điểm chuẩn qua môn' : 'Passing mark'}
            </span>
            <span className="font-bold text-brand-accent text-sm">
              {exam.passRate}%
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-6 pt-6 border-t border-white/10">
          <button
            onClick={onRetake}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg shadow-brand-accent/25 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{lang === 'VI' ? 'LÀM LẠI ĐỀ THI NÀY' : 'RETAKE THIS EXAM'}</span>
          </button>

          <button
            onClick={onBackToCatalog}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-secondary border border-brand-border hover:border-brand-accent text-brand-subtext hover:text-white font-mono text-xs font-medium uppercase tracking-wider transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'VI' ? 'DANH SÁCH ĐỀ THI KHÁC' : 'OTHER EXAM PACKAGES'}</span>
          </button>
        </div>
      </div>

      {/* Review Section Header & Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-brand-border">
        <div>
          <h2 className="font-display font-bold text-2xl text-brand-text uppercase">
            {lang === 'VI' ? 'XEM LẠI CHI TIẾT BÀI LÀM' : 'DETAILED ANSWER REVIEW'}
          </h2>
          <p className="text-xs text-brand-subtext font-light mt-0.5">
            {lang === 'VI'
              ? 'Phân tích chi tiết từng câu hỏi, đối chiếu đáp án của bạn và tài liệu trích dẫn chính thức.'
              : 'Question-by-question breakdown comparing your choices with official keys and syllabi.'}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setFilterMode('all')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filterMode === 'all'
                ? 'bg-brand-accent border-brand-accent text-white font-bold'
                : 'bg-brand-secondary border-brand-border text-brand-subtext hover:text-white'
            }`}
          >
            {lang === 'VI' ? `TẤT CẢ (${exam.questions.length})` : `ALL (${exam.questions.length})`}
          </button>
          <button
            onClick={() => setFilterMode('incorrect')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filterMode === 'incorrect'
                ? 'bg-rose-600 border-rose-500 text-white font-bold'
                : 'bg-brand-secondary border-brand-border text-brand-subtext hover:text-white'
            }`}
          >
            {lang === 'VI' ? `CÂU SAI (${exam.totalQuestions - attempt.correctCount})` : `INCORRECT (${exam.totalQuestions - attempt.correctCount})`}
          </button>
          <button
            onClick={() => setFilterMode('correct')}
            className={`px-3 py-1.5 rounded-lg border transition-all ${
              filterMode === 'correct'
                ? 'bg-emerald-600 border-emerald-500 text-white font-bold'
                : 'bg-brand-secondary border-brand-border text-brand-subtext hover:text-white'
            }`}
          >
            {lang === 'VI' ? `CÂU ĐÚNG (${attempt.correctCount})` : `CORRECT (${attempt.correctCount})`}
          </button>
        </div>
      </div>

      {/* Questions Review List */}
      <div className="space-y-6">
        {reviewQuestions.map((q) => {
          const chosen = attempt.userAnswers[q.id] || []
          const correct = q.correctAnswers
          const isAnswered = chosen.length > 0
          const isCorrect =
            isAnswered &&
            chosen.length === correct.length &&
            chosen.every((id) => correct.includes(id)) &&
            correct.every((id) => chosen.includes(id))

          return (
            <div
              key={q.id}
              className={`p-6 rounded-2xl border transition-all bg-brand-secondary/70 ${
                isCorrect
                  ? 'border-emerald-500/30'
                  : !isAnswered
                  ? 'border-amber-500/40 shadow-lg shadow-amber-950/10'
                  : 'border-rose-500/40 shadow-lg shadow-rose-950/10'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`w-7 h-7 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                      isCorrect
                        ? 'bg-emerald-500 text-white'
                        : !isAnswered
                        ? 'bg-amber-500 text-white'
                        : 'bg-rose-500 text-white'
                    }`}
                  >
                    {isCorrect ? '✓' : !isAnswered ? '—' : '✕'}
                  </span>
                  <span className="font-mono text-xs font-bold text-brand-accent uppercase">
                    {lang === 'VI' ? `CÂU ${q.id} // ${q.topic}` : `QUESTION ${q.id} // ${q.topic}`}
                  </span>
                </div>

                <span
                  className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border ${
                    isCorrect
                      ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-400'
                      : !isAnswered
                      ? 'bg-amber-950/40 border-amber-500/50 text-amber-400'
                      : 'bg-rose-950/40 border-rose-500/50 text-rose-400'
                  }`}
                >
                  {isCorrect
                    ? (lang === 'VI' ? 'CHÍNH XÁC' : 'CORRECT')
                    : !isAnswered
                    ? (lang === 'VI' ? 'CHƯA TRẢ LỜI' : 'UNANSWERED')
                    : (lang === 'VI' ? 'CHƯA ĐÚNG' : 'INCORRECT')}
                </span>
              </div>

              {/* Unanswered Notice */}
              {!isAnswered && (
                <div className="mb-3.5 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{lang === 'VI' ? 'Đáp án của bạn: Chưa trả lời' : 'Your answer: Unanswered'}</span>
                </div>
              )}

              {/* Question text */}
              <div className="mb-4">
                <p className="font-semibold text-base sm:text-lg text-brand-text mb-1">
                  {q.question}
                </p>
                {q.questionVi && (
                  <p className="text-xs sm:text-sm text-brand-subtext italic">
                    {q.questionVi}
                  </p>
                )}
              </div>

              {/* Options Breakdown */}
              <div className="space-y-2 mb-4">
                {q.options.map((opt) => {
                  const isUserChosen = chosen.includes(opt.id)
                  const isAnswerKey = correct.includes(opt.id)

                  let optClass = 'bg-brand-elevated/50 border-brand-border/60 text-brand-subtext'
                  if (isAnswerKey) {
                    optClass = 'bg-emerald-950/40 border-emerald-500 text-emerald-200 font-medium'
                  } else if (isUserChosen && !isAnswerKey) {
                    optClass = 'bg-rose-950/40 border-rose-500 text-rose-200 line-through opacity-85'
                  }

                  return (
                    <div
                      key={opt.id}
                      className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start gap-3 transition-colors ${optClass}`}
                    >
                      <div
                        className={`w-6 h-6 rounded font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                          isAnswerKey
                            ? 'bg-emerald-500 text-white'
                            : isUserChosen
                            ? 'bg-rose-500 text-white'
                            : 'bg-brand-secondary text-brand-muted border border-brand-border'
                        }`}
                      >
                        {opt.id}
                      </div>
                      <div className="flex-1">
                        <div>{opt.text}</div>
                        {opt.textVi && <div className="text-xs text-brand-muted mt-0.5">{opt.textVi}</div>}
                      </div>
                      {isAnswerKey && (
                        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase shrink-0 pt-0.5">
                          {lang === 'VI' ? '✓ ĐÁP ÁN ĐÚNG' : '✓ CORRECT ANSWER'}
                        </span>
                      )}
                      {isUserChosen && !isAnswerKey && (
                        <span className="text-[10px] font-mono text-rose-400 font-bold uppercase shrink-0 pt-0.5">
                          {lang === 'VI' ? '✕ BẠN ĐÃ CHỌN' : '✕ YOUR CHOICE'}
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Detailed Rationale & Reference Box */}
              <div className="p-4 rounded-xl bg-brand-elevated/80 border-l-4 border-brand-accent text-xs font-light leading-relaxed">
                <div className="font-mono text-[11px] font-bold text-brand-accent uppercase mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{lang === 'VI' ? 'GIẢI THÍCH CHUYÊN SÂU & TÀI LIỆU THAM KHẢO:' : 'EXPLANATION & REFERENCE:'}</span>
                </div>
                <p className="text-brand-text mb-1">
                  {q.explanation}
                </p>
                {q.explanationVi && (
                  <p className="text-brand-subtext italic mb-2">
                    {q.explanationVi}
                  </p>
                )}
                {q.reference && (
                  <div className="text-[10px] font-mono text-brand-accent/80 font-medium">
                    📖 {lang === 'VI' ? `Nguồn chuẩn: ${q.reference}` : `Source: ${q.reference}`}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

