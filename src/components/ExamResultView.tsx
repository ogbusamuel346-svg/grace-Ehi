import React, { useEffect } from 'react';
import { ExamResultSummary } from '../types';
import confetti from 'canvas-confetti';
import {
  Award,
  CheckCircle,
  XCircle,
  Clock,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';

interface ExamResultViewProps {
  result: ExamResultSummary;
  onReviewAnswers: () => void;
  onPracticeAgain: () => void;
  onGoHome: () => void;
}

export const ExamResultView: React.FC<ExamResultViewProps> = ({
  result,
  onReviewAnswers,
  onPracticeAgain,
  onGoHome
}) => {
  useEffect(() => {
    // Fire celebratory confetti if Grace scores >= 60%
    if (result.scorePercentage >= 60) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7c3aed', '#ec4899', '#f43f5e', '#a855f7', '#fb7185']
      });
    }
  }, [result.scorePercentage]);

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const remainingSec = sec % 60;
    if (mins === 0) return `${remainingSec}s`;
    return `${mins}m ${remainingSec}s`;
  };

  const isDistinction = result.scorePercentage >= 80;
  const isCreditOrAbove = result.scorePercentage >= 60;

  return (
    <div className="min-h-screen bg-[#FAF7FD] text-slate-800 py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Main Result Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-md relative overflow-hidden text-center">
          {/* Subtle top decoration badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            CBT Evaluation · College of Education, Akwanga
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-purple-950 mb-2">
            {isCreditOrAbove ? 'Well done, Grace! 🎉' : 'Keep Going, Grace! 💪'}
          </h1>

          <p className="text-sm text-slate-600 max-w-md mx-auto mb-8">
            You completed the <span className="font-semibold text-purple-900">{result.subjectName}</span> examination.
            Here is your comprehensive score breakdown.
          </p>

          {/* Primary Score Ring / Box */}
          <div className="bg-gradient-to-br from-purple-50 via-white to-rose-50/30 rounded-3xl p-6 sm:p-8 border border-purple-100/80 max-w-md mx-auto mb-8 shadow-xs">
            <div className="text-5xl sm:text-6xl font-bold font-serif-display text-purple-950 tabular-nums">
              {result.scorePercentage.toFixed(1)}%
            </div>
            <div className="text-xs uppercase font-bold tracking-wider text-purple-700 mt-1">
              Final Percentage
            </div>

            <div className="mt-4 pt-4 border-t border-purple-100 flex items-center justify-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              <span className="font-bold text-sm text-slate-800">
                {result.grade}
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-xs text-slate-600 font-medium">
                {result.gradeRemark}
              </span>
            </div>
          </div>

          {/* Metric Breakdown Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mb-8 text-left">
            <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
              <div className="flex items-center gap-1.5 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-1">
                <CheckCircle className="w-3.5 h-3.5" />
                Correct
              </div>
              <div className="text-2xl font-bold text-emerald-950 tabular-nums">
                {result.correctCount}
              </div>
              <div className="text-[11px] text-emerald-700 mt-0.5">
                of {result.totalQuestions} questions
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100">
              <div className="flex items-center gap-1.5 text-rose-800 text-[11px] font-bold uppercase tracking-wider mb-1">
                <XCircle className="w-3.5 h-3.5" />
                Incorrect
              </div>
              <div className="text-2xl font-bold text-rose-950 tabular-nums">
                {result.incorrectCount}
              </div>
              <div className="text-[11px] text-rose-700 mt-0.5">Review answers below</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-1.5 text-slate-600 text-[11px] font-bold uppercase tracking-wider mb-1">
                <HelpCircle className="w-3.5 h-3.5" />
                Unanswered
              </div>
              <div className="text-2xl font-bold text-slate-900 tabular-nums">
                {result.unansweredCount}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Skipped questions</div>
            </div>

            <div className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-100">
              <div className="flex items-center gap-1.5 text-purple-800 text-[11px] font-bold uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5" />
                Time Spent
              </div>
              <div className="text-2xl font-bold text-purple-950 tabular-nums">
                {formatSeconds(result.timeSpentSeconds)}
              </div>
              <div className="text-[11px] text-purple-700 mt-0.5">Elapsed time</div>
            </div>
          </div>

          {/* Grace Personal Encouragement Card */}
          <div className="p-5 rounded-2xl bg-purple-900 text-white max-w-xl mx-auto mb-8 text-left shadow-sm">
            <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Sparkles className="w-4 h-4" />
              Note for Grace Ehi
            </div>
            <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-sans">
              {result.graceMessage}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onReviewAnswers}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-purple-900 hover:bg-purple-800 active:scale-[0.98] shadow-md transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Review All Answers & Explanations</span>
            </button>

            <button
              onClick={onPracticeAgain}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-purple-950 bg-purple-100/70 hover:bg-purple-200/70 active:scale-[0.98] transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Practice Again</span>
            </button>

            <button
              onClick={onGoHome}
              className="w-full sm:w-auto text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 px-4 py-3 transition-colors cursor-pointer"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
