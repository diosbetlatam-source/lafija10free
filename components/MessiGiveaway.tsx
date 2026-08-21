"use client";

import { Shirt, CheckCircle2, Send } from "lucide-react";
import { TELEGRAM_URL, giveaway } from "@/lib/site";
import Reveal from "./Reveal";

export default function MessiGiveaway() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
        <Reveal>
          <div className="grid items-center gap-10 rounded-[1.75rem] border border-line bg-gradient-to-br from-navy-900 to-navy-950 p-8 sm:p-12 lg:grid-cols-[auto_1fr] lg:gap-14">
            <div className="mx-auto flex h-40 w-40 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold sm:h-48 sm:w-48">
              <Shirt className="h-20 w-20 sm:h-24 sm:w-24" strokeWidth={1.5} />
            </div>

            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold">
                Sorteo especial
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Participá y competí por una {giveaway.prize}
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                Además de las señales gratis de todos los días, los miembros
                del grupo entran en el sorteo de una pieza única para los
                fanáticos del fútbol.
              </p>

              <ul className="mt-6 grid gap-2.5 text-left sm:grid-cols-1">
                {giveaway.rules.map((rule) => (
                  <li
                    key={rule}
                    className="flex items-start gap-2.5 text-sm text-white/65"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    {rule}
                  </li>
                ))}
              </ul>

              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:bg-brand-deep"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                Unite y participá gratis
              </a>
              <p className="mt-3 text-xs text-white/35">
                Promoción sin costo ni compra obligatoria. Fecha y mecánica
                final del sorteo se anuncian dentro del grupo.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
