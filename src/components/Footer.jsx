"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const links = [
    { href: "/privacy-notice", label: "Privacy Notice" },
    { href: "/terms-of-service", label: "Terms of Service" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Peace &amp; Purpose · Healing Minds</h3>
            <div className="footer-contact">
              <a href="mailto:infopeacenpurpose@gmail.com">infopeacenpurpose@gmail.com</a>
              <a href="tel:+918310879825">Click here to call us!</a>
              <a href="https://www.instagram.com/peace_npurpose/" target="_blank" rel="noopener">
                @peace_npurpose
              </a>
            </div>
          </div>
          <div className="footer-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? "active" : ""}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Peace &amp; Purpose Therapy. All rights reserved.</span>
          <span>Made with care by GlitchX Labs</span>
        </div>
      </div>
    </footer>
  );
}
