'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/app/ui/button";
import * as Tabs from "@radix-ui/react-tabs";
import Card from '@/app/ui/card';

export default function Skills() {
    const techStack = [
        { 
            label: 'Languages', 
            content: [
                { name: "PHP", icon: "/icons/php-icon.svg" },
                { name: "Go", icon: "/icons/go-icon.svg" },
                { name: "HTML", icon: "/icons/html-icon.svg" },
                { name: "CSS", icon: "/icons/css-icon.svg" },
                { name: "JavaScript", icon: "/icons/javascript-icon.svg" },
                { name: "TypeScript", icon: "/icons/typescript-icon.svg" },
            ]
        },
        {
            label: 'Frameworks & Libraries',
            content: [
                { name: "Laravel", icon: "/icons/laravel-icon.svg" },
                { name: "Symfony", icon: "/icons/symfony-icon.svg" },
                { name: "React.js", icon: "/icons/reactjs-icon.svg" },
                { name: "Next.js", icon: "/icons/nextjs-icon.svg" },
                { name: "Node.js", icon: "/icons/nodejs-icon.svg" },
                { name: "Express.js", icon: "/icons/expressjs-icon.svg" },
                { name: "Livewire", icon: "/icons/livewire-icon.svg" },
                { name: "Alpine.js", icon: "/icons/alpinejs-icon.svg" },
                { name: "Tailwind CSS", icon: "/icons/tailwind-icon.svg" },
                { name: "Bootstrap", icon: "/icons/bootstrap-icon.svg" },
            ]
        },
        {
            label: 'Infrastructure & Data',
            content: [
                { name: "MySQL", icon: "/icons/mysql-icon.svg" },
                { name: "Redis", icon: "/icons/redis-icon.svg" },
                { name: "Docker", icon: "/icons/docker-icon.svg" },
                { name: "GitHub Actions", icon: "/icons/github-actions-icon.svg" },
                { name: "DigitalOcean", icon: "/icons/digital-ocean-icon.svg" },
                { name: "Vercel", icon: "/icons/vercel-icon.svg" },
            ]
        }
        
    ];
    const sectionRef = useRef<HTMLDivElement>(null);
    const [, setVisible] = useState(false);
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // 50% visible triggers animation
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Card className='min-h-[460px]'>
        <div ref={sectionRef}>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                Soft Skills
            </h3>
            <div className='mt-5'>
                <Tabs.Root defaultValue="Languages">
                    <Tabs.List aria-label="Tech Stack Tabs" className='flex flex-wrap gap-2'>
                        {techStack.map((tech) => (
                            <Tabs.Trigger 
                                key={tech.label} 
                                value={tech.label} 
                                className="mr-2 cursor-pointer"
                                asChild
                            >
                                <Button className='tabs-trigger-button border-2 border-orange-600 text-orange-600 bg-transparent hover:bg-orange-600 hover:text-white data-[state=active]:bg-orange-600 data-[state=active]:text-white'>{tech.label}</Button>
                            </Tabs.Trigger>
                        ))}
                    </Tabs.List>
                    {techStack.map((tech) => (
                        <Tabs.Content 
                            key={tech.label} 
                            value={tech.label} 
                            className="mt-10"
                        >
                            <motion.div
                                className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {tech.content.map((item) => (
                                    <motion.div
                                        key={item.name}
                                        className="flex flex-col items-center bg-gray-50 shadow rounded-lg py-3"
                                        variants={itemVariants}
                                    >
                                        <div className="mb-2 relative">
                                            <Image src={item.icon} alt={`${item.name} icon`} width={50} height={50} />
                                        </div>
                                        <small>{item.name}</small>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </Tabs.Content>
                    ))}
                </Tabs.Root>
            </div>
        </div>
    </Card>
  );
}