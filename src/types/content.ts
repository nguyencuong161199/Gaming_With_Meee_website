export type CategoryType = 'Gaming' | 'AI & Technology' | 'Entertainment' | 'AI & Công nghệ' | 'Giải trí số' | string

export interface StoryItem {
  id: string
  title: string
  subtitle: string
  category: string
  readTime: string
  date?: string
  summary: string
  featured?: boolean
  layoutSpan?: 'large' | 'medium' | 'small' | 'tall'
  badge?: string
  image?: string
  mediaType?: 'video' | 'image' | 'interactive'
}

export interface PlaygroundItem {
  id: string
  title: string
  category: string
  tag: string
  description: string
  status: 'Live Demo' | 'In Progress' | 'Prototype' | 'Research' | string
  accentColor?: string
  linkText?: string
}

export interface CategoryInfo {
  id: string
  name: string
  tagline: string
  description: string
  count: number
  accent: string
  iconName: string
}

export interface SocialLinkItem {
  platform: 'Facebook' | 'Instagram' | 'TikTok' | 'Email' | 'Phone' | 'YouTube'
  label: string
  handle: string
  url: string
  description?: string
  descriptionVi?: string
  descriptionEn?: string
}

export type UpdateTag = 'ANNOUNCEMENT' | 'NEW VIDEO' | 'DEVLOG' | 'COMMUNITY' | 'PATCH NOTES'

export interface UpdateItem {
  id: string
  date: string
  time?: string
  tag: UpdateTag
  title: string
  summary: string
  content?: string
  pinned?: boolean
  link?: string
  linkText?: string
  author?: string
}

export type ActiveArticle = {
  item: StoryItem | UpdateItem
  type: 'story' | 'update'
} | null
