import React, { useState, useCallback } from 'react';
import { SubjectId, ExamSettings, ExamSession, ExamResultSummary } from './types';
import { subjects } from './data/subjects';
import { economicsQuestions } from './data/economicsQuestions';
import { accountingQuestions } from './data/accountingQuestions';
import { getGraceRemark } from './data/graceNotes';

import { Header } from './components/Header';
import { HeroHome } from './components/HeroHome';
import { ExamModalConfig } from './components/ExamModalConfig';
import { CbtExamView } from './components/CbtExamView';
import { ExamResultView } from './components/ExamResultView';
import { ExamReviewView } from './components/ExamReviewView';
import { GraceTipsModal } from './components/GraceTipsModal';

type AppView = 'home' | 'exam' | 'result' | 'review';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [session, setSession] = useState<ExamSession | null>(null);
  const [result, setResult] = useState<ExamResultSummary | null>(null);
  const [configSubjectId, setConfigSubjectId] = useState<SubjectId | null>(null);
  const [showTipsModal, setShowTipsModal] = useState<boolean>(false);

  // Open configuration modal for a subject
  const handleSelectSubject = (subjectId: SubjectId) => {
    setConfigSubjectId(subjectId);
  };

  // Launch the CBT exam with chosen settings
  const handleStartExam = (settings: ExamSettings) => {
    const rawQuestions =
      settings.subjectId === 'economics' ? economicsQuestions : accountingQuestions;

    let selectedQuestions = [...rawQuestions];

    // Shuffle if enabled
    if (settings.shuffleQuestions) {
      selectedQuestions.sort(() => Math.random() - 0.5);
    }

    // Slice to desired question count
    selectedQuestions = selectedQuestions.slice(0, settings.questionCount);

    const initialTimeSeconds = settings.timeLimitMinutes * 60;

    const newSession: ExamSession = {
      settings,
      questions: selectedQuestions,
      currentQuestionIndex: 0,
      answers: {},
      flagged: {},
      timeRemainingSeconds: initialTimeSeconds,
      startedAt: Date.now(),
      isCompleted: false
    };

    setSession(newSession);
    setConfigSubjectId(null);
    setCurrentView('exam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select an option for a question
  const handleSelectOption = (questionIndex: number, optionIndex: number) => {
    if (!session) return;
    setSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [questionIndex]: optionIndex
        }
      };
    });
  };

  // Clear chosen option
  const handleClearOption = (questionIndex: number) => {
    if (!session) return;
    setSession((prev) => {
      if (!prev) return null;
      const nextAnswers = { ...prev.answers };
      delete nextAnswers[questionIndex];
      return {
        ...prev,
        answers: nextAnswers
      };
    });
  };

  // Toggle flag / review marker
  const handleToggleFlag = (questionIndex: number) => {
    if (!session) return;
    setSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        flagged: {
          ...prev.flagged,
          [questionIndex]: !prev.flagged[questionIndex]
        }
      };
    });
  };

  // Jump to specific question
  const handleNavigateQuestion = (index: number) => {
    if (!session) return;
    if (index >= 0 && index < session.questions.length) {
      setSession((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          currentQuestionIndex: index
        };
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Timer countdown callback
  const handleTickTimer = useCallback(() => {
    setSession((prev) => {
      if (!prev || prev.isCompleted) return prev;
      if (prev.timeRemainingSeconds <= 1) {
        // Time expired! Auto submit
        handleAutoSubmit(prev);
        return {
          ...prev,
          timeRemainingSeconds: 0,
          isCompleted: true
        };
      }
      return {
        ...prev,
        timeRemainingSeconds: prev.timeRemainingSeconds - 1
      };
    });
  }, []);

  // Adjust time remaining during examination
  const handleAdjustTime = (additionalSeconds: number) => {
    setSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        timeRemainingSeconds: Math.max(10, prev.timeRemainingSeconds + additionalSeconds)
      };
    });
  };

  // Set explicit time remaining in seconds
  const handleSetTimeRemaining = (totalSeconds: number) => {
    setSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        timeRemainingSeconds: Math.max(10, totalSeconds)
      };
    });
  };

  // Toggle pause state
  const handleTogglePause = () => {
    setSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        isPaused: !prev.isPaused
      };
    });
  };

  // Compute results and finalize exam
  const calculateResult = (currentSession: ExamSession): ExamResultSummary => {
    const totalQuestions = currentSession.questions.length;
    let correctCount = 0;
    let answeredCount = 0;

    currentSession.questions.forEach((q, idx) => {
      const ans = currentSession.answers[idx];
      if (ans !== undefined) {
        answeredCount++;
        if (ans === q.correctIndex) {
          correctCount++;
        }
      }
    });

    const incorrectCount = answeredCount - correctCount;
    const unansweredCount = totalQuestions - answeredCount;
    const scorePercentage = (correctCount / totalQuestions) * 100;

    const initialTotalSeconds = currentSession.settings.timeLimitMinutes * 60;
    const timeSpentSeconds =
      initialTotalSeconds > 0
        ? initialTotalSeconds - currentSession.timeRemainingSeconds
        : Math.round((Date.now() - currentSession.startedAt) / 1000);

    const subjectInfo = subjects[currentSession.settings.subjectId];
    const remark = getGraceRemark(scorePercentage);

    return {
      subjectId: currentSession.settings.subjectId,
      subjectName: subjectInfo.name,
      totalQuestions,
      answeredCount,
      unansweredCount,
      correctCount,
      incorrectCount,
      scorePercentage,
      timeSpentSeconds: Math.max(0, timeSpentSeconds),
      grade: remark.grade,
      gradeRemark: remark.remark,
      graceMessage: remark.message,
      completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
  };

  // Submit action from button
  const handleSubmitExam = () => {
    if (!session) return;
    const examSummary = calculateResult(session);
    setResult(examSummary);
    setSession((prev) => (prev ? { ...prev, isCompleted: true } : null));
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Auto-submit when timer expires
  const handleAutoSubmit = (expiredSession: ExamSession) => {
    const examSummary = calculateResult(expiredSession);
    setResult(examSummary);
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to home
  const handleGoHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Practice again (reopen config)
  const handlePracticeAgain = () => {
    if (session) {
      setConfigSubjectId(session.settings.subjectId);
    } else {
      setConfigSubjectId('economics');
    }
  };

  // Review answers view
  const handleReviewAnswers = () => {
    setCurrentView('review');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back from review to score summary
  const handleBackToScore = () => {
    setCurrentView('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF7FD] text-slate-800 flex flex-col font-sans">
      {/* Global Top Navigation Bar (Hidden during full CBT exam for zero-distraction focus) */}
      {currentView !== 'exam' && currentView !== 'review' && (
        <Header
          onGoHome={handleGoHome}
          onSelectSubject={handleSelectSubject}
          onOpenTips={() => setShowTipsModal(true)}
          isExamActive={false}
        />
      )}

      {/* Main View Switcher */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HeroHome
            subjects={subjects}
            onSelectSubject={handleSelectSubject}
            onOpenTips={() => setShowTipsModal(true)}
          />
        )}

        {currentView === 'exam' && session && (
          <CbtExamView
            session={session}
            subject={subjects[session.settings.subjectId]}
            onSelectOption={handleSelectOption}
            onClearOption={handleClearOption}
            onToggleFlag={handleToggleFlag}
            onNavigateQuestion={handleNavigateQuestion}
            onSubmitExam={handleSubmitExam}
            onExitExam={handleGoHome}
            onTickTimer={handleTickTimer}
            onAdjustTime={handleAdjustTime}
            onSetTimeRemaining={handleSetTimeRemaining}
            onTogglePause={handleTogglePause}
          />
        )}

        {currentView === 'result' && result && (
          <ExamResultView
            result={result}
            onReviewAnswers={handleReviewAnswers}
            onPracticeAgain={handlePracticeAgain}
            onGoHome={handleGoHome}
          />
        )}

        {currentView === 'review' && session && (
          <ExamReviewView
            session={session}
            subject={subjects[session.settings.subjectId]}
            onBackToScore={handleBackToScore}
            onPracticeAgain={handlePracticeAgain}
          />
        )}
      </main>

      {/* Configuration & Launch Modal */}
      {configSubjectId && (
        <ExamModalConfig
          subject={subjects[configSubjectId]}
          isOpen={Boolean(configSubjectId)}
          onClose={() => setConfigSubjectId(null)}
          onStartExam={handleStartExam}
        />
      )}

      {/* Grace Study Tips Modal */}
      <GraceTipsModal
        isOpen={showTipsModal}
        onClose={() => setShowTipsModal(false)}
      />
    </div>
  );
}
