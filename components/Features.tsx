import {
  TrendingUp,
  Activity,
  BookOpen,
  Gift,
  Send,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/lib/site";
import Reveal from "./Reveal";

const icons: Record<string, LucideIcon> = {
  TrendingUp,
  Activity,
  BookOpen,
  Gift,
  Send,
  ShieldCheck,
};

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-navy-900/40 py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-brand/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
                Por qué La Fija 10
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Información de verdad, no solo un pronóstico
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/55">
                Cada señal existe para darte más contexto antes de la
                apuesta, no para prometer lo que nadie puede garantizar.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {features.map((feature, i) => {
              const Icon = icons[feature.icon];
              return (
                <Reveal key={feature.title} delay={i * 0.06}>
                  <div className="group flex gap-5 border-t border-line py-7 first:border-t-0 lg:first:border-t">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line-soft bg-navy-950/60 text-brand-soft transition-colors group-hover:border-brand/50 group-hover:bg-brand/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/55">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
