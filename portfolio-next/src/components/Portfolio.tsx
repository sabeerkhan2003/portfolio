import { projects, type Project } from "@/data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";

const liveProjects = projects.filter((p) => p.isLive);
const otherProjects = projects.filter((p) => !p.isLive);

function ExternalIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function VisitButton({
  href,
  label,
  compact = false,
}: {
  href: string;
  label: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={
        compact
          ? "inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-white"
          : "inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white shadow-accent transition-all duration-300"
      }
    >
      <ExternalIcon className={compact ? "h-3.5 w-3.5" : "h-4 w-4"} />
      Visit
    </Link>
  );
}

function MobileProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-between gap-2 border-t border-border/40 px-3 py-2.5 md:hidden">
      <p className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground">{project.title}</p>
      <div className="flex shrink-0 items-center gap-2">
        <VisitButton href={project.liveUrl} label={`Visit ${project.title} live`} compact />
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
          aria-label={`View ${project.title} on GitHub`}
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  variant,
}: {
  project: Project;
  index: number;
  variant: "live" | "default";
}) {
  const isLive = variant === "live";

  return (
    <FadeIn delay={index * 0.05}>
      <GlassCard
        as="article"
        className={`group overflow-hidden ${isLive ? "ring-1 ring-accent/50" : ""}`}
      >
        <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {isLive ? (
            <span className="absolute left-2 top-2 z-20 inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)]" aria-hidden />
              Live
            </span>
          ) : null}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden bg-gradient-to-t from-black/90 via-black/55 to-transparent px-3 pb-3 pt-12 transition-opacity duration-300 md:block md:group-hover:opacity-0">
            <h3 className="line-clamp-2 text-center text-sm font-semibold leading-snug text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.9)] sm:text-base">
              {project.title}
            </h3>
          </div>

          {isLive ? (
            <div className="absolute inset-0 z-20 hidden flex-col items-center justify-center gap-3 bg-black/50 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 md:flex">
              <VisitButton href={project.liveUrl} label={`Visit ${project.title} live`} />
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/30 bg-white/10 p-2 text-white transition-colors hover:bg-white/25"
                aria-label={`View ${project.title} on GitHub`}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </Link>
            </div>
          ) : (
            <div className="absolute inset-0 z-20 hidden flex-col items-center justify-center gap-3 bg-black/75 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 md:flex">
              <h3 className="px-3 text-center text-fluid-body font-semibold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.8)]">
                {project.title}
              </h3>
              <div className="flex gap-3">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/20 p-1.5 text-white hover:bg-white/40"
                  aria-label={`View ${project.title} live`}
                >
                  <ExternalIcon />
                </Link>
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white/20 p-1.5 text-white hover:bg-white/40"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
        <MobileProjectActions project={project} />
      </GlassCard>
    </FadeIn>
  );
}

export function Portfolio() {
  return (
    <div className="w-full">
      <SectionHeading title="My" highlight="Portfolio" compact />
      <p className="mb-[clamp(0.5rem,1.5vh,1rem)] text-fluid-body text-muted">
        Here is some of my Projects.
      </p>

      <h3 className="mb-3 text-fluid-sub font-semibold text-foreground">
        Live <span className="text-accent">Projects</span>
      </h3>
      <div className="mb-[clamp(1.25rem,3vh,2rem)] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {liveProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} variant="live" />
        ))}
      </div>

      {otherProjects.length > 0 ? (
        <>
          <h3 className="mb-3 text-fluid-sub font-semibold text-foreground">More Projects</h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {otherProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + liveProjects.length}
                variant="default"
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
