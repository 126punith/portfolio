"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function RecentUpdates() {
  return (
    <section id="recent-updates" className="scroll-mt-24 py-20 sm:py-28">
      <FadeIn>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Latest
        </p>
        <h2 className="section-heading">Technical deep dives &amp; momentum</h2>
        <p className="mt-4 max-w-2xl text-muted">
          What I&apos;ve been shipping and writing about recently, from
          process-death-resilient background location to open-source milestones.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {resume.recentUpdates.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.06}>
            <article className="flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-accent/50">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                  {item.kind}
                </span>
                {"metric" in item && (
                  <span className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-accent">
                    {item.metric}
                  </span>
                )}
              </div>

              <h3 className="mt-3 text-lg font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted">{item.source}</p>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {item.summary}
              </p>

              {item.points.length > 0 && (
                <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                  {item.points.map((p) => (
                    <li key={p} className="text-xs leading-relaxed text-muted">
                      · {p}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-5">
                {item.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
                  >
                    {link.label}
                    <FiArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
