"use client";

import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <FadeIn>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Experience
        </p>
        <h2 className="section-heading">Where I&apos;ve shipped</h2>
      </FadeIn>

      <ol className="mt-12 space-y-0">
        {resume.experience.map((job, i) => (
          <FadeIn key={`${job.company}-${job.period}`} delay={i * 0.04}>
            <li className="relative grid gap-4 border-l border-border py-8 pl-6 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-8 sm:pl-8">
              <span className="absolute -left-[5px] top-10 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
              <div className="text-sm text-muted">
                <p className="font-medium text-foreground/80">{job.period}</p>
                <p className="mt-1">{job.location}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  {job.role}
                </h3>
                <p className="mt-0.5 text-accent">{job.company}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-accent/70"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}
