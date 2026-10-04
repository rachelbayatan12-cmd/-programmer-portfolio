import DashboardShell from "../../components/dashboard-shell";

export default function ProfilePage() {
  return (
    <DashboardShell title="My profile" eyebrow="About me">
      <main className="dashboard-content page-content">
        <section className="profile-hero panel">
          <img
            src="/file_00000000163c8209ad17ced75849f17d.png"
            alt="Rachel Bayatan"
            className="profile-photo"
          />

          <div>
            <p className="eyebrow">Aspiring software developer</p>
            <h2>Rachel Bayatan</h2>
            <p>
              I am a Bachelor of Science in Information Technology student
              with a growing passion for software and web development. I value
              clean interfaces, careful problem-solving, and continuous
              learning.
            </p>
          </div>
        </section>

        <section className="content-columns">
  <article className="panel">
    <p className="eyebrow">About me</p>
    <h2>Learning, building, and growing through technology.</h2>
    <p>
      I enjoy turning ideas into practical digital solutions through my
    academic projects. I’m particularly interested in frontend development
    and enjoy exploring new technologies while improving my skills through
    hands-on experience. I also value clean and user-friendly designs,
    thoughtful problem-solving, and continuous learning as I work toward
    becoming a better software developer.
    </p>
  </article>

          <article className="panel interest-list">
            <p className="eyebrow">Areas of interest</p>
            <ul>
              <li>Frontend web development</li>
              <li>Responsive user interfaces</li>
              <li>Software systems design</li>
              <li>Practical technology solutions</li>
            </ul>
          </article>
        </section>
      </main>
    </DashboardShell>
  );
}
