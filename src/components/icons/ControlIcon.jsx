"use client";

import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { ArrowUp } from "@/components/animate-ui/icons/arrow-up";

const paths = {
  chevronDown: <polyline points="6 9 12 15 18 9" />,
  arrowLeft: <polyline points="15 18 9 12 15 6" />,
  arrowRight: <polyline points="9 18 15 12 9 6" />,
};

/** Small chrome icon (chevrons/arrows) used in nav controls, the FAQ accordion, and dialog pickers. */
export function ControlIcon({ name }) {
  if (name === "arrow-up") {
    return (
      <AnimateIcon animate loop loopDelay={1200} animation="default-loop">
        <ArrowUp className="animated-control-svg" size={14} />
      </AnimateIcon>
    );
  }

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
