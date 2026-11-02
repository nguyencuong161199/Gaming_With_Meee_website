import React, { useState } from 'react'
import { ShoppingBag, ArrowUpRight, Check, Filter, X } from 'lucide-react'
import { STORE_PRODUCTS } from '../data/storeData'
import { ProductItem, ProductCategory } from '../types/store'
import { Language } from '../data/translations'

interface StorePageProps {
  lang: Language
  onBack: () => void
}

export const StorePage: React.FC<StorePageProps> = ({ lang, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all')
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)

  const filteredProducts = STORE_PRODUCTS.filter((prod) => {
    if (selectedCategory === 'all') return true
    return prod.category === selectedCategory
  })

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount)
  }

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white relative overflow-x-hidden pt-20 pb-16">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 grid-backdrop opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-6 animate-fade-in">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-brand-border">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-[11px] font-mono uppercase tracking-widest mb-3">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>NMC STORE // CYBER COMMERCE</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-brand-text tracking-tight uppercase">
              {lang === 'VI' ? 'CỬA HÀNG SẢN PHẨM & DỊCH VỤ' : 'DIGITAL STORE & PRODUCTS'}
            </h1>
            <p className="text-sm text-brand-subtext font-light mt-1 max-w-2xl">
              {lang === 'VI'
                ? 'Nơi cung cấp phụ kiện gaming cao cấp, tài liệu ôn thi chứng chỉ chuẩn quốc tế và các sản phẩm số tuyển chọn từ NMC Corp.'
                : 'Curated gaming gear, international certification prep materials, and digital tools by NMC Corp.'}
            </p>
          </div>

          <button
            onClick={onBack}
            className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-secondary border border-brand-border hover:border-brand-accent text-brand-subtext hover:text-white text-xs font-mono transition-all"
          >
            <span>← {lang === 'VI' ? 'VỀ TRANG CHỦ' : 'BACK TO HOME'}</span>
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <div className="flex items-center gap-1.5 text-xs text-brand-muted font-mono mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>{lang === 'VI' ? 'DANH MỤC:' : 'CATEGORY:'}</span>
          </div>

          {[
            { id: 'all', label: lang === 'VI' ? 'TẤT CẢ SẢN PHẨM' : 'ALL PRODUCTS' },
            { id: 'gear', label: lang === 'VI' ? 'GAMING GEAR & PHỤ KIỆN' : 'GAMING GEAR & ACCESSORIES' },
            { id: 'education', label: lang === 'VI' ? 'TÀI LIỆU & ĐỀ THI' : 'STUDY & EXAM MATERIALS' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id as ProductCategory)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all shrink-0 ${
                selectedCategory === tab.id
                  ? 'bg-brand-accent text-white font-bold shadow-lg shadow-brand-accent/25'
                  : 'bg-brand-secondary/80 border border-brand-border text-brand-subtext hover:text-brand-text'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((prod) => {
            const isOutOfStock = prod.status === 'out_of_stock'

            return (
              <div
                key={prod.id}
                className="group relative bg-brand-secondary/70 hover:bg-brand-elevated border border-brand-border hover:border-brand-accent/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Image Container with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent" />

                  {/* Stock Status Badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase border shadow-md ${
                        isOutOfStock
                          ? 'bg-rose-950/80 border-rose-500 text-rose-300'
                          : 'bg-emerald-950/80 border-emerald-500 text-emerald-300'
                      }`}
                    >
                      {isOutOfStock
                        ? (lang === 'VI' ? 'HẾT HÀNG' : 'OUT OF STOCK')
                        : (lang === 'VI' ? `CÒN ${prod.stock} SẢN PHẨM` : `${prod.stock} IN STOCK`)}
                    </span>
                  </div>

                  {/* Sold count badge */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white/90 text-[10px] font-mono">
                      {lang === 'VI' ? `Đã bán: ${prod.soldCount}` : `Sold: ${prod.soldCount}`}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {prod.badge && (
                      <span className="inline-block px-2 py-0.5 rounded bg-brand-accent/15 text-brand-accent text-[10px] font-mono font-bold uppercase mb-2">
                        {prod.badge}
                      </span>
                    )}
                    <h3 className="font-display font-bold text-base sm:text-lg text-brand-text group-hover:text-brand-accent transition-colors mb-1 line-clamp-2">
                      {lang === 'VI' ? prod.titleVi : prod.title}
                    </h3>
                    <p className="text-xs text-brand-subtext font-light line-clamp-2 mb-4 leading-relaxed">
                      {lang === 'VI' ? prod.descriptionVi : prod.description}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-brand-border/60">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="font-display font-black text-xl text-brand-accent">
                        {formatVND(prod.price)}
                      </span>
                      {prod.originalPrice && (
                        <span className="text-xs font-mono text-brand-muted line-through">
                          {formatVND(prod.originalPrice)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProduct(prod)}
                      disabled={isOutOfStock}
                      className={`w-full py-2.5 px-4 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                        isOutOfStock
                          ? 'bg-brand-elevated text-brand-muted border border-brand-border cursor-not-allowed opacity-60'
                          : 'bg-brand-accent hover:bg-brand-accent-hover text-white shadow-lg shadow-brand-accent/25 active:scale-[0.99]'
                      }`}
                    >
                      <span>
                        {isOutOfStock
                          ? (lang === 'VI' ? 'TẠM HẾT HÀNG' : 'OUT OF STOCK')
                          : (lang === 'VI' ? 'XEM CHI TIẾT & ĐẶT HÀNG' : 'VIEW DETAILS & ORDER')}
                      </span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-bg/85 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-lg bg-brand-secondary border border-brand-border rounded-2xl p-6 sm:p-7 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-brand-elevated text-brand-subtext hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4 border border-brand-border">
              <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-brand-accent/20 text-brand-accent text-[11px] font-mono font-bold uppercase">
                {selectedProduct.badge || 'NMC OFFICIAL'}
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                {lang === 'VI' ? `CÒN ${selectedProduct.stock} SẢN PHẨM` : `${selectedProduct.stock} IN STOCK`}
              </span>
            </div>

            <h3 className="font-display font-bold text-xl text-brand-text mb-2">
              {lang === 'VI' ? selectedProduct.titleVi : selectedProduct.title}
            </h3>

            <div className="font-display font-black text-2xl text-brand-accent mb-4">
              {formatVND(selectedProduct.price)}
            </div>

            <p className="text-xs sm:text-sm text-brand-subtext font-light mb-4 leading-relaxed">
              {lang === 'VI' ? selectedProduct.descriptionVi : selectedProduct.description}
            </p>

            <div className="space-y-2 mb-6 p-3 rounded-xl bg-brand-bg/60 border border-brand-border text-xs font-mono">
              <span className="font-bold text-brand-text block mb-1">
                {lang === 'VI' ? 'Đặc điểm nổi bật:' : 'Key Highlights:'}
              </span>
              {selectedProduct.features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-brand-subtext">
                  <Check className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={selectedProduct.shopeeUrl || 'https://shopee.vn'}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 rounded-xl bg-brand-accent hover:bg-brand-accent-hover text-white font-mono text-xs font-bold uppercase tracking-wider text-center shadow-lg shadow-brand-accent/30 transition-all"
              >
                {lang === 'VI' ? 'MUA TRÊN SHOPEE (FREESHIP)' : 'BUY ON SHOPEE (OFFICIAL)'}
              </a>
              <a
                href="mailto:nmc.corp16@gmail.com?subject=Inquiry%20Product"
                className="px-4 py-3 rounded-xl bg-brand-elevated border border-brand-border hover:border-brand-accent text-brand-subtext hover:text-white font-mono text-xs transition-all text-center"
              >
                {lang === 'VI' ? 'LIÊN HỆ' : 'CONTACT'}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StorePage
