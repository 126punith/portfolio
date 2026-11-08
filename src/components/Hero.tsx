"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiDownload,
} from "react-icons/fi";
import { SiNpm, SiX } from "react-icons/si";
import { resume } from "@/data/resume";
import profilePhoto from "@/assets/myProfile.jpeg";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center pb-16 pt-28"
    >
      <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-12 lg:gap-16">
        <motion.div
          className="shrink-0"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full bg-accent/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-full ring-2 ring-accent/40 ring-offset-4 ring-offset-background">
              <Image
                src={profilePhoto}
                alt={`${resume.name} — ${resume.shortTitle}`}
                width={280}
                height={280}
                priority
                className="size-[160px] object-cover sm:size-[200px] md:size-[220px] lg:size-[260px]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full text-center md:text-left"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 flex items-center justify-center gap-2 text-sm text-muted md:justify-start">
            <FiMapPin className="text-accent" />
            {resume.location} · Remote-ready
          </p>

          <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,7vw,4.75rem)] leading-[0.95] tracking-[-0.03em] text-foreground">
            {resume.name}
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl md:mx-0 mx-auto">
            {resume.title}
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted/90 sm:text-base md:mx-0 mx-auto">
            5+ years shipping production React Native apps. Creator of{" "}
            <span className="text-accent">react-native-pdf-jsi</span> — 390K+ npm
            downloads. Open to remote roles.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={`mailto:${resume.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-[#041018] transition-opacity hover:opacity-90"
            >
              <FiMail />
              Email me
            </a>
            <a
              href="/resume.pdf"
              download="Punith_Manthri_CV.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <FiDownload />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
            <a
              href={resume.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={resume.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={resume.social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-muted transition-colors hover:text-accent"
            >
              <SiX size={18} />
            </a>
            <a
              href={resume.social.npm}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="npm"
              className="text-muted transition-colors hover:text-accent"
            >
              <SiNpm size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-muted md:block"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        Scroll
      </motion.div>
    </section>
  );
}
