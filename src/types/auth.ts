export type UserRole = 'admin' | 'user'

export type AuthProvider = 'google' | 'facebook' | 'email'

export const ADMIN_EMAILS = [
  'nmc.corp16@gmail.com',
  'nguyencuong161199@gmail.com',
  'admin@gamingwithmeee.com'
]

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  provider: AuthProvider
  role: UserRole
}

export interface CommentItem {
  id: string
  articleId: string
  userId: string
  userName: string
  userAvatar: string
  userRole: UserRole
  content: string
  createdAt: string
}
