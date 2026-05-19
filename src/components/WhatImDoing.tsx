"use client";

import { services, type ServiceIcon } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import { GlassCard } from "./GlassCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const HEADING_WORDS = ["What", "I'm", "Doing"];

const headingContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const headingWordVariants = {
  hidden: { opacity: 0, y: "1.1em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const noMotion = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
};

function ServiceIconGraphic({ icon }: { icon: ServiceIcon }) {
  const className = "h-9 w-9 shrink-0 sm:h-10 sm:w-10";

  switch (icon) {
    case "web":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18M8 4v3M16 4v3" strokeLinecap="round" />
          <path d="M9 14l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "app":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 19h2" strokeLinecap="round" />
          <circle cx="12" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "devops":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4" />
          <path d="M7.05 7.05l2.12 2.12M14.83 14.83l2.12 2.12M16.95 7.05l-2.12 2.12M9.17 14.83l-2.12 2.12" strokeLinecap="round" />
        </svg>
      );
    case "microservices":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" strokeLinecap="round" />
        </svg>
      );
  }
}

export function WhatImDoing() {
  const reducedMotion = useReducedMotion();
  const v = reducedMotion ? noMotion : undefined;

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "-40px" }}
      variants={v ?? containerVariants}
    >
      <motion.h3
        className="mb-[clamp(0.75rem,2vh,1.25rem)] text-fluid-sub font-semibold text-foreground"
        variants={v ?? headingContainerVariants}
        aria-label="What I'm Doing"
      >
        {HEADING_WORDS.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block"
            variants={v ?? headingWordVariants}
            aria-hidden
          >
            {word}
            {index < HEADING_WORDS.length - 1 ? "\u00A0" : null}
          </motion.span>
        ))}
      </motion.h3>

      <motion.div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5"
        variants={v ?? containerVariants}
      >
        {services.map((service) => (
          <motion.div key={service.title} variants={v ?? cardVariants}>
            <GlassCard className="flex h-full items-start gap-4 p-5 sm:gap-5 sm:p-6">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent sm:h-14 sm:w-14"
                aria-hidden
              >
                <ServiceIconGraphic icon={service.icon} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-fluid-body font-semibold text-foreground">{service.title}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-fluid-body">
                  {service.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
