import React from "react";

const certificates = [
  {
    title: "Full-Stack Development",
    issuer: "Developers Stack",
  },
  {
    title: "Mern Stack Development",
    issuer: "SKYREK",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-950 px-4 py-20 text-white md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-500">
            Certificates
          </p>
          <h2 className="text-3xl font-bold md:text-4xl">
            Training & Certifications
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="rounded-2xl border border-slate-900 bg-slate-900/50 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-lg font-semibold">{certificate.title}</h3>
              <p className="mt-2 text-slate-400">{certificate.issuer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
