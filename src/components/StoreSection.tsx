import React, { useState, memo } from 'react'
import { Language, TRANSLATIONS } from '../data/translations'
import { STORE_PRODUCTS } from '../data/storeData'
import { ProductItem } from '../types/store'
import { SectionHeading } from './SectionHeading'
import { Eye, X, ArrowUpRight, Check, ShoppingBag, Bell } from 'lucide-react'

interface StoreSectionProps {
  lang: Language
}

export const StoreSection: React.FC<StoreSectionProps> = memo(({ lang }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)
  const [notifiedProducts, setNotifiedProducts] = useState<string[]>([])
  const t = TRANSLATIONS[lang].store

  const formatVND = (amount: number) => {
    return `${amount.toLocaleString('vi-VN')} VNĐ`
  }

  const handleNotifyMe = (productId: string) => {
    if (!notifiedProducts.includes(productId)) {
      setNotifiedProducts((prev) => [...prev, productId])
    }
  }

  return (
    <section id="store" className="w-full h-full shrink-0 relative flex flex-col justify-center px-5 sm:px-8">
      <div className="max-w-content mx-auto w-full my-auto pt-16">
        <SectionHeading
          number={t.number}
          tag={t.tag}
          title={t.title}
          subtitle={t.subtitle}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STORE_PRODUCTS.map((prod) => {
            const isOutOfStock = prod.status === 'out_of_stock'

            return (
              <div
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className="group relative rounded-2xl bg-brand-secondary border border-brand-border hover:border-brand-accent/60 overflow-hidden transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-md hover:-translate-y-1"
              >
                {/* Product Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    loading="lazy"
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      isOutOfStock ? 'grayscale opacity-60' : ''
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-secondary via-transparent to-transparent" />

                  {/* Badge */}
                  {prod.badge && (
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-brand-accent/90 text-white shadow-md">
                      {prod.badge}
                    </span>
                  )}

                  {/* Status Indicator */}
                  <span
                    className={`absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[9px] font-mono border backdrop-blur-md ${
                      isOutOfStock
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/30'
                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    }`}
                  >
                    {isOutOfStock ? t.outOfStock : t.inStock}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-sm text-brand-text group-hover:text-brand-accent transition-colors line-clamp-2 leading-snug mb-2">
                      {lang === 'VI' ? prod.titleVi : prod.title}
                    </h3>

                    {/* Stock and Sold info */}
                    <div className="flex items-center justify-between text-[10px] font-mono text-brand-muted mb-3">
                      <span className={prod.isDigital ? 'text-cyan-400 font-semibold' : ''}>
                        {prod.isDigital
                          ? (lang === 'VI' ? '⚡ Tài liệu số • Tải ngay' : '⚡ Digital • Instant')
                          : (lang === 'VI' ? `Còn: ${prod.stock}` : `Stock: ${prod.stock}`)}
                      </span>
                      <span>{lang === 'VI' ? `Đã bán: ${prod.soldCount}` : `Sold: ${prod.soldCount}`}</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-2 border-t border-brand-border/40 flex items-center justify-between gap-2">
                    <div>
                      <div className="font-mono font-black text-sm text-brand-accent">
                        {formatVND(prod.price)}
                      </div>
                      {prod.originalPrice && (
                        <div className="text-[10px] font-mono text-brand-muted line-through">
                          {formatVND(prod.originalPrice)}
                        </div>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedProduct(prod)
                      }}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-brand-elevated group-hover:bg-brand-accent border border-brand-border group-hover:border-brand-accent text-brand-text group-hover:text-white text-[10px] font-mono font-bold uppercase transition-all"
                    >
                      <Eye className="w-3 h-3" />
                      <span>{t.buyNow}</span>
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl bg-brand-secondary border border-brand-border shadow-2xl p-6 overflow-hidden">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-brand-muted hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 border border-brand-border">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-brand-accent text-white">
                {selectedProduct.badge || 'NMC STORE'}
              </span>
            </div>

            <h3 className="font-display font-bold text-lg text-brand-text mb-1">
              {lang === 'VI' ? selectedProduct.titleVi : selectedProduct.title}
            </h3>
            <p className="text-xs text-brand-subtext font-light mb-4 leading-relaxed">
              {lang === 'VI' ? selectedProduct.descriptionVi : selectedProduct.description}
            </p>

            {/* Features */}
            <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-brand-elevated border border-brand-border/60">
              {selectedProduct.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-brand-text font-mono">
                  <Check className="w-3.5 h-3.5 text-brand-accent shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Price & Actions */}
            <div className="flex items-center justify-between gap-4 pt-3 border-t border-brand-border/50">
              <div>
                <span className="text-[10px] font-mono text-brand-muted block uppercase">
                  {lang === 'VI' ? 'Giá sản phẩm' : 'Price'}
                </span>
                <span className="font-mono font-black text-lg text-brand-accent">
                  {formatVND(selectedProduct.price)}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {selectedProduct.status === 'out_of_stock' ? (
                  <button
                    onClick={() => handleNotifyMe(selectedProduct.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-md ${
                      notifiedProducts.includes(selectedProduct.id)
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                    }`}
                  >
                    {notifiedProducts.includes(selectedProduct.id) ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{lang === 'VI' ? '✓ ĐÃ ĐĂNG KÝ BÁO HÀNG' : '✓ NOTIFICATION SET'}</span>
                      </>
                    ) : (
                      <>
                        <Bell className="w-3.5 h-3.5" />
                        <span>{lang === 'VI' ? '🔔 BÁO KHI CÓ HÀNG' : '🔔 NOTIFY WHEN IN STOCK'}</span>
                      </>
                    )}
                  </button>
                ) : (
                  selectedProduct.shopeeUrl && (
                    <a
                      href={selectedProduct.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#EE4D2D] hover:bg-[#d63f20] text-white font-mono text-xs font-bold transition-all shadow-md"
                    >
                      <span>{lang === 'VI' ? 'TÌM TRÊN SHOPEE' : 'SEARCH ON SHOPEE'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )
                )}
                <a
                  href={`mailto:nmc.corp16@gmail.com?subject=${encodeURIComponent(`Quan tâm sản phẩm: ${selectedProduct.title}`)}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-elevated hover:bg-brand-accent border border-brand-border hover:border-brand-accent text-brand-text hover:text-white font-mono text-xs transition-all"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{lang === 'VI' ? 'LIÊN HỆ MUA' : 'CONTACT TO ORDER'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
})

StoreSection.displayName = 'StoreSection'

