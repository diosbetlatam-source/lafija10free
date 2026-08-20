import { TrendingDown } from "lucide-react";
import { tickerSignals } from "@/lib/site";

export default function LiveTicker() {
  const items = [...tickerSignals, ...tickerSignals];

  return (
    <div className="relative overflow-hidden border-y border-line bg-navy-900/80 py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-900 to-transparent" />

      <div className="animate-ticker flex w-max items-center gap-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm"
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-mint" />
            <span className="font-medium text-white/80">{item.match}</span>
            <span className="rounded-full bg-mint/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-mint">
              {item.tag}
            </span>
            <span className="font-mono-num flex items-center gap-1 font-semibold text-brand-soft">
              {item.odd}
              <TrendingDown className="h-3.5 w-3.5" />
            </span>
            <span className="text-white/15">/</span>
          </div>
        ))}
      </div>
    </div>
  );
}
