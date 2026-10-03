import React, { useState } from 'react';
import { SubjectInfo, ExamSettings } from '../types';
import {
  X,
  Play,
  Clock,
  Sparkles,
  SlidersHorizontal,
  BookOpen,
  Layers,
  Minus,
  Plus,
  Zap,
  Timer
} from 'lucide-react';

interface ExamModalConfigProps {
  subject: SubjectInfo;
  isOpen: boolean;
  onClose: () => void;
  onStartExam: (settings: ExamSettings) => void;
}

export const ExamModalConfig: React.FC<ExamModalConfigProps> = ({
  subject,
  isOpen,
  onClose,
  onStartExam
}) => {
  const [questionCount, setQuestionCount] = useState<number>(subject.questionCount);
  const [timeMode, setTimeMode] = useState<'timed' | 'untimed'>('timed');
  const [timeIntervalMinutes, setTimeIntervalMinutes] = useState<number>(60);
  const [shuffleQuestions, setShuffleQuestions] = useState<boolean>(true);

  if (!isOpen) return null;

  const quickIntervals = [
    { label: '15m', minutes: 15, desc: 'Quick Sprint' },
    { label: '30m', minutes: 30, desc: 'Standard Half' },
    { label: '45m', minutes: 45, desc: 'Akwanga Speed' },
    { label: '60m', minutes: 60, desc: 'Full 1 Hour CBT' },
    { label: '75m', minutes: 75, desc: 'Extended Practice' },
    { label: '90m', minutes: 90, desc: '1.5 Hours Deep' },
    { label: '120m', minutes: 120, desc: '2 Hours Thorough' }
  ];

  const handleStart = () => {
    const finalTimeMinutes = timeMode === 'untimed' ? 0 : Math.max(1, timeIntervalMinutes);
    onStartExam({
      subjectId: subject.id,
      questionCount: Math.min(questionCount, subject.questionCount),
      timeLimitMinutes: finalTimeMinutes,
      shuffleQuestions
    });
  };

  const adjustMinutes = (delta: number) => {
    setTimeIntervalMinutes((prev) => Math.max(5, Math.min(240, prev + delta)));
  };

  // Calculate pacing
  const secondsPerQuestion =
    timeMode === 'timed' && questionCount > 0
      ? Math.round((timeIntervalMinutes * 60) / questionCount)
      : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/40 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 max-w-lg w-full overflow-hidden flex flex-col">
        {/* Modal Top Banner */}
        <div className="p-6 bg-gradient-to-r from-purple-900 to-indigo-950 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-purple-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close setup modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1.5 text-rose-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            CBT Setup · Grace Ehi
          </div>
          <h2 className="font-serif-display text-2xl font-bold tracking-tight">
            {subject.name}
          </h2>
          <p className="text-purple-200 text-xs mt-1">
            {subject.code} · {subject.collegeContext}
          </p>
        </div>

        {/* Configuration Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[72vh]">
          {/* Question count selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-700" />
              1. Number of Questions
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setQuestionCount(subject.questionCount)}
                className={`py-3 px-2 rounded-2xl border text-center transition-all cursor-pointer ${
                  questionCount === subject.questionCount
                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-bold shadow-xs'
                    : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-white'
                }`}
              >
                <div className="text-base font-bold">{subject.questionCount} Questions</div>
                <div className="text-[11px] text-purple-700 font-medium mt-0.5">Full Mock Exam</div>
              </button>

              <button
                type="button"
                onClick={() => setQuestionCount(30)}
                className={`py-3 px-2 rounded-2xl border text-center transition-all cursor-pointer ${
                  questionCount === 30
                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-bold shadow-xs'
                    : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-white'
                }`}
              >
                <div className="text-base font-bold">30 Questions</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Half Practice</div>
              </button>

              <button
                type="button"
                onClick={() => setQuestionCount(15)}
                className={`py-3 px-2 rounded-2xl border text-center transition-all cursor-pointer ${
                  questionCount === 15
                    ? 'border-purple-600 bg-purple-50/80 text-purple-950 font-bold shadow-xs'
                    : 'border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-white'
                }`}
              >
                <div className="text-base font-bold">15 Questions</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Quick Drill</div>
              </button>
            </div>
          </div>

          {/* CBT TIME INTERVAL SETTING SECTION */}
          <div className="bg-purple-50/40 p-4 rounded-3xl border border-purple-100/80 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-purple-950 flex items-center gap-1.5">
                <Timer className="w-4 h-4 text-purple-700" />
                2. Set CBT Time Interval
              </label>

              {/* Mode Switcher: Timed vs Untimed */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-purple-200/80">
                <button
                  type="button"
                  onClick={() => setTimeMode('timed')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    timeMode === 'timed'
                      ? 'bg-purple-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Timed Exam
                </button>
                <button
                  type="button"
                  onClick={() => setTimeMode('untimed')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    timeMode === 'untimed'
                      ? 'bg-purple-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Untimed (Free Study)
                </button>
              </div>
            </div>

            {timeMode === 'timed' ? (
              <div className="space-y-3.5">
                {/* Custom Time Stepper & Direct Input */}
                <div className="bg-white p-4 rounded-2xl border border-purple-100 flex items-center justify-between gap-3 shadow-xs">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block uppercase">
                      Exam Duration
                    </span>
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl sm:text-3xl font-bold font-serif-display text-purple-950 tabular-nums">
                        {timeIntervalMinutes}
                      </span>
                      <span className="text-sm font-semibold text-purple-700">Minutes</span>
                    </div>
                  </div>

                  {/* Stepper Buttons */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => adjustMinutes(-15)}
                      className="px-2.5 py-1.5 rounded-xl border border-slate-200 hover:bg-purple-50 text-xs font-semibold text-slate-700 cursor-pointer"
                      title="Decrease by 15 mins"
                    >
                      -15m
                    </button>
                    <button
                      type="button"
                      onClick={() => adjustMinutes(-5)}
                      className="w-9 h-9 rounded-xl border border-slate-200 hover:bg-purple-50 flex items-center justify-center text-slate-700 cursor-pointer"
                      title="Decrease by 5 mins"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => adjustMinutes(5)}
                      className="w-9 h-9 rounded-xl border border-slate-200 hover:bg-purple-50 flex items-center justify-center text-slate-700 cursor-pointer"
                      title="Increase by 5 mins"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => adjustMinutes(15)}
                      className="px-2.5 py-1.5 rounded-xl border border-slate-200 hover:bg-purple-50 text-xs font-semibold text-slate-700 cursor-pointer"
                      title="Increase by 15 mins"
                    >
                      +15m
                    </button>
                  </div>
                </div>

                {/* Slider for smooth dragging */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-slate-500">
                    <span>5 mins</span>
                    <span>60 mins</span>
                    <span>120 mins</span>
                    <span>180 mins</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="180"
                    step="5"
                    value={timeIntervalMinutes}
                    onChange={(e) => setTimeIntervalMinutes(Number(e.target.value))}
                    className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-900"
                  />
                </div>

                {/* Quick Presets Grid */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-600 block mb-1.5">
                    Popular CBT Time Presets:
                  </span>
                  <div className="grid grid-cols-4 gap-1.5">
                    {quickIntervals.slice(0, 4).map((interval) => (
                      <button
                        key={interval.minutes}
                        type="button"
                        onClick={() => setTimeIntervalMinutes(interval.minutes)}
                        className={`py-2 px-1 rounded-xl text-center border text-xs font-semibold transition-all cursor-pointer ${
                          timeIntervalMinutes === interval.minutes
                            ? 'bg-purple-900 text-white border-purple-900 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50/50'
                        }`}
                      >
                        <div>{interval.label}</div>
                        <div className="text-[9px] opacity-75 truncate">{interval.desc}</div>
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 mt-1.5">
                    {quickIntervals.slice(4).map((interval) => (
                      <button
                        key={interval.minutes}
                        type="button"
                        onClick={() => setTimeIntervalMinutes(interval.minutes)}
                        className={`py-2 px-1 rounded-xl text-center border text-xs font-semibold transition-all cursor-pointer ${
                          timeIntervalMinutes === interval.minutes
                            ? 'bg-purple-900 text-white border-purple-900 shadow-xs'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50/50'
                        }`}
                      >
                        <div>{interval.label}</div>
                        <div className="text-[9px] opacity-75 truncate">{interval.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Live Pacing Analysis */}
                {secondsPerQuestion !== null && (
                  <div className="p-3 bg-white/90 rounded-2xl border border-purple-100 flex items-center justify-between text-xs text-slate-700">
                    <span className="flex items-center gap-1.5 font-medium text-slate-600">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      Calculated Speed Pace:
                    </span>
                    <span className="font-bold text-purple-950 font-mono">
                      ~{secondsPerQuestion} seconds / question
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-4 bg-white rounded-2xl border border-purple-100 text-center space-y-1">
                <Clock className="w-6 h-6 text-purple-600 mx-auto" />
                <h4 className="text-xs font-bold text-purple-950">Untimed Study Session</h4>
                <p className="text-[11px] text-slate-500">
                  Take as much time as you need to read each question thoroughly without a ticking clock.
                </p>
              </div>
            )}
          </div>

          {/* Randomization Option */}
          <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-purple-700" />
              <div>
                <span className="text-xs font-semibold text-slate-800 block">Randomize Question Order</span>
                <span className="text-[11px] text-slate-500">Shuffles questions for realistic CBT variance</span>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={shuffleQuestions}
                onChange={(e) => setShuffleQuestions(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-900"></div>
            </label>
          </div>

          {/* Syllabus Topics */}
          <div className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700 block mb-1 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-purple-700" />
              Curriculum Scope for {subject.name}:
            </span>
            <div className="flex flex-wrap gap-1 mt-1 text-[11px]">
              {subject.topicsSummary.slice(0, 5).map((topic, i) => (
                <span key={i} className="text-slate-600">
                  {topic}{i < 4 ? ' · ' : ''}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleStart}
            className="flex items-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-purple-900 hover:bg-purple-800 active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Begin CBT ({timeMode === 'timed' ? `${timeIntervalMinutes}m` : 'Untimed'})</span>
          </button>
        </div>
      </div>
    </div>
  );
};
