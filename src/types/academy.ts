export type ExamCategory = 'all' | 'agile' | 'finance' | 'cloud'

export interface ExamOption {
  id: string // 'A' | 'B' | 'C' | 'D'
  text: string
  textVi?: string
}

export interface ExamQuestion {
  id: number
  question: string
  questionVi?: string
  options: ExamOption[]
  correctAnswers: string[] // e.g. ['B'] or ['A', 'C']
  isMultiple?: boolean
  explanation: string
  explanationVi?: string
  reference?: string
  topic: string
}

export interface ExamPackage {
  id: string
  title: string
  subtitle: string
  category: ExamCategory
  badge: string
  totalQuestions: number
  durationMinutes: number
  passRate: number // Percentage, e.g., 85
  description: string
  descriptionVi: string
  iconName: 'Award' | 'ShieldCheck' | 'Cpu' | 'BarChart3'
  level: 'Foundation' | 'Professional' | 'Advanced'
  questions: ExamQuestion[]
}

export interface UserExamAttempt {
  id: string
  examId: string
  examTitle: string
  score: number // Percentage 0 - 100
  totalQuestions: number
  correctCount: number
  passed: boolean
  timeSpentSeconds: number
  userAnswers: Record<number, string[]>
  flaggedQuestions: number[]
  completedAt: string
}

