"use client";

import Link from "next/link";
import { addRipple } from "@/lib/ripple";

/** A styled <a>/<Link> with the theme's click-ripple feedback, for use inside Server Component pages. */
export function RippleLink({ href, className, children, ...props }) {
  return (
    <Link href={href} className={className} onMouseDown={addRipple} {...props}>
      {children}
    </Link>
  );
}
