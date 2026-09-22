"use client";

import { useState } from "react";
import { AnimatedIcon } from "@/components/icons/AnimatedIcon";

export function ContactRow({ icon, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="contact-row" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <span className="contact-icon" aria-hidden="true">
        <AnimatedIcon name={icon} hovered={hovered} />
      </span>
      <div>{children}</div>
    </div>
  );
}
