import React from 'react';

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'TypeScript', 'Java', 'PHP'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React.js', 'Angular', 'Node.js', 'Nest.js', 'Express.js', 'Redux Saga', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    title: 'Databases & Tools',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Azure AD', 'Git', 'GitHub', 'Postman', 'Vercel', 'Heroku', 'Figma'],
  },
  {
    title: 'Soft Skills',
    items: ['Teamwork', 'Problem-solving', 'Time management', 'Creativity', 'Critical thinking', 'Effective communication'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-4 py-20 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">Skills</p>
          <h2 className="text-3xl font-bold md:text-4xl">Technical Strengths</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-2xl border border-slate-900 bg-slate-900/50 p-6 shadow-lg shadow-black/20">
              <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-sm text-slate-300">
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