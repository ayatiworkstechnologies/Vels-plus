"use client";

export default function PrimaryMarquee() {
  const text = "WELCOME TO VELS PLUS";
  const items = Array(12).fill(text);

  return (
    <section className="w-full bg-[#2C3691] py-5 overflow-hidden">
      <marquee behavior="scroll" direction="left" scrollamount="7">
        <div className="flex items-center">
          {items.map((item, i) => (
            <div key={i} className="mx-8 text-white text-2xl md:text-3xl font-bold tracking-widest flex">
              {item.split("").map((letter, index) => (
                <span
                  key={index}
                  className="letter"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
          ))}
        </div>
      </marquee>

      <style jsx>{`
        .letter {
          display: inline-block;
          animation: flipMove 2s ease-in-out infinite;
        }

        @keyframes flipMove {
          0% {
            transform: rotateX(0deg);
          }

          50% {
            transform: rotateX(180deg);
          }

          100% {
            transform: rotateX(360deg);
          }
        }
      `}</style>
    </section>
  );
}