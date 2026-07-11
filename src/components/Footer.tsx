"use client";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { SiNpm, SiX } from "react-icons/si";
import { resume } from "@/data/resume";
import { FadeIn } from "./FadeIn";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-border py-20">
      <FadeIn>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          Contact
        </p>
        <h2 className="section-heading">Let&apos;s work together</h2>
        <p className="mt-4 max-w-xl text-muted">{resume.availability}</p>

        <div className="mt-8 flex flex-col gap-3 text-sm text-muted sm:flex-row sm:flex-wrap sm:gap-8">
          <a
            href={`mailto:${resume.email}`}
            className="inline-flex items-center gap-2 hover:text-accent"
          >
            <FiMail className="text-accent" />
            {resume.email}
          </a>
          <a
            href={`tel:${resume.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 hover:text-accent"
          >
            <FiPhone className="text-accent" />
            {resume.phone}
          </a>
          <span className="inline-flex items-center gap-2">
            <FiMapPin className="text-accent" />
            {resume.location}
          </span>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href={resume.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={resume.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href={resume.social.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-muted hover:text-accent"
          >
            <SiX size={18} />
          </a>
          <a
            href={resume.social.npm}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="npm"
            className="text-muted hover:text-accent"
          >
            <SiNpm size={20} />
          </a>
        </div>
      </FadeIn>

      <p className="mt-16 text-xs text-muted">
        © {new Date().getFullYear()} {resume.name}. Built with Next.js &
        Tailwind CSS.
      </p>
    </footer>
  );
}
