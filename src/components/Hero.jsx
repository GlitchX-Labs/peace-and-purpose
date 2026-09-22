"use client";

import { addRipple } from "@/lib/ripple";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-photo-bg" style={{ backgroundImage: "url(/images/hero-room.jpeg)" }}>
          <div className="hero-scrim" />
          <div className="hero-content">
            <div className="hero-content-inner">
              <span className="badge">Currently welcoming new clients</span>
              <h1>Our mind deserves peace. Your life deserves purpose.</h1>
              <p className="lede">
                A space for real talk, real healing, and yes, sometimes laughing at how much life
                can be.
              </p>
              <div className="hero-ctas">
                <a href="#booking" className="btn btn-primary" onMouseDown={addRipple}>
                  Start Your Journey
                </a>
                <a href="#about" className="btn btn-outline" onMouseDown={addRipple}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
