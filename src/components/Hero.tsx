"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { SiNpm, SiX } from "react-icons/si";
import { mailtoLink, resume } from "@/data/resume";
import profilePhoto from "@/assets/myProfile.jpeg";

const socials = [
  { href: resume.social.github, label: "GitHub", icon: <FiGithub size={19} /> },
  { href: resume.social.linkedin, label: "LinkedIn", icon: <FiLinkedin size={19} /> },
  { href: resume.social.x, label: "X", icon: <SiX size={16} /> },
  { href: resume.social.npm, label: "npm", icon: <SiNpm size={19} /> },
];

export function Hero() {
  const reduce = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="top"
      className="relative flex flex-col justify-center pb-14 pt-24 sm:pt-28 md:min-h-[92svh] md:pb-20"
    >
      <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-12 lg:gap-20">
        <motion.div
          className="order-2 w-full text-center md:order-1 md:text-left"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
        >
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <span className="status-pill">
              <span className="status-dot" aria-hidden />
              Open to remote roles
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm text-muted">
              <FiMapPin className="text-accent" aria-hidden />
              {resume.location}
            </span>
          </div>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-foreground">
            {resume.name}
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-accent">
            {resume.shortTitle} · iOS &amp; Android · TypeScript
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:mx-0">
            {resume.headline}
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:justify-start">
            <a
              href={mailtoLink("Opportunity for Punith: React Native role")}
              className="btn btn-primary"
            >
              <FiMail aria-hidden />
              Discuss a role
            </a>
            <a href="#projects" className="btn btn-secondary">
              View featured work
              <FiArrowRight aria-hidden />
            </a>
            <a
              href="/resume.pdf"
              download="Punith_Manthri_Resume.pdf"
              className="btn btn-ghost"
            >
              <FiDownload aria-hidden />
              Resume
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            {resume.proof.map((item) => (
              <div key={item.label} className="bg-card px-4 py-4 text-center md:text-left">
                <dt className="sr-only">{item.label}</dt>
                <dd>
                  <span className="block font-[family-name:var(--font-display)] text-2xl tracking-tight text-foreground sm:text-[1.75rem]">
                    {item.value}
                  </span>
                  <span className="mt-1 block text-xs text-muted">{item.label}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex items-center justify-center gap-1 md:-ml-3 md:justify-start">
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
        </motion.div>

        <motion.div
          className="order-1 shrink-0 md:order-2"
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease }}
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-full ring-1 ring-accent/40 ring-offset-4 ring-offset-background">
              <Image
                src={profilePhoto}
                alt={`${resume.name}, ${resume.shortTitle}`}
                width={300}
                height={300}
                priority
                className="size-[128px] object-cover sm:size-[168px] md:size-[240px] lg:size-[300px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
