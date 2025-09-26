import Image from 'next/image';
import { Button } from '@/app/ui/button';

export default function Profile() {
    return (
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 p-4 w-full">
            <div className='flex-1 max-w-sm text-left order-last sm:order-first'>
                <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
                    Hi, I`m Jake. <span className="inline-block animate-wave">👋</span>
                </h1>
                <p className="mt-1 text-md sm:text-lg">
                    Software Engineer specialising in web development.
                </p>
                <div className="mt-5 flex gap-4">
                    <Button className='bg-black text-white'>View Projects</Button>
                    <Button className='border border-black'>Contact Me</Button>
                </div>
            </div>
            <div className='flex-shrink-0 w-[150px] relative order-first sm:order-last'>
                <Image 
                    src="/profile-pic.JPG"
                    className="rounded-md" 
                    alt="Profile picture of Jake Buceac"
                    width={768}
                    height={1024}
                />
            </div>
        </div>
    );
}