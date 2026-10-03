export type SubjectId = 'economics' | 'accounting';

export interface Question {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctIndex: number; // 0: A, 1: B, 2: C, 3: D
  explanation: string;
  topic: string;
}

export interface SubjectInfo {
  id: SubjectId;
  name: string;
  code: string;
  questionCount: number;
  durationMinutes: number;
  description: string;
  topicsSummary: string[];
  collegeContext: string;
}

export interface ExamSettings {
  subjectId: SubjectId;
  questionCount: number; // e.g. 60 or 30 or 15
  timeLimitMinutes: number; // 0 for untimed, or minutes
  shuffleQuestions: boolean;
}

export interface ExamSession {
  settings: ExamSettings;
  questions: Question[];
  currentQuestionIndex: number;
  answers: Record<number, number>; // questionIndex -> optionIndex
  flagged: Record<number, boolean>; // questionIndex -> boolean
  timeRemainingSeconds: number;
  startedAt: number;
  completedAt?: number;
  isCompleted: boolean;
  isPaused?: boolean;
}

export interface ExamResultSummary {
  subjectId: SubjectId;
  subjectName: string;
  totalQuestions: number;
  answeredCount: number;
  unansweredCount: number;
  correctCount: number;
  incorrectCount: number;
  scorePercentage: number;
  timeSpentSeconds: number;
  grade: string;
  gradeRemark: string;
  graceMessage: string;
  completedAt: string;
}
