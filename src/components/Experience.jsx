import React from "react";

const experiences = [
  {
    role: "Freelance Software Developer",
    company: "Capital Engineering",
    project: "Construction Website",
    period: "01/2026 - 08/2026",
    summary:
      "Built a responsive corporate website with an admin panel for managing projects, blogs, and website content. Implemented secure Google OAuth authentication and a client requirement submission flow that generates an estimated project cost for quotation requests.",
    technologies: "Next.js, Laravel, MySQL, Tailwind CSS, Google OAuth",
    link: "https://www.capitalengineeringceylon.com/",
  },
  {
    role: "Freelance Software Developer",
    company: "Auto AC Service",
    project: "Appointment Management System",
    period: "Ongoing",
    summary:
      "Delivered an online appointment booking and management system with an admin panel for managing appointments and customer information. Integrated Google Calendar so new bookings are saved automatically and trigger reminders, helping reduce missed appointments.",
    technologies: "Next.js, Laravel, Firebase, Tailwind CSS, Google OAuth",
    link: "https://misautoac-new.vercel.app/",
  },
  {
    role: "Software Engineer Intern",
    company: "SLT Mobitel PLC",
    project: "sDesk Incident Management Application",
    period: "03/2025 - 09/2025",
    summary:
      "Rebuilt and enhanced the internal sDesk incident-management application used by more than 100 employees daily. Developed React and NestJS features, integrated REST APIs, performed PostgreSQL operations, and improved ticket resolution through targeted debugging and code improvements in an Agile team.",
    technologies:
      "React, NestJS, PostgreSQL, Tailwind CSS, Git, GitHub, Bitbucket",
  },
  {
    role: "Software Developer",
    company: "Ranweli Enterprises",
    project: "Stock Management Business Application",
    period: "06/2024 - 06/2025",
    summary:
      "Engineered and deployed a responsive stock-management application that streamlined manual inventory processes and improved operational efficiency. Added inventory features and integrated EmailJS and SMS Gateway services to support daily business operations.",
    technologies:
      "React.js, Firebase, Bootstrap, Tailwind CSS, Vercel, EmailJS, SMS Gateway",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-4 py-20 text-white md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">
            Experience
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.project}`}
              className="rounded-3xl border border-slate-900 bg-slate-900/50 p-6 shadow-lg shadow-black/20 md:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{experience.role}</h3>
                  <p className="text-slate-400">
                    {experience.company} - {experience.project}
                  </p>
                </div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                  {experience.period}
                </p>
              </div>
              <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-400 md:text-base">
                {experience.summary}
              </p>
              <p className="mt-4 text-sm text-slate-500">
                <span className="font-semibold text-slate-400">
                  Technologies:
                </span>{" "}
                {experience.technologies}
              </p>
              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  View live product
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
