"use client";

import { navSections } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const icons = {
  home: (
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  ),
  user: (
    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  ),
  journey: (
    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  ),
  skills: (
    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  ),
  briefcase: (
    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6" />
  ),
  certificate: (
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  ),
  mail: (
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  ),
};

function NavIcon({ icon }: { icon: keyof typeof icons }) {
  return (
    <svg
      className="h-5 w-5 shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden
    >
      {icons[icon]}
    </svg>
  );
}

export function Navigation() {
  const [activeId, setActiveId] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navSections.map((s) => s.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: isMobile ? "-15% 0px -25% 0px" : "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  }, []);

  return (
    <>
      {/* Desktop side rail */}
      <nav aria-label="Section navigation" className="nav-rail">
        {navSections.map(({ id, label, icon }) => (
          <button
            key={id}
            type="button"
            title={label}
            aria-label={label}
            aria-current={activeId === id ? "true" : undefined}
            onClick={() => scrollTo(id)}
            className={`nav-btn ${
              activeId === id
                ? "border-accent bg-accent text-white shadow-lg"
                : "border-border bg-secondary text-muted hover:border-accent hover:text-accent"
            }`}
          >
            <NavIcon icon={icon} />
          </button>
        ))}
      </nav>

      {/* Mobile: floating menu toggle — position via CSS vars in globals.css */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          className={`mobile-nav-toggle ${menuOpen ? "mobile-nav-toggle--open" : ""}`}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span className="mobile-nav-toggle__bars" aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>

        <AnimatePresence>
          {menuOpen ? (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                className="mobile-nav-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMenuOpen(false)}
              />

              <motion.nav
                id="mobile-nav-drawer"
                aria-label="Mobile section navigation"
                className="mobile-nav-drawer"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
              >
                <div className="mobile-nav-drawer__header">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Navigate
                  </p>
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                    className="mobile-nav-drawer__close"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <ul className="mobile-nav-drawer__list">
                  {navSections.map(({ id, label, icon }) => {
                    const isActive = activeId === id;
                    return (
                      <li key={id}>
                        <button
                          type="button"
                          aria-current={isActive ? "true" : undefined}
                          onClick={() => scrollTo(id)}
                          className={`mobile-nav-drawer__item ${
                            isActive ? "mobile-nav-drawer__item--active" : ""
                          }`}
                        >
                          <span
                            className={`mobile-nav-drawer__icon ${
                              isActive ? "mobile-nav-drawer__icon--active" : ""
                            }`}
                          >
                            <NavIcon icon={icon} />
                          </span>
                          <span className="mobile-nav-drawer__label">{label}</span>
                          {isActive ? (
                            <span className="mobile-nav-drawer__dot" aria-hidden />
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <p className="mobile-nav-drawer__footer text-xs text-muted">
                  Tap a section to jump
                </p>
              </motion.nav>
            </>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
}
