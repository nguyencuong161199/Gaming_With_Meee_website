import React from 'react'
import { Language, TRANSLATIONS } from '../data/translations'
import { BRAND } from '../data/contentData'
import {
  Sparkles,
  Gamepad2,
  Brain,
  Video,
  ArrowLeft,
  ShieldCheck,
  Code,
  TrendingUp,
  ShoppingCart,
  Award,
  Users,
  CheckCircle2,
  Calendar,
  Star,
  Quote
} from 'lucide-react'

interface AboutPageProps {
  lang: Language
  onBack: () => void
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, onBack }) => {
  const t = TRANSLATIONS[lang].about

  const stats = [
    {
      metric: '1,450+',
      labelVi: 'Lượt thi thử hoàn thành',
      labelEn: 'Mock exams completed',
      icon: Award,
      accent: 'text-amber-400'
    },
    {
      metric: '88.4%',
      labelVi: 'Tỷ lệ học viên vượt qua kỳ thi',
      labelEn: 'Certified exam pass rate',
      icon: CheckCircle2,
      accent: 'text-emerald-400'
    },
    {
      metric: '5,000+',
      labelVi: 'Game thủ & Thành viên cộng đồng',
      labelEn: 'Community members',
      icon: Users,
      accent: 'text-cyan-400'
    },
    {
      metric: '100%',
      labelVi: 'Chuẩn Scrum.org & Fed CCAR',
      labelEn: 'Official standard alignment',
      icon: ShieldCheck,
      accent: 'text-purple-400'
    }
  ]

  const testimonials = [
    {
      name: 'Trần Hoàng Nam',
      roleVi: 'Scrum Master tại FPT Software',
      roleEn: 'Scrum Master at FPT Software',
      examVi: 'Đỗ PSM I™ (97.5% - 78/80 câu)',
      examEn: 'Passed PSM I™ (97.5%)',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      commentVi:
        'Bộ đề thi thử 15 câu trên NMC Academy giải thích cực kỳ sát đề thi thật của Scrum.org. Đặc biệt phần phân biệt rõ trách nhiệm của PO và SM giúp mình không bị bẫy ở các câu hỏi tình huống phức tạp.',
      commentEn:
        'The practice set on NMC Academy reflects the exact nuance of Scrum.org. The clear breakdown between PO and SM accountabilities helped me ace the situational questions.'
    },
    {
      name: 'Lê Minh Khang',
      roleVi: 'Chuyên viên Quản trị Rủi ro (Risk Analyst)',
      roleEn: 'Risk Analyst, Commercial Banking',
      examVi: 'Học viên CCAR-F & Basel III',
      examEn: 'CCAR-F & Basel III Specialist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      commentVi:
        'Khung CCAR-F ở đây là tài liệu tiếng Việt hiếm hoi giải thích chuẩn chỉnh về CET1, PPNR và các kịch bản Severely Adverse của Fed. Rất có ích cho chuyên viên làm mô hình stress testing an toàn vốn.',
      commentEn:
        'A rare and rigorous breakdown of Fed CCAR guidelines in Vietnamese, covering CET1 ratios, PPNR projections, and severely adverse scenario stresses. Invaluable for banking risk practitioners.'
    },
    {
      name: 'Đặng Quốc Huy',
      roleVi: 'Thách Đấu ĐTCL Mùa 13 & Tuyển thủ FPS',
      roleEn: 'TFT Challenger & Competitive FPS Player',
      examVi: 'Thành viên Gaming with meee từ 2024',
      examEn: 'GWM Community Member since 2024',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      commentVi:
        'Cẩm nang Fast 8 và các mốc lợi tức trên Gaming Hub viết rất thực chiến, cập nhật liên tục theo từng bản cập nhật. Kết hợp với lót chuột kính mua ở Store flick tâm cực kỳ chuẩn xác.',
      commentEn:
        'The Fast-8 tempo guide and compound interest econ rules on Gaming Hub are super practical. Paired with the glass mousepad from the Store, my flicks are crisp and consistent.'
    }
  ]

  const milestones = [
    {
      year: '2023',
      titleVi: 'Khởi sinh Thương hiệu Gaming with meee',
      titleEn: 'Genesis of Gaming with meee',
      descVi: 'Bắt đầu kênh sáng tạo nội dung phân tích cơ chế game chiến thuật, meta ĐTCL và lối sống công nghệ số.',
      descEn: 'Launched content creation channel analyzing tactical mechanics, TFT meta, and digital creator lifestyle.'
    },
    {
      year: '2024',
      titleVi: 'Mở rộng Hệ sinh thái & Gian hàng Gear',
      titleEn: 'Ecosystem Expansion & Gear Store',
      descVi: 'Nghiên cứu ứng dụng công nghệ sức khỏe (HealthTech) và vận hành kênh cung ứng phụ kiện gaming gear cao cấp.',
      descEn: 'Developed health-tech metric apps and established curated high-end gaming accessories distribution.'
    },
    {
      year: '2025',
      titleVi: 'Khởi động Nền tảng NMC Academy',
      titleEn: 'Launch of NMC Academy Platform',
      descVi: 'Biên soạn ngân hàng đề thi chuẩn quốc tế Scrum Master (PSM I) và khung an toàn vốn ngân hàng Federal Reserve CCAR.',
      descEn: 'Authored rigorous practice banks for Professional Scrum Master (PSM I) and Federal Reserve CCAR risk frameworks.'
    },
    {
      year: '2026',
      titleVi: 'Tích hợp Trợ lý AI & Gaming Hub 2.0',
      titleEn: 'AI Multi-Agent & Gaming Hub 2.0',
      descVi: 'Nâng cấp toàn diện Antigravity 2.0 với trợ lý thông minh MEEE AI Assistant, 4 cổng game chuyên biệt và kiến trúc SPA siêu tốc.',
      descEn: 'Deployed Antigravity 2.0 architecture: MEEE AI Assistant, 4 specialized game portals, and instant performance SPA.'
    }
  ]

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
              <span>{lang === 'VI' ? 'ABOUT // THƯƠNG HIỆU & NHÀ SÁNG LẬP' : 'ABOUT // BRAND & FOUNDER'}</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-text tracking-tight uppercase">
              {lang === 'VI' ? 'VỀ GAMING WITH MEEE & NMC CORP' : 'ABOUT GAMING WITH MEEE & NMC CORP'}
            </h1>
            <p className="text-sm text-brand-subtext font-light mt-1 max-w-2xl leading-relaxed">
              {lang === 'VI'
                ? 'Nơi hội tụ giữa niềm đam mê giải trí công nghệ, sáng tạo nội dung gaming, nghiên cứu trí tuệ nhân tạo và tư duy tài chính chuyên sâu.'
                : 'Where gaming passion, synthetic intelligence research, and analytical financial rigor converge.'}
            </p>
          </div>

          <button
            onClick={onBack}
            className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-secondary border border-brand-border hover:border-brand-accent text-brand-subtext hover:text-white text-xs font-mono transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'VI' ? 'VỀ TRANG CHỦ' : 'BACK TO HOME'}</span>
          </button>
        </div>

        {/* Founder & Brand Identity Card */}
        <div className="rounded-3xl bg-brand-secondary/90 border border-brand-border p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 mb-12 shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

          {/* Logo / Portrait Container */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-brand-accent/40 bg-black shrink-0 shadow-2xl shadow-brand-accent/20 relative group">
            <img
              src="/assets/nmc-gwm-logo.jpeg"
              alt="Gaming with meee logo"
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
              <span className="text-[10px] font-mono text-white/90 tracking-widest uppercase">
                EDWARD // NMC CORP
              </span>
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-elevated border border-brand-border text-xs font-mono text-brand-accent mb-3">
              <span>
                {lang === 'VI'
                  ? 'NHÀ SÁNG LẬP: NGUYỄN MINH CƯỜNG (EDWARD) // NMC CORP'
                  : 'FOUNDER: NGUYEN MINH CUONG (EDWARD) // NMC CORP'}
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-brand-text uppercase mb-1">
              {BRAND.name}
            </h2>
            <p className="font-mono text-xs text-brand-muted uppercase tracking-wider mb-4">
              {BRAND.attribution} &bull; {lang === 'VI' ? 'Thường gọi: Nguyễn Cường' : 'Creator Alias: Nguyen Cuong'}
            </p>
            <blockquote className="text-sm sm:text-base text-brand-subtext italic leading-relaxed border-l-2 border-brand-accent/60 pl-4 my-3 text-left">
              {t.quote}
            </blockquote>

            {/* Founder Verification Chips */}
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-brand-border/40 justify-center md:justify-start text-[11px] font-mono text-brand-subtext">
              <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-brand-accent" />
                <span>PSM I™ Certified</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>CCAR & Basel III</span>
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-brand-elevated border border-brand-border flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                <span>Full-Stack & HealthTech</span>
              </span>
            </div>
          </div>
        </div>

        {/* Verified Track Record Stats Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((s, idx) => {
            const Icon = s.icon
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-brand-secondary/80 border border-brand-border hover:border-brand-accent/40 transition-all shadow-lg flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-xl bg-brand-elevated border border-brand-border">
                    <Icon className={`w-4 h-4 ${s.accent}`} />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                    VERIFIED
                  </span>
                </div>
                <div>
                  <div className={`font-display font-black text-2xl sm:text-3xl ${s.accent} tracking-tight mb-1`}>
                    {s.metric}
                  </div>
                  <div className="text-xs text-brand-subtext font-light leading-snug">
                    {lang === 'VI' ? s.labelVi : s.labelEn}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* 3 Core Pillars */}
        <div className="mb-12">
          <h3 className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'VI' ? '// BA TRỤ CỘT SÁNG TẠO CỐT LÕI' : '// THREE CORE PILLARS'}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-brand-secondary border border-brand-border hover:border-brand-accent/50 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/30 text-brand-accent flex items-center justify-center mb-4">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-brand-text uppercase mb-2">
                {t.pillarPlay}
              </h4>
              <p className="text-xs text-brand-subtext font-light leading-relaxed">
                {t.pillarPlayDesc} {lang === 'VI' ? 'Khám phá cơ chế game, phân tích chiến thuật meta đỉnh cao của TFT Mùa 13, LOL, FC Online và PUBG Mobile.' : 'Explore mechanics and ranked meta strategies across TFT Set 13, League, FC Online, and PUBG Mobile.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-secondary border border-brand-border hover:border-purple-500/50 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-4">
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-brand-text uppercase mb-2">
                {t.pillarExplore}
              </h4>
              <p className="text-xs text-brand-subtext font-light leading-relaxed">
                {t.pillarExploreDesc} {lang === 'VI' ? 'Nghiên cứu mô hình ngôn ngữ lớn (LLM), AI Agent đa nhiệm MEEE AI và các giải pháp tự động hóa thông minh.' : 'Researching Large Language Models (LLMs), multi-agent MEEE AI systems, and automated tech workflows.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-secondary border border-brand-border hover:border-emerald-500/50 transition-colors shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="font-display font-bold text-lg text-brand-text uppercase mb-2">
                {t.pillarCreate}
              </h4>
              <p className="text-xs text-brand-subtext font-light leading-relaxed">
                {t.pillarCreateDesc} {lang === 'VI' ? 'Xây dựng nền tảng đề thi chuẩn quốc tế NMC Academy, chia sẻ kiến thức hữu ích và sản phẩm phím cơ chất lượng cao.' : 'Developing international mock exams on NMC Academy, sharing curated knowledge and mechanical keyboard gear.'}
              </p>
            </div>
          </div>
        </div>

        {/* Real Learner & Community Reviews */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest flex items-center gap-2">
              <Quote className="w-4 h-4" />
              <span>{lang === 'VI' ? '// ĐÁNH GIÁ TỪ HỌC VIÊN & CỘNG ĐỒNG' : '// LEARNER & COMMUNITY TESTIMONIALS'}</span>
            </h3>
            <span className="text-[11px] font-mono text-amber-400 font-bold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400" /> 4.9/5 RATING
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-secondary/80 border border-brand-border hover:border-brand-accent/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-brand-subtext font-light leading-relaxed italic mb-5">
                    "{lang === 'VI' ? item.commentVi : item.commentEn}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-brand-border/50">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border border-brand-border"
                  />
                  <div>
                    <h5 className="font-display font-bold text-sm text-brand-text">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-brand-muted">
                      {lang === 'VI' ? item.roleVi : item.roleEn}
                    </p>
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold block mt-0.5">
                      ✓ {lang === 'VI' ? item.examVi : item.examEn}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Milestones (Hành Trình Dự Án) */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-brand-secondary/80 border border-brand-border shadow-xl">
          <h3 className="font-mono text-xs font-bold text-brand-accent uppercase tracking-widest mb-6 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{lang === 'VI' ? '// HÀNH TRÌNH PHÁT TRIỂN & CỘT MỐC DỰ ÁN' : '// DEVELOPMENT MILESTONES & ROADMAP'}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-brand-elevated border border-brand-border/70 relative flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-black text-brand-accent block mb-2">
                    // {m.year}
                  </span>
                  <h5 className="font-display font-bold text-sm text-brand-text mb-2">
                    {lang === 'VI' ? m.titleVi : m.titleEn}
                  </h5>
                  <p className="text-xs text-brand-subtext font-light leading-relaxed">
                    {lang === 'VI' ? m.descVi : m.descEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creator Background & Multidisciplinary Portfolio */}
        <div className="p-7 sm:p-8 rounded-3xl bg-brand-secondary/80 border border-brand-border mb-12 shadow-xl">
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
                <p className="text-[11px] text-brand-subtext mt-1 leading-relaxed">
                  {lang === 'VI'
                    ? 'Xây dựng giải pháp công nghệ đo lường và theo dõi các chỉ số sức khỏe sinh trắc cá nhân hóa.'
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
                <p className="text-[11px] text-brand-subtext mt-1 leading-relaxed">
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
                <p className="text-[11px] text-brand-subtext mt-1 leading-relaxed">
                  {lang === 'VI'
                    ? 'Nghiên cứu mô hình kiểm tra sức chịu tải vốn ngân hàng (Federal Reserve CCAR / DFAST) và quản trị rủi ro CET1.'
                    : 'Researching banking capital resilience frameworks (Fed CCAR / DFAST) and systemic CET1 risk management.'}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border/60 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-mono text-xs font-bold text-brand-text uppercase">
                  {lang === 'VI' ? 'Quản trị Dự án Agile / Scrum (PSM I)' : 'Agile & Scrum Project Delivery (PSM I)'}
                </h5>
                <p className="text-[11px] text-brand-subtext mt-1 leading-relaxed">
                  {lang === 'VI'
                    ? 'Áp dụng tư duy quản trị linh hoạt chuẩn Scrum Guide 2020 và biên soạn ngân hàng đề thi thử toàn diện 15 câu chuẩn hóa.'
                    : 'Applying Scrum Guide 2020 frameworks and authoring comprehensive standardized certification practice exams.'}
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
