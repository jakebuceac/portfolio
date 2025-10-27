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
        <div className="flex flex-col lg:flex-row gap-5 rounded-lg bg-gray-50 p-4">
            <div className="lg:mr-4 mx-auto flex-shrink-0">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={500}
                    height={500}
                    className="rounded-lg border border-gray-200 shadow"
                />
            </div>
            <div className="max-w-xl flex flex-col lg:flex-1 justify-between">
                <div className="space-y-5">
                    <h4 className="text-xl font-semibold">{title}</h4>
                    <div className="flex flex-wrap gap-2">
                        <p>{description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-start">
                        {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded"
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
                                className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded transition"
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
                                    className="text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 rounded transition"
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