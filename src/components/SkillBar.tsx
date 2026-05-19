"use client";

import type { Skill } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "./GlassCard";
import { SkillIcon } from "./SkillIcon";

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export function SkillBar({ skill, index }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }}
    >
      <GlassCard className="flex items-center gap-3 p-3 sm:gap-3.5 sm:p-3.5">
        <motion.div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 sm:h-11 sm:w-11"
          animate={isInView ? { y: [0, -3, 0] } : { y: 0 }}
          transition={{
            duration: 2.4,
            delay: index * 0.06,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <SkillIcon icon={skill.icon} />
        </motion.div>

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="truncate text-sm font-semibold text-foreground sm:text-[0.95rem]">
              {skill.name}
            </span>
            <span className="shrink-0 text-sm font-bold text-accent">{skill.percentage}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-border/80">
            <motion.div
              className="h-full rounded-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: isInView ? `${skill.percentage}%` : 0 }}
              transition={{ duration: 0.9, delay: index * 0.04 + 0.12, ease: "easeOut" }}
            />
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
