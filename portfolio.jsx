import { useState, useEffect } from "react";
import "./src/index.css";
import { NAV_LINKS, SKILLS, EXPERIENCE, PROJECTS, CERTS } from "./src/data";
import {
  Sun,
  Moon,
  ExternalLink,
  Mail,
  FileText,
  Menu,
  X,
  Send,
  Download,
  MapPin,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Code,
  Sparkles,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

// Social Icons
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("About");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveNav(targetId);
      setMobileMenuOpen(false);
    }
  };

  const downloadResume = () => {
    // Download resume PDF file
    const link = document.createElement("a");
    link.href = "/Mohamed_Jaseen_Resume.pdf";
    link.download = "Mohamed_Jaseen_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#050814] text-slate-100 font-sans selection:bg-[#00FF88]/20 selection:text-[#00FF88] relative">
      
      {/* Background Ambient Glow Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>

      {/* ── FLOATING LEFT SOCIAL BAR ── */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3 p-2 bg-[#0A101D]/80 backdrop-blur-md border border-[#162032] rounded-xl shadow-2xl">
        <a
          href="https://www.linkedin.com/in/mohamed-jaseen-113ab6257"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-[#0E1726] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00FF88] hover:border-[#00FF88]/40 transition-all font-mono font-bold text-xs"
          title="LinkedIn"
        >
          LI
        </a>
        <a
          href="https://github.com/MohamedJaseen"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-lg bg-[#0E1726] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00FF88] hover:border-[#00FF88]/40 transition-all font-mono font-bold text-xs"
          title="GitHub"
        >
          GH
        </a>
        <a
          href="mailto:mohamedjaseensoftdev@gmail.com"
          className="w-10 h-10 rounded-lg bg-[#0E1726] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#00FF88] hover:border-[#00FF88]/40 transition-all font-mono font-bold text-xs"
          title="Email"
        >
          @
        </a>
        <div className="w-[1px] h-12 bg-slate-800 mt-1" />
      </aside>

      {/* ── STICKY TOP NAVIGATION ── */}
      <header className="sticky top-0 z-50 bg-[#050814]/85 backdrop-blur-md border-b border-[#162032]/80 transition-all">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "About")}
            className="flex items-center gap-1 group"
          >
            <span className="font-serif font-bold text-2xl tracking-tight text-white group-hover:text-[#00FF88] transition-colors">
              MJ
            </span>
            <span className="w-2 h-2 rounded-full bg-[#00FF88] inline-block shadow-[0_0_10px_#00FF88]" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleSmoothScroll(e, link)}
                className={`hover:text-[#00FF88] transition-colors relative py-1 ${
                  activeNav === link ? "text-[#00FF88]" : ""
                }`}
              >
                {link}
                {activeNav === link && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#00FF88] rounded-full shadow-[0_0_8px_#00FF88]" />
                )}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "Contact")}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#0A101D] border border-cyan-500/40 text-cyan-300 font-medium text-xs tracking-wide hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              Hire Me
            </a>

            {/* Theme Toggle Sun */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-full bg-[#0E1726] border border-slate-800 text-amber-400 hover:text-amber-300 hover:border-amber-400/40 transition-all cursor-pointer"
              title="Toggle Theme"
            >
              <Sun className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden rounded-lg bg-[#0E1726] border border-slate-800 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A101D] border-b border-[#162032] px-6 py-6 flex flex-col gap-4 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleSmoothScroll(e, link)}
                className="text-slate-300 hover:text-[#00FF88] py-1 transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "Contact")}
              className="mt-2 text-center py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-xs font-semibold"
            >
              Hire Me
            </a>
          </div>
        )}
      </header>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 space-y-28 relative z-10">

        {/* ── HERO SECTION ── */}
        <section id="about" className="pt-6 sm:pt-12 pb-10 space-y-8 max-w-4xl">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse shadow-[0_0_8px_#00FF88]" />
            <span>Open to Opportunities</span>
          </div>

          {/* Hero Main Heading */}
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              Hi, I'm <br />
              <span className="glow-text font-serif italic font-bold">
                Mohamed Jaseen
              </span>
            </h1>
          </div>

          {/* Subheading Description */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            Building scalable backend systems, RESTful APIs, and intelligent web solutions that turn real-world challenges into reliable software products.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "Projects")}
              className="glow-btn-green px-7 py-3.5 rounded-xl inline-flex items-center gap-2 text-sm font-semibold cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "Contact")}
              className="px-7 py-3.5 rounded-xl bg-[#0A101D]/90 border border-slate-700/80 hover:border-cyan-400/50 text-slate-200 hover:text-white text-sm font-medium transition-all shadow-lg backdrop-blur-md"
            >
              Contact Me
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <div className="pt-12 flex items-center gap-3 text-emerald-400 font-mono text-xs tracking-widest uppercase opacity-80">
            <span className="w-8 h-[2px] bg-emerald-400" />
            <span>SCROLL TO EXPLORE</span>
          </div>

        </section>

        {/* ── ABOUT ME SECTION ── */}
        <section className="space-y-10 pt-4">
          
          {/* Section Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest uppercase font-semibold">
              <span className="w-6 h-[2px] bg-emerald-400" />
              <span>ABOUT ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Crafting Code <span className="glow-text">with Purpose</span>
            </h2>
          </div>

          {/* About Grid: Left content, Right Quote box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column (8 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Motivated IT student with hands-on experience in backend development, REST APIs, database design, and real-world impact.
              </p>

              {/* Major Focus Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="glow-pill-badge px-4 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider">
                  BACKEND DEVELOPMENT
                </span>
                <span className="glow-pill-badge px-4 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider">
                  REST APIS
                </span>
                <span className="glow-pill-badge px-4 py-2 rounded-full font-mono text-xs font-semibold uppercase tracking-wider">
                  MACHINE LEARNING
                </span>
              </div>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="glow-card p-5 rounded-2xl border border-cyan-500/20 text-center space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white glow-text">
                    4+
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase font-semibold">
                    PROJECTS
                  </div>
                </div>

                <div className="glow-card p-5 rounded-2xl border border-cyan-500/20 text-center space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white glow-text">
                    2+
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase font-semibold">
                    INTERNSHIPS
                  </div>
                </div>

                <div className="glow-card p-5 rounded-2xl border border-cyan-500/20 text-center space-y-1">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white glow-text">
                    91%
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase font-semibold">
                    SSLC SCORE
                  </div>
                </div>
              </div>

              {/* Info Badges & Resume CTA */}
              <div className="space-y-5 pt-2">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
                  <span className="px-3.5 py-2 rounded-lg bg-[#0E1726] border border-slate-800 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    Mayiladuthurai, Tamil Nadu
                  </span>
                  <span className="px-3.5 py-2 rounded-lg bg-[#0E1726] border border-slate-800 flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    B.Tech IT · 2026
                  </span>
                  <span className="px-3.5 py-2 rounded-lg bg-[#0E1726] border border-slate-800 flex items-center gap-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#00FF88]" />
                    Open to Work
                  </span>
                </div>

                {/* Download Resume Button */}
                <div>
                  <a
                    href="/Mohamed_Jaseen_Resume.pdf"
                    download="Mohamed_Jaseen_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-btn-green px-6 py-3 rounded-xl inline-flex items-center gap-2.5 text-sm font-bold cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Quote Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="glow-card p-8 rounded-3xl border border-cyan-500/30 relative overflow-hidden space-y-4">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="text-cyan-400 font-serif text-5xl leading-none">“</div>
                <blockquote className="text-slate-200 font-serif italic text-lg sm:text-xl leading-relaxed">
                  Building scalable backend systems and APIs that power modern web solutions with high performance, security, and seamless user experiences.
                </blockquote>
              </div>
            </div>

          </div>

        </section>

        {/* ── TECHNICAL SKILLS SECTION ── */}
        <section id="skills" className="space-y-10 scroll-mt-24">
          
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest uppercase font-semibold">
              <span className="w-6 h-[2px] bg-emerald-400" />
              <span>TECHNICAL SKILLS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              My <span className="glow-text">Tech Stack</span>
            </h2>
          </div>

          {/* Categories */}
          <div className="space-y-8">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="font-mono text-xs text-slate-400 uppercase tracking-widest font-semibold">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="glow-card px-5 py-3 rounded-xl border border-slate-800 flex items-center gap-3 text-slate-200 hover:text-white font-mono text-sm transition-all"
                    >
                      <span>{item.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88] inline-block shadow-[0_0_6px_#00FF88]" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* ── EXPERIENCE SECTION ── */}
        <section id="experience" className="space-y-10 scroll-mt-24">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest uppercase font-semibold">
              <span className="w-6 h-[2px] bg-emerald-400" />
              <span>WORK HISTORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Experience
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCE.map((exp, idx) => (
              <div
                key={idx}
                className="glow-card p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-cyan-500/30 space-y-4 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-serif">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 text-sm font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#0E1726] border border-slate-800 text-slate-300 font-mono text-xs self-start sm:self-center">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-slate-300 text-sm leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span className="text-[#00FF88] mt-1 font-bold">›</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </section>

        {/* ── PROJECTS SECTION ── */}
        <section id="projects" className="space-y-10 scroll-mt-24">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest uppercase font-semibold">
              <span className="w-6 h-[2px] bg-emerald-400" />
              <span>MY WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Featured <span className="glow-text">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div
                key={idx}
                className="glow-card rounded-2xl border border-slate-800 hover:border-cyan-500/40 p-6 flex flex-col justify-between space-y-6 transition-all group"
              >
                <div className="space-y-4">
                  {/* Emoji & Title */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl" role="img" aria-label="emoji">
                        {project.emoji || "📦"}
                      </span>
                      <h3 className="text-xl font-bold font-serif text-white group-hover:text-[#00FF88] transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project Graphic Preview */}
                  {project.image && (
                    <div className="w-full h-44 rounded-xl overflow-hidden bg-[#070C18] border border-slate-800 relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-[#0E1726] border border-slate-800 font-mono text-[11px] text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl bg-[#0E1726] border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>

              </div>
            ))}
          </div>

        </section>

        {/* ── EDUCATION & CERTIFICATIONS ── */}
        <section id="education" className="space-y-10 scroll-mt-24">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest uppercase font-semibold">
              <span className="w-6 h-[2px] bg-emerald-400" />
              <span>ACADEMICS &amp; CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Education &amp; <span className="glow-text">Certifications</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Education Timeline (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="glow-card p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white font-serif">
                    B.Tech in Information Technology
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">2022 - 2026</span>
                </div>
                <p className="text-slate-400 text-sm">
                  B.S Abdur Rahman Crescent Institute of Science and Technology, Chennai
                </p>
                <div className="text-xs font-mono text-emerald-400 pt-1">
                  Current GPA: 7.70 / 10.00
                </div>
              </div>

              <div className="glow-card p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white font-serif">
                    Higher Secondary Certificate (HSC)
                  </h3>
                  <span className="text-xs font-mono text-slate-400">2020 - 2022</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Vivekananda Matric Hr. Sec. School, Sirkali
                </p>
                <div className="text-xs font-mono text-cyan-400 pt-1">
                  Score: 88%
                </div>
              </div>

              <div className="glow-card p-6 rounded-2xl border border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white font-serif">
                    SSLC
                  </h3>
                  <span className="text-xs font-mono text-slate-400">2020</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Vivekananda Matric Hr. Sec. School, Sirkali
                </p>
                <div className="text-xs font-mono text-[#00FF88] pt-1">
                  Score: 91%
                </div>
              </div>

            </div>

            {/* Certifications (5 cols) */}
            <div className="lg:col-span-5 glow-card p-6 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="font-mono text-xs text-slate-400 uppercase tracking-widest font-semibold border-b border-slate-800 pb-3">
                VERIFIED CERTIFICATIONS
              </h3>
              
              <div className="space-y-3 font-mono text-xs">
                {CERTS.map((c, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#0E1726] border border-slate-800 flex items-center justify-between text-slate-200"
                  >
                    <span className="font-medium">{c.name}</span>
                    <span className="text-cyan-400 text-[10px] uppercase font-semibold">{c.org}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </section>

        {/* ── CONTACT SECTION ── */}
        <section id="contact" className="space-y-10 scroll-mt-24 pt-4">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs tracking-widest uppercase font-semibold">
              <span className="w-6 h-[2px] bg-emerald-400" />
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Let's <span className="glow-text">Connect</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
                setTimeout(() => setFormSubmitted(false), 4000);
              }}
              className="lg:col-span-7 glow-card p-8 rounded-3xl border border-slate-800 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-[#0E1726] border border-slate-800 focus:border-cyan-400 text-slate-100 p-3.5 rounded-xl text-sm outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-slate-400 uppercase">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#0E1726] border border-slate-800 focus:border-cyan-400 text-slate-100 p-3.5 rounded-xl text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-400 uppercase">Message</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Hello Mohamed, I would like to discuss..."
                  className="w-full bg-[#0E1726] border border-slate-800 focus:border-cyan-400 text-slate-100 p-3.5 rounded-xl text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="glow-btn-green w-full sm:w-auto px-8 py-3.5 rounded-xl inline-flex items-center justify-center gap-2 text-sm font-bold cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {formSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
            </form>

            {/* Direct Details */}
            <div className="lg:col-span-5 glow-card p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="font-serif font-bold text-xl text-white">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0E1726] border border-slate-800 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Email</div>
                    <a
                      href="mailto:mohamedjaseensoftdev@gmail.com"
                      className="hover:text-[#00FF88] transition-colors font-mono text-xs"
                    >
                      mohamedjaseensoftdev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0E1726] border border-slate-800 flex items-center justify-center text-cyan-400">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">GitHub</div>
                    <a
                      href="https://github.com/MohamedJaseen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00FF88] transition-colors font-mono text-xs"
                    >
                      github.com/MohamedJaseen
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0E1726] border border-slate-800 flex items-center justify-center text-cyan-400">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/mohamed-jaseen-113ab6257"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#00FF88] transition-colors font-mono text-xs"
                    >
                      linkedin.com/in/mohamed-jaseen-113ab6257
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#162032] bg-[#0A101D]/60 py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-white text-base">MJ</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
            <span>Mohamed Jaseen</span>
          </div>

          <div>
            &copy; {new Date().getFullYear()} Mohamed Jaseen. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/MohamedJaseen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00FF88] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-jaseen-113ab6257"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00FF88] transition-colors"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
