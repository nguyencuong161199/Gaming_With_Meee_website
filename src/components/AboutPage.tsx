import React from 'react'
import { Language, TRANSLATIONS } from '../data/translations'
import { BRAND } from '../data/contentData'
import { Sparkles, Gamepad2, Brain, Video, ArrowLeft, ShieldCheck, Code, TrendingUp, ShoppingCart } from 'lucide-react'

interface AboutPageProps {
  lang: Language
  onBack: () => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onBack }) => {
  const t = TRANSLATIONS[lang].about

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white relative overflow-x-hidden pt-20 pb-16">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 grid-backdrop opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-6 animate-fade-in">
        {/* Top Header & Back Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-brand-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'VI' ? 'ABOUT // THƯƠNG HIỆU & TÁC GIẢ' : 'ABOUT // BRAND & CREATOR'}</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-text tracking-tight uppercase">
              {lang === 'VI' ? 'VỀ GAMING WITH MEEE & NMC CORP' : 'ABOUT GAMING WITH MEEE & NMC CORP'}
            </h1>
            <p className="text-sm text-brand-subtext font-light mt-1 max-w-2xl">
              {lang === 'VI'
                ? 'Nơi hội tụ giữa niềm đam mê giải trí công nghệ, sáng tạo nội dung gaming, nghiên cứu trí tuệ nhân tạo và tư duy tài chính chuyên sâu.'
                : 'Where gaming passion, synthetic intelligence research, and analytical financial rigor converge.'}
            </p>
          </div>

          <button
            onClick={onBack}
            className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-secondary border border-brand-border hover:border-brand-accent text-brand-subtext hover:text-white text-xs font-mono transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'VI' ? 'VỀ TRANG CHỦ' : 'BACK TO HOME'}</span>
          </button>
        </div>

        {/* Creator & Brand Identity Card */}
        <div className="rounded-3xl bg-brand-secondary/90 border border-brand-border p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 mb-12 shadow-xl backdrop-blur-md">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border-2 border-brand-accent/40 bg-black shrink-0 shadow-2xl shadow-brand-accent/20">
            <img
              src="/assets/nmc-gwm-logo.jpeg"
              alt="Gaming with meee logo"
              className="w-full h-full object-cover scale-105"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-elevated border border-brand-border text-xs font-mono text-brand-accent mb-3">
              <span>{lang === 'VI' ? 'SÁNG LẬP BỞI NGUYỄN CƯỜNG // NMC CORP' : 'FOUNDED BY NGUYEN CUONG // NMC CORP'}</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-text uppercase mb-2">
              {BRAND.name}
            </h2>
            <p className="font-mono text-xs text-brand-muted uppercase tracking-wider mb-4">
              {BRAND.attribution}
            </p>
            <blockquote className="text-sm sm:text-base text-brand-subtext italic leading-relaxed border-l-2 border-brand-accent/60 pl-4 my-3 text-left">
              {t.quote}
            </blockquote>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="mb-12">
          <h3 className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-6">
            {lang === 'VI' ? '// BA TRỤ CỘT SÁNG TẠO CỐT LÕI' : '// THREE CORE PILLARS'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-brand-secondary border border-brand-border hover:border-brand-accent/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/30 text-brand-accent flex items-center justify-center mb-4">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-brand-text uppercase mb-2">
                {t.pillarPlay}
              </h4>
              <p className="text-xs text-brand-subtext font-light leading-relaxed">
                {t.pillarPlayDesc} {lang === 'VI' ? 'Khám phá cơ chế game, phân tích chiến thuật meta đỉnh cao của TFT, LOL, FC Online và PUBG Mobile.' : 'Explore mechanics and ranked meta strategies across TFT, League, FC Online, and PUBG Mobile.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-secondary border border-brand-border hover:border-purple-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-brand-text uppercase mb-2">
                {t.pillarExplore}
              </h4>
              <p className="text-xs text-brand-subtext font-light leading-relaxed">
                {t.pillarExploreDesc} {lang === 'VI' ? 'Nghiên cứu mô hình ngôn ngữ lớn (LLM), AI Agent đa nhiệm và các công cụ công nghệ thông minh.' : 'Researching Large Language Models (LLMs), multi-agent systems, and smart tech workflows.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-secondary border border-brand-border hover:border-emerald-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-brand-text uppercase mb-2">
                {t.pillarCreate}
              </h4>
              <p className="text-xs text-brand-subtext font-light leading-relaxed">
                {t.pillarCreateDesc} {lang === 'VI' ? 'Xây dựng nền tảng đề thi chuẩn quốc tế NMC Academy, chia sẻ kiến thức hữu ích và sản phẩm thực chiến.' : 'Developing international mock exams on NMC Academy, sharing curated knowledge and practical tools.'}
              </p>
            </div>
          </div>
        </div>

        {/* Creator Background & Multidisciplinary Portfolio */}
        <div className="p-7 sm:p-8 rounded-3xl bg-brand-secondary/80 border border-brand-border mb-12">
          <h3 className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-3">
            {lang === 'VI' ? '// HỒ SƠ NĂNG LỰC TỔNG HÒA' : '// MULTIDISCIPLINARY BACKGROUND'}
          </h3>
          <p className="text-sm text-brand-subtext font-light mb-6 leading-relaxed">
            {lang === 'VI'
              ? 'Gaming with meee không chỉ là một kênh giải trí thông thường, mà là sự hội tụ kinh nghiệm thực tế đa dạng của tác giả qua nhiều lĩnh vực công nghệ, kinh doanh và tài chính:'
              : 'Gaming with meee bridges real-world technical and business execution across multiple domains:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border/60 flex items-start gap-3">
              <Code className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-mono text-xs font-bold text-brand-text uppercase">
                  {lang === 'VI' ? 'Phát triển Ứng dụng & Sức khỏe' : 'Health Tech & App Development'}
                </h5>
                <p className="text-[11px] text-brand-subtext mt-1">
                  {lang === 'VI'
                    ? 'Xây dựng giải pháp công nghệ đo lường và theo dõi các chỉ số sức khỏe cá nhân hóa.'
                    : 'Building technical solutions for biometric tracking and personalized health analytics.'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border/60 flex items-start gap-3">
              <ShoppingCart className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-mono text-xs font-bold text-brand-text uppercase">
                  {lang === 'VI' ? 'Kinh doanh & E-Commerce Shopee' : 'E-Commerce & Digital Merchandising'}
                </h5>
                <p className="text-[11px] text-brand-subtext mt-1">
                  {lang === 'VI'
                    ? 'Vận hành kênh bán lẻ trực tuyến, cung ứng phụ kiện gaming gear và tài liệu chất lượng cao.'
                    : 'Operating digital storefronts, supplying quality gaming accessories and learning resources.'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border/60 flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-mono text-xs font-bold text-brand-text uppercase">
                  {lang === 'VI' ? 'Phân tích Tài chính & Stress Testing' : 'Financial Risk & Stress Testing (CCAR)'}
                </h5>
                <p className="text-[11px] text-brand-subtext mt-1">
                  {lang === 'VI'
                    ? 'Nghiên cứu mô hình kiểm tra sức chịu tải vốn ngân hàng (Federal Reserve CCAR / DFAST) và quản trị rủi ro.'
                    : 'Researching banking capital resilience frameworks (Fed CCAR / DFAST) and systemic risk management.'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-mono text-xs font-bold text-brand-text uppercase">
                  {lang === 'VI' ? 'Quản trị Dự án Agile / Scrum (PSM I)' : 'Agile & Scrum Project Delivery (PSM I)'}
                </h5>
                <p className="text-[11px] text-brand-subtext mt-1">
                  {lang === 'VI'
                    ? 'Áp dụng tư duy quản trị linh hoạt chuẩn Scrum Guide 2020 và biên soạn ngân hàng đề thi thử toàn diện.'
                    : 'Applying Scrum Guide 2020 frameworks and authoring comprehensive certification practice exams.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Back Button */}
        <div className="flex items-center justify-between pt-6 border-t border-brand-border/60">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-accent/25"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'VI' ? 'QUAY LẠI TRANG CHỦ' : 'BACK TO HOME'}</span>
          </button>

          <span className="font-mono text-xs text-brand-muted">
            PUBLISHED BY NMC CORP &bull; 2026
          </span>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
