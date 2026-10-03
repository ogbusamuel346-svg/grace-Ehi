import React, { useState, useEffect } from 'react';
import { ExamSession, SubjectInfo } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Flag,
  RotateCcw,
  CheckCircle2,
  Clock,
  LayoutGrid,
  AlertTriangle,
  X,
  Send,
  Pause,
  Play,
  Plus,
  Minus,
  SlidersHorizontal,
  Sparkles
} from 'lucide-react';

interface CbtExamViewProps {
  session: ExamSession;
  subject: SubjectInfo;
  onSelectOption: (questionIndex: number, optionIndex: number) => void;
  onClearOption: (questionIndex: number) => void;
  onToggleFlag: (questionIndex: number) => void;
  onNavigateQuestion: (index: number) => void;
  onSubmitExam: () => void;
  onExitExam: () => void;
  onTickTimer: () => void;
  onAdjustTime?: (additionalSeconds: number) => void;
  onSetTimeRemaining?: (totalSeconds: number) => void;
  onTogglePause?: () => void;
}

export const CbtExamView: React.FC<CbtExamViewProps> = ({
  session,
  subject,
  onSelectOption,
  onClearOption,
  onToggleFlag,
  onNavigateQuestion,
  onSubmitExam,
  onExitExam,
  onTickTimer,
  onAdjustTime,
  onSetTimeRemaining,
  onTogglePause
}) => {
  const [showPalette, setShowPalette] = useState<boolean>(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState<boolean>(false);
  const [showExitConfirm, setShowExitConfirm] = useState<boolean>(false);
  const [showTimeModal, setShowTimeModal] = useState<boolean>(false);
  const [customInputMins, setCustomInputMins] = useState<number>(
    Math.max(5, Math.ceil(session.timeRemainingSeconds / 60))
  );

  // Timer countdown hook (honors paused state and untimed mode)
  useEffect(() => {
    if (session.settings.timeLimitMinutes === 0 || session.isCompleted || session.isPaused) {
      return;
    }

    const timer = setInterval(() => {
      onTickTimer();
    }, 1000);

    return () => clearInterval(timer);
  }, [session.settings.timeLimitMinutes, session.isCompleted, session.isPaused, onTickTimer]);

  const currentIndex = session.currentQuestionIndex;
  const currentQuestion = session.questions[currentIndex];
  const totalQuestions = session.questions.length;
  const answeredCount = Object.keys(session.answers).length;
  const flaggedCount = Object.values(session.flagged).filter(Boolean).length;
  const selectedOption = session.answers[currentIndex];
  const isFlagged = Boolean(session.flagged[currentIndex]);

  // Format time remaining
  const formatTime = (totalSeconds: number) => {
    if (totalSeconds <= 0) return '00:00';
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    if (hours > 0) {
      return `${hours}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isLowTime =
    session.settings.timeLimitMinutes > 0 &&
    session.timeRemainingSeconds <= 300 &&
    session.timeRemainingSeconds > 0;

  const optionLetters = ['A', 'B', 'C', 'D'];

  const handleApplyCustomMinutes = () => {
    if (onSetTimeRemaining) {
      onSetTimeRemaining(customInputMins * 60);
    }
    setShowTimeModal(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF7FD] text-slate-800 flex flex-col">
      {/* Top Examination Status Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
          {/* Left: Subject & Grace Badge */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowExitConfirm(true)}
              className="p-1.5 -ml-1 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Exit practice"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif-display text-base sm:text-lg font-bold text-purple-950 truncate max-w-[130px] sm:max-w-xs">
                  {subject.name}
                </h1>
                <span className="hidden sm:inline text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                  {subject.code}
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Candidate: <span className="font-semibold text-purple-900">Grace Ehi</span>
              </p>
            </div>
          </div>

          {/* Center: Live Timer & Time Interval Control */}
          {session.settings.timeLimitMinutes > 0 ? (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setShowTimeModal(true)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-bold tabular-nums border transition-all cursor-pointer group ${
                  session.isPaused
                    ? 'bg-amber-50 text-amber-900 border-amber-200'
                    : isLowTime
                    ? 'bg-rose-50 text-rose-700 border-rose-200 animate-pulse'
                    : 'bg-purple-50/70 text-purple-950 border-purple-100 hover:border-purple-300'
                }`}
                title="Click to adjust CBT time interval"
              >
                {session.isPaused ? (
                  <Pause className="w-3.5 h-3.5 text-amber-600" />
                ) : (
                  <Clock className={`w-3.5 h-3.5 ${isLowTime ? 'text-rose-600' : 'text-purple-700'}`} />
                )}
                <span>{formatTime(session.timeRemainingSeconds)}</span>
                <span className="text-[10px] text-purple-600 font-normal hidden sm:inline ml-0.5 group-hover:underline">
                  (Adjust)
                </span>
              </button>

              {/* Pause/Resume Quick Button */}
              {onTogglePause && (
                <button
                  type="button"
                  onClick={onTogglePause}
                  className="p-1.5 rounded-xl border border-slate-200 bg-white text-slate-600 hover:text-purple-950 hover:bg-purple-50 text-xs transition-colors cursor-pointer"
                  title={session.isPaused ? 'Resume examination' : 'Pause examination'}
                >
                  {session.isPaused ? (
                    <Play className="w-3.5 h-3.5 fill-purple-900 text-purple-900" />
                  ) : (
                    <Pause className="w-3.5 h-3.5" />
                  )}
                </button>
              )}

              {/* Quick +5 Minutes Button */}
              {onAdjustTime && (
                <button
                  type="button"
                  onClick={() => onAdjustTime(300)}
                  className="hidden md:flex items-center gap-0.5 px-2 py-1.5 rounded-xl border border-purple-200/80 bg-purple-50 text-purple-900 hover:bg-purple-100 text-[11px] font-semibold transition-colors cursor-pointer"
                  title="Add +5 minutes to examination"
                >
                  <Plus className="w-3 h-3" />
                  <span>5m</span>
                </button>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>Study Mode (Untimed)</span>
              </div>
              <button
                type="button"
                onClick={() => setShowTimeModal(true)}
                className="text-[11px] font-semibold text-purple-800 hover:underline cursor-pointer"
              >
                Set Timer
              </button>
            </div>
          )}

          {/* Right: Question Palette Toggle & Submit */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPalette(!showPalette)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-purple-900 bg-purple-100/70 hover:bg-purple-200/70 rounded-xl transition-colors cursor-pointer"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Palette</span>
              <span className="text-[11px] bg-white text-purple-950 px-1.5 py-0.5 rounded-full font-bold">
                {answeredCount}/{totalQuestions}
              </span>
            </button>

            <button
              onClick={() => setShowSubmitConfirm(true)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:scale-[0.98] rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Finish</span>
            </button>
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full bg-purple-100/50 h-1">
          <div
            className="bg-gradient-to-r from-purple-700 to-rose-500 h-1 transition-all duration-300 ease-out"
            style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
          />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex-1 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left/Center: Question Card */}
        <main className="lg:col-span-8 flex flex-col space-y-5">
          {/* Question Card Container */}
          <div className="bg-white rounded-3xl p-5 sm:p-8 border border-purple-100 shadow-sm relative">
            {/* Question Header Meta */}
            <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-purple-950 font-serif-display">
                  Question {currentIndex + 1} of {totalQuestions}
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs font-medium text-slate-500 truncate max-w-[200px]">
                  {currentQuestion.topic}
                </span>
              </div>

              {/* Flag / Review Button */}
              <button
                onClick={() => onToggleFlag(currentIndex)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isFlagged
                    ? 'bg-amber-100 text-amber-900 border border-amber-300'
                    : 'bg-slate-100 text-slate-600 hover:bg-amber-50 hover:text-amber-800'
                }`}
              >
                <Flag className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-600' : ''}`} />
                <span>{isFlagged ? 'Flagged' : 'Flag Question'}</span>
              </button>
            </div>

            {/* Question Prompt */}
            <h2 className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed mb-6 font-sans">
              {currentQuestion.question}
            </h2>

            {/* 4 Options */}
            <div className="space-y-3">
              {currentQuestion.options.map((optionText, optIdx) => {
                const isSelected = selectedOption === optIdx;
                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => onSelectOption(currentIndex, optIdx)}
                    className={`w-full min-h-[52px] p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all cursor-pointer group ${
                      isSelected
                        ? 'border-purple-600 bg-purple-50/90 text-purple-950 shadow-xs'
                        : 'border-slate-200 bg-white hover:border-purple-300 hover:bg-purple-50/30 text-slate-800'
                    }`}
                  >
                    {/* Circle / Letter Indicator */}
                    <span
                      className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-purple-900 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-purple-100 group-hover:text-purple-900'
                      }`}
                    >
                      {optionLetters[optIdx]}
                    </span>

                    {/* Option Text */}
                    <span className="text-xs sm:text-sm pt-0.5 leading-relaxed flex-1">
                      {optionText}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Option Actions: Clear Choice */}
            {selectedOption !== undefined && (
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => onClearOption(currentIndex)}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-rose-600 transition-colors cursor-pointer py-1 px-2"
                >
                  <RotateCcw className="w-3 h-3" />
                  Clear my choice
                </button>
              </div>
            )}
          </div>

          {/* Bottom Navigation Buttons */}
          <div className="flex items-center justify-between gap-3 pt-2">
            <button
              onClick={() => onNavigateQuestion(currentIndex - 1)}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                currentIndex === 0
                  ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-white text-slate-700 hover:bg-purple-50 border border-slate-200 shadow-xs'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            {currentIndex < totalQuestions - 1 ? (
              <button
                onClick={() => onNavigateQuestion(currentIndex + 1)}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-purple-900 hover:bg-purple-800 active:scale-[0.98] shadow-md transition-all cursor-pointer"
              >
                <span>Next Question</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setShowSubmitConfirm(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:scale-[0.98] shadow-md transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit & See Score</span>
              </button>
            )}
          </div>
        </main>

        {/* Right Column / Desktop Question Palette */}
        <aside className="hidden lg:block lg:col-span-4 space-y-5">
          <div className="bg-white rounded-3xl p-6 border border-purple-100 shadow-sm sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif-display text-base font-bold text-purple-950 flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-purple-700" />
                Question Palette
              </h3>
              <span className="text-xs text-slate-500 font-medium">
                {answeredCount} of {totalQuestions} answered
              </span>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] mb-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="w-3.5 h-3.5 rounded-md bg-purple-900 shrink-0" />
                <span>Answered ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="w-3.5 h-3.5 rounded-md border border-slate-300 bg-white shrink-0" />
                <span>Unanswered ({totalQuestions - answeredCount})</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="w-3.5 h-3.5 rounded-md bg-amber-400 shrink-0" />
                <span>Flagged ({flaggedCount})</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <span className="w-3.5 h-3.5 rounded-md ring-2 ring-purple-600 bg-purple-100 shrink-0" />
                <span>Current</span>
              </div>
            </div>

            {/* Grid of question numbers */}
            <div className="grid grid-cols-6 gap-2 max-h-[360px] overflow-y-auto p-1">
              {session.questions.map((_, idx) => {
                const isAns = session.answers[idx] !== undefined;
                const isFlg = Boolean(session.flagged[idx]);
                const isCur = idx === currentIndex;

                let btnStyle = 'border border-slate-200 text-slate-700 hover:bg-slate-100';
                if (isAns) {
                  btnStyle = 'bg-purple-900 text-white font-bold border-purple-900';
                }
                if (isFlg) {
                  btnStyle = 'bg-amber-400 text-amber-950 font-bold border-amber-500';
                }
                if (isCur) {
                  btnStyle += ' ring-2 ring-offset-2 ring-purple-700';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => onNavigateQuestion(idx)}
                    className={`h-9 rounded-xl text-xs font-semibold flex items-center justify-center transition-all cursor-pointer ${btnStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Quick Timer Interval Adjustment trigger in sidebar */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="italic text-[11px] text-purple-900/70">
                Grace Ehi · Akwanga CBT
              </span>
              <button
                type="button"
                onClick={() => setShowTimeModal(true)}
                className="text-purple-800 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <SlidersHorizontal className="w-3 h-3" />
                Time Interval
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Paused Examination Overlay */}
      {session.isPaused && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border border-purple-100">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-900 mx-auto flex items-center justify-center mb-4 shadow-sm">
              <Pause className="w-7 h-7" />
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-2">
              Practice Paused
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
              Take your time and breathe, Grace. The countdown clock is stopped and your answers are safely preserved.
            </p>
            <button
              type="button"
              onClick={onTogglePause}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-purple-900 text-white rounded-2xl font-semibold text-xs sm:text-sm shadow-md hover:bg-purple-800 active:scale-[0.98] transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Resume Examination</span>
            </button>
          </div>
        </div>
      )}

      {/* Set CBT Time Interval Modal */}
      {showTimeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 max-w-md w-full p-6 text-left">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
              <div className="flex items-center gap-2 text-purple-950 font-serif-display font-bold text-lg">
                <Clock className="w-5 h-5 text-purple-700" />
                <span>Set CBT Time Interval</span>
              </div>
              <button
                type="button"
                onClick={() => setShowTimeModal(false)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4">
              Grace, you can increase your remaining time or adjust your exam pace directly:
            </p>

            {/* Quick Add Interval Buttons */}
            <div className="space-y-2 mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                Quick Extend Time:
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onAdjustTime) onAdjustTime(300);
                    setShowTimeModal(false);
                  }}
                  className="py-2.5 px-2 bg-purple-50 hover:bg-purple-100 text-purple-950 border border-purple-200 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  +5 Minutes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (onAdjustTime) onAdjustTime(600);
                    setShowTimeModal(false);
                  }}
                  className="py-2.5 px-2 bg-purple-50 hover:bg-purple-100 text-purple-950 border border-purple-200 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  +10 Minutes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (onAdjustTime) onAdjustTime(900);
                    setShowTimeModal(false);
                  }}
                  className="py-2.5 px-2 bg-purple-50 hover:bg-purple-100 text-purple-950 border border-purple-200 rounded-xl text-xs font-semibold cursor-pointer"
                >
                  +15 Minutes
                </button>
              </div>
            </div>

            {/* Set Custom Total Time Remaining */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 mb-5 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                Set Exact Remaining Time:
              </span>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setCustomInputMins((m) => Math.max(5, m - 5))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="240"
                    value={customInputMins}
                    onChange={(e) => setCustomInputMins(Number(e.target.value))}
                    className="w-20 text-center py-1.5 bg-white border border-purple-300 rounded-xl font-mono text-base font-bold text-purple-950 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <button
                    type="button"
                    onClick={() => setCustomInputMins((m) => Math.min(240, m + 5))}
                    className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-semibold text-slate-600">Minutes</span>
                </div>

                <button
                  type="button"
                  onClick={handleApplyCustomMinutes}
                  className="px-3.5 py-1.5 bg-purple-900 hover:bg-purple-800 text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowTimeModal(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer / Palette Modal */}
      {showPalette && (
        <div className="fixed inset-0 z-50 lg:hidden flex items-end justify-center bg-purple-950/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-t-3xl shadow-2xl w-full max-h-[80vh] flex flex-col p-6 animate-slideUp">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif-display text-lg font-bold text-purple-950">
                  Question Palette
                </h3>
                <p className="text-xs text-slate-500">
                  {answeredCount} of {totalQuestions} answered · {flaggedCount} flagged
                </p>
              </div>
              <button
                onClick={() => setShowPalette(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-6 gap-2 overflow-y-auto max-h-[50vh] p-1">
              {session.questions.map((_, idx) => {
                const isAns = session.answers[idx] !== undefined;
                const isFlg = Boolean(session.flagged[idx]);
                const isCur = idx === currentIndex;

                let btnStyle = 'border border-slate-200 text-slate-700';
                if (isAns) {
                  btnStyle = 'bg-purple-900 text-white font-bold border-purple-900';
                }
                if (isFlg) {
                  btnStyle = 'bg-amber-400 text-amber-950 font-bold border-amber-500';
                }
                if (isCur) {
                  btnStyle += ' ring-2 ring-offset-2 ring-purple-700';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      onNavigateQuestion(idx);
                      setShowPalette(false);
                    }}
                    className={`h-10 rounded-xl text-xs font-semibold flex items-center justify-center cursor-pointer ${btnStyle}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setShowPalette(false);
                  setShowTimeModal(true);
                }}
                className="text-xs font-semibold text-purple-900 hover:underline"
              >
                Adjust Time Interval
              </button>
              <button
                onClick={() => setShowPalette(false)}
                className="py-2.5 px-4 bg-purple-900 text-white rounded-xl font-semibold text-xs"
              >
                Return to Question {currentIndex + 1}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal Before Submission */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 max-w-md w-full p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 mx-auto flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="font-serif-display text-xl font-bold text-slate-900 mb-2">
              Ready to Submit Your Examination, Grace?
            </h3>

            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Once you submit, your score will be calculated and you can review all questions and explanations.
            </p>

            {/* Stats summary */}
            <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-2xl mb-6 text-center text-xs">
              <div className="p-2 bg-white rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Answered</span>
                <span className="text-base font-bold text-purple-950">{answeredCount}</span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Unanswered</span>
                <span className="text-base font-bold text-rose-600">
                  {totalQuestions - answeredCount}
                </span>
              </div>
              <div className="p-2 bg-white rounded-xl border border-slate-100">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Flagged</span>
                <span className="text-base font-bold text-amber-600">{flaggedCount}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Keep Practicing
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSubmitConfirm(false);
                  onSubmitExam();
                }}
                className="flex-1 py-3 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-colors cursor-pointer shadow-md"
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal Before Exiting */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 max-w-sm w-full p-6 text-center">
            <h3 className="font-serif-display text-lg font-bold text-slate-900 mb-2">
              Leave Current Test?
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Grace, your progress in this ongoing practice session will be cleared if you return home.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowExitConfirm(false)}
                className="flex-1 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Continue Test
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowExitConfirm(false);
                  onExitExam();
                }}
                className="flex-1 py-2.5 text-xs font-semibold text-white bg-purple-900 hover:bg-purple-800 rounded-xl transition-colors cursor-pointer"
              >
                Leave Exam
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
