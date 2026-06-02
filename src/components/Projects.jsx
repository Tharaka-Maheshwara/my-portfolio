import React from "react";
import { ArrowUpRight, Code2, Rocket, LayoutGrid } from "lucide-react";

const projects = [
  {
    title: "sDesk",
    category: "Full-Stack Web Application",
    featured: true,
    sourceUrl: "https://github.com/ItsME-TM/sDesk-Frontend.git",
    description:
      "Incident management system rebuilt for SLT Mobitel with new features for internal incident handling.",
    highlights: [
      "Handles internal incident workflows with structured status tracking",
      "Built for SLT Mobitel to support team operations and reporting",
      "Improved request handling with a clearer user flow",
    ],
    stack: ["React", "Nest.js", "PostgreSQL", "Redux Saga", "Azure AD"],
  },
  {
    title: "Nenasa Attendance",
    category: "Cloud-Based SaaS",
    sourceUrl: "https://github.com/Tharaka-Maheshwara/online-attendance-system-nenasa.git",
    description:
      "Attendance management platform for students, teachers, and classes at Nenasa Higher Education Institute.",
    highlights: [
      "Supports student, teacher, and class attendance management",
      "Streamlines daily attendance workflows for staff",
      "Designed for operational clarity and easy tracking",
    ],
    stack: ["React", "Nest.js", "MySQL", "Azure AD"],
  },
  {
    title: "Employee Management Systems",
    category: "Open Source Internal Tool",
    sourceUrl: "https://github.com/Tharaka-Maheshwara/Employee-Management-System.git",
    description:
      "MERN stack application for searching, adding, updating, deleting, and downloading employee lists.",
    highlights: [
      "CRUD workflow for employee records and exports",
      "Built with a MERN architecture for maintainability",
      "Useful for internal HR and admin operations",
    ],
    stack: ["React", "Express", "Node.js", "MongoDB", "Bootstrap"],
  },
  {
    title: "Stock Management Systems",
    category: "Business Process System",
    sourceUrl: "https://github.com/Tharaka-Maheshwara/Active-Base-System.git",
    description:
      "Business flow management system for Ranveli Enterprises to support buying and selling operations.",
    highlights: [
      "Built to support buying and selling operations",
      "Helps organize stock-related business flow",
      "Tailored for small business process management",
    ],
    stack: ["React", "Firebase", "Bootstrap", "Vercel"],
  },
  {
    title: "UniStay",
    category: "Mobile Application",
    sourceUrl: "https://github.com/PrasadMadhushanka/community_project.git",
    description:
      "Mobile application for private accommodation providers and seekers, built with Flutter and Firebase.",
    highlights: [
      "Connects private accommodation providers and seekers",
      "Designed as a mobile-first experience",
      "Uses Firebase for backend services and sync",
    ],
    stack: ["Flutter", "Firebase", "Figma"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 px-4 py-20 text-slate-900 dark:bg-slate-950 dark:text-white md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            What I've Built
          </p>
          <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400 md:text-base">
            A selection of production systems and applications I have shipped,
            measured, and iterated on.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                {project.featured ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
                    <Rocket className="h-3.5 w-3.5" />
                    Featured
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
                <div className="flex flex-wrap gap-5 text-sm text-slate-700 dark:text-slate-300">
                  <a
                    href={project.sourceUrl ?? "#projects"}
                    target={project.sourceUrl ? "_blank" : undefined}
                    rel={project.sourceUrl ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 transition hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Code2 className="h-4 w-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          More details available on request or through the CV.
        </div>
      </div>
    </section>
  );
}
