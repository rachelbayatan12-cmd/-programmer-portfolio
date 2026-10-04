import DashboardShell from "../../components/dashboard-shell";
import { TechBadge } from "../../components/ui";

const stack = ["HTML", "CSS", "JavaScript", "React.js", "Next.js"];

export default function ProjectsPage() {
  return (
    <DashboardShell title="Projects" eyebrow="Selected work">
      <main className="dashboard-content page-content">
        <section className="projects-intro">
          <p className="eyebrow">Featured projects</p>
          <h2>Practical solutions for real workflows.</h2>
          <p>
            A selection of work that brings together frontend fundamentals and
            user-centered thinking.
          </p>
        </section>

        {/* Project 1 */}
        <article className="project-card">
          <div className="project-visual">
            <div className="qr-art">
              <span>+</span>
              <span>+</span>
              <span>+</span>
            </div>
            <p>
              Attendance
              <br />
              monitoring
            </p>
          </div>

          <div className="project-details">
            <p className="eyebrow">Web application · 2026</p>

            <h2>QR Code-Based Attendance Monitoring System for Faculty</h2>

            <p>
              A web-based attendance monitoring system designed to record and
              monitor faculty attendance using QR code scanning. The project
              helps streamline attendance tracking through a simple, focused
              digital workflow.
            </p>

            <div>
              <p className="stack-label">Technology stack</p>

              <div className="tech-list compact">
                {stack.map((name) => (
                  <TechBadge key={name} name={name} />
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="project-card">
          <div className="project-visual">
            <div className="qr-art">
              <span>+</span>
              <span>+</span>
              <span>+</span>
            </div>
            <p>
              Classroom
              <br />
              finder
            </p>
          </div>

          <div className="project-details">
            <p className="eyebrow">Web application · Academic concept</p>

            <h2>Classroom Finder System</h2>

            <p>
              An online web application designed to help first-time students
              and visitors easily locate classrooms by searching for room
              numbers or building names and viewing their corresponding
              location details.
            </p>

            <div>
              <p className="stack-label">Technology stack</p>

              <div className="tech-list compact">
                {stack.map((name) => (
                  <TechBadge key={name} name={name} />
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Project 3 */}
        <article className="project-card">
          <div className="project-visual">
            <div className="qr-art">
              <span>+</span>
              <span>+</span>
              <span>+</span>
            </div>
            <p>
              Book
              <br />
              tracking
            </p>
          </div>

          <div className="project-details">
            <p className="eyebrow">Web application · Academic concept</p>

            <h2>Book Borrowing Tracking System</h2>

            <p>
              A simple system designed to track borrowed and returned books,
              including the borrower's name, book details, borrowing date,
              return date, and current borrowing status.
            </p>

            <div>
              <p className="stack-label">Technology stack</p>

              <div className="tech-list compact">
                {stack.map((name) => (
                  <TechBadge key={name} name={name} />
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
    </DashboardShell>
  );
}
