return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#04102a] to-[#030216] text-white relative overflow-hidden flex items-center justify-center py-20">
      {/* ⭐ Meteors background placed exactly like your demo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* parent must be relative + sized so Meteors can fill it — mimic your demo's structure */}
        <div className="relative w-full h-full">
          {/* pass number prop like demo; adjust number for density */}
          <Meteors number={40} />
        </div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-2xl mx-auto p-8 rounded-3xl border border-neutral-700/40 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-md shadow-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-3 text-white">
          Contact Us
        </h1>

        <p className="text-neutral-300 mb-6">
          Have questions about courses, pricing, or events? Send us a message
          and we'll respond soon.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm text-neutral-300">Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl bg-neutral-900/50 border border-neutral-700 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-neutral-300">Message</label>
            <textarea
              value={message}
              required
              rows={5}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us how we can help..."
              className="mt-2 w-full rounded-xl bg-neutral-900/50 border border-neutral-700 px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 active:scale-95 transition-all text-white font-semibold shadow-md"
            >
              Send Message
            </button>

            <p className="text-sm text-neutral-400">We respect your privacy.</p>
          </div>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div
          className="fixed right-6 top-6 z-50 rounded-lg px-5 py-3 shadow-xl flex items-center gap-3 animate-popup bg-emerald-500 text-black font-semibold"
          role="alert"
        >
          ✓ Message sent successfully!
        </div>
      )}