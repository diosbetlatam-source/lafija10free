"use client";

import { motion } from "framer-motion";
import { Send, ShieldCheck } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 pb-16 pt-32 lg:pb-20 lg:pt-40">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)]" />
      <div className="bg-radial-glow absolute inset-x-0 top-0 h-[560px]" />
      <div className="absolute left-1/2 top-[-180px] h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />
      <div className="noise-overlay absolute inset-0" />

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-line-soft bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-soft">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-mint" />
            Grupo gratis en Telegram
          </div>

          <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
            <span className="text-gradient">La Fija 10:</span> la cuota se
            mueve, y vos te enterás primero
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            Mientras otros esperan el pronóstico del domingo, nuestra IA ya
            está leyendo el mercado. Más de 20 señales por día, directo a tu
            Telegram, con el motivo explicado. Sin pagar nada, sin registro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:bg-brand-deep"
          >
            <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Unite gratis al grupo
          </a>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <ShieldCheck className="h-4 w-4 text-mint" />
            +18 · Gratis, sin trampa · Sin spam
          </div>
        </motion.div>
      </div>
    </section>
  );
}
