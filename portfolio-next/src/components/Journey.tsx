"use client";

import { timeline, type TimelineItem } from "@/data/portfolio";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";

const LANE_DURATION = 3.5;
const ROW_GAP = 0.45;
const PER_ROW = 3;

function laneRevealDelay(
  itemIndex: number,
  itemCount: number,
  rowLineDelay: number,
  lineDuration: number,
) {
  return rowLineDelay + ((itemIndex + 0.5) / itemCount) * lineDuration;
}

function chunkTimeline<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    rows.push(items.slice(i, i + size));
  }
  return rows;
}

interface JourneyLaneProps {
  items: TimelineItem[];
  rowIndex: number;
  isInView: boolean;
  lineDuration: number;
  reducedMotion: boolean | null;
}

function JourneyLane({
  items,
  rowIndex,
  isInView,
  lineDuration,
  reducedMotion,
}: JourneyLaneProps) {
  const rowLineDelay = reducedMotion ? 0 : rowIndex * (lineDuration + ROW_GAP);

  return (
    <motion.div
      className="grid w-full grid-cols-3 gap-x-3 sm:gap-x-4 lg:gap-x-6"
      style={{
        gridTemplateRows: "minmax(3.5rem, auto) 2.5rem minmax(8.5rem, auto)",
      }}
    >
      <motion.div
        className="relative z-[1] col-span-3 h-10 w-full"
        style={{ gridColumn: "1 / -1", gridRow: 2 }}
        aria-hidden
      >
        <motion.div
          className="absolute left-0 top-1/2 h-[4px] -translate-y-1/2 rounded-full bg-accent"
          style={{
            boxShadow:
              "0 0 14px color-mix(in srgb, var(--accent) 45%, transparent)",
          }}
          initial={{ width: "0%" }}
          animate={isInView ? { width: "100%" } : { width: "0%" }}
          transition={{
            duration: lineDuration,
            delay: rowLineDelay,
            ease: "linear",
          }}
        />

        {items.map((_, i) => {
          const left = ((i + 0.5) / items.length) * 100;
          const delay = reducedMotion
            ? 0
            : laneRevealDelay(i, items.length, rowLineDelay, lineDuration);

          return (
            <motion.div
              key={i}
              className="absolute top-1/2 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground sm:w-1.5"
              style={{ left: `${left}%`, height: "2.25rem" }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={
                isInView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }
              }
              transition={{ delay, duration: 0.3, ease: "easeOut" }}
            />
          );
        })}
      </motion.div>

      {items.map((item, i) => {
        const delay = reducedMotion
          ? 0
          : laneRevealDelay(i, items.length, rowLineDelay, lineDuration);

        return (
          <div key={`${item.title}-${item.duration}`} className="contents">
            <motion.div
              className="relative z-10 flex items-end justify-center px-1 pb-2 text-center"
              style={{ gridColumn: i + 1, gridRow: 1 }}
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ delay, duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-xs font-bold uppercase leading-tight tracking-wide text-foreground sm:text-sm">
                {item.duration}
              </p>
            </motion.div>

            <motion.div
              className="relative z-10 flex flex-col items-center px-1 pt-4 text-center"
              style={{ gridColumn: i + 1, gridRow: 3 }}
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={
                isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.95 }
              }
              transition={{ delay: delay + 0.15, duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-sm font-bold leading-snug text-foreground sm:text-base">
                {item.organization}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground/90">{item.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                {item.description}
              </p>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

function JourneyMobileTimeline({
  items,
  isInView,
  reducedMotion,
}: {
  items: TimelineItem[];
  isInView: boolean;
  reducedMotion: boolean | null;
}) {
  return (
    <ol className="relative space-y-0 pl-1">
      <span
        aria-hidden
        className="absolute bottom-2 left-[0.4375rem] top-2 w-0.5 rounded-full bg-accent/30"
      />
      {items.map((item, index) => {
        const delay = reducedMotion ? 0 : index * 0.08;

        return (
          <li key={`${item.title}-${item.duration}`} className="relative pb-8 last:pb-0">
            <motion.span
              className="absolute left-0 top-1.5 z-10 h-2.5 w-2.5 rounded-full border-2 border-accent bg-card shadow-[0_0_0_3px_var(--bg-primary)]"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay, duration: 0.25 }}
              aria-hidden
            />
            <motion.div
              className="ml-7 rounded-2xl border border-border/60 bg-card/50 p-4 backdrop-blur-sm"
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ delay: delay + 0.05, duration: 0.4, ease: "easeOut" }}
            >
              <p className="text-[11px] font-bold uppercase tracking-wide text-accent">
                {item.duration}
              </p>
              <p className="mt-1.5 text-base font-bold leading-snug text-foreground">
                {item.organization}
              </p>
              <p className="mt-0.5 text-sm font-semibold text-foreground/90">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const reducedMotion = useReducedMotion();
  const lineDuration = reducedMotion ? 0 : LANE_DURATION;
  const rows = chunkTimeline(timeline, PER_ROW);

  return (
    <div className="relative flex h-full min-h-0 w-full flex-1 flex-col">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 100% 150%, var(--border) 22%, transparent 23%)",
          backgroundSize: "1.75rem 1.75rem",
        }}
      />

      <SectionHeading title="My" highlight="Journey" />

      <div
        ref={ref}
        className="flex min-h-0 flex-1 flex-col justify-center py-2 md:gap-[clamp(2rem,5vh,3.5rem)] md:[min-height:min(72vh,calc(100dvh-11rem))]"
      >
        <div className="md:hidden">
          <JourneyMobileTimeline
            items={timeline}
            isInView={isInView}
            reducedMotion={reducedMotion}
          />
        </div>

        <div className="hidden flex-col gap-[clamp(2rem,5vh,3.5rem)] md:flex">
          {rows.map((rowItems, rowIndex) => (
            <JourneyLane
              key={rowIndex}
              items={rowItems}
              rowIndex={rowIndex}
              isInView={isInView}
              lineDuration={lineDuration}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

