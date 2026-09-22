import React, { ReactNode } from 'react';

interface SectionHeaderProps {
  /** Bölüm numarası + adı, ör. "02 — Hizmetlerimiz" */
  eyebrow: string;
  title: ReactNode;
  note?: string;
}

/**
 * Tüm bölümlerde kullanılan tek başlık düzeni.
 * Kutu/border yok: hiyerarşiyi tipografi ve boşluk kurar.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, note }) => (
  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 sm:gap-6 mb-14 sm:mb-16">
    <div className="max-w-3xl min-w-0">
      <div className="flex items-center gap-2.5 mb-4">
        <span className="w-7 h-px bg-[#EDB96F]" aria-hidden="true"></span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EDB96F]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-['Syne'] text-[1.7rem] sm:text-4xl md:text-[2.75rem] font-extrabold leading-[1.2] tracking-tight text-[#F8F7F2] text-balance">
        {title}
      </h2>
    </div>

    {note && (
      <p className="text-sm text-[#9BA7B7] leading-relaxed max-w-sm md:text-right md:pb-1">
        {note}
      </p>
    )}
  </div>
);
