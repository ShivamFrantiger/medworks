import { Defs } from "./Defs";

export function KeratometerArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Refractor keratometer illustration"
    >
      <Defs />
      <ellipse cx="100" cy="176" rx="64" ry="8" fill="#0E0E10" opacity="0.08" />
      <rect
        x="44"
        y="140"
        width="112"
        height="30"
        rx="10"
        fill="url(#mw-white)"
      />
      <rect x="52" y="160" width="96" height="10" rx="5" fill="#2B2D33" />
      <path
        d="M46 70c0-26 18-42 44-42h30c20 0 36 14 36 36v66c0 8-6 14-14 14H62c-9 0-16-7-16-16z"
        fill="url(#mw-white)"
      />
      <path
        d="M46 70c0-26 18-42 44-42h8v132H62c-9 0-16-7-16-16z"
        fill="#F4F6FA"
      />
      <rect x="92" y="38" width="64" height="62" rx="12" fill="url(#mw-dark)" />
      <rect
        x="98"
        y="44"
        width="52"
        height="50"
        rx="8"
        fill="url(#mw-screen)"
      />
      <circle
        cx="124"
        cy="69"
        r="14"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        opacity="0.8"
      />
      <circle
        cx="124"
        cy="69"
        r="6"
        fill="none"
        stroke="#fff"
        strokeWidth="1.5"
        opacity="0.8"
      />
      <rect x="96" y="108" width="60" height="30" rx="8" fill="url(#mw-dark)" />
      <circle cx="108" cy="123" r="5" fill="#8A8F99" />
    </svg>
  );
}
