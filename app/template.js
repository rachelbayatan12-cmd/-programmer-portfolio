"use client";

import { useEffect } from "react";

export default function Template({ children }) {
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
      window.setTimeout(() => window.location.assign(href), 260);
    };
    const handleLinkClick = (event) => {
      const link = event.target.closest("a");
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const url = new URL(link.href, window.location.href);
      if (link.target || link.hasAttribute("download") || url.origin !== window.location.origin || url.pathname === window.location.pathname || link.getAttribute("href")?.startsWith("#")) return;
      event.preventDefault();
      navigate(`${url.pathname}${url.search}${url.hash}`);
    };
    const handleNavigation = (event) => navigate(event.detail);
    document.addEventListener("click", handleLinkClick);
    window.addEventListener("portfolio:navigate", handleNavigation);
    return () => { observer.disconnect(); document.removeEventListener("click", handleLinkClick); window.removeEventListener("portfolio:navigate", handleNavigation); };
  }, []);
  return <div className="page-transition">{children}</div>;
}
