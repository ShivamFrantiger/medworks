import { Defs } from "./Defs";

export function UltrasoundArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Doppler ultrasound cart illustration"
    >
      <Defs />
      <ellipse cx="100" cy="186" rx="64" ry="7" fill="#0E0E10" opacity="0.08" />
      <rect x="86" y="46" width="64" height="40" rx="6" fill="url(#mw-dark)" />
      <rect
        x="91"
        y="51"
        width="54"
        height="30"
        rx="3"
        fill="url(#mw-screen)"
      />
      <path
        d="M62 100l30-24"
        stroke="#C7CCD6"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M100 80v22"
        stroke="#C7CCD6"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path d="M36 112h128l-12 22H48z" fill="url(#mw-white)" />
      <path d="M48 134h104v6H48z" fill="#AEB4C0" />
      <path d="M44 148h112l-10 18H54z" fill="url(#mw-white)" />
      <rect x="64" y="154" width="72" height="8" rx="3" fill="#2B2D33" />
      <rect x="55" y="112" width="6" height="58" rx="3" fill="#2B2D33" />
      <rect x="139" y="112" width="6" height="58" rx="3" fill="#2B2D33" />
      {[48, 88, 112, 152].map((x) => (
        <g key={x}>
          <circle
            cx={x}
            cy="176"
            r="7"
            fill="#fff"
            stroke="#2B2D33"
            strokeWidth="3"
          />
        </g>
      ))}
      <circle cx="40" cy="128" r="9" fill="#16171A" />
      <circle cx="160" cy="128" r="9" fill="#16171A" />
    </svg>
  );
}
