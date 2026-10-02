"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Template({ children }) {
  const router = useRouter();
  useEffect(() => {
    const elements = document.querySelectorAll("main section, main article");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    elements.forEach((element) => { element.classList.add("reveal"); observer.observe(element); });
    const navigate = (href) => {
      const page = document.querySelector(".page-transition");
      if (!page || page.classList.contains("is-leaving")) return;
      page.classList.add("is-leaving");
      window.setTimeout(() => router.push(href), 320);
    };
    const handleLinkClick = (event) => {
      const link = event.target.closest("a");
      if (!link || event.defaultPrevented || event.button > 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = new URL(link.href, window.location.href);
      if (link.target || link.hasAttribute("download") || url.origin !== window.location.origin || url.pathname === window.location.pathname || link.getAttribute("href")?.startsWith("#")) return;
      event.preventDefault();
      navigate(`${url.pathname}${url.search}${url.hash}`);
    };
    const handleNavigation = (event) => navigate(event.detail);
    // Capture the tap/click before Next's Link handler so the exit motion is
    // visible on both touch screens and pointer-based devices.
    document.addEventListener("click", handleLinkClick, true);
    window.addEventListener("portfolio:navigate", handleNavigation);
    return () => { observer.disconnect(); document.removeEventListener("click", handleLinkClick, true); window.removeEventListener("portfolio:navigate", handleNavigation); };
  }, [router]);
  return <div className="page-transition">{children}</div>;
}
