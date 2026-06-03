import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const recipientEmail = "tharakamahesh806@gmail.com";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatusMessage(
        "Email delivery is not configured yet. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.",
      );
      return;
    }

    if (!form.current) {
      setStatusMessage("Unable to read the contact form. Please try again.");
      return;
    }

    const formData = new FormData(form.current);
    const title = String(formData.get("title") ?? "Contact Us").trim();
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    setIsSending(true);
    setStatusMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: recipientEmail,
          title,
          name,
          email,
          message,
        },
        publicKey,
      );

      setStatusMessage("Your message has been sent successfully.");
      form.current.reset();
    } catch (error) {
      setStatusMessage("Unable to send your message right now. Please try again.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-900 bg-slate-950 px-6 py-20 text-white"
    >
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-extrabold">Get In Touch</h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Have a project, internship, or collaboration in mind? Send a message
            and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Email
              </p>
              <p className="mt-2 text-sm text-slate-200">{recipientEmail}</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Phone
              </p>
              <p className="mt-2 text-sm text-slate-200">+94 76 522 8504</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Location
              </p>
              <p className="mt-2 text-sm text-slate-200">Kegalle, Sri Lanka</p>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur"
        >
          <input type="hidden" name="title" value="Contact Us" />

          <div className="space-y-4 text-left">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                placeholder="Tell me about your project or opportunity"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-800"
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {statusMessage && (
              <p className="text-sm font-medium text-blue-300">{statusMessage}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
