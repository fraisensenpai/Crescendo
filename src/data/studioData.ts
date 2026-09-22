import { ProjectItem, ServiceItem, ProcessStep, TechnologyItem, StudioPhilosophy, ProjectType, BudgetRange } from '../types.ts';

export const STUDIO_CONFIG = {
  name: 'Crescendo Software',
  tagline: 'Modern Web & Özel Yazılım Çözümleri',
  email: 'crescendosoftwareinc@gmail.com',
  location: 'İstanbul, Türkiye',
  timezone: 'GMT+3 (TSI)',
  status: 'Yeni projelere açık',
  responseSLA: '24 saat içinde doğrudan dönüş',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    code: '01 / WEB SİTESİ',
    title: 'Web Sitesi Tasarımı & Geliştirme',
    tagline: 'Hazır tema satın almadan, işinize göre sıfırdan tasarlanıp kodlanan web siteleri.',
    description: 'İşletmenizi internette doğru şekilde temsil eden; hızlı açılan, telefonda da masaüstünde de düzgün görünen siteler geliştiriyoruz. Arama motorlarında bulunabilmeniz için gereken teknik temeli kuruyor, içeriğinizi sonradan rahatça güncelleyebileceğiniz bir yapı bırakıyoruz.',
    highlights: [
      'Kurumsal tanıtım siteleri, ürün-hizmet katalogları ve açılış sayfaları',
      'Telefon, tablet ve masaüstünde sorunsuz görünen tasarım',
      'Arama motoru için teknik düzen: sayfa başlıkları, site haritası, yapısal veri',
      'İçeriğinizi kendiniz güncelleyebileceğiniz yönetim paneli (ihtiyaç halinde)'
    ],
    deliverables: [
      'Tasarımı ve koduyla size ait, şablon olmayan bir site',
      'İhtiyaca uygun içerik yönetimi veya kolay düzenlenebilir sayfa yapısı',
      'Yayın öncesi hız, erişilebilirlik ve mobil kontrol listesi',
      'Alan adı, SSL ve yayına alma kurulumu'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite']
  },
  {
    id: 'custom-software',
    code: '02 / ÖZEL YAZILIM',
    title: 'İş Süreçlerinize Özel Yazılım',
    tagline: 'Hazır paketlerin yetmediği yerde, kendi iş akışınıza göre çalışan yazılımlar.',
    description: 'Excel tabloları, mesaj yazışmaları ve birbirini görmeyen programlar arasında dağılan süreçleri tek bir panelde topluyoruz. Sipariş, stok, onay, personel veya müşteri takibi gibi işlerinizi kendi kurallarınıza göre yürüten yazılımlar geliştiriyoruz.',
    highlights: [
      'Rol ve yetki kontrolü: kim neyi görecek, kim neyi değiştirecek',
      'Onay akışları, hatırlatmalar ve otomatik e-postalar',
      'Muhasebe, ERP, kargo veya SMS gibi mevcut sistemlerle entegrasyon',
      'Verinizin size ait kaldığı, yedeklenen bir veri yapısı'
    ],
    deliverables: [
      'Ekip için yönetim paneli, gerekiyorsa müşteri/çalışan portalı',
      'İhtiyaca göre kurgulanmış kullanıcı yetkilendirmesi',
      'Rapor ekranları ve Excel / PDF dışa aktarımı',
      'Kurulum, kullanım eğitimi ve teknik dokümantasyon'
    ],
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'Supabase', 'REST API']
  },
  {
    id: 'digital-products',
    code: '03 / DİJİTAL ÜRÜN',
    title: 'Dijital Ürün & SaaS Geliştirme',
    tagline: 'Fikrinizi, kullanılabilir ve yayına hazır bir ürüne dönüştürüyoruz.',
    description: 'Önce gerçekten gerekli olan çekirdek özellikleri yayına alıyor, ardından kullanıcı geri bildirimine göre ürünü adım adım büyütüyoruz. Fikrinizi teknik terimlere boğmadan; kime, neyi, neden sunduğunuzu netleştirerek ilerliyoruz.',
    highlights: [
      'Üyelik, giriş ve abonelik altyapısı',
      'Ödeme entegrasyonu (Stripe, iyzico ve benzeri)',
      'Ürün içi bildirimler ve otomatik e-posta akışları',
      'Ürünün nasıl kullanıldığını görebileceğiniz sade bir ölçüm paneli'
    ],
    deliverables: [
      'Yayına hazır web uygulaması ve yönetim paneli',
      'Kullanıcı hesapları, roller ve abonelik yönetimi',
      'Ödeme ve e-posta servisleriyle çalışan akışlar',
      'Yeni sürümleri yayına alan dağıtım düzeni ve kısa kullanım kılavuzu'
    ],
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Tauri', 'Cloud Infrastructure']
  },
  {
    id: 'ui-ux-engineering',
    code: '04 / ARAYÜZ TASARIMI',
    title: 'Arayüz Tasarımı & Kullanılabilirlik',
    tagline: 'Şık olduğu kadar kolay kullanılan, ne yapacağı anlaşılan arayüzler.',
    description: 'Arayüzü sonradan eklenen bir süs olarak değil, ürünün çalışan bir parçası olarak ele alıyoruz. Ekranları kullanıcının gerçekte ne yapmaya çalıştığına göre kurguluyor, tasarımı doğrudan koda dönüşecek şekilde hazırlıyoruz.',
    highlights: [
      'Ekran akışları ve tıklanabilir prototipler',
      'Tekrar kullanılabilir bileşenler ve tutarlı bir tasarım dili',
      'Okunabilirlik, kontrast ve erişilebilirlik kontrolü',
      'Geliştiriciye teslim edilmeye hazır tasarım dosyaları'
    ],
    deliverables: [
      'Kullanıcı akışlarını gösteren tıklanabilir prototip',
      'Bileşen kütüphanesi ve stil kılavuzu',
      'Mobil ve masaüstü ekran tasarımları',
      'Geliştirme boyunca tasarım kontrolü ve geri bildirim'
    ],
    techStack: ['Figma', 'Design Tokens', 'Tailwind CSS', 'Erişilebilirlik']
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fikir-akademisi',
    code: 'PROJE 01',
    title: 'Fikir Akademisi',
    clientType: 'Eğitim Teknolojileri · Okul Dijital Kütüphane & Okuma Platformu',
    category: 'Education Platform',
    summary: 'Bir okul için geliştirilen; dijital kütüphane, okuma takibi, ödev ve quiz yönetimini tek platformda birleştiren eğitim uygulaması.',
    challenge: 'Öğrencilerin okuma süreçlerinin ölçülemiyor olması, kitap ödevlerinin ve quizlerin dağınık araçlarla yürütülmesi ve öğrenci, öğretmen, geliştirici rollerinin birbirinden yalıtılmış yetkilerle çalışması gerekliliği.',
    architectureSolution: 'React 19 + Vite ile geliştirilen arayüz, Supabase PostgreSQL üzerinde rol bazlı veri izolasyonu ile çalışır. Kitaplar sayfa sayfa okunur; aktif okuma süresi, ilerleme, not ve vurgular veritabanında saklanır. Öğretmen paneli kitap ödevlerini, quizleri ve öğrenci ilerlemesini yönetir. Fikir AI asistanı, kitap özetleme ve kavram açıklama için Google Gemini üzerinden entegre edilmiştir.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Google Gemini'],
    deliverables: [
      'Sayfa sayfa çalışan dijital kitap okuyucu',
      'Not alma ve vurgulama sistemi',
      'AI destekli Fikir AI okuma asistanı (özetleme ve kavram açıklama)',
      'Aktif okuma süresi takibi ve okuma ilerleme raporları',
      'Öğretmen paneli: kitap ödevi oluşturma ve takip',
      'Quiz sistemi ve soru kapıları',
      'Gamification ve okuyucu seviyeleri',
      'Şüpheli okuma tespiti (anti-cheat)',
      'Kitap aktarım sistemi',
      'Üç rol: öğrenci, öğretmen, geliştirici',
      'Supabase PostgreSQL + RLS veri katmanı'
    ],
    specs: [
      { label: 'Frontend', value: 'React 19 + Vite' },
      { label: 'Kullanıcı Rolleri', value: '3 (Öğrenci / Öğretmen / Geliştirici)' },
      { label: 'Veri Katmanı', value: 'Supabase PostgreSQL + RLS' },
      { label: 'AI Asistan', value: 'Fikir AI (Google Gemini)' }
    ],
    preview: {
      kind: 'schematic',
      headerLabel: 'ÜRÜN AKIŞI: DİJİTAL KÜTÜPHANE & OKUMA TAKİBİ',
      headerBadge: 'React 19 + Supabase',
      rows: [
        { label: '1. Dijital Kitap Okuyucu [Sayfa Sayfa]', value: 'Not & Vurgu', width: 100 },
        { label: '2. Aktif Okuma Süresi & İlerleme Takibi', value: 'Öğretmen Paneli', width: 84 },
        { label: '3. Fikir AI Okuma Asistanı', value: 'Özet & Kavram', width: 72 }
      ],
      footerLeft: 'ROLLER: ÖĞRENCİ · ÖĞRETMEN · GELİŞTİRİCİ',
      footerRight: 'RLS İLE ROL BAZLI ERİŞİM'
    }
  },
  {
    id: 'lc-waikiki-lojistik-yemekhane',
    code: 'PROJE 02',
    title: 'LC Waikiki Lojistik Yemekhane',
    clientType: 'LC Waikiki Lojistik Tesisleri · İstanbul, Silivri, Yalova, Aksaray',
    category: 'Corporate / Internal Platform',
    summary: 'Lojistik tesislerinde çalışanların günlük yemekhane menülerine telefonlarından ulaşabildiği ve yemekleri anonim olarak değerlendirebildiği mobil öncelikli kurumsal web uygulaması.',
    challenge: 'Menülerin Excel dosyaları üzerinden dağıtılması, çalışanların telefonlarından menüye giriş yapmadan erişememesi ve yemek memnuniyetinin ölçülememesi. Dört ayrı tesisteki ana menü ve gece kahvaltısı verisinin düzenli biçimde ayrıştırılıp veritabanıyla karşılaştırılarak aktarılması gerekiyordu.',
    architectureSolution: 'Yönetim tarafında aylık Excel menü dosyaları 7 sheet yapısını okuyan kural tabanlı parser ile ayrıştırılır; tarihler, yemekler ve kalori bilgileri okunur, yemekler anahtar kelime eşleştirmesiyle otomatik kategorilere ayrılır. Veriler karşılaştırılarak veritabanına aktarılır ve menüler başka günlere kopyalanabilir. Çalışan tarafında giriş gerektirmeyen menü görünümü ve anonim yemek oylaması sunulur; veri katmanı Supabase PostgreSQL ve RLS ile korunur.',
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'SheetJS', 'Recharts'],
    deliverables: [
      'Günlük menü görüntüleme (mobil öncelikli)',
      '4 farklı lojistik lokasyonu için ayrı menü akışı',
      'Ana Menü ve Gece Kahvaltısı görünümleri',
      'Anonim yemek bazlı oylama (Beğendim / Beğenmedim)',
      '7 sheet yapısını okuyan Excel parser ile otomatik menü aktarımı',
      'Anahtar kelime tabanlı otomatik yemek kategorilendirme',
      'Kalori bilgilerinin menüye işlenmesi',
      'Menü düzenleme paneli ve menüleri başka günlere kopyalama',
      'Lokasyon ve kategori bazlı memnuniyet istatistikleri',
      'Değişiklik geçmişi / audit log',
      'Yönetici paneli',
      'Supabase PostgreSQL + RLS veri katmanı'
    ],
    specs: [
      { label: 'Lokasyon', value: '4 Lojistik Tesisi' },
      { label: 'Menü Kaynağı', value: 'Excel Parser (7 Sheet)' },
      { label: 'Değerlendirme', value: 'Anonim Oylama' },
      { label: 'Veri Katmanı', value: 'Supabase PostgreSQL + RLS' }
    ],
    preview: {
      kind: 'module',
      label: 'KURUMSAL OPERASYON PANELİ',
      headline: 'Excel Parser ile Otomatik Menü Aktarımı ve Kategorilendirme',
      note: '4 Lokasyon • Ana Menü & Gece Kahvaltısı • Anonim Oylama'
    }
  },
  {
    id: 'ramazan-web-deneyimi',
    code: 'PROJE 03',
    title: 'Ramazan Özel Web Deneyimi',
    clientType: 'Ramazan Dönemi · Günlük İçerik & İbadet Zamanları',
    category: 'Interactive Web Experience',
    summary: 'Ramazan ayına özel geliştirilen, günlük dini içerikleri ve ibadet zamanlarını interaktif bir deneyimde bir araya getiren web uygulaması.',
    challenge: 'Günün ayeti ve hadisinin her ziyarette yenilenmesi, rastgele ayet keşfinin akıcı çalışması ve iftara kalan sürenin canlı geri sayımla kullanıcıya anlık gösterilmesi gerekiyordu.',
    architectureSolution: 'Günün ayeti ve hadisi, rastgele ayet akışı, namaz vakitleri ve iftar geri sayımı tek sayfalık interaktif bir deneyimde birleştirildi. Tasarım mobil öncelikli, sade ve hızlı yüklenen bir arayüz olarak kurgulandı.',
    stack: [],
    deliverables: [
      'Günün Ayeti',
      'Günün Hadisi',
      'Rastgele ayet sistemi',
      'Namaz vakitleri takibi',
      'İftara kalan süre ve canlı geri sayım',
      'Ramazan ayına özel günlük içerikler',
      'Mobil uyumlu, interaktif kullanıcı deneyimi'
    ],
    specs: [
      { label: 'Format', value: 'Tek Sayfa Web Deneyimi' },
      { label: 'İçerik', value: 'Günün Ayeti & Hadisi' },
      { label: 'Zamanlama', value: 'Namaz Vakitleri + İftar Geri Sayımı' },
      { label: 'Arayüz', value: 'Mobil Uyumlu & Minimal' }
    ],
    preview: {
      kind: 'module',
      label: 'İNTERAKTİF DENEYİM',
      headline: 'Günün Ayeti & Hadisi + Canlı İftar Geri Sayımı',
      note: 'Namaz Vakitleri • Rastgele Ayet • Mobil Uyumlu Tasarım'
    }
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
    note: 'Gereksiz kütüphane ve karmaşıklığın önüne geçilerek amaca en uygun temel seçilir.'
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
    note: 'Kod yazmadan önce onaylanan ekran akışları, sonradan yaşanan sürprizleri azaltır.'
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
    note: 'Her hafta çalışan bir test bağlantısı paylaşılır; ilerlemeyi kendiniz görürsünüz.'
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
    note: 'Yayına geçiş planı, yedekleme düzeni ve ilk gün desteği baştan birlikte belirlenir.'
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
    description: 'Yavaş açılan bir site ziyaretçiyi, kasan bir panel ise çalışanınızı yorar. Gereksiz yükü baştan almıyor, sayfaların hızlı açılmasına ve arayüzün akıcı kalmasına özen gösteriyoruz.',
    practice: 'Yalnızca gerçekten gereken kod tarayıcıya gider; sayfalar hafif kalır.'
  },
  {
    code: '04 / BÜYÜMEYE AÇIK YAPI',
    title: 'Sonradan Yeniden Yazdırmayan Temel',
    description: 'İşletmeniz büyüdüğünde sil baştan yazmanız gerekmeyen bir yapı kuruyoruz. Yeni bir özellik eklendiğinde mevcut sistem bozulmadan genişliyor, verileriniz düzenli kalıyor.',
    practice: 'Tip kontrolü, planlı veritabanı şemaları ve düzenli yedekleme.'
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
