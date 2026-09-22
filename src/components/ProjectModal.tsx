import React, { useEffect, useRef } from 'react';
import { X, Check, AlertTriangle, Lightbulb, Layers, ArrowUpRight } from 'lucide-react';
import { ProjectItem } from '../types.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartProject: (category: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onStartProject }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Escape ile kapanma + açıldığında odağın panele taşınması
  useEffect(() => {
    if (!project) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKey);
    dialogRef.current?.focus();

    return () => window.removeEventListener('keydown', handleKey);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131822]/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-modal-title"
        tabIndex={-1}
        id="project-detail-modal-container"
        className="relative w-full max-w-3xl bg-[#1A202C] border border-[#3D4A63] p-6 sm:p-8 max-h-[90vh] overflow-y-auto focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Başlık */}
        <div className="flex items-start justify-between gap-6 pb-4 mb-6 border-b border-[#3D4A63]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#9BA7B7] mb-2">
              <span className="text-[#EDB96F] font-semibold">{project.code}</span>
              <span aria-hidden="true">•</span>
              <span>{project.category}</span>
              {project.year && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>{project.year}</span>
                </>
              )}
            </div>

            <h3
              id="project-detail-modal-title"
              className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F8F7F2]"
            >
              {project.title}
            </h3>

            <p className="text-sm text-[#9BA7B7] mt-1.5 leading-relaxed">
              Kimin için: <span className="text-[#F8F7F2]">{project.clientType}</span>
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#9BA7B7] hover:text-[#F8F7F2] bg-[#222B3A] border border-[#3D4A63] hover:border-[#EDB96F] transition-colors shrink-0"
            aria-label="Detay penceresini kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Öne çıkan bilgiler */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#222B3A] border border-[#3D4A63] mb-8">
          {project.specs.map((spec) => (
            <div key={spec.label} className="flex flex-col min-w-0">
              <span className="text-[10px] text-[#9BA7B7] uppercase tracking-wide mb-1">{spec.label}</span>
              <span className="text-xs text-[#EDB96F] font-semibold leading-snug">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* PROBLEM → ÇÖZÜM */}
        <div className="space-y-7 text-sm mb-8">
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EDB96F] mb-2 flex items-center gap-2">
              <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" />
              Problem
            </h4>
            <p className="text-[#9BA7B7] leading-relaxed">{project.challenge}</p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EDB96F] mb-2 flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5" aria-hidden="true" />
              Ne yaptık
            </h4>
            <p className="text-[#F8F7F2] leading-relaxed bg-[#222B3A]/60 p-4 border-l-2 border-[#EDB96F]/70">
              {project.architectureSolution}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EDB96F] mb-2 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              Kapsam özeti
            </h4>
            <p className="text-[#9BA7B7] leading-relaxed">{project.summary}</p>
          </div>
        </div>

        {/* Kapsam */}
        <div className="mb-8">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#EDB96F] mb-4">
            Projede neler var
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
            {project.deliverables.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-[#9BA7B7] leading-relaxed">
                <Check className="w-4 h-4 text-[#EDB96F] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Teknolojiler */}
        {project.stack.length > 0 && (
          <div className="mb-8 pt-6 border-t border-[#3D4A63]/50">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#9BA7B7] mb-3">
              Kullanılan teknolojiler
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-[#222B3A] border border-[#3D4A63] text-xs text-[#F8F7F2]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Eylemler */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#3D4A63]">
          <span className="text-sm text-[#9BA7B7]">Benzer bir iş mi planlıyorsunuz?</span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-[#222B3A] hover:bg-[#2B3446] border border-[#3D4A63] text-sm text-[#F8F7F2] transition-colors"
            >
              Kapat
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onStartProject(project.category);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#EDB96F] hover:bg-[#DFAB5F] text-[#2B3446] text-sm font-bold tracking-wide transition-colors"
            >
              <span>Benzer Bir İş İçin Yazın</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
