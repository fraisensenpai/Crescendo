import React, { useState } from 'react';
import { Terminal, Cpu, Database, Layout, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { TECH_STACK_DATA } from '../data/studioData.ts';
import { TechnologyItem } from '../types.ts';

export const Technology: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechnologyItem>(TECH_STACK_DATA[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('Hepsi');

  const categories = ['Hepsi', 'Frontend', 'Backend & Sistem', 'Veri & Bulut', 'Altyapı & Derleme'];

  const filteredTech = selectedCategory === 'Hepsi'
    ? TECH_STACK_DATA
    : TECH_STACK_DATA.filter((t) => t.category === selectedCategory);

  return (
    <section
      id="teknoloji"
      className="relative py-24 sm:py-32 border-b border-[#3D4A63]/50 bg-[#171D27] overflow-hidden"
    >
      {/* Background: Fine drafting grid */}
      <div className="absolute inset-0 bg-tech-grid-dense opacity-25 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#3D4A63]/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#EDB96F] mb-3">
              <span className="w-2 h-0.5 bg-[#EDB96F]"></span>
              <span>06 // TEKNOLOJİ EKOSİSTEMİ</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F2] tracking-tight">
              Ezbere seçimler değil; <br className="hidden sm:inline" />
              <span className="text-[#EDB96F]">ihtiyaca uygun doğru araçlar.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#9BA7B7] max-w-sm leading-relaxed">
            Her projeye aynı yığını zorlamıyoruz. Performans, bakım kolaylığı ve bütçe hedeflerinize en uygun teknolojik omurgayı kuruyoruz.
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 border transition-all ${
                selectedCategory === cat
                  ? 'bg-[#EDB96F] text-[#2B3446] border-[#EDB96F] font-bold'
                  : 'bg-[#1A202C] text-[#9BA7B7] border-[#3D4A63] hover:text-[#F8F7F2] hover:border-[#EDB96F]/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* VISUAL TECHNICAL ECOSYSTEM: Grid System Left, Deep Dive Spec Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Technology Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
            {filteredTech.map((tech) => {
              const isSelected = selectedTech.name === tech.name;
              return (
                <div
                  key={tech.name}
                  onClick={() => setSelectedTech(tech)}
                  className={`cursor-pointer p-4 border transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#2B3446] border-[#EDB96F] text-[#F8F7F2] shadow-lg translate-y-[-2px]'
                      : 'bg-[#1A202C] border-[#3D4A63] text-[#9BA7B7] hover:border-[#EDB96F]/60 hover:text-[#F8F7F2]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-['Syne'] font-bold text-[#F8F7F2]">
                      {tech.name}
                    </span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#171D27] border border-[#3D4A63] text-[#EDB96F]">
                      {tech.category}
                    </span>
                  </div>

                  <p className="text-[11px] text-[#9BA7B7] font-sans line-clamp-2 mb-2">
                    {tech.role}
                  </p>

                  <div className="text-[10px] text-[#EDB96F] flex items-center justify-between pt-2 border-t border-[#3D4A63]/50">
                    <span>DETAYI GÖR</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Technical Inspector Panel */}
          <div className="lg:col-span-5 bg-[#1A202C] border-2 border-[#3D4A63] p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#3D4A63] font-mono text-xs">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#EDB96F]" />
                <span className="text-[#F8F7F2] font-semibold">
                  TEKNİK DENETÇİ // SPEC_INSPECTOR
                </span>
              </div>
              <span className="text-[10px] text-[#EDB96F]">AKTİF SEÇİM</span>
            </div>

            <div className="mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-['Syne'] text-3xl font-extrabold text-[#F8F7F2]">
                  {selectedTech.name}
                </h3>
                <span className="font-mono text-xs text-[#EDB96F]">
                  {selectedTech.category}
                </span>
              </div>
              <p className="font-mono text-xs text-[#9BA7B7] border-b border-[#3D4A63]/50 pb-3">
                Rol: {selectedTech.role}
              </p>
            </div>

            <div className="space-y-4 text-xs font-mono mb-6">
              <div className="p-3 bg-[#222B3A] border border-[#3D4A63]">
                <span className="text-[10px] text-[#EDB96F] block mb-1">
                  MÜHENDİSLİK AVANTAJLARI
                </span>
                <p className="text-[#F8F7F2] font-sans text-xs leading-relaxed">
                  {selectedTech.strengths}
                </p>
              </div>

              <div className="p-3 bg-[#171D27] border border-[#3D4A63]">
                <span className="text-[10px] text-[#EDB96F] block mb-1">
                  CRESCENDO KULLANIM ALANI
                </span>
                <p className="text-[#9BA7B7] font-sans text-xs leading-relaxed">
                  {selectedTech.primaryUse}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#3D4A63] flex items-center justify-between font-mono text-[10px] text-[#9BA7B7]">
              <span>GÜNCEL STABİL SÜRÜM</span>
              <span className="text-[#EDB96F]">SIFIR DEPRECATION RİSKİ</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
