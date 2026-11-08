export type ProductCategory = 'all' | 'gear' | 'education' | 'digital'

export interface ProductItem {
  id: string
  title: string
  titleVi: string
  category: 'gear' | 'education' | 'digital'
  price: number // in VND
  originalPrice?: number
  stock: number // Quantity remaining
  soldCount: number // Number of units sold
  status: 'in_stock' | 'out_of_stock' | 'pre_order'
  image: string
  badge?: string
  description: string
  descriptionVi: string
  shopeeUrl?: string
  features: string[]
  isDigital?: boolean
}

