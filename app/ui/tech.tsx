import Image from 'next/image';
import { Button } from "@/app/ui/button";
import * as Tabs from "@radix-ui/react-tabs";

export default function Tech() {
    const techStack = [
        { 
            label: 'Languages', 
            content: [
                { name: "PHP", icon: "/icons/php-icon.svg" },
                { name: "JavaScript", icon: "/icons/javascript-icon.svg" },
                { name: "TypeScript", icon: "/icons/typescript-icon.svg" },
                { name: "Go", icon: "/icons/go-icon.svg" },
            ]
        },
        {
            label: 'Frameworks/Libraries',
            content: [
                { name: "Laravel", icon: "/icons/laravel-icon.svg" },
                { name: "Livewire", icon: "/icons/livewire-icon.svg" },
                { name: "Alpine.js", icon: "/icons/alpinejs-icon.svg" },
                { name: "Symfony", icon: "/icons/symfony-icon.svg" },
                { name: "React.js", icon: "/icons/reactjs-icon.svg" },
                { name: "Next.js", icon: "/icons/nextjs-icon.svg" },
                { name: "Node.js", icon: "/icons/nodejs-icon.svg" },
                { name: "Express.js", icon: "/icons/expressjs-icon.svg" },
                { name: "Tailwind CSS", icon: "/icons/tailwind-icon.svg" },
                { name: "Bootstrap", icon: "/icons/bootstrap-icon.svg" },
            ]
        },
        {
            label: 'Cloud/DevOps',
            content: [
                { name: "DigitalOcean", icon: "/icons/digital-ocean-icon.svg" },
                { name: "Docker", icon: "/icons/docker-icon.svg" },
                { name: "MySQL", icon: "/icons/mysql-icon.svg" },
                { name: "Redis", icon: "/icons/redis-icon.svg" },
            ]
        }
        
    ];

    return (
        <div>
            <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                    Tech I've Worked With
                </h3>
            </div>
            <div className='mt-5'>
                <Tabs.Root defaultValue="Languages">
                    <Tabs.List aria-label="Tech Stack Tabs">
                        {techStack.map((tech) => (
                            <Tabs.Trigger 
                                key={tech.label} 
                                value={tech.label} 
                                className="mr-2"
                                asChild
                            >
                                <Button className='tabs-trigger-button'>{tech.label}</Button>
                            </Tabs.Trigger>
                        ))}
                    </Tabs.List>
                    {techStack.map((tech) => (
                        <Tabs.Content 
                            key={tech.label} 
                            value={tech.label} 
                            className="mt-10 fade-down"
                        >
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
                                {tech.content.map((item) => (
                                    <div 
                                        key={item.name} 
                                        className="flex flex-col items-center rounded-lg py-3"
                                    >
                                        <div className="mb-2 relative">
                                            <Image 
                                                src={item.icon} 
                                                alt={`${item.name} icon`} 
                                                width={50}
                                                height={50}
                                            />
                                        </div>
                                        <small>{item.name}</small>
                                    </div>
                                ))}
                            </div>
                        </Tabs.Content>
                    ))}
                </Tabs.Root>
            </div>
        </div>
    );
}