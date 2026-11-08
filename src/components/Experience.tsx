"use client";

import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

const isCurrent = (period: string) => period.includes("Present");

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-16 sm:py-24">
      <FadeIn>
        <p className="eyebrow">Experience</p>
        <h2 className="section-heading">Where I&apos;ve shipped</h2>
      </FadeIn>

      <ol className="mt-10">
        {resume.experience.map((job, i) => (
          <FadeIn key={`${job.company}-${job.period}`} delay={i * 0.04}>
            <li className="relative grid gap-3 border-l border-border pb-10 pl-6 last:pb-0 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-8 sm:pl-8">
              <span
                aria-hidden
                className={`absolute -left-[6px] top-1.5 h-3 w-3 rounded-full border-2 border-accent ${
                  isCurrent(job.period) ? "bg-accent" : "bg-background"
                }`}
              />
              <div className="text-sm text-muted">
                <p className="font-medium text-foreground/85">{job.period}</p>
                <p className="mt-0.5">{job.location}</p>
              </div>
              <div className="card p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {job.role}
                  </h3>
                  {isCurrent(job.period) && (
                    <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-0.5 font-medium text-accent">{job.company}</p>
                <ul className="mt-4 space-y-2.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent/70"
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
