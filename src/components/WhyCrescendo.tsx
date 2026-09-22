import React from 'react';
import { X, Check } from 'lucide-react';
import { PHILOSOPHY_DATA } from '../data/studioData.ts';
import { SectionHeader } from './SectionHeader.tsx';

const COMPARISON_ROWS = [
  {
    criteria: 'Kod ve altyapı',
    traditional: 'Hazır şablonlar, eklentilerle şişmiş yapılar ve sizin düzenleyemediğiniz kod',
    crescendo: 'İşinize göre yazılmış, düzenlenebilir ve belgelenmiş kaynak kod'
  },
  {
    criteria: 'İletişim',
    traditional: 'Teknik konulara hâkim olmayan aracı ekipler ve uzayan onay zincirleri',
    crescendo: 'Kodu ve tasarımı yapan ekiple doğrudan, aracısız görüşme'
  },
  {
    criteria: 'Hız',
    traditional: 'Gereksiz dosya ve eklenti yükü nedeniyle ağır açılan sayfalar',
    crescendo: 'Yalnızca gereken kodun yüklendiği hafif, hızlı açılan sayfalar'
  },
  {
    criteria: 'Sahiplik',
    traditional: 'Aylık lisanslara veya kapalı platformlara bağımlılık',
    crescendo: 'Kaynak kod ve veriler size ait; istediğiniz zaman başka ekibe devredebilirsiniz'
  },
  {
    criteria: 'Büyüme',
    traditional: 'Yeni bir özellik istendiğinde sistemin tıkanması veya baştan yazılması',
    crescendo: 'Yeni özelliklerin mevcut yapıyı bozmadan eklenebildiği düzen'
  }
];

export const WhyCrescendo: React.FC = () => (
  <section id="neden-crescendo" className="relative py-24 sm:py-32 bg-[#141A23]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="05 — Neden biz"
        title={
          <>
            Bir ajans değil, <span className="text-[#EDB96F]">yazılım ekibiyiz.</span>
          </>
        }
        note="İşinizi dijitalde doğru temsil edecek ürünleri tasarlayıp kodlayan küçük ve doğrudan bir ekibiz."
      />

      {/* Çalışma prensipleri */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-20">
        {PHILOSOPHY_DATA.map((item) => (
          <div key={item.code} className="min-w-0">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#EDB96F] block mb-2.5">
              {item.code}
            </span>
            <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#F8F7F2] mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-[#9BA7B7] leading-relaxed mb-4">{item.description}</p>
            <p className="text-sm text-[#F8F7F2] leading-relaxed border-l-2 border-[#EDB96F]/50 pl-4">
              {item.practice}
            </p>
          </div>
        ))}
      </div>

      {/* Karşılaştırma */}
      <div className="bg-[#1A202C] border border-[#3D4A63] p-6 sm:p-8">
        <div className="mb-7">
          <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#F8F7F2] mb-2">
            Hazır şablon siteler ile aramızdaki fark
          </h3>
          <p className="text-sm text-[#9BA7B7] leading-relaxed">
            Karar vermenize yardımcı olmak için açıkça yazıyoruz.
          </p>
        </div>

        {/* Masaüstü tablo */}
        <div className="hidden md:block">
          <table className="w-full text-left">
            <caption className="sr-only">
              Şablon siteler ile Crescendo yaklaşımının karşılaştırması
            </caption>
            <thead>
              <tr className="border-b border-[#3D4A63]">
                <th scope="col" className="py-3 pr-4 w-[18%] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9BA7B7]">
                  Konu
                </th>
                <th scope="col" className="py-3 px-4 w-[41%] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9BA7B7]">
                  Hazır şablon / klasik ajans
                </th>
                <th scope="col" className="py-3 pl-4 w-[41%] text-[11px] font-semibold uppercase tracking-[0.14em] text-[#EDB96F] bg-[#222B3A]/60">
                  Crescendo Software
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#3D4A63]/50">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.criteria}>
                  <th scope="row" className="py-4 pr-4 align-top text-sm font-semibold text-[#F8F7F2]">
                    {row.criteria}
                  </th>
                  <td className="py-4 px-4 align-top">
                    <span className="flex items-start gap-2 text-sm text-[#9BA7B7] leading-relaxed">
                      <X className="w-4 h-4 text-[#8A97A8] shrink-0 mt-0.5" aria-hidden="true" />
                      {row.traditional}
                    </span>
                  </td>
                  <td className="py-4 pl-4 align-top bg-[#222B3A]/30">
                    <span className="flex items-start gap-2 text-sm text-[#F8F7F2] leading-relaxed">
                      <Check className="w-4 h-4 text-[#EDB96F] shrink-0 mt-0.5" aria-hidden="true" />
                      {row.crescendo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobil: tablo yerine alt alta kartlar */}
        <div className="md:hidden space-y-6">
          {COMPARISON_ROWS.map((row) => (
            <div key={row.criteria} className="border-b border-[#3D4A63]/50 pb-5 last:border-b-0 last:pb-0">
              <h4 className="text-sm font-semibold text-[#F8F7F2] mb-3">{row.criteria}</h4>

              <div className="flex items-start gap-2 text-sm text-[#9BA7B7] leading-relaxed mb-2.5">
                <X className="w-4 h-4 text-[#8A97A8] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <span className="text-[#9BA7B7]">Şablon / ajans: </span>
                  {row.traditional}
                </span>
              </div>

              <div className="flex items-start gap-2 text-sm text-[#F8F7F2] leading-relaxed">
                <Check className="w-4 h-4 text-[#EDB96F] shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  <span className="text-[#EDB96F]">Crescendo: </span>
                  {row.crescendo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
