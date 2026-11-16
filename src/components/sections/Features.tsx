"use client";

import { FEATURES } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { CONTAINER, HEADING } from "@/components/ui/tokens";

export function Features() {
  return (
    <section id="features" className="scroll-mt-16 py-20 sm:py-28">
      <div className={CONTAINER}>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2
            className={`${HEADING} text-4xl font-medium tracking-[-0.03em] text-[#0E0E10] sm:text-5xl`}
          >
            Our Features<span className="text-[#0A5CFF]">.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-xs leading-relaxed text-[#5B616C] sm:text-[13px]">
            Healthcare encompasses medical services that prevent, diagnose, and
            treat illnesses, essential for wellness and quality of life.
            Preventive care and timely support enable individuals to manage
            their health effectively.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.id} delay={i * 120}>
              <article className="group relative h-[480px] overflow-hidden rounded-3xl bg-gradient-to-b from-[#E4EBF7] to-[#EEF2FA]">
                <div className="absolute inset-x-0 top-0 grid h-[68%] place-items-center">
                  <f.Art className="h-[88%] w-[88%] transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex h-[42%] flex-col items-center justify-center bg-white/55 px-8 text-center backdrop-blur-xl sm:px-12">
                  <h3
                    className={`${HEADING} text-2xl font-medium tracking-tight text-[#0E0E10] sm:text-[28px]`}
                  >
                    {f.name}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#3A3D44] sm:text-[13px]">
                    {f.blurb}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
