"use client";

import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { AnimatedIcon } from "@/components/icons/AnimatedIcon";
import { services } from "@/lib/services";

function ServiceCard({ service, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Reveal
      as="div"
      className="service-card"
      delay={delay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="service-icon" aria-hidden="true">
        <AnimatedIcon name={service.icon} hovered={hovered} />
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <a href="#booking" className="learn">
        Book a session →
      </a>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="alt-bg services-section">
      <div className="wrap">
        <Reveal className="section-head" style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
          <h2>Our Services</h2>
          <p>Comprehensive support tailored to your unique journey towards healing.</p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
