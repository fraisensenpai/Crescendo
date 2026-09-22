import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData.ts';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Hizmetler', href: '#hizmetler' },
    { label: 'Projeler', href: '#projeler' },
    { label: 'Süreç', href: '#surec' },
    { label: 'Neden Biz', href: '#neden-crescendo' },
    { label: 'Teknolojiler', href: '#teknoloji' },
    { label: 'İletişim', href: '#iletisim' },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#181E29]/95 border-b border-[#3D4A63]/60 backdrop-blur-md py-3.5 shadow-lg'
          : 'bg-transparent py-5 border-b border-[#3D4A63]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Studio Typographic Brand Identity */}
        <a
          href="#"
          id="nav-brand-logo"
          className="group flex items-center gap-3 select-none"
        >
          {/* Custom Architectural Brand Mark: Crescendo stepped geometric vectors */}
          <div className="w-9 h-9 bg-[#2B3446] border border-[#3D4A63] flex items-end justify-center p-1.5 gap-0.5 group-hover:border-[#EDB96F] transition-colors">
            <span className="w-1 bg-[#EDB96F]/40 h-2 group-hover:bg-[#EDB96F] transition-all duration-300"></span>
            <span className="w-1 bg-[#EDB96F]/70 h-3.5 group-hover:bg-[#EDB96F] transition-all duration-300"></span>
            <span className="w-1 bg-[#EDB96F] h-5 transition-all duration-300"></span>
            <span className="w-1 bg-[#F8F7F2] h-6 transition-all duration-300"></span>
          </div>

          <div className="flex flex-col">
            <span className="font-['Syne'] font-bold text-lg tracking-tight text-[#F8F7F2] leading-none group-hover:text-[#EDB96F] transition-colors">
              CRESCENDO
            </span>
            <span className="font-mono text-[9px] tracking-widest text-[#9BA7B7] uppercase mt-0.5">
              Software Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.href.replace('#', '')}`}
              className="text-xs uppercase tracking-wider font-mono text-[#9BA7B7] hover:text-[#EDB96F] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#EDB96F] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action: Status Pill + Contact CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-2.5 py-1 bg-[#222B3A] border border-[#3D4A63]/60 text-[11px] font-mono text-[#F8F7F2]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EDB96F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EDB96F]"></span>
            </span>
            <span className="text-[#9BA7B7]">Kabul:</span>
            <span className="text-[#F8F7F2] font-medium">Açık</span>
          </div>

          <a
            href="#iletisim"
            id="nav-cta-button"
            onClick={(e) => {
              e.preventDefault();
              onOpenContact();
              const el = document.getElementById('iletisim');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#EDB96F] hover:bg-[#DFAB5F] text-[#2B3446] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm active:translate-y-0.5"
          >
            <span>Projenizi Anlatalım</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#iletisim"
            className="px-3 py-1.5 bg-[#EDB96F] text-[#2B3446] font-mono text-[11px] font-bold uppercase tracking-wider"
          >
            İletişim
          </a>
          <button
            type="button"
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F8F7F2] bg-[#222B3A] border border-[#3D4A63] hover:text-[#EDB96F]"
            aria-label="Menüyü Aç"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-[#181E29] border-b border-[#3D4A63] px-6 py-6 transition-all animate-in fade-in slide-in-from-top-3"
        >
          <div className="flex flex-col gap-4 font-mono text-sm">
            <div className="pb-3 border-b border-[#3D4A63]/50 flex items-center justify-between">
              <span className="text-xs text-[#9BA7B7]">DURUM</span>
              <span className="text-xs text-[#EDB96F] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EDB96F]"></span>
                Yeni Proje Kabulü: Aktif
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-[#F8F7F2] hover:text-[#EDB96F] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#9BA7B7]">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-[#3D4A63]/50 flex flex-col gap-2">
              <a
                href="#iletisim"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 bg-[#EDB96F] text-[#2B3446] font-bold text-center uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <span>Projenizi Anlatalım</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-[#9BA7B7] text-center mt-1">
                {STUDIO_CONFIG.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
