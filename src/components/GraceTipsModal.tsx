import React from 'react';
import { graceStudyTips } from '../data/graceNotes';
import { X, Lightbulb, BookOpen, Sparkles, Award } from 'lucide-react';

interface GraceTipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GraceTipsModal: React.FC<GraceTipsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 max-w-2xl w-full max-h-[88vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-purple-900 via-purple-950 to-indigo-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-purple-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-peach-300 text-xs font-semibold uppercase tracking-wider text-rose-300 mb-1">
            <Sparkles className="w-4 h-4" />
            Study Space for Grace Ehi
          </div>
          <h2 className="font-serif-display text-2xl font-bold tracking-tight">
            High-Yield Exam Strategy & Key Notes
          </h2>
          <p className="text-purple-200 text-xs sm:text-sm mt-1">
            College of Education, Akwanga, Nasarawa State Examination Preparation
          </p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="p-4 bg-purple-50/70 border border-purple-100 rounded-2xl flex items-start gap-3">
            <Award className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-purple-900 leading-relaxed">
              Grace, your preparation at College of Education, Akwanga is a testament to your hard work.
              Use these bite-sized strategies to maximize your score in both Economics and Accounting.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-1">
            {graceStudyTips.map((tip, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-purple-200 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-purple-700 bg-purple-100/70 px-2.5 py-0.5 rounded-md">
                    {tip.category}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1 flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0" />
                  {tip.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tip.advice}
                </p>
              </div>
            ))}
          </div>

          {/* Quick formula review */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-rose-50/40 border border-purple-100">
            <h4 className="font-semibold text-purple-950 text-sm mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600" />
              Quick Formula Recall
            </h4>
            <div className="grid sm:grid-cols-2 gap-2 text-xs text-slate-700">
              <div className="p-2.5 bg-white/80 rounded-xl border border-purple-100">
                <span className="font-semibold text-purple-900 block mb-0.5">Economics: PED</span>
                <code>%Δ Quantity / %Δ Price</code>
              </div>
              <div className="p-2.5 bg-white/80 rounded-xl border border-purple-100">
                <span className="font-semibold text-purple-900 block mb-0.5">Accounting: Balance</span>
                <code>Assets = Liabilities + Capital</code>
              </div>
              <div className="p-2.5 bg-white/80 rounded-xl border border-purple-100">
                <span className="font-semibold text-purple-900 block mb-0.5">Working Capital</span>
                <code>Current Assets - Current Liabilities</code>
              </div>
              <div className="p-2.5 bg-white/80 rounded-xl border border-purple-100">
                <span className="font-semibold text-purple-900 block mb-0.5">Cost of Goods Sold</span>
                <code>Opening Stock + Purchases - Closing Stock</code>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-purple-900 hover:bg-purple-800 rounded-xl transition-colors cursor-pointer"
          >
            Got it, Let's Practice!
          </button>
        </div>
      </div>
    </div>
  );
};
