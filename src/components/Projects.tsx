"use client";

import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { SiNpm } from "react-icons/si";
import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

type Project = (typeof resume.projects)[number];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary btn-sm"
      >
        <SiNpm aria-hidden />
        View on npm
        <FiArrowUpRight size={14} aria-hidden />
      </a>
      {"github" in project && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost btn-sm"
        >
          <FiGithub aria-hidden />
          Source
        </a>
      )}
    </div>
  );
}

function Highlights({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((h) => (
        <li
          key={h}
          className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent/70"
        >
          {h}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const [featured, ...rest] = resume.projects;

  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-24">
      <FadeIn>
        <p className="eyebrow">Open Source</p>
        <h2 className="section-heading">Libraries I maintain</h2>
        <p className="mt-4 max-w-2xl text-muted">
          390K+ total npm downloads across published React Native packages.
        </p>
      </FadeIn>

      <FadeIn className="mt-10">
        <article className="card card-interactive relative overflow-hidden p-6 sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
            <div>
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Flagship
              </span>
              <h3 className="mt-4 font-mono text-lg font-medium text-foreground sm:text-xl">
                {featured.name}
              </h3>
              <p className="mt-1 text-xs text-muted">{featured.period}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">
                {featured.description}
              </p>
              <ProjectLinks project={featured} />
            </div>
            <div className="flex flex-col justify-center gap-6 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div>
                <p className="font-[family-name:var(--font-display)] text-5xl tracking-tight text-accent sm:text-6xl">
                  {featured.downloads.replace(",000", "K")}
                </p>
                <p className="mt-1 text-sm text-muted">total npm downloads</p>
              </div>
              <Highlights items={featured.highlights} />
            </div>
          </div>
        </article>
      </FadeIn>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.06} className="h-full">
            <article className="card card-interactive flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-mono text-sm font-medium text-foreground sm:text-base">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted">{project.period}</p>
                </div>
                <p className="shrink-0 text-right">
                  <span className="block font-[family-name:var(--font-display)] text-2xl tracking-tight text-foreground">
                    {project.downloads}
                  </span>
                  <span className="text-xs text-muted">downloads</span>
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex-1 border-t border-border pt-4">
                <Highlights items={project.highlights} />
              </div>
              <ProjectLinks project={project} />
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
