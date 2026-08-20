import { TELEGRAM_URL } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-navy-900/60">
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-12 lg:px-10 lg:pb-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Logo size="sm" />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/45">
              Señales de cuotas y estrategias deportivas, directo en
              Telegram. Contenido informativo, no es recomendación
              financiera.
            </p>
          </div>

          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-soft transition-colors hover:text-white"
          >
            Unite al grupo →
          </a>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} La Fija 10. Todos los derechos
            reservados.
          </p>
          <p className="max-w-xl text-xs leading-relaxed text-white/35">
            +18. Contenido solo informativo, sin garantía de resultados.
            Las apuestas implican riesgo financiero. El juego puede generar
            dependencia, jugá con responsabilidad.
          </p>
        </div>
      </div>
    </footer>
  );
}
