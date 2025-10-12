import About from "@/app/ui/about";
import FeaturedProjects from "./ui/featured-projects";
import { Button } from "@/app/ui/button";
import Contact from "@/app/ui/contact";
import Skills from "@/app/ui/skills";

export default function Home() {
  return (
    <main className="pt-26 md:pt-30">
      <div className="space-y-15">
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
        <section id="about" className="scroll-mt-16 md:scroll-mt-20  p-4 mt-30 fade-down">
          <About />
        </section>
        <section id="skills" className="scroll-mt-16 md:scroll-mt-20 p-4">
            <Skills />
        </section>
        <section id="projects" className="scroll-mt-16 md:scroll-mt-20 p-4">
          <FeaturedProjects />
        </section>
      </div>
    </main>
  );
}
