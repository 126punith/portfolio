"use client";

import { useEffect, useState } from "react";
import { HiMoon, HiSun, HiMenuAlt3, HiX } from "react-icons/hi";
import { resume } from "@/data/resume";
import { useTheme } from "./ThemeProvider";

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["top", ...resume.nav.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const themeLabel = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-border bg-[var(--nav)] backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-xl tracking-tight text-foreground"
        >
          {resume.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {resume.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                active === item.id
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            className="icon-btn ml-2"
          >
            {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
          <a href="#contact" className="btn btn-primary btn-sm ml-2">
            Hire me
          </a>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            className="icon-btn"
          >
            {theme === "dark" ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="icon-btn"
          >
            {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-border bg-[var(--nav)] px-5 pb-5 pt-2 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col">
            {resume.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`flex min-h-12 items-center border-b border-border text-base ${
                    active === item.id ? "text-accent" : "text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-4 w-full"
          >
            Hire me
          </a>
        </nav>
      )}
    </header>
  );
}
