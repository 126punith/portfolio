"use client";

import { useEffect, useState } from "react";
import { HiMoon, HiSun, HiMenuAlt3, HiX } from "react-icons/hi";
import { resume } from "@/data/resume";
import { useTheme } from "./ThemeProvider";

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border bg-[var(--nav)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-lg tracking-tight text-foreground"
        >
          {resume.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {resume.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md border border-border p-2 text-muted transition-colors hover:border-accent hover:text-accent"
          >
            {theme === "dark" ? <HiSun size={16} /> : <HiMoon size={16} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-md border border-border p-2 text-muted"
          >
            {theme === "dark" ? <HiSun size={16} /> : <HiMoon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="rounded-md border border-border p-2 text-muted"
          >
            {open ? <HiX size={18} /> : <HiMenuAlt3 size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-card px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {resume.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
