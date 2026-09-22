import React from 'react';
import { X, CheckCircle, Terminal, Layers, ArrowUpRight, Cpu } from 'lucide-react';
import { ProjectItem } from '../types.ts';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onStartProject: (category: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onStartProject }) => {
  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#131822]/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-container"
        className="relative w-full max-w-3xl bg-[#1A202C] border-2 border-[#3D4A63] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 mb-6 border-b border-[#3D4A63]">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#EDB96F] mb-1">
              <span>{project.code}</span>
              <span>//</span>
              <span className="text-[#9BA7B7]">{project.category}</span>
              <span>//</span>
              <span className="text-[#9BA7B7]">{project.year}</span>
            </div>
            <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F8F7F2]">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-[#EDB96F] mt-1">
              Sektör / Kapsam: {project.clientType}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#9BA7B7] hover:text-[#F8F7F2] bg-[#222B3A] border border-[#3D4A63] hover:border-[#EDB96F] transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Technical Specs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#222B3A] border border-[#3D4A63] mb-6 font-mono text-xs">
          {project.specs.map((spec, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] text-[#9BA7B7] uppercase">{spec.label}</span>
              <span className="text-xs text-[#EDB96F] font-bold mt-0.5">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Summary & Challenge */}
        <div className="space-y-5 text-sm mb-6">
          <div>
            <h4 className="font-mono text-xs text-[#EDB96F] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              Proje Özeti & İhtiyaç
            </h4>
            <p className="text-[#9BA7B7] leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#EDB96F] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Teknik Zorluk & Karşılaşılan Durum
            </h4>
            <p className="text-[#9BA7B7] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#EDB96F] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Uygulanan Mimari Çözüm
            </h4>
            <p className="text-[#F8F7F2] leading-relaxed bg-[#222B3A]/60 p-3 border border-[#3D4A63]/60">
              {project.architectureSolution}
            </p>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="mb-6">
          <h4 className="font-mono text-xs text-[#EDB96F] uppercase tracking-wider mb-3">
            Teslim Edilen Bileşenler & Modüller
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {project.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-[#9BA7B7]">
                <CheckCircle className="w-4 h-4 text-[#EDB96F] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mb-8 pt-4 border-t border-[#3D4A63]/50">
          <span className="font-mono text-[10px] text-[#9BA7B7] uppercase block mb-2">
            KULLANILAN TEKNOLOJİ YIĞINI
          </span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 bg-[#222B3A] border border-[#3D4A63] text-xs font-mono text-[#F8F7F2]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#3D4A63]">
          <span className="text-xs font-mono text-[#9BA7B7]">
            Benzer bir mimariye mi ihtiyacınız var?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#222B3A] hover:bg-[#2B3446] border border-[#3D4A63] text-xs font-mono text-[#F8F7F2]"
            >
              Kapat
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onStartProject(project.category);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2 bg-[#EDB96F] hover:bg-[#DFAB5F] text-[#2B3446] font-mono text-xs font-bold uppercase tracking-wider"
            >
              <span>Benzer Proje Başlat</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
