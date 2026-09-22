import React from 'react';
import { ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData.ts';
import brandLogo from '../../C.png';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="studio-footer"
      className="relative bg-[#10141C] border-t-2 border-[#3D4A63] pt-16 pb-12 text-[#9BA7B7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tier: Brand Identity & Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3D4A63]/60">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={brandLogo}
                alt="Crescendo Software logosu"
                width={32}
                height={32}
                className="w-8 h-8 object-cover border border-[#3D4A63]"
              />
              <span className="font-['Syne'] font-extrabold text-xl tracking-tight text-[#F8F7F2]">
                CRESCENDO
              </span>
            </div>

            <p className="text-sm text-[#9BA7B7] max-w-sm mb-6 leading-relaxed font-sans">
              Crescendo Software; modern web siteleri, özel yazılımlar ve dijital ürünler geliştiren bağımsız bir yazılım stüdyosudur.
            </p>

            <div className="font-mono text-xs text-[#EDB96F] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EDB96F]"></span>
              <span>{STUDIO_CONFIG.email}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-[#F8F7F2] uppercase tracking-wider block mb-4 font-semibold">
              Gezinme
            </span>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a href="#hizmetler" className="hover:text-[#EDB96F] transition-colors">
                  01. Hizmetlerimiz
                </a>
              </li>
              <li>
                <a href="#projeler" className="hover:text-[#EDB96F] transition-colors">
                  02. Örnek Projeler
                </a>
              </li>
              <li>
                <a href="#surec" className="hover:text-[#EDB96F] transition-colors">
                  03. Çalışma Metodolojisi
                </a>
              </li>
              <li>
                <a href="#neden-crescendo" className="hover:text-[#EDB96F] transition-colors">
                  04. Neden Crescendo
                </a>
              </li>
              <li>
                <a href="#teknoloji" className="hover:text-[#EDB96F] transition-colors">
                  05. Teknoloji Ekosistemi
                </a>
              </li>
              <li>
                <a href="#iletisim" className="hover:text-[#EDB96F] transition-colors">
                  06. İletişim Formu
                </a>
              </li>
            </ul>
          </div>

          {/* Coordinates & Status */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs text-[#F8F7F2] uppercase tracking-wider block mb-4 font-semibold">
              Stüdyo Koordinatları
            </span>
            <div className="space-y-2 font-mono text-xs text-[#9BA7B7]">
              <div>Konum: <span className="text-[#F8F7F2]">{STUDIO_CONFIG.location}</span></div>
              <div>Zaman Dilimi: <span className="text-[#F8F7F2]">{STUDIO_CONFIG.timezone}</span></div>
              <div>Kabul Durumu: <span className="text-[#EDB96F]">Yeni Projeler İçin Açık</span></div>
              <div>Yanıt SLA: <span className="text-[#F8F7F2]">{STUDIO_CONFIG.responseSLA}</span></div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#222B3A] border border-[#3D4A63] hover:border-[#EDB96F] text-xs font-mono text-[#F8F7F2] transition-colors"
              >
                <span>Başa Dön</span>
                <ArrowUp className="w-3.5 h-3.5 text-[#EDB96F]" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Engineering Quality Seal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#9BA7B7]">
          <div>
            © {new Date().getFullYear()} {STUDIO_CONFIG.name}. Tüm hakları saklıdır.
          </div>

          <div className="flex items-center gap-3 text-[#9BA7B7]">
            <span>Renk Paleti: #F8F7F2 • #EDB96F • #2B3446</span>
            <span>|</span>
            <span className="text-[#EDB96F]">Özel Mimari Tasarımı</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
