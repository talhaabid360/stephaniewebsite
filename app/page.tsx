"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "./components/ArrowUpRight";
import { featuredProjects, projects } from "./projects/data";

const navItems = [
  ["Team", "#stephanie"],
  ["Expertise", "#expertise"],
  ["Projects", "#projects"],
  ["Insights", "#insights"],
  ["Contact", "#contact"],
];

const organizations = [
  { name: "Inter Miami CF", logo: "/logos/inter-miami-cf.svg", shape: "crest" },
  { name: "Pier Sixty-Six", logo: "/logos/pier-66.svg", shape: "stacked" },
  { name: "Ritz-Carlton Residences", logo: "/logos/ritz-carlton-residences.svg", shape: "stacked" },
  { name: "Moss", logo: "/logos/moss.svg", shape: "landscape" },
  { name: "Marriott", logo: "/logos/marriott.svg", shape: "stacked" },
  { name: "Hilton", logo: "/logos/hilton.svg", shape: "stacked" },
  { name: "Porsche", logo: "/logos/porsche.svg", shape: "crest" },
  { name: "Red Bull", logo: "/logos/red-bull.svg", shape: "wide" },
  { name: "Broward Health", logo: "/logos/broward-health.svg", shape: "wide" },
];

const expertise = [
  ["01", "Land Use & Zoning", "Clear the regulatory path before it becomes the obstacle."],
  ["02", "Development Entitlements", "Move from due diligence to hearing to final approval with intent."],
  ["03", "Government Relations", "Navigate the people, priorities and systems shaping public decisions."],
  ["04", "Public–Private Partnerships", "Align private ambition with public purpose and durable value."],
  ["05", "Procurement & Strategic Initiatives", "Approach competitive processes with discipline and institutional fluency."],
  ["06", "Economic Development", "Frame major projects around the growth they unlock for communities."],
  ["07", "Complex Development Strategy", "Connect legal, political, planning and business realities early."],
  ["08", "Sporting & Destination Events", "Clear the path for visible, high-stakes experiences in complex places."],
  ["09", "Planning & Approvals", "Control sequencing, applications and relationships without losing momentum."],
];

const difference = [
  ["Strategy", "Understand how the project gets approved before the process begins."],
  ["Relationships", "Know how governmental and regulatory ecosystems actually operate."],
  ["Execution", "Manage complexity without sacrificing time, trust or momentum."],
  ["Results", "Move ambitious projects from concept to entitlement."],
];

const metrics = [
  [21.5, "K", "Seats at Chase Stadium"],
  [13, "", "Months to deliver the stadium campus"],
  [1.7, "B+", "Annual economic impact of FLIBS (USD)"],
  [projects.length, "", "Selected projects"],
];

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const range = (value: number, start: number, end: number) => clamp((value - start) / (end - start));
const smoothstep = (value: number) => value * value * (3 - 2 * value);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroMediaRef = useRef<HTMLDivElement>(null);
  const heroStageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const statementRef = useRef<HTMLElement>(null);
  const statementTopRef = useRef<HTMLDivElement>(null);
  const statementClaimRef = useRef<HTMLHeadingElement>(null);
  const statementPortraitRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLElement>(null);
  const profilePortraitRef = useRef<HTMLDivElement>(null);
  const profileCopyRef = useRef<HTMLDivElement>(null);
  const estefaniaRef = useRef<HTMLElement>(null);
  const estefaniaPortraitRef = useRef<HTMLDivElement>(null);
  const estefaniaCopyRef = useRef<HTMLDivElement>(null);
  const insightsRef = useRef<HTMLElement>(null);
  const insightsImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.body.classList.add("intro-active");

    const releaseIntro = window.setTimeout(
      () => document.body.classList.remove("intro-active"),
      reduceMotion ? 1100 : 3500,
    );

    return () => {
      window.clearTimeout(releaseIntro);
      document.body.classList.remove("intro-active");
    };
  }, []);

  useEffect(() => {
    // const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reduceMotion =
      window.innerWidth >= 768 &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewport = window.innerHeight;
      const actualScrollY = window.scrollY;
      // const compact = window.innerWidth < 768;<div className="impact-media" data-parallax="46" data-overflow-allowed><video autoPlay muted loop playsInline preload="auto"><source src="/videos/0922.mp4" type="video/mp4" /></video></div>
      const compact = window.innerWidth < 768;
      const pageRange = Math.max(1, document.documentElement.scrollHeight - viewport);
      const enterProgress = (top: number, start = 0.94, end = 0.12) =>
        smoothstep(clamp((viewport * start - top) / Math.max(1, viewport * (start - end))));
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${actualScrollY / pageRange})`;
      headerRef.current?.classList.toggle("is-scrolled", actualScrollY > 28);

      // if (!reduceMotion && heroRef.current) {
      //   const rect = heroRef.current.getBoundingClientRect();
      //   const progress = clamp(-rect.top / Math.max(1, rect.height - viewport));
      if (!reduceMotion && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
//   const sticky = heroRef.current.querySelector<HTMLElement>(".hero-sticky");

//   // if (compact && sticky) {
//   //   if (rect.top <= 0 && rect.bottom > viewport) {
//   //     sticky.style.position = "fixed";
//   //     sticky.style.top = "0";
//   //     sticky.style.bottom = "auto";
//   //     sticky.style.left = "0";
//   //     sticky.style.width = "100%";
//   //     sticky.style.height = "100dvh";
//   //   } else {
//   //     sticky.style.position = "absolute";
//   //     sticky.style.left = "0";
//   //     sticky.style.width = "100%";
//   //     sticky.style.height = "100dvh";

//   //     if (rect.top > 0) {
//   //       sticky.style.top = "0";
//   //       sticky.style.bottom = "auto";
//   //     } else {
//   //       sticky.style.top = "auto";
//   //       sticky.style.bottom = "0";
//   //     }
//   //   }
//   // }
//   if (compact && sticky) {
//   const maxPinDistance = Math.max(0, rect.height - viewport);
//   const pinDistance = Math.min(
//     maxPinDistance,
//     Math.max(0, -rect.top)
//   );

//   sticky.style.position = "absolute";
//   sticky.style.top = "0";
//   sticky.style.bottom = "auto";
//   sticky.style.left = "0";
//   sticky.style.width = "100%";
//   sticky.style.height = `${viewport}px`;
//   sticky.style.transform = `translate3d(0, ${pinDistance}px, 0)`;
// }

        const stickyEl = heroRef.current.querySelector<HTMLElement>(".hero-sticky");
        const stickyHeight = stickyEl?.offsetHeight || viewport;
        const progress = clamp(-rect.top / Math.max(1, rect.height - stickyHeight));
        const opacities = [
          1 - smoothstep(range(progress, 0.17, 0.28)),
          smoothstep(range(progress, 0.22, 0.32)) * (1 - smoothstep(range(progress, 0.45, 0.56))),
          smoothstep(range(progress, 0.5, 0.6)) * (1 - smoothstep(range(progress, 0.72, 0.83))),
          smoothstep(range(progress, 0.77, 0.87)),
        ];
        const centers = [0, 0.4, 0.69, 0.95];

        if (heroMediaRef.current) {
          heroMediaRef.current.style.transform = `translate3d(0, ${progress * -3}%, 0) scale(${1.025 + progress * 0.055})`;
        }

        heroStageRefs.current.forEach((stage, index) => {
          if (!stage) return;
          stage.style.opacity = String(opacities[index]);
          stage.style.transform = `translate3d(0, ${(centers[index] - progress) * (compact ? 34 : 52)}px, 0)`;
          if (index === 0) stage.inert = opacities[index] < 0.45;
        });

      }

      if (!reduceMotion && statementRef.current) {
        const rect = statementRef.current.getBoundingClientRect();
        const rawProgress = compact
          ? clamp((viewport * 0.9 - rect.top) / Math.max(1, viewport * 0.76))
          : clamp((viewport * 0.95 - rect.top) / Math.max(1, viewport * 1.1));
        const progress = smoothstep(rawProgress);
        const sequenceMove = smoothstep(range(progress, 0.01, compact ? 0.28 : 0.26));
        const sequenceOpacity = smoothstep(range(progress, 0.01, compact ? 0.18 : 0.16));
        const claimMove = smoothstep(range(progress, compact ? 0.12 : 0.1, compact ? 0.58 : 0.5));
        const claimOpacity = smoothstep(range(progress, compact ? 0.12 : 0.1, compact ? 0.34 : 0.3));
        const portraitMove = smoothstep(range(progress, compact ? 0.18 : 0.14, compact ? 0.64 : 0.56));
        const portraitOpacity = smoothstep(range(progress, compact ? 0.18 : 0.14, compact ? 0.4 : 0.34));

        if (statementTopRef.current) {
          statementTopRef.current.style.opacity = String(sequenceOpacity);
          statementTopRef.current.style.transform = `translate3d(0, ${(1 - sequenceMove) * (compact ? 14 : 28)}px, 0)`;
        }
        if (statementClaimRef.current) {
          statementClaimRef.current.style.opacity = String(claimOpacity);
          // statementClaimRef.current.style.transform = `translate3d(0, ${(1 - claimMove) * (compact ? 30 : 64)}px, 0)`;
          statementClaimRef.current.style.transform = "translate3d(0, 0, 0)";
        }
        if (statementPortraitRef.current) {
          statementPortraitRef.current.style.opacity = String(portraitOpacity);
          statementPortraitRef.current.style.transform = `translate3d(0, ${(1 - portraitMove) * (compact ? 7 : 12)}%, 0) scale(${0.99 + portraitMove * 0.01})`;
        }
      }

      if (!reduceMotion && profileRef.current) {
        const progress = enterProgress(profileRef.current.getBoundingClientRect().top, 0.92, compact ? 0.2 : 0.12);
        if (profilePortraitRef.current) {
          profilePortraitRef.current.style.opacity = String(progress);
          profilePortraitRef.current.style.transform = `translate3d(0, ${(1 - progress) * (compact ? 38 : 86)}px, 0) scale(${0.985 + progress * 0.015})`;
        }
        if (profileCopyRef.current) {
          profileCopyRef.current.style.opacity = String(progress);
          profileCopyRef.current.style.transform = `translate3d(0, ${(1 - progress) * (compact ? 28 : 62)}px, 0)`;
        }
      }

      if (!reduceMotion && estefaniaRef.current) {
        // const sectionTop = estefaniaRef.current.getBoundingClientRect().top;
        // const portraitTop = sectionTop + (estefaniaPortraitRef.current?.offsetTop || 0);
        // const copyTop = sectionTop + (estefaniaCopyRef.current?.offsetTop || 0);
        const portraitTop = estefaniaPortraitRef.current?.getBoundingClientRect().top ?? window.innerHeight;
        const copyTop = estefaniaCopyRef.current?.getBoundingClientRect().top ?? window.innerHeight;
        const portraitProgress = enterProgress(portraitTop, 0.96, compact ? 0.16 : 0.06);
        const copyProgress = enterProgress(copyTop, compact ? 0.94 : 0.9, compact ? 0.18 : 0.08);
        if (estefaniaPortraitRef.current) {
          estefaniaPortraitRef.current.style.opacity = String(portraitProgress);
          estefaniaPortraitRef.current.style.transform = `translate3d(${(1 - portraitProgress) * (compact ? -7 : -5)}%, ${(1 - portraitProgress) * (compact ? 34 : 52)}px, 0) scale(${0.975 + portraitProgress * 0.025})`;
        }
        if (estefaniaCopyRef.current) {
          estefaniaCopyRef.current.style.opacity = String(copyProgress);
          estefaniaCopyRef.current.style.transform = `translate3d(0, ${(1 - copyProgress) * (compact ? 36 : 64)}px, 0)`;
        }
      }

      if (!reduceMotion && insightsRef.current && insightsImageRef.current) {
        const progress = enterProgress(insightsRef.current.getBoundingClientRect().top, 0.92, compact ? 0.18 : 0.1);
        insightsImageRef.current.style.opacity = String(progress);
        insightsImageRef.current.style.transform = `translate3d(0, ${(1 - progress) * (compact ? 42 : 104)}px, 0)`;
        const image = insightsImageRef.current.querySelector<HTMLElement>("[data-parallax]");
        if (image) image.style.transform = `translate3d(0, ${(1 - progress) * 18}px, 0) scale(1.045)`;
        }

      if (!reduceMotion && !compact) {
        parallaxElements.forEach((element) => {
          const rect = (element.parentElement || element).getBoundingClientRect();
          const distance = Number(element.dataset.parallax || 32);
          const offset = clamp((viewport / 2 - (rect.top + rect.height / 2)) / viewport, -1.25, 1.25) * distance;
          element.style.transform = `translate3d(0, ${offset}px, 0) scale(1.045)`;
        });
      } else if (compact) {
        parallaxElements.forEach((element) => { element.style.transform = "none"; });
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const compact = window.innerWidth < 768;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (!entry.isIntersecting || element.dataset.revealed) return;
        element.dataset.revealed = "true";
        element.classList.add("is-visible");
        if (!reduceMotion) {
          element.animate(
            [
              { opacity: 0.28, transform: `translate3d(0, ${compact ? 14 : 20}px, 0)` },
              { opacity: 1, transform: "translate3d(0, 0, 0)" },
            ],
            { duration: compact ? 420 : 560, easing: "cubic-bezier(0.23, 1, 0.32, 1)", fill: "both" },
          );
        }
        observer.unobserve(element);
      }),
      { threshold: 0.12, rootMargin: "0px 0px -5%" },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      counters.forEach((node) => {
        const value = Number(node.dataset.count || 0);
        node.textContent = Number.isInteger(value) ? value.toLocaleString() : value.toFixed(1);
      });
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const node = entry.target as HTMLElement;
        if (!entry.isIntersecting || node.dataset.played) return;
        node.dataset.played = "true";
        const target = Number(node.dataset.count || 0);
        const started = performance.now();
        const tick = (now: number) => {
          const progress = clamp((now - started) / 1100);
          const value = target * (1 - Math.pow(1 - progress, 4));
          node.textContent = Number.isInteger(target) ? Math.round(value).toLocaleString() : value.toFixed(1);
          if (progress < 1) window.requestAnimationFrame(tick);
        };
        window.requestAnimationFrame(tick);
      });
    }, { threshold: 0.55 });
    counters.forEach((counter) => observer.observe(counter));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    if (menuOpen) window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <main id="top">
      <div className="site-intro" aria-hidden="true">
        <div className="intro-panel intro-panel-top" />
        <div className="intro-panel intro-panel-bottom" />
        <div className="intro-content">
          <span className="intro-mark">T</span>
          <p className="intro-name">Toothaker.org</p>
          <div className="intro-loader">
            <span />
          </div>
          <p className="intro-disciplines">Land Use · Development · Political<br />Strategy · Procurement</p>
        </div>
      </div>

      <div className="scroll-progress" ref={progressRef} aria-hidden="true" />

      <header className={`site-header ${menuOpen ? "menu-active" : ""}`} ref={headerRef}>
        <a className="brand" href="#top" aria-label="Toothaker home">
          <span className="brand-mark">T</span>
          <span className="brand-name">Toothaker</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Start a conversation</a>
        <button className={`menu-button ${menuOpen ? "is-open" : ""}`} type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <p>Vision. Strategy. Approval.</p>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, href], index) => (
            <a
              key={label}
              href={href}
              onClick={() => {
                document.body.classList.remove("menu-open");
                setMenuOpen(false);
              }}
            >
              <span>0{index + 1}</span>{label}
            </a>
          ))}
        </nav>
        <a className="menu-contact" href="mailto:stephanie@toothaker.org">stephanie@toothaker.org</a>
      </div>

      <section className="hero-journey" ref={heroRef} aria-label="Vision, strategy and approval">
        <div className="hero-sticky">
          <div className="hero-media" ref={heroMediaRef} data-overflow-allowed>
            <img src="/images/hero-south-florida-v2.webp" alt="South Florida waterfront development at golden hour" fetchPriority="high" />
            <video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-south-florida-v2.webp" aria-hidden="true">
              <source src="https://videos.pexels.com/video-files/15177751/15177751-hd_1920_1080_30fps.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-shade" />
          <div className="hero-rule" aria-hidden="true" />

          <div className="hero-stage hero-stage-opening" ref={(node) => { heroStageRefs.current[0] = node; }}>
            <p className="eyebrow">Stephanie J. Toothaker · South Florida</p>
            <h1>The strategy behind South Florida’s most ambitious developments.</h1>
            <p className="hero-summary">Land use, governmental relations and approval strategy for consequential projects.</p>
            <a className="primary-link" href="#contact"><span>Start a conversation</span></a>
          </div>
          <div className="hero-stage hero-stage-center" aria-hidden="true" ref={(node) => { heroStageRefs.current[1] = node; }}>
            <p className="stage-kicker">The ambition</p>
            <h2>Big ideas are easy to imagine.</h2>
          </div>
          <div className="hero-stage hero-stage-center hero-stage-light" aria-hidden="true" ref={(node) => { heroStageRefs.current[2] = node; }}>
            <p className="stage-kicker">The reality</p>
            <h2>Getting them approved is another matter.</h2>
          </div>
          <div className="hero-stage hero-stage-closing" aria-hidden="true" ref={(node) => { heroStageRefs.current[3] = node; }}>
            <p className="stage-kicker">The path forward</p>
            <h2><span>Vision.</span><span>Strategy.</span><span className="gold-text">Approval.</span></h2>
          </div>

          <div className="hero-location"><span>Fort Lauderdale</span><span>26.1224° N · 80.1373° W</span></div>
          <div className="scroll-cue"><span aria-hidden="true" />Scroll to explore</div>
        </div>
      </section>

      <section className="authority" id="experience" aria-labelledby="authority-title">
        <div className="section-shell authority-intro" data-reveal>
          <p className="section-tag">Selected experience</p>
          <h2 id="authority-title">Trusted where ambition meets complexity.</h2>
          <p>Recognizable institutions. Defining developments. Work connected to the evolution of South Florida.</p>
        </div>
        <div className="logo-marquee" data-overflow-allowed aria-label="Selected organizations and developments">
          <div className="logo-track">
            {[0, 1].map((setIndex) => (
              <div className="logo-set" key={setIndex} aria-hidden={setIndex === 1}>
                {organizations.map((organization) => (
                  <div className={`logo-item logo-${organization.shape}.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`} key={`${setIndex}-${organization.name}`}>
                    <img src={organization.logo} alt={setIndex === 0 ? `${organization.name} logo` : ""} loading="lazy" decoding="async" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="statement" id="strategy" ref={statementRef} aria-labelledby="statement-title">
        <div className="statement-sticky">
          <div className="section-shell statement-inner">
            <p className="section-tag">The work</p>
            <div className="statement-motion">
              <div className="statement-sequence" ref={statementTopRef}>
                <p>Developers bring the property.</p>
                <p>Architects bring the vision.</p>
                <p>Capital brings conviction.</p>
              </div>
              <div className="statement-feature">
                <div className="statement-claim-frame">
                  <h2 className="statement-claim" id="statement-title" ref={statementClaimRef}>Stephanie brings the strategy required to make it real.</h2>
                </div>
                <div className="statement-portrait" ref={statementPortraitRef}>
                  <img src="/images/stephanie-cutout-tight.webp" alt="Stephanie J. Toothaker" loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects" aria-labelledby="projects-title">
        <div className="projects-heading section-shell">
          <p className="section-tag" data-reveal>Selected projects · 01—{String(featuredProjects.length).padStart(2, "0")}</p>
          <h2 id="projects-title" data-reveal>The work is the proof.</h2>
          <p data-reveal>A concise view of the places, institutions and experiences shaped to move forward.</p>
        </div>
        <div className="project-stack">
          {featuredProjects.map((project) => (
            <article className={`project-chapter project-${project.number}`} key={project.name}>
              <div className="project-frame">
                <div className="project-media" data-parallax="24" data-overflow-allowed>
                  <img src={project.image} alt={`${project.name} project`} loading="lazy" decoding="async" />
                </div>
                <div className="project-shade" />
                <div className="project-content section-shell">
                  <div className="project-meta"><span>{project.number} / {String(featuredProjects.length).padStart(2, "0")}</span><span>{project.location}</span><span>{project.category}</span></div>
                  <div className="project-title"><h3>{project.name}</h3><p>{project.statement}</p></div>
                  <div className="project-brief">
                    <p>{project.summary}</p>
                    <Link href={`/projects/${project.slug}`}>View project <ArrowUpRight /></Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="all-projects section-shell" data-reveal>
          {/* <p>{projects.length} selected projects across development, civic initiatives, hospitality and global events.</p> */}
          <p className="projects-summary">
            {projects.length} selected projects across development, civic initiatives, hospitality and global events.
          </p>
          <Link className="text-link" href="/projects"><span>Explore all projects</span><ArrowUpRight /></Link>
        </div>
      </section>

      <section className="stephanie section-shell" id="stephanie" ref={profileRef}>
        <div className="portrait-block profile-portrait-motion" ref={profilePortraitRef}>
          <div className="portrait-media"><img src="/images/stephanie-hero.webp" alt="Stephanie J. Toothaker in an editorial architectural setting" loading="lazy" decoding="async" /></div>
          {/* <p>Chairwoman · Chief Strategist</p> */}
        </div>
        <div className="stephanie-copy profile-copy-motion" ref={profileCopyRef}>
          <p className="section-tag">Meet Stephanie</p>
          <h2>The strategist behind the approval.</h2>
          <div className="bio">
            <p>Stephanie J. Toothaker is an AV-rated attorney known for a sophisticated approach to land use, governmental relations and procurement.</p>
            <p>She operates where development, government, politics and business converge—turning ambitious property rights, public-private initiatives and destination projects into strategies built to earn approval.</p>
          </div>
          <a className="text-link" href="#contact"><span>Start a conversation</span></a>
        </div>
      </section>

      <section className="founder-quote" aria-label="Stephanie J. Toothaker quote">
        <div className="section-shell" data-reveal>
          <span className="quote-mark" aria-hidden="true">“</span>
          <blockquote>Responsibly activating private property rights and growing the economy with innovative initiatives is the best way to build a bold future.</blockquote>
          <p><strong>Stephanie J. Toothaker, Esq.</strong><span>Chairwoman &amp; Chief Strategist</span></p>
        </div>
      </section>

            <section className="estefania" id="estefania" ref={estefaniaRef} aria-labelledby="estefania-title">
        <div className="estefania-portrait" ref={estefaniaPortraitRef} data-overflow-allowed>
          {/* <div className="estefania-halo" aria-hidden="true" /> */}
          <img src="/images/estefania-mayorga.webp" alt="Estefanía Mayorga, Lead Planner" loading="lazy" decoding="async" />
        </div>
        <div className="estefania-copy" ref={estefaniaCopyRef}>
          <p className="section-tag">Meet Estefanía</p>
          <p className="estefania-role">Lead Planner</p>
          <h2 id="estefania-title">Planning insight. Practical paths to approval.</h2>
          <div className="bio">
            <p>Estefanía Mayorga advises clients on complex land use and zoning matters in partnership with Stephanie, guiding projects from early due diligence through final approvals and permitting.</p>
            <p>Her creative, pragmatic approach connects planning, political and legal considerations—giving ambitious developments a clear, actionable entitlement strategy.</p>
          </div>
          <a className="text-link text-link-light" href="#contact"><span>Work with our team</span></a>
        </div>
      </section>
      
      
      
      
      
      <section className="expertise" id="expertise" aria-labelledby="expertise-title">
        <div className="section-shell">
          <div className="section-heading dark-heading">
            <p className="section-tag" data-reveal>What we do</p>
            <h2 id="expertise-title" data-reveal><span>Complex Projects.</span><span>Clear Pathways.</span></h2>
          </div>
          <div className="expertise-list">
            {expertise.map(([number, title, copy]) => (
              <article key={number} data-reveal>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>



      <section className="difference section-shell" id="difference" aria-labelledby="difference-title">
        <div className="section-heading">
          <p className="section-tag" data-reveal>The Toothaker difference</p>
          <h2 id="difference-title" className="difference-title" data-reveal><span>More than counsel.</span><span>A force for momentum.</span></h2>
        </div>
        <div className="difference-grid">
          {difference.map(([title, copy], index) => (
            <article key={title} data-reveal><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="impact" id="impact" aria-label="Selected impact">
        <div className="impact-media" data-parallax="46" data-overflow-allowed><video autoPlay muted loop playsInline preload="metadata" poster="/images/hero-south-florida-v2.webp" aria-hidden="true"><source src="/videos/0922.mp4" type="video/mp4" /></video></div>
        <div className="impact-shade" />
        <div className="section-shell impact-inner">
          <div className="impact-heading" data-reveal><p className="section-tag">Selected impact</p><h2>Scale changes the conversation.</h2></div>
          <div className="metric-grid">
            {metrics.map(([value, suffix, label]) => <article key={String(label)} data-reveal><div className="metric-value"><strong data-count={value}>0</strong><span>{suffix}</span></div><p>{label}</p></article>)}
          </div>
          <p className="metric-note">Project Records by Toothaker.</p>
        </div>
      </section>

      <section className="south-florida" id="region" aria-labelledby="region-title">
        <div className="region-copy" data-reveal>
          <p className="section-tag">The region</p>
          <h2 id="region-title">South Florida is not a market. It is the context.</h2>
          <p>Fort Lauderdale. Broward County. Palm Beach County. The cities, agencies and communities shaping one of America’s most dynamic development landscapes.</p>
        </div>
        <div className="region-map" data-reveal>
          <img
            className="map-frame"
            src="/images/south-florida-census.png"
            alt="Geographic county and coastline map of Palm Beach, Broward and Miami-Dade in South Florida"
            loading="lazy"
            decoding="async"
          />
          <div className="map-overlay" aria-hidden="true" />
          <div className="map-point point-palm"><i /><span>Palm Beach County</span></div>
          <div className="map-point point-broward"><i /><span>Broward County</span></div>
          <div className="map-point point-fll"><i /><span>Fort Lauderdale</span></div>
          <div className="map-point point-miami"><i /><span>Miami-Dade</span></div>
          <p className="map-credit">Geography: <a href="https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer">U.S. Census Bureau</a></p>
        </div>
      </section>
{/* 
      <section className="insights section-shell" id="insights" ref={insightsRef} aria-labelledby="insights-title">
        <div className="section-heading">
          <p className="section-tag" data-reveal>Insights & influence</p>
          <h2 id="insights-title" data-reveal>The decisions shaping what’s next.</h2>
        </div>
        <div className="insights-layout">
          <div className="insight-image insight-image-motion" ref={insightsImageRef}><div data-parallax="24"><img src="/images/stephanie-office.webp" alt="Stephanie Toothaker in conversation" loading="lazy" decoding="async" /></div></div>
          <div className="insight-topics">
            {["Development approvals", "Government and policy", "Economic development", "Major projects and media"].map((topic, index) => (
              <article key={topic} data-reveal><span>0{index + 1}</span><h3>{topic}</h3><p>Perspective on the forces shaping South Florida’s next era.</p></article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="contact" id="contact">
        <div className="section-shell contact-inner" data-reveal>
          <p className="section-tag">Start a conversation</p>
          <div className="contact-title">
            <h2>Have an ambitious project?</h2>
            <h3>Let’s make it possible.</h3>
          </div>
          <div className="contact-links">
            <a href="mailto:stephanie@toothaker.org"><span>stephanie@toothaker.org</span></a>
            <a href="tel:+19546489376"><span>954.648.9376</span></a>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top"><span className="brand-mark">T</span><span className="brand-name">Toothaker</span></a>
        <p>Vision. Strategy. Approval.</p>
        <div><span>Fort Lauderdale · Florida</span><span>© 2026 Toothaker.org</span><a href="#top">Back to top</a></div>
      </footer>
    </main>
  );
}
