import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Volunteering from "./components/Volunteering";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function WhatsAppIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.11 17.26c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49 0 1.47 1.08 2.88 1.23 3.08.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      <path d="M16.02 3C9.39 3 4 8.39 4 15.02c0 2.12.56 4.2 1.61 6.03L4 29l8.17-1.58a11.93 11.93 0 0 0 3.85.63h.01c6.63 0 12.02-5.39 12.02-12.02C28.05 8.39 22.65 3 16.02 3zm0 21.82h-.01c-1.23 0-2.44-.21-3.58-.62l-.26-.09-4.85.94.97-4.73-.16-.27a9.78 9.78 0 0 1-1.5-5.21c0-5.41 4.4-9.81 9.82-9.81 5.41 0 9.81 4.4 9.81 9.81 0 5.42-4.4 9.98-9.82 9.98z" />
    </svg>
  );
}

function App() {
  const whatsappNumber = "94765228504";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="bg-slate-950 min-h-screen scroll-smooth text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certificates />
      <Volunteering />
      <Contact />
      <Footer />

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/30 transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-300/60"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </div>
  );
}

export default App;
