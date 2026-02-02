'use client';

import Link from "next/link";
import clsx from 'clsx';
import { useState, useEffect } from "react";

const links = [
    { name: 'Home', href: '/' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

type NavLinksProps = {
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function NavLinks({ onLinkClick }: NavLinksProps) {
    const [active, setActive] = useState<string>(); // Home default

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 300; // offset for sticky header
            
            let current: string | null = null;

            for (const link of links) {
                if (link.href.startsWith('#')) {
                    const section = document.querySelector(link.href);

                    if (section && section.offsetTop <= scrollPosition) {
                        current = link.href;
                    }
                }
            }

            setActive(current ?? '/');
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {links.map((link) => {
                if (link.href === '/') {
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                "px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                                {
                                    'bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400': active === link.href,
                                    'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50': active !== link.href,
                                }
                            )}    
                        >
                            {link.name}
                        </a>
                    );
                }
                
                return (
                    <Link 
                        key={link.name}
                        href={link.href}
                        onClick={onLinkClick}
                        prefetch={link.href === '/'}
                        className={clsx(
                            "px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                            {
                                'bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400': active === link.href,
                                'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50': active !== link.href,
                            }
                        )}    
                    >
                        {link.name}
                    </Link>
                )
            })}
        </>
    );
}
