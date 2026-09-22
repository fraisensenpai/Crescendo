import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData.ts';

interface FinalCTAProps {
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenContact }) => {
  return (
    <section
      id="final-cta-section"
      className="relative py-20 sm:py-28 bg-[#EDB96F] text-[#2B3446] overflow-hidden"
    >
      {/* Background Architectural Drafting Grid in Brand Tone */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #2B3446 1px, transparent 1px),
            linear-gradient(to bottom, #2B3446 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#2B3446] text-[#F8F7F2] font-mono text-[11px] mb-4">
              <span className="w-1.5 h-1.5 bg-[#EDB96F]"></span>
              <span>PROJE BAŞLANGIÇ ÇAĞRISI // 2024</span>
            </div>

            <h2 className="font-['Syne'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B3446] tracking-tight leading-tight mb-4">
              Fikrinizi çalışan bir dijital ürüne <br className="hidden sm:inline" />
              birlikte dönüştürelim.
            </h2>

            <p className="text-base sm:text-lg text-[#2B3446]/85 font-medium max-w-2xl leading-relaxed">
              İhtiyacınıza göre tasarlıyor, sıfırdan amaca özel geliştiriyor ve eksiksiz yayına alıyoruz. 
              Projenizin kapsamını paylaşın; 24 saat içinde teknik yol haritasını konuşalım.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
            <a
              href="#iletisim"
              id="final-cta-kickoff-button"
              onClick={(e) => {
                e.preventDefault();
                onOpenContact();
                document.getElementById('iletisim')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2B3446] hover:bg-[#1A202C] text-[#F8F7F2] font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl active:translate-y-0.5 w-full sm:w-auto text-center"
            >
              <span>Projenizi Anlatalım</span>
              <ArrowUpRight className="w-4 h-4 text-[#EDB96F]" />
            </a>

            <div className="font-mono text-xs text-[#2B3446] flex items-center gap-1.5">
              <span className="font-bold">E-posta:</span>
              <a
                href={`mailto:${STUDIO_CONFIG.email}`}
                className="underline hover:opacity-80 transition-opacity"
              >
                {STUDIO_CONFIG.email}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
