"use client";

import { useEffect, useState } from "react";
import { ControlIcon } from "@/components/icons/ControlIcon";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <button
      className={`back-to-top animated-control-icon${visible ? " is-visible" : ""}`}
      type="button"
      aria-label="Go to top"
      onClick={scrollToTop}
    >
      <ControlIcon name="arrow-up" />
    </button>
  );
}
