"use client";

import { PRODUCTS } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { CONTAINER, HEADING } from "@/components/ui/tokens";

export function Technology() {
  return (
    <section
      id="technology"
      className="scroll-mt-0 bg-[#1B1B1D] py-20 text-white sm:py-28"
    >
      <div className={CONTAINER}>
        <Reveal className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-start">
          <h2
            className={`${HEADING} max-w-lg text-4xl font-medium leading-[1.12] tracking-[-0.03em] sm:text-5xl`}
          >
            Our Qualified Technology is Ready to Help You!
          </h2>
          <p className="max-w-xs text-xs leading-relaxed text-white/70 md:ml-auto md:mt-2">
            Healthcare is the system of medical services aimed at promoting
            wellness, preventing diseases, and treating health issues to improve
            quality of life.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <article className="group h-full rounded-3xl border border-dashed border-white/20 p-5 transition-colors duration-300 hover:border-white/50 sm:p-6">
                <div className="grid aspect-[1/0.95] place-items-center overflow-hidden rounded-2xl bg-white">
                  <p.Art className="h-[88%] w-[88%] transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3
                  className={`${HEADING} mt-6 text-center text-lg font-medium tracking-tight`}
                >
                  {p.name}
                </h3>
                <p className="mx-auto mt-2 max-w-[240px] text-center text-[11px] leading-relaxed text-white/65">
                  {p.blurb}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
