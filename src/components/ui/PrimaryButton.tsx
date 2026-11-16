"use client";

import type { ReactNode } from "react";
import { FOCUS } from "./tokens";
import { goTo } from "./helpers";

export interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

export function PrimaryButton({
  children,
  onClick,
  href,
  className = "",
  type = "button",
  disabled,
  size = "md",
}: PrimaryButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs gap-2",
    md: "px-5 py-2.5 text-sm gap-2.5",
    lg: "px-6 py-3.5 text-sm gap-3",
  }[size];

  const cls = `group inline-flex items-center justify-center rounded-full bg-[#0A5CFF] font-medium text-white transition-all duration-300 hover:bg-[#0848CC] hover:shadow-[0_8px_24px_-8px_rgba(10,92,255,0.7)] disabled:cursor-not-allowed disabled:opacity-60 ${sizeClasses} ${FOCUS} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        onClick={(e) => {
          e.preventDefault();
          onClick?.();
          goTo(href);
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
