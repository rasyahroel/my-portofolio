"use client";

import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  ExternalLink,
  Menu,
  X,
  Download,
  Users,
  ArrowUp,
} from "lucide-react";
import { LANGS, PROFILE, SKILLS, CONTENT, type Lang } from "../content/portfolio";

type Section = "home" | "about" | "experience" | "projects" | "contact";
const NAV_KEYS: Section[] = ["home", "about", "experience", "projects", "contact"];
const skills = SKILLS;
// WhatsApp deep link — auto-converts a local "08..." number to international
// "62..." format required by wa.me. Edit PROFILE.phone in content/portfolio.ts;
// this stays in sync automatically, no need to touch it separately.
const WA_LINK = `https://wa.me/${PROFILE.phone.replace(/^0/, "62")}`;


export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const t = CONTENT[lang];
  const [typedLines, setTypedLines] = useState<string[]>(t.terminal.map(() => ""));

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolio-lang") as Lang | null;
    if (stored && (stored === "en" || stored === "id" || stored === "zh")) {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("portfolio-lang", lang);
  }, [lang]);

  // Typing effect for the terminal hero panel — replays whenever language changes
  useEffect(() => {
    setTypedLines(t.terminal.map(() => ""));
    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function typeNext() {
      if (cancelled || lineIndex >= t.terminal.length) return;
      const full = `${t.terminal[lineIndex].prompt}\n${t.terminal[lineIndex].output}`;
      if (charIndex <= full.length) {
        const snapshot = full.slice(0, charIndex);
        setTypedLines((prev) => {
          const next = [...prev];
          next[lineIndex] = snapshot;
          return next;
        });
        charIndex++;
        timeoutId = setTimeout(typeNext, 10);
      } else {
        lineIndex++;
        charIndex = 0;
        timeoutId = setTimeout(typeNext, 350);
      }
    }
    timeoutId = setTimeout(typeNext, 250);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [lang, t.terminal]);

  // Scroll-triggered reveal animation
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  // Show the scroll-to-top button once the user has scrolled past the hero
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-section tracking as user scrolls
  useEffect(() => {
    const sections = NAV_KEYS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id as Section);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (section: Section) => {
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const LangSwitcher = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-1 ${className}`}>
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`font-ui-mono text-xs px-2 py-1 rounded-md transition-all duration-200 ${lang === code
              ? "bg-[var(--gold)]/15 text-[var(--gold)] border border-[var(--gold)]/40"
              : "text-[var(--muted)] border border-transparent hover:text-[var(--text)]"
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--text)] relative overflow-x-hidden">
      {/* Ambient background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="blob-a absolute -top-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-[var(--gold)]/10 blur-[110px]" />
        <div className="blob-b absolute top-1/2 -right-24 w-[26rem] h-[26rem] rounded-full bg-[var(--teal)]/10 blur-[110px]" />
      </div>

      {/* Signature: left rail with connected section nodes */}
      <div className="hidden lg:flex flex-col items-center gap-0 fixed left-6 top-1/2 -translate-y-1/2 z-40">
        {NAV_KEYS.map((section, i) => (
          <div key={section} className="flex flex-col items-center">
            <button
              onClick={() => scrollToSection(section)}
              className="group relative flex items-center"
              aria-label={`Go to ${section}`}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${activeSection === section
                    ? "bg-[var(--gold)] pulse-dot"
                    : "bg-[var(--border)] group-hover:bg-[var(--muted)]"
                  }`}
              />
              <span
                className={`font-ui-mono absolute left-6 whitespace-nowrap text-xs tracking-wide px-2 py-1 rounded bg-[var(--panel)] border border-[var(--border)] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 ${activeSection === section ? "text-[var(--gold)]" : "text-[var(--muted)]"
                  }`}
              >
                {t.nav[section]}
              </span>
            </button>
            {i < NAV_KEYS.length - 1 && <div className="w-px h-10 bg-[var(--border)]" />}
          </div>
        ))}
      </div>

      {/* Navigation - terminal tab bar */}
      <nav className="fixed top-0 w-full bg-[var(--ink)]/90 backdrop-blur-md border-b border-[var(--border)] z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <img
                src="/ramanda-photo.jpg"
                alt={PROFILE.name}
                className="w-7 h-7 rounded-full object-cover object-top border border-[var(--border)]"
              />
              <span className="font-ui-mono text-sm text-[var(--muted)] hidden sm:inline">~/ramanda-syahputra</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_KEYS.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-ui-mono text-sm px-3 py-1.5 rounded-md transition-all duration-200 ${activeSection === section
                      ? "text-[var(--gold)] bg-[var(--panel)]"
                      : "text-[var(--muted)] hover:text-[var(--text)]"
                    }`}
                >
                  {t.nav[section]}
                </button>
              ))}
              <span className="flex items-center gap-2 mx-3 pl-3 border-l border-[var(--border)] font-ui-mono text-xs text-[var(--teal)]">
                <span className="status-dot w-1.5 h-1.5 rounded-full bg-[var(--teal)]" />
                {t.available}
              </span>
              <LangSwitcher className="pl-2 border-l border-[var(--border)]" />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
              <LangSwitcher />
              <button className="text-[var(--text)]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-3 space-y-1 border-t border-[var(--border)]">
              {NAV_KEYS.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="font-ui-mono block w-full text-left px-3 py-2 text-[var(--muted)] hover:text-[var(--gold)] hover:bg-[var(--panel)] rounded-md transition-colors"
                >
                  {t.nav[section]}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - terminal window */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto">
          <div data-reveal className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--panel-2)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="font-ui-mono text-xs text-[var(--muted)] ml-2">profile.sh</span>
              <img
                src="/ramanda-photo.jpg"
                alt={PROFILE.name}
                className="w-6 h-6 rounded-full object-cover object-top border border-[var(--border)] ml-auto"
              />
            </div>
            <div className="p-6 sm:p-8 font-ui-mono text-sm sm:text-base leading-relaxed min-h-[220px]">
              {t.terminal.map((line, i) => {
                const shown = typedLines[i] || "";
                const [promptPart, ...rest] = shown.split("\n");
                return (
                  <div key={i} className="mb-4">
                    <div className="text-[var(--teal)]">{promptPart}</div>
                    {rest.length > 0 && (
                      <div className="text-[var(--text)]/90 mt-1">
                        {rest.join("\n")}
                        {i === t.terminal.length - 1 && (
                          <span className="cursor-blink inline-block w-2 h-4 bg-[var(--gold)] align-middle ml-0.5" />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div data-reveal className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] hover:border-[var(--gold)]/60 hover:text-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail size={18} />
              <span className="font-ui-mono text-sm">{PROFILE.email}</span>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--panel)] text-[var(--text)] hover:border-[var(--teal)]/60 hover:text-[var(--teal)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone size={18} />
              <span className="font-ui-mono text-sm">{PROFILE.phone}</span>
            </a>
          </div>

          <div data-reveal className="mt-4 flex justify-center">
            <a
              href="/ramanda-syahputra-cv.pdf"
              download
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--gold)] hover:bg-[var(--gold)]/20 transition-all duration-200 hover:-translate-y-0.5 font-ui-mono text-sm"
            >
              <Download size={18} />
              {t.downloadCv}
            </a>
          </div>

          <div data-reveal className="mt-4 flex justify-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[var(--border)] bg-[var(--panel)] hover:border-[var(--gold)]/60 hover:text-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <Github size={20} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-[var(--border)] bg-[var(--panel)] hover:border-[var(--gold)]/60 hover:text-[var(--gold)] transition-all duration-200 hover:-translate-y-0.5"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div data-reveal className="mb-12 text-center">
            <p className="font-ui-mono text-xs tracking-[0.2em] text-[var(--teal)] mb-2">{t.about.eyebrow}</p>
            <h2 className="text-4xl font-bold">{t.about.title}</h2>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-6 mb-6">
            <div
              data-reveal
              className="rounded-xl border border-[var(--border)] bg-[var(--panel)]/80 overflow-hidden hover:border-[var(--gold)]/40 transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--panel-2)] shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="font-ui-mono text-xs text-[var(--muted)] ml-2">photo.jpg</span>
              </div>
              <div className="relative flex-1 min-h-[320px]">
                <img
                  src="/ramanda-photo.jpg"
                  alt={PROFILE.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div
                data-reveal
                className="bg-[var(--panel)]/80 p-6 rounded-xl border border-[var(--border)] hover:border-[var(--gold)]/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-[var(--gold)]" size={26} />
                  <h3 className="text-xl font-semibold">{t.about.educationTitle}</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[var(--teal)]">Politeknik Negeri Padang</h4>
                    <p className="text-[var(--text)]/90 text-sm mt-1">{t.about.poliDegree}</p>
                    <p className="font-ui-mono text-[var(--muted)] text-xs mt-1">Sep 2018 - Sep 2022 · GPA 3.38/4.00</p>
                    <ul className="mt-2 space-y-1">
                      {t.about.poliBullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2 text-[var(--muted)] text-sm">
                          <span className="text-[var(--gold)] mt-0.5">›</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-[var(--border)]">
                    <h4 className="font-semibold text-[var(--teal)]">SMKN 1 Batam</h4>
                    <p className="text-[var(--text)]/90 text-sm mt-1">{t.about.smkDegree}</p>
                    <p className="font-ui-mono text-[var(--muted)] text-xs mt-1">Jul 2015 - May 2018</p>
                  </div>
                </div>
              </div>

              <div
                data-reveal
                className="bg-[var(--panel)]/80 p-6 rounded-xl border border-[var(--border)] hover:border-[var(--teal)]/40 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-[var(--teal)]" size={26} />
                  <h3 className="text-xl font-semibold">{t.about.locationTitle}</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="text-[var(--muted)]">{t.about.locationLabel}</span>{" "}
                    <span className="text-[var(--text)]/90">{t.about.locationValue}</span>
                  </p>
                  <p>
                    <span className="text-[var(--muted)]">{t.about.languagesLabel}</span>{" "}
                    <span className="text-[var(--text)]/90">{t.about.languagesValue}</span>
                  </p>
                  <p className="text-[var(--text)]/80 leading-relaxed pt-2 border-t border-[var(--border)]">
                    {t.about.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div
            data-reveal
            className="bg-[var(--panel)]/80 p-6 rounded-xl border border-[var(--border)] hover:border-[var(--gold)]/30 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-[var(--gold)]" size={26} />
              <h3 className="text-xl font-semibold">{t.about.skillsTitle}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-ui-mono text-xs text-[var(--muted)] mb-3">/{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-[var(--panel-2)] border border-[var(--border)] text-[var(--text)]/90 rounded-full text-xs font-ui-mono hover:border-[var(--gold)]/50 hover:text-[var(--gold)] transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - commit-log timeline */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div data-reveal className="mb-12 text-center">
            <p className="font-ui-mono text-xs tracking-[0.2em] text-[var(--teal)] mb-2">{t.experience.eyebrow}</p>
            <h2 className="text-4xl font-bold">{t.experience.title}</h2>
          </div>

          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[var(--border)]" />
            <div className="space-y-8">
              {t.experience.items.map((exp, index) => (
                <div key={index} data-reveal className="relative pl-10">
                  <span className="absolute left-0 top-2 w-6 h-6 rounded-full bg-[var(--panel)] border-2 border-[var(--gold)] flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[var(--gold)]" />
                  </span>
                  <div className="bg-[var(--panel)]/80 p-6 rounded-xl border border-[var(--border)] hover:border-[var(--gold)]/40 hover:-translate-y-1 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--gold)] mb-1">{exp.position}</h3>
                        <p className="flex items-center gap-2 text-[var(--text)]/90">
                          <Briefcase size={16} className="text-[var(--muted)]" /> {exp.company}
                        </p>
                      </div>
                      <div className="font-ui-mono text-[var(--muted)] text-xs md:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2 text-[var(--text)]/80 text-sm">
                          <span className="text-[var(--teal)] mt-0.5">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organizational experience - distinct from paid work, compact cards */}
          <div className="mt-12">
            <p className="font-ui-mono text-xs tracking-[0.2em] text-[var(--muted)] mb-4">
              {t.organization.eyebrow}
            </p>
            <div className="space-y-4">
              {t.organization.items.map((org, index) => (
                <div
                  key={index}
                  data-reveal
                  className="bg-[var(--panel)]/50 p-5 rounded-xl border border-[var(--border)] border-dashed hover:border-[var(--teal)]/40 transition-colors duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-[var(--teal)]" />
                      <div>
                        <h4 className="font-semibold text-[var(--text)]/90 text-sm">{org.role}</h4>
                        <p className="text-[var(--muted)] text-xs">{org.organization}</p>
                      </div>
                    </div>
                    <div className="font-ui-mono text-[var(--muted)] text-xs md:text-right">
                      <p>{org.period}</p>
                      <p>{org.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-1.5 pl-1">
                    {org.description.map((item, i) => (
                      <li key={i} className="flex gap-2 text-[var(--text)]/70 text-sm">
                        <span className="text-[var(--muted)] mt-0.5">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div data-reveal className="mb-12 text-center">
            <p className="font-ui-mono text-xs tracking-[0.2em] text-[var(--teal)] mb-2">{t.projects.eyebrow}</p>
            <h2 className="text-4xl font-bold">{t.projects.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.projects.items.map((project, index) => (
              <div
                key={index}
                data-reveal
                className="group relative bg-[var(--panel)]/80 p-6 rounded-xl border border-[var(--border)] hover:border-[var(--teal)]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--gold)] to-[var(--teal)] group-hover:w-full transition-all duration-500" />
                <h3 className="text-lg font-semibold mb-2 text-[var(--gold)]">{project.title}</h3>
                <p className="text-[var(--text)]/80 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[var(--panel-2)] border border-[var(--border)] text-[var(--text)]/80 rounded-full text-xs font-ui-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-[var(--teal)] hover:text-[var(--gold)] transition-colors text-sm font-ui-mono"
                >
                  {t.viewProject} <ExternalLink size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div data-reveal className="mb-8">
            <p className="font-ui-mono text-xs tracking-[0.2em] text-[var(--teal)] mb-2">{t.contact.eyebrow}</p>
            <h2 className="text-4xl font-bold">{t.contact.title}</h2>
            <p className="text-[var(--text)]/70 mt-4 max-w-xl mx-auto">{t.contact.subtitle}</p>
          </div>

          <div data-reveal className="grid md:grid-cols-2 gap-6 mb-8">
            <a
              href={`mailto:${PROFILE.email}`}
              className="bg-[var(--panel)]/80 p-6 rounded-xl border border-[var(--border)] hover:border-[var(--gold)]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Mail className="mx-auto mb-3 text-[var(--gold)]" size={28} />
              <h3 className="font-semibold mb-1">{t.contact.emailLabel}</h3>
              <p className="font-ui-mono text-[var(--text)]/70 text-sm">{PROFILE.email}</p>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--panel)]/80 p-6 rounded-xl border border-[var(--border)] hover:border-[var(--teal)]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <Phone className="mx-auto mb-3 text-[var(--teal)]" size={28} />
              <h3 className="font-semibold mb-1">{t.contact.phoneLabel}</h3>
              <p className="font-ui-mono text-[var(--text)]/70 text-sm">{PROFILE.phone}</p>
            </a>
          </div>

          <div data-reveal className="flex justify-center gap-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--panel)] hover:border-[var(--gold)]/50 hover:text-[var(--gold)] transition-all duration-200 flex items-center gap-2 font-ui-mono text-sm"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg border border-[var(--teal)]/40 bg-[var(--teal)]/10 hover:bg-[var(--teal)]/20 text-[var(--teal)] transition-all duration-200 flex items-center gap-2 font-ui-mono text-sm"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[var(--border)] relative">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-ui-mono text-xs text-[var(--muted)]">
            $ echo $STATUS <span className="text-[var(--teal)]">→</span> © 2026 Ramanda Syahputra. {t.footer}
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full border border-[var(--border)] bg-[var(--panel)]/90 backdrop-blur-sm text-[var(--gold)] shadow-lg transition-all duration-300 hover:border-[var(--gold)]/50 hover:-translate-y-0.5 ${showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
          }`}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}