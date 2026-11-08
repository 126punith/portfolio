"use client";

import { useState } from "react";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

const VISIBLE_POINTS = 2;

type Update = (typeof resume.recentUpdates)[number];

function UpdateCard({ item }: { item: Update }) {
  const [expanded, setExpanded] = useState(false);
  const hiddenCount = item.points.length - VISIBLE_POINTS;
  const points = expanded ? item.points : item.points.slice(0, VISIBLE_POINTS);
  const listId = `points-${item.kind.toLowerCase()}`;

  return (
    <article className="card card-interactive flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          {item.kind}
        </span>
        {"metric" in item && (
          <span className="font-[family-name:var(--font-display)] text-2xl tracking-tight text-foreground">
            {item.metric}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">
        {item.title}
      </h3>
      <p className="mt-1 font-mono text-xs text-muted">{item.source}</p>

      <p className="mt-4 text-sm leading-relaxed text-muted">{item.summary}</p>

      {points.length > 0 && (
        <ul id={listId} className="mt-4 space-y-2 border-t border-border pt-4">
          {points.map((p) => (
            <li
              key={p}
              className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent/70"
            >
              {p}
            </li>
          ))}
        </ul>
      )}

      {hiddenCount > 0 && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          aria-controls={listId}
          className="mt-3 inline-flex min-h-11 items-center gap-1 self-start text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
        >
          {expanded ? "Show less" : `Show ${hiddenCount} more`}
          <FiChevronDown
            aria-hidden
            className={`transition-transform ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {item.links.map((link, i) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-sm ${i === 0 ? "btn-secondary" : "btn-ghost"}`}
          >
            {link.label}
            <FiArrowUpRight size={14} aria-hidden />
          </a>
        ))}
      </div>
    </article>
  );
}

export function RecentUpdates() {
  return (
    <section id="recent-updates" className="scroll-mt-24 py-16 sm:py-24">
      <FadeIn>
        <p className="eyebrow">Latest</p>
        <h2 className="section-heading">Technical deep dives &amp; momentum</h2>
        <p className="mt-4 max-w-2xl text-muted">
          What I&apos;ve been shipping and writing about recently.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {resume.recentUpdates.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.06} className="h-full">
            <UpdateCard item={item} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
