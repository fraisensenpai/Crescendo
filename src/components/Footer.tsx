import React from 'react';
import { ArrowUp } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData.ts';
import brandLogo from '../../C.png';

const FOOTER_LINKS = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'Çalışma şeklimiz', href: '#surec' },
  { label: 'Neden biz', href: '#neden-crescendo' },
  { label: 'Teknolojiler', href: '#teknoloji' },
  { label: 'İletişim', href: '#iletisim' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer id="studio-footer" className="bg-[#10141C] border-t border-[#3D4A63]/60 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3D4A63]/50">

          {/* Marka */}
          <div className="md:col-span-6 min-w-0">
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

            <p className="text-sm text-[#9BA7B7] max-w-sm leading-relaxed mb-5">
              Web siteleri, özel iş yazılımları ve dijital ürünler geliştiren bağımsız bir yazılım
              stüdyosu. Hazır şablon kullanmadan, işinize göre sıfırdan kuruyoruz.
            </p>

            <a
              href={`mailto:${STUDIO_CONFIG.email}`}
              className="text-sm text-[#EDB96F] hover:underline break-all"
            >
              {STUDIO_CONFIG.email}
            </a>
          </div>

          {/* Gezinme */}
          <nav className="md:col-span-3 min-w-0" aria-label="Alt menü">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F8F7F2] mb-4">
              Gezinme
            </h2>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[#9BA7B7] hover:text-[#EDB96F] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* İletişim bilgileri */}
          <div className="md:col-span-3 min-w-0">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F8F7F2] mb-4">
              Stüdyo
            </h2>
            <dl className="space-y-2.5 text-sm">
              <div>
                <dt className="text-[#9BA7B7] text-xs">Konum</dt>
                <dd className="text-[#F8F7F2]">{STUDIO_CONFIG.location}</dd>
              </div>
              <div>
                <dt className="text-[#9BA7B7] text-xs">Çalışma saatleri</dt>
                <dd className="text-[#F8F7F2]">{STUDIO_CONFIG.timezone}</dd>
              </div>
              <div>
                <dt className="text-[#9BA7B7] text-xs">Yanıt süresi</dt>
                <dd className="text-[#F8F7F2]">{STUDIO_CONFIG.responseSLA}</dd>
              </div>
              <div>
                <dt className="text-[#9BA7B7] text-xs">Durum</dt>
                <dd className="text-[#EDB96F]">{STUDIO_CONFIG.status}</dd>
              </div>
            </dl>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9BA7B7]">
          <p>© {new Date().getFullYear()} {STUDIO_CONFIG.name}. Tüm hakları saklıdır.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#9BA7B7] hover:text-[#EDB96F] transition-colors"
          >
            <span>Sayfa başına dön</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  );
};
