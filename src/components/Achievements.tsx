"use client";

import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 py-20 sm:py-28">
      <FadeIn>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Impact
        </p>
        <h2 className="section-heading">Key achievements</h2>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resume.achievements.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.05}>
            <div className="border border-border bg-card p-6">
              <p className="font-[family-name:var(--font-display)] text-3xl tracking-tight text-accent sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-muted">{item.detail}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
