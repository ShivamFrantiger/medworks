"use client";

import { useState } from "react";
import { STEPS } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { CONTAINER, FOCUS, HEADING } from "@/components/ui/tokens";

export function HowItWorks() {
  const [active, setActive] = useState(1);

  return (
    <section id="how-it-works" className="scroll-mt-0 py-20 sm:py-28">
      <Reveal className={`${CONTAINER} text-center`}>
        <p className="text-xs text-[#5B616C]">How It Works</p>
        <h2
          className={`${HEADING} mx-auto mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.03em] text-[#0E0E10] sm:text-[44px]`}
        >
          Simplified Process for Revolutionary Medical Technology
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-[#5B616C] sm:text-[11.5px]">
          Healthcare is the system of services designed to maintain and improve
          health through prevention, diagnosis, treatment, and care, ensuring
          overall well-being for individuals and communities.
        </p>
      </Reveal>

      <div className="mt-14 border-t border-black/10">
        <ul className="relative">
          {STEPS.map((s, i) => {
            const on = active === i;
            return (
              <li
                key={s.title}
                className={`border-b border-black/10 transition-colors duration-300 ${on ? "bg-[#DFEAFF]" : "bg-transparent"}`}
                onMouseEnter={() => setActive(i)}
              >
                <div className={`${CONTAINER} relative`}>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`step-panel-${i}`}
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className={`flex h-24 w-full items-center justify-between text-left sm:h-[120px] ${FOCUS}`}
                  >
                    <span
                      className={`${HEADING} text-2xl font-normal tracking-tight text-[#0E0E10] sm:text-[28px]`}
                    >
                      {s.title}
                    </span>
                    <span
                      className={`grid h-8 w-14 place-items-center rounded-full border transition-all duration-300 ${
                        on
                          ? "border-[#0A5CFF] bg-[#0A5CFF] text-white"
                          : "border-black/25 text-[#5B616C]"
                      }`}
                    >
                      <ArrowRight className="h-2.5 w-6" />
                    </span>
                  </button>

                  {/* Desktop: tilted floating image */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute right-[22%] top-1/2 z-10 hidden h-[220px] w-[240px] -translate-y-[40%] place-items-center overflow-hidden rounded-[28px] bg-gradient-to-br from-[#F3F6FC] to-[#C9D9F7] shadow-[0_24px_50px_-20px_rgba(10,92,255,0.45)] transition-all duration-500 ease-out md:grid ${
                      on
                        ? "rotate-[9deg] scale-100 opacity-100"
                        : "rotate-[3deg] scale-90 opacity-0"
                    }`}
                  >
                    <s.Art className="h-[85%] w-[85%]" />
                  </div>

                  {/* Mobile: expanded panel */}
                  <div
                    id={`step-panel-${i}`}
                    className={`grid overflow-hidden transition-all duration-500 md:hidden ${on ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}
                  >
                    <div className="min-h-0">
                      <div className="flex items-center gap-4">
                        <div className="grid h-24 w-24 shrink-0 rotate-6 place-items-center rounded-2xl bg-white">
                          <s.Art className="h-[85%] w-[85%]" />
                        </div>
                        <p className="text-xs leading-relaxed text-[#3A3D44]">
                          {s.blurb}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
