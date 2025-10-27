import About from "@/app/ui/about";
import FeaturedProjects from "@/app/ui/featured-projects";
import { Button } from "@/app/ui/button";
import Contact from "@/app/ui/contact";
import Skills from "@/app/ui/skills";
import Socials from "@/app/ui/socials";

export default function Home() {
  return (
    <main className="pt-26 md:pt-30 min-h-screen">
      <div className="space-y-32">
        <section id="home" className="scroll-mt-16 md:scroll-mt-20 p-4">
          <div className="flex justify-center">
            <div className='flex-1 text-center'>
                <h1 className="text-5xl sm:text-7xl font-semibold leading-snug">
                    Hi, I&apos;m Jake. <span className="wave-hand">👋</span>
                </h1>
                <p className="mt-1 md:text-lg">
                    Software Engineer specialising in web development.
                </p>
                <div className="mt-5 space-x-4">
                    <Button className='bg-black text-white'>Download My CV</Button>
                    <Button className='border border-black'>Contact Me</Button>
                </div>
            </div>
          </div>
        </section>
        <section id="about" className="scroll-mt-50 p-4 mt-30 fade-down min-h-screen">
          <About />
        </section>
        <section id="skills" className="scroll-mt-50 p-4">
            <Skills />
        </section>
        <section id="projects" className="scroll-mt-32 p-4">
          <FeaturedProjects />
        </section>
        <section id="contact" className="scroll-mt-32 p-4 lg:mb-32">
          <div className="flex lg:flex-row flex-col gap-10 lg:gap-20">
            <div className="flex-1 lg:max-w-xs">
              <Socials />
            </div>
            <div className="md:max-w-auto flex-1 order-first lg:order-last">
              <Contact />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
