interface SectionHeadingProps {
  title: string;
  highlight: string;
  bgText?: string;
  compact?: boolean;
  centered?: boolean;
  start?: boolean;
}

export function SectionHeading({
  title,
  highlight,
  bgText,
  compact = false,
  centered = false,
  start = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`relative w-full shrink-0 overflow-hidden ${
        compact ? "mb-3 min-h-0 sm:mb-4 sm:min-h-[2.5rem]" : "mb-[clamp(0.75rem,2vh,1.5rem)] min-h-0 sm:min-h-[3.5rem] md:min-h-[4rem]"
      }`}
    >
      {bgText ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden max-w-[min(52%,22rem)] items-center justify-end overflow-hidden text-right text-[clamp(1.5rem,5vw,3.25rem)] font-extrabold uppercase leading-none tracking-widest text-foreground/[0.05] md:flex"
        >
          <span className="truncate">{bgText}</span>
        </span>
      ) : null}
      <h2
        className={`relative z-10 w-full max-w-[min(100%,36rem)] font-bold text-fluid-heading ${
          start
            ? "mx-auto text-center md:mx-0 md:text-left"
            : centered
              ? "mx-auto text-center"
              : "mx-auto text-center md:mx-0 md:text-left"
        }`}
      >
        {title}{" "}
        <span className="text-accent">{highlight}</span>
      </h2>
    </div>
  );
}


