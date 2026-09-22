import React, { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/studioData.ts';
import { ProjectItem } from '../types.ts';
import { ProjectModal } from './ProjectModal.tsx';
import { SectionHeader } from './SectionHeader.tsx';

interface ProjectsProps {
  onStartProject: (category: string) => void;
}

/** Büyük (featured) kart dışındaki proje kartları — aynı düzeni tek yerden üretir. */
const ProjectCard: React.FC<{ id: string; project: ProjectItem; onOpen: () => void }> = ({
  id,
  project,
  onOpen,
}) => {
  const preview = project.preview?.kind === 'module' ? project.preview : null;

  return (
    <article
      id={id}
      className="bg-[#1A202C] border border-[#3D4A63] hover:border-[#EDB96F] transition-colors duration-300 p-6 sm:p-8 flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between gap-4 text-xs mb-3">
          <span className="px-2 py-0.5 bg-[#2B3446] border border-[#3D4A63] font-mono font-semibold text-[#EDB96F]">
            {project.code}
          </span>
          <span className="text-[#9BA7B7] text-right">{project.category}</span>
        </div>

        <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#F8F7F2] mb-2 group-hover:text-[#EDB96F] transition-colors">
          {project.title}
        </h3>

        <p className="text-xs text-[#EDB96F]/90 mb-3 leading-relaxed">{project.clientType}</p>

        <p className="text-sm text-[#9BA7B7] leading-relaxed mb-6">{project.summary}</p>

        {/* Problemin nasıl çözüldüğünü gösteren kısa özet */}
        {preview && (
          <div className="bg-[#171D27] p-4 border border-[#3D4A63]/70 mb-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#EDB96F] mb-2">
              {preview.label}
            </div>
            <p className="text-sm text-[#F8F7F2] leading-snug mb-1.5">{preview.headline}</p>
            <p className="text-xs text-[#9BA7B7] leading-relaxed">{preview.note}</p>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-[#3D4A63]/60 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EDB96F] hover:text-[#F8F7F2] transition-colors"
        >
          <span>Projeyi İncele</span>
          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>

        {project.stack.length > 0 && (
          <div className="flex gap-1">
            {project.stack.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 bg-[#222B3A] border border-[#3D4A63] text-[10px] text-[#9BA7B7]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export const Projects: React.FC<ProjectsProps> = ({ onStartProject }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featured = PROJECTS_DATA[0];
  const secondaryProjects = PROJECTS_DATA.slice(1);

  const featuredPreview = featured.preview?.kind === 'schematic' ? featured.preview : null;

  return (
    <section id="projeler" className="relative py-24 sm:py-32 bg-[#141A23]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="03 — Projeler"
          title={
            <>
              Geliştirdiğimiz ürünler ve <span className="text-[#EDB96F]">teknik detayları.</span>
            </>
          }
          note="Kendi ekibimizle geliştirdiğimiz gerçek ürünlerden seçkiler: neye ihtiyaç vardı, ne kurduk, hangi araçlarla."
        />

        <div className="space-y-12">

          {/* ÖNE ÇIKAN PROJE */}
          <article
            id="featured-project-01"
            className="bg-[#1A202C] border border-[#3D4A63] hover:border-[#EDB96F]/70 transition-colors duration-300 p-6 sm:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Sol: Proje anlatımı */}
              <div className="lg:col-span-6 min-w-0 flex flex-col">
                <div className="flex flex-wrap items-center gap-3 text-xs mb-3">
                  <span className="px-2 py-0.5 bg-[#2B3446] border border-[#3D4A63] font-mono font-semibold text-[#EDB96F]">
                    {featured.code}
                  </span>
                  <span className="text-[#EDB96F]">{featured.category}</span>
                  {featured.year && <span className="text-[#9BA7B7]">• {featured.year}</span>}
                </div>

                <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F8F7F2] mb-3">
                  {featured.title}
                </h3>

                <p className="text-xs text-[#9BA7B7] mb-4 leading-relaxed">
                  Kimin için: <span className="text-[#F8F7F2]">{featured.clientType}</span>
                </p>

                <p className="text-sm text-[#9BA7B7] leading-relaxed mb-6">{featured.summary}</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#222B3A] border border-[#3D4A63] mb-6">
                  {featured.specs.map((spec) => (
                    <div key={spec.label} className="min-w-0">
                      <span className="text-[10px] text-[#9BA7B7] uppercase tracking-wide block mb-0.5">
                        {spec.label}
                      </span>
                      <span className="text-xs text-[#EDB96F] font-semibold leading-snug block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featured)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#EDB96F] hover:bg-[#DFAB5F] text-[#2B3446] text-xs font-bold tracking-wide transition-colors"
                  >
                    <span>Projeyi İncele</span>
                    <Eye className="w-4 h-4" aria-hidden="true" />
                  </button>

                  {featured.stack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {featured.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-[#222B3A] border border-[#3D4A63] text-[11px] text-[#F8F7F2]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Sağ: Ürün akışı önizlemesi */}
              {featuredPreview && (
                <div className="lg:col-span-6 min-w-0 bg-[#171D27] border border-[#3D4A63] p-5">
                  <div className="flex items-center justify-between gap-4 pb-3 mb-4 border-b border-[#3D4A63] font-mono text-[11px] text-[#9BA7B7]">
                    <span className="flex items-center gap-2 min-w-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EDB96F] shrink-0" aria-hidden="true"></span>
                      <span className="truncate">{featuredPreview.headerLabel}</span>
                    </span>
                    <span className="shrink-0 text-[#EDB96F]">{featuredPreview.headerBadge}</span>
                  </div>

                  <div className="p-4 bg-[#222B3A]/80 border border-[#3D4A63]/80 space-y-3.5">
                    {featuredPreview.rows.map((row, idx) => (
                      <div key={row.label}>
                        <div className="flex items-center justify-between gap-3 text-xs">
                          <span className="text-[#F8F7F2] font-medium">{row.label}</span>
                          <span className="text-[#EDB96F] font-mono shrink-0">{row.value}</span>
                        </div>
                        <div className="w-full bg-[#171D27] h-1 overflow-hidden mt-2">
                          <div
                            className={
                              idx === featuredPreview.rows.length - 1
                                ? 'bg-[#F8F7F2] h-full'
                                : 'bg-[#EDB96F] h-full'
                            }
                            style={{ width: `${row.width}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#3D4A63]/60 flex justify-between gap-3 text-[11px] text-[#9BA7B7]">
                    <span>{featuredPreview.footerLeft}</span>
                    <span className="text-[#EDB96F] text-right">{featuredPreview.footerRight}</span>
                  </div>
                </div>
              )}

            </div>
          </article>

          {/* DİĞER PROJELER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                id={`project-case-0${index + 2}`}
                project={project}
                onOpen={() => setSelectedProject(project)}
              />
            ))}
          </div>

        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={onStartProject}
      />
    </section>
  );
};
