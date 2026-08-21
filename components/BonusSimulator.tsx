"use client";

import { useState } from "react";
import { ArrowRight, Wallet } from "lucide-react";
import Reveal from "./Reveal";

const presets = [5000, 10000, 20000, 50000];

function formatArs(value: number) {
  return value.toLocaleString("es-AR");
}

export default function BonusSimulator() {
  const [deposit, setDeposit] = useState(5000);
  const playWith = Math.max(0, deposit) * 2;

  return (
    <section className="relative bg-navy-950 py-24 lg:py-32">
      <div className="bg-radial-glow absolute inset-x-0 top-0 h-[400px] opacity-50" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-soft">
              Simulador de bono
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Mirá cómo se duplica tu primer depósito
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55">
              Así funciona el bono de bienvenida típico de una casa de
              apuestas: depositás $5.000 y jugás con $10.000. Elegí un monto
              y mirá el ejemplo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group relative mt-12">
            <div className="absolute -inset-[2px] rounded-[1.6rem] bg-gradient-to-br from-brand-bright via-brand to-sky opacity-70 blur-[2px]" />
            <div className="relative rounded-[1.5rem] border border-white/10 bg-navy-900 p-6 sm:p-10">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {presets.map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setDeposit(p)}
                    className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      deposit === p
                        ? "border-brand bg-brand text-white"
                        : "border-line-soft bg-white/5 text-white/60 hover:border-brand/40 hover:text-white"
                    }`}
                  >
                    ${formatArs(p)}
                  </button>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <div className="relative w-full max-w-xs">
                  <Wallet className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
                  <input
                    type="number"
                    min={0}
                    value={deposit}
                    onChange={(e) =>
                      setDeposit(Math.max(0, Number(e.target.value) || 0))
                    }
                    className="w-full rounded-full border border-line-soft bg-navy-950/60 py-3 pl-11 pr-4 text-center font-mono-num text-lg font-bold text-white outline-none focus:border-brand"
                  />
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-white/40">
                    Depositás
                  </p>
                  <p className="mt-1 font-display font-mono-num text-3xl font-extrabold text-white">
                    ${formatArs(deposit)}
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 shrink-0 rotate-90 text-brand-soft sm:rotate-0" />
                <div className="text-center">
                  <p className="text-xs uppercase tracking-widest text-brand-soft">
                    Jugás con
                  </p>
                  <p className="text-gradient mt-1 font-display font-mono-num text-3xl font-extrabold">
                    ${formatArs(playWith)}
                  </p>
                </div>
              </div>

              <p className="mx-auto mt-8 max-w-md text-center text-xs leading-relaxed text-white/35">
                Ejemplo ilustrativo de un bono 100% de bienvenida. La Fija 10
                no procesa depósitos ni pagos: el bono lo ofrece la casa de
                apuestas que elijas, y cada una tiene sus propios términos y
                condiciones. Apostá con responsabilidad, +18.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
