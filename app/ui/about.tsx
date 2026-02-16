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
            <div className="flex flex-col md:flex-row gap-5 w-full">
                <div className='flex-1 text-left md:pr-5 order-last md:order-first max-w-4xl'>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                        About
                    </h3>
                    <p className="mt-5 md:text-lg text-slate-700 leading-relaxed">
                        I&apos;m Jake Buceac, a Software Engineer from Bournemouth, England.
                        I specialise in architecting scalable applications and robust APIs that power modern businesses.
                        Problem solving, learning new technologies and building cool stuff is what I love to do. Currently, I&apos;m a PHP Developer building web applications and API endpoints for 8x8.
                    </p>
                    <div className='mt-8 flex flex-wrap gap-4'>
                        {socials.map((social) => (
                            <Button
                                key={social.name}
                                className="border-2 border-orange-600 text-orange-600 bg-transparent hover:bg-orange-50"
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
                <div className='flex-shrink-0 h-[225px] relative order-first md:order-last mx-auto rounded-full border border-orange-200 shadow-lg shadow-orange-500/20 overflow-hidden'>
                    <Image 
                        src="/profile-pic.JPG"
                        alt="Profile picture of Jake Buceac"
                        width={170}
                        height={170}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        priority
                    />
                </div>
            </div>
        </Card>
    );
}