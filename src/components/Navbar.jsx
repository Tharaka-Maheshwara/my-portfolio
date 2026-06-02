import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="flex items-center h-16">
          {/* Left: logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="font-bold text-lg text-slate-900 dark:text-white"
            >
              Tharaka.
            </a>
          </div>

          {/* Center: nav links */}
          <div className="flex-1">
            <nav className="hidden md:flex justify-center space-x-8 text-sm text-slate-700 dark:text-slate-300">
              <a
                href="#about"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-block px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Hire Me
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                aria-label="Open menu"
                className="p-2 rounded-md text-slate-700 dark:text-slate-200"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
