"use client";

import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-28">
      <FadeIn>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Skills
        </p>
        <h2 className="section-heading">Technical toolkit</h2>
      </FadeIn>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {resume.skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.05}>
            <h3 className="mb-3 text-sm font-medium text-foreground">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
