"use client";

import {
  useCallback,
  useRef,
  type HTMLAttributes,
  type MouseEvent,
} from "react";

type GlassCardProps = {
  as?: "div" | "article";
  className?: string;
  children?: React.ReactNode;
} & HTMLAttributes<HTMLElement>;

export function GlassCard({
  as: Component = "div",
  className = "",
  children,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  ...props
}: GlassCardProps) {
  const ref = useRef<HTMLElement | null>(null);

  const setGlowPosition = useCallback((e: MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      setGlowPosition(e);
      onMouseMove?.(e);
    },
    [onMouseMove, setGlowPosition],
  );

  const handleMouseEnter = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      ref.current?.style.setProperty("--glow-opacity", "1");
      setGlowPosition(e);
      onMouseEnter?.(e);
    },
    [onMouseEnter, setGlowPosition],
  );

  const handleMouseLeave = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const el = ref.current;
      if (el) {
        el.style.setProperty("--glow-opacity", "0");
        el.style.setProperty("--mouse-x", "50%");
        el.style.setProperty("--mouse-y", "50%");
      }
      onMouseLeave?.(e);
    },
    [onMouseLeave],
  );

  return (
    <Component
      ref={(node) => {
        ref.current = node;
      }}
      className={`glass-card ${className}`.trim()}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Component>
  );
}
