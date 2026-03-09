import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';

import { ScrollReveal } from '@/components/ui/scroll-reveal';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container mx-auto px-4 md:px-8">
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* Significantly reduced space between About and Skills (Tools) */}

        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        <Separator className="my-12 md:my-16 opacity-50" />

        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <Separator className="my-12 md:my-16 opacity-50" />

        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        <Separator className="my-12 md:my-16 opacity-50" />

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </div>
    </div>
  );
}
