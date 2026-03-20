"use client";

export default function UniqueBandMarquee() {
  const items = Array(8).fill("WELCOME TO VELS PLUS");

  return (
    <section className="w-full overflow-hidden bg-white py-10">
      <div className="relative overflow-hidden">
        {/* left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white via-white to-transparent" />

        {/* right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white via-white to-transparent" />

        <div className="marquee-track flex min-w-max items-center py-4 md:py-5">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="mx-8 md:mx-10 flex items-center gap-5 whitespace-nowrap"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-[#2C3691] pulse-dot" />

              <div
                className="scan-wrap relative"
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                <span className="base-text text-lg md:text-2xl font-semibold uppercase tracking-[0.35em] text-[#2C3691]/20">
                  {item}
                </span>

                <span className="scan-text scan-a text-lg md:text-2xl font-semibold uppercase tracking-[0.35em] text-[#2C3691]">
                  {item}
                </span>

                <span className="scan-text scan-b text-lg md:text-2xl font-semibold uppercase tracking-[0.35em] text-[#2C3691]/75">
                  {item}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: marqueeMove 42s linear infinite;
          will-change: transform;
        }

        .scan-wrap {
          position: relative;
          display: inline-grid;
          place-items: center;
        }

        .base-text,
        .scan-text {
          grid-area: 1 / 1;
          white-space: nowrap;
        }

        .base-text {
          text-shadow: 0 0 8px rgba(44, 54, 145, 0.06);
        }

        .scan-a {
          animation: scanRevealA 3.8s ease-in-out infinite;
          text-shadow:
            0 0 8px rgba(44, 54, 145, 0.16),
            0 0 18px rgba(44, 54, 145, 0.08);
        }

        .scan-b {
          animation: scanRevealB 3.8s ease-in-out infinite;
          text-shadow:
            0 0 8px rgba(44, 54, 145, 0.1),
            0 0 16px rgba(44, 54, 145, 0.06);
        }

        .pulse-dot {
          animation: dotFloat 2.8s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(44, 54, 145, 0.22);
        }

        @keyframes marqueeMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scanRevealA {
          0%,
          100% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          15% {
            clip-path: inset(0 65% 0 0);
            opacity: 1;
          }
          35% {
            clip-path: inset(0 20% 0 0);
            opacity: 1;
          }
          50% {
            clip-path: inset(0 0% 0 0);
            opacity: 1;
          }
          70% {
            clip-path: inset(0 0 0 35%);
            opacity: 1;
          }
          85% {
            clip-path: inset(0 0 0 70%);
            opacity: 0.7;
          }
          100% {
            clip-path: inset(0 0 0 100%);
            opacity: 0;
          }
        }

        @keyframes scanRevealB {
          0%,
          100% {
            clip-path: inset(100% 0 0 0);
            opacity: 0;
          }
          20% {
            clip-path: inset(65% 0 0 0);
            opacity: 0.9;
          }
          40% {
            clip-path: inset(25% 0 0 0);
            opacity: 1;
          }
          55% {
            clip-path: inset(0% 0 0 0);
            opacity: 1;
          }
          75% {
            clip-path: inset(0 0 45% 0);
            opacity: 0.9;
          }
          100% {
            clip-path: inset(0 0 100% 0);
            opacity: 0;
          }
        }

        @keyframes dotFloat {
          0%,
          100% {
            transform: scale(0.9) translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.15) translateY(-2px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}