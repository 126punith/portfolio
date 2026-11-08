"use client";

import { FiExternalLink } from "react-icons/fi";
import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <FadeIn>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Open Source
        </p>
        <h2 className="section-heading">Libraries I maintain</h2>
        <p className="mt-4 max-w-2xl text-muted">
          390K+ total npm downloads across published React Native packages.
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {resume.projects.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.06}>
            <article className="flex h-full flex-col border border-border bg-card p-6 transition-colors hover:border-accent/50">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-mono text-sm font-medium text-foreground sm:text-base">
                  {project.name}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on npm`}
                  className="shrink-0 text-muted transition-colors hover:text-accent"
                >
                  <FiExternalLink size={16} />
                </a>
              </div>

              <p className="mt-1 text-xs text-muted">{project.period}</p>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="mt-4 h-5"
                src={`https://img.shields.io/npm/dt/${project.npmPackage}?style=flat-square&color=0d9488`}
                alt={`${project.name} npm downloads`}
              />

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                {project.highlights.map((h) => (
                  <li key={h} className="text-xs leading-relaxed text-muted">
                    · {h}
                  </li>
                ))}
              </ul>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm text-accent hover:underline"
              >
                View on npm →
              </a>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
