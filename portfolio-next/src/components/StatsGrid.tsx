import { stats } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";
import { GlassCard } from "./GlassCard";

interface StatsGridProps {
  className?: string;
  showLabel?: boolean;
}

export function StatsGrid({ className = "", showLabel = true }: StatsGridProps) {
  return (
    <div className={className}>
      {showLabel && (
        <p className="mb-4 text-center text-fluid-heading font-bold uppercase tracking-[0.12em] text-foreground lg:text-right">
          My <span className="text-accent">Stats</span>
        </p>
      )}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
        {stats.map((stat, index) => (
          <FadeIn key={stat.label} delay={index * 0.06}>
            <GlassCard className="p-5 text-center sm:p-6 lg:p-7">
              <p className="text-fluid-stat font-bold text-accent">{stat.value}</p>
              <p className="mt-2 text-fluid-body font-medium leading-snug text-muted">
                {stat.label}
              </p>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
