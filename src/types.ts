export type Language = 'en' | 'ar';

export type ViewName = 'home' | 'physics' | 'exam' | 'results';

export type QuizMode = 'single' | 'cumulative' | 'comprehensive';

export type ExamFontSize = 'sm' | 'md' | 'lg';

export interface PhysicsPart {
  id: number;
  titleEn: string;
  subEn: string;
  titleAr: string;
  subAr: string;
  isComprehensive?: boolean;
}

export interface Question {
  id: string;
  part: number;
  qAr: string;
  qEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correct: number;
  expAr: string;
  expEn: string;
  figureSvg?: string;
}

export interface ChapterStat {
  attempts: number;
  bestPct: number;
}

export interface PendingQuizConfig {
  partId: number;
  mode: QuizMode;
}

export interface ExamState {
  partId: number | null;
  titleAr: string;
  titleEn: string;
  questions: Question[];
  currentIndex: number;
  answers: Record<number, number>;
  flagged: Record<number, boolean>;
  elapsedSeconds: number;
  fontSize: ExamFontSize;
}
