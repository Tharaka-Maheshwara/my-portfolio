import React from "react";
import { Globe, Mail, Code, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-900 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:flex lg:items-start lg:justify-between">
        <div className="mb-8 lg:mb-0 lg:w-1/3">
          <h3 className="text-lg font-semibold text-white">Chanet Lanka</h3>
          <p className="mt-2 text-sm text-slate-400 max-w-xs">
            Senior Full-Stack Developer based in Kegalle. Building fast,
            accessible web applications and collaborating on meaningful
            projects.
          </p>

          <div className="mt-4 flex gap-3 text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-slate-800"
            >
              <Code className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-slate-800"
            >
              <Globe className="w-4 h-4" />
            </a>
            <a
              href="mailto:tharakamahesh806@gmail.com"
              className="p-2 rounded-md hover:bg-slate-800"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <nav className="mb-8 lg:mb-0 lg:w-1/3">
          <h4 className="text-sm font-semibold text-slate-400">Navigation</h4>
          <ul className="mt-4 grid gap-2 text-sm">
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white">
                Experience
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="lg:w-1/3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <p className="text-sm font-semibold text-white">
              Open to new opportunities
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Looking for a senior or staff engineer who ships with precision?
              Let's talk.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700"
            >
              <ArrowUpRight className="w-4 h-4" /> Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 px-6 py-4">
        <div className="mx-auto max-w-6xl text-sm text-slate-500 flex items-center justify-end">
          <a href="#hero" className="text-slate-400 hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
