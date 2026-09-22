import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { PROCESS_DATA } from '../data/studioData.ts';
import { SectionHeader } from './SectionHeader.tsx';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const current = PROCESS_DATA[activeStepIndex];

  return (
    <section id="surec" className="relative py-24 sm:py-32 bg-[#171D27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="04 — Çalışma şeklimiz"
          title={
            <>
              Sürpriz maliyet yok, <span className="text-[#EDB96F]">hızlı ilerleme.</span>
            </>
          }
          note="Web siteleri çoğu zaman 24 saat içinde yayına alınır; kapsam büyüdükçe süre 1 haftaya çıkar. Her aşamanın çıktısı ve onay kriteri baştan bellidir."
        />

        {/* Aşama seçimi */}
        <div className="mb-10">
          <div className="hidden lg:grid grid-cols-4 border-y border-[#3D4A63]">
            {PROCESS_DATA.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 text-left border-r border-[#3D4A63] last:border-r-0 transition-colors relative ${
                    isActive
                      ? 'bg-[#1A202C] text-[#F8F7F2]'
                      : 'text-[#9BA7B7] hover:bg-[#1A202C]/60 hover:text-[#F8F7F2]'
                  }`}
                >
                  {isActive && (
                    <span className="absolute top-0 left-0 right-0 h-0.5 bg-[#EDB96F]" aria-hidden="true"></span>
                  )}

                  <span className="flex items-center justify-between gap-3 mb-2 text-xs">
                    <span className={`font-mono ${isActive ? 'text-[#EDB96F] font-semibold' : ''}`}>
                      {item.step}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-[#9BA7B7]">
                      <Clock className="w-3 h-3 text-[#EDB96F]" aria-hidden="true" />
                      {item.duration}
                    </span>
                  </span>

                  <span className="block font-['Syne'] font-bold text-base text-[#F8F7F2] mb-1">
                    {item.title}
                  </span>
                  <span className="block text-[11px] uppercase tracking-[0.14em] text-[#EDB96F]">
                    {item.phaseLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobil: yatay kaydırma yok, düğmeler alt alta sarılır */}
          <div className="grid lg:hidden grid-cols-2 gap-2">
            {PROCESS_DATA.map((item, idx) => (
              <button
                key={item.step}
                type="button"
                aria-pressed={activeStepIndex === idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`px-3 py-3 text-left text-xs leading-snug border transition-colors ${
                  activeStepIndex === idx
                    ? 'bg-[#EDB96F] text-[#2B3446] border-[#EDB96F] font-semibold'
                    : 'bg-[#1A202C] text-[#9BA7B7] border-[#3D4A63]'
                }`}
              >
                {item.step}. {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* Seçili aşama */}
        <div
          id="active-process-detail-panel"
          className="bg-[#1A202C] border border-[#3D4A63] p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            <div className="lg:col-span-7 min-w-0">
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#9BA7B7] mb-3">
                <span className="px-2 py-0.5 bg-[#2B3446] border border-[#3D4A63] font-semibold text-[#EDB96F]">
                  {current.step}
                </span>
                <span className="uppercase tracking-[0.14em] text-[#EDB96F]">{current.phaseLabel}</span>
                <span>• {current.duration}</span>
              </div>

              <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F8F7F2] mb-4">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-[#9BA7B7] leading-relaxed mb-7">
                {current.description}
              </p>

              <div className="border-l-2 border-[#EDB96F]/60 pl-5">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EDB96F] block mb-2">
                  Neden önemli?
                </span>
                <p className="text-sm text-[#9BA7B7] leading-relaxed">{current.note}</p>
              </div>
            </div>

            <div className="lg:col-span-5 min-w-0">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9BA7B7] block mb-5">
                Bu aşamada elinizde olacaklar
              </span>

              <ul className="space-y-3.5">
                {current.deliverables.map((deliverable) => (
                  <li key={deliverable} className="flex items-start gap-3 text-sm">
                    <span className="w-5 h-5 bg-[#2B3446] border border-[#3D4A63] text-[#EDB96F] flex items-center justify-center shrink-0 mt-0.5 text-[11px]">
                      ✓
                    </span>
                    <span className="text-[#F8F7F2] leading-relaxed">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="mt-10 pt-6 border-t border-[#3D4A63]/60 flex items-center justify-between gap-4">
            <button
              type="button"
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="px-4 py-2 bg-[#222B3A] border border-[#3D4A63] text-sm text-[#F8F7F2] hover:border-[#EDB96F] disabled:opacity-40 disabled:hover:border-[#3D4A63] transition-colors"
            >
              ← Önceki aşama
            </button>

            <span className="text-xs text-[#9BA7B7] text-center hidden sm:inline">
              Aşama {activeStepIndex + 1} / {PROCESS_DATA.length}
            </span>

            <button
              type="button"
              disabled={activeStepIndex === PROCESS_DATA.length - 1}
              onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_DATA.length - 1, prev + 1))}
              className="px-4 py-2 bg-[#EDB96F] text-[#2B3446] text-sm font-semibold hover:bg-[#DFAB5F] disabled:opacity-40 transition-colors"
            >
              Sonraki aşama →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
