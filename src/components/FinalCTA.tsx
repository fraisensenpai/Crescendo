import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData.ts';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => (
  <section id="final-cta-section" className="relative py-20 sm:py-28 bg-[#EDB96F] text-[#2B3446]">
    <div
      className="absolute inset-0 opacity-10 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, #2B3446 1px, transparent 1px),
          linear-gradient(to bottom, #2B3446 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px'
      }}
      aria-hidden="true"
    ></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

        <div className="lg:col-span-8 min-w-0">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-7 h-px bg-[#2B3446]" aria-hidden="true"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2B3446]">
              {STUDIO_CONFIG.status}
            </span>
          </div>

          <h2 className="font-['Syne'] text-[1.7rem] sm:text-4xl md:text-[2.75rem] font-extrabold text-[#2B3446] tracking-tight leading-[1.14] mb-4 text-balance">
            Fikrinizi çalışan bir ürüne birlikte dönüştürelim.
          </h2>

          <p className="text-base sm:text-lg text-[#2B3446]/85 max-w-2xl leading-relaxed">
            İhtiyacınızı anlatın; kapsamı, süreyi ve bütçeyi netleştirip {STUDIO_CONFIG.responseSLA} ile dönelim.
          </p>
        </div>

        <div className="lg:col-span-4 min-w-0 flex flex-col items-start lg:items-end gap-4">
          <button
            type="button"
            id="final-cta-kickoff-button"
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2B3446] hover:bg-[#1A202C] text-[#F8F7F2] text-sm font-bold tracking-wide transition-colors w-full sm:w-auto"
          >
            <span>Projenizi Konuşalım</span>
            <ArrowUpRight className="w-4 h-4 text-[#EDB96F]" aria-hidden="true" />
          </button>

          <p className="text-sm text-[#2B3446]">
            veya doğrudan yazın:{' '}
            <a
              href={`mailto:${STUDIO_CONFIG.email}`}
              className="font-semibold underline hover:opacity-80 transition-opacity break-all"
            >
              {STUDIO_CONFIG.email}
            </a>
          </p>
        </div>

      </div>
    </div>
  </section>
);
