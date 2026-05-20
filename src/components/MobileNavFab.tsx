"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";

const STORAGE_KEY = "portfolio-mobile-nav-pos-v7";
const SIZE = 48;
const EDGE = 12;
const TOP_OFFSET = 80;
const STICKY_TOP = 12;
const TAP_THRESHOLD = 8;

type Position = { x: number; y: number };

function getSafeTop() {
  return window.visualViewport?.offsetTop ?? 0;
}

function getTopForScroll(scrollY: number) {
  const safeTop = getSafeTop();
  const collapseDistance = TOP_OFFSET - STICKY_TOP;
  if (scrollY <= collapseDistance) {
    return TOP_OFFSET + safeTop - scrollY;
  }
  return STICKY_TOP + safeTop;
}
function defaultPosition(scrollY = 0): Position {
  return { x: EDGE, y: getTopForScroll(scrollY) };
}

function clampPosition(x: number, y: number): Position {
  const safeTop = getSafeTop();
  const minY = STICKY_TOP + safeTop;
  const maxX = window.innerWidth - SIZE - EDGE;
  const maxY = window.innerHeight - SIZE - EDGE;
  return {
    x: Math.min(maxX, Math.max(EDGE, x)),
    y: Math.min(maxY, Math.max(minY, y)),
  };
}

function loadPosition(): { pos: Position; userPlaced: boolean } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { pos: defaultPosition(), userPlaced: false };
    }
    const parsed = JSON.parse(raw) as {
      x?: number;
      y?: number;
      custom?: boolean;
    };
    if (typeof parsed.x !== "number" || typeof parsed.y !== "number") {
      return { pos: defaultPosition(), userPlaced: false };
    }
    return {
      pos: clampPosition(parsed.x, parsed.y),
      userPlaced: Boolean(parsed.custom),
    };
  } catch {
    return { pos: defaultPosition(), userPlaced: false };
  }
}

interface MobileNavFabProps {
  menuOpen: boolean;
  onToggle: () => void;
}

export function MobileNavFab({ menuOpen, onToggle }: MobileNavFabProps) {
  const [pos, setPos] = useState<Position | null>(null);
  const userPlacedRef = useRef(false);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    originX: number;
    originY: number;
    moved: boolean;
  } | null>(null);

  const persist = useCallback((position: Position) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...position, custom: true }),
    );
  }, []);

  const updateFromScroll = useCallback(() => {
    if (userPlacedRef.current) return;
    setPos((current) => {
      const base = current ?? defaultPosition();
      return { x: base.x, y: getTopForScroll(window.scrollY) };
    });
  }, []);

  useLayoutEffect(() => {
    const { pos: loaded, userPlaced } = loadPosition();
    userPlacedRef.current = userPlaced;
    setPos(loaded);

    const onScroll = () => updateFromScroll();
    const onResize = () => {
      setPos((current) =>
        clampPosition(current?.x ?? EDGE, current?.y ?? getTopForScroll(window.scrollY)),
      );
      updateFromScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.visualViewport?.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
    };
  }, [updateFromScroll]);

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0 || !pos) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      originX: pos.x,
      originY: pos.y,
      moved: false,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag) return;

    const dx = e.clientX - drag.startX;
    const dy = e.clientY - drag.startY;
    if (Math.hypot(dx, dy) > TAP_THRESHOLD) drag.moved = true;
    setPos(clampPosition(drag.originX + dx, drag.originY + dy));
  };

  const finishPointer = (e: React.PointerEvent<HTMLButtonElement>) => {
    const drag = dragRef.current;
    if (!drag || !pos) return;

    dragRef.current = null;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }

    const next = clampPosition(
      drag.originX + (e.clientX - drag.startX),
      drag.originY + (e.clientY - drag.startY),
    );
    setPos(next);

    if (drag.moved) {
      userPlacedRef.current = true;
      persist(next);
    } else {
      onToggle();
    }
  };

  if (!pos) return null;

  return (
    <button
      type="button"
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
      aria-controls="mobile-nav-drawer"
      className={`mobile-nav-toggle mobile-nav-toggle--fab touch-none select-none ${
        menuOpen ? "mobile-nav-toggle--open" : ""
      }`}
      style={{ left: pos.x, top: pos.y }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finishPointer}
      onPointerCancel={finishPointer}
    >
      <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
      <span className="mobile-nav-toggle__bars" aria-hidden>
        <span />
        <span />
        <span />
      </span>
    </button>
  );
}
