"use client";

import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-transparent sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
          2
          <HoverEffect
            items={featuredWebinars.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: "/",
            }))}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="inline-block px-6 py-2 rounded-full bg-gradient-to-b from-zinc-900 to-black text-white text-sm font-medium border border-zinc-700 hover:from-zinc-800 hover:to-zinc-900 transition"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
