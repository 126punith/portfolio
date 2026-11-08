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
      <Nav />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <RecentUpdates />
        <Achievements />
        <Education />
        <Footer />
      </main>
    </>
  );
}
