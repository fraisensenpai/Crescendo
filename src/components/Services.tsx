import React, { useState } from 'react';
import { ArrowUpRight, Database } from 'lucide-react';
import { SERVICES_DATA } from '../data/studioData.ts';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'clean' | 'speed'>('clean');

  return (
    <section
      id="hizmetler"
      className="relative py-24 sm:py-32 border-b border-[#3D4A63]/50 bg-[#171D27] overflow-hidden"
    >
      {/* Background System: Fine Technical Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Left-Aligned Editorial Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-[#3D4A63]/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#EDB96F] mb-3">
              <span className="w-2 h-0.5 bg-[#EDB96F]"></span>
              <span>02 // HİZMETLERİMİZ</span>
            </div>
            <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8F7F2] tracking-tight">
              Dijital dünyada fark yaratan <br className="hidden sm:inline" />
              <span className="text-[#EDB96F]">mühendislik kabiliyetleri.</span>
            </h2>
          </div>

          <p className="text-sm font-mono text-[#9BA7B7] max-w-xs mt-4 md:mt-0 leading-relaxed">
            Tek bir şablona bağlı kalmaksızın, projenizin büyüklüğüne ve hedef kitlenize uygun mimari çözümler.
          </p>
        </div>

        {/* Alternating Editorial Layout - Each service has its own layout identity */}
        <div className="space-y-24">

          {/* SERVICE 01: Modern Web Geliştirme (Split: Editorial Left, Live Code Specs Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="font-mono text-xs text-[#EDB96F] tracking-widest block mb-2 font-semibold">
                {SERVICES_DATA[0].code}
              </span>
              <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F8F7F2] mb-4">
                {SERVICES_DATA[0].title}
              </h3>
              <p className="text-sm sm:text-base text-[#EDB96F] font-medium mb-4 leading-relaxed">
                {SERVICES_DATA[0].tagline}
              </p>
              <p className="text-sm text-[#9BA7B7] leading-relaxed mb-6 font-normal">
                {SERVICES_DATA[0].description}
              </p>

              {/* Architectural bullet points */}
              <div className="space-y-2.5 mb-8">
                {SERVICES_DATA[0].architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F8F7F2]">
                    <span className="font-mono text-[#EDB96F] mt-0.5">▪</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectService('Web Sitesi')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2B3446] hover:bg-[#EDB96F] hover:text-[#2B3446] text-[#F8F7F2] border border-[#3D4A63] hover:border-[#EDB96F] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                >
                  <span>Bu Hizmet İçin Teklif Alın</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex gap-2">
                  {SERVICES_DATA[0].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#222B3A] border border-[#3D4A63]/70 font-mono text-[11px] text-[#9BA7B7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual element 01: Code Architecture Terminal */}
            <div className="lg:col-span-6 bg-[#1A202C] border border-[#3D4A63] p-5 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#3D4A63] font-mono text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3D4A63]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3D4A63]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EDB96F]"></span>
                  </div>
                  <span className="text-[#9BA7B7] text-[11px]">site-architecture.config.ts</span>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => setActiveCodeTab('clean')}
                    className={`px-2 py-0.5 text-[10px] ${
                      activeCodeTab === 'clean'
                        ? 'bg-[#EDB96F] text-[#2B3446] font-bold'
                        : 'text-[#9BA7B7] hover:text-[#F8F7F2]'
                    }`}
                  >
                    MİMARİ
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('speed')}
                    className={`px-2 py-0.5 text-[10px] ${
                      activeCodeTab === 'speed'
                        ? 'bg-[#EDB96F] text-[#2B3446] font-bold'
                        : 'text-[#9BA7B7] hover:text-[#F8F7F2]'
                    }`}
                  >
                    METRİK
                  </button>
                </div>
              </div>

              {activeCodeTab === 'clean' ? (
                <pre className="font-mono text-xs text-[#9BA7B7] leading-relaxed overflow-x-auto p-2 bg-[#171D27] border border-[#3D4A63]/50">
                  <code>
{`// Crescendo Clean Web Stack Definition
export const webConfig = {
  framework: "Next.js / Vite Static Hybrid",
  rendering: "SSR + Edge ISR Caching",
  bundleOptimization: {
    treeShaking: true,
    dynamicImports: "Route-split",
    criticalCSSInlined: true
  },
  typography: {
    fontDisplay: "swap",
    subsets: ["latin-ext"]
  },
  seo: {
    schemaOrg: "Organization & Service",
    openGraph: "Dynamic SVG Render"
  }
};`}
                  </code>
                </pre>
              ) : (
                <div className="p-3 bg-[#171D27] border border-[#3D4A63]/50 space-y-3 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-[#3D4A63]/30">
                    <span className="text-[#9BA7B7]">Largest Contentful Paint (LCP)</span>
                    <span className="text-[#EDB96F] font-bold">0.38s (Mükemmel)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#3D4A63]/30">
                    <span className="text-[#9BA7B7]">Cumulative Layout Shift (CLS)</span>
                    <span className="text-[#EDB96F] font-bold">0.00 (Sıfır Kayma)</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-[#3D4A63]/30">
                    <span className="text-[#9BA7B7]">Total Blocking Time (TBT)</span>
                    <span className="text-[#EDB96F] font-bold">0ms (Anında Tepki)</span>
                  </div>
                  <div className="text-[11px] text-[#9BA7B7] pt-1">
                    ✓ Google Core Web Vitals tüm metriklerinde yeşil bölge standardı.
                  </div>
                </div>
              )}

              <div className="mt-3 pt-3 border-t border-[#3D4A63]/40 flex justify-between font-mono text-[10px] text-[#9BA7B7]">
                <span>STANDART: LIGHTHOUSE 95+</span>
                <span className="text-[#EDB96F]">ZERO BLOAT</span>
              </div>
            </div>
          </div>

          {/* SERVICE 02: Özel Yazılım (Alternating: Visual Flow Left, Editorial Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual element 02: System Dataflow & RBAC Architecture Diagram */}
            <div className="lg:col-span-6 order-2 lg:order-1 bg-[#1A202C] border border-[#3D4A63] p-5 shadow-xl">
              <div className="font-mono text-xs text-[#EDB96F] pb-3 mb-4 border-b border-[#3D4A63] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  KURUMSAL VERİ AKIŞI & YETKİLENDİRME
                </span>
                <span className="text-[10px] text-[#9BA7B7]">MODÜLER API</span>
              </div>

              {/* Connected node pipeline */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-[#222B3A] border border-[#3D4A63] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#EDB96F]"></span>
                    <span className="text-[#F8F7F2] font-semibold">01. Güvenli Giriş & RBAC</span>
                  </div>
                  <span className="text-[10px] text-[#9BA7B7]">JWT + 2FA / Session</span>
                </div>

                <div className="flex justify-center my-1 text-[#EDB96F] font-mono text-xs">
                  ↓ [Yetkili İstek & Veri Şifreleme]
                </div>

                <div className="p-3 bg-[#2B3446] border border-[#EDB96F]/50 flex items-center justify-between shadow-inner">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#F8F7F2]"></span>
                    <span className="text-[#F8F7F2] font-semibold">02. Özel İş Mantığı & Kuyruklar</span>
                  </div>
                  <span className="text-[10px] text-[#EDB96F]">Onay, Stok, Faturalama</span>
                </div>

                <div className="flex justify-center my-1 text-[#EDB96F] font-mono text-xs">
                  ↓ [Atomik İşlem (ACID)]
                </div>

                <div className="p-3 bg-[#222B3A] border border-[#3D4A63] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#EDB96F]"></span>
                    <span className="text-[#F8F7F2] font-semibold">03. PostgreSQL & Entegrasyonlar</span>
                  </div>
                  <span className="text-[10px] text-[#9BA7B7]">ERP / Kargo / Banka API</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3D4A63]/50 flex justify-between font-mono text-[10px] text-[#9BA7B7]">
                <span>ŞİFRELEME: TLS 1.3 / AES-256</span>
                <span className="text-[#EDB96F]">TAM VERİ MÜLKİYETİ</span>
              </div>
            </div>

            {/* Editorial Content Right */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="font-mono text-xs text-[#EDB96F] tracking-widest block mb-2 font-semibold">
                {SERVICES_DATA[1].code}
              </span>
              <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F8F7F2] mb-4">
                {SERVICES_DATA[1].title}
              </h3>
              <p className="text-sm sm:text-base text-[#EDB96F] font-medium mb-4 leading-relaxed">
                {SERVICES_DATA[1].tagline}
              </p>
              <p className="text-sm text-[#9BA7B7] leading-relaxed mb-6 font-normal">
                {SERVICES_DATA[1].description}
              </p>

              <div className="space-y-2.5 mb-8">
                {SERVICES_DATA[1].architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F8F7F2]">
                    <span className="font-mono text-[#EDB96F] mt-0.5">▪</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectService('Özel Yazılım')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2B3446] hover:bg-[#EDB96F] hover:text-[#2B3446] text-[#F8F7F2] border border-[#3D4A63] hover:border-[#EDB96F] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                >
                  <span>Süreçlerinizi Otomatize Edin</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex gap-2">
                  {SERVICES_DATA[1].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#222B3A] border border-[#3D4A63]/70 font-mono text-[11px] text-[#9BA7B7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* SERVICE 03: Dijital Ürünler (Asymmetric Grid: Editorial Left, Product Architecture Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <span className="font-mono text-xs text-[#EDB96F] tracking-widest block mb-2 font-semibold">
                {SERVICES_DATA[2].code}
              </span>
              <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F8F7F2] mb-4">
                {SERVICES_DATA[2].title}
              </h3>
              <p className="text-sm sm:text-base text-[#EDB96F] font-medium mb-4 leading-relaxed">
                {SERVICES_DATA[2].tagline}
              </p>
              <p className="text-sm text-[#9BA7B7] leading-relaxed mb-6 font-normal">
                {SERVICES_DATA[2].description}
              </p>

              <div className="space-y-2.5 mb-8">
                {SERVICES_DATA[2].architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F8F7F2]">
                    <span className="font-mono text-[#EDB96F] mt-0.5">▪</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectService('Dijital Ürün')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2B3446] hover:bg-[#EDB96F] hover:text-[#2B3446] text-[#F8F7F2] border border-[#3D4A63] hover:border-[#EDB96F] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                >
                  <span>MVP / Ürün Planlayalım</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex gap-2">
                  {SERVICES_DATA[2].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#222B3A] border border-[#3D4A63]/70 font-mono text-[11px] text-[#9BA7B7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual element 03: Modular SaaS Product Architecture Grid */}
            <div className="lg:col-span-6 bg-[#1A202C] border border-[#3D4A63] p-5 shadow-xl">
              <div className="font-mono text-xs text-[#EDB96F] pb-3 mb-4 border-b border-[#3D4A63] flex items-center justify-between">
                <span>SAAS PRODUCT MATRIX // ARCHITECTURE</span>
                <span className="text-[10px] text-[#9BA7B7]">SCALABLE CORE</span>
              </div>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-3 bg-[#222B3A] border border-[#3D4A63]">
                  <div className="text-[10px] text-[#EDB96F] mb-1">01. ABONELİK</div>
                  <div className="text-[#F8F7F2] font-semibold mb-1">Ödeme Motoru</div>
                  <div className="text-[11px] text-[#9BA7B7]">Aylık/Yıllık Planlar, Fatura, Kart Doğrulama</div>
                </div>

                <div className="p-3 bg-[#222B3A] border border-[#3D4A63]">
                  <div className="text-[10px] text-[#EDB96F] mb-1">02. GÜVENLİK</div>
                  <div className="text-[#F8F7F2] font-semibold mb-1">Multi-Tenant İzolasyon</div>
                  <div className="text-[11px] text-[#9BA7B7]">Her şirkete özel veri alanı & RLS kuralları</div>
                </div>

                <div className="p-3 bg-[#222B3A] border border-[#3D4A63]">
                  <div className="text-[10px] text-[#EDB96F] mb-1">03. ETKİLEŞİM</div>
                  <div className="text-[#F8F7F2] font-semibold mb-1">Bildirim & Webhook</div>
                  <div className="text-[11px] text-[#9BA7B7]">Anlık e-posta, SMS ve sistem tetikleyicileri</div>
                </div>

                <div className="p-3 bg-[#222B3A] border border-[#3D4A63]">
                  <div className="text-[10px] text-[#EDB96F] mb-1">04. ANALİTİK</div>
                  <div className="text-[#F8F7F2] font-semibold mb-1">Kullanım Telemetrisi</div>
                  <div className="text-[11px] text-[#9BA7B7]">Kullanıcı retention, churn ve aktif oturumlar</div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3D4A63]/50 flex justify-between font-mono text-[10px] text-[#9BA7B7]">
                <span>ÖLÇEK: 10k+ EŞZAMANLI İSTEK</span>
                <span className="text-[#EDB96F]">MODÜLER & BÜYÜMEYE AÇIK</span>
              </div>
            </div>
          </div>

          {/* SERVICE 04: UI/UX & Tasarım Sistemleri (Alternating: Tokens Visual Left, Editorial Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual element 04: Design Tokens & Typography Precision Spec */}
            <div className="lg:col-span-6 order-2 lg:order-1 bg-[#1A202C] border border-[#3D4A63] p-5 shadow-xl">
              <div className="font-mono text-xs text-[#EDB96F] pb-3 mb-4 border-b border-[#3D4A63] flex items-center justify-between">
                <span>DESIGN TOKEN SYSTEM // KOD UYUMLU</span>
                <span className="text-[10px] text-[#9BA7B7]">WCAG AA COMPLIANT</span>
              </div>

              {/* Exact brand color token matrix */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-2.5 bg-[#222B3A] border border-[#3D4A63] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 bg-[#F8F7F2] border border-[#3D4A63]"></span>
                    <span className="text-[#F8F7F2]">--color-parchment</span>
                  </div>
                  <span className="text-[#EDB96F] font-bold">#F8F7F2</span>
                </div>

                <div className="p-2.5 bg-[#222B3A] border border-[#3D4A63] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 bg-[#EDB96F]"></span>
                    <span className="text-[#F8F7F2]">--color-gold</span>
                  </div>
                  <span className="text-[#EDB96F] font-bold">#EDB96F</span>
                </div>

                <div className="p-2.5 bg-[#222B3A] border border-[#3D4A63] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 bg-[#2B3446] border border-[#3D4A63]"></span>
                    <span className="text-[#F8F7F2]">--color-slate-primary</span>
                  </div>
                  <span className="text-[#EDB96F] font-bold">#2B3446</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-[#171D27] border border-[#3D4A63]/60 font-mono text-xs space-y-1.5">
                <div className="text-[10px] text-[#9BA7B7] uppercase">TİPOGRAFİK HİYERARŞİ</div>
                <div className="text-sm font-['Syne'] font-bold text-[#F8F7F2]">
                  Display: Syne Bold (1.25 Modular Ratio)
                </div>
                <div className="text-xs font-sans text-[#9BA7B7]">
                  Body: Plus Jakarta Sans (Line-height: 1.6, 65ch max)
                </div>
                <div className="text-[11px] font-mono text-[#EDB96F]">
                  Data / Code: JetBrains Mono (Tracking: wide)
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#3D4A63]/50 flex justify-between font-mono text-[10px] text-[#9BA7B7]">
                <span>BOŞLUK SİSTEMİ: 8pt GRID</span>
                <span className="text-[#EDB96F]">FIGMA TO CODE PIPELINE</span>
              </div>
            </div>

            {/* Editorial Content Right */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="font-mono text-xs text-[#EDB96F] tracking-widest block mb-2 font-semibold">
                {SERVICES_DATA[3].code}
              </span>
              <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F8F7F2] mb-4">
                {SERVICES_DATA[3].title}
              </h3>
              <p className="text-sm sm:text-base text-[#EDB96F] font-medium mb-4 leading-relaxed">
                {SERVICES_DATA[3].tagline}
              </p>
              <p className="text-sm text-[#9BA7B7] leading-relaxed mb-6 font-normal">
                {SERVICES_DATA[3].description}
              </p>

              <div className="space-y-2.5 mb-8">
                {SERVICES_DATA[3].architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F8F7F2]">
                    <span className="font-mono text-[#EDB96F] mt-0.5">▪</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectService('UI/UX')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2B3446] hover:bg-[#EDB96F] hover:text-[#2B3446] text-[#F8F7F2] border border-[#3D4A63] hover:border-[#EDB96F] font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                >
                  <span>Tasarım Sistemi Oluşturalım</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex gap-2">
                  {SERVICES_DATA[3].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#222B3A] border border-[#3D4A63]/70 font-mono text-[11px] text-[#9BA7B7]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
