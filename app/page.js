import Link from "next/link";
import { Avatar, SectionHeading, TechBadge } from "../components/ui";

const technologies = ["HTML", "CSS", "JavaScript", "React.js", "Next.js"];

export default function HomePage() {
  return (
    <main>
      <nav className="top-nav" aria-label="Main navigation">
        <Link className="brand" href="/">RB<span>.</span></Link>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <Link href="/projects">Projects</Link>
        </div>
        <Link className="nav-login" href="/login">Log in <span aria-hidden="true">↗</span></Link>
      </nav>

      <section className="hero shell" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for opportunities</p>
          <h1 id="home-title"><span>Rachel</span> <em>Bayatan</em></h1>
          <p className="hero-role" aria-label="Aspiring Software Developer"><span>Aspiring Software Developer</span></p>
          <p className="hero-intro">A 3rd Year BSIT student at Nueva Vizcaya State University who enjoys building clear, useful web experiences and thoughtfully designed software solutions.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/projects">View projects <span>→</span></Link>
            <Link className="button button-secondary" href="/profile">View profile</Link>
          </div>
        </div>
        <div className="hero-portrait" aria-label="Profile placeholder for Rachel Bayatan">
          <div className="portrait-glow" />
          <Avatar large />
          <div className="portrait-note"><strong>3rd Year BSIT Student</strong><span>Nueva Vizcaya State University</span></div>
        </div>
      </section>

      <section className="shell intro-grid" id="about" aria-labelledby="about-title">
        <SectionHeading number="01" title="Building with purpose." />
        <p>I enjoy the process of turning an idea into a clear, reliable interface. Through academic and personal projects, I continue to develop practical skills in web development and software design.</p>
      </section>

      <section className="shell skills-band" id="skills" aria-labelledby="skills-title">
        <div><p className="eyebrow">Current toolkit</p><h2 id="skills-title">Frontend technologies</h2></div>
        <div className="tech-list">{technologies.map((technology) => <TechBadge key={technology} name={technology} />)}</div>
      </section>
    </main>
  );
}
