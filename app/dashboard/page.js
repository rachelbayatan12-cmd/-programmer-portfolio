import DashboardShell from "../../components/dashboard-shell";
import { Avatar, TechBadge } from "../../components/ui";

export default function DashboardPage() {
  return (
    <DashboardShell
      title="Welcome, Rachel"
      eyebrow="Here’s an overview of your portfolio."
    >
      <main className="dashboard-content">
        <section className="welcome-card">
          <div>
            <p className="eyebrow">Overview</p>
            <h2>Keep building great things.</h2>
            <p>
              Your portfolio is ready to share. Continue refining your projects
              and growing your technical toolkit.
            </p>
          </div>
          <div className="welcome-orb">✦</div>
        </section>

        <section className="stat-grid" aria-label="Portfolio summary">
          <article>
            <span>01</span>
            <p>Featured project</p>
            <strong>1</strong>
          </article>

          <article>
            <span>05</span>
            <p>Core technologies</p>
            <strong>5</strong>
          </article>

          <article>
            <span>∞</span>
            <p>Ideas in progress</p>
            <strong>∞</strong>
          </article>
        </section>

        <section className="dashboard-grid">
          <article className="panel profile-summary">
            <p className="eyebrow">Profile summary</p>

            <div>
              <Avatar />

              <div>
                <h2>Rachel Bayatan</h2>
                <p>BS Information Technology student</p>
                <a href="/profile">View full profile →</a>
              </div>
            </div>
          </article>

          <article className="panel">
            <p className="eyebrow">Technology focus</p>
            <h2>Frontend development</h2>

            <div className="tech-list compact">
              {["HTML", "CSS", "JavaScript", "React.js", "Next.js"].map(
                (name) => (
                  <TechBadge key={name} name={name} />
                )
              )}
            </div>
          </article>
        </section>

        <section className="panel recent-project">
          <div className="project-marker">QR</div>

          <div>
            <p className="eyebrow">Recent project · 2026</p>
            <h2>QR Code-Based Attendance Monitoring System for Faculty</h2>
            <p>
              A web-based tool designed to record and monitor faculty
              attendance through QR code scanning.
            </p>
          </div>

          <a
            href="/projects"
            aria-label="View QR Code Attendance Monitoring project"
          >
            →
          </a>
        </section>
      </main>
    </DashboardShell>
  );
                }
