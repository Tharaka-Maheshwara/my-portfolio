import React from "react";

export default function Navbar() {
  const cvDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1ZLvFKbURk3Ar6QiLUAKaZBerdgq_WWCP";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/80 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 text-sm text-slate-300 md:px-8">
        <a href="#hero" className="font-semibold tracking-wide text-white">
          Tharaka Kumarathunga
        </a>

        <div className="flex flex-wrap items-center gap-4 md:gap-6">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#experience" className="transition hover:text-white">
            Experience
          </a>
          <a href="#education" className="transition hover:text-white">
            Education
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#certificates" className="transition hover:text-white">
            Certificates
          </a>
          <a href="#references" className="transition hover:text-white">
            References
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
          <a
            href={cvDownloadUrl}
            target="_blank"
            rel="noreferrer"
            download
            className="rounded-full border border-slate-700 px-4 py-2 font-medium text-white transition hover:border-slate-500 hover:bg-slate-900"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
