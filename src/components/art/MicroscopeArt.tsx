import { Defs } from "./Defs";

export function MicroscopeArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Gemology microscope illustration"
    >
      <Defs />
      <ellipse cx="100" cy="182" rx="56" ry="9" fill="#0E0E10" opacity="0.08" />
      <path
        d="M52 168c0-9 20-15 48-15s48 6 48 15v6c0 8-20 12-48 12s-48-4-48-12z"
        fill="url(#mw-dark)"
      />
      <path
        d="M52 166c0-9 20-15 48-15s48 6 48 15c0 7-20 12-48 12s-48-5-48-12z"
        fill="url(#mw-white)"
      />
      <path
        d="M78 150c-4-30-4-60 10-92l12 4c-10 30-8 56-4 88z"
        fill="url(#mw-dark)"
      />
      <ellipse cx="108" cy="122" rx="38" ry="10" fill="url(#mw-dark)" />
      <ellipse cx="108" cy="116" rx="38" ry="10" fill="#2B2D33" />
      <ellipse cx="108" cy="114" rx="26" ry="6" fill="#8A8F99" />
      <rect x="96" y="70" width="26" height="40" rx="6" fill="url(#mw-white)" />
      <rect x="92" y="48" width="34" height="26" rx="8" fill="url(#mw-white)" />
      <rect
        x="72"
        y="26"
        width="16"
        height="30"
        rx="5"
        fill="url(#mw-dark)"
        transform="rotate(-24 80 40)"
      />
      <rect
        x="110"
        y="20"
        width="16"
        height="32"
        rx="5"
        fill="url(#mw-dark)"
        transform="rotate(14 118 36)"
      />
      <path
        d="M140 70c24-6 34 12 28 34"
        fill="none"
        stroke="#16171A"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <rect x="148" y="56" width="22" height="14" rx="4" fill="url(#mw-dark)" />
    </svg>
  );
}
