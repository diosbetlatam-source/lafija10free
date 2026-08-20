"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { TELEGRAM_URL } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            La próxima señal puede caer{" "}
            <span className="text-gradient">en cualquier momento</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/60">
            Entrá ahora, gratis, y empezá a recibir cuotas y estrategias
            directo en tu Telegram.
          </p>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white shadow-glow transition-all hover:scale-[1.02] hover:bg-brand-deep"
          >
            <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            Unite gratis al grupo
          </a>
          <p className="mt-4 text-xs text-white/35">
            +18 · Contenido informativo · Apostá con responsabilidad
          </p>
        </motion.div>
      </div>
    </section>
  );
}
