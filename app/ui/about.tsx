import Image from 'next/image';
import { Button } from '@/app/ui/button';
import Card from '@/app/ui/card';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

export default function About() {
    const socials = [
        { name: 'GitHub', url: 'https://github.com/jakebuceac', icon: FaGithub },
        { name: 'Linkedin', url: 'https://www.linkedin.com/in/jake-buceac-1275ba172', icon: FaLinkedin },
    ]
    return (
        <Card>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
                <div className='flex-1 text-left sm:pr-5 order-last sm:order-first max-w-4xl'>
                    <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
                        About
                    </h3>
                    <p className="mt-5 sm:text-lg">
                        I'm Jake Buceac, a Software Engineer from Bournemouth, England.
                        I specialise in crafting seamless digital experiences.
                        Problem solving, learning new technologies and building cool stuff is what I love to do. Currently, I'm a PHP Developer building web applications and API endpoints for in2tel.
                    </p>
                    <div className='mt-8 space-x-4'>
                        {socials.map((social) => (
                            <Button
                                key={social.name}
                                className="border border-black"
                            >
                                <a href={social.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <social.icon size={20} />
                                    <span>{social.name}</span>
                                    <FaExternalLinkAlt size={12} />
                                </a>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className='flex-shrink-0 relative order-first sm:order-last mx-auto'>
                    <Image 
                        src="/profile-pic.JPG"
                        className="rounded-full" 
                        alt="Profile picture of Jake Buceac"
                        width={170}
                        height={170}
                    />
                </div>
            </div>
        </Card>
    );
}