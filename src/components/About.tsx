"use client";

import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <FadeIn>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          About
        </p>
        <h2 className="section-heading">Professional summary</h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {resume.summary}
        </p>
        <p className="mt-6 max-w-3xl text-sm text-muted">
          {resume.availability}
        </p>
      </FadeIn>
    </section>
  );
}
