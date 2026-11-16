import type { ReactNode } from "react";
import { FOCUS } from "./tokens";

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 6h26M21 1l5 5-5 5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      onClick={(e) => e.preventDefault()}
      className={`rounded-md text-[#0E0E10] transition-colors hover:text-[#0A5CFF] ${FOCUS}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
        aria-hidden="true"
      >
        {children}
      </svg>
    </a>
  );
}
