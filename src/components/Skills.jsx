import React from "react";
import { Code, Layers, Database, Users } from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Code,
    items: ["JavaScript", "TypeScript", "Java", "PHP", "Python"],
  },
  {
    title: "Frontend Development",
    icon: Layers,
    items: [
      "React",
      "Next.js",
      "Angular",
      "Redux Saga",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "API & Development Practices",
    icon: Code,
    items: [
      "REST API Integration",
      "Full-Stack Development",
      "Agile Development",
      "Application Testing",
      "Debugging",
      "Troubleshooting",
    ],
  },
  {
    title: "Version Control",
    icon: Layers,
    items: ["Git", "GitHub", "Bitbucket"],
  },
  {
    title: "Authentication & Cloud Platforms",
    icon: Database,
    items: ["Azure AD", "Google OAuth", "Supabase", "TiDB Cloud"],
  },
  {
    title: "Backend Development",
    icon: Layers,
    items: ["Node.js", "Express.js", "NestJS", "Laravel"],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      "Relational: PostgreSQL",
      "Relational: MySQL",
      "NoSQL: MongoDB",
      "NoSQL: Firebase",
    ],
  },
  {
    title: "Tools & Application Deployment",
    icon: Layers,
    items: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Postman",
      "Vercel",
      "Heroku",
      "Figma",
      "Netlify",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    items: [
      "Teamwork",
      "Cross-functional Collaboration",
      "Problem-solving",
      "Critical Thinking",
      "Time Management",
      "Effective Communication",
      "Adaptability",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-4 py-20 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">
            Skills
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Technical Strengths
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-900 bg-slate-900/50 p-6 shadow-lg shadow-black/20"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-lg bg-indigo-500/10 p-2 text-indigo-400">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-sm text-slate-300"
                  >
                    <group.icon className="h-3.5 w-3.5 text-indigo-400" />
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
