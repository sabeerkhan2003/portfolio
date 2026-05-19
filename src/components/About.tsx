import { personalInfo } from "@/data/portfolio";
import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { WhatImDoing } from "./WhatImDoing";

export function About() {
  return (
    <div className="w-full shrink-0 space-y-[clamp(1.25rem,3vh,2rem)]">
      <SectionHeading title="About" highlight="me" />

      <FadeIn>
        {/* <h3 className="mb-3 text-fluid-sub font-semibold text-accent">Information About me</h3> */}
        <p className="max-w-4xl text-fluid-body leading-relaxed text-muted">{personalInfo.about}</p>
      </FadeIn>

      <WhatImDoing />
    </div>
  );
}
