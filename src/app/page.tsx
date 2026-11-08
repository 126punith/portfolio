import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { RecentUpdates } from "@/components/RecentUpdates";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-[var(--accent-contrast)]"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <Achievements />
        <Experience />
        <Projects />
        <Skills />
        <RecentUpdates />
        <About />
        <Education />
        <Footer />
      </main>
    </>
  );
}
