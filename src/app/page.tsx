import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Experience from '@/components/sections/experience';
import Contact from '@/components/sections/contact';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container mx-auto px-4 md:px-8">
        <About />
        <Separator className="my-16 md:my-24" />
        <Skills />
        <Separator className="my-16 md:my-24" />
        <Projects />
        <Separator className="my-16 md:my-24" />
        <Experience />
        <Separator className="my-16 md:my-24" />
        <Contact />
      </div>
    </div>
  );
}
