import React, { useState } from 'react'
import { X, ShieldCheck, FileText, ShoppingBag, Award, Lock } from 'lucide-react'
import { Language } from '../data/translations'
import { BRAND } from '../data/contentData'

export type LegalTab = 'privacy' | 'terms' | 'ip'

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  initialTab?: LegalTab
  lang: Language
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy',
  lang
}) => {
  const [activeTab, setActiveTab] = useState<LegalTab>(initialTab)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-brand-secondary border border-brand-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border/80 bg-brand-elevated/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-display font-black text-sm sm:text-base text-brand-text uppercase tracking-tight">
              {lang === 'VI' ? 'CHÍNH SÁCH PHÁP LÝ & BẢO VỆ DỮ LIỆU' : 'LEGAL & DATA PRIVACY COMPLIANCE'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-brand-muted hover:text-white hover:bg-brand-secondary transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-brand-border/60 bg-brand-secondary px-6 pt-3 gap-2 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`pb-2.5 px-3 font-mono text-xs font-bold uppercase transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'privacy'
                ? 'border-brand-accent text-brand-accent'
                : 'border-transparent text-brand-muted hover:text-brand-subtext'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>{lang === 'VI' ? '1. Bảo vệ dữ liệu cá nhân' : '1. Privacy Policy'}</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`pb-2.5 px-3 font-mono text-xs font-bold uppercase transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'terms'
                ? 'border-brand-accent text-brand-accent'
                : 'border-transparent text-brand-muted hover:text-brand-subtext'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'VI' ? '2. Điều khoản & Tiếp thị liên kết' : '2. Terms & Affiliate'}</span>
          </button>

          <button
            onClick={() => setActiveTab('ip')}
            className={`pb-2.5 px-3 font-mono text-xs font-bold uppercase transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
              activeTab === 'ip'
                ? 'border-brand-accent text-brand-accent'
                : 'border-transparent text-brand-muted hover:text-brand-subtext'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'VI' ? '3. Bản quyền & Nhãn hiệu' : '3. IP & Trademarks'}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-brand-subtext leading-relaxed font-sans">
          {/* TAB 1: PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-brand-elevated/70 border border-brand-border flex items-start gap-3">
                <span className="text-emerald-400 font-mono text-base">⚖️</span>
                <div>
                  <h4 className="font-bold text-brand-text mb-0.5">
                    {lang === 'VI' ? 'Căn cứ tuân thủ pháp luật Việt Nam' : 'Compliance Legal Basis'}
                  </h4>
                  <p className="text-[11px] font-mono text-brand-muted">
                    {lang === 'VI'
                      ? 'Áp dụng theo Luật Bảo vệ Dữ liệu Cá nhân số 91/2025/QH15 và Nghị định 356/2025/NĐ-CP của Chính phủ nước CHXHCN Việt Nam.'
                      : 'Governed by the Law on Personal Data Protection No. 91/2025/QH15 and Decree 356/2025/ND-CP.'}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-brand-text mb-1 uppercase tracking-wide">
                  {lang === 'VI' ? '1. Đơn vị quản trị & xử lý dữ liệu (Data Controller)' : '1. Data Controller Identity'}
                </h4>
                <p>
                  {lang === 'VI'
                    ? `Website "${BRAND.name}" là thương hiệu nội dung số cá nhân được sáng lập và điều hành bởi tác giả ${BRAND.founder}. Mọi yêu cầu liên quan đến quyền dữ liệu cá nhân xin gửi về email: ${BRAND.email}.`
                    : `The website "${BRAND.name}" is a personal digital creator brand founded and operated by ${BRAND.founder}. For data inquiries, contact: ${BRAND.email}.`}
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-brand-text mb-1 uppercase tracking-wide">
                  {lang === 'VI' ? '2. Danh mục dữ liệu thu thập & Mục đích' : '2. Categories of Data Collected'}
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>{lang === 'VI' ? 'Thông tin xác thực OAuth' : 'OAuth Profile Data'}</strong>:{' '}
                    {lang === 'VI'
                      ? 'Họ tên, địa chỉ email, ảnh đại diện khi bạn tự nguyện đăng nhập qua Google hoặc Facebook. Mục đích: Thiết lập danh tính tài khoản và ghi nhận kết quả cá nhân.'
                      : 'Display name, email address, avatar photo from Google or Facebook OAuth to maintain user session.'}
                  </li>
                  <li>
                    <strong>{lang === 'VI' ? 'Dữ liệu thi thử chứng chỉ (NMC Academy)' : 'Mock Exam Performance'}</strong>:{' '}
                    {lang === 'VI'
                      ? 'Số câu đúng, điểm số, thời gian làm bài của các đề thi PSM I / CCAR-F nhằm mục đích lưu tiến độ và bảng vàng thành tích.'
                      : 'Score, elapsed time, and completion timestamps to calculate progress analytics.'}
                  </li>
                  <li>
                    <strong>{lang === 'VI' ? 'Lưu trữ cục bộ (Local Storage)' : 'Local Storage Cache'}</strong>:{' '}
                    {lang === 'VI'
                      ? 'Website sử dụng khóa lưu trữ trình duyệt (gwm_lang, gwm_auth_user, nmc_academy_attempts) để duy trì phiên làm việc không bị gián đoạn.'
                      : 'Functional local storage tokens for language preferences, session persistence, and local exam history.'}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-brand-text mb-1 uppercase tracking-wide">
                  {lang === 'VI' ? '3. Lưu trữ & Chuyển dữ liệu quốc tế' : '3. Cloud Hosting & International Transfers'}
                </h4>
                <p>
                  {lang === 'VI'
                    ? 'Dữ liệu xác thực và lịch sử bài thi được bảo vệ trên hệ thống máy chủ đám mây Supabase (tiêu chuẩn bảo mật SOC-2 Type II, mã hóa SSL/TLS khi truyền tải). Do đặc thù điện toán đám mây toàn cầu, người dùng hiểu và đồng ý việc dữ liệu được lưu trữ trên hạ tầng đám mây an toàn này theo Điều 20 Luật 91/2025/QH15.'
                    : 'User profile and scores are hosted securely on Supabase cloud database with end-to-end encryption. Users consent to secure cloud database processing.'}
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-brand-text mb-1 uppercase tracking-wide">
                  {lang === 'VI' ? '4. Quyền của chủ thể dữ liệu (Data Subject Rights)' : '4. Data Subject Rights'}
                </h4>
                <p>
                  {lang === 'VI'
                    ? `Bạn có toàn quyền yêu cầu: (a) Tra cứu và trích xuất dữ liệu của mình, (b) Đính chính thông tin cá nhân, (c) Yêu cầu xóa vĩnh viễn tài khoản và toàn bộ lịch sử điểm thi khỏi máy chủ. Vui lòng gửi email đến ${BRAND.email} với tiêu đề "[YÊU CẦU XÓA DỮ LIỆU]". Chúng tôi sẽ xử lý hoàn tất trong vòng 72 giờ làm việc.`
                    : `You have the right to access, rectify, or request permanent deletion of your account and mock exam records anytime by emailing ${BRAND.email}.`}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: TERMS & AFFILIATE */}
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                <ShoppingBag className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-amber-300 mb-0.5">
                    {lang === 'VI' ? 'Tuyên bố tiếp thị liên kết (Affiliate Disclosure)' : 'Affiliate & E-Commerce Disclosure'}
                  </h4>
                  <p className="text-[11px] font-mono text-amber-200/80">
                    {lang === 'VI'
                      ? 'Tuân thủ Luật Thương mại điện tử số 122/2025/QH15 và Nghị định 248/2026/NĐ-CP.'
                      : 'Compliant with the Vietnam Law on E-Commerce No. 122/2025/QH15 & Decree 248/2026/ND-CP.'}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-brand-text mb-1 uppercase tracking-wide">
                  {lang === 'VI' ? '1. Mô hình hoạt động của NMC Store' : '1. Store Operating Model'}
                </h4>
                <p>
                  {lang === 'VI'
                    ? 'Chuyên mục NMC Store hoạt động như một kênh đánh giá, tuyển chọn và giới thiệu phụ kiện phím cơ, gear gaming và tài liệu giáo dục. Toàn bộ nút "BUY ON SHOPEE / MUA TRÊN SHOPEE" là liên kết tiếp thị trực tiếp đến các gian hàng uy tín trên sàn thương mại điện tử Shopee Việt Nam.'
                    : 'NMC Store acts as a curated catalog and affiliate showcase. All purchase buttons redirect directly to verified merchant listings on Shopee Vietnam.'}
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-brand-text mb-1 uppercase tracking-wide">
                  {lang === 'VI' ? '2. Không trực tiếp thu tiền & giao kết hợp đồng' : '2. No Direct Payment Collection'}
                </h4>
                <p>
                  {lang === 'VI'
                    ? 'Website Gaming with meee KHÔNG trực tiếp thu tiền, không cung cấp cổng thanh toán trực tuyến và không lưu trữ thông tin thẻ ngân hàng của người dùng. Mọi giao dịch đặt hàng, xuất hóa đơn, chính sách bảo hành, đổi trả và hoàn tiền đều được thực hiện theo quy chế và chính sách bảo vệ người mua của sàn TMĐT Shopee.'
                    : 'Gaming with meee does not process payments or collect banking details. All transactions, deliveries, and refunds are handled through Shopee marketplace terms.'}
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-brand-text mb-1 uppercase tracking-wide">
                  {lang === 'VI' ? '3. Miễn trừ trách nhiệm trợ lý AI MEEE' : '3. AI Assistant Advisory Disclaimer'}
                </h4>
                <p>
                  {lang === 'VI'
                    ? 'Các thông tin do trợ lý AI MEEE cung cấp về mẹo chơi game, lý thuyết Scrum hay kiến thức tài chính chỉ nhằm mục đích tham khảo và hỗ trợ học tập, không cấu thành lời khuyên đầu tư hay tư vấn pháp lý chính thức.'
                    : 'Information generated by MEEE AI Assistant is for educational and entertainment reference only.'}
                </p>
              </div>
            </div>
          )}

          {/* TAB 3: IP & TRADEMARKS */}
          {activeTab === 'ip' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-start gap-3">
                <Award className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-blue-300 mb-0.5">
                    {lang === 'VI' ? 'Quyền sở hữu trí tuệ & Nhãn hiệu' : 'Intellectual Property Disclaimers'}
                  </h4>
                  <p className="text-[11px] font-mono text-blue-200/80">
                    {lang === 'VI'
                      ? 'Căn cứ Luật Sở hữu trí tuệ số 50/2005/QH11 (sửa đổi theo Luật số 07/2022/QH15).'
                      : 'Pursuant to the Law on Intellectual Property of Vietnam.'}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-brand-text mb-1 uppercase tracking-wide">
                  {lang === 'VI' ? '1. Nhãn hiệu các tựa Game Esports' : '1. Gaming Trademarks Fair Use'}
                </h4>
                <p>
                  {lang === 'VI'
                    ? 'Tên gọi, logo và tài sản đồ họa của: (a) League of Legends, Teamfight Tactics thuộc bản quyền của Riot Games, Inc.; (b) EA Sports FC Online thuộc bản quyền của Electronic Arts Inc. & Nexon Co., Ltd.; (c) PUBG Mobile thuộc bản quyền của KRAFTON, Inc. & Proxima Beta Pte. Ltd. Website sử dụng các nhãn hiệu này theo nguyên tắc Sử dụng hợp lý (Fair Use) cho mục đích bình luận, đánh giá cẩm nang chiến thuật và giáo dục cộng đồng.'
                    : 'Game titles, logos, and artwork are trademarks of Riot Games, Electronic Arts, Nexon, and KRAFTON. Used under fair-use editorial guidelines.'}
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-brand-text mb-1 uppercase tracking-wide">
                  {lang === 'VI' ? '2. Chứng chỉ PSM I™ & Scrum Guide' : '2. Scrum.org Independence'}
                </h4>
                <p>
                  {lang === 'VI'
                    ? 'Professional Scrum Master I (PSM I™) là nhãn hiệu đã đăng ký của Scrum.org. Các tài liệu ôn tập và đề thi thử tại NMC Academy được tác giả tự biên soạn dựa trên bản dịch công khai của Scrum Guide 2020. NMC Academy là nền tảng ôn luyện độc lập, KHÔNG trực thuộc và KHÔNG được ủy quyền hay bảo trợ chính thức bởi Scrum.org hay Cục Dự trữ Liên bang Mỹ (CCAR).'
                    : 'PSM I™ is a registered trademark of Scrum.org. NMC Academy is an independent educational training portal not affiliated with or endorsed by Scrum.org.'}
                </p>
              </div>

              <div>
                <h4 className="font-display font-bold text-sm text-brand-text mb-1 uppercase tracking-wide">
                  {lang === 'VI' ? '3. Bản quyền nội dung sáng tạo' : '3. Creator Copyright'}
                </h4>
                <p>
                  {lang === 'VI'
                    ? `Toàn bộ giao diện thiết kế, mã nguồn giao diện, cẩm nang macro độc quyền và cấu trúc câu hỏi thi thử thuộc bản quyền sáng tạo của ${BRAND.founder} & thương hiệu Gaming with meee.`
                    : `UI design, custom code, macro guides, and original mock questions are copyrighted by ${BRAND.founder} & Gaming with meee.`}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-brand-border/80 bg-brand-elevated/80">
          <span className="text-[11px] font-mono text-brand-muted">
            {lang === 'VI' ? 'Cập nhật lần cuối: 08/11/2026' : 'Last updated: 2026-11-08'}
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-brand-accent/25"
          >
            {lang === 'VI' ? 'ĐÃ HIỂU & ĐÓNG' : 'I UNDERSTAND & CLOSE'}
          </button>
        </div>
      </div>
    </div>
  )
}
