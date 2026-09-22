import { RippleLink } from "@/components/RippleLink";

export const metadata = {
  title: "Page Not Found",
  description: "This page could not be found. Return to Peace & Purpose for therapy and healing support.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        padding: "clamp(72px, 12vh, 150px) 28px clamp(88px, 14vh, 160px)",
      }}
    >
      <div style={{ width: "min(100%, 640px)" }}>
        <div
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontWeight: 600,
            fontSize: "1.3rem",
            color: "var(--sage-dark)",
            paddingBottom: 18,
            marginBottom: 22,
            borderBottom: "2px solid var(--sage)",
            display: "inline-block",
          }}
        >
          404
        </div>
        <h1 style={{ maxWidth: "16ch", margin: "0 0 18px", fontSize: "clamp(2.2rem, 5.4vw, 3.4rem)", lineHeight: 1.1 }}>
          This page took a different path.
        </h1>
        <p style={{ maxWidth: "48ch", margin: "0 0 30px", fontSize: "1.05rem" }}>
          The link may be out of date, or the address may have a small typo. Either way, you&apos;re
          still welcome here, a gentle wrong turn, nothing more.
        </p>
        <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
          <RippleLink href="/" className="btn btn-primary">
            Return home
          </RippleLink>
          <RippleLink href="/contact" className="btn btn-outline">
            Get in touch
          </RippleLink>
        </div>
        <p style={{ marginTop: 32, fontSize: "0.82rem", color: "var(--ink-soft)" }}>
          Peace &amp; Purpose · Healing minds with care
        </p>
      </div>
    </div>
  );
}
