import { steps } from "@/lib/site";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <section className="relative bg-navy-950 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
              Cómo funciona
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Tres pasos, cero complicación
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-line bg-navy-900/50 p-8">
                <span className="font-display font-mono-num text-5xl font-extrabold text-white/10">
                  {step.number}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/55">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
