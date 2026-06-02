import React from "react";

const volunteering = [
  {
    title: "IEEE Student Branch | SUSL",
    role: "Active Member",
    period: "2022 - Present",
  },
  {
    title: "Society of Computer Science | SUSL",
    role: "Active Member",
    period: "2022 - Present",
  },
];

export default function Volunteering() {
  return (
    <section
      id="volunteering"
      className="bg-slate-950 px-4 py-20 text-white md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">
            Volunteering
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">Activities</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {volunteering.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-900 bg-slate-900/50 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-slate-400">{item.role}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-500">
                {item.period}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
