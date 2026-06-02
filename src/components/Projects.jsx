import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A fast, responsive personal site to present work, skills, and contact details.",
    stack: "React, Vite, Tailwind CSS",
  },
  {
    title: "Task Dashboard",
    description:
      "An organized dashboard concept for tracking priorities and progress.",
    stack: "React, UI Components, API Integration",
  },
  {
    title: "E-Commerce UI",
    description:
      "A clean storefront interface focused on browsing and conversion.",
    stack: "Frontend Design, Responsive Layouts",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 px-4 py-20 text-white md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">
            Selected Work
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-900 bg-slate-900/50 p-6 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:border-slate-700"
            >
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="mb-5 text-sm leading-6 text-slate-400">
                {project.description}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {project.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
