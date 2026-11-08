"use client";

import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-16 sm:py-24">
      <FadeIn>
        <p className="eyebrow">Impact</p>
        <h2 className="section-heading">Outcomes I&apos;ve delivered</h2>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resume.achievements.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.05} className="h-full">
            <div className="card card-interactive h-full p-6">
              <p className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-accent">
                {item.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
