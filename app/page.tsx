'use client';

import { motion } from 'motion/react';
import About from "@/app/ui/about";
import FeaturedProjects from "@/app/ui/featured-projects";
import { Button } from "@/app/ui/button";
import Contact from "@/app/ui/contact";
import Skills from "@/app/ui/skills";
import Socials from "@/app/ui/socials";
import { FaDownload } from 'react-icons/fa6';

export default function Home() {
  return (
    <main className="pt-26 md:pt-30 overflow-x-hidden">
      <div className="space-y-32">
        <div className="flex justify-center">
          <div className='flex-1 text-center'>
            <h1 className="text-5xl sm:text-7xl font-semibold leading-snug">
              Hi, I&apos;m Jake. <span className="wave-hand">👋</span>
            </h1>
            <p className="mt-1 md:text-lg">
              Software Engineer specialising in web development.
            </p>
            <div className="mt-5 space-x-4">
              <Button className='bg-black text-white cursor-pointer'>
                <div className="flex items-center gap-2">
                  Download My CV 
                  <FaDownload size={12} />
                </div>
              </Button>
              <Button className='border border-black cursor-pointer'>Contact Me</Button>
            </div>
          </div>
        </div>

        <motion.section
          id="about"
          className="scroll-mt-50 p-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <About />
        </motion.section>

        <motion.section
          id="skills"
          className="scroll-mt-50 p-4"
          initial={{ opacity: 0, x: -100}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Skills />
        </motion.section>

        <motion.section
          id="projects"
          className="scroll-mt-32 p-4"
          initial={{ opacity: 0, x: 100}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <FeaturedProjects />
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-32 p-4 lg:mb-32"
          initial={{ opacity: 0, x: -100}}
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
      </div>
    </main>
  );
}
