import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/studioData.ts';
import { ProjectItem } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';

interface ProjectsProps {
  onStartProject: (category: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onStartProject }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featured = PROJECTS_DATA[0];
  const secondaryA = PROJECTS_DATA[1];
  const secondaryB = PROJECTS_DATA[2];

  return (
    <section
      id="projeler"
      className="relative py-24 sm:py-32 border-b border-[#3D4A63]/50 bg-[#141A23] overflow-hidden"
    >
      {/* Background: Blueprint dot matrix */}
      <div className="absolute inset-0 bg-dot-matrix opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#3D4A63]/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#EDB96F] mb-3">
              <span className="w-2 h-0.5 bg-[#EDB96F]"></span>
              <span>03 // SEÇİLİ MİMARİLER & VAKA ÇALIŞMALARI</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F2] tracking-tight">
              Örnek proje mimarileri <br className="hidden sm:inline" />
              <span className="text-[#EDB96F]">& teknik vaka yapıları.</span>
            </h2>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-[#9BA7B7] max-w-sm leading-relaxed">
            <span className="text-[#EDB96F]">Not:</span> Gerçek teknik mimari şablonlarımızı ve problem çözme yaklaşımımızı yansıtan vaka modelleri.
          </div>
        </div>

        {/* ASYMMETRIC GALLERY: 1 Large Featured Showcase + 2 Structured Modules */}
        <div className="space-y-12">

          {/* LARGE FEATURED PROJECT 01 */}
          <div
            id="featured-project-01"
            className="bg-[#1A202C] border-2 border-[#3D4A63] hover:border-[#EDB96F]/70 transition-all duration-300 p-6 sm:p-10 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6 flex flex-col">
                <div className="flex items-center gap-3 font-mono text-xs text-[#EDB96F] mb-2">
                  <span className="px-2 py-0.5 bg-[#2B3446] border border-[#3D4A63] font-bold">
                    {featured.code}
                  </span>
                  <span>{featured.category}</span>
                  <span className="text-[#9BA7B7]">• {featured.year}</span>
                </div>

                <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F8F7F2] mb-3">
                  {featured.title}
                </h3>

                <p className="text-xs font-mono text-[#9BA7B7] mb-4">
                  Sektör: <span className="text-[#F8F7F2]">{featured.clientType}</span>
                </p>

                <p className="text-sm text-[#9BA7B7] leading-relaxed mb-6">
                  {featured.summary}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 bg-[#222B3A] border border-[#3D4A63] mb-6 font-mono text-xs">
                  {featured.specs.map((s, idx) => (
                    <div key={idx}>
                      <span className="text-[10px] text-[#9BA7B7] block">{s.label}</span>
                      <span className="text-xs text-[#EDB96F] font-bold">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Stack & Action */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featured)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#EDB96F] hover:bg-[#DFAB5F] text-[#2B3446] font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Teknik Detayları İncele</span>
                    <Eye className="w-4 h-4" />
                  </button>

                  <div className="flex flex-wrap gap-1.5">
                    {featured.stack.slice(0, 3).map((st) => (
                      <span
                        key={st}
                        className="px-2 py-1 bg-[#222B3A] border border-[#3D4A63] font-mono text-[11px] text-[#F8F7F2]"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Technical Blueprint Visual Mockup */}
              <div className="lg:col-span-6 bg-[#171D27] border border-[#3D4A63] p-5 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#3D4A63] text-[11px] text-[#9BA7B7]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#EDB96F]"></span>
                    MİMARİ DİYAGRAM: EDGE SSR + SPEED OPTIMIZATION
                  </span>
                  <span>99/100 LCP</span>
                </div>

                {/* SVG Visual Schema */}
                <div className="p-4 bg-[#222B3A]/80 border border-[#3D4A63]/80 space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#F8F7F2] font-semibold">1. Kullanıcı İsteği [Global CDN]</span>
                    <span className="text-[#EDB96F]">~ 12ms</span>
                  </div>
                  <div className="w-full bg-[#171D27] h-1.5 overflow-hidden">
                    <div className="bg-[#EDB96F] h-full w-[95%]"></div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-[#F8F7F2] font-semibold">2. Edge Önbellek & Statik Çözümleme</span>
                    <span className="text-[#EDB96F]">0.08s</span>
                  </div>
                  <div className="w-full bg-[#171D27] h-1.5 overflow-hidden">
                    <div className="bg-[#EDB96F] h-full w-[80%]"></div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-1">
                    <span className="text-[#F8F7F2] font-semibold">3. Vektörel Katalog & Teknik Çizimler</span>
                    <span className="text-[#EDB96F]">Anında Render</span>
                  </div>
                  <div className="w-full bg-[#171D27] h-1.5 overflow-hidden">
                    <div className="bg-[#F8F7F2] h-full w-[100%]"></div>
                  </div>
                </div>

                <div className="mt-4 flex justify-between text-[10px] text-[#9BA7B7]">
                  <span>DURUM: PROD CANLI</span>
                  <span className="text-[#EDB96F]">ÖZEL GELİŞTİRME</span>
                </div>
              </div>

            </div>
          </div>

          {/* TWO ASYMMETRIC SECONDARY PROJECTS (02 & 03) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PROJECT 02 */}
            <div
              id="project-case-02"
              className="bg-[#1A202C] border border-[#3D4A63] hover:border-[#EDB96F] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#EDB96F] mb-3">
                  <span className="px-2 py-0.5 bg-[#2B3446] border border-[#3D4A63] font-bold">
                    {secondaryA.code}
                  </span>
                  <span className="text-[#9BA7B7]">{secondaryA.category}</span>
                </div>

                <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#F8F7F2] mb-2 group-hover:text-[#EDB96F] transition-colors">
                  {secondaryA.title}
                </h3>

                <p className="text-xs font-mono text-[#EDB96F]/90 mb-3">
                  {secondaryA.clientType}
                </p>

                <p className="text-xs sm:text-sm text-[#9BA7B7] leading-relaxed mb-6">
                  {secondaryA.summary}
                </p>

                {/* Technical blueprint block */}
                <div className="bg-[#171D27] p-3 border border-[#3D4A63] mb-6 font-mono text-xs space-y-1.5">
                  <div className="text-[10px] text-[#EDB96F]">OPERASYONEL MİMARİ</div>
                  <div className="text-[#F8F7F2] text-[11px] font-semibold">
                    Barkod Entegrasyonu + Otomatik Depo Şeması
                  </div>
                  <div className="text-[#9BA7B7] text-[11px]">
                    API Yanıt Süresi: &lt; 45ms • PostgreSQL ACID
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#3D4A63]/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(secondaryA)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#EDB96F] hover:text-[#F8F7F2] font-semibold uppercase tracking-wider"
                >
                  <span>Mimariyi İncele</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex gap-1">
                  {secondaryA.stack.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 bg-[#222B3A] border border-[#3D4A63] text-[10px] font-mono text-[#9BA7B7]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* PROJECT 03 */}
            <div
              id="project-case-03"
              className="bg-[#1A202C] border border-[#3D4A63] hover:border-[#EDB96F] transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-[#EDB96F] mb-3">
                  <span className="px-2 py-0.5 bg-[#2B3446] border border-[#3D4A63] font-bold">
                    {secondaryB.code}
                  </span>
                  <span className="text-[#9BA7B7]">{secondaryB.category}</span>
                </div>

                <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#F8F7F2] mb-2 group-hover:text-[#EDB96F] transition-colors">
                  {secondaryB.title}
                </h3>

                <p className="text-xs font-mono text-[#EDB96F]/90 mb-3">
                  {secondaryB.clientType}
                </p>

                <p className="text-xs sm:text-sm text-[#9BA7B7] leading-relaxed mb-6">
                  {secondaryB.summary}
                </p>

                {/* Technical blueprint block */}
                <div className="bg-[#171D27] p-3 border border-[#3D4A63] mb-6 font-mono text-xs space-y-1.5">
                  <div className="text-[10px] text-[#EDB96F]">SAAS VERİ İZOLASYONU</div>
                  <div className="text-[#F8F7F2] text-[11px] font-semibold">
                    Supabase Row-Level Security (RLS) + Anlık Finans Grafikleri
                  </div>
                  <div className="text-[#9BA7B7] text-[11px]">
                    Güvenlik: 2FA Entegre • Vektörel D3 Motoru
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#3D4A63]/60 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(secondaryB)}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[#EDB96F] hover:text-[#F8F7F2] font-semibold uppercase tracking-wider"
                >
                  <span>Mimariyi İncele</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex gap-1">
                  {secondaryB.stack.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 bg-[#222B3A] border border-[#3D4A63] text-[10px] font-mono text-[#9BA7B7]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={onStartProject}
      />
    </section>
  );
};
