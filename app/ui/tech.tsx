import Image from 'next/image';

export default function Tech() {
    const techStack = [
        { name: "PHP", icon: "/php-icon.svg" },
        { name: "Laravel", icon: "/laravel-icon.svg" },
        { name: "TypeScript", icon: "/typescript-icon.svg" },
        { name: "React", icon: "/react-icon.svg" },
        { name: "Next JS", icon: "/nextjs-icon.svg" },
        { name: "Tailwind CSS", icon: "/tailwind-icon.svg" },
        { name: "Bootstrap", icon: "/bootstrap-icon.svg" },
    ];

    return (
        <div>
            <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                    Tech I Work With
                </h3>
            </div>
            <div className='mt-3'>
                <div className="overflow-hidden max-w-md md:max-w-3xl mx-auto">
                    <div className="flex scroll-slow">
                        {techStack.concat(techStack).map((tech, index) => (
                        <div key={index} className="p-3 flex flex-col items-center justify-center min-w-[120]">
                            <div className="flex items-center justify-center">
                            <Image
                                src={tech.icon}
                                alt={`${tech.name} Icon`}
                                width={50}
                                height={50}
                                className="object-contain"
                            />
                            </div>
                            <div className='mt-2'>
                                <small className="text-sm">{tech.name}</small>
                            </div>
                           
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}