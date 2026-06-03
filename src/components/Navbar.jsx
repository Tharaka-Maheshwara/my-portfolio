import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  // This state tracks whether the mobile menu drawer is open (true) or closed (false)
  const [isOpen, setIsOpen] = useState(false);

  // Closes the menu automatically when a user taps a section link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/80 border-b border-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="font-bold text-lg tracking-tight">
              Tharaka.
            </a>
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          {/* Right CTA / Mobile Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-block px-4 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition text-sm"
            >
              Hire Me
            </a>

            {/* Interactive Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="p-2 rounded-md text-slate-200 hover:bg-slate-900 focus:outline-none transition-colors"
              >
                {/* Changes icon dynamically between Hamburger and 'X' */}
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu Mobile Drawer */}
      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-slate-950 border-b border-slate-900 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        <nav className="flex flex-col px-4 pt-2 pb-6 space-y-3 text-base font-medium text-slate-300">
          <a href="#about" onClick={handleLinkClick} className="p-2 rounded-md hover:bg-slate-900 hover:text-white transition">
            About
          </a>
          <a href="#skills" onClick={handleLinkClick} className="p-2 rounded-md hover:bg-slate-900 hover:text-white transition">
            Skills
          </a>
          <a href="#projects" onClick={handleLinkClick} className="p-2 rounded-md hover:bg-slate-900 hover:text-white transition">
            Projects
          </a>
          <a href="#experience" onClick={handleLinkClick} className="p-2 rounded-md hover:bg-slate-900 hover:text-white transition">
            Experience
          </a>
          <a href="#contact" onClick={handleLinkClick} className="p-2 rounded-md hover:bg-slate-900 hover:text-white transition">
            Contact
          </a>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-2 w-full text-center block px-4 py-2.5 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  );
}