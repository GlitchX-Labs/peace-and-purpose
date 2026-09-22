"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { addRipple } from "@/lib/ripple";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "is-scrolled" : ""}>
      <nav className="wrap">
        <Link href="/" className="brand">
          Peace &amp; Purpose · Healing Minds
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/#home" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="/#services">Services</Link>
          </li>
          <li className={pathname === "/contact" ? "bold" : ""}>
            <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
              Contact
            </Link>
          </li>
        </ul>
        <Link href="/#booking" className="btn btn-primary nav-cta" onMouseDown={addRipple}>
          Book Now
        </Link>
      </nav>
    </header>
  );
}
