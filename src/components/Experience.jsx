import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-950 px-4 py-20 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">Experience</p>
          <h2 className="text-3xl font-bold md:text-4xl">Professional Experience</h2>
        </div>

        <article className="rounded-3xl border border-slate-900 bg-slate-900/50 p-6 shadow-lg shadow-black/20 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
              <p className="text-slate-400">SLT Mobitel PLC</p>
            </div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">03/2025 - 09/2025</p>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-400 md:text-base">
            Supported software engineering work on real internal systems and contributed to product
            improvements during the internship period. The experience strengthened my understanding
            of full-stack development, collaboration, and delivery in a professional environment.
          </p>
        </article>
      </div>
    </section>
  );
}