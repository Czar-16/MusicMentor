"use client";

import React, { useState } from "react";
import { Meteors } from "@/components/ui/meteors";

function MusicMentorContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#04102a] to-[#030216] text-white relative overflow-hidden flex items-center justify-center py-30">
      <div className="relative z-10 w-full max-w-2xl mx-auto p-8 rounded-3xl border border-neutral-700/40 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md shadow-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-gray-200">
          Contact Us
        </h1>
        <p className="text-neutral-300 mb-6">
          Have questions about courses, pricing, or events? Send us a message
          and we&apos;ll respond soon.
        </p>
        <form className="space-y-4 mt-4">
          <input
            type="email"
            placeholder="Your email address"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="mt-2 w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
          />
          <textarea
            value={message}
            placeholder="Tell us how we can help..."
            className="mt-2 w-full rounded-xl bg-black border border-neutral-700 px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
            required
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 active:scale-95 transition-all text-white font-semibold shadow-md cursor-pointer"
          >
            Send Message
          </button>
          <p className="text-sm text-neutral-400">We respect your privacy.</p>
        </form>
      </div>
      <Meteors number={100} />
    </div>
  );
}

export default MusicMentorContactUs;
