import React from 'react';
import { UI_TEXT } from '../data/physicsData';
import type { ExamFontSize, ExamState, Language } from '../types';

interface ExamViewProps {
  lang: Language;
  studentName: string;
  exam: ExamState;
  onSelectOption: (optionIndex: number) => void;
  onToggleFlag: () => void;
  onSetFontSize: (size: ExamFontSize) => void;
  onOpenConstants: () => void;
  onOpenReviewGrid: () => void;
  onPrev: () => void;
  onNext: () => void;
  onJumpToQuestion: (index: number) => void;
}

export const ExamView: React.FC<ExamViewProps> = ({
  lang,
  studentName,
  exam,
  onSelectOption,
  onToggleFlag,
  onSetFontSize,
  onOpenConstants,
  onOpenReviewGrid,
  onPrev,
  onNext,
  onJumpToQuestion,
}) => {
  const t = UI_TEXT[lang];
  const isAr = lang === 'ar';
  const { questions, currentIndex, answers, flagged, fontSize } = exam;
  const q = questions[currentIndex];
  if (!q) return null;

  const total = questions.length;
  const isFlagged = !!flagged[currentIndex];
  const selectedOpt = answers[currentIndex];
  const letters = t.optionLetters;
  const candidateDisplay = studentName.trim() || t.defaultStudent;

  const questionSizeClass =
    fontSize === 'lg' ? 'text-xl sm:text-2xl' : fontSize === 'sm' ? 'text-base sm:text-lg' : 'text-lg sm:text-xl';

  const optionSizeClass =
    fontSize === 'lg' ? 'text-lg sm:text-xl' : fontSize === 'sm' ? 'text-sm sm:text-base' : 'text-base sm:text-lg';

  const optionsList = isAr ? q.optionsAr : q.optionsEn;

  return (
    <div className="flex-1 flex flex-col bg-transparent">
      {/* Qiyas Sub-Header Banner */}
      <div className="bg-slate-800 text-white border-t border-slate-700 px-4 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs sm:text-sm min-w-0">
            <span className="px-2.5 py-1 rounded-lg bg-slate-700 text-slate-200 font-semibold shrink-0">
              {t.candidateLabel} <strong className="text-white">{candidateDisplay}</strong>
            </span>
            <span className="text-slate-300 truncate hidden md:inline">
              {isAr ? exam.titleAr : exam.titleEn}
            </span>
          </div>

          <div className="flex items-center gap-3 ms-auto">
            <div className="px-3.5 py-1.5 rounded-xl bg-qiyas-teal text-white font-bold text-xs sm:text-sm shadow-sm tabular-nums whitespace-nowrap">
              {t.questionCounter(currentIndex + 1, total)}
            </div>
          </div>
        </div>
      </div>

      {/* Qiyas Toolbar */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-6 py-2.5 shadow-2xs">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={onToggleFlag}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold border transition cursor-pointer whitespace-nowrap ${
              isFlagged
                ? 'bg-amber-100 border-amber-400 text-amber-900'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-amber-50 hover:border-amber-300'
            }`}
          >
            <svg
              className={`w-4 h-4 ${isFlagged ? 'text-amber-600 fill-amber-500' : 'text-slate-500'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
              />
            </svg>
            <span>{isFlagged ? t.flaggedBtn : t.flagBtn}</span>
          </button>

          <div className="flex items-center gap-2">
            <div className="inline-flex items-center rounded-xl border border-slate-200 bg-slate-50 p-0.5 text-xs font-bold">
              {(['sm', 'md', 'lg'] as const).map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => onSetFontSize(sz)}
                  className={`px-2.5 py-1 rounded-lg cursor-pointer transition ${
                    fontSize === sz ? 'bg-white shadow-2xs text-qiyas-navy' : 'text-slate-500'
                  }`}
                >
                  {sz === 'sm' ? 'A-' : sz === 'md' ? 'A' : 'A+'}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={onOpenConstants}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-qiyas-teal border border-teal-200 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span>{t.constantsBtn}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Question & Options Workspace */}
      <div className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
          <div className="pb-5 border-b border-slate-100 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-qiyas-teal bg-teal-50 px-3 py-1 rounded-lg tabular-nums">
              <span>#{currentIndex + 1}</span>
            </div>
            <p
              className={`font-bold text-slate-900 ${questionSizeClass} leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: isAr ? q.qAr : q.qEn }}
            />
            {q.figureSvg && (
              <div
                dir="ltr"
                className="p-3 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center overflow-x-auto"
                dangerouslySetInnerHTML={{ __html: q.figureSvg }}
              />
            )}
          </div>

          <div className="space-y-3">
            {optionsList.map((optText, idx) => {
              const isSelected = selectedOpt === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSelectOption(idx)}
                  className={`qiyas-option w-full text-start p-4 sm:p-5 rounded-2xl border-2 flex items-center gap-4 cursor-pointer ${
                    isSelected
                      ? 'border-qiyas-teal bg-teal-50/80 shadow-sm'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 shrink-0">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-qiyas-teal bg-qiyas-teal' : 'border-slate-400'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <span
                      className={`w-8 h-8 rounded-lg font-extrabold text-sm flex items-center justify-center ${
                        isSelected ? 'bg-qiyas-teal text-white' : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {letters[idx]}
                    </span>
                  </div>

                  <div
                    className={`font-semibold text-slate-800 ${optionSizeClass} leading-relaxed flex-1`}
                    dangerouslySetInnerHTML={{ __html: optText }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Side Question Navigator Panel */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-5 shadow-sm border border-slate-200 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h4 className="font-bold text-sm text-qiyas-navy">{t.reviewModalTitle}</h4>
            <button
              type="button"
              onClick={onOpenReviewGrid}
              className="text-xs font-bold text-qiyas-teal hover:underline cursor-pointer"
            >
              {t.reviewAllBtn}
            </button>
          </div>

          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, idx) => {
              const answered = answers[idx] !== undefined;
              const flag = !!flagged[idx];
              const active = idx === currentIndex;

              let bgClass = 'bg-white text-slate-700 border-slate-300 hover:border-qiyas-teal';
              if (flag) bgClass = 'bg-amber-400 text-slate-950 border-amber-500 font-extrabold';
              else if (answered) bgClass = 'bg-emerald-600 text-white border-emerald-700 font-bold';

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onJumpToQuestion(idx)}
                  className={`w-9 h-9 rounded-lg border text-xs transition flex items-center justify-center relative tabular-nums cursor-pointer ${bgClass} ${
                    active ? 'ring-2 ring-offset-2 ring-qiyas-navy scale-105' : ''
                  }`}
                >
                  {idx + 1}
                  {flag && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-rose-600 border border-white" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-2 text-[11px] font-semibold text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-emerald-600 inline-block shrink-0" />
              <span>{t.legendAnswered}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-white border border-slate-400 inline-block shrink-0" />
              <span>{t.legendUnanswered}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-xs bg-amber-400 inline-block shrink-0" />
              <span>{t.legendFlagged}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Qiyas Navigation Footer */}
      <div className="bg-white border-t border-slate-200 px-4 sm:px-6 py-3.5 sticky bottom-0 z-30 shadow-inner">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onPrev}
            disabled={currentIndex === 0}
            className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm border-2 transition flex items-center gap-2 whitespace-nowrap ${
              currentIndex === 0
                ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer'
            }`}
          >
            <svg
              className={`w-4 h-4 transform ${isAr ? '' : 'rotate-180'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span>{t.prevBtn}</span>
          </button>

          <button
            type="button"
            onClick={onOpenReviewGrid}
            className="px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-900 text-white transition whitespace-nowrap cursor-pointer"
          >
            {t.reviewAllBtn}
          </button>

          {currentIndex < total - 1 ? (
            <button
              type="button"
              onClick={onNext}
              className="px-5 sm:px-7 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-qiyas-teal hover:bg-qiyas-tealHover text-white shadow transition flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>{t.nextBtn}</span>
              <svg
                className={`w-4 h-4 transform ${isAr ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              onClick={onOpenReviewGrid}
              className="px-5 sm:px-7 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-rose-600 hover:bg-rose-700 text-white shadow transition whitespace-nowrap cursor-pointer"
            >
              {t.endExamBtn}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
