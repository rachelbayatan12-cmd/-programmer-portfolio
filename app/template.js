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
    return () => observer.disconnect();
  }, []);
  return <div className="page-transition">{children}</div>;
}
