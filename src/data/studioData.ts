import { ProjectItem, ServiceItem, ProcessStep, TechnologyItem, StudioPhilosophy, ProjectType, BudgetRange } from '../types.ts';

export const STUDIO_CONFIG = {
  name: 'Crescendo Software',
  tagline: 'Modern Web & Özel Yazılım Çözümleri',
  email: 'crescendosoftwareinc@gmail.com',
  location: 'İstanbul, Türkiye',
  timezone: 'GMT+3 (TSI)',
  status: 'Yeni Proje Kabulü: Aktif',
  responseSLA: '24 saat içinde doğrudan dönüş',
  founded: '2024',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    code: '01 / MİMARİ & WEB',
    title: 'Modern Web Geliştirme',
    tagline: 'Hazır temalara bağımlı kalmadan, sıfırdan amaca özel üretilmiş yüksek hızlı web siteleri.',
    description: 'Arama motorlarında güçlü, sayfa açılış hızı milisaniyeler seviyesinde olan ve işletmenizin kurumsal ciddiyetini eksiksiz yansıtan modern web platformları inşa ediyoruz. Şablon kalabalığından uzak, her satırı amaca hizmet eden temiz kod mimarisi kuruyoruz.',
    architectureDetails: [
      'Statik ve Sunucu Taraflı Hibrit Rendering (SSR / SSG)',
      'Sub-second sayfa yükleme performansı ve Core Web Vitals optimizasyonu',
      'Modüler bileşen mimarisi ve sıfır gereksiz JavaScript yükü',
      'Kurumsal arama motoru optimizasyonu (Teknik SEO & Yapısal Veri)'
    ],
    deliverables: [
      'Tam ölçeklenebilir React / Next.js / Vite web platformu',
      'Gereksinimlere özel içerik yönetim entegrasyonu',
      'Lighthouse 95+ performans ve erişilebilirlik garantisi',
      'Tüm cihazlarda kusursuz çalışan responsive tasarım'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite'],
    visualType: 'code-structure'
  },
  {
    id: 'custom-software',
    code: '02 / ÖZEL YAZILIM',
    title: 'Özel İş & Operasyon Yazılımları',
    tagline: 'Standart paket programların yetersiz kaldığı noktalarda iş akışınıza tam uyum sağlayan yazılımlar.',
    description: 'Şirketinizin kendine özgü iç süreçleri, onay zincirleri ve veri akışları için terzi dikimi yazılımlar üretiyoruz. Dağınık Excel tabloları ve birbirine bağlanamayan araçlar yerine, tek merkezden yönetilen güvenli operasyonel platformlar teslim ediyoruz.',
    architectureDetails: [
      'Rol ve yetki tabanlı erişim kontrolü (Granular RBAC)',
      'İş akışı otomasyonları ve gerçek zamanlı bildirim servisleri',
      'Üçüncü parti servis (ERP, muhasebe, kargo, SMS) API entegrasyonları',
      'Yüksek veri bütünlüğü ve şifrelenmiş veri depolama'
    ],
    deliverables: [
      'Özel yönetim paneli ve çalışan portalları',
      'Güvenli REST / GraphQL API katmanı',
      'Otomatik raporlama ve veri dışa aktarım modülleri',
      'Detaylı teknik mimari ve kullanım dokümantasyonu'
    ],
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'REST API'],
    visualType: 'api-flow'
  },
  {
    id: 'digital-products',
    code: '03 / DİJİTAL ÜRÜNLER',
    title: 'SaaS & Dijital Ürün Geliştirme',
    tagline: 'Fikrinizi pazara çıkmaya hazır, ölçeklenebilir çalışan bir ürüne dönüştürüyoruz.',
    description: 'Yeni bir dijital girişim veya kurum içi bir SaaS ürünü hayata geçirirken, fikrinizi pazarla buluşturacak MVP (Minimum Viable Product) aşamasından tam ölçekli üretim altyapısına kadar uçtan uca yanınızdayız. Hızlı iterasyon ve sağlam temeller bir arada.',
    architectureDetails: [
      'Abonelik ve ödeme altyapıları (Stripe, iyzico, vb.)',
      'Çok kiracılı (Multi-tenant) veri mimarisi',
      'Olay güdümlü (Event-driven) arka plan kuyrukları ve bildirimler',
      'Sıfır kesintili dağıtım ve bulut izleme altyapısı'
    ],
    deliverables: [
      'Pazara sunulmaya hazır uçtan uca web uygulaması',
      'Kullanıcı kimlik doğrulama, profil ve abonelik modülleri',
      'Analitik ve kullanıcı davranışı izleme entegrasyonu',
      'Sürekli entegrasyon (CI/CD) boru hattı kurulumu'
    ],
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tauri', 'Cloud Infrastructure'],
    visualType: 'saas-modules'
  },
  {
    id: 'ui-ux-engineering',
    code: '04 / TASARIM MÜHENDİSLİĞİ',
    title: 'UI/UX & Tasarım Sistemleri',
    tagline: 'Yalnızca şık değil; okunabilir, erişilebilir ve yazılıma doğrudan uyumlu arayüzler.',
    description: 'Tasarımı koddan bağımsız bir çizim olarak değil, yaşayan bir mühendislik bileşeni olarak ele alıyoruz. Markanızın kimliğini tipografi, ızgara sistemi ve renk hiyerarşisiyle buluşturup doğrudan bileşen kütüphanesine dönüştürüyoruz.',
    architectureDetails: [
      'Matematiksel tipografi skalası ve tutarlı boşluk hiyerarşisi',
      'WCAG AA kontrast ve erişilebilirlik standartları',
      'Tasarım belirteçleri (Design Tokens) ile kod uyumu',
      'Gereksiz süslemelerden arındırılmış, işlev odaklı etkileşimler'
    ],
    deliverables: [
      'Genişletilebilir Figma tasarım sistemi ve bileşen kütüphanesi',
      'Tıklanabilir yüksek sadakatli etkileşimli prototipler',
      'Tasarım belirteçleri JSON ve Tailwind konfigürasyon paketi',
      'Tüm durumları (boş, hata, yükleniyor) içeren arayüz şablonları'
    ],
    techStack: ['Design Systems', 'Design Tokens', 'Figma to Code', 'Tailwind CSS', 'A11y'],
    visualType: 'design-tokens'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proje-01',
    code: 'PROJE 01',
    title: 'Kurumsal Endüstriyel Platform',
    clientType: 'Endüstriyel İmalat & Global İhracat',
    category: 'Kurumsal Web Mimarisi',
    year: '2024 / Q3',
    summary: 'Ağır sanayi parçaları üreten bir ihracat markası için çok dilli, yüksek hızlı ve teknik katalog altyapısına sahip kurumsal web mimarisi.',
    challenge: 'Geniş ürün kataloğundaki binlerce teknik çizimin ve PDF veri föyünün arama motorlarında hızlı indekslenmesi ve mobil cihazlarda gecikmesiz açılması gerekiyordu.',
    architectureSolution: 'Next.js tabanlı statik sayfa ön-derleme (SSG) ile milisaniye düzeyinde yanıt süresi sağlandı. Teknik katalog için istemci tarafında anlık filtreleme ve önbellek mekanizması kuruldu.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Headless CMS', 'Cloudflare Edge'],
    deliverables: [
      'Çok dilli (TR/EN/DE) dinamik teknik katalog',
      'Milisaniyelik parametrik ürün arama ve filtreleme motoru',
      'Mobil odaklı PDF teknik föy görüntüleyici',
      'Teknik SEO & Schema.org endüstriyel ürün işaretlemeleri'
    ],
    specs: [
      { label: 'Sayfa Açılış Hızı', value: '< 0.4s' },
      { label: 'Lighthouse Performans', value: '99 / 100' },
      { label: 'Mimari', value: 'Edge SSR / SSG' },
      { label: 'Katalog Hacmi', value: '1.200+ Teknik Parça' }
    ]
  },
  {
    id: 'proje-02',
    code: 'PROJE 02',
    title: 'Özel Lojistik & Depo Operasyon Sistemi',
    clientType: 'B2B Dağıtım & Tedarik Zinciri',
    category: 'Özel İş Yazılımı',
    year: '2024 / Q4',
    summary: 'Dağınık depo noktaları, koli takipleri ve sevkiyat planlamalarını tek ekranda toplayan rol bazlı operasyonel iç yönetim yazılımı.',
    challenge: 'Mevcut işletmede tüm takip telefon trafiği ve Excel tabloları üzerinden yürütülüyor, stok kayıpları ve sevkiyat gecikmeleri yaşanıyordu.',
    architectureSolution: 'PostgreSQL üzerinde güçlü bir ilişkisel veri modeli ve rol bazlı erişim mekanizması inşa edildi. Depo personeli için barkod okutmalı mobil web arayüzü hazırlandı.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    deliverables: [
      'Gerçek zamanlı depo stok durumu ve lokasyon haritası',
      'Barkod & QR kod ile anında mal kabul ve çıkış akışı',
      'Müşteri sipariş durumu takip paneli ve SMS entegrasyonu',
      'Günlük ve aylık otomatik operasyonel özet raporları'
    ],
    specs: [
      { label: 'Kullanıcı Rolleri', value: '4 Kademe (Yönetici, Şef, Saha, Müşteri)' },
      { label: 'Veritabanı', value: 'PostgreSQL Relational' },
      { label: 'Yanıt Süresi API', value: '< 45ms' },
      { label: 'Entegrasyon', value: 'ERP & Kargo API' }
    ]
  },
  {
    id: 'proje-03',
    code: 'PROJE 03',
    title: 'SaaS Finansal Veri & Analitik Portalı',
    clientType: 'Dijital Girişim / Fintech',
    category: 'Dijital Ürün & SaaS',
    year: '2025 / Q1',
    summary: 'KOBİ’lerin nakit akışını ve periyodik abonelik harcamalarını grafiklerle analiz eden çok kiracılı SaaS web uygulaması prototipi.',
    challenge: 'Kullanıcıların karmaşık banka ekstrelerini ve gelir-gider kalemlerini gecikmesiz, anlaşılır ve güvenli bir arayüzde görselleştirme ihtiyacı.',
    architectureSolution: 'Supabase Row-Level Security (RLS) ile müşteri verilerinin tam izolasyonu sağlandı. Recharts & D3 matematiksel vektörleriyle anlık finansal grafik panelleri geliştirildi.',
    stack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vite'],
    deliverables: [
      'Güvenli e-posta ve iki adımlı doğrulama (2FA)',
      'Otomatik kategori eşleme ve gelir/gider grafik panosu',
      'PDF ve Excel formatında aylık bilanço dışa aktarımı',
      'Kullanıcı bazlı bütçe alarm ve sınır bildirimleri'
    ],
    specs: [
      { label: 'Veri İzolasyonu', value: 'Supabase RLS Enforced' },
      { label: 'Grafik Motoru', value: 'Vektörel SVG / D3' },
      { label: 'Veri Formatı', value: 'Gerçek Zamanlı Senkron' },
      { label: 'Güvenlik', value: 'Uçtan Uca Şifreli İletişim' }
    ]
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: '01',
    title: 'Keşif & Kapsam Belirleme',
    phaseLabel: 'MİMARİ ÖNCESİ ANALİZ',
    duration: '3 — 5 Gün',
    description: 'Projenin hedeflerini, hedef kitlesini ve teknik sınırlarını netleştiriyoruz. Nelerin gerçekten yapılması gerektiğini, nelerin gereksiz maliyet ve zaman kaybı olacağını dürüstçe masaya yatırıyoruz.',
    deliverables: [
      'Ayrıntılı Teknik İhtiyaç & Kapsam Dokümanı',
      'Teknoloji yığını ve mimari yol haritası kararı',
      'Net teslim takvimi ve kesin bütçe planı'
    ],
    technicalAudit: 'Gereksiz kütüphane ve karmaşıklığın önüne geçilerek amaca en uygun temel seçilir.'
  },
  {
    step: '02',
    title: 'Arayüz & Sistem Mimarisi',
    phaseLabel: 'TASARIM & VERİ MODELLEME',
    duration: '1 — 2 Hafta',
    description: 'Estetik ile mühendisliği birleştiriyoruz. Kullanıcıların takılmadan gezineceği ekran akışlarını, veritabanı şemasını ve bileşen tasarım sistemini henüz kod yazmadan önce eksiksiz kurguluyoruz.',
    deliverables: [
      'Tıklanabilir yüksek sadakatli ekran prototipleri',
      'Veritabanı ilişkisel şeması ve API sözleşmesi (Contract)',
      'Tipografi, renk ve bileşen tasarım tokenları'
    ],
    technicalAudit: 'Geliştirme aşamasında geri dönüşleri sıfıra indiren eksiksiz mimari onay süreci.'
  },
  {
    step: '03',
    title: 'Geliştirme & Performans Testi',
    phaseLabel: 'TEMİZ KOD & İNŞA SÜRECİ',
    duration: '2 — 4 Hafta',
    description: 'Belirlenen mimariye sadık kalarak, modüler ve belgelenmiş kod üretiyoruz. Her özelliği aşama aşama test ortamında sizinle paylaşıyor; geri bildirimlerinizi süreç içine dahil ediyoruz.',
    deliverables: [
      'Erişilebilir, modüler ve belgelenmiş kaynak kod tabanı',
      'Mobil, tablet ve masaüstü çapraz tarayıcı testleri',
      'Güvenlik ve Core Web Vitals performans denetimleri'
    ],
    technicalAudit: 'Haftalık canlı test ortamı incelemeleri ile şeffaf ilerleme takibi.'
  },
  {
    step: '04',
    title: 'Yayına Alma & Destek',
    phaseLabel: 'CANLIYA GEÇİŞ & SÜREKLİLİK',
    duration: 'Kesintisiz',
    description: 'Ürününüzü sıfır kesintiyle bulut sunucularına taşıyor, alan adı ve SSL konfigürasyonlarını tamamlıyoruz. Yayına alındıktan sonra da sisteminizi yalnız bırakmıyor, teknik destek sunuyoruz.',
    deliverables: [
      'Bulut altyapısı (Edge CDN, SSL, DNS) tam kurulumu',
      'Eğitim ve yönetim paneli kullanım kılavuzu',
      'Hata izleme ve performans takip servislerinin entegrasyonu',
      'Gereksinim halinde periyodik bakım ve geliştirme desteği'
    ],
    technicalAudit: 'Canlıya geçiş anında sıfır veri kaybı ve sürekli sistem izleme altyapısı.'
  }
];

export const PHILOSOPHY_DATA: StudioPhilosophy[] = [
  {
    code: '01 / MÜHENDİSLİK DİSİPLİNİ',
    title: 'Şablonlara Sığınmıyoruz',
    description: 'Hazır WordPress temalarını veya birbirinin kopyası şablonları düzenleyip size sunmuyoruz. İhtiyacınız olan her özelliği amaca yönelik, temiz ve sürdürülebilir kodla sıfırdan inşa ediyoruz.',
    practice: 'Her projenin kaynak kodu tamamen temiz, modüler ve şirketinize ait bir dijital varlıktır.'
  },
  {
    code: '02 / DOĞRUDAN İLETİŞİM',
    title: 'Aracı Yok, Doğrudan Geliştiriciyle İletişim',
    description: 'Taleplerinizi müşteri temsilcilerine anlatıp günlerce beklemezsiniz. Tasarımı ve kodu doğrudan geliştiren çekirdek ekiple yüz yüze veya görüntülü görüşür; anında teknik yanıt alırsınız.',
    practice: 'Karar alma sürelerini kısaltır, yanlış anlaşılmaları ve proje sarkmalarını engeller.'
  },
  {
    code: '03 / HIZ & PERFORMANS',
    title: 'Milisaniyelerin Önemi',
    description: 'Yavaş açılan bir web sitesi veya kasan bir kurumsal panel, doğrudan ciro ve itibar kaybıdır. Kodlarımızı sıkı optimizasyon süzgeçlerinden geçirerek en yüksek hızda çalışmasını sağlıyoruz.',
    practice: 'Google Lighthouse skorlarında 95+ ve anlık açılan arayüz standartları.'
  },
  {
    code: '04 / ÖLÇEKLENEBİLİR ALTYAPI',
    title: 'Geleceğe Hazır Mimari',
    description: 'İşletmeniz büyüdüğünde çökmeyen, yeni özellikler eklemek istediğinizde sil baştan yazılması gerekmeyen modüler ve modern bir teknoloji yığını seçiyoruz.',
    practice: 'TypeScript güvencesi, güçlü veritabanı şemaları ve test edilebilir bileşenler.'
  }
];

export const TECH_STACK_DATA: TechnologyItem[] = [
  {
    name: 'React',
    category: 'Frontend',
    role: 'Kullanıcı Arayüzü Kütüphanesi',
    strengths: 'Zengin ekosistem, yüksek performanslı bileşen yapısı',
    primaryUse: 'Dinamik, etkileşimli ve modüler web uygulamalarının arayüz omurgası.'
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    role: 'Full-Stack React Çatısı',
    strengths: 'Hibrit SSR/SSG, gelişmiş SEO, otomatik optimizasyon',
    primaryUse: 'Arama motoru dostu, hızlı indekslenen kurumsal web siteleri ve platformlar.'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    role: 'Tip Güvenli JavaScript',
    strengths: 'Statik tip denetimi, sıfır çalışma zamanı sürprizi',
    primaryUse: 'Büyüyen projelerde kod kalitesini ve ekip içi bakım kolaylığını garanti altına alma.'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    role: 'Modern Stil Motoru',
    strengths: 'Minimal paket boyutu, kusursuz tasarım tutarlılığı',
    primaryUse: 'Özel tasarım sistemlerinin hızlı ve performanslı biçimde kodlanması.'
  },
  {
    name: 'Vite',
    category: 'Altyapı & Derleme',
    role: 'Yeni Nesil Derleyici',
    strengths: 'Ultra hızlı derleme ve optimize edilmiş üretim paketi',
    primaryUse: 'Hızlı prototipleme ve bağımsız web uygulaması paketleme.'
  },
  {
    name: 'Node.js',
    category: 'Backend & Sistem',
    role: 'Sunucu Çalışma Zamanı',
    strengths: 'Olay güdümlü, hafif ve yüksek eşzamanlı I/O',
    primaryUse: 'Hızlı API servisleri, arka plan işleyicileri ve mikroservisler.'
  },
  {
    name: 'Python',
    category: 'Backend & Sistem',
    role: 'Analitik & Veri İşleme',
    strengths: 'Güçlü veri kütüphaneleri, otomasyon kabiliyeti',
    primaryUse: 'Veri işleme işleri, özel algoritma ve entegrasyon servisleri.'
  },
  {
    name: 'PostgreSQL',
    category: 'Veri & Bulut',
    role: 'İlişkisel Veritabanı',
    strengths: 'Yüksek ACID güvenliği, JSON desteği, ölçeklenebilirlik',
    primaryUse: 'Karmaşık kurumsal veriler, finansal işlemler ve operasyonel tablolar.'
  },
  {
    name: 'Supabase',
    category: 'Veri & Bulut',
    role: 'Açık Kaynak Bulut Veritabanı',
    strengths: 'Row-Level Security, anlık veri akışı, kimlik doğrulama',
    primaryUse: 'Hızlı geliştirilmesi gereken SaaS ürünleri ve güvenli veri katmanları.'
  },
  {
    name: 'Tauri',
    category: 'Altyapı & Derleme',
    role: 'Hafif Masaüstü Uygulama Motoru',
    strengths: 'Rust tabanlı minimal RAM tüketimi, yüksek güvenlik',
    primaryUse: 'Kurum içi işletim sistemine entegre özel masaüstü araçları.'
  }
];

export const PROJECT_TYPES: ProjectType[] = [
  'Web Sitesi',
  'Özel Yazılım',
  'E-ticaret',
  'UI/UX',
  'Dijital Ürün',
  'Diğer'
];

export const BUDGET_RANGES: BudgetRange[] = [
  '25.000 TL – 50.000 TL',
  '50.000 TL – 100.000 TL',
  '100.000 TL – 250.000 TL',
  '250.000 TL+',
  'Henüz Belirlenmedi'
];
