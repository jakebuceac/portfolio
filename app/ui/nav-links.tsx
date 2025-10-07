'use client';

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";

const links = [
    { name: 'Home', href: '/' },
    { name: 'Tech', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '/contact' },
];

type NavLinksProps = {
  onLinkClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function NavLinks({ onLinkClick }: NavLinksProps) {
    const pathname = usePathname();

    return (
        <>
            {links.map((link) => (
                <Link 
                    key={link.name}
                    href={link.href}
                    onClick={onLinkClick}
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