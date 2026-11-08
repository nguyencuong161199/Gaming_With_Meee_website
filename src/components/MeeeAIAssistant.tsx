import React, { useState, useRef, useEffect } from 'react'
import { Bot, Sparkles, X, Send, RotateCcw, BookOpen, Gamepad2, ShoppingBag, ArrowUpRight } from 'lucide-react'
import { Language } from '../data/translations'

type AgentMode = 'tutor' | 'game' | 'shop' | 'general'

interface Message {
  id: string
  sender: 'ai' | 'user'
  text: string
  mode?: AgentMode
  timestamp: string
}

interface MeeeAIAssistantProps {
  lang: Language
  onOpenAcademy?: () => void
  onOpenStore?: () => void
}

const formatInlineStyles = (text: string) => {
  const tokens: (string | React.ReactNode)[] = []
  const regex = /(\*\*.*?\*\*|`.*?`|\*.*?\*)/g
  const parts = text.split(regex)

  parts.forEach((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      tokens.push(
        <strong key={i} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      )
    } else if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      tokens.push(
        <code key={i} className="px-1.5 py-0.5 rounded bg-brand-elevated text-cyan-300 font-mono text-[11px] border border-white/10">
          {part.slice(1, -1)}
        </code>
      )
    } else if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      tokens.push(
        <em key={i} className="italic text-brand-subtext">
          {part.slice(1, -1)}
        </em>
      )
    } else if (part) {
      tokens.push(part)
    }
  })

  return tokens
}

const renderFormattedAiText = (rawText: string) => {
  const blocks = rawText.split(/\n\n+/)
  return blocks.map((block, bIdx) => {
    const trimmed = block.trim()
    if (!trimmed) return null

    if (trimmed.startsWith('### ')) {
      return (
        <h4 key={bIdx} className="font-display font-bold text-cyan-300 text-xs sm:text-sm mt-2 mb-1 tracking-tight">
          {formatInlineStyles(trimmed.replace(/^###\s+/, ''))}
        </h4>
      )
    }

    if (trimmed.startsWith('## ')) {
      return (
        <h3 key={bIdx} className="font-display font-bold text-amber-300 text-sm sm:text-base mt-2.5 mb-1 tracking-tight">
          {formatInlineStyles(trimmed.replace(/^##\s+/, ''))}
        </h3>
      )
    }

    const lines = trimmed.split('\n')
    const isBulletList = lines.length > 0 && lines.some(l => /^\s*[-*•]\s+/.test(l))
    const isNumberedList = lines.length > 0 && lines.some(l => /^\s*\d+\.\s+/.test(l))

    if (isBulletList) {
      return (
        <ul key={bIdx} className="space-y-1.5 my-2 pl-3 border-l-2 border-brand-accent/40 text-xs sm:text-sm">
          {lines.map((l, lIdx) => {
            const clean = l.replace(/^\s*[-*•]\s+/, '')
            return (
              <li key={lIdx} className="leading-relaxed text-brand-text">
                {formatInlineStyles(clean)}
              </li>
            )
          })}
        </ul>
      )
    }

    if (isNumberedList) {
      return (
        <ol key={bIdx} className="space-y-1.5 my-2 pl-4 list-decimal text-xs sm:text-sm">
          {lines.map((l, lIdx) => {
            const clean = l.replace(/^\s*\d+\.\s+/, '')
            return (
              <li key={lIdx} className="leading-relaxed text-brand-text">
                {formatInlineStyles(clean)}
              </li>
            )
          })}
        </ol>
      )
    }

    return (
      <p key={bIdx} className="my-1 text-xs sm:text-sm leading-relaxed">
        {lines.map((line, lIdx) => (
          <React.Fragment key={lIdx}>
            {lIdx > 0 && <br />}
            {formatInlineStyles(line)}
          </React.Fragment>
        ))}
      </p>
    )
  })
}

export const MeeeAIAssistant: React.FC<MeeeAIAssistantProps> = ({
  lang,
  onOpenAcademy,
  onOpenStore
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMode, setActiveMode] = useState<AgentMode>('general')
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: lang === 'VI'
        ? 'Xin chào! Tôi là MEEE AI — Trợ lý ảo đa nhiệm thuộc NMC Corp. Bạn muốn tôi hỗ trợ Ôn thi chứng chỉ (PSM I, CCAR-F), Tư vấn chiến thuật Game (TFT, LOL, PUBG, FC), hay Xem thông tin Cửa hàng?'
        : 'Greetings! I am MEEE AI — your multi-agent neural assistant by NMC Corp. How can I assist you with Certification Exams, Gaming Strategy, or Store products?',
      mode: 'general',
      timestamp: 'Vừa xong'
    }
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const quickPrompts: Record<AgentMode, string[]> = {
    general: [
      lang === 'VI' ? 'NMC Corp & Nguyễn Mạnh Cường là ai?' : 'Who is NMC Corp & Nguyen Manh Cuong?',
      lang === 'VI' ? 'Website này có những tính năng gì?' : 'What features does this site offer?',
      lang === 'VI' ? 'Cách liên hệ hợp tác với tác giả?' : 'How to contact the creator?'
    ],
    tutor: [
      lang === 'VI' ? 'Tóm tắt 3 trụ cột của Scrum trong PSM I' : 'Explain the 3 pillars of Scrum in PSM I',
      lang === 'VI' ? 'Khung CCAR và chỉ số an toàn vốn CET1 là gì?' : 'What is the CCAR framework and CET1 ratio?',
      lang === 'VI' ? 'Làm sao để thi đỗ PSM I đạt 85%?' : 'How to score 85%+ on the PSM I exam?'
    ],
    game: [
      lang === 'VI' ? 'Gợi ý đội hình leo rank TFT mùa này' : 'Recommend top meta team comps for TFT',
      lang === 'VI' ? 'Cách tối ưu độ nhạy súng trong PUBG Mobile' : 'Best gyroscope sensitivity tips for PUBG Mobile',
      lang === 'VI' ? 'Mẹo build đội hình FC Online lương tối ưu' : 'Optimal squad building tips for FC Online'
    ],
    shop: [
      lang === 'VI' ? 'Bộ Keycap Cyberpunk còn hàng không?' : 'Is the Cyberpunk Keycap set in stock?',
      lang === 'VI' ? 'Tài liệu ôn thi PSM I bao gồm những gì?' : 'What does the PSM I exam kit contain?',
      lang === 'VI' ? 'Làm sao để đặt hàng trên Shopee?' : 'How to purchase via Shopee?'
    ]
  }

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputText).trim()
    if (!text) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages((prev) => [...prev, userMsg])
    setInputText('')
    setIsTyping(true)

    // Generate intelligent multi-agent response
    setTimeout(() => {
      let aiResponseText = ''
      const lower = text.toLowerCase()

      if (activeMode === 'tutor' || lower.includes('psm') || lower.includes('scrum') || lower.includes('ccar')) {
        if (lower.includes('psm') || lower.includes('scrum')) {
          aiResponseText = lang === 'VI'
            ? '🎓 **PSM I (Professional Scrum Master)**: Bài thi gồm 80 câu trong 60 phút, cần đạt 85% (68 câu đúng). Điểm cốt lõi là ghi nhớ: Product Owner là người duy nhất quyết định thứ tự ưu tiên Product Backlog, Scrum Master quản lý tính hiệu quả của quy trình Scrum, và Scrum Team cam kết với Definition of Done. Bạn hãy mở tab **ACADEMY** trên web để thi thử ngay nhé!'
            : '🎓 **PSM I Master Guide**: The exam consists of 80 questions in 60 mins with an 85% passing threshold. The PO solely orders the Product Backlog, while the Scrum Team owns the Definition of Done. Check out our **ACADEMY** tab to practice real mock tests!'
        } else if (lower.includes('ccar') || lower.includes('vốn') || lower.includes('cet1')) {
          aiResponseText = lang === 'VI'
            ? '📊 **CCAR & An Toàn Vốn**: Khung CCAR của Cục Dự trữ Liên bang Mỹ (Fed) kiểm tra sức chịu đựng của các ngân hàng lớn dưới kịch bản khủng hoảng sâu (Supervisory Severely Adverse). Chỉ số quan trọng nhất là CET1 (tối thiểu 4.5% + 2.5% bộ đệm bảo toàn). Hãy làm bài thi thử CCAR-F trong phân khu **ACADEMY** nhé!'
            : '📊 **CCAR Capital Testing**: The Fed evaluates bank resilience under Severely Adverse shock scenarios with strict CET1 targets (4.5% minimum + 2.5% conservation buffer). Test your knowledge in our **ACADEMY** tab!'
        } else {
          aiResponseText = lang === 'VI'
            ? '🎓 Chế độ Gia sư AI sẵn sàng! Tôi có thể giải thích từng câu hỏi trắc nghiệm, thuật ngữ Agile/Scrum hay mô hình tài chính CCAR. Bạn đang vướng ở khái niệm nào?'
            : '🎓 AI Tutor mode ready! I can explain any Agile/Scrum questions, DoD, or CCAR capital stress testing models. What question are you tackling?'
        }
      } else if (activeMode === 'game' || lower.includes('tft') || lower.includes('pubg') || lower.includes('lol') || lower.includes('fc')) {
        if (lower.includes('tft')) {
          aiResponseText = lang === 'VI'
            ? '🎮 **TFT (Đấu Trường Chân Lý)**: Meta hiện tại ưu tiên giữ chuỗi thắng/thua ở giai đoạn 2-1 đến 2-7 để tích 50 vàng sớm, sau đó roll ở level 8 để hoàn thiện đội hình chủ lực 4 tiền 2 sao. Ghép sớm các trang bị đa dụng như Cuồng Đao, Giáp Gai hoặc Quỷ Thư!'
            : '🎮 **TFT Meta Tip**: Prioritize econ streaks early to hit 50 gold by Stage 3. Fast-8 is the most consistent strategy to lock in 2-star 4-cost carries. Slam flexible items early!'
        } else if (lower.includes('pubg')) {
          aiResponseText = lang === 'VI'
            ? '🎯 **PUBG Mobile Pro Tips**: Bật tính năng Con quay hồi chuyển (Gyroscope: Always On) để ghìm tâm súng M416 / Beryl mượt mà. Ở các vòng bo cuối, ưu tiên giữ rìa bo cao (High Ground) và chuẩn bị tối thiểu 4-5 quả Smoke để tạo đường cover!'
            : '🎯 **PUBG Mobile Combat Tips**: Enable Full Gyroscope for precise recoil control on 5.56 and 7.62 ARs. Prioritize zone edges with high ground and keep at least 4 smoke grenades for end-game rotations!'
        } else {
          aiResponseText = lang === 'VI'
            ? '🎮 Chế độ Huấn luyện viên Game sẵn sàng! Bạn cần tư vấn chiến thuật cho TFT, Liên Minh Huyền Thoại, PUBG Mobile hay mẹo nâng cấp đội hình FC Online?'
            : '🎮 Game Coach ready! Need tactical setups for TFT, League of Legends, PUBG Mobile, or FC Online squad building?'
        }
      } else if (activeMode === 'shop' || lower.includes('giá') || lower.includes('mua') || lower.includes('hàng')) {
        aiResponseText = lang === 'VI'
          ? '🛍️ **NMC Store**: Các sản phẩm như Bộ Keycap Cyberpunk Neon (680.000 đ) và Bộ đề thi ôn tập PSM I (249.000 đ) hiện đang có sẵn hàng với ưu đãi Freeship. Bạn có thể mở trực tiếp phân khu **STORE** trên thanh menu để đặt hàng nhé!'
          : '🛍️ **NMC Store**: High-grade Cyberpunk Keycaps and PSM I Exam kits are currently in stock with direct Shopee shipping links. Open our **STORE** tab on the navigation bar to browse all items!'
      } else {
        if (lower.includes('cường') || lower.includes('nmc') || lower.includes('who')) {
          aiResponseText = lang === 'VI'
            ? '🏢 **NMC Corp & Nguyễn Mạnh Cường (Edward)**: Nguyễn Mạnh Cường (Edward) là nhà sáng tạo nội dung, lập trình viên và người sáng lập thương hiệu NMC Corp & Gaming with meee. Với nền tảng từ phân tích tài chính, kinh doanh số đến phát triển ứng dụng đo sức khỏe, anh xây dựng website này như một không gian chia sẻ tri thức công nghệ và giải trí số.'
            : '🏢 **About NMC Corp & Nguyen Manh Cuong (Edward)**: Nguyen Manh Cuong (Edward) is the creator, product builder, and founder of NMC Corp & Gaming with meee. Combining backgrounds in financial analysis, tech app development, and creative media, this platform is his personal digital venture studio.'
        } else {
          aiResponseText = lang === 'VI'
            ? '💡 Cảm ơn bạn đã trò chuyện! Tôi có thể giúp bạn: 1. Ôn thi thử chứng chỉ (PSM I / CCAR-F), 2. Tư vấn mẹo chơi game (TFT / LOL / PUBG), hoặc 3. Xem danh sách sản phẩm tại NMC Store. Bạn có thể chọn chế độ ở các nút phía trên nhé!'
            : '💡 Thanks for reaching out! I can guide you through: 1. Certification practice (PSM I / CCAR-F), 2. Gaming meta tips (TFT / LOL / PUBG), or 3. Browsing products at NMC Store. Toggle the mode pills above anytime!'
        }
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText,
        mode: activeMode,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
    }, 600)
  }

  return (
    <>
      {/* Floating Trigger Button (Compact High-Tech Floating Icon) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open MEEE AI Assistant"
          title="MEEE AI Assistant (Hỏi đáp Đề thi & Gaming)"
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-slate-900/95 hover:bg-slate-900 border border-brand-accent/70 hover:border-brand-accent text-white shadow-xl shadow-cyan-950/60 hover:shadow-brand-accent/40 backdrop-blur-xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
        >
          {/* Animated Online Status Dot */}
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-950" />
          </span>

          <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent group-hover:rotate-12 group-hover:scale-110 transition-transform" />

          {/* Sleek Tooltip on hover for desktop */}
          <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-brand-accent/40 text-[11px] font-mono font-bold text-white uppercase tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg hidden sm:block">
            MEEE AI <span className="text-brand-accent">// ASSISTANT</span>
          </span>
        </button>
      )}

      {/* Main Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[85vh] bg-slate-950/95 border border-brand-accent/50 rounded-3xl shadow-2xl shadow-cyan-950/60 backdrop-blur-2xl flex flex-col overflow-hidden animate-slide-up text-brand-text select-none">
          {/* Chat Window Header */}
          <div className="p-4 sm:px-5 border-b border-white/10 bg-gradient-to-r from-slate-900 via-slate-900/90 to-brand-bg flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-sm text-brand-text tracking-wide uppercase">
                    MEEE AI
                  </h3>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    ONLINE
                  </span>
                </div>
                <p className="font-mono text-[10px] text-brand-muted tracking-wider uppercase">
                  NMC CORP // MULTI-AGENT CORE
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() =>
                  setMessages([
                    {
                      id: `cleared-${Date.now()}`,
                      sender: 'ai',
                      text: lang === 'VI' ? 'Đã làm mới cuộc trò chuyện. Bạn cần tôi hỗ trợ chủ đề gì?' : 'Chat reset. How can I assist you?',
                      timestamp: 'Vừa xong'
                    }
                  ])
                }
                title="Làm mới chat"
                className="p-1.5 rounded-lg hover:bg-white/10 text-brand-muted hover:text-white transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Đóng"
                className="p-1.5 rounded-lg hover:bg-white/10 text-brand-muted hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Multi-Agent Mode Selector Strip */}
          <div className="px-3.5 py-2.5 bg-slate-900/90 border-b border-white/10 shrink-0">
            <div className="flex items-center justify-between mb-1.5 px-0.5">
              <span className="text-[10px] font-mono text-brand-muted uppercase tracking-wider font-semibold">
                {lang === 'VI' ? 'CHẾ ĐỘ TƯ VẤN AI:' : 'AI AGENT MODE:'}
              </span>
              <span className="text-[10px] font-mono text-brand-accent font-bold">
                {activeMode.toUpperCase()}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { id: 'general', label: lang === 'VI' ? '✨ TỔNG QUAN' : '✨ GENERAL', icon: Sparkles },
                { id: 'tutor', label: lang === 'VI' ? '🎓 GIA SƯ ĐỀ THI' : '🎓 EXAM TUTOR', icon: BookOpen },
                { id: 'game', label: '🎮 GAME COACH', icon: Gamepad2 },
                { id: 'shop', label: '🛍️ NMC STORE', icon: ShoppingBag }
              ].map((m) => {
                const Icon = m.icon
                const isActive = activeMode === m.id
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveMode(m.id as AgentMode)}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[10px] font-mono tracking-wider transition-all text-center ${
                      isActive
                        ? 'bg-brand-accent text-white font-bold shadow-md shadow-brand-accent/40 border border-brand-accent'
                        : 'bg-white/5 hover:bg-white/10 text-brand-subtext hover:text-white border border-white/5'
                    }`}
                  >
                    <Icon className="w-3 h-3 shrink-0" />
                    <span className="truncate">{m.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs font-sans leading-relaxed">
            {messages.map((msg) => {
              const isAi = msg.sender === 'ai'
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isAi ? 'justify-start' : 'justify-end'}`}
                >
                  {isAi && (
                    <div className="w-7 h-7 rounded-lg bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl ${
                      isAi
                        ? 'bg-slate-900/90 border border-white/10 text-brand-text rounded-tl-sm'
                        : 'bg-brand-accent text-white font-medium rounded-tr-sm shadow-md shadow-brand-accent/20'
                    }`}
                  >
                    {isAi ? (
                      <div className="text-xs sm:text-sm text-brand-text leading-relaxed">
                        {renderFormattedAiText(msg.text)}
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">{msg.text}</div>
                    )}
                    <div
                      className={`text-[9px] font-mono mt-1 ${
                        isAi ? 'text-brand-muted' : 'text-white/70 text-right'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-brand-muted text-[11px] font-mono pl-9">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
                <span>{lang === 'VI' ? 'MEEE AI đang phản hồi...' : 'MEEE AI is thinking...'}</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions & Context Actions (Wrapped, No Clipping) */}
          <div className="px-3 py-2 border-t border-white/5 bg-slate-900/60 max-h-24 overflow-y-auto scrollbar-none flex flex-wrap items-center gap-1.5 shrink-0">
            {activeMode === 'tutor' && onOpenAcademy && (
              <button
                onClick={() => {
                  setIsOpen(false)
                  onOpenAcademy()
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/40 text-[10px] text-blue-300 font-bold transition-colors shrink-0"
              >
                <span>{lang === 'VI' ? 'Mở NMC Academy' : 'Open NMC Academy'}</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            )}
            {activeMode === 'shop' && onOpenStore && (
              <button
                onClick={() => {
                  setIsOpen(false)
                  onOpenStore()
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-[10px] text-amber-300 font-bold transition-colors shrink-0"
              >
                <span>{lang === 'VI' ? 'Xem NMC Store' : 'View NMC Store'}</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            )}
            {quickPrompts[activeMode].map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] text-brand-subtext hover:text-brand-accent transition-colors text-left"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <div className="p-3 bg-slate-950 border-t border-white/10 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={
                activeMode === 'tutor'
                  ? (lang === 'VI' ? 'Hỏi câu hỏi thi PSM I, CCAR-F...' : 'Ask about PSM I, CCAR-F exams...')
                  : activeMode === 'game'
                  ? (lang === 'VI' ? 'Hỏi mẹo chơi TFT, LOL, PUBG Mobile...' : 'Ask gaming meta & tactics...')
                  : activeMode === 'shop'
                  ? (lang === 'VI' ? 'Hỏi về sản phẩm, giá bán, tồn kho...' : 'Ask about products, pricing, stock...')
                  : (lang === 'VI' ? 'Hỏi MEEE AI bất kỳ điều gì...' : 'Ask MEEE AI anything...')
              }
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 focus:border-brand-accent text-brand-text placeholder-brand-muted text-xs font-sans outline-none transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputText.trim()}
              className="p-2.5 rounded-xl bg-brand-accent hover:bg-brand-accent-hover disabled:opacity-40 text-white transition-all shadow-md shadow-brand-accent/25 shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
