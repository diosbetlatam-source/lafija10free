import { Star } from "lucide-react";
import { testimonials } from "@/lib/site";
import Reveal from "./Reveal";

const avatarGradients = [
  "from-brand-bright to-sky",
  "from-mint to-brand",
  "from-gold to-brand-bright",
  "from-sky to-brand-deep",
  "from-brand to-mint",
  "from-brand-deep to-sky",
];

export default function ProofWall() {
  return (
    <section className="relative bg-navy-950 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
              Prueba social
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Lo que dice la gente que ya está adentro
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55">
              Reseñas de ejemplo, listas para reemplazar por las opiniones
              reales de la comunidad.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.07}>
              <div className="flex aspect-square h-full flex-col justify-between gap-5 rounded-2xl border border-line bg-white/[0.03] p-6 transition-colors hover:border-brand/30 hover:bg-white/[0.05]">
                <div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white ${avatarGradients[i % avatarGradients.length]}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-white/45">{t.city}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
