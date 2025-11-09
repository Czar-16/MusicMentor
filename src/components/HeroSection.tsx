import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className=" h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="mt-53 p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>

        <div className="mt-6">
          <Link href={"/courses"}>
            <Button className="cursor-pointer">Explore courses</Button>
          </Link>
        </div>

        {/* -----------------------------
            REPLACED: instead of many <br> tags
            A polished "Why learn with us" + features row
           ----------------------------- */}
        <section className="mt-12 md:mt-16 max-w-5xl mx-auto px-4">
          {/* Feature cards / highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-zinc-900/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="text-3xl mb-3">🎹</div>
              <h3 className="font-semibold text-lg text-white mb-2">
                Expert Mentors
              </h3>
              <p className="text-sm text-neutral-300">
                Learn from seasoned musicians & industry pros who give
                personalized feedback.
              </p>
            </div>

            <div className="bg-zinc-900/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="text-3xl mb-3">🎧</div>
              <h3 className="font-semibold text-lg text-white mb-2">
                Tailored Learning
              </h3>
              <p className="text-sm text-neutral-300">
                Curated paths for beginners to advanced players—practice plans
                that actually work.
              </p>
            </div>

            <div className="bg-zinc-900/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="text-3xl mb-3">🎤</div>
              <h3 className="font-semibold text-lg text-white mb-2">
                Live & Recorded Sessions
              </h3>
              <p className="text-sm text-neutral-300">
                Live workshops, performance opportunities and quality recorded
                lessons.
              </p>
            </div>
          </div>

          {/* Small CTA / decorative note */}
          <div className="mt-8 flex items-center justify-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm text-teal-400 hover:text-teal-300"
            >
              Explore our full curriculum →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
