"use client";

import { useState } from "react";
import {
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { SiNpm, SiX } from "react-icons/si";
import { mailtoLink, resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

const socials = [
  { href: resume.social.github, label: "GitHub", icon: <FiGithub size={19} /> },
  { href: resume.social.linkedin, label: "LinkedIn", icon: <FiLinkedin size={19} /> },
  { href: resume.social.x, label: "X", icon: <SiX size={16} /> },
  { href: resume.social.npm, label: "npm", icon: <SiNpm size={19} /> },
];

export function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(resume.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${resume.email}`;
    }
  };

  return (
    <footer id="contact" className="scroll-mt-24 pb-10 pt-16 sm:pt-24">
      <FadeIn>
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
          />
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading max-w-2xl">
            Need a React Native specialist?
          </h2>
          <p className="mt-4 max-w-xl text-muted">{resume.availability}.</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={mailtoLink("Opportunity for Punith: React Native role")}
              className="btn btn-primary"
            >
              <FiMail aria-hidden />
              Discuss a role
            </a>
            <a
              href={mailtoLink("Project inquiry: React Native")}
              className="btn btn-secondary"
            >
              Discuss a project
            </a>
            <a
              href={resume.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <FiLinkedin aria-hidden />
              Message on LinkedIn
            </a>
          </div>

          <div className="mt-10 grid gap-3 border-t border-border pt-8 text-sm sm:grid-cols-3">
            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex min-h-11 items-center gap-2 text-left text-muted transition-colors hover:text-accent"
            >
              <FiMail className="shrink-0 text-accent" aria-hidden />
              <span className="truncate">{resume.email}</span>
              {copied ? (
                <FiCheck className="shrink-0 text-accent" aria-hidden />
              ) : (
                <FiCopy className="shrink-0 opacity-60 group-hover:opacity-100" aria-hidden />
              )}
              <span className="sr-only" aria-live="polite">
                {copied ? "Email copied" : "Copy email"}
              </span>
            </button>
            <a
              href={`tel:${resume.phone.replace(/\s/g, "")}`}
              className="inline-flex min-h-11 items-center gap-2 text-muted transition-colors hover:text-accent"
            >
              <FiPhone className="text-accent" aria-hidden />
              {resume.phone}
            </a>
            <span className="inline-flex min-h-11 items-center gap-2 text-muted">
              <FiMapPin className="text-accent" aria-hidden />
              {resume.location} · Remote-ready
            </span>
          </div>
        </div>
      </FadeIn>

      <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {resume.name}. Built with Next.js &amp;
          Tailwind CSS.
        </p>
        <div className="flex items-center gap-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="icon-btn"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
