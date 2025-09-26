import Image from 'next/image';
import { Button } from '@/app/ui/button';

export default function Profile() {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <div className='flex-1 max-w-sm text-left order-last md:order-first'>
                <h1 className="text-4xl lg:text-5xl font-semibold leading-snug">
                    Hi, I'm Jake. <span className="wave-hand">👋</span>
                </h1>
                <p className="mt-1 md:text-lg">
                    Software Engineer specialising in web development.
                </p>
                <div className="mt-5 flex gap-4">
                    <Button className='bg-black text-white'>View Projects</Button>
                    <Button className='border border-black'>Contact Me</Button>
                </div>
            </div>
            <div className='flex-shrink-0 w-[350] relative order-first md:order-last'>
                <Image 
                    src="/profile-pic.JPG"
                    className="rounded-full" 
                    alt="Profile picture of Jake Buceac"
                    width={768}
                    height={1024}
                />
            </div>
        </div>
    );
}