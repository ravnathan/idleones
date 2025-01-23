"use client";

import { idleOnesFont } from "@/types/font";
import { motion } from "framer-motion";

export default function LoadingComp() {
  const letters = "Idle Ones".split(""); 

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="relative">
        <div className="flex">
          {letters.map((letter, index) => (
            <motion.div
              key={index}
              className={`text-6xl sm:text-8xl text-white ${
                letter === " " ? "" : idleOnesFont.className
              }`} 
              animate={{
                y: [0, -40, 0],
                scaleY: [1, 1.2, 0.8, 1.2, 1],
                scaleX: [1, 0.8, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 1.7,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              {letter === " " ? "\u00A0" : letter} 
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
