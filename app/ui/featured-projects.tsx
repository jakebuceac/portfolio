import ProjectCard from "@/app/ui/project-card";
import Card from "@/app/ui/card";
import { motion } from "motion/react";

export default function FeaturedProjects() {
    const projects = [
        {
            title: "Portfolio (Frontend)",
            description: "A modern portfolio website, showcasing my frontend development work. Features smooth animations, responsive design, and integrated sections for about, skills, projects, and contact.",
            imageSrc: "/portfolio-preview.png",
            imageAlt: "Portfolio Project Preview",
            technologies: [ "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "HTML", "CSS", "Vercel"],
            caseStudyLink: null,
            gitHubLink: "https://github.com/jakebuceac/portfolio"
        },
        {
            title: "in2tel Customer Portal (Full Stack)",
            description: "Redesigned and rewrote a centralised telecom portal serving as the primary interface for both customers and internal staff.",
            imageSrc: "/in2tel-preview.png",
            imageAlt: "in2tel Customer Project Preview",
            technologies: ["PHP", "Laravel", "Livewire", "Alpine.js", "JavaScript", "Bootstrap", "HTML", "CSS", "SQL", "MySQL", "Redis"],
            caseStudyLink: "https://in2tel.ie/in2tel-launches-new-customer-portal/",
            gitHubLink: null
        },
        {
            title: "American Red Cross Blood Donor App (Backend)",
            description: "Maintained and supported the API powering the American Red Cross Blood Donor mobile app, ensuring reliable data delivery and seamless integration with the app’s frontend.",
            imageSrc: "/blood-preview.png",
            imageAlt: "American Red Cross Blood Donor Project Preview",
            technologies: ["PHP", "Laravel", "SQL", "MySQL", "Redis", "AWS"],
            caseStudyLink: "https://3sidedcube.com/projects/saving-lives-with-the-worlds-first-blood-tracking-app",
            gitHubLink: null
        },
        {
            title: "E-Card Generator Web App (Full Stack)",
            description: "Engineered a full-stack application exploring the intersection of Generative AI and automated design, using OpenAI's Image API to programmatically generate and deliver personalised e-cards.",
            imageSrc: "/e-card-generator-preview.png",
            imageAlt: "E-Card Generator Web App Project Preview",
            technologies: ["PHP", "JavaScript", "Laravel", "React.js", "Tailwind CSS", "HTML", "CSS", "SQL", "MySQL", "GitHub Actions", "DigitalOcean"],
            caseStudyLink: null,
            gitHubLink: "https://github.com/jakebuceac/e-card-generator-app"
        },
    ];

    return (
        <Card>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h3>
            <div className="mt-5 space-y-15">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1, margin: "-50px" }}
                        transition={{ 
                            duration: 0.6, 
                            ease: 'easeOut',
                            delay: index === 0 ? 0.1 : 0 
                        }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </Card>
    );
}