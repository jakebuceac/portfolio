'use client';

import NavLinks from "@/app/ui/nav-links";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full px-6 py-2 z-50">
      <div className="hidden sm:flex justify-center space-x-6">
        <NavLinks onLinkClick={() => setMobileOpen(false)} />
      </div>

      <div className="sm:hidden flex justify-end">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md focus:outline-none focus:ring"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-md rounded-lg w-48 p-4 sm:hidden">
          <NavLinks onLinkClick={() => setMobileOpen(false)} />
        </div>
      )}
    </nav>
  );
}