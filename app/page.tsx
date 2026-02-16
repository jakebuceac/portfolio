'use client';

import { motion } from 'motion/react';
import Nav from "@/app/ui/nav";
import About from "@/app/ui/about";
import FeaturedProjects from "@/app/ui/featured-projects";
import { Button } from "@/app/ui/button";
import Contact from "@/app/ui/contact";
import Skills from "@/app/ui/skills";
import Socials from "@/app/ui/socials";
import { FaDownload } from 'react-icons/fa6';

export default function Home() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Nav />
      <main className="pt-32 md:pt-40 overflow-x-hidden">
        <div className="max-w-5xl mx-auto space-y-20 md:space-y-40">
          <div className="flex justify-center px-4">
            <div className='flex-1 text-center max-w-3xl'>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900">
                Hi, I&apos;m Jake. <span className="wave-hand inline-block">👋</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
                Software Engineer with 3+ years of experience building scalable web platforms and resilient backend systems.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button href="/Jake Buceac CV.pdf" download>
                  <div className="flex items-center gap-2">
                    Download My CV 
                    <FaDownload size={14} />
                  </div>
                </Button>
                <Button onClick={handleContactClick} className='border-2 border-orange-600 text-orange-600 bg-transparent hover:bg-orange-50'>Contact Me</Button>
              </div>
            </div>
          </div>

          <section id="about" className="p-4">
            <About />
          </section>

          <section id="skills" className="scroll-mt-32 md:scroll-mt-50 p-4">
            <motion.section
              initial={{ opacity: 0, x: -50}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Skills />
            </motion.section>
          </section>

          <section
            id="projects"
            className="scroll-mt-32 p-4"
          >
            <FeaturedProjects />
          </section>

          <section id="contact" className="scroll-mt-32 p-4 lg:mb-32">
            <motion.section
              initial={{ opacity: 0, x: -50}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex lg:flex-row flex-col gap-10 lg:gap-20 items-stretch">
                <div className="flex-1 lg:max-w-xs">
                  <Socials />
                </div>
                <div className="flex-1 md:max-w-auto order-first lg:order-last">
                  <Contact />
                </div>
              </div>
            </motion.section>
          </section>
          
        </div>
      </main>
    </>
  );
}
