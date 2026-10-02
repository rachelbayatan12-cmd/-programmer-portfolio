"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  ["Home", "/dashboard", "⌂"], ["Profile", "/profile", "◉"], ["Education", "/education", "□"],
  ["Projects", "/projects", "◇"], ["Skills", "/skills", "✦"]
];

export default function DashboardShell({ children, title, eyebrow }) {
  const pathname = usePathname();
  const router = useRouter();
  return <div className="app-layout">
    <aside className="sidebar">
      <Link className="brand" href="/dashboard">AR<span>.</span></Link>
      <p className="sidebar-label">Portfolio</p>
      <nav className="sidebar-nav" aria-label="Dashboard navigation">
        {navigation.map(([label, href, icon]) => <Link key={href} href={href} className={pathname === href ? "active" : ""}><i>{icon}</i>{label}</Link>)}
      </nav>
      <button className="logout" onClick={() => router.push("/login")}><i>↩</i>Logout</button>
    </aside>
    <div className="dashboard-main"><header className="dashboard-header"><div><p className="eyebrow">{eyebrow || "Student portfolio"}</p><h1>{title}</h1></div><div className="header-user"><span>Alex Rivera</span><b>AR</b></div></header>{children}</div>
  </div>;
}
