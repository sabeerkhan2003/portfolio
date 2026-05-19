"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  scrollable?: boolean;
  className?: string;
}

export function Section({
  id,
  children,
  scrollable = false,
  className = "",
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollable) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const el = innerRef.current;
    const section = sectionRef.current;
    if (!el || !section) return;

    const main = section.closest("main");
    if (!main) return;

    const resetInnerScroll = () => {
      const { top } = section.getBoundingClientRect();
      if (Math.abs(top) < 32) {
        el.scrollTop = 0;
      }
    };

    let scrollEndTimer: ReturnType<typeof setTimeout>;
    const onMainScroll = () => {
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(resetInnerScroll, 120);
    };

    main.addEventListener("scroll", onMainScroll, { passive: true });
    resetInnerScroll();

    const onWheel = (e: WheelEvent) => {
      if (window.matchMedia("(max-width: 767px)").matches) return;

      const { scrollTop, scrollHeight, clientHeight } = el;
      const canScroll = scrollHeight > clientHeight + 1;
      const atTop = scrollTop <= 1;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 2;

      if (!canScroll || (atBottom && e.deltaY > 0) || (atTop && e.deltaY < 0)) {
        e.preventDefault();
        main.scrollBy({ top: e.deltaY });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      main.removeEventListener("scroll", onMainScroll);
      clearTimeout(scrollEndTimer);
      el.removeEventListener("wheel", onWheel);
    };
  }, [scrollable, id]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`section-screen snap-start snap-always max-md:snap-none ${className}`}
    >
      <div
        ref={innerRef}
        className={`section-inner w-full max-w-7xl ${scrollable ? "section-scroll" : ""}`}
      >
        {children}
      </div>
    </section>
  );
}
