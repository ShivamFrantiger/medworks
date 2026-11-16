"use client";

import { type FormEvent, useState } from "react";
import { BRAND, FOOTER_COLUMNS, YEAR } from "@/data/content";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/Icons";
import { CONTAINER, FOCUS, HEADING } from "@/components/ui/tokens";
import { goTo } from "@/components/ui/helpers";

export function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      setState("error");
      return;
    }
    console.log("[MedWorks] newsletter signup:", email);
    setState("done");
    setEmail("");
  };

  return (
    <footer className="bg-[#F7F7F8] pb-10 pt-16">
      <div className={CONTAINER}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[240px] text-[11px] leading-relaxed text-[#5B616C]">
              Healthcare is the system that cares for individuals&apos; health
              needs, from checkups to life-saving treatments.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialIcon label="Facebook">
                <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4.6v-7h2.4l.4-2.8h-2.8V9.5c0-.8.3-1.4 1.4-1.4h1.5V5.6c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2H9.8V14h2.4v7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
              </SocialIcon>
              <SocialIcon label="Instagram">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 2.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5-3.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2.2 7.5V18h2.5v-7.5H6.2Zm1.2-3.6a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9Zm3.1 3.6V18H13v-4c0-1.1.5-1.8 1.4-1.8s1.3.6 1.3 1.8V18h2.5v-4.5c0-2-1.1-3.2-2.8-3.2-1 0-1.7.5-2.1 1.1v-.9h-2.8Z" />
              </SocialIcon>
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className={`${HEADING} text-sm font-semibold text-[#0E0E10]`}>
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(l.href);
                      }}
                      className={`rounded text-xs text-[#5B616C] transition-colors hover:text-[#0A5CFF] ${FOCUS}`}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className={`${HEADING} text-sm font-semibold text-[#0E0E10]`}>
              Subscribe to newsletter
            </h3>
            <form onSubmit={subscribe} noValidate className="mt-4">
              <div
                className={`flex items-center rounded-full border bg-white py-1 pl-4 pr-1 transition-colors focus-within:border-[#0A5CFF] ${
                  state === "error" ? "border-[#D92D20]" : "border-black/15"
                }`}
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (state !== "idle") setState("idle");
                  }}
                  placeholder="Enter email"
                  autoComplete="email"
                  className="min-w-0 flex-1 bg-transparent text-xs text-[#0E0E10] placeholder:text-[#8A8F99] focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#0A5CFF] text-white transition-colors hover:bg-[#0848CC] ${FOCUS}`}
                >
                  <svg
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="h-3.5 w-3.5"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 11 11 3M5 3h6v6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <p
                role="status"
                className={`mt-2 min-h-4 pl-4 text-[11px] ${state === "error" ? "text-[#D92D20]" : "text-[#0A5CFF]"}`}
              >
                {state === "error" && "Enter a valid email address."}
                {state === "done" && "You're subscribed. Thank you!"}
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-black/10 pt-6 text-xs text-[#0E0E10] sm:flex-row sm:px-8">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className={`rounded ${FOCUS} hover:text-[#0A5CFF]`}
          >
            Terms &amp; Agreements
          </a>
          <p>
            &copy;{YEAR} {BRAND} All Rights Reserved
          </p>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className={`rounded ${FOCUS} hover:text-[#0A5CFF]`}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
