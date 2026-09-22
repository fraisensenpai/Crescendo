import React, { useState } from 'react';
import { TECH_STACK_DATA } from '../data/studioData.ts';
import { TechnologyItem } from '../types.ts';
import { SectionHeader } from './SectionHeader.tsx';

const CATEGORIES = ['Hepsi', 'Frontend', 'Backend & Sistem', 'Veri & Bulut', 'Altyapı & Derleme'] as const;

export const Technology: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechnologyItem>(TECH_STACK_DATA[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');

  const filteredTech =
    selectedCategory === 'Hepsi'
      ? TECH_STACK_DATA
      : TECH_STACK_DATA.filter((tech) => tech.category === selectedCategory);

  return (
    <section id="teknoloji" className="relative py-24 sm:py-32 bg-[#171D27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="06 — Teknolojiler"
          title={
            <>
              Ezber değil, <span className="text-[#EDB96F]">ihtiyaca uygun araç seçimi.</span>
            </>
          }
          note="Her projeye aynı teknoloji yığınını zorlamıyoruz. Aracı, bakımı kolay ve işinize uygun olduğu için seçiyoruz."
        />

        {/* Kategori filtresi */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Teknoloji kategorileri">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 text-xs border transition-colors ${
                  isSelected
                    ? 'bg-[#EDB96F] text-[#2B3446] border-[#EDB96F] font-semibold'
                    : 'bg-[#1A202C] text-[#9BA7B7] border-[#3D4A63] hover:text-[#F8F7F2] hover:border-[#EDB96F]/50'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Teknoloji listesi */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredTech.map((tech) => {
              const isSelected = selectedTech.name === tech.name;
              return (
                <button
                  key={tech.name}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedTech(tech)}
                  className={`text-left p-4 border transition-colors ${
                    isSelected
                      ? 'bg-[#2B3446] border-[#EDB96F]'
                      : 'bg-[#1A202C] border-[#3D4A63] hover:border-[#EDB96F]/60'
                  }`}
                >
                  <span className="flex items-center justify-between gap-3 mb-2">
                    <span className="font-['Syne'] font-bold text-base text-[#F8F7F2]">
                      {tech.name}
                    </span>
                    <span className="font-mono text-[10px] px-1.5 py-0.5 bg-[#171D27] border border-[#3D4A63] text-[#EDB96F] shrink-0">
                      {tech.category}
                    </span>
                  </span>

                  <span className="block text-xs text-[#9BA7B7] leading-relaxed">
                    {tech.role}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Seçili teknolojinin detayı */}
          <div className="lg:col-span-5 min-w-0 bg-[#1A202C] border border-[#3D4A63] p-6 sm:p-7">
            <h3 className="font-['Syne'] text-2xl sm:text-3xl font-extrabold text-[#F8F7F2] mb-1.5">
              {selectedTech.name}
            </h3>
            <p className="text-sm text-[#EDB96F] mb-6">{selectedTech.role}</p>

            <div className="border-l-2 border-[#EDB96F]/60 pl-5 mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9BA7B7] block mb-2">
                Neden tercih ediyoruz
              </span>
              <p className="text-sm text-[#F8F7F2] leading-relaxed">{selectedTech.strengths}</p>
            </div>

            <div className="border-l-2 border-[#3D4A63] pl-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9BA7B7] block mb-2">
                Hangi işlerde kullanıyoruz
              </span>
              <p className="text-sm text-[#9BA7B7] leading-relaxed">{selectedTech.primaryUse}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
