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
    languages: ["PHP", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Java", "GoLang"],
    frameworks: [
        "Laravel",
        "ReactJS",
        "NextJS",
        "NestJS",
        "Express",
        "Tailwind",
        "Bootstrap",
        "FilamentPHP",
        "Angular",
        "Yii",
    ],
    databases: ["MySQL", "PostgreSQL"],
    "core-banking": ["Axway", "Temenos T24"],
    tools: ["Git", "REST API", "AJAX", "Redux", "jQuery", "Microsoft Office"],
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
    title: string; // translate if you like (or keep as project code-name)
    tech: string[]; // usually kept identical across languages (tech names)
    description: string;
    link: string; // URL, or "#" if none yet
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
    viewProject: string; // label on the project card link, e.g. "view_project()"
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
        available: "tersedia",
        downloadCv: "Download CV",
        terminal: [
            { prompt: "$ whoami", output: "Ramanda Syahputra — IT Developer / Fullstack Developer" },
            {
                prompt: "$ cat mission.txt",
                output:
                    "Lulusan Politeknik Negeri Padang dengan pengalaman 2+ tahun sebagai Fullstack Developer. Saat ini fokus pada core banking integration dan pengembangan aplikasi internal menggunakan Laravel, FilamentPHP, dan teknologi modern lainnya.",
            },
        ],
        about: {
            eyebrow: "$ cat about.md",
            title: "Tentang Saya",
            educationTitle: "Pendidikan",
            poliDegree: "Sarjana Ilmu Komunikasi",
            poliBullets: ["Tugas Akhir: Web Clustering Siswa SMA di Kota Padang", "QA pada project mobile CekFilm"],
            smkDegree: "Teknik Elektronika Industri",
            locationTitle: "Lokasi & Info",
            locationLabel: "lokasi:",
            locationValue: "Harapan Mulya, Kec. Kemayoran, Jakarta Pusat",
            languagesLabel: "bahasa:",
            languagesValue: "Bahasa Indonesia (Native), Inggris (Intermediate), Korea/Prancis/Mandarin/Melayu (Basic)",
            bio: "Fullstack Developer dengan pengalaman lebih dari 2 tahun dalam pengembangan aplikasi web, integrasi sistem, dan implementasi solusi digital pada lingkungan enterprise. Berpengalaman membangun aplikasi berbasis Laravel, FilamentPHP, React.js, Next.js, dan NestJS, serta mengelola integrasi API dan database untuk mendukung kebutuhan bisnis yang kompleks. Saat ini berkontribusi di sektor perbankan melalui pengembangan aplikasi internal, integrasi layanan core banking, dan optimalisasi proses bisnis berbasis teknologi. Di luar pekerjaan utama, juga aktif mengerjakan proyek freelance yang berfokus pada frontend development menggunakan React.js dan Next.js. Memiliki kombinasi kemampuan frontend dan backend yang kuat, pemahaman arsitektur aplikasi modern, serta kemampuan kolaborasi yang baik dalam tim pengembangan. Berorientasi pada kualitas, performa, dan pengembangan solusi yang scalable serta mudah dipelihara.",
            skillsTitle: "Keahlian Teknis",
        },
        experience: {
            eyebrow: "$ git log --experience --oneline",
            title: "Pengalaman Kerja",
            items: [
                {
                    company: "Bank Artha Graha Internasional",
                    position: "IT Developer",
                    period: "Nov 2024 - Sekarang",
                    location: "Jakarta, Indonesia",
                    description: [
                        "Mengembangkan API menggunakan Axway untuk mendukung operasional sistem core banking",
                        "Berkolaborasi dengan tim IT Support untuk melakukan pengujian kasus ATM, memastikan keandalan dan keamanan transaksi perbankan",
                        "Memastikan integrasi dan optimalisasi sistem sesuai standar keamanan dan performa industri perbankan",
                        "Mengembangkan ulang aplikasi web dari sistem perbankan yang sudah ada agar lebih mudah diakses pengguna",
                        "Membangun aplikasi web menggunakan Laravel dan FilamentPHP untuk mempermudah pengelolaan data dan proses bisnis",
                        "Mendesain dan mengelola database PostgreSQL dan MySQL, termasuk migrasi data dan optimasi query",
                        "Melakukan pengujian aplikasi dari sisi development (unit testing, integration testing) maupun sistem (system testing, UAT)",
                        "Mendukung transformasi digital dengan menyediakan solusi berbasis teknologi untuk meningkatkan layanan perbankan",
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
                        "Magang sebagai co-project manager",
                        "Berkolaborasi dengan tim sebagai frontend developer untuk aplikasi web blog & artikel perusahaan",
                        "Mempelajari dan menerapkan Bootstrap ke dalam project",
                        "Melakukan slicing desain dari Figma menggunakan Bootstrap dan PHP",
                        "Mempelajari framework Laravel 6",
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
            items: [
                {
                    title: "Core Banking Integration",
                    tech: ["Axway", "PostgreSQL", "REST API"],
                    description: "Integrasi sistem core banking menggunakan Axway untuk mendukung operasional perbankan",
                    link: "#",
                },
                {
                    title: "Internal Banking Application",
                    tech: ["Laravel", "FilamentPHP", "PostgreSQL", "Tailwind"],
                    description: "Aplikasi web internal untuk pengelolaan data dan proses bisnis perbankan",
                    link: "#",
                },
                {
                    title: "Hotel Management System",
                    tech: ["NestJS", "ReactJS", "PostgreSQL", "TypeScript"],
                    description: "Sistem manajemen hotel lengkap dengan booking dan inventory management",
                    link: "#",
                },
                {
                    title: "Web Clustering Siswa SMA",
                    tech: ["PHP", "MySQL", "Bootstrap"],
                    description: "Tugas akhir: Web clustering untuk mengelompokkan siswa SMA di Kota Padang",
                    link: "#",
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
        viewProject: "view_project()",
    },

    // ---------------------------------------------------------------------------
    // ENGLISH — auto-translated from the Indonesian block below. Ask Claude to
    // re-translate this block whenever the "id" block changes.
    // ---------------------------------------------------------------------------
    en: {
        nav: { home: "home", about: "about", experience: "experience", projects: "projects", contact: "contact" },
        available: "available",
        downloadCv: "Download CV",
        terminal: [
            { prompt: "$ whoami", output: "Ramanda Syahputra — IT Developer / Fullstack Developer" },
            {
                prompt: "$ cat mission.txt",
                output:
                    "Politeknik Negeri Padang graduate with 2+ years of experience as a Fullstack Developer. Currently focused on core banking integration and internal application development using Laravel, FilamentPHP, and other modern technologies.",
            },
        ],
        about: {
            eyebrow: "$ cat about.md",
            title: "About Me",
            educationTitle: "Education",
            poliDegree: "Bachelor of Communication",
            poliBullets: [
                "Final Project: Web Clustering for High School Students in Padang City",
                "QA on the CekFilm mobile project",
            ],
            smkDegree: "Industrial Electronics Engineering",
            locationTitle: "Location & Info",
            locationLabel: "location:",
            locationValue: "Harapan Mulya, Kemayoran, Central Jakarta",
            languagesLabel: "languages:",
            languagesValue: "Bahasa Indonesia (Native), English (Intermediate), Korean/French/Chinese/Malay (Basic)",
            bio: "A Fullstack Developer with 2+ years of experience building web applications, integrating systems, and delivering digital solutions in enterprise environments. Experienced in building applications with Laravel, FilamentPHP, React.js, Next.js, and NestJS, along with managing API and database integrations to support complex business needs. Currently contributing to the banking sector through internal application development, core banking service integration, and technology-driven business process optimization. Outside of the main role, also actively works on freelance projects focused on frontend development with React.js and Next.js. Brings a strong combination of frontend and backend skills, a solid understanding of modern application architecture, and good collaboration skills within development teams. Oriented toward quality, performance, and building solutions that are scalable and easy to maintain.",
            skillsTitle: "Technical Skills",
        },
        experience: {
            eyebrow: "$ git log --experience --oneline",
            title: "Work Experience",
            items: [
                {
                    company: "Bank Artha Graha Internasional",
                    position: "IT Developer",
                    period: "Nov 2024 - Present",
                    location: "Jakarta, Indonesia",
                    description: [
                        "Developed APIs using Axway to support core banking system operations",
                        "Collaborated with the IT Support team on ATM case testing, ensuring the reliability and security of banking transactions",
                        "Ensured system integration and optimization met banking industry security and performance standards",
                        "Redeveloped existing banking web applications to be more accessible for end users",
                        "Built web applications using Laravel and FilamentPHP to streamline data management and business processes",
                        "Designed and managed PostgreSQL and MySQL databases, including data migration and query optimization",
                        "Performed application testing at both the development level (unit testing, integration testing) and system level (system testing, UAT)",
                        "Supported digital transformation by delivering technology-based solutions to improve banking services",
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
                        "Interned as a co-project manager",
                        "Collaborated with the team as a frontend developer on a company blog and article web app",
                        "Learned and applied Bootstrap in project work",
                        "Sliced Figma designs into code using Bootstrap and PHP",
                        "Learned the Laravel 6 framework",
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
            items: [
                {
                    title: "Core Banking Integration",
                    tech: ["Axway", "PostgreSQL", "REST API"],
                    description: "Core banking system integration using Axway to support banking operations",
                    link: "#",
                },
                {
                    title: "Internal Banking Application",
                    tech: ["Laravel", "FilamentPHP", "PostgreSQL", "Tailwind"],
                    description: "Internal web application for managing banking data and business processes",
                    link: "#",
                },
                {
                    title: "Hotel Management System",
                    tech: ["NestJS", "ReactJS", "PostgreSQL", "TypeScript"],
                    description: "Complete hotel management system with booking and inventory management",
                    link: "#",
                },
                {
                    title: "High School Student Web Clustering",
                    tech: ["PHP", "MySQL", "Bootstrap"],
                    description: "Final project: web clustering to group high school students in Padang City",
                    link: "#",
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
        viewProject: "view_project()",
    },

    // ---------------------------------------------------------------------------
    // MANDARIN (Simplified Chinese) — auto-translated from the Indonesian block.
    // Ask Claude to re-translate this block whenever the "id" block changes.
    // ---------------------------------------------------------------------------
    zh: {
        nav: { home: "首页", about: "关于", experience: "经历", projects: "项目", contact: "联系" },
        available: "可接洽",
        downloadCv: "下载简历",
        terminal: [
            { prompt: "$ whoami", output: "Ramanda Syahputra — IT 开发工程师 / 全栈开发工程师" },
            {
                prompt: "$ cat mission.txt",
                output:
                    "毕业于帕当国立理工学院,拥有 2 年以上全栈开发经验。目前专注于使用 Laravel、FilamentPHP 等现代技术进行核心银行系统集成与内部应用开发。",
            },
        ],
        about: {
            eyebrow: "$ cat about.md",
            title: "关于我",
            educationTitle: "教育背景",
            poliDegree: "传播学学士",
            poliBullets: ["毕业设计:巴东市高中生网页聚类系统", "CekFilm 移动端项目质量保证(QA)"],
            smkDegree: "工业电子技术",
            locationTitle: "位置与信息",
            locationLabel: "位置:",
            locationValue: "印尼雅加达中区 Kemayoran 区 Harapan Mulya",
            languagesLabel: "语言:",
            languagesValue: "印尼语(母语)、英语(中级)、韩语/法语/中文/马来语(基础)",
            bio: "全栈开发工程师,拥有 2 年以上 Web 应用开发、系统集成与企业级数字化解决方案实施经验。擅长使用 Laravel、FilamentPHP、React.js、Next.js 与 NestJS 构建应用,并负责管理 API 与数据库集成以支撑复杂的业务需求。目前在银行业通过内部应用开发、核心银行服务集成与基于技术的业务流程优化做出贡献。在主职之外,也积极承接以 React.js 与 Next.js 为主的前端开发自由职业项目。兼具扎实的前后端能力、对现代应用架构的深入理解,以及良好的团队协作能力。始终以质量、性能为导向,致力于打造可扩展且易于维护的解决方案。",
            skillsTitle: "技术技能",
        },
        experience: {
            eyebrow: "$ git log --experience --oneline",
            title: "工作经历",
            items: [
                {
                    company: "Bank Artha Graha Internasional",
                    position: "IT 开发工程师",
                    period: "2024年11月 - 至今",
                    location: "印尼雅加达",
                    description: [
                        "使用 Axway 开发 API,支持核心银行系统运营",
                        "与 IT 支持团队协作进行 ATM 案例测试,确保银行交易的可靠性与安全性",
                        "确保系统集成与优化符合银行业安全与性能标准",
                        "对现有银行 Web 应用进行重构,提升用户可访问性",
                        "使用 Laravel 与 FilamentPHP 构建 Web 应用,简化数据管理与业务流程",
                        "设计并管理 PostgreSQL 与 MySQL 数据库,包括数据迁移与查询优化",
                        "在开发层面(单元测试、集成测试)与系统层面(系统测试、UAT)执行应用测试",
                        "通过提供基于技术的解决方案支持数字化转型,提升银行服务水平",
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
                        "担任联合项目经理实习生",
                        "作为前端开发者与团队协作开发公司博客与文章 Web 应用",
                        "学习并在项目中应用 Bootstrap",
                        "使用 Bootstrap 与 PHP 将 Figma 设计稿切图实现",
                        "学习 Laravel 6 框架",
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
            items: [
                {
                    title: "Core Banking Integration",
                    tech: ["Axway", "PostgreSQL", "REST API"],
                    description: "使用 Axway 集成核心银行系统,支持银行业务运营",
                    link: "#",
                },
                {
                    title: "Internal Banking Application",
                    tech: ["Laravel", "FilamentPHP", "PostgreSQL", "Tailwind"],
                    description: "用于管理银行数据与业务流程的内部 Web 应用",
                    link: "#",
                },
                {
                    title: "Hotel Management System",
                    tech: ["NestJS", "ReactJS", "PostgreSQL", "TypeScript"],
                    description: "包含预订与库存管理功能的完整酒店管理系统",
                    link: "#",
                },
                {
                    title: "高中生网页聚类系统",
                    tech: ["PHP", "MySQL", "Bootstrap"],
                    description: "毕业设计:用于对巴东市高中生进行分组的网页聚类系统",
                    link: "#",
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
        viewProject: "view_project()",
    },
};