import React, { useEffect, useState, memo } from 'react'
import { StoryItem, UpdateItem } from '../types/content'
import { Language } from '../data/translations'
import { ArrowLeft, Calendar, Clock, Share2, ArrowUpRight, Check, User } from 'lucide-react'

interface ArticlePageProps {
  item: StoryItem | UpdateItem
  type: 'story' | 'update'
  lang: Language
  onBack: () => void
}

export const ArticlePage: React.FC<ArticlePageProps> = memo(({ item, type, lang, onBack }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Scroll to top when opening an article
    window.scrollTo({ top: 0, behavior: 'auto' })

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onBack])

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Type guards and properties
  const isStory = type === 'story'
  const story = isStory ? (item as StoryItem) : null
  const update = !isStory ? (item as UpdateItem) : null

  const categoryName = story ? story.category : update ? update.tag : 'EDITORIAL'
  const title = item.title
  const date = item.date || '2026'
  const summary = story ? story.summary : update ? update.summary : ''
  const readTime = story ? story.readTime : '3 min'

  return (
    <article className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white relative overflow-x-hidden">
      {/* Background Watermark & Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.06] filter contrast-125"
          style={{
            backgroundImage: `url('/assets/nmc-gwm-logo.jpeg')`,
            backgroundPosition: 'center',
            backgroundSize: 'min(700px, 70vw)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/95 via-brand-bg/85 to-brand-bg" />
        <div className="absolute inset-0 grid-backdrop opacity-20" />
      </div>

      {/* Sticky Header with Back Button */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-brand-bg/90 backdrop-blur-xl border-b border-brand-border/80 py-3.5 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-brand-elevated border border-brand-border hover:border-brand-accent text-brand-text hover:text-brand-accent font-mono text-xs uppercase tracking-wider transition-all shadow-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>{lang === 'VI' ? 'QUAY LẠI TRANG CHỦ' : 'BACK TO HOME'}</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono border border-brand-accent/30 bg-brand-accent/10 text-brand-accent uppercase">
              {categoryName}
            </span>

            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-brand-elevated border border-brand-border text-brand-muted hover:text-brand-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              title="Share link"
              aria-label="Share article"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Article Container */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 pt-12 pb-24 relative z-10">
        {/* Article Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-muted mb-6">
          <span className="flex items-center gap-1.5 text-brand-accent">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{readTime}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5 text-brand-subtext">
            <User className="w-3.5 h-3.5" />
            <span>Mr. Cuong (Edward) // NMC Corp</span>
          </span>
        </div>

        {/* Oversized Headline */}
        <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-brand-text leading-[1.05] tracking-tight uppercase mb-6">
          {title}
        </h1>

        {/* Subhead / Lead */}
        {story?.subtitle && (
          <p className="text-lg sm:text-xl text-brand-accent font-medium leading-relaxed mb-8">
            {story.subtitle}
          </p>
        )}

        {/* Summary Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-brand-secondary/90 border-l-4 border-brand-accent border-y border-r border-brand-border my-8 shadow-xl">
          <span className="font-mono text-xs text-brand-accent tracking-widest uppercase block mb-2 font-bold">
            {lang === 'VI' ? 'TÓM TẮT NỘI DUNG' : 'EXECUTIVE SUMMARY'}
          </span>
          <p className="text-base sm:text-lg text-brand-text font-normal italic leading-relaxed">
            "{summary}"
          </p>
        </div>

        {/* Essay Body Content */}
        <div className="space-y-6 text-brand-subtext text-base sm:text-lg font-light leading-relaxed pt-4">
          <p>
            {lang === 'VI'
              ? 'Trong thập kỷ chuyển dịch kỹ thuật số mạnh mẽ này, công nghệ tương tác đang tái cấu trúc cách chúng ta trải nghiệm các thế giới ảo. Trò chơi điện tử không còn đơn thuần là một sản phẩm giải trí thụ động, mà đã phát triển thành những không gian tính toán sống động, nơi trí tuệ nhân tạo (AI) và kiến trúc engine thế hệ mới cộng hưởng nhịp nhàng.'
              : 'In this transformative digital decade, interactive technology is fundamentally reconstructing how we experience virtual environments. Gaming is no longer a passive entertainment medium; it has matured into a living computational canvas where synthetic intelligence and next-generation engine pipelines resonate synchronously.'}
          </p>

          <p>
            {lang === 'VI'
              ? 'Từ việc phân tích luồng xử lý đồ họa cho đến các bài kiểm tra thực tế trên phần cứng, sự kết hợp giữa các mô hình tạo sinh (generative models) và pipeline kết xuất theo thời gian thực mang lại độ chân thực đáng kinh ngạc. Mọi khung hình, mọi xung lực điều khiển đều được tính toán với độ chính xác đến từng mili-giây.'
              : 'From analyzing GPU rendering passes to empirical hardware benchmarking, combining generative models with real-time rendering pipelines yields unprecedented fidelity. Every single frame and input impulse is measured down to the millisecond.'}
          </p>

          <div className="p-6 rounded-xl bg-brand-elevated border border-brand-border my-8">
            <h4 className="font-mono text-xs text-brand-accent uppercase tracking-widest mb-2 font-bold">
              // GAMING WITH MEEE PHILOSOPHY
            </h4>
            <blockquote className="text-base sm:text-lg text-brand-text italic leading-relaxed m-0">
              {lang === 'VI'
                ? '"Chúng tôi không chỉ trải nghiệm văn hóa số — chúng tôi mổ xẻ cơ chế và tái tạo những điều thú vị."'
                : '"We don\'t just consume digital culture — we disassemble the machinery and rebuild something unforgettable."'}
            </blockquote>
          </div>

          <p>
            {lang === 'VI'
              ? 'Mục tiêu của chúng tôi tại Gaming with meee không chỉ là quan sát, mà là mổ xẻ và cung cấp những tài liệu phân tích thực tế nhất cho cộng đồng những người đam mê công nghệ, lập trình viên và game thủ sáng tạo.'
              : 'Our objective at Gaming with meee is not simply to observe, but to deconstruct and deliver practical, deeply researched dispatches for technology enthusiasts, software creators, and forward-thinking gamers.'}
          </p>

          {/* External Link if Available */}
          {update?.link && (
            <div className="pt-6">
              <a
                href={update.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-accent/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              >
                <span>{update.linkText || (lang === 'VI' ? 'MỞ LIÊN KẾT NGUỒN' : 'OPEN ATTACHED LINK')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

        {/* Footer of the article */}
        <div className="mt-14 pt-8 border-t border-brand-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-secondary border border-brand-border hover:border-brand-accent text-brand-text hover:text-brand-accent font-mono text-xs font-medium uppercase tracking-wider transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'VI' ? 'QUAY LẠI TRANG CHỦ' : 'BACK TO HOME'}</span>
          </button>

          <div className="flex items-center gap-2 font-mono text-xs text-brand-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>PUBLISHED BY NMC CORP</span>
          </div>
        </div>
      </main>
    </article>
  )
})

ArticlePage.displayName = 'ArticlePage'
export default ArticlePage
