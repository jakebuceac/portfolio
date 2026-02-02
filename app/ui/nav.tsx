'use client';

import NavLinks from "@/app/ui/nav-links";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

return (
    <>
      {/* Desktop Nav */}
      <nav className="hidden sm:flex fixed top-4 left-1/2 transform -translate-x-1/2 rounded-2xl border border-orange-200 dark:border-orange-900/30 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md px-8 py-4 z-50 max-w-4xl justify-center space-x-8 transition-all duration-300">
        <NavLinks onLinkClick={() => setMobileOpen(false)} />
      </nav>

      {/* Mobile Nav */}
      <nav className="sm:hidden fixed top-4 inset-x-4 z-50">
        <div className="rounded-2xl border border-orange-200 dark:border-orange-900/30 bg-white dark:bg-slate-900 shadow-sm overflow-hidden transition-all duration-300">
          <div className="flex justify-end items-center px-4 py-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2.5 hover:bg-orange-50 dark:hover:bg-orange-950/20 rounded-lg transition-colors text-orange-600 dark:text-orange-500"
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