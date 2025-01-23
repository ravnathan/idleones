"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { idleOnesFont } from "@/types/font";
import EmblaCarousel from "./components/EmblaCarousel";
import Biodata from "./components/Biodata";
import { EmblaOptionsType } from "embla-carousel";
import Head from "next/head";

// const metadata: Metadata = {
//   title: "Idle Ones",
//   description: "Hall of Shame",
//   openGraph: {
//     title: "Idle Ones",
//     description: "Hall of Shame",
//     url: "https://hallofidleones.vercel.app/",
//     siteName: "Hall of Idle Ones",
//     images: "/EvilCatSurprise.png"
//   }
// }

export default function Home() {
  const [isShamed, setIsShamed] = useState(false);

  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShamed(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <Head>
        <title>Idle Ones</title>
        <meta name="description" content="Hall of Shame" />
        <meta property="og:title" content="Idle Ones" />
        <meta property="og:description" content="Hall of Shame" />
        <meta property="og:url" content="https://hallofidleones.vercel.app/" />
        <meta property="og:site_name" content="Hall of Idle Ones" />
        <meta property="og:image" content="/EvilCatSurprise.png" />
        <meta property="og:type" content="website" />
      </Head>
      <motion.h1
        className={`${idleOnesFont.className} text-white text-4xl lg:text-6xl text-center pt-20`}
        style={{
          textShadow: "2px 2px 4px #000000, -2px -2px 4px #000000",
        }}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <span className="relative inline-block">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Idle Ones Hall of{" "}
          </motion.span>
          <motion.span
            key={isShamed ? "Shame" : "Fame"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {isShamed ? "Shame" : "Fame"}
          </motion.span>
        </span>
      </motion.h1>

      <div className="flex items-center justify-center pt-8 lg:pt-20">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <Biodata />
    </div>
  );
}
