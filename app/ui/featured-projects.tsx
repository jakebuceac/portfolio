import Image from "next/image";
import ProjectCard from "@/app/ui/project-card";

export default function FeaturedProjects() {
    const projects = [
        {
            title: "in2tel Customer Portal",
            description: "Redesigned and rewrote a customer portal that centralises all telecommunication services in one place.",
            imageSrc: "/in2tel-preview.png",
            imageAlt: "in2tel Customer Project Preview",
            technologies: ["PHP", "JavaScript", "Laravel", "Livewire", "Alpine.js", "Bootstrap", "MySQL", "Redis"],
            caseStudyLink: "https://in2tel.ie/in2tel-launches-new-customer-portal/",
            gitHubLink: null
        },
        {
            title: "American Red Cross Blood Donor App",
            description: "Maintained and supported the API powering the American Red Cross mobile app, ensuring reliable data delivery and seamless integration with the app’s front-end features.",
            imageSrc: "/blood-preview.png",
            imageAlt: "American Red Cross Blood Donor Project Preview",
            technologies: ["PHP", "Laravel", "MySQL", "Redis"],
            caseStudyLink: "https://3sidedcube.com/projects/saving-lives-with-the-worlds-first-blood-tracking-app",
            gitHubLink: null
        },
        {
            title: "E-Card Generator App",
            description: "Designed and built a web app that integrated with OpenAI's Text to Image API, to automatically create e-cards.",
            imageSrc: "/e-card-generator-preview.png",
            imageAlt: "American Red Cross Blood Donor Project Preview",
            technologies: ["PHP", "JavaScript", "Laravel", "React.js", "Tailwind CSS", "MySQL", "DigitalOcean"],
            caseStudyLink: "",
            gitHubLink: "https://github.com/jakebuceac/e-card-generator-app"
        },
    ];

    return (
        <div>
            <h3 className="text-2xl md:text-3xl font-semibold leading-snug">Featured Projects</h3>
            <div className="mt-5 space-y-5">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    );
}