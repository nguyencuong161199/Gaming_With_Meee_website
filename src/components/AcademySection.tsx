import React, { memo } from 'react'
import { Language, TRANSLATIONS } from '../data/translations'
import { EXAM_PACKAGES } from '../data/academyData'
import { ExamPackage, UserExamAttempt } from '../types/academy'
import { SectionHeading } from './SectionHeading'
import { Clock, HelpCircle, CheckCircle2, Play, Award, Sparkles, History } from 'lucide-react'

interface AcademySectionProps {
  lang: Language
  onSelectExam: (exam: ExamPackage) => void
  recentAttempts?: UserExamAttempt[]
  onReviewAttempt?: (attempt: UserExamAttempt) => void
}

export const AcademySection: React.FC<AcademySectionProps> = memo(({
  lang,
  onSelectExam,
  recentAttempts = [],
  onReviewAttempt
}) => {
  const t = TRANSLATIONS[lang].academy

  return (
    <section id="academy" className="w-full h-full shrink-0 relative flex flex-col justify-center px-5 sm:px-8">
      <div className="max-w-content mx-auto w-full my-auto pt-16">
        <SectionHeading
          number={t.number}
          tag={t.tag}
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* 2 Featured Exam Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-4">
          {EXAM_PACKAGES.map((exam) => (
            <div
              key={exam.id}
              className="relative rounded-2xl bg-brand-secondary border border-brand-border hover:border-brand-accent/60 p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between group shadow-md"
            >
              <div>
                {/* Header telemetry */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-mono text-xs text-brand-muted tracking-wider uppercase flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-brand-accent" />
                    <span>{exam.category.toUpperCase()}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-[10px] font-mono">
                    <Sparkles className="w-3 h-3" />
                    {exam.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-brand-text group-hover:text-brand-accent transition-colors tracking-tight uppercase leading-snug mb-1.5">
                  {exam.title}
                </h3>
                <p className="text-xs font-mono text-brand-muted mb-3">
                  {exam.subtitle}
                </p>

                {/* Description */}
                <p className="text-brand-subtext text-xs sm:text-sm font-light leading-relaxed mb-4">
                  {lang === 'VI' ? exam.descriptionVi : exam.description}
                </p>

                {/* Specs Matrix */}
                <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-brand-elevated border border-brand-border/60 mb-4 text-center">
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted block uppercase">
                      {lang === 'VI' ? 'Thời gian' : 'Time'}
                    </span>
                    <span className="font-mono text-xs font-bold text-brand-text flex items-center justify-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3 text-brand-accent" />
                      {exam.durationMinutes}m
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted block uppercase">
                      {lang === 'VI' ? 'Số câu' : 'Questions'}
                    </span>
                    <span className="font-mono text-xs font-bold text-brand-text flex items-center justify-center gap-1 mt-0.5">
                      <HelpCircle className="w-3 h-3 text-brand-accent" />
                      {exam.totalQuestions}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-brand-muted block uppercase">
                      {lang === 'VI' ? 'Điểm đạt' : 'Pass Rate'}
                    </span>
                    <span className="font-mono text-xs font-bold text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {exam.passRate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-3 border-t border-brand-border/40 flex items-center justify-between">
                <button
                  onClick={() => onSelectExam(exam)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-accent/20 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{t.startBtn}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Recent attempt banner if any */}
        {recentAttempts.length > 0 && (
          <div className="p-3 rounded-xl bg-brand-secondary/80 border border-brand-border flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-brand-subtext">
              <History className="w-4 h-4 text-brand-accent" />
              <span>
                {lang === 'VI' ? 'Bài thi gần nhất:' : 'Latest attempt:'}{' '}
                <strong className="text-brand-text">{recentAttempts[0].examTitle}</strong> —{' '}
                <span className={recentAttempts[0].passed ? 'text-emerald-400' : 'text-rose-400'}>
                  {recentAttempts[0].score}% ({recentAttempts[0].passed ? 'ĐẠT' : 'CHƯA ĐẠT'})
                </span>
              </span>
            </div>
            {onReviewAttempt && (
              <button
                onClick={() => onReviewAttempt(recentAttempts[0])}
                className="text-brand-accent hover:underline text-[11px]"
              >
                {t.reviewBtn} →
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
})

AcademySection.displayName = 'AcademySection'

