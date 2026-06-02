import React from "react";
import { Globe, Mail, ArrowUpRight } from "lucide-react";
import profileImg from "../assets/Dp/my image.jpeg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row md:justify-center md:items-center bg-slate-950 text-white text-center md:text-left px-4 relative overflow-hidden gap-8"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col items-center md:items-start md:flex-row gap-8">
        <img src={profileImg} alt="Tharaka Kumarathunga" className="w-40 h-40 rounded-full object-cover border-2 border-slate-800 shadow-lg" />

        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-linear-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
            Hi, I'm Tharaka Kumarathunga
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 font-light">
            A passionate Full-Stack Developer specializing in building beautiful,
            high-performing web applications.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition shadow-lg shadow-blue-600/20 flex items-center gap-2 group"
        >
          View My Work
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </a>
        <a
          href="#contact"
          className="border border-slate-800 hover:bg-slate-900 px-6 py-3 rounded-lg font-medium transition text-slate-300"
        >
          Contact Me
        </a>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 text-slate-400">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Globe className="w-6 h-6" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <Globe className="w-6 h-6" />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-blue-400 transition"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
