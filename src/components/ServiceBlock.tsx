import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { ServiceItem } from '../types.ts';

interface ServiceBlockProps {
  service: ServiceItem;
  ctaLabel: string;
  onSelect: () => void;
  reversed?: boolean;
}

export const ServiceBlock: React.FC<ServiceBlockProps> = ({
  service,
  ctaLabel,
  onSelect,
  reversed = false,
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
    {/* Anlatım */}
    <div className={`lg:col-span-7 min-w-0 ${reversed ? 'lg:order-2' : ''}`}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EDB96F] block mb-3">
        {service.code}
      </span>

      <h3 className="font-['Syne'] text-2xl sm:text-[1.75rem] font-bold text-[#F8F7F2] mb-3 leading-snug text-balance">
        {service.title}
      </h3>

      <p className="text-base sm:text-lg text-[#EDB96F] font-medium mb-4 leading-relaxed">
        {service.tagline}
      </p>

      <p className="text-sm sm:text-[0.95rem] text-[#9BA7B7] leading-relaxed mb-7">
        {service.description}
      </p>

      <ul className="space-y-2.5 mb-8">
        {service.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3 text-sm text-[#F8F7F2]/90 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EDB96F] mt-2 shrink-0" aria-hidden="true"></span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
        <button
          type="button"
          onClick={onSelect}
          className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#EDB96F]/60 text-[#EDB96F] hover:bg-[#EDB96F] hover:text-[#2B3446] hover:border-[#EDB96F] text-xs font-semibold tracking-wide transition-colors"
        >
          <span>{ctaLabel}</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>

        <div className="flex flex-wrap gap-1.5">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-[#222B3A]/70 border border-[#3D4A63]/60 text-[11px] text-[#9BA7B7]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Bu hizmette somut olarak ne teslim ediliyor */}
    <div className={`lg:col-span-5 min-w-0 w-full ${reversed ? 'lg:order-1' : ''}`}>
      <div className="border-l-2 border-[#EDB96F]/60 pl-6 sm:pl-7">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9BA7B7] block mb-5">
          Bu hizmetin çıktıları
        </span>
        <ul className="space-y-4">
          {service.deliverables.map((deliverable) => (
            <li key={deliverable} className="flex gap-3 text-sm text-[#F8F7F2] leading-relaxed">
              <Check className="w-4 h-4 text-[#EDB96F] shrink-0 mt-0.5" aria-hidden="true" />
              <span>{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
