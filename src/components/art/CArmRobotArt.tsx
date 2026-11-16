import { Defs } from "./Defs";

export function CArmRobotArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 200"
      className={className}
      role="img"
      aria-label="C-arm robot illustration"
    >
      <Defs />
      <ellipse cx="120" cy="190" rx="70" ry="6" fill="#0E0E10" opacity="0.07" />
      <rect
        x="112"
        y="60"
        width="16"
        height="124"
        rx="6"
        fill="url(#mw-white)"
      />
      <rect
        x="88"
        y="16"
        width="64"
        height="26"
        rx="12"
        fill="url(#mw-white)"
      />
      <path d="M52 52h44l8 24H60z" fill="url(#mw-white)" />
      <path d="M144 52h44l-8 24h-44z" fill="url(#mw-white)" />
      <circle cx="58" cy="60" r="9" fill="#fff" stroke="#AEB4C0" />
      <text x="58" y="64" fontSize="10" textAnchor="middle" fill="#5B616C">
        3
      </text>
      <circle cx="108" cy="30" r="9" fill="#fff" stroke="#AEB4C0" />
      <text x="108" y="34" fontSize="10" textAnchor="middle" fill="#5B616C">
        2
      </text>
      <circle cx="182" cy="60" r="9" fill="#fff" stroke="#AEB4C0" />
      <text x="182" y="64" fontSize="10" textAnchor="middle" fill="#5B616C">
        1
      </text>
      {[
        [78, 74, 96, 150],
        [100, 76, 108, 156],
        [140, 76, 134, 156],
        [162, 74, 150, 150],
      ].map(([x1, y1, x2, y2], i) => (
        <g key={i}>
          <path
            d={`M${x1} ${y1} L${x2} ${y2}`}
            stroke="#C7CCD6"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d={`M${x1} ${y1} L${x2} ${y2}`}
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx={x2} cy={y2} r="3.5" fill="#2B2D33" />
        </g>
      ))}
    </svg>
  );
}
