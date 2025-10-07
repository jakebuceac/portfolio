import Image from 'next/image';
import { Button } from '@/app/ui/button';
import Card from '@/app/ui/card';

export default function About() {
    return (
        <Card>
            <div className="flex flex-col sm:flex-row gap-5 w-full">
                <div className='flex-1 text-left sm:pr-5 order-last sm:order-first max-w-2xl'>
                    <h3 className="text-2xl sm:text-3xl font-semibold leading-snug">
                        About
                    </h3>
                    <p className="mt-5 sm:text-lg">
                        I am a software engineer with experience in building web applications and API's using modern PHP technologies. I enjoy solving problems and learning new things.
                    </p>
                </div>
                <div className='flex-shrink-0 relative order-first sm:order-last mx-auto'>
                    <Image 
                        src="/profile-pic.JPG"
                        className="rounded-full" 
                        alt="Profile picture of Jake Buceac"
                        width={150}
                        height={150}
                    />
                </div>
            </div>
        </Card>
    );
}