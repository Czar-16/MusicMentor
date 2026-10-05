"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const Meteors = React.memo(function Meteors({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) {
  const meteors = new Array(number || 20).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        // Calculate position to evenly distribute meteors across container width
        const position = idx * (2040 / meteorCount) - 400; // Spread across 800px range, centered

        // Stable variation keeps animation timings consistent across renders.
        const seed = Math.sin(idx + 1) * 10000;
        const variation = seed - Math.floor(seed);

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: "-50px", // Start above the container
              left: position + "px",

              animationDelay: variation * 5 + "s", // Delay between 0-5s
              animationDuration: Math.floor(variation * 5 + 5) + "s", // Duration between 5-9s
            }}
          ></span>
        );
      })}
    </motion.div>
  );
});
