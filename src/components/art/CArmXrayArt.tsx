import { Defs } from "./Defs";

export function CArmXrayArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 200"
      className={className}
      role="img"
      aria-label="C-arm X-ray machine illustration"
    >
      <Defs />
      <ellipse cx="120" cy="190" rx="86" ry="6" fill="#0E0E10" opacity="0.07" />
      <path d="M118 8v26" stroke="#AEB4C0" strokeWidth="2" />
      <ellipse cx="118" cy="40" rx="30" ry="7" fill="#fff" stroke="#AEB4C0" />
      <ellipse cx="118" cy="40" rx="20" ry="4" fill="#DDE8FF" />
      <rect
        x="20"
        y="130"
        width="30"
        height="40"
        rx="3"
        fill="#fff"
        stroke="#AEB4C0"
      />
      <rect x="22" y="132" width="26" height="18" fill="#2B2D33" />
      <rect x="140" y="124" width="46" height="8" rx="3" fill="#C7CCD6" />
      <rect x="146" y="132" width="4" height="40" fill="#AEB4C0" />
      <rect x="176" y="132" width="4" height="40" fill="#AEB4C0" />
      <rect
        x="64"
        y="104"
        width="30"
        height="76"
        rx="8"
        fill="url(#mw-white)"
      />
      <path
        d="M130 110c0-44 26-62 60-62 14 0 28 6 38 16"
        fill="none"
        stroke="url(#mw-white)"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M130 110c0 30 14 50 40 58"
        fill="none"
        stroke="#fff"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <rect
        x="116"
        y="96"
        width="30"
        height="40"
        rx="8"
        fill="url(#mw-white)"
      />
      <rect
        x="200"
        y="50"
        width="34"
        height="30"
        rx="6"
        fill="url(#mw-white)"
        stroke="#C7CCD6"
      />
      <path
        d="M94 128c12 0 24-6 24-6"
        stroke="#fff"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
