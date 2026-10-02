export function Avatar({ large = false }) {
  return <div className={`avatar ${large ? "avatar-large" : ""}`} aria-hidden="true"><span>RB</span></div>;
}

export function TechBadge({ name }) {
  const initials = { HTML: "H", CSS: "C", JavaScript: "JS", "React.js": "R", "Next.js": "N" };
  return <span className="tech-badge"><b>{initials[name]}</b>{name}</span>;
}

export function SectionHeading({ number, title, description }) {
  return <div className="section-heading"><p className="section-number">{number}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
