'use client'

import { useEffect, useRef } from 'react'
import { Mascot } from 'page-mascot'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Code2, Compass, FileText, Layers3, Mail, Menu, MousePointer2, ShieldCheck, Sparkles, Workflow } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Automation testing', detail: 'Selenium · Java · TestNG' },
  { icon: MousePointer2, title: 'Quality engineering', detail: 'Manual · Regression · UAT' },
  { icon: Workflow, title: 'API testing', detail: 'Postman · REST · Swagger' },
  { icon: Layers3, title: 'Agile delivery', detail: 'Jira · Scrum · Collaboration' },
]
const projects = [
  { num: '01', title: 'E-commerce quality suite', type: 'WEB AUTOMATION', description: 'A maintainable Selenium framework built to keep critical shopping journeys dependable, from product discovery through checkout.', tags: ['Java', 'Selenium', 'TestNG'], icon: ShieldCheck, color: 'lavender' },
  { num: '02', title: 'API confidence toolkit', type: 'API TESTING', description: 'Reusable Postman collections and clear validation flows that make service changes easier to ship with confidence.', tags: ['Postman', 'REST API', 'Jira'], icon: Workflow, color: 'blue' },
]

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-label"><span>{number}</span><span className="label-line" />{children}</div>
}

export default function Page() {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 24, opacity: 0, duration: 0.75, stagger: 0.1, ease: 'power3.out', delay: 0.12 })
      gsap.from('.mascot-stage', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 0.35 })
      gsap.from('.float-badge', { scale: 0.85, opacity: 0, duration: 0.55, stagger: 0.12, ease: 'back.out(1.7)', delay: 0.75 })
      gsap.to('.orbit-one', { rotate: 360, duration: 24, repeat: -1, ease: 'none', transformOrigin: 'center' })
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
        gsap.from(element, { y: 28, opacity: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } })
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <main ref={root}>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Bhavya Sharma home"><span className="brand-mark">B<span>.</span></span><span>BHAVYA<br /><small>SHARMA</small></span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {[['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'], ['Projects', 'projects'], ['Contact', 'contact']].map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="mobile-menu" aria-label="Open navigation" onClick={() => document.querySelector('.desktop-nav')?.classList.toggle('nav-open')}><Menu /></button>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
          <p className="eyebrow">HELLO, I&apos;M BHAVYA SHARMA</p>
          <h1>Quality is not an act.<br /><span>It&apos;s a habit.</span></h1>
          <p className="hero-intro">I&apos;m a QA engineer with <strong>3+ years of experience</strong> helping teams ship thoughtful, reliable digital experiences.</p>
          <div className="hero-actions"><a className="button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a><a className="button-text" href="#contact"><FileText size={17} /> Request my resume</a></div>
          <a href="#about" className="scroll-cue"><span className="scroll-icon"><ArrowDown size={14} /></span> SCROLL TO DISCOVER</a>
        </div>
        <div className="hero-art">
          <div className="art-wash" />
          <div className="orbit orbit-one"><span className="orbit-dot" /></div><div className="orbit orbit-two" />
          <div className="mascot-stage">
            <Mascot directions="/mascots/ballerina-directions.webp" reactions="/mascots/ballerina-reactions.webp" size={320} label="Bhavya mascot" className="mascot-sprite" />
          </div>
          <div className="portrait-caption"><span className="caption-mark"><Check size={14} /></span><span><b>Quality, by design.</b><small>Curious mind. Careful eye.</small></span></div>
          <div className="badge-orbit-system" aria-label="Testing technologies orbit">
            <div className="badge-slot slot-java">
              <div className="badge-counter-spin">
                <div className="float-badge"><span className="badge-symbol java">J</span> Java</div>
              </div>
            </div>
            <div className="badge-slot slot-selenium">
              <div className="badge-counter-spin">
                <div className="float-badge"><span className="badge-symbol selenium">◈</span> Selenium</div>
              </div>
            </div>
            <div className="badge-slot slot-jira">
              <div className="badge-counter-spin">
                <div className="float-badge"><span className="badge-symbol jira">◆</span> Jira</div>
              </div>
            </div>
            <div className="badge-slot slot-postman">
              <div className="badge-counter-spin">
                <div className="float-badge"><span className="badge-symbol postman">↗</span> Postman</div>
              </div>
            </div>
          </div>
          <div className="art-index">01 <span>—</span> 06</div>
        </div>
      </section>

      <div className="ticker" role="region" aria-label="Quality assurance specialties">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
              <span>THINK CLEARLY</span><svg viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" /></svg>
              <span>TEST THOROUGHLY</span><svg viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" /></svg>
              <span>SHIP CONFIDENTLY</span><svg viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" /></svg>
            </div>
          ))}
        </div>
      </div>

      <section className="about section-wrap" id="about" data-reveal>
        <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
        <div className="about-grid"><h2>Good software<br />feels <span>effortless.</span></h2><div className="about-copy"><p>Behind every effortless experience is a thoughtful process. I bring a detail-oriented approach to quality assurance—combining hands-on testing, automation, and close collaboration to help teams build products people can trust.</p><p>From the first test case to the final release, I care about the details that make the difference.</p><a className="inline-link" href="#experience">A little more about my journey <ArrowRight size={16} /></a></div></div>
        <div className="stats-row"><div><strong>3<span>+</span></strong><small>YEARS IN QUALITY</small></div><div><strong>4</strong><small>CORE TOOLKITS</small></div><div><strong>1</strong><small>SHARED STANDARD</small></div><p>Make quality<br /><em>everyone&apos;s habit.</em></p></div>
      </section>

      <section className="skills-section" id="skills"><div className="section-wrap" data-reveal><SectionLabel number="02">WHAT I BRING</SectionLabel><div className="section-heading"><h2>Thoughtful testing.<br /><span>Stronger outcomes.</span></h2><p>A toolkit for finding the edge cases, improving the process, and making quality part of the whole team&apos;s workflow.</p></div><div className="skill-grid">{skills.map(({ icon: Icon, title, detail }, i) => <article className="skill-card" key={title}><div className="skill-card-top"><span className="skill-icon"><Icon size={21} /></span><span className="card-number">0{i + 1}</span></div><h3>{title}</h3><p>{detail}</p><ArrowUpRight className="skill-arrow" size={17} /></article>)}</div><div className="expertise-strip"><span className="expertise-title"><Sparkles size={16} /> TESTING EXPERTISE</span><span>Functional testing</span><span>Regression testing</span><span>Test planning</span><span>Defect lifecycle</span><span>Cross-browser QA</span></div></div></section>

      <section className="experience section-wrap" id="experience" data-reveal><SectionLabel number="03">WHERE I&apos;VE BEEN</SectionLabel><div className="section-heading experience-heading"><h2>Experience built<br /><span>on the details.</span></h2><p>Every release is a chance to make the next one better.</p></div><div className="timeline"><div className="timeline-line" /><article className="timeline-item"><span className="timeline-marker"><span /></span><div className="timeline-date">2023 — PRESENT</div><div className="timeline-content"><div className="timeline-title"><div><h3>QA Engineer</h3><p>Quality Assurance · Software Development</p></div><span className="current-pill"><i /> CURRENT</span></div><p className="timeline-description">Partnering with cross-functional teams to plan and execute functional, regression, and API testing. Building automation coverage and clear test practices that support reliable, confident releases.</p><div className="tag-row"><span>Test automation</span><span>API testing</span><span>Agile / Scrum</span></div></div></article><article className="timeline-item"><span className="timeline-marker"><span /></span><div className="timeline-date">2022 — 2023</div><div className="timeline-content"><div className="timeline-title"><div><h3>QA Analyst</h3><p>Testing &amp; Product Quality</p></div></div><p className="timeline-description">Developed a strong foundation in test design, exploratory testing, and defect reporting while working closely with product and engineering teams.</p><div className="tag-row"><span>Manual testing</span><span>Test cases</span><span>Jira</span></div></div></article></div></section>

      <section className="projects-section" id="projects"><div className="section-wrap" data-reveal><SectionLabel number="04">SELECTED WORK</SectionLabel><div className="section-heading"><h2>Quality in<br /><span>the details.</span></h2><p>Practical approaches to quality that keep users and teams moving forward.</p></div><div className="project-grid">{projects.map(({ num, title, type, description, tags, icon: Icon, color }) => <article className={`project-card ${color}`} key={title}><div className="project-meta"><span>CASE STUDY&nbsp; / &nbsp;{num}</span><span className="project-type">{type}</span></div><div className="project-visual"><div className="visual-corner corner-a" /><div className="visual-corner corner-b" /><div className="quality-window"><div className="window-dots"><i /><i /><i /><span>quality-checks / overview</span></div><div className="window-body"><div className="window-icon"><Icon size={22} /></div><div className="window-title">All checks passed</div><div className="window-sub">Release readiness</div><div className="check-bars"><span /><span /><span /></div><div className="window-foot"><Check size={13} /> {num === '01' ? '24 TESTS PASSED' : 'API HEALTHY'}</div></div></div><div className="visual-sparkle">✳</div></div><h3>{title}</h3><p>{description}</p><div className="project-bottom"><div className="tag-row">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="project-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span></div></article>)}</div><p className="project-note"><span>✳</span> Case studies represent representative QA workflows and tooling.</p></div></section>

      <section className="contact section-wrap" id="contact" data-reveal><div className="contact-card"><div className="contact-left"><SectionLabel number="05">LET&apos;S CONNECT</SectionLabel><h2>Good work starts<br />with a <span>conversation.</span></h2><p>Have a role, a project, or a quality challenge in mind? I&apos;d love to hear about it.</p><a className="button-primary" href="mailto:hello@bhavyasharma.dev?subject=Let%E2%80%99s%20connect">Say hello <ArrowUpRight size={17} /></a></div><div className="contact-right"><div className="contact-orbit"><Mail size={24} /></div><span className="contact-kicker">OPEN TO WHAT&apos;S NEXT</span><h3>Let&apos;s make<br />quality a habit.</h3><a href="mailto:hello@bhavyasharma.dev">hello@bhavyasharma.dev <ArrowUpRight size={15} /></a><span className="contact-location"><Compass size={14} /> India · Open to remote</span></div></div></section>

      <footer className="site-footer"><a href="#home" className="brand footer-brand"><span className="brand-mark">B<span>.</span></span><span>BHAVYA<br /><small>SHARMA</small></span></a><span>Made with care, tested with purpose.</span><a href="#home" className="back-top">BACK TO TOP <ChevronDown size={14} /></a><span className="copyright">© 2025 BHAVYA SHARMA</span></footer>
    </main>
  )
}
