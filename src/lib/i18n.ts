export type Language = 'tr' | 'en';

export const translations = {
    tr: {
        hero: {
            title: "Gürültüsüz Perspektif.",
            subtitle: "Emlak için dürüst dış mekan görselleri.\nSakin, güvenli ve net.",
            cta: "Çalışmaları Gör",
        },
        nav: {
            work: "Projeler",
            services: "Hizmetler",
            pricing: "Fiyatlar",
            about: "Hakkımda",
            contact: "İletişim",
        },
        portfolio: {
            title: "Seçilmiş İşler",
            description: "Görülmeye değer mekanlara sessiz bir bakış. Filtre yok, hızlandırma yok, sadece mülkün hissettirdiği gibi.",
        },
        services: {
            title: "Neler Yapıyorum",
            items: [
                {
                    title: "Dış Mekan Fotoğraf",
                    description: "Mülkü çevresiyle birlikte gösteren yüksek çözünürlüklü hava fotoğrafları. Öne çıkması gereken ilanlar için ideal.",
                },
                {
                    title: "Dış Mekan Video",
                    description: "Dış mekanın ve çevrenin akıcı, sinematik 4K video turları. 30-60 saniyelik yumuşak hareketler.",
                },
                {
                    title: "Tam Paket",
                    description: "Tam perspektif. Evin hikayesini anlatmak için birlikte çalışan fotoğraf ve video seti.",
                },
            ],
        },
        process: {
            title: "Nasıl Çalışıyorum",
            steps: [
                {
                    number: "01",
                    title: "Keşif",
                    description: "Önce mülkü ve çevresini inceliyorum. En iyi açıları ve günün hangi saatinin en iyi ışığı sunduğunu belirliyorum.",
                },
                {
                    number: "02",
                    title: "Çekim",
                    description: "Sessiz ve hızlı. Mülk sahiplerini rahatsız etmeden, planlanan kareleri ve video akışlarını yakalıyorum.",
                },
                {
                    number: "03",
                    title: "Teslim",
                    description: "Çekimden sonraki 24 saat içinde, renk düzenlemesi yapılmış ve paylaşıma hazır dosyaları dijital olarak teslim ediyorum.",
                }
            ]
        },
        pricing: {
            title: "Sade, Dürüst Fiyatlandırma",
            subtitle: "Gizli ücret yok. Yer özel bir konumdaysa, önce konuşuruz.",
            packages: {
                photo: {
                    title: "Fotoğraf Paketi",
                    features: ["10 dış mekan drone fotoğrafı", "Temiz düzenleme, kullanıma hazır", "Hızlı teslimat"],
                    cta: "Seç",
                },
                video: {
                    title: "Video Paketi",
                    features: ["1 dış mekan drone videosu", "30–60 saniye süre", "Akıcı, sinematik hareket"],
                    cta: "Seç",
                },
                bundle: {
                    badge: "En Popüler",
                    title: "Tam Paket",
                    features: ["Tüm Fotoğraflar + Video", "Eksiksiz kapsam", "Tek mülkler için en iyi değer"],
                    cta: "Paketi Seç",
                },
            },
            monthly: {
                title: "Emlakçılar İçin Aylık Planlar",
                starter: {
                    title: "Başlangıç Planı",
                    subtitle: "4 mülke kadar. Her biri için Fotoğraf + Video.",
                },
                pro: {
                    title: "Pro Plan",
                    subtitle: "8 mülke kadar. Her biri için Fotoğraf + Video.",
                },
                custom: {
                    title: "Özel Plan",
                    subtitle: "Daha yüksek hacim veya uzun vadeli işbirlikleri için.",
                    link: "Konuşalım",
                },
            },
        },
        about: {
            title: "Lensin Arkası",
            p1: "Ben bir prodüksiyon şirketi değilim. Mimarinin yukarıdan görünen sessiz geometrisini seven solo bir yaratıcıyım.",
            p2: "Amacım bir mülkü hiper-gerçekçi bir reklama dönüştürmek değil. Mekanın gerçek hissini—öğleden sonra ışığın çatıya vuruşunu, evin etrafındaki alanı—yakalamak.",
            p3: "Benimle çalıştığınızda şeffaflık, zamanınıza saygı ve doğru hissettiren görseller alırsınız.",
        },
        contact: {
            title: "İletişime Geçin",
            subtitle: "Konumu gönderin. Bakıp neler yapabileceğimi söyleyeyim.",
            whatsapp: "WhatsApp'tan Yazın",
            telegram: "Telegram'dan Yazın",
            responseTime: "Genellikle bir saat içinde dönerim.",
        },
    },
    en: {
        hero: {
            title: "Perspective without the noise.",
            subtitle: "Honest exterior visuals for real estate.\nCalm, confident, and clear.",
            cta: "View Work",
        },
        nav: {
            work: "Work",
            services: "Services",
            pricing: "Pricing",
            about: "About",
            contact: "Get in Touch",
        },
        portfolio: {
            title: "Selected Work",
            description: "A quiet look at spaces worth seeing. No filters, no speed-ramps, just the property as it feels.",
        },
        services: {
            title: "What I Do",
            items: [
                {
                    title: "Exterior Photos",
                    description: "High-resolution aerial stills that show the property in its context. Perfect for listings that need to stand out immediately.",
                },
                {
                    title: "Exterior Video",
                    description: "Smooth, cinematic 4K video tours of the exterior and surrounding landscape. 30-60 seconds of gentle motion.",
                },
                {
                    title: "Complete Package",
                    description: "The full perspective. A cohesive set of photos and video that work together to tell the story of the home.",
                },
            ],
        },
        process: {
            title: "How I Work",
            steps: [
                {
                    number: "01",
                    title: "Scout",
                    description: "I review the property and surroundings to find the best angles and the perfect light time.",
                },
                {
                    number: "02",
                    title: "Capture",
                    description: "Quiet and efficient. I capture the planned shots without disturbing the residents or neighbors.",
                },
                {
                    number: "03",
                    title: "Deliver",
                    description: "Within 24 hours (often less), you receive color-graded, ready-to-post visuals.",
                }
            ]
        },
        pricing: {
            title: "Simple, Honest Pricing",
            subtitle: "No hidden fees. If a place is special, we talk first.",
            packages: {
                photo: {
                    title: "Photo Package",
                    features: ["10 exterior drone photos", "Clean edits, ready to use", "Fast turnaround"],
                    cta: "Select",
                },
                video: {
                    title: "Video Package",
                    features: ["1 exterior drone video", "30–60 seconds duration", "Smooth, cinematic motion"],
                    cta: "Select",
                },
                bundle: {
                    badge: "Most Popular",
                    title: "Bundle",
                    features: ["All Photos + Video", "Complete coverage", "Best value for single properties"],
                    cta: "Select Bundle",
                },
            },
            monthly: {
                title: "Monthly Plans for Agents",
                starter: {
                    title: "Starter Plan",
                    subtitle: "Up to 4 properties. Photo + Video for each.",
                },
                pro: {
                    title: "Pro Plan",
                    subtitle: "Up to 8 properties. Photo + Video for each.",
                },
                custom: {
                    title: "Custom Plan",
                    subtitle: "For higher volume or long-term partnerships.",
                    link: "Let's discuss",
                },
            },
        },
        about: {
            title: "Behind the Lens",
            p1: "I’m not a production house. I’m a solo creator who loves the quiet geometry of architecture from above.",
            p2: "My goal isn't to make a property look like a hyper-real advertisement. It's to capture the genuine feeling of the place—the way the light hits the roof in the afternoon, the space around the home.",
            p3: "When you work with me, you get transparency, respect for your time, and visuals that feel true.",
        },
        contact: {
            title: "Let's connect.",
            subtitle: "Send me the location. I'll take a look and let you know what's possible.",
            whatsapp: "Chat on WhatsApp",
            telegram: "Chat on Telegram",
            responseTime: "I usually reply within an hour.",
        },
    },
};
