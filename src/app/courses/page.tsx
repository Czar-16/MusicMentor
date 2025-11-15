"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";

function allCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black-900 to-black py-12 pt-36">
      <h1 className="text-2xl md:text-6xl text-center font-sans font-extrabold mb-12 text-white tracking-tight drop-shadow-lg animate-fade-in">
        Explore Our Courses
      </h1>

      {/* Updated layout: 3 cards per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {courseData.courses.map((course, index) => (
          <CardContainer
            key={course.title}
            className="inter-var animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Card */}
            <CardBody
              className="relative group/card bg-gray-800/50 backdrop-blur-md 
              dark:bg-gray-900/70 dark:border-gray-700 border-gray-800 
              w-full h-auto rounded-2xl p-6 border 
              transition-all duration-300 hover:shadow-2xl hover:shadow-white-500/20"
            >
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-gray-500 tracking-wide 
                group-hover/card:text-white transition-colors duration-300"
              >
                {course.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-gray-300 text-sm max-w-sm mt-3 leading-relaxed 
                group-hover/card:text-gray transition-colors duration-300"
              >
                {course.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-6">
                <img
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-64 w-full object-cover rounded-xl 
                  group-hover/card:scale-105 group-hover/card:shadow-xl 
                  transition-transform duration-500 ease-out"
                  alt={course.title}
                />
              </CardItem>

              <div className="flex justify-between items-center mt-16">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/itsCzar16"
                  target="_blank"
                  className=" cursor-pointer px-5 py-2.5 rounded-xl text-sm font-medium 
                  text-white hover:text-white hover:bg-black 
                  transition-all duration-300"
                >
                  Try Now →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"
                  className="cursor-pointer px-5 py-2.5 rounded-xl bg-gradient-to-r from-black to-black 
                  text-white text-sm font-bold hover:scale-105 hover:shadow-lg 
                  hover:shadow-white/50 transition-all duration-300"
                >
                  Sign Up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default allCoursePage;
