import React from "react";

const references = [
  {
    name: "Mrs. S. Adeeba",
    title:
      "Lecturer, Department of Computing & Information Systems, Sabaragamuwa University of Sri Lanka",
    contact: "0720928486 | adeesa@foc.sab.ac.lk",
  },
  {
    name: "Mr. Shanaka Nuwan",
    title: "Software Architect, Digital Edge (Hong Kong) Limited",
    contact: "+85290610346 | Shanakanuwan10@gmail.com",
  },
];

export default function References() {
  return (
    <section
      id="references"
      className="bg-slate-950 px-4 py-20 text-white md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">
            References
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Professional References
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {references.map((reference) => (
            <article
              key={reference.name}
              className="rounded-2xl border border-slate-900 bg-slate-900/50 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-lg font-semibold">{reference.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {reference.title}
              </p>
              <p className="mt-4 text-sm text-slate-300">{reference.contact}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
