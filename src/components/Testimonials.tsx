"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils"; 

const testimonials = [
  {
    quote: "RoadWatch helped us avoid a traffic jam during peak hours. It’s like having a traffic assistant in your pocket.",
    author: "— Aditi S., Daily Commuter",
  },
  {
    quote: "The reporting tool is so easy that even my mom used it to report a pothole near our house!",
    author: "— Raj M., Local Resident",
  },
  {
    quote: "As a city planner, I finally have real-time public input to act on. Game-changing.",
    author: "— Priya K., Urban Planner",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5s auto slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="h-[200px] overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full text-center"
          >
            <blockquote className="italic max-w-3xl mx-auto">
              “{testimonials[index].quote}”
              <div className="mt-4 font-semibold">{testimonials[index].author}</div>
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={cn(
              "w-3 h-3 rounded-full border cursor-pointer",
              i === index ? "bg-white border-white" : "bg-gray-600 border-gray-600"
            )}
          />
        ))}
      </div>
    </div>
  );
}
