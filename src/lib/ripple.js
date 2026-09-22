/** Spawns a Material-style ripple span inside a .btn on pointerdown, matching the brand's tactile click feedback. */
export function addRipple(event) {
  const target = event.currentTarget;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const rect = target.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const span = document.createElement("span");
  span.className = "ripple";
  span.style.width = span.style.height = `${size}px`;
  span.style.left = `${event.clientX - rect.left - size / 2}px`;
  span.style.top = `${event.clientY - rect.top - size / 2}px`;

  target.appendChild(span);
  span.addEventListener("animationend", () => span.remove(), { once: true });
}
