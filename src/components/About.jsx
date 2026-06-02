import React from 'react';

const facts = [
  'BSc (Hons) in Computing and Information Systems',
  'Software Engineer Intern at SLT Mobitel PLC',
  'MERN stack focused full-stack developer',
  'Based in Kegalle, Sri Lanka',
];

export default function About() {
  return (
    <section id="about" className="bg-slate-950 px-4 py-20 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">About</p>
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">Profile</h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Highly motivated IT undergraduate with a strong interest in software engineering and a
            focus on building scalable web applications. I work mainly with the MERN stack and
            enjoy turning practical ideas into usable products.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            I am currently looking for a Full Stack Developer opportunity where I can apply my
            development skills, contribute to real projects, and keep growing as an engineer.
          </p>
        </div>

        <div className="grid gap-4 rounded-3xl border border-slate-900 bg-slate-900/40 p-6 shadow-lg shadow-black/20">
          {facts.map((fact) => (
            <div key={fact} className="rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
              {fact}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}