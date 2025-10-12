'use client';

import NavLinks from "@/app/ui/nav-links";
import { Menu, X } from "lucide-react";
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
      <nav className="sm:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div
          className={`bg-white shadow-md flex flex-col transition-all duration-300 overflow-hidden
            ${mobileOpen ? 'rounded-md py-2' : 'rounded-full py-2'}`
          }
        >
          <div className="flex justify-end items-center px-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-3 rounded-full bg-white focus:outline-none focus:ring"
            >
              {mobileOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
          {mobileOpen && (
            <div className="flex flex-col items-center mt-2 space-y-2 px-2">
              <NavLinks onLinkClick={() => setMobileOpen(false)} />
            </div>
          )}
        </div>
      </nav>
    </>
  );
}