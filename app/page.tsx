'use client'

import { useState, useEffect } from 'react'
import { ArrowDown, ArrowUpRight, Code2, Mail, Menu, X } from 'lucide-react'
import Image from 'next/image'

const heroImages = [
  '/myPictures/hero-bg.jpeg',
  '/myPictures/WhatsApp Image 2026-10-10 at 00.24.58.jpeg',
  '/myPictures/WhatsApp Image 2026-10-10 at 00.18.07.jpeg',
  '/myPictures/WhatsApp Image 2026-10-10 at 00.24.58 (2).jpeg',
  '/myPictures/red-tshirt.jpeg',
]

const projects = [
  {
    title: 'Mzansi ScholarFlash',
    year: '2026',
    category: 'Web App · School Communication',
    image: '/projects/scholarflash.png',
    copy: 'A school-to-home communication platform that gives schools one simple place to reach parents with announcements, reminders, and learner updates.',
    link: 'https://mzansi-scholarflash.vercel.app',
    deployed: true,
    tone: 'project-tone-1',
  },
  {
    title: 'UMP Co-Curricular System',
    year: '2025',
    category: 'Web App · Student Management',
    image: '/projects/co-curricular.png',
    copy: 'A management system that helps students at UMP discover, apply for, and track co-curricular activities and events on campus.',
    link: 'http://co-curricular-activities.vercel.app/',
    deployed: true,
    tone: 'project-tone-2',
  },
  {
    title: 'StudyMate',
    year: '2025',
    category: 'Web App · EdTech',
    image: null,
    copy: 'A smart study companion that helps students organize notes, set study goals, and track their learning progress effectively.',
    link: 'https://github.com/Nokwanda09-nono/Studymate-Frontend.git',
    deployed: false,
    tone: 'project-tone-3',
  },
  {
    title: 'GovTraceAI',
    year: '2026',
    category: 'AI · Civic Tech',
    image: null,
    copy: 'An AI-powered platform for tracking government accountability, service delivery reports, and citizen feedback across South Africa.',
    link: 'https://github.com/Mpumalanga-AI-Student-Hackathon/Group-3-GovGuard-Technologies.git',
    deployed: false,
    tone: 'project-tone-4',
  },
]


export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bgIndex, setBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % heroImages.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  return <main className="portfolio-shell">
    <header className="portfolio-nav"><button className="wordmark" onClick={() => go('home')}><span>SG</span></button><nav className="nav-links" aria-label="Primary navigation">{['about', 'projects', 'education', 'skills', 'contact'].map((item) => <button key={item} onClick={() => go(item)}>{item}</button>)}</nav><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>{menuOpen && <nav className="mobile-links" aria-label="Mobile navigation">{['about', 'projects', 'education', 'skills', 'contact'].map((item) => <button key={item} onClick={() => go(item)}>{item}<ArrowUpRight /></button>)}</nav>}</header>

    <section id="home" className="hero">
      <div className="hero-backgrounds">
        {heroImages.map((src, i) => (
          <div
            key={src}
            className="hero-bg-layer"
            style={{
              backgroundImage: `linear-gradient(rgba(17,19,26,0.35), rgba(17,19,26,0.65)), url('${src}')`,
              opacity: i === bgIndex ? 1 : 0
            }}
          />
        ))}
      </div>
      <div className="hero-text"><p className="eyebrow"><span className="pulse" /> Available for opportunities · 2026</p><h1>Sibongikhosi<br /><i>Gama.</i></h1><p className="hero-description">Creative developer and curious builder creating digital experiences that feel clear, useful, and alive.</p><button className="round-link" onClick={() => go('projects')} aria-label="Explore projects"><ArrowDown /></button></div><div className="hero-index"><br /><span>PORTFOLIO</span></div>
    </section>

    <section id="about" className="section about"><div className="section-label"><span>About</span><span>Solution provider · Maker · Learner</span></div><div className="about-grid"><div><p className="section-kicker">Aspiring Software Engineer</p><h2>I build with<br /><i>understanding and purpose.</i></h2></div><div className="about-copy"><p className="lead">I&apos;m an ICT graduate based in South Africa, interested in a space where technology, design, and people meet.</p><p>I enjoy making an idea from a rough sketch to a working interface. Outside of class, I experiment with frontend code, study visual systems, and connect with people building interesting things online.</p><div className="about-facts"><span>Problem solver</span><span>Team Member</span><span>Always learning</span></div></div></div></section>

    <section id="projects" className="section projects">
      <div className="section-label"><span>Projects Developed</span><span>2024 — Present</span></div>
      <div className="projects-heading">
        <h2>Growing<br /><i>Everyday.</i></h2>
        <p>Real-world digital systems built while learning and growing as a developer.</p>
        <p>For individual projects,I do a lot of Vibe Coding which made me speed-up the time frame, made each project to take about 2 to 3 months of development.</p>
      </div>
      <div className="project-marquee-wrap">
        <div className="project-marquee">
          {[...projects, ...projects].map((project, index) => (
            <a
              className={`project-card-new ${project.tone}`}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={`${project.title}-${index}`}
            >
              <div className="project-card-img">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-no-img">
                    <span className="project-no-img-label">Coming Soon</span>
                  </div>
                )}
                <div className="project-card-badge">
                  {project.deployed ? 'Live' : '🔗 GitHub'}
                </div>
              </div>
              <div className="project-card-info">
                <div>
                  <h3>{project.title}</h3>
                  <p className="project-cat">{project.category} · {project.year}</p>
                </div>
                <p className="project-desc">{project.copy}</p>
                <span className="project-cta">View project <ArrowUpRight size={13} /></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section id="education" className="section education"><div className="section-label"><span>Education</span><span>My learning path</span></div><div className="education-grid"><h2>My Academic<br /><i>journey.</i></h2><div className="timeline"><div><span>2023 — 2025</span><h3>Diploma in ICT in Application Development</h3><p>Learning and building a foundation in software development, systems analysis, databases (SQL), and user-focused problem solving.</p></div><div><span>2026 — Present</span><h3>Advanced Diploma in ICT in Application Development</h3><p>Learning and building a NoSQL databases, software development, Cyber Security, DevOps and problem solving.</p></div><div><span>Always</span><h3>Independent Learning</h3><p>Through independent learning, I have developed skills in solving real-world problems, full-stack development, SQL databases, and system analysis. I enjoy understanding how systems should be structured based on the problems they aim to solve, designing logical solutions, and identifying ways to improve system functionality. I also enjoy helping others improve their systems by sharing ideas, analysing challenges, and proposing practical, effective solutions.</p></div></div></div></section>

    <section id="skills" className="section skills-section">
      <div className="section-label"><span>Skills</span><span>Tools in my kit</span></div>
      <div className="skills-layout">
        <h2>What I<br /><i>work with.</i></h2>
        <div className="skill-list">
          {[
            'HTML',
            'JavaScript',
            'React',
            'Nextjs',
            'Github & Git',
            'Python',
            'Java',
            'C++',
            'SQL',
            'NoSQL',
            'Problem solving',
            'System Analysing',
            'UI/UX Designing',
            'Windows Troubleshooting',
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>

    <section id="contact" className="contact"><div className="section-label"><span>Contact</span><span>Let's solve real world problems together. Help each other grow within the tech Industry</span></div><div className="contact-body"><h2>Let&apos;s make<br /><i>solutions.</i></h2><a className="contact-circle" href="mailto:sibonginkosigama646@gmail.com">Say hello <ArrowUpRight /></a></div><div className="contact-bottom"><a href="sibonginkosigama646@gmail.com"><Mail />Email me on Say Hello →</a><span>South Africa · Mpumalanga</span></div></section>

    <footer className="footer"><span>© 2026 SG / ICT Graduate</span><div><a href="https://github.com/Gama646" target="_blank" rel="noreferrer"><Code2 /> GitHub</a><a href="https://www.linkedin.com/in/gama646" target="_blank" rel="noreferrer"><Code2 /> LinkedIn</a><a href="https://www.instagram.com/catha2088" target="_blank" rel="noreferrer"><Code2 /> Instagram</a></div><button onClick={() => go('home')}>Back to top ↑</button></footer>
  </main>
}
