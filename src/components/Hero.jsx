import React from "react";
import { Globe, Mail, ArrowUpRight } from "lucide-react";
import profileImg from "../assets/Dp/my image.jpeg";

export default function Hero() {
  const cvDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1ZLvFKbURk3Ar6QiLUAKaZBerdgq_WWCP";

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white py-20"
    >
      <div className="mx-auto w-full max-w-4xl text-center px-6">
        <div className="mx-auto w-fit">
          <img
            src={profileImg}
            alt="Tharaka Kumarathunga"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-indigo-100 dark:border-slate-800 shadow-lg"
          />
        </div>

        <div className="mt-4 inline-block rounded-full bg-indigo-50/60 dark:bg-slate-900/40 px-4 py-1 text-sm text-slate-600 dark:text-slate-300">
          <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2 align-middle"></span>
          Available for new opportunities
        </div>

        <h1 className="mt-8 text-5xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
          Tharaka Kumarathunga
        </h1>
        <p className="mt-3 text-blue-600 dark:text-blue-400 font-medium">
          Full-Stack Developer — MERN
        </p>

        <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-7">
          I design and build high-performance web applications that solve real
          user problems. Experienced with React, Node.js, Nest.js, PostgreSQL,
          and cloud deployments. Passionate about developer experience and
          scalable architectures.
        </p>

        <div className="mt-8 flex justify-center items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg shadow-md"
          >
            View My Work <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={cvDownloadUrl}
            target="_blank"
            rel="noreferrer"
            download
            className="inline-flex items-center gap-2 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 px-5 py-3 rounded-lg bg-transparent"
          >
            Download Résumé
          </a>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow hover:bg-slate-200"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow hover:bg-slate-200"
          >
            <Globe className="w-5 h-5" />
          </a>
          <a
            href="mailto:tharakamahesh806@gmail.com"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow hover:bg-slate-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-12">
          <div className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-indigo-600">3+</div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">Years of Experience</div>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-indigo-600">20+</div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">Projects Delivered</div>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-indigo-600">10</div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">Companies Served</div>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-indigo-600">99%</div>
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
