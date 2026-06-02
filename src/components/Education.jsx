import React from "react";

const education = [
  {
    period: "2022 - 2026",
    title: "BSc (Hons) in Computing and Information Systems",
    place: "Sabaragamuwa University of Sri Lanka",
  },
  {
    period: "2020",
    title: "G.C.E. (A/L) Examination - Physical Science Stream",
    place: "Kegalu Vidyalaya | Kegalle",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-950 px-4 py-20 text-white md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">
            Education
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Academic Background
          </h2>
        </div>

        <div className="grid gap-6">
          {education.map((item) => (
            <article
              key={item.title}
              className="flex flex-col gap-2 rounded-2xl border border-slate-900 bg-slate-900/50 p-6 shadow-lg shadow-black/20 md:flex-row md:items-center md:justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-slate-400">{item.place}</p>
              </div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                {item.period}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
