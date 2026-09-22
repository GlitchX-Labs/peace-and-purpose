"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { AnimatedIcon } from "@/components/icons/AnimatedIcon";
import { values } from "@/lib/services";

function ValueCard({ value, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal
      as="div"
      className="value-card"
      delay={delay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="value-icon" style={{ margin: "0 auto 14px" }} aria-hidden="true">
        <AnimatedIcon name={value.icon} hovered={hovered} />
      </span>
      <h3>{value.title}</h3>
      <p>{value.description}</p>
    </Reveal>
  );
}

export function HowIWork() {
  return (
    <section id="how-i-work">
      <div className="wrap">
        <Reveal className="section-head" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <h2>How I Work</h2>
          <p style={{ margin: "0 auto" }}>
            A few principles that shape every session, whatever brings you here.
          </p>
        </Reveal>
        <div className="values-grid">
          {values.map((value, i) => (
            <ValueCard key={value.title} value={value} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
