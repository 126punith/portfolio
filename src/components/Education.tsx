"use client";

import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-16 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn>
          <p className="eyebrow">Education</p>
          <h2 className="section-heading">Background</h2>
          <div className="card mt-8 p-6">
            <h3 className="text-lg font-semibold text-foreground">
              {resume.education.degree}
            </h3>
            <p className="mt-1 text-accent">{resume.education.school}</p>
            <p className="mt-2 text-sm text-muted">
              {resume.education.location} · {resume.education.period}
            </p>
          </div>

          <h3 className="mt-10 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
            Languages
          </h3>
          <ul className="mt-4 space-y-3">
            {resume.languages.map((lang) => (
              <li
                key={lang.name}
                className="flex flex-col gap-0.5 border-b border-border pb-3 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <span className="text-foreground">{lang.name}</span>
                <span className="text-sm text-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="eyebrow">More</p>
          <h2 className="section-heading">Additional info</h2>
          <ul className="mt-8 space-y-4">
            {resume.additional.map((item) => (
              <li
                key={item}
                className="border-l-2 border-accent/40 pl-4 text-sm leading-relaxed text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
