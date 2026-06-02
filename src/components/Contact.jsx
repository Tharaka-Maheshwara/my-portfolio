import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these placeholder strings with your actual EmailJS keys
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(() => {
        setStatusMessage(
          "Message sent successfully! I will get back to you soon.",
        );
        form.current.reset();
      })
      .catch((error) => {
        setStatusMessage("Something went wrong. Please try again.");
        console.error(error);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-950 text-white px-8 border-t border-slate-900"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-400 mb-3 text-sm">
          Have an exciting project or opportunity? Shoot me a message!
        </p>
        <p className="text-slate-500 mb-8 text-sm">
          Email: tharakamahesh806@gmail.com | Phone: +765228504 | Kegalle, Sri
          Lanka
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4 text-left">
          <input
            type="text"
            name="from_name"
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:border-blue-500 transition text-sm text-white"
          />
          <input
            type="email"
            name="reply_to"
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:border-blue-500 transition text-sm text-white"
          />
          <textarea
            name="message"
            required
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-800 focus:outline-none focus:border-blue-500 transition text-sm text-white"
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 py-3 rounded-lg font-medium transition text-sm"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        {statusMessage && (
          <p className="mt-4 text-sm text-blue-400 font-medium">
            {statusMessage}
          </p>
        )}
      </div>
    </section>
  );
}
