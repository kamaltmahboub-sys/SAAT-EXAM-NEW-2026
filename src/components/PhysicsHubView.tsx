import React from 'react';
import { PHYSICS_PARTS, UI_TEXT } from '../data/physicsData';
import type { ChapterStat, Language } from '../types';

interface PhysicsHubViewProps {
  lang: Language;
  isUnlocked: boolean;
  freeQuizUsed: boolean;
  chapterStats: Record<number, ChapterStat>;
  questionCounts: Record<number, number>;
  totalQuestionsCount: number;
  onBackHome: () => void;
  onSelectPart: (partId: number) => void;
}

export const PhysicsHubView: React.FC<PhysicsHubViewProps> = ({
  lang,
  isUnlocked,
  freeQuizUsed,
  chapterStats,
  questionCounts,
  totalQuestionsCount,
  onBackHome,
  onSelectPart,
}) => {
  const t = UI_TEXT[lang];
  const isAr = lang === 'ar';

  const chapterParts = PHYSICS_PARTS.filter((p) => !p.isComprehensive);
  const comprehensivePart = PHYSICS_PARTS.find((p) => p.isComprehensive);
  const compStat = comprehensivePart ? chapterStats[comprehensivePart.id] : undefined;

  const accessText = isUnlocked ? t.unlockedPill : !freeQuizUsed ? t.freePill : t.lockedPill;
  const accessColorClass = isUnlocked
    ? 'text-emerald-700'
    : !freeQuizUsed
      ? 'text-qiyas-teal'
      : 'text-amber-800';

  return (
    <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 space-y-6 animate-view-enter">
      {/* Breadcrumb & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-md">
        <div>
          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-qiyas-teal hover:underline mb-2 cursor-pointer"
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
            {t.backToSubjects}
          </button>
          <h2 className="text-xl sm:text-2xl font-extrabold text-qiyas-navy">{t.physicsHubTitle}</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">{t.physicsHubDesc}</p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <span className={`text-xs font-bold whitespace-nowrap ${accessColorClass}`}>{accessText}</span>
        </div>
      </div>

      {/* Section 1: Chapters 1–10 Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-xs sm:text-sm font-extrabold tracking-wider text-emerald-200">
            {t.curriculumLabel}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {chapterParts.map((part) => {
            const stat = chapterStats[part.id];
            const partQuestionCount = questionCounts[part.id] ?? 0;
            return (
              <button
                key={part.id}
                type="button"
                onClick={() => onSelectPart(part.id)}
                className="subject-card text-start h-full cursor-pointer bg-white rounded-2xl p-5 shadow-md hover:shadow-xl border border-slate-200 hover:border-qiyas-teal group flex flex-col justify-between gap-4"
              >
                <div className="flex items-start gap-3.5 w-full">
                  <div className="w-11 h-11 rounded-xl bg-qiyas-tealLight text-qiyas-teal group-hover:bg-qiyas-teal group-hover:text-white font-extrabold text-base flex items-center justify-center shrink-0 transition shadow-2xs tabular-nums">
                    {String(part.id).padStart(2, '0')}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-1.5">
                      <h3 className="font-bold text-slate-900 group-hover:text-qiyas-teal text-base leading-snug transition">
                        {isAr ? part.titleAr : part.titleEn}
                      </h3>
                      {stat && (
                        <span className="text-[11px] font-bold text-emerald-700 shrink-0 tabular-nums">
                          ✓ {t.bestScoreLabel} {stat.bestPct}%
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                      {isAr ? part.subAr : part.subEn}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs w-full gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-slate-400">{t.chapterOfLabel(part.id)}</span>
                    <span className="text-slate-300" aria-hidden="true">·</span>
                    <span className="font-bold text-qiyas-navy bg-slate-100 px-2 py-0.5 rounded-md tabular-nums">
                      {t.partQuestionCountLabel(partQuestionCount)}
                    </span>
                  </div>
                  <span className="font-bold text-qiyas-teal flex items-center gap-1 group-hover:gap-2 transition-all whitespace-nowrap shrink-0">
                    {t.practiceBtn}
                    <svg
                      className={`w-4 h-4 transform ${isAr ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 2: Comprehensive Final Exam (Part 11) */}
      {comprehensivePart && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between px-1">
            <h3 className="text-xs sm:text-sm font-extrabold tracking-wider text-amber-300">
              {t.comprehensiveSectionLabel}
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onSelectPart(comprehensivePart.id)}
            className="subject-card w-full text-start cursor-pointer bg-gradient-to-r from-qiyas-navy via-qiyas-navyLight to-qiyas-navy text-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-slate-700 group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-qiyas-navy font-extrabold text-lg flex items-center justify-center shrink-0 shadow group-hover:scale-105 transition tabular-nums">
                11
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="inline-block text-xs font-bold text-amber-300">{t.comprehensiveTopTag}</span>
                  {compStat && (
                    <span className="text-[11px] font-bold text-emerald-300 tabular-nums">
                      · ✓ {t.bestScoreLabel} {compStat.bestPct}%
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold leading-snug">
                  {isAr ? comprehensivePart.titleAr : comprehensivePart.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  {isAr ? comprehensivePart.subAr : comprehensivePart.subEn}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10">
              <span className="text-xs font-bold text-teal-200 whitespace-nowrap tabular-nums">
                {t.comprehensivePoolLabel(totalQuestionsCount)}
              </span>
              <span className="px-4 py-2.5 rounded-xl bg-qiyas-teal group-hover:bg-teal-500 text-white font-bold text-sm transition flex items-center gap-1.5 shadow whitespace-nowrap shrink-0">
                {t.comprehensiveBtn}
              </span>
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
