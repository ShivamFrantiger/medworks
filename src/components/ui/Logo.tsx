import { BRAND } from "@/data/content";
import { HEADING } from "./tokens";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2" aria-label={BRAND}>
      <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
        <rect x="2" y="3" width="14" height="6" rx="3" fill="#0A5CFF" />
        <rect
          x="8"
          y="11"
          width="14"
          height="6"
          rx="3"
          fill="#0A5CFF"
          opacity="0.8"
        />
        <rect
          x="2"
          y="19"
          width="14"
          height="6"
          rx="3"
          fill="#0A5CFF"
          opacity="0.6"
        />
        <rect x="19" y="19" width="7" height="6" rx="3" fill="#0A5CFF" />
      </svg>
      <span
        className={`${HEADING} text-[22px] tracking-tight ${dark ? "text-white" : "text-[#0E0E10]"}`}
      >
        <span className="font-bold">Med</span>
        <span className="font-medium">Works</span>
      </span>
    </span>
  );
}
