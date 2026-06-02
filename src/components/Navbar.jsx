import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/80 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm text-slate-300 md:px-8">
        <a href="#hero" className="font-semibold tracking-wide text-white">
          Tharaka Kumarathunga
        </a>

        <div className="flex items-center gap-6">
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
