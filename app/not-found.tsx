'use client';

import { Button } from '@/app/ui/button';
import { FaArrowLeft } from 'react-icons/fa6';

export default function NotFound() {
  return (
    <main className="pt-32 md:pt-40 overflow-x-hidden">
      <div className="max-w-5xl mx-auto space-y-20 md:space-y-40">
        <div className="flex justify-center px-4">
          <div className='flex-1 text-center max-w-3xl'>
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-orange-600 mb-4">
              404
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Page Not Found
            </h2>
            <p className="mt-6 text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted. Let&apos;s get you back on track.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/">
                <div className="flex items-center gap-2">
                  <FaArrowLeft size={14} />
                  Back to Home
                </div>
              </Button>
              <Button 
                onClick={() => window.history.back()} 
                className='border-2 border-orange-600 text-orange-600 bg-transparent hover:bg-orange-50'
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
