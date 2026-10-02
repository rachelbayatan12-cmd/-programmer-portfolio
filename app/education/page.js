import DashboardShell from "../../components/dashboard-shell";

export default function EducationPage() {
  return <DashboardShell title="Education" eyebrow="Academic journey"><main className="dashboard-content page-content"><section className="education-intro"><p className="eyebrow">Learning foundation</p><h2>Developing a strong foundation in information technology.</h2></section><section className="timeline"><article className="education-card"><div className="timeline-dot" /><p className="eyebrow">Current program</p><h2>Bachelor of Science in Information Technology (BSIT)</h2><h3>Nueva Vizcaya State University (NVSU)</h3><p>Building knowledge in programming, web development, information systems, and the practical application of technology.</p><span className="current-tag">3rd Year College Student</span></article></section></main></DashboardShell>;
}
