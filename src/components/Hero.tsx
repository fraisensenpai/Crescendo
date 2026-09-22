import React, { useState } from 'react';
import { ArrowUpRight, ArrowDown, Check } from 'lucide-react';
import { STUDIO_CONFIG } from '../data/studioData.ts';

interface HeroProps {
  onOpenContact: () => void;
}

/** Stüdyonun çalışma aşamaları — panelde etkileşimli olarak anlatılır. */
const WORKFLOW_STAGES = [
  {
    id: 0,
    code: '01',
    name: 'İhtiyaç & Kapsam',
    detail: 'Önce ne yapmak istediğinizi netleştiriyoruz. Kapsam, takvim ve bütçe tek sayfada yazılı hale gelir.',
    items: ['Keşif görüşmesi', 'Kapsam dokümanı', 'Takvim', 'Bütçe']
  },
  {
    id: 1,
    code: '02',
    name: 'Tasarım & Akış',
    detail: 'Ekranlar ve kullanıcı akışları, tek satır kod yazılmadan önce onayınıza sunulur.',
    items: ['Ekran akışları', 'Tıklanabilir prototip', 'Mobil & masaüstü', 'Tasarım dili']
  },
  {
    id: 2,
    code: '03',
    name: 'Geliştirme',
    detail: 'Her hafta çalışan bir test bağlantısı paylaşılır; ilerlemeyi bizzat kendiniz görürsünüz.',
    items: ['Haftalık test linki', 'Modüler kod', 'Hız kontrolü', 'Erişilebilirlik']
  },
  {
    id: 3,
    code: '04',
    name: 'Yayın & Destek',
    detail: 'Alan adı, SSL, yedekleme ve yayın sonrası destek dahil. Sistemi teslim edip kaybolmuyoruz.',
    items: ['Yayına alma', 'Yedekleme', 'İzleme', 'Destek']
  }
];

const PRINCIPLES = [
  { title: 'Şablonsuz çalışma', detail: 'Hazır tema değil, işinize göre yazılmış kod' },
  { title: 'Doğrudan iletişim', detail: 'Aracı yok; geliştiren ekiple konuşursunuz' },
  { title: 'Hafif ve hızlı', detail: 'Gereksiz yük yok, sayfalar hızlı açılır' }
];

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [activeStage, setActiveStage] = useState<number>(0);
  const stage = WORKFLOW_STAGES[activeStage];

  return (
    <section
      id="hero-section"
      className="relative min-h-[88vh] pt-28 pb-20 sm:pt-32 md:pt-40 md:pb-28 border-b border-[#3D4A63]/40 bg-tech-grid overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10 items-center">

          {/* SOL: Konumlandırma ve eylem çağrıları */}
          <div className="lg:col-span-7 min-w-0 flex flex-col items-start">

            <h1
              id="hero-main-headline"
              className="font-['Syne'] text-[1.65rem] sm:text-[2.25rem] md:text-[2.6rem] lg:text-[3.1rem] xl:text-[3.35rem] font-extrabold tracking-tight text-[#F8F7F2] leading-[1.2] mb-6 mt-10 max-w-2xl break-words text-balance"
            >
              Fikirleri dijital{' '}
              <span className="text-[#EDB96F] underline decoration-[#EDB96F]/30 decoration-2 underline-offset-4">
                ürünlere
              </span>{' '}
              dönüştürüyoruz.
            </h1>

            <p className="text-base sm:text-lg text-[#9BA7B7] leading-relaxed max-w-xl mb-9">
              Küçük işletmelerden kurumsal ekiplere kadar; web siteleri, özel iş yazılımları ve
              dijital ürünler geliştiriyoruz. Hazır şablon kullanmıyor, işinizi anlayıp sıfırdan kuruyoruz.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <button
                type="button"
                id="hero-primary-cta"
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#EDB96F] hover:bg-[#DFAB5F] text-[#2B3446] text-sm font-bold tracking-wide transition-colors shadow-sm"
              >
                <span>Projenizi Konuşalım</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#projeler"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-[#3D4A63] hover:border-[#EDB96F]/70 text-[#F8F7F2] hover:text-[#EDB96F] text-sm font-medium transition-colors"
              >
                <span>Projelerimizi İnceleyin</span>
                <ArrowDown className="w-4 h-4 text-[#EDB96F]" aria-hidden="true" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-7 border-t border-[#3D4A63]/50 w-full max-w-xl">
              {PRINCIPLES.map((principle) => (
                <div key={principle.title} className="flex flex-col gap-1.5">
                  <span className="text-sm font-semibold text-[#F8F7F2] flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#EDB96F]" aria-hidden="true" />
                    {principle.title}
                  </span>
                  <span className="text-xs text-[#9BA7B7] leading-relaxed">{principle.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SAĞ: Çalışma yaklaşımı paneli (dekoratif sistem ekranı değil, gerçek süreç anlatımı) */}
          <div className="lg:col-span-5 min-w-0">
            <div className="bg-[#1A202C] border border-[#3D4A63] p-5 sm:p-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9BA7B7] block pb-4 mb-5 border-b border-[#3D4A63]/70">
                Çalışma yaklaşımımız
              </span>

              {/* Crescendo metaforu: küçük başlar, her adımda güçlenir */}
              <div className="mb-6">
                <div className="h-14 w-full flex items-end gap-1" aria-hidden="true">
                  {Array.from({ length: 20 }).map((_, i) => {
                    const progress = (i + 1) / 20;
                    return (
                      <div
                        key={i}
                        style={{ height: `${Math.max(12, Math.round(progress * 100))}%` }}
                        className={
                          i >= 15
                            ? 'flex-1 bg-[#F8F7F2]'
                            : i >= 10
                            ? 'flex-1 bg-[#EDB96F]'
                            : 'flex-1 bg-[#3D4A63]'
                        }
                      ></div>
                    );
                  })}
                </div>
                <p className="text-xs text-[#9BA7B7] leading-relaxed mt-3">
                  Küçük başlar, her adımda güçlenir: keşiften yayına kadar aynı ekiple, planlı ilerleyen bir süreç.
                </p>
              </div>

              {/* Süreç aşamaları */}
              <div className="space-y-2 mb-4">
                {WORKFLOW_STAGES.map((item, index) => {
                  const isActive = activeStage === index;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveStage(index)}
                      className={`w-full text-left border px-3.5 py-2.5 transition-colors ${
                        isActive
                          ? 'bg-[#2B3446] border-[#EDB96F] text-[#F8F7F2]'
                          : 'bg-[#222B3A]/60 border-[#3D4A63]/60 text-[#9BA7B7] hover:border-[#3D4A63] hover:text-[#F8F7F2]'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs ${
                            isActive ? 'text-[#EDB96F] font-semibold' : 'text-[#9BA7B7]'
                          }`}
                        >
                          {item.code}
                        </span>
                        <span className="text-sm font-medium">{item.name}</span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Seçili aşamanın detayı */}
              <div className="bg-[#171D27] border border-[#3D4A63]/70 p-4">
                <p className="text-sm text-[#9BA7B7] leading-relaxed mb-3">{stage.detail}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {stage.items.map((item) => (
                    <li
                      key={item}
                      className="px-2 py-1 bg-[#222B3A] border border-[#3D4A63]/60 text-[11px] text-[#F8F7F2]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-xs text-[#9BA7B7] mt-4 leading-relaxed">
                Aşamalara tıklayarak sürecin nasıl ilerlediğini görebilirsiniz. Sorularınız için{' '}
                <a
                  href={`mailto:${STUDIO_CONFIG.email}`}
                  className="text-[#EDB96F] hover:underline"
                >
                  {STUDIO_CONFIG.email}
                </a>{' '}
                adresine yazabilirsiniz.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
