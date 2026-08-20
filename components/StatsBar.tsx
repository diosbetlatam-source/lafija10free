import { stats } from "@/lib/site";
import Reveal from "./Reveal";
import StatNumber from "./StatNumber";

export default function StatsBar() {
  return (
    <section className="relative bg-navy-900/60">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06}>
              <div className="text-center lg:text-left">
                <div className="font-display font-mono-num text-3xl font-extrabold tabular-nums text-white sm:text-4xl">
                  <StatNumber value={stat.value} />
                </div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
