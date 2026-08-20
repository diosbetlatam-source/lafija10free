import Image from "next/image";

const leagues = [
  { src: "/leagues/laliga.png", alt: "LaLiga" },
  { src: "/leagues/liga-de-primera.png", alt: "Liga de Primera" },
  { src: "/leagues/lpf.webp", alt: "Liga Profesional Argentina" },
  { src: "/leagues/premier-league.png", alt: "Premier League" },
  { src: "/leagues/champions-league.png", alt: "UEFA Champions League" },
  { src: "/leagues/libertadores.png", alt: "Copa Libertadores" },
  { src: "/leagues/sudamericana.png", alt: "Copa Sudamericana" },
];

export default function LeaguesCarousel() {
  const items = [...leagues, ...leagues];

  return (
    <section className="relative bg-navy-950 pb-14 pt-2 lg:pb-20">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
          Cobertura global
        </span>
        <p className="mt-2 text-sm text-white/50">
          Seguimos el movimiento de cuotas en las principales ligas y
          torneos del mundo
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-950 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-950 to-transparent sm:w-24" />

        <div className="animate-ticker-slow flex w-max items-center gap-4">
          {items.map((league, i) => (
            <div
              key={i}
              className="flex h-16 w-36 shrink-0 items-center justify-center rounded-2xl border border-line bg-white/[0.04] px-5 transition-colors hover:border-brand/40 hover:bg-white/[0.07] sm:h-20 sm:w-44"
            >
              <Image
                src={league.src}
                alt={league.alt}
                width={160}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
