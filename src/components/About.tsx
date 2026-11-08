"use client";

import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-24">
      <FadeIn>
        <p className="eyebrow">About</p>
        <h2 className="section-heading">Professional summary</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {resume.summary}
        </p>
      </FadeIn>
    </section>
  );
}
