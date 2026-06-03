import React, { useEffect, useRef, useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";

function GitHubIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.75 8.205 11.33.6.11.82-.26.82-.58 0-.29-.01-1.05-.015-2.05-3.338.73-4.042-1.61-4.042-1.61-.546-1.38-1.333-1.75-1.333-1.75-1.09-.75.083-.74.083-.74 1.205.085 1.84 1.24 1.84 1.24 1.07 1.84 2.807 1.31 3.492 1 .108-.78.418-1.31.76-1.61-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.125-.305-.535-1.53.115-3.19 0 0 1.005-.322 3.295 1.23.955-.266 1.98-.399 3-.405 1.02.006 2.045.139 3 .405 2.29-1.552 3.295-1.23 3.295-1.23.65 1.66.24 2.885.12 3.19.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.62-5.475 5.915.43.37.815 1.096.815 2.21 0 1.595-.015 2.877-.015 3.27 0 .32.21.695.825.575C20.565 22.245 24 17.78 24 12.5 24 5.87 18.63 0.5 12 0.5z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.64 1.34 2.98 2.98 2.98 1.64 0 2.98-1.34 2.98-2.98C7.96 4.84 6.62 3.5 4.98 3.5zM2.4 8.98h5.16V21H2.4V8.98zM9.6 8.98h4.95v1.62h.07c.69-1.3 2.38-2.68 4.9-2.68 5.24 0 6.2 3.45 6.2 7.93V21h-5.16v-5.4c0-1.29-.03-2.96-1.8-2.96-1.8 0-2.07 1.4-2.07 2.86V21H9.6V8.98z" />
    </svg>
  );
}
import profileImg from "../assets/Dp/my image.jpeg";

export default function Hero() {
  function Counter({ end, suffix = "", start = false, duration = 1200 }) {
    const [value, setValue] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
      if (!start) return;
      let startTime = null;

      function tick(time) {
        if (!startTime) startTime = time;
        const progress = Math.min((time - startTime) / duration, 1);
        const current = Math.floor(progress * end);
        setValue(current);
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setValue(end);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafRef.current);
    }, [start, end, duration]);

    return (
      <div className="text-2xl font-extrabold text-indigo-600">
        {value}
        {suffix}
      </div>
    );
  }

  const cvDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1ZLvFKbURk3Ar6QiLUAKaZBerdgq_WWCP";

  const statsRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCount(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

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
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-[50%_20%] border-4 border-indigo-100 dark:border-slate-800 shadow-lg"
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
          Full-Stack Developer
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
            href="https://github.com/ItsME-TM"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow hover:bg-slate-200"
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow hover:bg-slate-200"
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:tharakamahesh806@gmail.com"
            className="p-3 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 shadow hover:bg-slate-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-12">
          <div
            ref={statsRef}
            className="mx-auto grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-center shadow-sm">
              <Counter end={3} suffix="+" start={startCount} />
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Years of Experience
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-center shadow-sm">
              <Counter end={20} suffix="+" start={startCount} />
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Projects Delivered
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-center shadow-sm">
              <Counter end={10} start={startCount} />
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Companies Served
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 text-center shadow-sm">
              <Counter end={99} suffix="%" start={startCount} />
              <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
