"use client";

import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-24">
      <FadeIn>
        <p className="eyebrow">Skills</p>
        <h2 className="section-heading">Technical toolkit</h2>
      </FadeIn>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resume.skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.05} className="h-full">
            <div className="card h-full p-5">
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="skill-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
