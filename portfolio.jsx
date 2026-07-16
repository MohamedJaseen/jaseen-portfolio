import { useState, useEffect, useRef } from "react";
import "./src/index.css";

import { NAV_LINKS, SKILLS, EXPERIENCE, PROJECTS, CERTS } from "./src/data";

/* hooks */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function useCounter(target, visible, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let cur = 0;
    const step = target / (duration / 16);
    const id = setInterval(() => {
      cur += step;
      if (cur >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(cur));
    }, 16);
    return () => clearInterval(id);
  }, [visible, target]);
  return count;
}

/* helpers */
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(36px)",
      transition: `opacity .72s ease ${delay}ms, transform .72s ease ${delay}ms`,
    }}>{children}</div>
  );
}

function SL({ text }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
      <span style={{ width:22, height:1, background:"#00ff88", display:"block" }} />
      <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"#00ff88", letterSpacing:4, textTransform:"uppercase" }}>{text}</span>
    </div>
  );
}

function H2({ children }) {
  return (
    <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.9rem,4vw,3rem)", fontWeight:700, color:"var(--text-main)", lineHeight:1.12 }}>
      {children}
    </h2>
  );
}

/* ── Particle canvas ── */
function Particles() {
  const canvas = useRef(null);
  useEffect(() => {
    const c = canvas.current;
    const ctx = c.getContext("2d");
    let W = c.width = window.innerWidth;
    let H = c.height = window.innerHeight;
    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.4 + .4, a: Math.random() * .5 + .2,
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,136,${p.a * .35})`;
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,255,136,${(1 - d / 120) * .07})`;
            ctx.lineWidth = .6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const onResize = () => { W = c.width = window.innerWidth; H = c.height = window.innerHeight; };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);
  return <canvas ref={canvas} style={{ position:"absolute", inset:0, zIndex:0, opacity:.65 }} />;
}

/* ── Navbar ── */
function Navbar({ active, theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const goto = id => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:"smooth" });
    setOpen(false);
  };
  return (
    <>
      <nav style={{
        position:"fixed", top:0, left:0, right:0, zIndex:200,
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(22px)" : "none",
        borderBottom: scrolled ? "1px solid var(--card-border)" : "none",
        transition:"all .4s",
      }}>
        <div style={{ maxWidth:1120, margin:"0 auto", padding:"0 28px", display:"flex", alignItems:"center", justifyContent:"space-between", height:66 }}>
          <span onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}
            style={{ fontFamily:"'Playfair Display',serif", fontSize:24, fontWeight:700, color:"var(--text-main)", cursor:"pointer", userSelect:"none" }}>
            MJ<span style={{ color:"var(--accent)" }}>.</span>
          </span>
          <div style={{ display:"flex", gap:4 }} className="desk-nav">
            {NAV_LINKS.map(l => {
              const on = active === l.toLowerCase();
              return (
                <button key={l} onClick={() => goto(l)} style={{
                  background: on ? "var(--accent-bg)" : "transparent",
                  border:"none", color: on ? "var(--accent)" : "var(--text-muted)",
                  padding:"7px 17px", borderRadius:7, cursor:"pointer",
                  fontFamily:"'DM Mono',monospace", fontSize:12.5, letterSpacing:.7, transition:"all .2s",
                }}
                  onMouseEnter={e => { if (!on) { e.currentTarget.style.color="var(--text-main)"; e.currentTarget.style.background="var(--card-hover-bg)"; } }}
                  onMouseLeave={e => { if (!on) { e.currentTarget.style.color="var(--text-muted)"; e.currentTarget.style.background="transparent"; } }}
                >{l}</button>
              );
            })}
            <a href="mailto:mohamedjaseensoftdev@gmail.com" style={{
              marginLeft:10, padding:"7px 18px", borderRadius:7,
              border:"1px solid var(--accent)", color:"var(--accent)",
              textDecoration:"none", fontFamily:"'DM Mono',monospace", fontSize:12.5, transition:"all .25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background="var(--accent-bg)"; e.currentTarget.style.boxShadow="var(--glow-shadow-hover)"; }}
              onMouseLeave={e => { e.currentTarget.style.background="transparent"; e.currentTarget.style.boxShadow="none"; }}
            >Hire Me</a>
            <button onClick={toggleTheme} aria-label="Toggle theme" style={{
              marginLeft:10, padding:"7px", borderRadius:7, background:"transparent",
              border:"none", color:"var(--text-main)", fontSize:18, cursor:"pointer", transition:"all .2s"
            }}>
              {theme === 'dark' ? "☀️" : "🌙"}
            </button>
          </div>
          <button onClick={() => setOpen(o => !o)} className="ham" aria-label="Toggle menu" style={{ background:"none", border:"none", cursor:"pointer", color:"var(--text-main)", fontSize:22, display:"none" }}>
            {open ? "✕" : "☰"}
          </button>
        </div>
        <div style={{ overflow:"hidden", maxHeight: open ? "400px" : "0", transition:"max-height .4s ease", background:"var(--bg-color)", borderTop: open ? "1px solid var(--card-border)" : "none" }}>
          <div style={{ padding:"20px 28px 28px", display:"flex", flexDirection:"column", gap:4 }}>
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => goto(l)} style={{
                background:"none", border:"none", color:"var(--text-main)", padding:"12px 0",
                fontFamily:"'DM Mono',monospace", fontSize:14, cursor:"pointer", textAlign:"left",
                borderBottom:"1px solid var(--card-border)", transition:"color .2s",
              }}
                onMouseEnter={e => e.currentTarget.style.color="var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color="var(--text-main)"}
              >{l}</button>
            ))}
          </div>
        </div>
      </nav>
      <style>{`@media(max-width:768px){.desk-nav{display:none!important}.ham{display:block!important}}`}</style>
    </>
  );
}

/* ── Hero ── */
function Hero() {
  const [typed, setTyped] = useState("");
  const roles = ["Backend Developer","API Engineer","IT Student","Problem Solver"];
  const [ri, setRi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = roles[ri];
    const t = setTimeout(() => {
      if (!del) {
        setTyped(cur.slice(0, ci + 1));
        if (ci + 1 === cur.length) setTimeout(() => setDel(true), 1900);
        else setCi(c => c + 1);
      } else {
        setTyped(cur.slice(0, ci - 1));
        if (ci === 0) { setDel(false); setRi(i => (i + 1) % roles.length); }
        else setCi(c => c - 1);
      }
    }, del ? 48 : 105);
    return () => clearTimeout(t);
  }, [ci, del, ri]);

  return (
    <section id="hero" style={{ minHeight:"100vh", display:"flex", alignItems:"center", position:"relative", overflow:"hidden", padding:"0 28px" }}>
      <Particles />
      <div style={{ position:"absolute", inset:0, background:"var(--hero-glow)", zIndex:1, pointerEvents:"none" }} />
      <div style={{ maxWidth:1120, margin:"0 auto", width:"100%", position:"relative", zIndex:2, paddingTop:90 }}>
        <Reveal>
          <div style={{ display:"inline-flex", alignItems:"center", gap:10, padding:"8px 18px", borderRadius:40, background:"var(--accent-bg)", border:"1px solid var(--accent)", marginBottom:32 }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#00ff88", boxShadow:"0 0 9px #00ff88", animation:"blink 2s ease infinite", flexShrink:0 }} />
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:"var(--text-muted)", letterSpacing:2 }}>Open to Opportunities</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(2.6rem,7vw,5.6rem)", fontWeight:700, color:"var(--text-main)", lineHeight:1.08, marginBottom:20 }}>
            Hi, I'm<br />
            <span style={{ color:"#00ff88", textShadow:"var(--accent-glow)" }}>Mohamed Jaseen</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <div style={{ height:52, display:"flex", alignItems:"center", marginBottom:20 }}>
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:"clamp(1rem,2.8vw,1.45rem)", color:"var(--text-muted)" }}>
              {typed}<span style={{ color:"#00ff88", animation:"blink 1s step-end infinite" }}>|</span>
            </span>
          </div>
        </Reveal>
        <Reveal delay={240}>
          <p style={{ fontFamily:"'Lora',serif", fontSize:"clamp(.95rem,1.5vw,1.1rem)", color:"var(--text-muted)", maxWidth:510, lineHeight:1.85, marginBottom:44 }}>
            Building scalable backend systems, RESTful APIs, and intelligent web solutions that turn real-world challenges into reliable software products.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginBottom:80 }}>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior:"smooth" })}
              style={{ padding:"14px 34px", borderRadius:9, background:"#00ff88", color:"var(--btn-text)", border:"none", cursor:"pointer", fontFamily:"'DM Mono',monospace", fontSize:13, fontWeight:700, letterSpacing:1, boxShadow:"var(--glow-shadow)", transition:"all .3s" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="var(--glow-shadow-hover)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="var(--glow-shadow-hover)"; }}>
              View Projects →
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior:"smooth" })}
              style={{ padding:"14px 34px", borderRadius:9, background:"transparent", color:"var(--text-main)", border:"1px solid var(--card-border)", cursor:"pointer", fontFamily:"'DM Mono',monospace", fontSize:13, letterSpacing:1, transition:"all .3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor="var(--focus-ring)"; e.currentTarget.style.color="var(--accent)"; e.currentTarget.style.background="var(--accent-bg)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor="var(--text-muted-heavy)"; e.currentTarget.style.color="var(--text-main)"; e.currentTarget.style.background="transparent"; }}>
              Contact Me
            </button>
          </div>
        </Reveal>
        <Reveal delay={500}>
          <div style={{ display:"flex", alignItems:"center", gap:12, color:"var(--text-muted-heavy)" }}>
            <div style={{ width:1, height:46, background:"linear-gradient(#00ff88,transparent)" }} />
            <span style={{ fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:3 }}>SCROLL TO EXPLORE</span>
          </div>
        </Reveal>
      </div>
      {/* Floating socials */}
      <div className="fl-soc" style={{ position:"fixed", left:22, top:"50%", transform:"translateY(-50%)", display:"flex", flexDirection:"column", gap:10, zIndex:100 }}>
        {[
          { href:"https://www.linkedin.com/in/mohamed-jaseen-113ab6257", label:"LI", c:"#0ea5e9" },
          { href:"https://github.com/MohamedJaseen", label:"GH", c:"#a78bfa" },
          { href:"mailto:mohamedjaseensoftdev@gmail.com", label:"@", c:"#4f8cff" },
        ].map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
            width:38, height:38, borderRadius:8, background:"var(--glass-hover)", border:"1px solid var(--card-border)",
            display:"flex", alignItems:"center", justifyContent:"center", color:"var(--text-muted)",
            textDecoration:"none", fontFamily:"'DM Mono',monospace", fontSize:11, fontWeight:700, transition:"all .3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor=s.c; e.currentTarget.style.color=s.c; e.currentTarget.style.boxShadow=`0 0 18px ${s.c}50`; e.currentTarget.style.background=`${s.c}12`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor="var(--glass-border)"; e.currentTarget.style.color="var(--text-muted)"; e.currentTarget.style.boxShadow="none"; e.currentTarget.style.background="var(--glass-hover)"; }}
          >{s.label}</a>
        ))}
        <div style={{ width:1, height:56, background:"linear-gradient(var(--glass-border),transparent)", margin:"6px auto" }} />
      </div>
      <style>{`@media(max-width:900px){.fl-soc{display:none!important}}`}</style>
    </section>
  );
}

/* ── About ── */
function StatCard({ val, suffix, label, visible }) {
  const n = useCounter(val, visible);
  return (
    <div style={{ textAlign:"center", padding:"22px 20px", borderRadius:12, background:"var(--accent-bg)", border:"1px solid var(--accent)" }}>
      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:34, fontWeight:700, color:"#00ff88", lineHeight:1 }}>{n}{suffix}</div>
      <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"var(--text-muted-heavy)", letterSpacing:2, textTransform:"uppercase", marginTop:8 }}>{label}</div>
    </div>
  );
}

function About() {
  const [ref, visible] = useInView();
  return (
    <section id="about" style={{ padding:"110px 28px" }}>
      <div style={{ maxWidth:1120, margin:"0 auto" }}>
        <div ref={ref} style={{ display:"grid", gridTemplateColumns:"1fr 1.5fr", gap:80, alignItems:"center" }} className="about-grid">
          <div style={{ opacity: visible?1:0, transform: visible?"translateX(0)":"translateX(-40px)", transition:"all .8s ease" }}>
            <SL text="About Me" />
            <H2>Crafting Code<br /><span style={{ color:"#00ff88" }}>with Purpose</span></H2>
            <p style={{ fontFamily:"'Lora',serif", fontSize:"1rem", color:"var(--text-muted)", lineHeight:1.88, margin:"26px 0 16px" }}>
              Motivated IT student with hands-on experience in backend development, REST APIs, database design, and AI-driven applications. I enjoy building practical software that is scalable, reliable, and focused on real-world impact.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:10, marginBottom:24 }}>
              {[
                { label:"Backend Development" },
                { label:"REST APIs" },
                { label:"Machine Learning" },
              ].map(item => (
                <span key={item.label} style={{ padding:"8px 12px", borderRadius:999, background:"var(--accent-bg)", border:"1px solid var(--accent)", color:"var(--accent)", fontFamily:"'DM Mono',monospace", fontSize:11, letterSpacing:1.2, textTransform:"uppercase" }}>{item.label}</span>
              ))}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12 }}>
              <StatCard val={4} suffix="+" label="Projects" visible={visible} />
              <StatCard val={2} suffix="+" label="Internships" visible={visible} />
              <StatCard val={91} suffix="%" label="SSLC Score" visible={visible} />
            </div>
            <div style={{ display:"flex", gap:16, flexWrap:"wrap", marginTop:32 }}>
              <a href="/jaseen_softdev_resume.docx" download="jaseen_softdev_resume.docx" style={{ padding:"12px 28px", borderRadius:9, background:"#00ff88", color:"var(--btn-text)", textDecoration:"none", fontFamily:"'DM Mono',monospace", fontSize:13, fontWeight:700, letterSpacing:1, boxShadow:"var(--glow-shadow)", transition:"all .3s", display:"inline-block" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="var(--glow-shadow-hover)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="var(--glow-shadow-hover)"; }}>
                Download Resume
              </a>
            </div>
          </div>
          <div style={{ opacity: visible?1:0, transform: visible?"translateX(0)":"translateX(40px)", transition:"all .8s ease .15s" }}>
            <div style={{ padding:"34px", borderRadius:16, background:"var(--glass-bg)", border:"1px solid var(--card-border)", marginBottom:22, position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:-50, right:-50, width:160, height:160, borderRadius:"50%", background:"radial-gradient(var(--accent-bg),transparent 70%)" }} />
              <p style={{ fontFamily:"'Lora',serif", fontSize:"1.06rem", color:"var(--text-muted)", lineHeight:1.9, position:"relative", fontStyle:"italic" }}>
                "Building scalable backend systems and APIs that power modern web experiences. I bridge the gap between efficient code and real-world impact — one endpoint at a time."
              </p>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
              {[
                { icon:"📍", t:"Mayiladuthurai, Tamil Nadu" },
                { icon:"🎓", t:"B.Tech IT · 2026" },
                { icon:"💼", t:"Open to Work" },
              ].map(b => (
                <span key={b.t} style={{ padding:"8px 16px", borderRadius:8, background:"var(--glass-hover)", border:"1px solid var(--card-border)", fontFamily:"'DM Mono',monospace", fontSize:12, color:"var(--text-muted)", display:"inline-flex", alignItems:"center", gap:8 }}>
                  {b.icon} {b.t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:48px!important}}`}</style>
    </section>
  );
}

/* ── Skills ── */
function SkillBar({ name }) {
  return (
    <div style={{ padding:"16px 20px", borderRadius:12, background:"var(--glass-bg)", border:"1px solid var(--card-border)", transition:"all .3s", cursor:"default" }}
      onMouseEnter={e => { e.currentTarget.style.background="var(--accent-bg)"; e.currentTarget.style.borderColor="var(--focus-ring)"; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 14px 32px var(--accent-bg)"; }}
      onMouseLeave={e => { e.currentTarget.style.background="var(--glass-bg)"; e.currentTarget.style.borderColor="var(--glass-border)"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:10 }}>
        <span style={{ fontFamily:"'DM Mono',monospace", fontSize:13, color:"var(--text-muted)" }}>{name}</span>
        <span style={{ width:8, height:8, borderRadius:"50%", background:"var(--accent)", opacity:.9 }} />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ padding:"110px 28px", background:"var(--card-bg)" }}>
      <div style={{ maxWidth:1120, margin:"0 auto" }}>
        <Reveal>
          <div style={{ marginBottom:64 }}>
            <SL text="Technical Skills" />
            <H2>My Tech <span style={{ color:"#00ff88" }}>Stack</span></H2>
          </div>
        </Reveal>
        {Object.entries(SKILLS).map(([cat, items], ci) => (
          <div key={cat} style={{ marginBottom:52 }}>
            <Reveal delay={ci * 60}>
              <h3 style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"var(--text-muted-heavy)", letterSpacing:3, textTransform:"uppercase", marginBottom:20 }}>{cat}</h3>
            </Reveal>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(236px,1fr))", gap:14 }}>
              {items.map((s, i) => (
                <Reveal key={s.name} delay={ci * 60 + i * 50}>
                  <SkillBar {...s} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Experience ── */
function Experience() {
  const [active, setActive] = useState(0);
  return (
    <section id="experience" style={{ padding:"110px 28px" }}>
      <div style={{ maxWidth:1120, margin:"0 auto" }}>
        <Reveal>
          <div style={{ marginBottom:64 }}>
            <SL text="Work History" />
            <H2>Experience</H2>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"260px 1fr", gap:28, alignItems:"start" }} className="exp-grid">
          <Reveal>
            <div style={{ display:"flex", flexDirection:"column", gap:4, position:"sticky", top:100 }}>
              {EXPERIENCE.map((e, i) => (
                <button key={i} onClick={() => setActive(i)} style={{
                  padding:"16px 20px", borderRadius:10,
                  background: active===i ? `${e.accent}12` : "var(--card-bg)",
                  border:`1px solid ${active===i ? e.accent+"45" : "var(--glass-border)"}`,
                  cursor:"pointer", textAlign:"left", transition:"all .3s",
                }}>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color: active===i ? e.accent : "var(--text-muted-heavy)", letterSpacing:1, marginBottom:4 }}>{e.tag}</div>
                  <div style={{ fontFamily:"'Lora',serif", fontSize:13.5, color: active===i ? "var(--text-main)" : "var(--text-muted)", fontWeight: active===i ? 600 : 400, lineHeight:1.4 }}>{e.company}</div>
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{ display: active===i ? "block" : "none" }}>
                <div style={{ padding:"40px", borderRadius:16, background:"var(--glass-bg)", border:"1px solid var(--glass-border)", position:"relative", overflow:"hidden" }}>
                  <div style={{ position:"absolute", top:0, left:0, width:"100%", height:3, background:`linear-gradient(90deg,${e.accent},transparent)` }} />
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:12, marginBottom:8 }}>
                    <div>
                      <span style={{ fontSize:28, display:"block", marginBottom:14 }}>{e.icon}</span>
                      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:23, fontWeight:700, color:"var(--text-main)", marginBottom:6 }}>{e.role}</h3>
                      <p style={{ fontFamily:"'DM Mono',monospace", fontSize:13, color:e.accent }}>{e.company}</p>
                    </div>
                    <span style={{ padding:"6px 14px", borderRadius:20, background:`${e.accent}15`, border:`1px solid ${e.accent}30`, fontFamily:"'DM Mono',monospace", fontSize:11, color:e.accent, whiteSpace:"nowrap", alignSelf:"flex-start" }}>{e.period}</span>
                  </div>
                  <div style={{ width:44, height:1, background:e.accent, margin:"24px 0" }} />
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:14 }}>
                    {e.points.map((pt, j) => (
                      <li key={j} style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                        <span style={{ color:e.accent, flexShrink:0, marginTop:5, fontSize:9 }}>◆</span>
                        <span style={{ fontFamily:"'Lora',serif", fontSize:".97rem", color:"var(--text-muted)", lineHeight:1.77 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
      <style>{`@media(max-width:768px){.exp-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── Projects ── */
function ProjCard({ p, i }) {
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={i * 110}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
        borderRadius:16, overflow:"hidden",
        background:"var(--card-bg)",
        border:`1px solid ${hov ? p.color+"55" : "var(--card-border)"}`,
        transform: hov ? "translateY(-10px)" : "translateY(0)",
        boxShadow: hov ? `0 28px 60px ${p.color}1a` : "var(--shadow-color)",
        transition:"all .42s cubic-bezier(.4,0,.2,1)",
        display:"flex", flexDirection:"column", height:"100%",
      }}>
        <div style={{ height:200, background:`linear-gradient(135deg,${p.color}18,${p.color}06)`, display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", borderBottom:"1px solid var(--card-border)" }}>
          <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hov ? "scale(1.06)" : "scale(1)", transition: "transform .42s ease" }} />
          <div style={{ position:"absolute", inset:0, background:`linear-gradient(to top, rgba(0,0,0,0.5), transparent)`, opacity: hov ? 1 : 0, transition: "opacity .42s ease", pointerEvents:"none" }} />
        </div>
        <div style={{ padding:28, flex:1, display:"flex", flexDirection:"column" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"var(--text-main)", marginBottom:12 }}>{p.title}</h3>
          <p style={{ fontFamily:"'Lora',serif", fontSize:".9rem", color:"var(--text-muted)", lineHeight:1.75, flex:1, marginBottom:20 }}>{p.desc}</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:24 }}>
            {p.tech.map(t => (
              <span key={t} style={{ padding:"4px 11px", borderRadius:5, background:`${p.color}14`, border:`1px solid ${p.color}28`, fontFamily:"'DM Mono',monospace", fontSize:11, color:p.color }}>{t}</span>
            ))}
          </div>
          <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
            <a href={p.demo} target="_blank" rel="noopener noreferrer" style={{ flex: p.github ? 1 : "0 0 auto", padding:"11px 16px", borderRadius:9, textAlign:"center", background:p.color, color:"var(--bg-color)", fontFamily:"'DM Mono',monospace", fontSize:12, fontWeight:700, letterSpacing:.8, textDecoration:"none", transition:"opacity .2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity=".82"}
              onMouseLeave={e => e.currentTarget.style.opacity="1"}>Live Demo ↗</a>
            {p.github ? (
              <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ flex:1, padding:"11px 0", borderRadius:9, textAlign:"center", background:"transparent", color:"var(--text-muted)", border:"1px solid var(--btn-border)", fontFamily:"'DM Mono',monospace", fontSize:12, textDecoration:"none", transition:"all .2s" }}
                onMouseEnter={e => { e.currentTarget.style.color="var(--text-main)"; e.currentTarget.style.borderColor=p.color; }}
                onMouseLeave={e => { e.currentTarget.style.color="var(--text-muted)"; e.currentTarget.style.borderColor="var(--btn-border)"; }}>GitHub ↗</a>
            ) : null}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ padding:"110px 28px", background:"var(--card-bg)" }}>
      <div style={{ maxWidth:1120, margin:"0 auto" }}>
        <Reveal>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", flexWrap:"wrap", gap:16, marginBottom:64 }}>
            <div>
              <SL text="Portfolio" />
              <H2>Featured <span style={{ color:"#00ff88" }}>Projects</span></H2>
            </div>
            <a href="https://github.com/MohamedJaseen" target="_blank" rel="noopener noreferrer"
              style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:"var(--text-muted-heavy)", textDecoration:"none", letterSpacing:2, transition:"color .2s" }}
              onMouseEnter={e => e.target.style.color="var(--accent)"}
              onMouseLeave={e => e.target.style.color="var(--text-muted-heavy)"}>
              View All on GitHub →
            </a>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(316px,1fr))", gap:24 }}>
          {PROJECTS.map((p, i) => <ProjCard key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ── Education ── */
function Education() {
  return (
    <section id="education" style={{ padding:"110px 28px" }}>
      <div style={{ maxWidth:1120, margin:"0 auto" }}>
        <Reveal>
          <div style={{ marginBottom:64 }}>
            <SL text="Academic Background" />
            <H2>Education & <span style={{ color:"#00ff88" }}>Credentials</span></H2>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"1.1fr 1fr", gap:24, marginBottom:48 }} className="edu-grid">
          <Reveal>
            <div style={{ padding:"36px", borderRadius:16, height:"100%", background:"linear-gradient(135deg,var(--accent-bg),transparent)", border:"1px solid var(--accent)", position:"relative", overflow:"hidden" }}>
              <div style={{ position:"absolute", top:-30, right:-30, width:120, height:120, borderRadius:"50%", background:"radial-gradient(var(--accent-bg),transparent 70%)" }} />
              <span style={{ fontSize:38, marginBottom:20, display:"block" }}>🎓</span>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"var(--text-main)", marginBottom:8 }}>B.S Abdur Rahman Crescent Institute</h3>
              <p style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:"var(--text-muted-heavy)", marginBottom:20 }}>Bachelor of Information Technology · Vandalur, Chennai</p>
              <div style={{ display:"flex", gap:16, alignItems:"center" }}>
                <span style={{ fontFamily:"'Playfair Display',serif", fontSize:32, fontWeight:700, color:"#00ff88" }}>7.70</span>
                <div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"var(--text-muted-heavy)", letterSpacing:2 }}>CGPA</div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"var(--text-muted-heavy)" }}>2022 – 2026</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {[
              { label:"Higher Secondary (HSC)", school:"Vivekananda Matric Hr. Sec. School, Sirkali", score:"88%", year:"2022", c:"#0ea5e9" },
              { label:"Secondary School (SSLC)", school:"Vivekananda Matric Hr. Sec. School, Sirkali", score:"91%", year:"2020", c:"#a78bfa" },
            ].map((ed, i) => (
              <Reveal key={i} delay={100 + i * 80}>
                <div style={{ padding:"26px 28px", borderRadius:14, background:"var(--glass-bg)", border:"1px solid var(--glass-border)", display:"flex", justifyContent:"space-between", alignItems:"center", gap:12, flexWrap:"wrap" }}>
                  <div>
                    <p style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"var(--text-muted-heavy)", letterSpacing:2, textTransform:"uppercase", marginBottom:6 }}>{ed.label}</p>
                    <h4 style={{ fontFamily:"'Playfair Display',serif", fontSize:14.5, color:"var(--text-main)" }}>{ed.school}</h4>
                  </div>
                  <div style={{ textAlign:"right", flexShrink:0 }}>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontSize:28, fontWeight:700, color:ed.c }}>{ed.score}</div>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"var(--text-muted-heavy)" }}>{ed.year}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <h3 style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"var(--text-muted-heavy)", letterSpacing:3, textTransform:"uppercase", marginBottom:20 }}>Certifications</h3>
          <div style={{ display:"flex", flexWrap:"wrap", gap:16, marginBottom:48 }}>
            {CERTS.map((c, i) => (
              <div key={i} style={{ padding:"20px 24px", borderRadius:12, background:"var(--glass-bg)", border:"1px solid var(--glass-border)", display:"flex", alignItems:"center", gap:14, flex:"1 1 230px", transition:"all .3s", cursor:"default" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=`${c.color}45`; e.currentTarget.style.background=`${c.color}09`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="var(--card-border)"; e.currentTarget.style.background="var(--glass-bg)"; }}>
                <div style={{ width:10, height:10, borderRadius:"50%", background:c.color, flexShrink:0 }} />
                <div>
                  <div style={{ fontFamily:"'Lora',serif", fontSize:14.5, color:"var(--text-main)", marginBottom:3 }}>{c.name}</div>
                  <div style={{ fontFamily:"'DM Mono',monospace", fontSize:11, color:"var(--text-muted-heavy)" }}>{c.org}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div style={{ padding:"32px 36px", borderRadius:16, background:"rgba(167,139,250,.06)", border:"1px solid rgba(167,139,250,.18)", display:"flex", gap:24, alignItems:"flex-start", flexWrap:"wrap" }}>
            <div style={{ width:52, height:52, borderRadius:12, background:"rgba(167,139,250,.12)", border:"1px solid rgba(167,139,250,.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:24, flexShrink:0 }}>🩸</div>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:8, marginBottom:8 }}>
                <div>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"var(--text-main)", marginBottom:4 }}>Outreach & Lead Coordinator</h3>
                  <p style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:"#a78bfa" }}>Crescent Blood Donors Club</p>
                </div>
                <span style={{ padding:"5px 13px", borderRadius:20, background:"rgba(167,139,250,.12)", border:"1px solid rgba(167,139,250,.25)", fontFamily:"'DM Mono',monospace", fontSize:11, color:"#a78bfa", whiteSpace:"nowrap" }}>May 2025 – Present</span>
              </div>
              <p style={{ fontFamily:"'Lora',serif", fontSize:".95rem", color:"var(--text-muted)", lineHeight:1.8 }}>
                Organized blood donation drives, coordinated volunteer teams, and collaborated with local hospitals to support emergency blood requirements and community outreach campaigns.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`@media(max-width:768px){.edu-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── Contact ── */
function Contact() {
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const send = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/mohamedjaseensoftdev@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
        body: new URLSearchParams({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "Portfolio Contact Form Submission"
        }).toString()
      });
      if (res.ok) {
        setSent(true);
        setForm({ name:"", email:"", message:"" });
      } else {
        setError("Unable to send message right now. Please email me directly.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
    setLoading(false);
  };
  return (
    <section id="contact" style={{ padding:"110px 28px", background:"var(--card-bg)" }}>
      <div style={{ maxWidth:950, margin:"0 auto" }}>
        <Reveal>
          <div style={{ textAlign:"center", marginBottom:70 }}>
            <SL text="Get In Touch" />
            <H2>Let's Work <span style={{ color:"#00ff88" }}>Together</span></H2>
            <p style={{ fontFamily:"'Lora',serif", color:"var(--text-muted-heavy)", maxWidth:440, margin:"20px auto 0", lineHeight:1.82, fontSize:"1rem" }}>
              Open to backend, AI, and collaborative opportunities. I’d be glad to connect for internships, projects, or full-time roles.
            </p>
          </div>
        </Reveal>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:48 }} className="contact-grid">
          <Reveal>
            <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
              {[
                { icon:"✉️", label:"Email", value:"mohamedjaseensoftdev@gmail.com", href:"mailto:mohamedjaseensoftdev@gmail.com", c:"#4f8cff" },
                { icon:"📞", label:"Phone", value:"+91 9345414821", href:"tel:+919345414821", c:"#ec4899" },
                { icon:"💼", label:"LinkedIn", value:"Mohamed Jaseen", href:"https://www.linkedin.com/in/mohamed-jaseen-113ab6257", c:"#0ea5e9" },
                { icon:"🐙", label:"GitHub", value:"MohamedJaseen", href:"https://github.com/MohamedJaseen", c:"#a78bfa" },
                { icon:"📍", label:"Location", value:"Mayiladuthurai, Tamil Nadu", href:null, c:"#f59e0b" },
              ].map(ci => (
                <div key={ci.label} style={{ display:"flex", alignItems:"center", gap:18, padding:"18px 20px", borderRadius:12, background:"var(--glass-bg)", border:"1px solid var(--card-border)", transition:"border-color .3s" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor=`${ci.c}45`}
                  onMouseLeave={e => e.currentTarget.style.borderColor="var(--glass-border)"}>
                  <div style={{ width:44, height:44, borderRadius:10, background:`${ci.c}15`, border:`1px solid ${ci.c}30`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>{ci.icon}</div>
                  <div>
                    <div style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"var(--text-muted-heavy)", letterSpacing:2, textTransform:"uppercase", marginBottom:3 }}>{ci.label}</div>
                    {ci.href
                      ? <a href={ci.href} target="_blank" rel="noopener noreferrer" style={{ fontFamily:"'Lora',serif", fontSize:".95rem", color:ci.c, textDecoration:"none" }}
                          onMouseEnter={e => e.target.style.textDecoration="underline"}
                          onMouseLeave={e => e.target.style.textDecoration="none"}>{ci.value}</a>
                      : <span style={{ fontFamily:"'Lora',serif", fontSize:".95rem", color:"var(--text-muted)" }}>{ci.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            {sent ? (
              <div style={{ padding:"60px 40px", borderRadius:16, textAlign:"center", background:"var(--accent-bg)", border:"1px solid var(--accent)" }}>
                <div style={{ fontSize:52, marginBottom:18 }}>🚀</div>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:24, color:"var(--text-main)", marginBottom:10 }}>Message Sent!</h3>
                <p style={{ fontFamily:"'Lora',serif", color:"var(--text-muted)", lineHeight:1.7 }}>Thanks for reaching out, {form.name}!<br />I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div style={{ padding:"38px", borderRadius:16, background:"var(--glass-bg)", border:"1px solid var(--glass-border)" }}>
                {["name","email"].map(f => (
                  <div key={f} style={{ marginBottom:18 }}>
                    <label style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"var(--text-muted-heavy)", letterSpacing:2, textTransform:"uppercase", display:"block", marginBottom:8 }}>{f}</label>
                    <input type={f==="email" ? "email" : "text"} value={form[f]} onChange={e => setForm(v => ({ ...v, [f]:e.target.value }))}
                      placeholder={f==="name" ? "Your name" : "your@email.com"}
                      style={{ width:"100%", padding:"12px 16px", borderRadius:9, background:"var(--glass-hover)", border:"1px solid var(--card-border)", color:"var(--text-main)", fontFamily:"'Lora',serif", fontSize:".95rem", outline:"none", boxSizing:"border-box", transition:"border-color .3s" }}
                      onFocus={e => e.target.style.borderColor="var(--focus-ring)"}
                      onBlur={e => e.target.style.borderColor="var(--input-border)"} />
                  </div>
                ))}
                <div style={{ marginBottom:28 }}>
                  <label style={{ fontFamily:"'DM Mono',monospace", fontSize:10, color:"var(--text-muted-heavy)", letterSpacing:2, textTransform:"uppercase", display:"block", marginBottom:8 }}>Message</label>
                  <textarea rows={5} value={form.message} onChange={e => setForm(v => ({ ...v, message:e.target.value }))}
                    placeholder="Tell me about your project or opportunity..."
                    style={{ width:"100%", padding:"12px 16px", borderRadius:9, background:"var(--glass-hover)", border:"1px solid var(--card-border)", color:"var(--text-main)", fontFamily:"'Lora',serif", fontSize:".95rem", outline:"none", resize:"vertical", boxSizing:"border-box", transition:"border-color .3s" }}
                    onFocus={e => e.target.style.borderColor="var(--focus-ring)"}
                    onBlur={e => e.target.style.borderColor="var(--input-border)"} />
                </div>
                {error && <div style={{ color:"#ef4444", fontFamily:"'DM Mono',monospace", fontSize:12, marginBottom:16, textAlign:"center" }}>{error}</div>}
                <button onClick={send} disabled={loading} style={{
                  width:"100%", padding:"14px", borderRadius:9,
                  background:"var(--btn-gradient)",
                  color:"var(--btn-text)", border:"none", cursor: loading ? "not-allowed" : "pointer",
                  fontFamily:"'DM Mono',monospace", fontSize:13, fontWeight:700, letterSpacing:1.5,
                  boxShadow:"var(--glow-shadow)", transition:"all .3s", opacity: loading ? .7 : 1,
                }}
                  onMouseEnter={e => { if (!loading) { e.currentTarget.style.boxShadow="var(--glow-shadow-hover)"; e.currentTarget.style.transform="translateY(-2px)"; } }}
                  onMouseLeave={e => { if (!loading) { e.currentTarget.style.boxShadow="var(--glow-shadow)"; e.currentTarget.style.transform="translateY(0)"; } }}>
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </div>
            )}
          </Reveal>
        </div>
      </div>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ── Footer ── */
function Footer() {
  return (
    <footer style={{ borderTop:"1px solid var(--card-border)", padding:"34px 28px" }}>
      <div style={{ maxWidth:1120, margin:"0 auto", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
        <span style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:700, color:"var(--text-muted)" }}>
          MJ<span style={{ color:"var(--accent)", opacity: 0.8 }}>.</span>
        </span>
        <p style={{ fontFamily:"'DM Mono',monospace", fontSize:12, color:"var(--text-muted)", letterSpacing:1.5 }}>
          © 2026 Mohamed Jaseen. All rights reserved.
        </p>
        <div style={{ display:"flex", gap:12 }}>
          {[
            { href:"https://www.linkedin.com/in/mohamed-jaseen-113ab6257", label:"LI", ariaLabel:"LinkedIn" },
            { href:"https://github.com/MohamedJaseen", label:"GH", ariaLabel:"GitHub" },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" aria-label={l.ariaLabel} style={{
              width:34, height:34, borderRadius:8, background:"var(--card-bg)", border:"1px solid var(--card-border)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontFamily:"'DM Mono',monospace", fontSize:11, color:"var(--text-muted)",
              textDecoration:"none", transition:"all .22s",
            }}
              onMouseEnter={e => { e.currentTarget.style.color="var(--accent)"; e.currentTarget.style.borderColor="var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.color="var(--text-muted)"; e.currentTarget.style.borderColor="var(--card-border)"; }}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ── Root ── */
export default function Portfolio() {
  const [active, setActive] = useState("hero");
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const ids = ["hero", ...NAV_LINKS.map(l => l.toLowerCase())];
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold:.25, rootMargin:"-10% 0px -10% 0px" }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        html{scroll-behavior:smooth;}
        ::selection{background:var(--focus-ring);color:var(--text-main);}
        ::-webkit-scrollbar{width:3px;}
        ::-webkit-scrollbar-track{background:var(--bg-color);}
        ::-webkit-scrollbar-thumb{background:var(--accent);border-radius:2px;}
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
      `}</style>
      <Navbar active={active} theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
