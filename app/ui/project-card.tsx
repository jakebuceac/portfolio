import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
  caseStudyLink: string | null | undefined;
  gitHubLink: string | null | undefined;
};

export default function ProjectCard({
    title,
    description,
    imageSrc,
    imageAlt,
    technologies,
    caseStudyLink,
    gitHubLink,
}: ProjectCardProps) {
    return (
        <div className="flex flex-col lg:flex-row gap-5 rounded-2xl border border-orange-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="lg:mr-4 mx-auto flex-shrink-0 rounded-xl border border-orange-200 shadow-sm overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={500}
                    height={500}
                    style={{ width: '450px', height: 'auto', objectFit: 'cover' }}
                />
            </div>
            <div className="max-w-xl flex flex-col lg:flex-1 justify-between">
                <div className="space-y-5">
                    <h4 className="text-2xl font-bold text-slate-900">{title}</h4>
                    <div className="flex flex-wrap gap-2">
                        <p className="text-slate-700 leading-relaxed">{description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-start">
                        {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full border border-orange-200"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex flex-row space-x-2">
                        {caseStudyLink && (
                            <a
                                href={caseStudyLink}
                                className="text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Case Study
                            </a>
                        )}
                        {gitHubLink && (
                            <>
                                <a
                                    href={gitHubLink}
                                    className="text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}