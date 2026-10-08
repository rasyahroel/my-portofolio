// =============================================================================
// PORTFOLIO CONTENT — edit everything here, no need to touch app/page.tsx
// =============================================================================
// WORKFLOW: Bahasa Indonesia is the source language you edit directly.
//   1. Edit the `id` block below (write naturally in Indonesian).
//   2. Send the same edit to Claude in chat and ask it to translate the
//      change into the `en` and `zh` blocks.
//   3. Paste Claude's translated text into those two blocks.
// After editing, save this file and:
//   - local dev: just refresh the browser (npm run dev auto-reloads)
//   - production: git commit + push (Vercel/Netlify will redeploy automatically)
// =============================================================================

export type Lang = "en" | "id" | "zh";

export const LANGS: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "id", label: "ID" },
    { code: "zh", label: "中文" },
];

// -----------------------------------------------------------------------------
// PROFILE — identity & contact info. Same across all languages.
// -----------------------------------------------------------------------------
export const PROFILE = {
    name: "Ramanda Syahputra",
    email: "rasyahroel132@gmail.com",
    phone: "082170733653",
    github: "https://github.com/rasyahroel",
    linkedin: "https://www.linkedin.com/in/ramanda-syahputra/",
};

// -----------------------------------------------------------------------------
// SKILLS — grouped by category. Shown as "/category-name" folders.
// Category keys are kept as short english slugs (design choice, same in every
// language, like real folder names). Skill values are also kept in English —
// that's the industry-standard convention even on Indonesian/Chinese CVs.
// -----------------------------------------------------------------------------
export const SKILLS: Record<string, string[]> = {
    languages: ["PHP", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "C# (learning)"],
    frameworks: [
        "Laravel",
        "FilamentPHP",
        "Inertia.js",
        "ReactJS",
        "NextJS",
        "Vue.js",
        "NestJS",
        "Express",
        "Tailwind",
        "Bootstrap",
        "Ant Design",
        "ASP.NET Core (learning)",
    ],
    databases: ["MySQL", "PostgreSQL"],
    "core-banking": ["Axway", "Temenos T24"],
    tools: [
        "Git",
        "REST API",
        "AJAX",
        "Redux",
        "jQuery",
        "Spatie Permission",
        "Postman",
        "Insomnia",
        "Figma",
        "SSH",
        "Docker (basic)",
        "Microsoft Office",
    ],

    "soft-skills": [
        "Leadership",
        "Teamwork",
        "Adaptive",
        "Time Management",
        "Growth Mindset",
        "Project Management",
        "Data Analysis",
        "Initiative",
    ],
};
// Shortcut: shots("slug") -> ["/projects/slug/1.jpg", "/projects/slug/2.jpg", "/projects/slug/3.jpg"].
// Put the files in public/projects/<slug>/ and uncomment the matching line in PROJECT_IMAGES.
const shots = (slug: string, count = 3, ext = "jpg"): string[] =>
    Array.from({ length: count }, (_, n) => `/projects/${slug}/${n + 1}.${ext}`);

// -----------------------------------------------------------------------------
// PROJECT_IMAGES — screenshots shown in the auto-playing carousel on each
// project card. Keyed by each project's "slug" field (same slug across all
// 3 languages), so the images stay in sync no matter which language a
// visitor is viewing. Put at least 3 images per project, in whatever order
// you want them to cycle. Paths are relative to /public.
// -----------------------------------------------------------------------------
export const PROJECT_IMAGES: Record<string, string[]> = {
    "core-banking-integration": [
        "/projects/core-banking-integration/1.jpg",
        "/projects/core-banking-integration/2.jpg",
        "/projects/core-banking-integration/3.jpg",
    ],
    "hotel-management-system": [
        "/projects/hotel-management-system/1.jpg",
        "/projects/hotel-management-system/2.jpg",
        "/projects/hotel-management-system/3.jpg",
    ],
    "web-clustering-sma": [
        "/projects/web-clustering-sma/1.jpg",
        "/projects/web-clustering-sma/2.jpg",
        "/projects/web-clustering-sma/3.jpg",
    ],
    "pmo-tracker": shots("pmo-tracker"),
    "api-portal": shots("api-portal"),
    "bulk-merchant-credential": shots("bulk-merchant-credential"),
    "credit-document-admin": shots("credit-document-admin"),
    "it-security-forms": shots("it-security-forms"),
    "pos-frontend": shots("pos-frontend"),
    "web-archive-downloader": shots("web-archive-downloader"),
    "cataloghub": shots("cataloghub"),
    "dev-portfolio": shots("dev-portfolio"),
    "warung-pos": shots("warung-pos"),
    "blog-news": shots("blog-news"),
    "company-landing": shots("company-landing"),
    "short-url": shots("short-url"),
    "destination-ticketing": shots("destination-ticketing"),
    "wallet-transfer-api": shots("wallet-transfer-api"),
};

// -----------------------------------------------------------------------------
// PROJECT_LINKS — OPTIONAL "GitHub" and "Live" buttons on a project card.
// Keyed by the project's slug, same for every language. Leave a project out
// (or leave a field out) and that button simply doesn't appear.
// -----------------------------------------------------------------------------
export interface ProjectLinks {
    github?: string; // repository URL
    url?: string; // live demo / website URL
}

export const PROJECT_LINKS: Record<string, ProjectLinks> = {
    "dev-portfolio": {
        github: "https://github.com/rasyahroel/my-portofolio",
        url: "https://rasyahroel.com",
    },
    // "cataloghub": { github: "https://github.com/rasyahroel/...", url: "https://..." },
    // "blog-news": { github: "https://github.com/rasyahroel/..." },
};


// -----------------------------------------------------------------------------
// TYPES — describes the shape every language's content must follow.
// -----------------------------------------------------------------------------
export interface ExperienceItem {
    company: string; // proper noun, usually same across languages
    position: string; // translate this
    period: string; // translate month/wording if you like (e.g. "Present" vs "Sekarang")
    location: string; // translate if you like
    description: string[]; // translate each bullet
}

export interface ProjectItem {
    slug: string; // stable id shared across all 3 languages — used to look up PROJECT_IMAGES below. Do not translate.
    category: string; // one of the slugs from projects.categories below — same value across all 3 languages, do not translate
    title: string; // translate if you like (or keep as project code-name)
    tech: string[]; // usually kept identical across languages (tech names)
    description: string;
}

export interface OrganizationItem {
    organization: string; // proper noun, usually same across languages
    role: string; // translate this
    period: string;
    location: string;
    description: string[];
}

export interface LangContent {
    nav: { home: string; about: string; experience: string; projects: string; contact: string };
    available: string; // small "available for work" badge in navbar
    downloadCv: string; // label on the "Download CV" button in the hero section

    // Hero terminal window — two typed lines: "whoami" and "mission.txt"
    terminal: { prompt: string; output: string }[];

    about: {
        eyebrow: string; // small command-style label above the heading
        title: string;
        educationTitle: string;
        poliDegree: string; // degree name at Politeknik Negeri Padang
        poliBullets: string[]; // notes/achievements under Politeknik (thesis, side projects, etc.)
        smkDegree: string; // degree name at SMKN 1 Batam
        locationTitle: string;
        locationLabel: string;
        locationValue: string;
        languagesLabel: string;
        languagesValue: string;
        bio: string; // the personal "About Me" paragraph
        skillsTitle: string;
    };

    experience: {
        eyebrow: string;
        title: string;
        items: ExperienceItem[]; // must have the same NUMBER of items in every language
    };

    // Organizational / volunteer experience — shown as a smaller subsection
    // under Work Experience, separate from paid jobs.
    organization: {
        eyebrow: string;
        title: string;
        items: OrganizationItem[]; // must have the same NUMBER of items in every language
    };

    projects: {
        eyebrow: string;
        title: string;
        // Filter tabs shown above the project grid. "all" is added
        // automatically by the page — list only the real categories here.
        // Each project's `category` field (above) must match one of these
        // slugs exactly.
        categories: { slug: string; label: string }[];
        allLabel: string; // label for the "show everything" tab, e.g. "All"
        showMore: string; // e.g. "Show more"
        showLess: string; // e.g. "Show less"
        items: ProjectItem[]; // must have the same NUMBER of items in every language
    };

    contact: {
        eyebrow: string;
        title: string;
        subtitle: string;
        emailLabel: string;
        phoneLabel: string;
    };

    footer: string; // short "built with ..." line
}

// =============================================================================
// CONTENT — one full block per language. Edit freely.
// =============================================================================
export const CONTENT: Record<Lang, LangContent> = {
    // ---------------------------------------------------------------------------
    // INDONESIAN — SOURCE OF TRUTH. Edit this block first (natural for you to
    // write), then ask Claude to translate your changes into "en" and "zh".
    // ---------------------------------------------------------------------------
    id: {
        nav: { home: "beranda", about: "tentang", experience: "pengalaman", projects: "proyek", contact: "kontak" },
        available: "Terbuka untuk Kerja",
        downloadCv: "Download CV",
        terminal: [
            { prompt: "$ whoami", output: "Ramanda Syahputra — IT Developer / Fullstack Developer" },
            {
                prompt: "$ cat mission.txt",
                output:
                    "Lulusan Politeknik Negeri Padang dengan pengalaman tiga tahun sebagai Fullstack Developer, lebih kuat di sisi frontend. Saat ini membangun aplikasi internal dan API core banking menggunakan Laravel, FilamentPHP, Vue, Next.js, dan Axway.",
            },
        ],
        about: {
            eyebrow: "$ cat about.md",
            title: "Tentang Saya",
            educationTitle: "Pendidikan",
            poliDegree: "Sarjana Terapan Komputer (S.Tr.Kom.) — D4 Teknologi Rekayasa Perangkat Lunak",
            poliBullets: [
                "Jurusan Teknologi Informasi, IPK 3.38/4.00",
                "Tugas Akhir: Clustering K-Medoids untuk Siswa SMA di Kota Padang",
                "QA pada project mobile CekFilm",
            ],
            smkDegree: "Teknik Elektronika Industri",
            locationTitle: "Lokasi & Info",
            locationLabel: "lokasi:",
            locationValue: "Harapan Mulya, Kec. Kemayoran, Jakarta Pusat",
            languagesLabel: "bahasa:",
            languagesValue: "Bahasa Indonesia (Native), Inggris (Intermediate), Korea/Prancis/Mandarin/Melayu (Basic)",
            bio: "Fullstack Developer dengan pengalaman tiga tahun dalam pengembangan aplikasi web, lebih kuat di sisi frontend. Di Bank Artha Graha Internasional membangun aplikasi internal dengan Laravel, FilamentPHP, Vue, dan Next.js, serta mengembangkan API core banking di Axway. Berpengalaman dengan React.js, Next.js, dan NestJS, serta mengelola integrasi API, database, dan migrasi data untuk kebutuhan bisnis yang kompleks. Di luar pekerjaan utama, aktif sebagai freelancer di Asitatech Digital Indonesia, terutama frontend POS berbasis React.js dan aplikasi Laravel/Filament. Saat ini juga mendalami ekosistem .NET lewat project API dengan ASP.NET Core. Berorientasi pada kualitas, performa, dan solusi yang mudah dipelihara.",
            skillsTitle: "Keahlian Teknis",
        },
        experience: {
            eyebrow: "$ git log --experience --oneline",
            title: "Pengalaman Kerja",
            items: [
                {
                    company: "Bank Artha Graha Internasional",
                    position: "IT Developer (Web Application)",
                    period: "Nov 2024 - Sekarang",
                    location: "Jakarta, Indonesia",
                    description: [
                        "Membangun aplikasi web internal untuk berbagai tim di bank, terutama dengan Laravel dan FilamentPHP",
                        "Salah satunya aplikasi pelacakan dokumen kredit antar cabang, lengkap dengan filter, datatable, dan export",
                        "Lainnya berupa admin panel dengan manajemen role dan permission (RBAC) serta import/export Excel",
                        "Menulis frontend aplikasi web internal untuk tim IT Development dan PMO menggunakan Next.js (backend direncanakan dengan Golang dan ditangani terpisah)",
                        "Membangun fondasi frontend developer portal internal untuk layanan API: Laravel, Inertia.js, Vue 3, dan admin panel Filament",
                        "Mengembangkan API menggunakan Axway untuk operasional core banking",
                        "Membantu migrasi data dari core banking dan sumber lain ke aplikasi baru",
                        "Melakukan pengujian aplikasi (unit, integration, system, UAT) dan kasus ATM bersama IT Support",
                    ],
                },
                {
                    company: "Asitatech Digital Indonesia",
                    position: "Freelance Fullstack Developer",
                    period: "Nov 2025 - Sekarang",
                    location: "Jakarta, Indonesia",
                    description: [
                        "Membangun Wayback, aplikasi Laravel/FilamentPHP untuk mengunduh situs arsip dari Wayback Machine: unduhan berjalan di UI multi-queue berbasis kartu, setiap anggota hanya melihat datanya sendiri, dan HTML hasil unduhan dibersihkan dari toolbar Wayback dengan link internal diarahkan ke path lokal",
                        "Memigrasikan database Wayback ke skema baru dengan seeder yang bisa dijalankan ulang",
                        "Membangun frontend React.js aplikasi POS yang terhubung ke backend Golang lewat JSON API",
                        "Membuat landing page perusahaan dengan PHP native",
                    ],
                },
                {
                    company: "PT. Koding Teknologi Asia (Udacoding)",
                    position: "Fullstack Developer",
                    period: "Aug 2023 - Aug 2024",
                    location: "Batam, Indonesia",
                    description: [
                        "Menggunakan framework Laravel, Tailwind, Bootstrap, dan JavaScript",
                        "Bekerja sama dengan perusahaan COEDEV dari Malaysia dalam pengembangan project",
                        "Frontend development menggunakan JavaScript AJAX",
                        "Membuat REST API dengan menerapkan Repo Service Pattern",
                    ],
                },
                {
                    company: "LPK Rahmatullah Training Centre & Dinas Tenaga Kerja Kota Batam",
                    position: "Peserta Pelatihan & Sertifikasi Perakitan Komputer",
                    period: "Jun 2023",
                    location: "Batam, Indonesia",
                    description: [
                        "Melaksanakan prosedur keselamatan kerja",
                        "Mengidentifikasi perangkat penyusun dan spesifikasi komputer",
                        "Melakukan inventarisasi hardware dan software",
                        "Mempelajari komponen-komponen hardware pada CPU serta cara perawatannya",
                        "Melakukan instalasi sistem operasi",
                    ],
                },
                {
                    company: "PT. Akasia Code Digital (Code X Academy)",
                    position: "Bootcamp Fullstack NodeJS",
                    period: "Dec 2022 - Mar 2023",
                    location: "Jakarta, Indonesia",
                    description: [
                        "Berkolaborasi dengan tim untuk mengembangkan aplikasi web manajemen hotel sesuai kebutuhan stakeholder",
                        "Menguasai PostgreSQL sebagai relational database management system",
                        "Mengembangkan backend menggunakan Express dan NestJS",
                        "Mengembangkan frontend menggunakan ReactJS dan NextJS",
                        "Menggunakan Tailwind CSS untuk proses desain web",
                        "Memahami dasar JavaScript, konsep TypeScript, dan prinsip OOP secara mendalam",
                        "Mengembangkan aplikasi web penuh berdasarkan Entity Relationship Diagram dan Business Requirements Document",
                    ],
                },
                {
                    company: "Coding Collective",
                    position: "Frontend Development (Magang)",
                    period: "Aug 2021 - Dec 2021",
                    location: "Yogyakarta, Indonesia",
                    description: [
                        "Berkolaborasi dengan tim sebagai frontend developer untuk aplikasi web blog & artikel perusahaan",
                        "Melakukan slicing desain dari Figma menjadi halaman Bootstrap/PHP",
                        "Pertama kali mengenal Laravel (versi 6)",
                    ],
                },
                {
                    company: "PT. Panasonic Industrial Devices Batam",
                    position: "Quality Engineer (Magang)",
                    period: "Jan 2017 - Mar 2017",
                    location: "Batam, Indonesia",
                    description: [
                        "Magang di bidang quality engineer pada departemen kapasitor",
                        "Mempelajari proses pengecekan kualitas komponen kapasitor",
                    ],
                },
            ],
        },
        organization: {
            eyebrow: "$ cat organizations.log",
            title: "Pengalaman Organisasi",
            items: [
                {
                    organization: "Himpunan Mahasiswa TI (HIMA TI)",
                    role: "Anggota Divisi Humas",
                    period: "Dec 2018 - Oct 2019",
                    location: "Padang, Indonesia",
                    description: [
                        "Menjadi ketua dan bertanggung jawab terhadap acara bakti sosial ke panti asuhan",
                        "Membuat dokumentasi seluruh kegiatan yang diselenggarakan himpunan dan jurusan",
                        "Membuat rundown acara untuk Pekan Kreativitas Mahasiswa",
                    ],
                },
            ],
        },
        projects: {
            eyebrow: "$ ls -la projects/",
            title: "Proyek",
            categories: [
                { slug: "frontend", label: "Frontend" },
                { slug: "admin", label: "Admin & Dashboard" },
                { slug: "api", label: "API & Integrasi" },
                { slug: "fullstack", label: "Fullstack" },
                { slug: "upcoming", label: "Akan Datang" },
            ],
            allLabel: "Semua",
            showMore: "Tampilkan lebih banyak",
            showLess: "Tampilkan lebih sedikit",
            items: [
                {
                    slug: "pmo-tracker",
                    category: "frontend",
                    title: "PMO Project & Task Tracker",
                    tech: ["Next.js", "Ant Design", "Golang", "PostgreSQL"],
                    description: "Aplikasi manajemen project dan task untuk kolaborasi antara tim manajemen project dan developer: memantau progres project, daftar task, dan komunikasi dalam satu tempat. Peran saya di frontend",
                },
                {
                    slug: "core-banking-integration",
                    category: "api",
                    title: "Banking API Integration",
                    tech: ["Axway", "PostgreSQL", "REST API"],
                    description: "Pengembangan API dan integrasi layanan keuangan melalui API gateway untuk mendukung operasional transaksi",
                },
                {
                    slug: "api-portal",
                    category: "api",
                    title: "API Portal",
                    tech: ["Laravel", "FilamentPHP", "Inertia.js", "Vue 3", "PostgreSQL"],
                    description: "Portal untuk menjelajahi dan menguji katalog API layanan keuangan. Ke depannya akan terhubung ke sistem credential sehingga pengguna bisa langsung mencoba API. Antarmukanya tersedia dalam tiga bahasa (ID/EN/中文)",
                },
                {
                    slug: "bulk-merchant-credential",
                    category: "admin",
                    title: "Bulk Merchant Credential Manager",
                    tech: ["FilamentPHP", "MySQL", "Axway"],
                    description: "Aplikasi admin untuk menambahkan banyak merchant sekaligus dan membuat credential tiap merchant, terhubung langsung ke API gateway",
                },
                {
                    slug: "credit-document-admin",
                    category: "admin",
                    title: "Credit Document Admin",
                    tech: ["Laravel", "MySQL"],
                    description: "Aplikasi untuk melacak dokumen kredit antar cabang, dilengkapi filter, datatable, dan export",
                },
                {
                    slug: "it-security-forms",
                    category: "admin",
                    title: "IT Security Request Forms",
                    tech: ["Laravel", "MySQL"],
                    description: "Aplikasi pengajuan dan pengelolaan permintaan keamanan jaringan, seperti form permintaan firewall, untuk tim keamanan IT",
                },
                {
                    slug: "pos-frontend",
                    category: "frontend",
                    title: "POS Frontend",
                    tech: ["ReactJS", "JSON API", "Golang"],
                    description: "Frontend aplikasi kasir (POS) dengan React.js yang terhubung ke backend Golang melalui JSON API",
                },
                {
                    slug: "web-archive-downloader",
                    category: "admin",
                    title: "Web Archive Downloader",
                    tech: ["Laravel", "FilamentPHP", "MySQL"],
                    description: "Aplikasi untuk mengunduh salinan situs dari arsip web publik, dengan antrean unduhan multi-queue berbasis kartu, data terpisah per pengguna, dan hasil HTML yang bisa dibuka secara lokal",
                },
                {
                    slug: "cataloghub",
                    category: "fullstack",
                    title: "CatalogHub",
                    tech: ["Laravel", "FilamentPHP", "Nuxt"],
                    description: "Katalog produk hibrida: membandingkan spesifikasi produk dan melihat di mana saja produk dijual, baik di e-commerce maupun toko fisik",
                },
                {
                    slug: "dev-portfolio",
                    category: "frontend",
                    title: "Developer Portfolio Site",
                    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
                    description: "Situs portofolio pribadi bertema terminal dengan konten tiga bahasa (ID/EN/中文), carousel screenshot dengan lightbox, dan filter project per kategori. Seluruh konten dikelola dari satu file TypeScript",
                },
                {
                    slug: "warung-pos",
                    category: "fullstack",
                    title: "Warung POS",
                    tech: ["Laravel", "MySQL"],
                    description: "POS kecil untuk manajemen warung milik keluarga, dibangun dengan Laravel dan MySQL",
                },
                {
                    slug: "blog-news",
                    category: "frontend",
                    title: "Blog & News Site",
                    tech: ["Next.js", "Sanity"],
                    description: "Situs blog dan berita dengan Next.js dan Sanity sebagai CMS",
                },
                {
                    slug: "company-landing",
                    category: "frontend",
                    title: "Company Landing Page",
                    tech: ["PHP"],
                    description: "Landing page perusahaan yang dibangun dengan PHP native",
                },
                {
                    slug: "short-url",
                    category: "api",
                    title: "Short URL Service",
                    tech: ["Express.js"],
                    description: "Layanan pemendek URL sederhana dengan Express.js",
                },
                {
                    slug: "hotel-management-system",
                    category: "fullstack",
                    title: "Hotel Management System",
                    tech: ["NestJS", "ReactJS", "PostgreSQL", "TypeScript"],
                    description: "Sistem manajemen hotel lengkap dengan booking dan inventory management",
                },
                {
                    slug: "web-clustering-sma",
                    category: "fullstack",
                    title: "Web Clustering Siswa SMA",
                    tech: ["Laravel", "MySQL"],
                    description: "Tugas akhir: clustering K-Medoids untuk mengelompokkan siswa SMA di Kota Padang",
                },
                {
                    slug: "destination-ticketing",
                    category: "upcoming",
                    title: "Destination Ticket Platform (Upcoming)",
                    tech: [],
                    description: "Rencana platform wisata yang berfokus pada destinasi di beberapa wilayah, dengan fitur cek lokasi dan pembelian tiket destinasi",
                },
                {
                    slug: "wallet-transfer-api",
                    category: "upcoming",
                    title: "Wallet & Transfer API (Upcoming)",
                    tech: ["C#", "ASP.NET Core", "EF Core", "MySQL"],
                    description: "Project upcoming: REST API dompet digital dan transfer antar akun dengan ASP.NET Core, sekaligus sarana mendalami ekosistem .NET",
                },
            ],
        },
        contact: {
            eyebrow: "$ ping ramanda --connect",
            title: "Mari Terhubung",
            subtitle: "Tertarik untuk berkolaborasi atau ingin tahu lebih lanjut tentang pengalaman saya? Mari terhubung!",
            emailLabel: "Email",
            phoneLabel: "WhatsApp",
        },
        footer: "Dibuat dengan React & Tailwind CSS.",
    },

    // ---------------------------------------------------------------------------
    // ENGLISH — auto-translated from the Indonesian block below. Ask Claude to
    // re-translate this block whenever the "id" block changes.
    // ---------------------------------------------------------------------------
    en: {
        nav: { home: "home", about: "about", experience: "experience", projects: "projects", contact: "contact" },
        available: "Open to Work",
        downloadCv: "Download CV",
        terminal: [
            { prompt: "$ whoami", output: "Ramanda Syahputra — IT Developer / Fullstack Developer" },
            {
                prompt: "$ cat mission.txt",
                output:
                    "Politeknik Negeri Padang graduate with three years of experience as a Fullstack Developer, stronger on the frontend. Currently building internal applications and core banking APIs with Laravel, FilamentPHP, Vue, Next.js, and Axway.",
            },
        ],
        about: {
            eyebrow: "$ cat about.md",
            title: "About Me",
            educationTitle: "Education",
            poliDegree: "Bachelor of Applied Computer Science (S.Tr.Kom.) — D4 Software Engineering Technology",
            poliBullets: [
                "Department of Information Technology, GPA 3.38/4.00",
                "Final Project: K-Medoids Clustering of High School Students in Padang City",
                "QA on the CekFilm mobile project",
            ],
            smkDegree: "Industrial Electronics Engineering",
            locationTitle: "Location & Info",
            locationLabel: "location:",
            locationValue: "Harapan Mulya, Kemayoran, Central Jakarta",
            languagesLabel: "languages:",
            languagesValue: "Bahasa Indonesia (Native), English (Intermediate), Korean/French/Chinese/Malay (Basic)",
            bio: "A Fullstack Developer with three years of experience building web applications, stronger on the frontend. At Bank Artha Graha Internasional, builds internal applications with Laravel, FilamentPHP, Vue, and Next.js, and develops core banking APIs on Axway. Experienced with React.js, Next.js, and NestJS, and handles API integrations, databases, and data migration for complex business needs. Outside the main role, freelances for Asitatech Digital Indonesia, mostly a React POS frontend and a Laravel/Filament app. Currently also exploring the .NET ecosystem through an API project built with ASP.NET Core. Oriented toward quality, performance, and solutions that are easy to maintain.",
            skillsTitle: "Technical Skills",
        },
        experience: {
            eyebrow: "$ git log --experience --oneline",
            title: "Work Experience",
            items: [
                {
                    company: "Bank Artha Graha Internasional",
                    position: "IT Developer (Web Application)",
                    period: "Nov 2024 - Present",
                    location: "Jakarta, Indonesia",
                    description: [
                        "Build internal web applications for different teams at the bank, mostly with Laravel and FilamentPHP",
                        "One of them tracks credit documents across branches, with filters, datatables, and export",
                        "Others are admin panels with role and permission management (RBAC) and Excel import/export",
                        "Wrote the frontend of the internal web app for the IT development and PMO teams in Next.js (the backend is planned in Golang and handled separately)",
                        "Built the frontend foundation of the internal developer portal for API services: Laravel, Inertia.js, Vue 3, and a Filament admin panel",
                        "Develop APIs on Axway for core banking operations",
                        "Help migrate data from core banking and other sources into new applications",
                        "Test applications (unit, integration, system, UAT) and ATM cases together with IT Support",
                    ],
                },
                {
                    company: "Asitatech Digital Indonesia",
                    position: "Freelance Fullstack Developer",
                    period: "Nov 2025 - Present",
                    location: "Jakarta, Indonesia",
                    description: [
                        "Built Wayback, a Laravel/FilamentPHP app that downloads archived sites from the Wayback Machine: downloads run in a card-based multi-queue UI, each member only sees their own data, and the saved HTML has the Wayback toolbar removed and internal links rewritten to local paths",
                        "Migrated the Wayback database to the new schema with re-runnable seeders",
                        "Build the React.js frontend of a POS application that talks to a Golang backend over a JSON API",
                        "Built the company landing page in native PHP",
                    ],
                },
                {
                    company: "PT. Koding Teknologi Asia (Udacoding)",
                    position: "Fullstack Developer",
                    period: "Aug 2023 - Aug 2024",
                    location: "Batam, Indonesia",
                    description: [
                        "Worked with Laravel, Tailwind, Bootstrap, and JavaScript",
                        "Collaborated with COEDEV, a Malaysia-based company, on project development",
                        "Frontend development using JavaScript AJAX",
                        "Built REST APIs applying the Repository-Service pattern",
                    ],
                },
                {
                    company: "LPK Rahmatullah Training Centre & Dinas Tenaga Kerja Kota Batam",
                    position: "Computer Assembly Training & Certification Participant",
                    period: "Jun 2023",
                    location: "Batam, Indonesia",
                    description: [
                        "Followed proper workplace safety procedures",
                        "Identified computer components and their technical specifications",
                        "Carried out hardware and software inventory",
                        "Studied CPU hardware components and proper maintenance practices",
                        "Performed operating system installation",
                    ],
                },
                {
                    company: "PT. Akasia Code Digital (Code X Academy)",
                    position: "Fullstack NodeJS Bootcamp",
                    period: "Dec 2022 - Mar 2023",
                    location: "Jakarta, Indonesia",
                    description: [
                        "Collaborated with a team to build a hotel management web application meeting stakeholder requirements",
                        "Gained proficiency in PostgreSQL as a relational database management system",
                        "Developed backend services using Express and NestJS",
                        "Developed frontend interfaces using ReactJS and NextJS",
                        "Used Tailwind CSS for web design",
                        "Built a strong understanding of core JavaScript, TypeScript concepts, and OOP principles",
                        "Developed a full-featured web application based on an Entity Relationship Diagram and Business Requirements Document",
                    ],
                },
                {
                    company: "Coding Collective",
                    position: "Frontend Development Intern",
                    period: "Aug 2021 - Dec 2021",
                    location: "Yogyakarta, Indonesia",
                    description: [
                        "Collaborated with the team as a frontend developer on a company blog and article web app",
                        "Turned Figma designs into Bootstrap/PHP pages",
                        "First exposure to Laravel (version 6)",
                    ],
                },
                {
                    company: "PT. Panasonic Industrial Devices Batam",
                    position: "Quality Engineer Intern",
                    period: "Jan 2017 - Mar 2017",
                    location: "Batam, Indonesia",
                    description: [
                        "Interned as a quality engineer in the capacitor department",
                        "Learned the quality inspection process for capacitor components",
                    ],
                },
            ],
        },
        organization: {
            eyebrow: "$ cat organizations.log",
            title: "Organizational Experience",
            items: [
                {
                    organization: "Himpunan Mahasiswa TI (HIMA TI)",
                    role: "Public Relations Division Member",
                    period: "Dec 2018 - Oct 2019",
                    location: "Padang, Indonesia",
                    description: [
                        "Led and was responsible for a social service event at an orphanage",
                        "Documented all activities held by the student association and department",
                        "Created the event rundown for Pekan Kreativitas Mahasiswa (Student Creativity Week)",
                    ],
                },
            ],
        },
        projects: {
            eyebrow: "$ ls -la projects/",
            title: "Projects",
            categories: [
                { slug: "frontend", label: "Frontend" },
                { slug: "admin", label: "Admin & Dashboard" },
                { slug: "api", label: "API & Integration" },
                { slug: "fullstack", label: "Fullstack" },
                { slug: "upcoming", label: "Upcoming" },
            ],
            allLabel: "All",
            showMore: "Show more",
            showLess: "Show less",
            items: [
                {
                    slug: "pmo-tracker",
                    category: "frontend",
                    title: "PMO Project & Task Tracker",
                    tech: ["Next.js", "Ant Design", "Golang", "PostgreSQL"],
                    description: "Project and task management app for collaboration between project managers and developers: track project progress, task lists, and communication in one place. My role is the frontend",
                },
                {
                    slug: "core-banking-integration",
                    category: "api",
                    title: "Banking API Integration",
                    tech: ["Axway", "PostgreSQL", "REST API"],
                    description: "API development and financial service integration through an API gateway to support transaction operations",
                },
                {
                    slug: "api-portal",
                    category: "api",
                    title: "API Portal",
                    tech: ["Laravel", "FilamentPHP", "Inertia.js", "Vue 3", "PostgreSQL"],
                    description: "Portal for browsing and testing a catalog of financial service APIs. It will later connect to the credential system so users can try the APIs right away. The interface is available in three languages (ID/EN/中文)",
                },
                {
                    slug: "bulk-merchant-credential",
                    category: "admin",
                    title: "Bulk Merchant Credential Manager",
                    tech: ["FilamentPHP", "MySQL", "Axway"],
                    description: "Admin app for adding many merchants at once and generating each merchant's credentials, connected directly to the API gateway",
                },
                {
                    slug: "credit-document-admin",
                    category: "admin",
                    title: "Credit Document Admin",
                    tech: ["Laravel", "MySQL"],
                    description: "App for tracking credit documents across branches, with filters, datatables, and export",
                },
                {
                    slug: "it-security-forms",
                    category: "admin",
                    title: "IT Security Request Forms",
                    tech: ["Laravel", "MySQL"],
                    description: "App for submitting and managing network security requests, such as firewall request forms, for the IT security team",
                },
                {
                    slug: "pos-frontend",
                    category: "frontend",
                    title: "POS Frontend",
                    tech: ["ReactJS", "JSON API", "Golang"],
                    description: "Frontend of a point-of-sale (POS) app in React.js, connected to a Golang backend over a JSON API",
                },
                {
                    slug: "web-archive-downloader",
                    category: "admin",
                    title: "Web Archive Downloader",
                    tech: ["Laravel", "FilamentPHP", "MySQL"],
                    description: "App for downloading copies of sites from public web archives, with a card-based multi-queue download UI, per-user data, and HTML output that opens locally",
                },
                {
                    slug: "cataloghub",
                    category: "fullstack",
                    title: "CatalogHub",
                    tech: ["Laravel", "FilamentPHP", "Nuxt"],
                    description: "Hybrid product catalog: compare product specifications and see where each product is sold, on e-commerce platforms and in physical stores",
                },
                {
                    slug: "dev-portfolio",
                    category: "frontend",
                    title: "Developer Portfolio Site",
                    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
                    description: "Personal terminal-themed portfolio site with three-language content (ID/EN/中文), a screenshot carousel with lightbox, and per-category project filters. All content is managed from a single TypeScript file",
                },
                {
                    slug: "warung-pos",
                    category: "fullstack",
                    title: "Warung POS",
                    tech: ["Laravel", "MySQL"],
                    description: "A small POS for managing a family-run warung (small shop), built with Laravel and MySQL",
                },
                {
                    slug: "blog-news",
                    category: "frontend",
                    title: "Blog & News Site",
                    tech: ["Next.js", "Sanity"],
                    description: "A blog and news site built with Next.js and Sanity as the CMS",
                },
                {
                    slug: "company-landing",
                    category: "frontend",
                    title: "Company Landing Page",
                    tech: ["PHP"],
                    description: "A company landing page built with native PHP",
                },
                {
                    slug: "short-url",
                    category: "api",
                    title: "Short URL Service",
                    tech: ["Express.js"],
                    description: "A simple URL shortener built with Express.js",
                },
                {
                    slug: "hotel-management-system",
                    category: "fullstack",
                    title: "Hotel Management System",
                    tech: ["NestJS", "ReactJS", "PostgreSQL", "TypeScript"],
                    description: "Complete hotel management system with booking and inventory management",
                },
                {
                    slug: "web-clustering-sma",
                    category: "fullstack",
                    title: "High School Student Web Clustering",
                    tech: ["Laravel", "MySQL"],
                    description: "Final project: K-Medoids clustering to group high school students in Padang City",
                },
                {
                    slug: "destination-ticketing",
                    category: "upcoming",
                    title: "Destination Ticket Platform (Upcoming)",
                    tech: [],
                    description: "Planned travel platform focused on destinations across several regions, with location lookup and destination ticket purchase",
                },
                {
                    slug: "wallet-transfer-api",
                    category: "upcoming",
                    title: "Wallet & Transfer API (Upcoming)",
                    tech: ["C#", "ASP.NET Core", "EF Core", "MySQL"],
                    description: "Upcoming project: a REST API for digital wallets and account-to-account transfers built with ASP.NET Core, also a way to dive into the .NET ecosystem",
                },
            ],
        },
        contact: {
            eyebrow: "$ ping ramanda --connect",
            title: "Let's Connect",
            subtitle: "Interested in collaborating or want to learn more about my experience? Let's get in touch!",
            emailLabel: "Email",
            phoneLabel: "WhatsApp",
        },
        footer: "Built with React & Tailwind CSS.",
    },

    // ---------------------------------------------------------------------------
    // MANDARIN (Simplified Chinese) — auto-translated from the Indonesian block.
    // Ask Claude to re-translate this block whenever the "id" block changes.
    // ---------------------------------------------------------------------------
    zh: {
        nav: { home: "首页", about: "关于", experience: "经历", projects: "项目", contact: "联系" },
        available: "求职中",
        downloadCv: "下载简历",
        terminal: [
            { prompt: "$ whoami", output: "Ramanda Syahputra — IT 开发工程师 / 全栈开发工程师" },
            {
                prompt: "$ cat mission.txt",
                output:
                    "毕业于帕当国立理工学院,拥有三年全栈开发经验,更擅长前端。目前使用 Laravel、FilamentPHP、Vue、Next.js 与 Axway 构建内部应用与核心银行 API。",
            },
        ],
        about: {
            eyebrow: "$ cat about.md",
            title: "关于我",
            educationTitle: "教育背景",
            poliDegree: "应用计算机科学学士(S.Tr.Kom.)— D4 软件工程技术",
            poliBullets: [
                "信息技术系,GPA 3.38/4.00",
                "毕业设计:巴东市高中生 K-Medoids 聚类",
                "CekFilm 移动端项目质量保证(QA)",
            ],
            smkDegree: "工业电子技术",
            locationTitle: "位置与信息",
            locationLabel: "位置:",
            locationValue: "印尼雅加达中区 Kemayoran 区 Harapan Mulya",
            languagesLabel: "语言:",
            languagesValue: "印尼语(母语)、英语(中级)、韩语/法语/中文/马来语(基础)",
            bio: "拥有三年 Web 应用开发经验的全栈开发工程师,更擅长前端。在 Bank Artha Graha Internasional 使用 Laravel、FilamentPHP、Vue 与 Next.js 构建内部应用,并在 Axway 上开发核心银行 API。熟悉 React.js、Next.js 与 NestJS,负责 API 集成、数据库与数据迁移,以支撑复杂的业务需求。主职之外,为 Asitatech Digital Indonesia 提供自由职业服务,主要负责 React POS 前端与一个 Laravel/Filament 应用。目前也通过 ASP.NET Core 的 API 项目学习 .NET 生态。始终以质量、性能为导向,致力于打造易于维护的解决方案。",
            skillsTitle: "技术技能",
        },
        experience: {
            eyebrow: "$ git log --experience --oneline",
            title: "工作经历",
            items: [
                {
                    company: "Bank Artha Graha Internasional",
                    position: "IT 开发工程师(Web 应用)",
                    period: "2024年11月 - 至今",
                    location: "印尼雅加达",
                    description: [
                        "为银行不同团队构建内部 Web 应用,主要使用 Laravel 与 FilamentPHP",
                        "其中之一用于跨分行追踪信贷文件,支持筛选、数据表格与导出",
                        "其他为带有角色与权限管理(RBAC)及 Excel 导入/导出的管理后台",
                        "使用 Next.js 编写 IT 开发与 PMO 团队内部 Web 应用的前端(后端计划使用 Golang,由他人单独负责)",
                        "搭建面向 API 服务的内部开发者门户前端基础:Laravel、Inertia.js、Vue 3 与 Filament 管理后台",
                        "使用 Axway 开发 API,支持核心银行业务运营",
                        "协助将核心银行及其他来源的数据迁移到新应用中",
                        "与 IT 支持团队一起进行应用测试(单元、集成、系统、UAT)及 ATM 案例测试",
                    ],
                },
                {
                    company: "Asitatech Digital Indonesia",
                    position: "自由职业全栈开发工程师",
                    period: "2025年11月 - 至今",
                    location: "印尼雅加达",
                    description: [
                        "开发 Wayback:基于 Laravel/FilamentPHP 的应用,用于下载 Wayback Machine 中的归档网站;下载在卡片式多队列界面中运行,每位成员只能看到自己的数据,保存的 HTML 已移除 Wayback 工具栏,内部链接改写为本地路径",
                        "使用可重复执行的 seeder 将 Wayback 数据库迁移到新结构",
                        "开发 POS 应用的 React.js 前端,通过 JSON API 与 Golang 后端通信",
                        "使用原生 PHP 构建公司落地页",
                    ],
                },
                {
                    company: "PT. Koding Teknologi Asia (Udacoding)",
                    position: "全栈开发工程师",
                    period: "2023年8月 - 2024年8月",
                    location: "印尼巴淡岛",
                    description: [
                        "使用 Laravel、Tailwind、Bootstrap 与 JavaScript 进行开发",
                        "与马来西亚 COEDEV 公司合作开发项目",
                        "使用 JavaScript AJAX 进行前端开发",
                        "采用 Repository-Service 模式构建 REST API",
                    ],
                },
                {
                    company: "LPK Rahmatullah Training Centre & Dinas Tenaga Kerja Kota Batam",
                    position: "计算机组装培训与认证学员",
                    period: "2023年6月",
                    location: "印尼巴淡岛",
                    description: [
                        "遵循工作场所安全操作流程",
                        "识别计算机组件及其技术规格",
                        "执行硬件与软件库存盘点",
                        "学习 CPU 硬件组件及维护方法",
                        "执行操作系统安装",
                    ],
                },
                {
                    company: "PT. Akasia Code Digital (Code X Academy)",
                    position: "全栈 NodeJS 训练营",
                    period: "2022年12月 - 2023年3月",
                    location: "印尼雅加达",
                    description: [
                        "与团队协作开发满足利益相关者需求的酒店管理 Web 应用",
                        "掌握 PostgreSQL 关系型数据库管理系统",
                        "使用 Express 与 NestJS 开发后端服务",
                        "使用 ReactJS 与 NextJS 开发前端界面",
                        "使用 Tailwind CSS 进行网页设计",
                        "深入掌握 JavaScript 基础、TypeScript 概念与 OOP 原则",
                        "根据实体关系图(ERD)与业务需求文档开发功能完整的 Web 应用",
                    ],
                },
                {
                    company: "Coding Collective",
                    position: "前端开发实习生",
                    period: "2021年8月 - 2021年12月",
                    location: "印尼日惹",
                    description: [
                        "作为前端开发者与团队协作开发公司博客与文章 Web 应用",
                        "将 Figma 设计稿转化为 Bootstrap/PHP 页面",
                        "首次接触 Laravel(6 版)",
                    ],
                },
                {
                    company: "PT. Panasonic Industrial Devices Batam",
                    position: "质量工程师实习生",
                    period: "2017年1月 - 2017年3月",
                    location: "印尼巴淡岛",
                    description: ["在电容器部门担任质量工程师实习生", "学习电容器元件的质量检测流程"],
                },
            ],
        },
        organization: {
            eyebrow: "$ cat organizations.log",
            title: "组织经历",
            items: [
                {
                    organization: "Himpunan Mahasiswa TI (HIMA TI)",
                    role: "公关部成员",
                    period: "2018年12月 - 2019年10月",
                    location: "印尼巴东",
                    description: [
                        "担任负责人,主持面向孤儿院的社会公益活动",
                        "记录学生社团与院系举办的所有活动",
                        "为 Pekan Kreativitas Mahasiswa(学生创意周)制定活动流程",
                    ],
                },
            ],
        },
        projects: {
            eyebrow: "$ ls -la projects/",
            title: "项目",
            categories: [
                { slug: "frontend", label: "前端" },
                { slug: "admin", label: "管理后台" },
                { slug: "api", label: "API 与集成" },
                { slug: "fullstack", label: "全栈应用" },
                { slug: "upcoming", label: "即将推出" },
            ],
            allLabel: "全部",
            showMore: "显示更多",
            showLess: "收起",
            items: [
                {
                    slug: "pmo-tracker",
                    category: "frontend",
                    title: "PMO Project & Task Tracker",
                    tech: ["Next.js", "Ant Design", "Golang", "PostgreSQL"],
                    description: "供项目管理团队与开发人员协作的项目与任务管理应用:在一处跟踪项目进度、任务清单与沟通。我负责前端",
                },
                {
                    slug: "core-banking-integration",
                    category: "api",
                    title: "Banking API Integration",
                    tech: ["Axway", "PostgreSQL", "REST API"],
                    description: "通过 API 网关开发 API 并集成金融服务,支持交易业务运营",
                },
                {
                    slug: "api-portal",
                    category: "api",
                    title: "API Portal",
                    tech: ["Laravel", "FilamentPHP", "Inertia.js", "Vue 3", "PostgreSQL"],
                    description: "用于浏览和测试金融服务 API 目录的门户,后续将对接凭证系统,用户可直接试用 API。界面支持三种语言(ID/EN/中文)",
                },
                {
                    slug: "bulk-merchant-credential",
                    category: "admin",
                    title: "Bulk Merchant Credential Manager",
                    tech: ["FilamentPHP", "MySQL", "Axway"],
                    description: "用于批量添加商户并生成各商户凭证的管理应用,直接连接 API 网关",
                },
                {
                    slug: "credit-document-admin",
                    category: "admin",
                    title: "Credit Document Admin",
                    tech: ["Laravel", "MySQL"],
                    description: "用于跨分行追踪信贷文件的应用,支持筛选、数据表格与导出",
                },
                {
                    slug: "it-security-forms",
                    category: "admin",
                    title: "IT Security Request Forms",
                    tech: ["Laravel", "MySQL"],
                    description: "用于提交和管理网络安全申请(如防火墙申请表单)的应用,供 IT 安全团队使用",
                },
                {
                    slug: "pos-frontend",
                    category: "frontend",
                    title: "POS Frontend",
                    tech: ["ReactJS", "JSON API", "Golang"],
                    description: "使用 React.js 构建的 POS 收银应用前端,通过 JSON API 连接 Golang 后端",
                },
                {
                    slug: "web-archive-downloader",
                    category: "admin",
                    title: "Web Archive Downloader",
                    tech: ["Laravel", "FilamentPHP", "MySQL"],
                    description: "用于从公共网页归档下载站点副本的应用,具备卡片式多队列下载界面、按用户隔离的数据,以及可本地打开的 HTML 输出",
                },
                {
                    slug: "cataloghub",
                    category: "fullstack",
                    title: "CatalogHub",
                    tech: ["Laravel", "FilamentPHP", "Nuxt"],
                    description: "混合式产品目录:可对比产品规格,并查看产品在电商平台和线下门店的销售渠道",
                },
                {
                    slug: "dev-portfolio",
                    category: "frontend",
                    title: "Developer Portfolio Site",
                    tech: ["Next.js", "React", "TypeScript", "Tailwind"],
                    description: "个人终端风格作品集网站,支持三语内容(ID/EN/中文)、带灯箱的截图轮播以及按类别筛选项目。所有内容由单个 TypeScript 文件统一管理",
                },
                {
                    slug: "warung-pos",
                    category: "fullstack",
                    title: "Warung POS",
                    tech: ["Laravel", "MySQL"],
                    description: "使用 Laravel 与 MySQL 构建的小型 POS,用于管理家人经营的小卖部(warung)",
                },
                {
                    slug: "blog-news",
                    category: "frontend",
                    title: "Blog & News Site",
                    tech: ["Next.js", "Sanity"],
                    description: "使用 Next.js 并以 Sanity 作为 CMS 构建的博客与新闻网站",
                },
                {
                    slug: "company-landing",
                    category: "frontend",
                    title: "Company Landing Page",
                    tech: ["PHP"],
                    description: "使用原生 PHP 构建的公司落地页",
                },
                {
                    slug: "short-url",
                    category: "api",
                    title: "Short URL Service",
                    tech: ["Express.js"],
                    description: "使用 Express.js 构建的简易短链接服务",
                },
                {
                    slug: "hotel-management-system",
                    category: "fullstack",
                    title: "Hotel Management System",
                    tech: ["NestJS", "ReactJS", "PostgreSQL", "TypeScript"],
                    description: "包含预订与库存管理功能的完整酒店管理系统",
                },
                {
                    slug: "web-clustering-sma",
                    category: "fullstack",
                    title: "高中生网页聚类系统",
                    tech: ["Laravel", "MySQL"],
                    description: "毕业设计:使用 K-Medoids 聚类对巴东市高中生进行分组",
                },
                {
                    slug: "destination-ticketing",
                    category: "upcoming",
                    title: "Destination Ticket Platform (Upcoming)",
                    tech: [],
                    description: "规划中的旅游平台,聚焦多个地区的目的地,支持位置查询与景点门票购买",
                },
                {
                    slug: "wallet-transfer-api",
                    category: "upcoming",
                    title: "Wallet & Transfer API (Upcoming)",
                    tech: ["C#", "ASP.NET Core", "EF Core", "MySQL"],
                    description: "即将推出的项目:使用 ASP.NET Core 构建的数字钱包与账户间转账 REST API,同时也是深入学习 .NET 生态的实践",
                },
            ],
        },
        contact: {
            eyebrow: "$ ping ramanda --connect",
            title: "保持联系",
            subtitle: "有兴趣合作,或想进一步了解我的经历?欢迎与我联系!",
            emailLabel: "邮箱",
            phoneLabel: "WhatsApp",
        },
        footer: "使用 React 与 Tailwind CSS 构建。",
    },
};