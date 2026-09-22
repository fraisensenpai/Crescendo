import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData.ts';
import brandLogo from '../../C.png';

interface NavbarProps {
  onOpenContact: () => void;
}

const NAV_LINKS = [
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Projeler', href: '#projeler' },
  { label: 'Süreç', href: '#surec' },
  { label: 'Neden Biz', href: '#neden-crescendo' },
  { label: 'Teknolojiler', href: '#teknoloji' },
  { label: 'İletişim', href: '#iletisim' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Klavyeyle gezinirken menü Escape ile kapanabilmeli
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileMenuOpen]);

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#181E29]/95 border-b border-[#3D4A63]/60 backdrop-blur-md py-3'
          : 'bg-transparent py-5 border-b border-[#3D4A63]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Marka */}
        <a
          href="#hero-section"
          id="nav-brand-logo"
          className="flex items-center gap-3 select-none shrink-0"
          aria-label="Crescendo Software — sayfa başı"
        >
          <img
            src={brandLogo}
            alt="Crescendo Software logosu"
            width={36}
            height={36}
            className="w-9 h-9 object-cover border border-[#3D4A63]"
          />

          <span className="flex flex-col">
            <span className="font-['Times_New_Roman',_Times,_serif] font-bold text-lg tracking-tight text-[#F8F7F2] leading-none">
              Crescendo
            </span>
            <span className="text-[10px] tracking-[0.18em] text-[#9BA7B7] mt-1">
              Yazılım Geliştirme
            </span>
          </span>
        </a>

        {/* Masaüstü navigasyon */}
        <nav
          id="desktop-nav-menu"
          className="hidden md:flex items-center gap-x-4 lg:gap-x-5 xl:gap-x-7"
          aria-label="Ana menü"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              className="text-sm text-[#9BA7B7] hover:text-[#EDB96F] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-[#EDB96F] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Sağ eylemler */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          {/* Durum bilgisi yalnızca geniş ekranlarda; dar ekranlarda menü alanı daralmasın */}
          <span className="hidden xl:flex items-center gap-2 text-xs text-[#9BA7B7]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EDB96F]" aria-hidden="true"></span>
            {STUDIO_CONFIG.status}
          </span>

          <a
            href="#iletisim"
            id="nav-cta-button"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#EDB96F] hover:bg-[#DFAB5F] text-[#2B3446] text-xs font-bold tracking-wide transition-colors"
          >
            <span>Projenizi Konuşalım</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Mobil kontroller */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#iletisim"
            className="px-3 py-1.5 bg-[#EDB96F] text-[#2B3446] text-xs font-bold tracking-wide"
          >
            İletişim
          </a>
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F8F7F2] bg-[#222B3A] border border-[#3D4A63] hover:text-[#EDB96F]"
            aria-label={mobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-[#181E29] border-b border-[#3D4A63] px-6 py-6"
        >
          <nav className="flex flex-col" aria-label="Mobil menü">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-base text-[#F8F7F2] hover:text-[#EDB96F] border-b border-[#3D4A63]/40"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-5">
            <a
              href="#iletisim"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 bg-[#EDB96F] text-[#2B3446] font-bold text-center text-sm tracking-wide flex items-center justify-center gap-2"
            >
              <span>Projenizi Konuşalım</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="text-xs text-[#9BA7B7] text-center mt-3">
              {STUDIO_CONFIG.email}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
