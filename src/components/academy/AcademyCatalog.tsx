import React, { useState } from 'react'
import { Clock, ArrowRight, Sparkles, Filter, History } from 'lucide-react'
import { ExamPackage, ExamCategory, UserExamAttempt } from '../../types/academy'
import { Language } from '../../data/translations'

interface AcademyCatalogProps {
  exams: ExamPackage[]
  onSelectExam: (exam: ExamPackage) => void
  recentAttempts: UserExamAttempt[]
  onReviewAttempt?: (attempt: UserExamAttempt) => void
  lang: Language
  onBackToHome: () => void
}

export const AcademyCatalog: React.FC<AcademyCatalogProps> = ({
  exams,
  onSelectExam,
  recentAttempts,
  onReviewAttempt,
  lang,
  onBackToHome
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ExamCategory>('all')

  const filteredExams = exams.filter((exam) => {
    if (selectedCategory === 'all') return true
    return exam.category === selectedCategory
  })

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 animate-fade-in text-brand-text">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-border">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-[11px] font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NMC ACADEMY // MOCK EXAM LAB</span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-text tracking-tight uppercase">
            {lang === 'VI' ? 'NỀN TẢNG THI THỬ CHỨNG CHỈ' : 'CERTIFICATION MOCK EXAMS'}
          </h1>
          <p className="text-sm text-brand-subtext font-light mt-1 max-w-2xl">
            {lang === 'VI'
              ? 'Luyện thi chuẩn format quốc tế cho Scrum Master (PSM I) & Quản trị an toàn vốn tài chính (CCAR-F). Có đồng hồ tính giờ, chấm điểm tự động và lời giải chi tiết.'
              : 'Practice mock exams aligned with international standards: Scrum Master (PSM I) & Banking Capital Stress Testing (CCAR-F) with timers, automated grading, and detailed rationales.'}
          </p>
        </div>

        <button
          onClick={onBackToHome}
          className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-secondary border border-brand-border hover:border-brand-accent text-brand-subtext hover:text-white text-xs font-mono transition-all"
        >
          <span>← {lang === 'VI' ? 'VỀ TRANG CHỦ' : 'BACK TO HOME'}</span>
        </button>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        <div className="flex items-center gap-1.5 text-xs text-brand-muted font-mono mr-2">
          <Filter className="w-3.5 h-3.5" />
          <span>{lang === 'VI' ? 'CHỦ ĐỀ:' : 'FILTER:'}</span>
        </div>

        {[
          { id: 'all', label: lang === 'VI' ? 'TẤT CẢ ĐỀ THI' : 'ALL EXAMS' },
          { id: 'agile', label: 'AGILE // SCRUM (PSM I)' },
          { id: 'finance', label: lang === 'VI' ? 'TÀI CHÍNH // CCAR-F' : 'FINANCE // CCAR-F' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id as ExamCategory)}
            className={`px-4 py-2 rounded-xl font-mono text-xs transition-all shrink-0 ${
              selectedCategory === tab.id
                ? 'bg-brand-accent text-white font-bold shadow-lg shadow-brand-accent/25'
                : 'bg-brand-secondary/80 border border-brand-border text-brand-subtext hover:text-brand-text hover:border-brand-border/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Exam Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {filteredExams.map((exam) => {
          return (
            <div
              key={exam.id}
              className="group relative bg-brand-secondary/70 hover:bg-brand-elevated border border-brand-border hover:border-brand-accent/60 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-brand-accent/10 rounded-full blur-2xl group-hover:bg-brand-accent/20 transition-all pointer-events-none" />

              <div>
                {/* Badge & Level */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-brand-accent/15 border border-brand-accent/30 text-brand-accent text-[10px] font-mono font-bold tracking-wider uppercase">
                    {exam.badge}
                  </span>
                  <span className="text-[11px] font-mono text-brand-muted">
                    {exam.level} Level
                  </span>
                </div>

                {/* Exam Title & Subtitle */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-text group-hover:text-brand-accent transition-colors mb-1.5">
                  {exam.title}
                </h3>
                <p className="text-xs font-mono text-brand-accent/90 mb-4">
                  {exam.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-brand-subtext font-light leading-relaxed mb-6">
                  {lang === 'VI' ? exam.descriptionVi : exam.description}
                </p>

                {/* Exam Specs (Questions, Time, Pass Rate) */}
                <div className="grid grid-cols-3 gap-2.5 p-3 rounded-xl bg-brand-bg/60 border border-brand-border/60 font-mono text-xs mb-6">
                  <div className="text-center">
                    <span className="text-[10px] text-brand-muted block uppercase">{lang === 'VI' ? 'Số câu' : 'Questions'}</span>
                    <span className="font-bold text-brand-text text-sm">{exam.totalQuestions} {lang === 'VI' ? 'câu' : 'qs'}</span>
                  </div>
                  <div className="text-center border-x border-brand-border/60">
                    <span className="text-[10px] text-brand-muted block uppercase">{lang === 'VI' ? 'Thời gian' : 'Time'}</span>
                    <span className="font-bold text-brand-text text-sm flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3 text-brand-accent" />
                      {exam.durationMinutes}m
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] text-brand-muted block uppercase">{lang === 'VI' ? 'Điểm đỗ' : 'Passing'}</span>
                    <span className="font-bold text-emerald-400 text-sm">{exam.passRate}%</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectExam(exam)}
                className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 hover:from-blue-500 hover:via-sky-400 hover:to-cyan-400 text-white font-mono text-xs font-black uppercase tracking-wider border border-cyan-300/50 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 flex items-center justify-center gap-2 transition-all active:scale-[0.99] group"
              >
                <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                  {lang === 'VI' ? 'BẮT ĐẦU THI THỬ NGAY' : 'START PRACTICE EXAM'}
                </span>
                <ArrowRight className="w-4 h-4 text-cyan-100 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )
        })}
      </div>

      {/* Recent Attempts History (if any) */}
      {recentAttempts.length > 0 && (
        <div className="p-6 rounded-2xl bg-brand-secondary/40 border border-brand-border">
          <div className="flex items-center gap-2 mb-4">
            <History className="w-4 h-4 text-brand-accent" />
            <h4 className="font-mono text-xs font-bold uppercase text-brand-text tracking-wider">
              {lang === 'VI' ? 'LỊCH SỬ BÀI THI GẦN ĐÂY CỦA BẠN' : 'YOUR RECENT EXAM ATTEMPTS'}
            </h4>
          </div>

          <div className="space-y-3">
            {recentAttempts.slice(0, 4).map((attempt) => (
              <div
                key={attempt.id}
                className="flex items-center justify-between p-3.5 rounded-xl bg-brand-elevated border border-brand-border text-xs font-mono"
              >
                <div>
                  <span className="font-bold text-brand-text block">{attempt.examTitle}</span>
                  <span className="text-[11px] text-brand-muted">{new Date(attempt.completedAt).toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className={`font-bold block ${attempt.passed ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {attempt.score.toFixed(1)}% — {attempt.passed ? 'PASSED' : 'FAILED'}
                    </span>
                    <span className="text-[10px] text-brand-muted">
                      {attempt.correctCount}/{attempt.totalQuestions} {lang === 'VI' ? 'câu đúng' : 'correct'}
                    </span>
                  </div>
                  {onReviewAttempt && (
                    <button
                      onClick={() => onReviewAttempt(attempt)}
                      className="px-3 py-1.5 rounded-lg bg-brand-secondary hover:bg-brand-accent hover:text-white border border-brand-border text-[11px] transition-colors"
                    >
                      {lang === 'VI' ? 'Xem lại' : 'Review'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

