'use client';

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";

const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export default function NavLinks() {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => (
                <Link 
                    key={link.name}
                    href={link.href}
                    className={clsx(
                        "px-3 py-2",
                        {
                            'font-semibold': pathname === link.href,
                        }
                    )}    
                >
                    <p>{link.name}</p>
                </Link>
            ))}

        </>
    );
}