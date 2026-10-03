import React from 'react';
import { SubjectId } from '../types';

interface HeaderProps {
  onGoHome: () => void;
  onSelectSubject: (id: SubjectId) => void;
  onOpenTips: () => void;
  isExamActive: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onGoHome,
  onSelectSubject,
  onOpenTips,
  isExamActive
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#FAF7FD]/90 backdrop-blur-md border-b border-purple-100/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Title (Single Text Element Wordmark) */}
        <button
          onClick={onGoHome}
          className="text-left group cursor-pointer focus:outline-none"
          title="Return to Grace's Study Desk"
        >
          <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-purple-950 group-hover:text-purple-800 transition-colors">
            Grace Ehi <span className="text-purple-600 font-normal italic">CBT</span>
          </span>
        </button>

        {/* Zone 2: Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={onGoHome}
            className="hover:text-purple-900 transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <button
            onClick={() => onSelectSubject('economics')}
            className="hover:text-purple-900 transition-colors cursor-pointer py-1"
          >
            Economics
          </button>
          <button
            onClick={() => onSelectSubject('accounting')}
            className="hover:text-purple-900 transition-colors cursor-pointer py-1"
          >
            Accounting
          </button>
          <button
            onClick={onOpenTips}
            className="hover:text-purple-900 transition-colors cursor-pointer py-1"
          >
            Study Notes & Tips
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          {isExamActive ? (
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1.5 rounded-md border border-rose-200">
              Exam in Progress
            </span>
          ) : (
            <button
              onClick={() => onSelectSubject('economics')}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-purple-900 hover:bg-purple-800 active:scale-[0.98] rounded-xl shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              Start Practice
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
