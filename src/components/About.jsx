import React from "react";
import { Code, Layers, Users, Award } from "lucide-react";

const features = [
  {
    title: "Engineering Excellence",
    body:
      "I hold a high bar for code quality — every pull request is an opportunity to raise the standard. I write thorough tests, care about edge cases, and document decisions so teammates understand the why, not just the what.",
    icon: Code,
  },
  {
    title: "Systems Thinking",
    body:
      "Complex problems become tractable when you understand the whole system. I bring a first-principles mindset to architectural decisions, weighing long-term maintainability against delivery speed.",
    icon: Layers,
  },
  {
    title: "Collaborative Leadership",
    body:
      "Great software is built by great teams. I invest in pairing sessions, design reviews, and mentoring to help teams ship reliably and learn continuously.",
    icon: Users,
  },
];

export default function About() {
  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-950 py-20 text-slate-900 dark:text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-wider text-slate-500">WHO I AM</p>
          <h2 className="mt-3 text-4xl font-extrabold">About Me</h2>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
          {/* Left: paragraphs */}
          <div className="prose max-w-none text-slate-700 dark:text-slate-300">
            <p>
              I'm <strong>Tharaka Kumarathunga</strong>, a Full-Stack Developer focused on the MERN stack. I am currently pursuing a BSc (Hons) in Computing and Information Systems at Sabaragamuwa University of Sri Lanka and have practical industry experience through internships and delivered projects.
            </p>

            <p>
              During my Software Engineer internship at <strong>SLT Mobitel PLC</strong>  I contributed to internal systems and worked on the <em>sDesk</em> incident management platform, implementing features and improving system reliability.
            </p>

            <p>
              I've delivered projects across web and mobile platforms including <em>sDesk</em>, <em>Nenasa Attendance</em>, <em>Employee Management Systems</em>, <em>Stock Management Systems</em>, and <em>UniStay</em>. My stack experience includes React, Nest.js, Node.js, PostgreSQL, MySQL, MongoDB, and cloud deployments.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-3">
                <Award className="w-4 h-4 text-indigo-600 mt-1" />
                <div>
                  <strong>BSc (Hons) in Computing and Information Systems</strong>
                  <div className="text-xs text-slate-500">Sabaragamuwa University of Sri Lanka — 2022–2026</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Award className="w-4 h-4 text-indigo-600 mt-1" />
                <div>
                  <strong>Software Engineer Intern</strong>
                  <div className="text-xs text-slate-500">SLT Mobitel PLC — 03/2025–09/2025</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Award className="w-4 h-4 text-indigo-600 mt-1" />
                <div>
                  <strong>Certifications</strong>
                  <div className="text-xs text-slate-500">Full-Stack Development (Developers Stack), Mern Stack Development (SKYREK)</div>
                </div>
              </li>
            </ul>

          </div>

          {/* Right: feature cards */}
          <div className="space-y-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600 dark:bg-indigo-900/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{f.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
