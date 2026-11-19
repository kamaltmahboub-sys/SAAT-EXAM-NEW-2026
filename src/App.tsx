import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ExamView } from './components/ExamView';
import { HomeView } from './components/HomeView';
import { CodeModal, ConstantsModal, ModeModal, ReviewGridModal } from './components/Modals';
import { PhysicsHubView } from './components/PhysicsHubView';
import { ResultsView } from './components/ResultsView';
import { DEFAULT_APP_CONFIG, PHYSICS_PARTS, QUESTION_BANK, UI_TEXT } from './data/physicsData';
import type {
  ChapterStat,
  ExamFontSize,
  ExamState,
  Language,
  PendingQuizConfig,
  PhysicsPart,
  QuizMode,
  ViewName,
} from './types';
import { playUiTone, shuffleArray } from './utils/examUtils';

const EMPTY_EXAM: ExamState = {
  partId: null,
  titleAr: '',
  titleEn: '',
  questions: [],
  currentIndex: 0,
  answers: {},
  flagged: {},
  elapsedSeconds: 0,
  fontSize: 'md',
};

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [view, setView] = useState<ViewName>('home');
  const [studentName, setStudentName] = useState('');

  const [freeQuizUsed, setFreeQuizUsed] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [selectedPartId, setSelectedPartId] = useState<number | null>(null);
  const [pendingQuizConfig, setPendingQuizConfig] = useState<PendingQuizConfig | null>(null);
  const [chapterStats, setChapterStats] = useState<Record<number, ChapterStat>>({});
  const [exam, setExam] = useState<ExamState>(EMPTY_EXAM);

  // Modals
  const [modeModalPart, setModeModalPart] = useState<PhysicsPart | null>(null);
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [constantsModalOpen, setConstantsModalOpen] = useState(false);

  // Toast
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const toastTimerRef = useRef<number | null>(null);

  const t = UI_TEXT[lang];
  const isAr = lang === 'ar';

  const questionCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    for (const q of QUESTION_BANK) {
      counts[q.part] = (counts[q.part] ?? 0) + 1;
    }
    return counts;
  }, []);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToastMsg(null);
    }, 3200);
  }, []);

  // Sync document language and text direction
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // Quietly track total study duration during untimed exam for the results summary
  useEffect(() => {
    if (view !== 'exam') return;

    const interval = window.setInterval(() => {
      setExam((prev) => ({ ...prev, elapsedSeconds: prev.elapsedSeconds + 1 }));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [view]);

  const finishExam = useCallback(
    (examSnapshot?: ExamState) => {
      const targetExam = examSnapshot ?? exam;
      setReviewModalOpen(false);
      setConstantsModalOpen(false);

      if (targetExam.partId && targetExam.questions.length > 0) {
        let correctCount = 0;
        targetExam.questions.forEach((q, idx) => {
          if (targetExam.answers[idx] === q.correct) correctCount++;
        });
        const pct = Math.round((correctCount / targetExam.questions.length) * 100);
        const partId = targetExam.partId;
        setChapterStats((prev) => {
          const existing = prev[partId] || { attempts: 0, bestPct: 0 };
          return {
            ...prev,
            [partId]: {
              attempts: existing.attempts + 1,
              bestPct: Math.max(existing.bestPct, pct),
            },
          };
        });
      }

      playUiTone('complete');
      setView('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [exam],
  );

  const navigateTo = useCallback((viewName: ViewName) => {
    setReviewModalOpen(false);
    setConstantsModalOpen(false);
    setView(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const startQuizEngine = useCallback(
    ({ partId, mode }: PendingQuizConfig) => {
      const part = PHYSICS_PARTS.find((p) => p.id === partId);
      if (!part) return;

      let pool = QUESTION_BANK;
      let targetCount = DEFAULT_APP_CONFIG.questionsPerPartQuiz;

      if (partId === 11 || mode === 'comprehensive') {
        pool = QUESTION_BANK.filter((q) => q.part >= 1 && q.part <= 10);
        targetCount = DEFAULT_APP_CONFIG.questionsPerComprehensive;
      } else if (mode === 'cumulative') {
        pool = QUESTION_BANK.filter((q) => q.part >= 1 && q.part <= partId);
      } else {
        pool = QUESTION_BANK.filter((q) => q.part === partId);
      }

      if (pool.length === 0) {
        showToast(
          lang === 'ar'
            ? 'لا توجد أسئلة مضافة لهذا القسم بعد.'
            : 'No questions available for this chapter yet.',
        );
        return;
      }

      const selectedQuestions = shuffleArray(pool).slice(0, targetCount);

      const modeTagAr =
        partId === 11 ? '' : mode === 'cumulative' ? ' (مراجعة تراكمية)' : ' (هذا القسم فقط)';
      const modeTagEn =
        partId === 11 ? '' : mode === 'cumulative' ? ' (Cumulative Revision)' : ' (Part Only)';

      setExam({
        partId,
        titleAr: `${part.titleAr}${modeTagAr}`,
        titleEn: `${part.titleEn}${modeTagEn}`,
        questions: selectedQuestions,
        currentIndex: 0,
        answers: {},
        flagged: {},
        elapsedSeconds: 0,
        fontSize: 'md',
      });

      setView('exam');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [lang, showToast],
  );

  const attemptStartQuiz = useCallback(
    (config: PendingQuizConfig) => {
      if (!freeQuizUsed || isUnlocked) {
        if (!freeQuizUsed) {
          setFreeQuizUsed(true);
        }
        startQuizEngine(config);
      } else {
        setPendingQuizConfig(config);
        setCodeModalOpen(true);
      }
    },
    [freeQuizUsed, isUnlocked, startQuizEngine],
  );

  const handlePartClick = useCallback(
    (partId: number) => {
      const part = PHYSICS_PARTS.find((p) => p.id === partId);
      if (!part) return;

      setSelectedPartId(partId);
      if (part.isComprehensive) {
        attemptStartQuiz({ partId: 11, mode: 'comprehensive' });
        return;
      }

      setModeModalPart(part);
    },
    [attemptStartQuiz],
  );

  const handleSelectMode = (mode: QuizMode) => {
    const partId = modeModalPart?.id ?? selectedPartId;
    setModeModalPart(null);
    if (partId) {
      attemptStartQuiz({ partId, mode });
    }
  };

  const handleUnlockSuccess = () => {
    setIsUnlocked(true);
    setCodeModalOpen(false);
    showToast(t.codeSuccessToast);
    if (pendingQuizConfig) {
      const cfg = pendingQuizConfig;
      setPendingQuizConfig(null);
      startQuizEngine(cfg);
    }
  };

  const selectOption = useCallback((optIdx: number) => {
    setExam((prev) => {
      playUiTone('select');
      return {
        ...prev,
        answers: {
          ...prev.answers,
          [prev.currentIndex]: optIdx,
        },
      };
    });
  }, []);

  const toggleFlagCurrent = useCallback(() => {
    setExam((prev) => {
      const idx = prev.currentIndex;
      const nextFlagged = { ...prev.flagged };
      if (nextFlagged[idx]) {
        delete nextFlagged[idx];
      } else {
        nextFlagged[idx] = true;
      }
      playUiTone('flag');
      return {
        ...prev,
        flagged: nextFlagged,
      };
    });
  }, []);

  const setExamFontSize = useCallback((fontSize: ExamFontSize) => {
    setExam((prev) => ({ ...prev, fontSize }));
  }, []);

  const prevQuestion = useCallback(() => {
    setExam((prev) =>
      prev.currentIndex > 0 ? { ...prev, currentIndex: prev.currentIndex - 1 } : prev,
    );
  }, []);

  const nextQuestion = useCallback(() => {
    setExam((prev) =>
      prev.currentIndex < prev.questions.length - 1
        ? { ...prev, currentIndex: prev.currentIndex + 1 }
        : prev,
    );
  }, []);

  const jumpToQuestion = useCallback((index: number) => {
    setExam((prev) => ({ ...prev, currentIndex: index }));
    setReviewModalOpen(false);
  }, []);

  // Keyboard shortcuts during computerized exam (1-4 / A-D to answer, F to flag, Arrows to navigate)
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (view !== 'exam') return;
      const activeTag = document.activeElement?.tagName;
      if (activeTag && ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag)) return;

      const key = e.key.toUpperCase();
      if (key === '1' || key === 'A') selectOption(0);
      else if (key === '2' || key === 'B') selectOption(1);
      else if (key === '3' || key === 'C') selectOption(2);
      else if (key === '4' || key === 'D') selectOption(3);
      else if (key === 'F') toggleFlagCurrent();
      else if (e.key === 'ArrowRight') {
        if (lang === 'ar') prevQuestion();
        else nextQuestion();
      } else if (e.key === 'ArrowLeft') {
        if (lang === 'ar') nextQuestion();
        else prevQuestion();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [lang, nextQuestion, prevQuestion, selectOption, toggleFlagCurrent, view]);

  const handleLogoClick = () => {
    if (view === 'exam') {
      setReviewModalOpen(true);
    } else {
      navigateTo('home');
    }
  };

  const handleCopyWebsiteLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast(
        isAr ? 'تم نسخ رابط الموقع لمشاركته مع الطلاب!' : 'Website link copied to clipboard!',
      );
    } catch {
      showToast(
        isAr ? 'انسخ رابط الموقع من شريط العنوان لمشاركته.' : 'Copy the URL from your address bar to share.',
      );
    }
  };

  return (
    <>
      {/* TOP QIYAS COMPUTERIZED HEADER BAR */}
      <header className="bg-[#041B14] text-white shadow-md sticky top-0 z-40 border-b border-emerald-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer text-start min-w-0"
          >
            <div className="w-10 h-10 rounded-xl bg-qiyas-teal flex items-center justify-center shadow-inner shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="leading-tight min-w-0">
              <h1 className="font-bold text-sm sm:text-base tracking-wide text-white truncate">
                {t.headerTitle}
              </h1>
              <p className="text-[11px] sm:text-xs text-teal-300 font-medium truncate">
                {t.headerSub}
              </p>
            </div>
          </button>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setLang((prev) => (prev === 'ar' ? 'en' : 'ar'))}
              title="Switch Language / تغيير اللغة"
              className="w-9 h-9 rounded-xl bg-qiyas-teal hover:bg-qiyas-tealHover text-white font-extrabold shadow transition-all hover:scale-105 active:scale-95 flex items-center justify-center border border-teal-400/30 cursor-pointer shrink-0"
            >
              <span className="text-[11px] leading-none tracking-tight">{t.langToggle}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN DYNAMIC APPLICATION CONTAINER */}
      <main className="flex-1 flex flex-col">
        {view === 'home' && (
          <HomeView
            lang={lang}
            studentName={studentName}
            onChangeStudentName={setStudentName}
            onEnterPhysics={() => navigateTo('physics')}
            onChemistryClick={() => showToast(t.chemToast)}
          />
        )}

        {view === 'physics' && (
          <PhysicsHubView
            lang={lang}
            isUnlocked={isUnlocked}
            freeQuizUsed={freeQuizUsed}
            chapterStats={chapterStats}
            questionCounts={questionCounts}
            totalQuestionsCount={QUESTION_BANK.length}
            onBackHome={() => navigateTo('home')}
            onSelectPart={handlePartClick}
          />
        )}

        {view === 'exam' && (
          <ExamView
            lang={lang}
            studentName={studentName}
            exam={exam}
            onSelectOption={selectOption}
            onToggleFlag={toggleFlagCurrent}
            onSetFontSize={setExamFontSize}
            onOpenConstants={() => setConstantsModalOpen(true)}
            onOpenReviewGrid={() => setReviewModalOpen(true)}
            onPrev={prevQuestion}
            onNext={nextQuestion}
            onJumpToQuestion={jumpToQuestion}
          />
        )}

        {view === 'results' && (
          <ResultsView
            lang={lang}
            exam={exam}
            selectedPartId={selectedPartId}
            onRetryPart={handlePartClick}
            onBackToPhysics={() => navigateTo('physics')}
          />
        )}
      </main>

      {/* PUBLIC WEBSITE FOOTER */}
      {view !== 'exam' && (
        <footer className="bg-[#041B14]/95 text-slate-300 border-t border-emerald-900/70 mt-auto">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-slate-300">
              <span className="font-bold text-white">{t.headerTitle}</span>
              <span aria-hidden="true">·</span>
              <span>
                {isAr
                  ? `${QUESTION_BANK.length} سؤال فيزياء متاح للتدريب`
                  : `${QUESTION_BANK.length} Physics practice questions`}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigateTo('home')}
                className="hover:text-white hover:underline cursor-pointer"
              >
                {isAr ? 'الرئيسية' : 'Home'}
              </button>
              <button
                type="button"
                onClick={() => navigateTo('physics')}
                className="hover:text-white hover:underline cursor-pointer"
              >
                {t.physicsCardTitle}
              </button>
              <button
                type="button"
                onClick={() => void handleCopyWebsiteLink()}
                className="px-3 py-1.5 rounded-lg bg-qiyas-teal/20 hover:bg-qiyas-teal/30 text-teal-200 border border-teal-700/60 font-semibold transition cursor-pointer"
              >
                {isAr ? 'نسخ رابط الموقع' : 'Copy Website Link'}
              </button>
            </div>
          </div>
        </footer>
      )}

      {/* MODALS */}
      <ModeModal
        open={modeModalPart !== null}
        lang={lang}
        part={modeModalPart}
        onClose={() => setModeModalPart(null)}
        onSelectMode={handleSelectMode}
      />

      <CodeModal
        open={codeModalOpen}
        lang={lang}
        expectedCode={DEFAULT_APP_CONFIG.accessCode}
        onClose={() => setCodeModalOpen(false)}
        onUnlock={handleUnlockSuccess}
      />

      <ReviewGridModal
        open={reviewModalOpen}
        lang={lang}
        exam={exam}
        onClose={() => setReviewModalOpen(false)}
        onJumpToQuestion={jumpToQuestion}
        onFinishExam={() => finishExam()}
      />

      <ConstantsModal
        open={constantsModalOpen}
        lang={lang}
        onClose={() => setConstantsModalOpen(false)}
      />

      {/* TOAST NOTIFICATION BANNER */}
      {toastMsg && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-slate-900 text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl shadow-xl border border-slate-700 whitespace-nowrap">
            {toastMsg}
          </div>
        </div>
      )}
    </>
  );
}
