import React from "react";
import { createRoot } from "react-dom/client";
import "./animated-icons.css";

const paths = {
  heart: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
  ),
  star: <path d="m12 3 3 6 6 1-4.5 4.4L17.5 20 12 17l-5.5 3 1-6.6L3 9l6-1z" />,
  shield: (
    <>
      <path d="M12 3 20 6v5c0 5-3.2 8.2-8 10-4.8-1.8-8-5-8-10V6l8-3z" />
      <path d="m8.5 12 2.2 2.2 4.8-5" />
    </>
  ),
  activity: (
    <>
      <path d="M3 12h4l3 8 4-16 3 8h4" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </>
  ),
  users: (
    <>
      <circle cx="8" cy="9" r="3" />
      <circle cx="16" cy="9" r="3" />
      <path d="M2 21c0-3.5 2.7-5.5 6-5.5s6 2 6 5.5M10 21c0-3.5 2.7-5.5 6-5.5s6 2 6 5.5" />
    </>
  ),
  droplet: <path d="M12 3C9 6 7 9 7 12a5 5 0 0 0 10 0c0-3-2-6-5-9z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2.2z" />
  ),
  chevronDown: <polyline points="6 9 12 15 18 9" />,
  arrowLeft: <polyline points="15 18 9 12 15 6" />,
  arrowRight: <polyline points="9 18 15 12 9 6" />,
  arrowUp: <polyline points="18 15 12 9 6 15" />,
};

const iconSets = {
  "service-icon": ["user", "users", "droplet"],
  "value-icon": ["heart", "star", "shield", "activity"],
  "contact-icon": ["mail", "phone"],
  "icon-circle": ["shield", "activity", "heart", "star"],
};

function AnimatedIcon({ name }) {
  return (
    <svg
      className="animated-icon animated-icon-pulse text-[var(--sage-dark)]"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function AnimatedGlyph({ name }) {
  return <>{paths[name]}</>;
}

function enhanceIcons() {
  Object.entries(iconSets).forEach(([className, names]) => {
    document.querySelectorAll(`.${className}`).forEach((element, index) => {
      element.classList.add("animated-icon-shell");
      element.replaceChildren();
      createRoot(element).render(
        <AnimatedIcon name={names[index % names.length]} />,
      );
    });
  });

  document.querySelectorAll(".faq-q .chev").forEach((element) => {
    element.classList.add("animated-control-icon");
    createRoot(element).render(<AnimatedGlyph name="chevronDown" />);
  });

  const controlIcons = {
    "#cal-prev svg": "arrowLeft",
    "#cal-next svg": "arrowRight",
    "#hour-up svg": "arrowUp",
    "#min-up svg": "arrowUp",
    "#hour-down svg": "chevronDown",
    "#min-down svg": "chevronDown",
  };

  Object.entries(controlIcons).forEach(([selector, name]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.classList.add("animated-control-icon");
    createRoot(element).render(<AnimatedGlyph name={name} />);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", enhanceIcons, { once: true });
} else {
  enhanceIcons();
}
