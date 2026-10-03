import React, { useState } from 'react';
import { SubjectInfo, SubjectId } from '../types';
import graceUploadedPhoto from '../assets/images/grace_uploaded_wa0163.jpg';
import graceSittingPhoto from '../assets/images/grace_sitting_cropped.jpg';
import {
  TrendingUp,
  Calculator,
  Play,
  Sparkles,
  BookOpen,
  Award,
  Clock,
  CheckCircle2,
  Heart,
  Lightbulb,
  GraduationCap,
  Maximize2,
  Download
} from 'lucide-react';

interface HeroHomeProps {
  subjects: Record<string, SubjectInfo>;
  onSelectSubject: (id: SubjectId) => void;
  onOpenTips: () => void;
}

export const HeroHome: React.FC<HeroHomeProps> = ({
  subjects,
  onSelectSubject,
  onOpenTips
}) => {
  const [photoMode, setPhotoMode] = useState<'sitting' | 'full'>('sitting');
  const [showFullPreview, setShowFullPreview] = useState<boolean>(false);

  const eco = subjects.economics;
  const acc = subjects.accounting;

  const currentDisplayPhoto =
    photoMode === 'sitting' ? graceSittingPhoto : graceUploadedPhoto;

  return (
    <div className="space-y-12 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Subtle dedication kicker */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 border border-purple-200/80 text-purple-950 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>A little study space created specially for Grace Ehi</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-purple-950 leading-[1.15]">
                Empowering Your Success,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-900 to-rose-600">
                  Grace Ehi.
                </span>
              </h1>

              {/* Subtitle / Context */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-sans">
                A dedicated, distraction-free computer-based testing environment crafted specifically for your
                forthcoming examinations at{' '}
                <span className="font-semibold text-purple-900">
                  College of Education, Akwanga, Nasarawa State
                </span>
                . Master every question in Economics and Accounting with instant scoring, customizable CBT timing, and
                comprehensive step-by-step academic explanations.
              </p>

              {/* Quick Feature Highlights */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500 pt-1">
                <span className="flex items-center gap-1.5 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-purple-700" />
                  124+ Authentic Curriculum Questions
                </span>
                <span aria-hidden="true" className="text-purple-300">·</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <Clock className="w-4 h-4 text-purple-700" />
                  Customizable CBT Time Intervals
                </span>
                <span aria-hidden="true" className="text-purple-300">·</span>
                <span className="flex items-center gap-1.5 text-slate-700">
                  <BookOpen className="w-4 h-4 text-purple-700" />
                  Full Explanations & Review
                </span>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onSelectSubject('economics')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-purple-900 hover:bg-purple-800 active:scale-[0.98] shadow-md shadow-purple-900/10 transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>Practice Economics</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectSubject('accounting')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-purple-950 bg-purple-100/70 hover:bg-purple-200/70 active:scale-[0.98] border border-purple-200/80 transition-all cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-purple-800" />
                  <span>Practice Accounting</span>
                </button>

                <button
                  type="button"
                  onClick={onOpenTips}
                  className="flex items-center gap-1.5 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-600 hover:text-purple-900 transition-colors cursor-pointer"
                >
                  <Lightbulb className="w-4 h-4 text-amber-500" />
                  <span>Exam Tips</span>
                </button>
              </div>
            </div>

            {/* Right Visual Image Card: Grace Ehi Picture */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-purple-200/90 shadow-2xl bg-gradient-to-br from-purple-900 via-purple-950 to-indigo-950 p-1.5 group">
                <div
                  className={`relative ${
                    photoMode === 'sitting' ? 'aspect-[3/4]' : 'aspect-[2/3]'
                  } rounded-[22px] overflow-hidden bg-purple-900 transition-all duration-300`}
                >
                  {/* Photo of Grace */}
                  <img
                    src={currentDisplayPhoto}
                    alt="Grace Ehi at College of Education, Akwanga"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  {/* Elegant Gradient Scrim for Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950/85 via-purple-950/15 to-transparent" />

                  {/* Top Floating Badge & View Switcher */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-purple-950 shadow-sm border border-white/50">
                      <GraduationCap className="w-3.5 h-3.5 text-purple-700" />
                      COE Akwanga Scholar
                    </span>

                    <button
                      type="button"
                      onClick={() => setShowFullPreview(true)}
                      className="p-1.5 rounded-full bg-white/90 backdrop-blur-md text-slate-700 hover:text-purple-900 shadow-sm transition-colors cursor-pointer"
                      title="View full image"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Bottom Overlaid Personal Card */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-left">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="font-serif-display text-base font-bold text-purple-950">
                        Grace Ehi
                      </div>
                      <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md flex items-center gap-1 border border-rose-100">
                        <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                        Dedicated to You
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-tight">
                      Candidate · College of Education, Akwanga, Nasarawa State
                    </p>
                    <p className="text-[10px] text-purple-800 font-medium italic mt-1">
                      "Believe in yourself, study with passion, and excel!"
                    </p>
                  </div>
                </div>
              </div>

              {/* Picture View Mode Controls */}
              <div className="mt-3 flex items-center gap-2 p-1 bg-white/80 backdrop-blur-md rounded-xl border border-purple-100 shadow-xs">
                <button
                  type="button"
                  onClick={() => setPhotoMode('sitting')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    photoMode === 'sitting'
                      ? 'bg-purple-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-purple-900'
                  }`}
                >
                  Sitting Photo
                </button>
                <button
                  type="button"
                  onClick={() => setPhotoMode('full')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    photoMode === 'full'
                      ? 'bg-purple-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-purple-900'
                  }`}
                >
                  Full Collage View
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Subject Cards Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-purple-100/70 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 block mb-1">
              Select Examination Subject
            </span>
            <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-purple-950">
              Your Examination Modules
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            60+ verified CBT practice questions per module with explanations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Economics */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-800 shadow-xs group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-900 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-100 block">
                    {eco.code}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    {eco.questionCount} Questions Available
                  </span>
                </div>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-2">
                {eco.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                {eco.description}
              </p>

              {/* Topics breakdown */}
              <div className="space-y-1.5 mb-6 text-xs text-slate-600 bg-purple-50/40 p-4 rounded-2xl border border-purple-50">
                <div className="font-semibold text-purple-900 text-xs mb-1">Syllabus Highlights:</div>
                <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700">
                  <span>• Micro & Elasticity</span>
                  <span>• Central Bank of Nigeria</span>
                  <span>• National Income (GDP)</span>
                  <span>• Public Finance & Taxes</span>
                  <span>• Market Structures</span>
                  <span>• Nasarawa Minerals & Trade</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectSubject('economics')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-purple-900 hover:bg-purple-800 active:scale-[0.98] shadow-sm transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Start Economics Practice</span>
              </button>
            </div>
          </div>

          {/* Card 2: Accounting */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-purple-100 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-800 shadow-xs group-hover:scale-105 transition-transform">
                  <Calculator className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-900 bg-rose-50 px-2.5 py-1 rounded-md border border-rose-100 block">
                    {acc.code}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    {acc.questionCount} Questions Available
                  </span>
                </div>
              </div>

              <h3 className="font-serif-display text-2xl font-bold text-purple-950 mb-2">
                {acc.name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-sans">
                {acc.description}
              </p>

              {/* Topics breakdown */}
              <div className="space-y-1.5 mb-6 text-xs text-slate-600 bg-rose-50/30 p-4 rounded-2xl border border-rose-50">
                <div className="font-semibold text-rose-950 text-xs mb-1">Syllabus Highlights:</div>
                <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-700">
                  <span>• Double Entry Principle</span>
                  <span>• Bank Reconciliation</span>
                  <span>• Trial Balance Errors</span>
                  <span>• Depreciation Methods</span>
                  <span>• Accruals & Prepayments</span>
                  <span>• Partnership & Companies</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectSubject('accounting')}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-semibold text-white bg-purple-900 hover:bg-purple-800 active:scale-[0.98] shadow-sm transition-all cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Start Accounting Practice</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* College of Education, Akwanga Info Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-purple-900 via-purple-950 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-md">
          <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                Nasarawa State Examination Standards
              </span>
              <h3 className="font-serif-display text-xl sm:text-2xl font-bold">
                Tailored for College of Education, Akwanga
              </h3>
              <p className="text-xs sm:text-sm text-purple-200 leading-relaxed font-sans">
                Every question adheres to standard NCE academic requirements, ensuring you develop speed, accuracy,
                and conceptual clarity before stepping into the examination hall.
              </p>
            </div>
            <div className="md:col-span-4 flex justify-start md:justify-end">
              <button
                type="button"
                onClick={onOpenTips}
                className="px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold bg-white text-purple-950 hover:bg-purple-50 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                Read Grace's Study Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Full Image Preview Modal */}
      {showFullPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-2 border border-purple-100">
            <button
              type="button"
              onClick={() => setShowFullPreview(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 text-white hover:bg-black/80 rounded-full transition-colors cursor-pointer"
            >
              ✕
            </button>
            <div className="rounded-2xl overflow-hidden max-h-[80vh] flex items-center justify-center bg-purple-950">
              <img
                src={graceUploadedPhoto}
                alt="Grace Ehi full photo"
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h4 className="font-serif-display font-bold text-purple-950 text-base">
                Grace Ehi · College of Education, Akwanga
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Dedicated study and CBT preparation platform
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Subtle Personal Dedication Footer */}
      <footer className="text-center pt-8 border-t border-purple-100/80 space-y-2">
        <p className="text-xs text-slate-500 font-sans">
          Designed specially for <span className="font-semibold text-purple-950">Grace Ehi</span> ❤️
        </p>
        <p className="text-[11px] text-slate-400">
          College of Education, Akwanga · Economics & Accounting CBT Practice
        </p>
        <div className="pt-2">
          <a
            href="/grace-ehi-cbt.zip"
            download="grace-ehi-cbt.zip"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-purple-900 hover:text-purple-950 bg-purple-50 hover:bg-purple-100 border border-purple-200/80 rounded-xl transition-all shadow-xs cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Project ZIP (Ready for GitHub)</span>
          </a>
        </div>
      </footer>
    </div>
  );
};
