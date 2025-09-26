'use client';

import NavLinks from "@/app/ui/nav-links";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
    const [mobileOpen, setMobileOpen] = useState(false);
    
    return (
        <nav className="fixed w-full p-3 z-50 bg-white shadow-md">
            <div className="hidden md:flex justify-center space-x-4">
                <NavLinks />
            </div>

            <div className="md:hidden flex justify-end">
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="p-2 rounded-md focus:outline-none focus:ring"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {mobileOpen && (
                <div className="w-full p-4 md:hidden">
                    <NavLinks />
                </div>
            )}
        </nav>
    );
}