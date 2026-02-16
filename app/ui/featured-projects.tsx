import ProjectCard from "@/app/ui/project-card";
import Card from "@/app/ui/card";

export default function FeaturedProjects() {
    const projects = [

        {
            title: "Portfolio (Front End)",
            description: "A modern portfolio website, showcasing my front end development work. Features smooth animations, responsive design, and integrated sections for about, skills, projects, and contact.",
            imageSrc: "/portfolio-preview.png",
            imageAlt: "Portfolio Project Preview",
            technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Tailwind CSS", "Vercel"],
            caseStudyLink: null,
            gitHubLink: "https://github.com/jakebuceac/portfolio"
        },
        {
            title: "in2tel Customer Portal (Full Stack)",
            description: "Redesigned and rewrote a centralised telecom portal serving as the primary interface for both customers and internal staff.",
            imageSrc: "/in2tel-preview.png",
            imageAlt: "in2tel Customer Project Preview",
            technologies: ["PHP", "HTML", "CSS", "JavaScript", "Laravel", "Livewire", "Alpine.js", "Bootstrap", "MySQL", "Redis"],
            caseStudyLink: "https://in2tel.ie/in2tel-launches-new-customer-portal/",
            gitHubLink: null
        },
        {
            title: "American Red Cross Blood Donor App (Back End)",
            description: "Maintained and supported the API powering the American Red Cross Blood Donor mobile app, ensuring reliable data delivery and seamless integration with the app’s front-end.",
            imageSrc: "/blood-preview.png",
            imageAlt: "American Red Cross Blood Donor Project Preview",
            technologies: ["PHP", "Laravel", "MySQL", "Redis"],
            caseStudyLink: "https://3sidedcube.com/projects/saving-lives-with-the-worlds-first-blood-tracking-app",
            gitHubLink: null
        },
        {
            title: "E-Card Generator Web App (Full Stack)",
            description: "Engineered a full-stack application exploring the intersection of Generative AI and automated design, using OpenAI's Image API to programmatically generate and deliver personalised e-cards.",
            imageSrc: "/e-card-generator-preview.png",
            imageAlt: "E-Card Generator Web App Project Preview",
            technologies: ["PHP", "HTML", "CSS", "JavaScript", "Laravel", "React.js", "Tailwind CSS", "MySQL", "DigitalOcean", "GitHub Actions"],
            caseStudyLink: null,
            gitHubLink: "https://github.com/jakebuceac/e-card-generator-app"
        },
    ];

    return (
        <Card>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h3>
            <div className="mt-5 space-y-10">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </Card>
    );
}