import { skills } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { SkillBar } from "./SkillBar";

export function Skills() {
  return (
    <div className="relative flex h-full min-h-0 w-full flex-1 flex-col items-center justify-center max-md:h-auto max-md:flex-none md:items-start">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 150%, var(--border) 22%, transparent 23%)",
          backgroundSize: "1.75rem 1.75rem",
        }}
      />

      <SectionHeading title="My" highlight="Skills" start />

      <div className="mt-1 grid w-full max-w-6xl grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-2.5">
        {skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}
