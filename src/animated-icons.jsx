import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useReducedMotion } from "motion/react";
import { AnimateIcon } from "./components/animate-ui/icons/icon";
import { ArrowUp } from "./components/animate-ui/icons/arrow-up";
import { Blocks } from "./components/animate-ui/icons/blocks";
import { Clock } from "./components/animate-ui/icons/clock";
import { Heart } from "./components/animate-ui/icons/heart";
import { Lock } from "./components/animate-ui/icons/lock";
import { MessageCircleHeart } from "./components/animate-ui/icons/message-circle-heart";
import { MessageSquareMore } from "./components/animate-ui/icons/message-square-more";
import { PhoneCall } from "./components/animate-ui/icons/phone-call";
import { Search } from "./components/animate-ui/icons/search";
import { Star } from "./components/animate-ui/icons/star";
import { UserRound } from "./components/animate-ui/icons/user-round";
import { UsersRound } from "./components/animate-ui/icons/users-round";
import { Sparkles } from "./components/animate-ui/icons/sparkles";

const paths = {
  chevronDown: <polyline points="6 9 12 15 18 9" />,
  arrowLeft: <polyline points="15 18 9 12 15 6" />,
  arrowRight: <polyline points="9 18 15 12 9 6" />,
};

const iconSets = {
  "service-icon": ["user-round", "users-round", "sparkles"],
  "value-icon": ["heart", "clock", "lock", "search"],
  "contact-icon": ["message-square-more", "phone-call"],
  "icon-circle": ["lock", "search", "heart", "star"],
};

const animatedComponents = {
  "arrow-up": ArrowUp,
  blocks: Blocks,
  clock: Clock,
  heart: Heart,
  lock: Lock,
  "message-circle-heart": MessageCircleHeart,
  "message-square-more": MessageSquareMore,
  "phone-call": PhoneCall,
  search: Search,
  sparkles: Sparkles,
  star: Star,
  "user-round": UserRound,
  "users-round": UsersRound,
};

const iconAnimations = {
  "arrow-up": "default-loop",
  blocks: "default-loop",
  clock: "default",
  heart: "fill",
  lock: "lock",
  "message-circle-heart": "default",
  "message-square-more": "default",
  "phone-call": "default",
  search: "find",
  sparkles: "default",
  star: "fill",
  "user-round": "default",
  "users-round": "default",
};

function AnimatedIcon({ name }) {
  const shouldReduceMotion = useReducedMotion();
  const iconRef = React.useRef(null);
  const [parentHovered, setParentHovered] = React.useState(false);

  React.useEffect(() => {
    const parent = iconRef.current?.closest(
      ".service-card, .value-card, .contact-row, .card",
    );
    if (!parent) return undefined;

    const handleEnter = () => setParentHovered(true);
    const handleLeave = () => setParentHovered(false);
    parent.addEventListener("mouseenter", handleEnter);
    parent.addEventListener("mouseleave", handleLeave);

    return () => {
      parent.removeEventListener("mouseenter", handleEnter);
      parent.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  const Icon = animatedComponents[name];

  if (Icon) {
    return (
      <span ref={iconRef} className="animated-icon-motion-target">
        <AnimateIcon
          animate={parentHovered}
          animateOnHover
          loop={parentHovered}
          loopDelay={800}
          animation={iconAnimations[name] || "default"}
        >
          <Icon
            className="animated-icon"
            size={20}
            animation={iconAnimations[name] || "default"}
            animate={parentHovered}
          />
        </AnimateIcon>
      </span>
    );
  }
  return (
    <motion.span
      ref={iconRef}
      className="animated-icon-motion-target"
      animate={
        parentHovered && !shouldReduceMotion
          ? { y: [0, -3, 1, -2, 0], scale: [1, 1.16, 1.22, 1.14, 1.08, 1] }
          : { y: 0, scale: 1 }
      }
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -3, 1, -2, 0],
              scale: [1, 1.16, 1.22, 1.14, 1.08, 1],
            }
      }
      transition={
        parentHovered && !shouldReduceMotion
          ? { duration: 0.9, ease: "easeInOut" }
          : { duration: 0.2, ease: "easeOut" }
      }
    >
      <svg
        className="animated-icon animated-icon-pulse text-(--sage-dark)"
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
    </motion.span>
  );
}

function AnimatedGlyph({ name }) {
  return (
    <svg
      className="animated-control-svg"
      width="18"
      height="18"
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

function AnimatedControlIcon({ name }) {
  if (name === "arrow-up") {
    return (
      <AnimateIcon animate loop loopDelay={1200} animation="default-loop">
        <ArrowUp className="animated-control-svg" size={14} />
      </AnimateIcon>
    );
  }

  return <AnimatedGlyph name={name} />;
}

function enhanceIcons() {
  Object.entries(iconSets).forEach(([className, names]) => {
    document.querySelectorAll(`.${className}`).forEach((element, index) => {
      element.classList.add("animated-icon-shell");
      element.replaceChildren();
      const name = element.dataset.icon || names[index % names.length];
      createRoot(element).render(<AnimatedIcon name={name} />);
    });
  });

  document.querySelectorAll(".faq-q .chev").forEach((element) => {
    element.classList.add("animated-control-icon");
    createRoot(element).render(<AnimatedGlyph name="chevronDown" />);
  });

  const controlIcons = {
    "#back-to-top": "arrow-up",
    "#cal-prev": "arrowLeft",
    "#cal-next": "arrowRight",
    "#hour-up": "arrow-up",
    "#min-up": "arrow-up",
    "#hour-down": "chevronDown",
    "#min-down": "chevronDown",
  };

  Object.entries(controlIcons).forEach(([selector, name]) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.classList.add("animated-control-icon");
    createRoot(element).render(<AnimatedControlIcon name={name} />);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", enhanceIcons, { once: true });
} else {
  enhanceIcons();
}
