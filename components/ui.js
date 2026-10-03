
export function Avatar({ large = false }) {
  return (
    <div className={`avatar ${large ? "avatar-large" : ""}`}>
      <img
        src="/file_00000000163c8209ad17ced75849f17d.png"
        alt="Profile"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "50%",
          display: "block",
        }}
      />
    </div>
  );
}
export function TechBadge({ name }) {
  const initials = { HTML: "H", CSS: "C", JavaScript: "JS", "React.js": "R", "Next.js": "N" };
  return <span className="tech-badge"><b>{initials[name]}</b>{name}</span>;
}

export function SectionHeading({ number, title, description }) {
  return <div className="section-heading"><p className="section-number">{number}</p><h2>{title}</h2>{description && <p>{description}</p>}</div>;
}
