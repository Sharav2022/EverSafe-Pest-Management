import { ShieldCheck, Bug, Timer, Egg } from "lucide-react";
import { Counter } from "@/components/ui/Counter";

const stats = [
  { icon: ShieldCheck, value: 98, suffix: "%", label: "Pest Control Success Rate" },
  { icon: Bug, value: 4600, suffix: "+", label: "Species Treated Worldwide" },
  { icon: Timer, value: 24, suffix: "/7", label: "Emergency Response Available" },
  { icon: Egg, value: 25, suffix: "+", label: "Years of Combined Experience" },
];

export function TrustStats() {
  return (
    <section className="bg-brand-dark-2">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-brand-lime">
              <stat.icon className="h-7 w-7" strokeWidth={1.75} />
            </span>
            <p className="font-heading mt-4 text-3xl font-extrabold text-white">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-sm text-white/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
