"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "Publications inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`;
    window.location.href = `mailto:info@panarion.org?subject=${encodeURIComponent(fields.subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="w-12 h-12 text-gold-400 mb-4" />
        <h3 className="font-serif text-xl font-bold text-byzantine-700 mb-2">Your email client is opening</h3>
        <p className="text-gray-500 text-sm max-w-xs">
          Complete sending the message in your email app. We usually reply within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-byzantine-600 hover:text-gold-500 text-sm font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-byzantine-700 mb-1.5">Full Name</label>
          <input
            name="name"
            value={fields.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-byzantine-400 focus:outline-none focus:ring-2 focus:ring-byzantine-100 text-sm text-gray-700 bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-byzantine-700 mb-1.5">Email Address</label>
          <input
            name="email"
            type="email"
            value={fields.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-byzantine-400 focus:outline-none focus:ring-2 focus:ring-byzantine-100 text-sm text-gray-700 bg-white transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-byzantine-700 mb-1.5">Subject</label>
        <select
          name="subject"
          value={fields.subject}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-byzantine-400 focus:outline-none focus:ring-2 focus:ring-byzantine-100 text-sm text-gray-700 bg-white transition-all"
        >
          <option>Publications inquiry</option>
          <option>Education &amp; courses</option>
          <option>Academic collaboration</option>
          <option>General question</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-byzantine-700 mb-1.5">Message</label>
        <textarea
          name="message"
          value={fields.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="How can we help you?"
          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-byzantine-400 focus:outline-none focus:ring-2 focus:ring-byzantine-100 text-sm text-gray-700 bg-white transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-byzantine-600 hover:bg-byzantine-700 text-white font-semibold rounded-xl transition-all shadow-sm text-sm"
      >
        <Send className="w-4 h-4" /> Send Message
      </button>
      <p className="text-center text-gray-400 text-xs">
        This opens your email client with the message pre-filled.
      </p>
    </form>
  );
}
