import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, Terminal, Cpu, Layers, ShieldCheck, Activity } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData.ts';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeLayer, setActiveLayer] = useState<number>(1);
  const [crescendoFrequency, setCrescendoFrequency] = useState<number>(3);

  const architectureLayers = [
    {
      id: 0,
      code: 'L-01 // CLIENT',
      name: 'Sunum & Arayüz Katmanı',
      tech: 'Next.js / React / TypeScript',
      status: '200 OK • 18ms',
      detail: 'Core Web Vitals optimize edilmiş, erişilebilir ve modüler arayüz bileşenleri.',
      nodes: ['Router', 'State Hydration', 'Token System', 'A11y Engine']
    },
    {
      id: 1,
      code: 'L-02 // EDGE',
      name: 'Uç Ağ & Yönlendirme',
      tech: 'Edge Middleware / Global CDN',
      status: 'GLOBAL POPS ACTIVE',
      detail: 'Kullanıcıya en yakın coğrafi noktadan milisaniyelik önbellek ve güvenlik doğrulama.',
      nodes: ['SSL Handshake', 'Edge Cache', 'Rate Limiter', 'Geo-Routing']
    },
    {
      id: 2,
      code: 'L-03 // CORE',
      name: 'Özel İş Mantığı Servisleri',
      tech: 'Node.js / Python / Worker Queues',
      status: 'RUNNING • 0% PACKET LOSS',
      detail: 'Şirketinize özel iş kuralları, onay akışları ve arka plan operasyon boru hatları.',
      nodes: ['Auth (RBAC)', 'Workflow Engine', 'Integration Hub', 'Audit Log']
    },
    {
      id: 3,
      code: 'L-04 // DATA',
      name: 'İlişkisel Veri & Depolama',
      tech: 'PostgreSQL / Supabase / Encrypted Storage',
      status: 'ACID COMPLIANT',
      detail: 'Yüksek veri tutarlılığı, otomatik yedekleme ve rol bazlı güvenli veri izolasyonu.',
      nodes: ['Connection Pool', 'RLS Policies', 'Schema Migrations', 'WAL Archive']
    }
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#3D4A63]/50 bg-tech-grid overflow-hidden flex items-center"
    >
      {/* Subtle Architectural Drafting Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-blueprint-lines"></div>

      {/* Decorative Technical Crosshair Corner Markers */}
      <div className="absolute top-28 left-6 font-mono text-[10px] text-[#3D4A63] hidden sm:block select-none">
        + 41.0082° N, 28.9784° E [IST]
      </div>
      <div className="absolute top-28 right-6 font-mono text-[10px] text-[#3D4A63] hidden sm:block select-none">
        REF: ARCH-2024-V2 // STUDIO
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Asymmetric Editorial Typography & Action */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Studio Badge / System Coordinate */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#222B3A] border border-[#3D4A63] text-[#EDB96F] text-xs font-mono mb-6">
              <span className="w-1.5 h-1.5 bg-[#EDB96F]"></span>
              <span className="tracking-widest uppercase font-semibold text-[11px]">
                Crescendo Software Studio
              </span>
              <span className="text-[#3D4A63]">|</span>
              <span className="text-[#9BA7B7] text-[11px]">Mühendislik & Tasarım</span>
            </div>

            {/* Main Headline - In Turkish, High-Credibility, Direct */}
            <h1
              id="hero-main-headline"
              className="font-['Syne'] text-4xl sm:text-5xl md:text-6xl xl:text-[64px] font-extrabold tracking-tight text-[#F8F7F2] leading-[1.08] mb-6 max-w-2xl"
            >
              Fikirleri dijital{' '}
              <span className="text-[#EDB96F] underline decoration-[#EDB96F]/30 underline-offset-8">
                ürünlere
              </span>{' '}
              dönüştürüyoruz.
            </h1>

            {/* Supporting Copy - Honest, grounded Turkish software studio copy */}
            <p className="text-base sm:text-lg text-[#9BA7B7] leading-relaxed max-w-xl mb-9 font-normal">
              Modern web siteleri, özel yazılımlar ve dijital deneyimler geliştiriyoruz. 
              Şablonlara sığınmadan; her satırı amaca hizmet eden, ölçülebilir ve yüksek performanslı çözümler üretiyoruz.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <a
                href="#iletisim"
                id="hero-primary-cta"
                onClick={(e) => {
                  e.preventDefault();
                  onOpenContact();
                  document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#EDB96F] hover:bg-[#DFAB5F] text-[#2B3446] font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:translate-y-0.5"
              >
                <span>Projenizi Anlatalım</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#projeler"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#222B3A] hover:bg-[#2B3446] border border-[#3D4A63] hover:border-[#EDB96F]/60 text-[#F8F7F2] font-mono text-xs uppercase tracking-wider transition-all duration-200"
              >
                <span>Projeleri Gör</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#EDB96F]" />
              </a>
            </div>

            {/* Direct Studio Commitments / Principles (No fake counters) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#3D4A63]/50 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-[#EDB96F] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <span className="w-1 h-1 bg-[#EDB96F]"></span>
                  Temiz Kod
                </span>
                <span className="text-xs text-[#9BA7B7]">Şablon yok, sıfırdan amaca özel mimari</span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-[#EDB96F] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <span className="w-1 h-1 bg-[#EDB96F]"></span>
                  Doğrudan İletişim
                </span>
                <span className="text-xs text-[#9BA7B7]">Aracısız, doğrudan geliştirici ekiple çalışma</span>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-[11px] text-[#EDB96F] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <span className="w-1 h-1 bg-[#EDB96F]"></span>
                  Sub-second Hız
                </span>
                <span className="text-xs text-[#9BA7B7]">Milisaniyelik sayfa ve sistem performansı</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Custom Abstract Technical Visual Created Specifically for Crescendo */}
          <div className="lg:col-span-5">
            <div
              id="crescendo-architecture-blueprint"
              className="relative bg-[#1A202C] border-2 border-[#3D4A63] p-5 sm:p-6 shadow-2xl"
            >
              {/* Technical Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#3D4A63] font-mono text-xs">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#EDB96F]" />
                  <span className="text-[#F8F7F2] font-semibold tracking-wider">CRESCENDO-SYS // LIVE_SPEC</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#EDB96F] animate-pulse"></span>
                  <span className="text-[10px] text-[#9BA7B7] uppercase">STABLE</span>
                </div>
              </div>

              {/* Custom Crescendo Vector Waveform / Stepped Amplitude Geometry */}
              <div className="mb-5 bg-[#222B3A] p-3 border border-[#3D4A63]/70">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#9BA7B7] uppercase tracking-wider flex items-center gap-1">
                    <Activity className="w-3 h-3 text-[#EDB96F]" />
                    Crescendo Dalga & Hız Mimarisi (Harmonics)
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setCrescendoFrequency(lvl)}
                        className={`text-[9px] font-mono px-1.5 py-0.5 border ${
                          crescendoFrequency === lvl
                            ? 'bg-[#EDB96F] text-[#2B3446] border-[#EDB96F] font-bold'
                            : 'bg-[#1A202C] text-[#9BA7B7] border-[#3D4A63] hover:text-[#F8F7F2]'
                        }`}
                        title={`Harmonik Seviyesi ${lvl}`}
                      >
                        x{lvl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* SVG Procedural Crescendo stepped amplitude vector */}
                <div className="h-16 w-full flex items-end justify-between gap-1 pt-2">
                  {Array.from({ length: 24 }).map((_, i) => {
                    // Crescendo mathematically builds up from left to right with harmonic resonance
                    const baseProgress = (i + 1) / 24;
                    const harmonicWave = Math.sin((i / 24) * Math.PI * crescendoFrequency) * 0.25;
                    const normalizedHeight = Math.min(100, Math.max(15, (baseProgress + harmonicWave) * 100));
                    const isHighlighted = i >= 18;
                    const isGold = i >= 12;

                    return (
                      <div
                        key={i}
                        className="flex-1 flex flex-col justify-end items-center h-full group"
                      >
                        <div
                          style={{ height: `${normalizedHeight}%` }}
                          className={`w-full transition-all duration-300 ${
                            isHighlighted
                              ? 'bg-[#F8F7F2]'
                              : isGold
                              ? 'bg-[#EDB96F]'
                              : 'bg-[#3D4A63] group-hover:bg-[#EDB96F]/50'
                          }`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between font-mono text-[9px] text-[#9BA7B7] mt-1.5 pt-1 border-t border-[#3D4A63]/30">
                  <span>00.00 Hz [GİRİŞ]</span>
                  <span className="text-[#EDB96F]">MAX INTENSITY [CANLI YAYIN]</span>
                  <span>99.98% SLA</span>
                </div>
              </div>

              {/* Interactive Architecture Layer Stack */}
              <div className="space-y-2 mb-4">
                <div className="text-[10px] font-mono text-[#9BA7B7] uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>MİMARİ KATMANLARI SEÇİN & İNCELEYİN</span>
                  <span className="text-[#EDB96F]">KATMAN: 0{activeLayer + 1}/04</span>
                </div>

                {architectureLayers.map((layer, index) => {
                  const isSelected = activeLayer === index;
                  return (
                    <div
                      key={layer.id}
                      onClick={() => setActiveLayer(index)}
                      className={`cursor-pointer border p-2.5 transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#2B3446] border-[#EDB96F] text-[#F8F7F2] shadow-md translate-x-1'
                          : 'bg-[#222B3A]/60 border-[#3D4A63]/50 text-[#9BA7B7] hover:border-[#3D4A63] hover:text-[#F8F7F2]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-1.5 h-1.5 ${
                              isSelected ? 'bg-[#EDB96F]' : 'bg-[#3D4A63]'
                            }`}
                          ></span>
                          <span className={isSelected ? 'text-[#EDB96F] font-bold' : ''}>
                            {layer.code}
                          </span>
                          <span className="text-xs text-[#F8F7F2] font-sans font-medium">
                            {layer.name}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#EDB96F]/90">
                          {layer.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Layer Deep Dive Box */}
              <div className="bg-[#171D27] border border-[#3D4A63] p-3 font-mono text-xs">
                <div className="flex items-center justify-between text-[11px] text-[#EDB96F] mb-1.5 pb-1 border-b border-[#3D4A63]/40">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    {architectureLayers[activeLayer].tech}
                  </span>
                  <span className="text-[10px] text-[#9BA7B7]">ŞEFFAF MİMARİ</span>
                </div>
                <p className="text-[11px] text-[#9BA7B7] font-sans mb-2 leading-relaxed">
                  {architectureLayers[activeLayer].detail}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {architectureLayers[activeLayer].nodes.map((node) => (
                    <span
                      key={node}
                      className="px-2 py-0.5 bg-[#222B3A] border border-[#3D4A63] text-[10px] text-[#F8F7F2]"
                    >
                      {node}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Technical Spec Footer */}
              <div className="mt-4 pt-3 border-t border-[#3D4A63]/50 flex items-center justify-between font-mono text-[10px] text-[#9BA7B7]">
                <div className="flex items-center gap-1.5 text-[#EDB96F]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Sıfır Dış Bağımlılık Riski</span>
                </div>
                <span>NODE ENV: PRODUCTION</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
