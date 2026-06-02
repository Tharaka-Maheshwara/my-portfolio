import React from "react";

const projects = [
  {
    title: "sDesk",
    description:
      "Incident management system rebuilt for SLT Mobitel with new features for internal incident handling.",
    stack: "React.js, Nest.js, PostgreSQL, Redux Saga, Azure AD, GitHub",
  },
  {
    title: "Nenasa Attendance",
    description:
      "Attendance management platform for students, teachers, and classes at Nenasa Higher Education Institute.",
    stack: "React.js, Nest.js, MySQL, Azure AD, GitHub",
  },
  {
    title: "Employee Management Systems",
    description:
      "MERN stack application for searching, adding, updating, deleting, and downloading employee lists.",
    stack: "React.js, Express.js, Node.js, MongoDB, Bootstrap, GitHub",
  },
  {
    title: "Stock Management Systems",
    description:
      "Business flow management system for Ranveli Enterprises to support buying and selling operations.",
    stack: "React.js, Firebase, Bootstrap, Vercel, GitHub",
  },
  {
    title: "UniStay",
    description:
      "Mobile application for private accommodation providers and seekers, built with Flutter and Firebase.",
    stack: "Flutter, Firebase, Figma",
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
            CV Projects
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
