"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ControlIcon } from "@/components/icons/ControlIcon";
import { testimonials } from "@/lib/testimonials";

function visibleCount() {
  return typeof window !== "undefined" && window.matchMedia("(min-width: 720px)").matches ? 3 : 1;
}

export function Testimonials() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(testimonials.length / perPage));

  useEffect(() => {
    setPerPage(visibleCount());
    const onResize = () => setPerPage(visibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timer;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const cardWidth = track.firstElementChild?.getBoundingClientRect().width || 1;
        setPage(Math.round(track.scrollLeft / (cardWidth * perPage)));
      }, 120);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [perPage]);

  const goTo = (targetPage) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = ((targetPage % totalPages) + totalPages) % totalPages;
    const cardWidth = track.firstElementChild?.getBoundingClientRect().width || 0;
    const gap = 20;
    track.scrollTo({ left: clamped * perPage * (cardWidth + gap), behavior: "smooth" });
    setPage(clamped);
  };

  return (
    <section className="alt-bg">
      <div className="wrap">
        <Reveal
          className="section-head"
          style={{ marginLeft: "auto", marginRight: "auto", textAlign: "center" }}
        >
          <h2>What Clients Say</h2>
          <p style={{ margin: "0 auto" }}>
            Real words from people I&apos;ve worked with, shared with their permission.
          </p>
        </Reveal>

        <div className="testimonial-carousel">
          <div className="testimonial-grid" ref={trackRef}>
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.author}>
                <p className="testimonial-quote">
                  {t.quote.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" aria-hidden="true">
                    {t.author[0]}
                  </div>
                  <strong style={{ fontSize: "0.9rem" }}>{t.author}</strong>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-controls">
            <button
              type="button"
              className="carousel-nav-btn animated-control-icon"
              aria-label="Previous testimonial"
              onClick={() => goTo(page - 1)}
            >
              <ControlIcon name="arrowLeft" />
            </button>
            <div className="carousel-dots">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`carousel-dot${i === page ? " active" : ""}`}
                  aria-label={`Go to testimonial group ${i + 1}`}
                  aria-current={i === page ? "true" : "false"}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="carousel-nav-btn animated-control-icon"
              aria-label="Next testimonial"
              onClick={() => goTo(page + 1)}
            >
              <ControlIcon name="arrowRight" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
