import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import StickyScrollRevealDemo from "@/components/WhyChooseUs";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <StickyScrollRevealDemo />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructor />
    </main>
  );
}
