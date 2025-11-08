import Link from "next/link";

import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <section className="py-20 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm text-teal-500 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">
            Learn With the Best
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-neutral-300">
            Hand-picked courses crafted by industry experts — designed to help
            you grow your musical skills from basics to pro.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
            {featuredCourses.map((items: Course) => (
              <div key={items.id} className="flex justify-center">
                <BackgroundGradient className="w-full max-w-sm rounded-3xl overflow-hidden transition-transform transform hover:scale-[1.03] h-full">
                  <div className="h-full flex flex-col justify-between bg-gradient-to-b from-zinc-900/95 to-black/95 backdrop-blur-sm p-8 text-center shadow-2xl rounded-3xl border border-zinc-700">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">
                        {items.title}
                      </h3>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {items.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/courses/${items.slug}`}
                        className="inline-block px-6 py-2 rounded-full bg-gradient-to-b from-zinc-900 to-black text-white text-sm font-medium border border-zinc-700 hover:from-zinc-800 hover:to-zinc-900 transition"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-b from-zinc-900 to-black text-white text-base font-semibold border border-zinc-700 shadow-md hover:from-zinc-800 hover:to-zinc-900 transition duration-200"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCourses;
