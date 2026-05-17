import { personalInfo } from "@/data/portfolio";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { StatsGrid } from "./StatsGrid";

export function Hero() {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center gap-6 sm:gap-8 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 xl:gap-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/3 h-[min(50vh,420px)] w-[min(70vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <FadeIn className="relative z-10 flex flex-col items-center overflow-visible text-center lg:items-start lg:text-left">
        <p className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent sm:mb-4 sm:px-5 sm:py-2 sm:text-fluid-body">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
          {personalInfo.location} · Open to opportunities
        </p>

        <h1 className="text-fluid-hero font-bold tracking-tight">
          Hi, I&apos;m <br />
          <span className="text-accent">{personalInfo.name}</span>
          <br />
          <span className="text-foreground">{personalInfo.role}</span>
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:mt-5 sm:text-fluid-body lg:mt-6">
          {personalInfo.tagline} {personalInfo.bio}
        </p>

        <div className="mt-5 flex w-full max-w-sm flex-col items-stretch gap-3 sm:mt-7 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4 lg:mt-8 lg:justify-start">
          <Link href={personalInfo.resumeUrl} download className="btn-primary w-full sm:w-auto">
            Download Resume
            <svg className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </Link>
          <Link href="#portfolio" className="btn-secondary w-full sm:w-auto">
            View My Work
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.12} className="relative z-10 w-full">
        <StatsGrid />
      </FadeIn>
    </div>
  );
}

