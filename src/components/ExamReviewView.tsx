import React, { useState } from 'react';
import { ExamSession, SubjectInfo } from '../types';
import {
  ChevronLeft,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Flag,
  BookOpen,
  ArrowUp,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface ExamReviewViewProps {
  session: ExamSession;
  subject: SubjectInfo;
  onBackToScore: () => void;
  onPracticeAgain: () => void;
}

type FilterType = 'all' | 'incorrect' | 'correct' | 'flagged';

export const ExamReviewView: React.FC<ExamReviewViewProps> = ({
  session,
  subject,
  onBackToScore,
  onPracticeAgain
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const optionLetters = ['A', 'B', 'C', 'D'];

  const filteredQuestions = session.questions.map((question, index) => {
    const userAnswer = session.answers[index];
    const isAnswered = userAnswer !== undefined;
    const isCorrect = isAnswered && userAnswer === question.correctIndex;
    const isFlagged = Boolean(session.flagged[index]);

    return {
      question,
      index,
      userAnswer,
      isAnswered,
      isCorrect,
      isFlagged
    };
  }).filter((item) => {
    if (activeFilter === 'incorrect') return !item.isCorrect;
    if (activeFilter === 'correct') return item.isCorrect;
    if (activeFilter === 'flagged') return item.isFlagged;
    return true; // 'all'
  });

  const correctTotal = session.questions.filter(
    (q, i) => session.answers[i] === q.correctIndex
  ).length;
  const incorrectTotal = session.questions.length - correctTotal;
  const flaggedTotal = Object.values(session.flagged).filter(Boolean).length;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7FD] text-slate-800 pb-16">
      {/* Sticky Top Review Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <button
            onClick={onBackToScore}
            className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-purple-950 hover:text-purple-700 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Score Summary</span>
          </button>

          <div className="text-center hidden sm:block">
            <h1 className="font-serif-display text-base font-bold text-purple-950">
              {subject.name} Detailed Review
            </h1>
            <p className="text-[11px] text-slate-500">
              Grace Ehi · College of Education, Akwanga
            </p>
          </div>

          <button
            onClick={onPracticeAgain}
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-purple-900 hover:bg-purple-800 rounded-xl transition-all cursor-pointer shadow-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Practice Again</span>
          </button>
        </div>

        {/* Filter Segmented Controls */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-3 flex items-center gap-1.5 overflow-x-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-purple-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Questions ({session.questions.length})
          </button>

          <button
            onClick={() => setActiveFilter('incorrect')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeFilter === 'incorrect'
                ? 'bg-rose-700 text-white shadow-xs'
                : 'bg-rose-50 text-rose-800 hover:bg-rose-100'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            Incorrect / Skipped ({incorrectTotal})
          </button>

          <button
            onClick={() => setActiveFilter('correct')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${
              activeFilter === 'correct'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Correct ({correctTotal})
          </button>

          {flaggedTotal > 0 && (
            <button
              onClick={() => setActiveFilter('flagged')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 ${
                activeFilter === 'flagged'
                  ? 'bg-amber-500 text-amber-950 shadow-xs'
                  : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              Flagged ({flaggedTotal})
            </button>
          )}
        </div>
      </header>

      {/* Review Questions List */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {filteredQuestions.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-purple-100 shadow-xs">
            <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <h3 className="font-serif-display text-lg font-bold text-slate-800">
              No questions found under this filter
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select "All Questions" to inspect the complete set.
            </p>
          </div>
        ) : (
          filteredQuestions.map((item) => {
            const { question, index, userAnswer, isAnswered, isCorrect, isFlagged } = item;
            return (
              <article
                key={question.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100/90 shadow-xs space-y-5"
              >
                {/* Question Header Meta */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-serif-display text-sm sm:text-base font-bold text-purple-950">
                      Question {index + 1}
                    </span>
                    <span className="text-xs text-slate-300">·</span>
                    <span className="text-xs font-medium text-slate-500">
                      {question.topic}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isFlagged && (
                      <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Flag className="w-3 h-3 text-amber-600 fill-amber-600" />
                        Flagged
                      </span>
                    )}

                    {isCorrect ? (
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Correct
                      </span>
                    ) : isAnswered ? (
                      <span className="text-[11px] font-bold text-rose-800 bg-rose-50 border border-rose-200 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <XCircle className="w-3 h-3 text-rose-600" />
                        Incorrect
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <HelpCircle className="w-3 h-3 text-slate-500" />
                        Unanswered
                      </span>
                    )}
                  </div>
                </div>

                {/* Question Text */}
                <h3 className="text-sm sm:text-base font-medium text-slate-900 leading-relaxed font-sans">
                  {question.question}
                </h3>

                {/* 4 Options with color coding */}
                <div className="space-y-2.5">
                  {question.options.map((optText, optIdx) => {
                    const isUserChoice = userAnswer === optIdx;
                    const isCorrectAnswer = question.correctIndex === optIdx;

                    let cardClass = 'border-slate-200 bg-white text-slate-700';
                    let badgeClass = 'bg-slate-100 text-slate-600';

                    if (isCorrectAnswer) {
                      cardClass = 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium shadow-xs';
                      badgeClass = 'bg-emerald-600 text-white font-bold';
                    } else if (isUserChoice && !isCorrect) {
                      cardClass = 'border-rose-400 bg-rose-50/70 text-rose-950';
                      badgeClass = 'bg-rose-600 text-white font-bold';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-3.5 rounded-2xl border text-xs sm:text-sm flex items-start gap-3 transition-colors ${cardClass}`}
                      >
                        <span
                          className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 ${badgeClass}`}
                        >
                          {optionLetters[optIdx]}
                        </span>
                        <div className="flex-1 pt-0.5">
                          <span>{optText}</span>
                          {isUserChoice && (
                            <span className="ml-2 text-[11px] font-semibold text-purple-900 italic">
                              (Grace’s Choice)
                            </span>
                          )}
                          {isCorrectAnswer && (
                            <span className="ml-2 text-[11px] font-semibold text-emerald-800">
                              ✓ Correct Answer
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Academic Explanation Box */}
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100/90 text-xs text-slate-700 leading-relaxed space-y-1">
                  <div className="font-semibold text-purple-950 flex items-center gap-1.5 text-xs">
                    <BookOpen className="w-3.5 h-3.5 text-purple-700" />
                    Academic Explanation & Principle:
                  </div>
                  <p className="text-slate-700 font-sans">
                    {question.explanation}
                  </p>
                </div>
              </article>
            );
          })
        )}

        {/* Scroll back to top button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-purple-900 bg-white border border-slate-200 shadow-xs cursor-pointer"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>
      </main>
    </div>
  );
};
