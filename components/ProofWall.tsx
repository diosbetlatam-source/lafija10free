import { ImagePlus } from "lucide-react";
import { proofSlots } from "@/lib/site";
import Reveal from "./Reveal";

const heights = ["h-72", "h-56", "h-64", "h-80", "h-60", "h-72"];

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
              Resultados de quienes ya están adentro
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/55">
              Capturas reales enviadas por los propios miembros del grupo.
              Espacio reservado, pronto se reemplaza por el material
              definitivo.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 columns-2 gap-5 sm:columns-3 [&>*]:mb-5">
          {proofSlots.map((slot, i) => (
            <Reveal key={slot.id} delay={(i % 3) * 0.07} className="break-inside-avoid">
              <div
                className={`flex ${heights[i % heights.length]} flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-line-soft bg-navy-900/50 px-4 text-center`}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/30">
                  <ImagePlus className="h-5 w-5" />
                </div>
                <p className="text-xs text-white/35">{slot.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
