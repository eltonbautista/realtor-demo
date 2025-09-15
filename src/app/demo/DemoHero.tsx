"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomeHero({
  realtorName,
  realtorDescription,
}: {
  realtorName: string;
  realtorDescription: string;
}) {
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#fafafa] overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/demo.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Semi-dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
      {/* Foreground Content */}
      <div className="relative z-20 max-w-screen-2xl mx-auto w-full px-6 sm:px-8 lg:px-16 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif font-light text-4xl md:text-5xl xl:text-6xl leading-tight mb-6 text-white text-center"
        >
          Homes in <br /> Edmonton, Alberta
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-base md:text-lg xl:text-xl text-gray-200 mb-8 max-w-xl text-center"
        >
          Discover why {realtorName} and her team are Edmonton&apos;s most trusted real estate experts. With over $10 Million in sales and a legacy of top performance, we turn your home goals into reality.
        </motion.p>

        <Button
          size="lg"
          className="px-8 py-3 border border-gray-900 text-gray-900 font-medium rounded-none bg-white hover:bg-gray-900 hover:text-white transition-colors text-base tracking-wide"
          onClick={() => scrollToSection("listings")}
        >
          View Our Properties
        </Button>
      </div>
    </section>
  );
}