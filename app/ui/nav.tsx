'use client';

import NavLinks from "@/app/ui/nav-links";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden sm:flex fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full px-6 py-2 z-50 max-w-4xl justify-center space-x-6">
        <NavLinks onLinkClick={() => setMobileOpen(false)} />
      </nav>

      {/* Mobile Nav */}
      <nav className="sm:hidden fixed top-4 inset-x-4 z-50">
        <div className="bg-white shadow-md rounded-3xl overflow-hidden">
          <div className="flex justify-end items-center px-2 py-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 bg-white"
            >
              {mobileOpen ? <RxCross1 size={30} /> : <RxHamburgerMenu size={30} />}
            </button>
          </div>
          <div
            className={`
              ${mobileOpen ? 'max-h-screen pt-2 pb-4' : 'max-h-0 pt-0 pb-0'}
              overflow-hidden transition-all duration-300 ease-in-out
              flex flex-col items-center space-y-2 px-2
            `}
          >
            <NavLinks onLinkClick={() => setMobileOpen(false)} />
          </div>
        </div>
      </nav>
    </>
  );
}