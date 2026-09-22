import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import { PROCESS_DATA } from '../data/studioData.ts';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section
      id="surec"
      className="relative py-24 sm:py-32 border-b border-[#3D4A63]/50 bg-[#171D27] overflow-hidden"
    >
      {/* Background System: Technical drafting lines */}
      <div className="absolute inset-0 bg-blueprint-lines opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#3D4A63]/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#EDB96F] mb-3">
              <span className="w-2 h-0.5 bg-[#EDB96F]"></span>
              <span>04 // ÇALIŞMA METODOLOJİSİ</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F2] tracking-tight">
              Öngörülebilir, şeffaf ve <br className="hidden sm:inline" />
              <span className="text-[#EDB96F]">disiplinli geliştirme süreci.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#9BA7B7] max-w-sm leading-relaxed">
            Sürpriz ek maliyetler veya ucu açık teslim tarihleri yok. Her aşamanın çıktısı ve onay kriteri baştan belirlidir.
          </div>
        </div>

        {/* CONNECTED ARCHITECTURAL TIMELINE PIPELINE */}
        <div className="mb-12">
          {/* Progress Ribbon / Node connector */}
          <div className="hidden lg:grid grid-cols-4 gap-0 border-y border-[#3D4A63] bg-[#1A202C]">
            {PROCESS_DATA.map((item, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-5 text-left border-r border-[#3D4A63] last:border-r-0 transition-all duration-200 relative ${
                    isActive
                      ? 'bg-[#2B3446] text-[#F8F7F2]'
                      : 'bg-transparent text-[#9BA7B7] hover:bg-[#222B3A] hover:text-[#F8F7F2]'
                  }`}
                >
                  {/* Top active indicator line */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#EDB96F]"></div>
                  )}

                  <div className="flex items-center justify-between font-mono text-xs mb-2">
                    <span className={`font-bold ${isActive ? 'text-[#EDB96F]' : 'text-[#9BA7B7]'}`}>
                      ADIM // {item.step}
                    </span>
                    <span className="text-[11px] text-[#9BA7B7] flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#EDB96F]" />
                      {item.duration}
                    </span>
                  </div>

                  <div className="font-['Syne'] font-bold text-base text-[#F8F7F2] mb-1">
                    {item.title}
                  </div>
                  <div className="text-[10px] font-mono text-[#EDB96F] uppercase">
                    {item.phaseLabel}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile step selector buttons */}
          <div className="flex lg:hidden overflow-x-auto gap-2 pb-3 mb-6 font-mono text-xs">
            {PROCESS_DATA.map((item, idx) => (
              <button
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`px-4 py-2 whitespace-nowrap border ${
                  activeStepIndex === idx
                    ? 'bg-[#EDB96F] text-[#2B3446] border-[#EDB96F] font-bold'
                    : 'bg-[#222B3A] text-[#9BA7B7] border-[#3D4A63]'
                }`}
              >
                {item.step}. {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* ACTIVE STAGE DEEP DIVE: Technical Audit & Deliverable Blueprint */}
        {(() => {
          const current = PROCESS_DATA[activeStepIndex];
          return (
            <div
              id="active-process-detail-panel"
              className="bg-[#1A202C] border-2 border-[#3D4A63] p-6 sm:p-10 shadow-2xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Process Description & Philosophy */}
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#EDB96F] mb-2">
                    <span className="px-2 py-0.5 bg-[#2B3446] border border-[#3D4A63] font-bold">
                      AŞAMA // {current.step}
                    </span>
                    <span>{current.phaseLabel}</span>
                    <span className="text-[#9BA7B7]">({current.duration})</span>
                  </div>

                  <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F8F7F2] mb-4">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#9BA7B7] leading-relaxed mb-6 font-normal">
                    {current.description}
                  </p>

                  <div className="p-4 bg-[#222B3A] border-l-2 border-[#EDB96F] border-y border-r border-[#3D4A63] font-mono text-xs text-[#F8F7F2]">
                    <span className="text-[#EDB96F] font-bold block mb-1">
                      MÜHENDİSLİK GÜVENCESİ:
                    </span>
                    <p className="text-[#9BA7B7] leading-relaxed">
                      {current.technicalAudit}
                    </p>
                  </div>
                </div>

                {/* Right: Concrete Deliverables Checklist */}
                <div className="lg:col-span-6 bg-[#171D27] border border-[#3D4A63] p-6 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#3D4A63] text-[11px]">
                    <span className="text-[#EDB96F] font-semibold">
                      BU AŞAMADA ALACAĞINIZ ÇIKTILAR:
                    </span>
                    <span className="text-[#9BA7B7]">DOĞRULANABİLİR</span>
                  </div>

                  <div className="space-y-3.5">
                    {current.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs">
                        <div className="w-5 h-5 bg-[#2B3446] border border-[#3D4A63] text-[#EDB96F] flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-[#F8F7F2] leading-relaxed">{d}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#3D4A63]/50 flex items-center justify-between text-[11px] text-[#9BA7B7]">
                    <span>ONAY: YAZILI & KARŞILIKLI</span>
                    <span className="text-[#EDB96F]">KESİNTİSİZ İLERLEME</span>
                  </div>
                </div>

              </div>

              {/* Navigation between steps */}
              <div className="mt-8 pt-6 border-t border-[#3D4A63]/60 flex items-center justify-between font-mono text-xs">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 bg-[#222B3A] border border-[#3D4A63] text-[#F8F7F2] hover:border-[#EDB96F] disabled:opacity-40 disabled:hover:border-[#3D4A63]"
                >
                  ← Önceki Aşama
                </button>

                <span className="text-[#9BA7B7] text-center hidden sm:inline">
                  Aşama {activeStepIndex + 1} / {PROCESS_DATA.length}
                </span>

                <button
                  type="button"
                  disabled={activeStepIndex === PROCESS_DATA.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_DATA.length - 1, prev + 1))}
                  className="px-4 py-2 bg-[#EDB96F] text-[#2B3446] font-bold hover:bg-[#DFAB5F] disabled:opacity-40"
                >
                  Sonraki Aşama →
                </button>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
