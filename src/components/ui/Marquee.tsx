import { HEADING } from "./tokens";

export function Marquee({ text }: { text: string }) {
  const items = Array.from({ length: 8 });

  return (
    <div
      className="mw-marquee overflow-hidden bg-[#0A5CFF] py-5 text-white sm:py-6"
      role="presentation"
    >
      <div
        className="mw-marquee-track flex w-max items-center"
        aria-hidden="true"
      >
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((_, i) => (
              <span key={i} className="flex items-center">
                <span
                  className={`${HEADING} whitespace-nowrap text-3xl font-light tracking-tight sm:text-5xl`}
                >
                  {text}
                </span>
                <svg
                  viewBox="0 0 40 40"
                  className="mx-8 h-8 w-8 shrink-0 text-[#0A3FA8] sm:mx-12 sm:h-10 sm:w-10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M20 2v36M2 20h36" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">{text}</span>
    </div>
  );
}
