"use client";

import type { CSSProperties } from "react";
import { PRODUCTS, YEAR } from "@/data/content";
import { CArmXrayArt, MicroscopeArt } from "@/components/art";
import { ArrowRight } from "@/components/ui/Icons";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { CONTAINER, FOCUS, HEADING } from "@/components/ui/tokens";
import { goTo } from "@/components/ui/helpers";

function ExploreText() {
  return (
    <div className="max-w-[300px]">
      <h2
        className={`${HEADING} text-[17px] font-medium leading-snug tracking-tight text-[#0E0E10]`}
      >
        Explore Our Latest Qualityful Technology :-
      </h2>
      <p className="mt-3 text-[11px] leading-relaxed text-[#5B616C]">
        Healthcare refers to the organized efforts to maintain or improve
        physical and mental health through medical services, preventative
        measures, and treatment.
      </p>
    </div>
  );
}

function ScrollDownButton() {
  return (
    <button
      type="button"
      aria-label="Scroll to features"
      onClick={() => goTo("#features")}
      className={`group grid h-14 w-9 shrink-0 place-items-center rounded-full bg-[#0A5CFF] text-white transition-colors hover:bg-[#0848CC] ${FOCUS}`}
    >
      <svg
        viewBox="0 0 12 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-5 w-3 transition-transform duration-300 group-hover:translate-y-0.5"
        aria-hidden="true"
      >
        <path
          d="M6 1v17M1.5 13.5 6 18l4.5-4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export function Hero() {
  const intro =
    "Welcome to MedWorks, where innovation meets healthcare. Our advanced medical technology is transforming the way doctors diagnose.";

  return (
    <section id="home" className="scroll-mt-24 pb-16 pt-6 sm:pt-10 lg:pb-24">
      <div
        className={`${CONTAINER} grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-6`}
      >
        {/* Left column */}
        <div>
          <div
            className="relative"
            style={{ "--h": "clamp(2.9rem, 7.4vw, 5.6rem)" } as CSSProperties}
          >
            <h1
              className={`${HEADING} font-medium leading-[1.12] tracking-[-0.035em] text-[#0E0E10]`}
              style={{ fontSize: "var(--h)" }}
            >
              <span className="block">Healthcare with</span>
              <span className="block">Medical</span>
              <span className="block">
                Technology<span className="text-[#0A5CFF]">.</span>
              </span>
            </h1>
            <p
              className="mt-6 max-w-sm text-[13px] leading-relaxed text-[#5B616C] lg:absolute lg:mt-0 lg:max-w-[250px]"
              style={
                {
                  top: "calc(var(--h) * 1.18)",
                  left: "calc(var(--h) * 3.75)",
                } as CSSProperties
              }
            >
              {intro}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <PrimaryButton href="#contact" className="px-6 py-3.5">
              Start Program
              <ArrowRight className="h-3 w-7 transition-transform duration-300 group-hover:translate-x-1" />
            </PrimaryButton>
            <a
              href="#how-it-works"
              onClick={(e) => {
                e.preventDefault();
                goTo("#how-it-works");
              }}
              className={`rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-medium text-[#0E0E10] transition-all duration-300 hover:border-black/30 hover:bg-[#F0F2F6] ${FOCUS}`}
            >
              Learn More
            </a>
          </div>

          {/* Mini cards */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.9fr_1fr] lg:items-end">
            <div className="grid grid-cols-3 gap-3">
              {[PRODUCTS[2], PRODUCTS[1]].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => goTo("#technology")}
                  className={`group rounded-[22px] bg-white p-1.5 text-left shadow-[0_0_0_4px_rgba(255,255,255,0.7)] transition-transform duration-300 hover:-translate-y-1 ${FOCUS}`}
                >
                  <span className="grid aspect-[1/0.95] place-items-center overflow-hidden rounded-2xl bg-[#ECEEF2]">
                    <p.Art className="h-[88%] w-[88%] transition-transform duration-500 group-hover:scale-105" />
                  </span>
                  <span className="block px-2 pb-1.5 pt-2 text-[11px] font-medium text-[#0E0E10]">
                    {p.short}
                  </span>
                </button>
              ))}
              <button
                type="button"
                onClick={() => goTo("#features")}
                className={`group relative rounded-[22px] bg-white p-1.5 shadow-[0_0_0_4px_rgba(255,255,255,0.7)] transition-transform duration-300 hover:-translate-y-1 ${FOCUS}`}
                aria-label="See more technology"
              >
                <span className="relative grid aspect-[1/0.95] place-items-center overflow-hidden rounded-2xl bg-[#ECEEF2]">
                  <CArmXrayArt className="h-[100%] w-[100%] scale-125 blur-[3px]" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A5CFF] px-3 py-1.5 text-[10px] font-medium text-white transition-colors group-hover:bg-[#0848CC]">
                      See More
                      <ArrowRight className="h-2 w-4" />
                    </span>
                  </span>
                </span>
                <span
                  className="block px-2 pb-1.5 pt-2 text-[11px] opacity-0"
                  aria-hidden="true"
                >
                  .
                </span>
              </button>
            </div>

            <div className="flex items-end justify-between gap-4 lg:hidden">
              <ExploreText />
              <ScrollDownButton />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="relative flex flex-col lg:pl-4">
          <p className="ml-auto max-w-[130px] text-right text-[11px] leading-snug text-[#0E0E10]">
            Best Product Technology {YEAR}.
          </p>
          <div className="relative mx-auto mt-2 aspect-square w-full max-w-[420px]">
            <div
              className="absolute inset-x-[4%] bottom-[8%] top-[24%] rounded-t-full"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%, rgba(10,92,255,0.22), rgba(10,92,255,0.08) 60%, transparent 75%)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-[18%] bottom-[8%] top-[34%] rounded-t-full bg-[#CFE0FF]/70"
              aria-hidden="true"
            />
            <MicroscopeArt className="relative h-full w-full drop-shadow-[0_24px_30px_rgba(14,14,16,0.15)]" />
          </div>

          <div className="mt-auto hidden items-end justify-between gap-4 pt-10 lg:flex">
            <ExploreText />
            <ScrollDownButton />
          </div>
        </div>
      </div>
    </section>
  );
}
