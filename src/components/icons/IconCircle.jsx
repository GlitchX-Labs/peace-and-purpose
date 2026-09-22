import { AnimatedIcon } from "@/components/icons/AnimatedIcon";

/** Static icon badge used next to card headings (privacy/terms pages), no hover trigger. */
export function IconCircle({ name }) {
  return (
    <span className="icon-circle" aria-hidden="true">
      <AnimatedIcon name={name} />
    </span>
  );
}
