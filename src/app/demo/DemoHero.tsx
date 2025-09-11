"use client";

import { useRef, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeHero({
  realtorName,
  realtorDescription,
}: {
  realtorName: string;
  realtorDescription: string;
}) {
  const [imgTilt] = useState({ rotateX: 0, rotateY: 0 });
  const imgContainerRef = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = imgContainerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRotateY = ((x / rect.width) - 0.5) * 5;
    const newRotateX = -((y / rect.height) - 0.5) * 5;

    rotateX.set(newRotateX);
    rotateY.set(newRotateY);
  }

  function handleMouseLeave() {
    animate(rotateX, 0, { type: "spring", stiffness: 60, damping: 18 });
    animate(rotateY, 0, { type: "spring", stiffness: 60, damping: 18 });
  }

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#fafafa] overflow-hidden">
      <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-6 sm:px-8 lg:px-16 flex flex-col xl:flex-row items-center xl:items-stretch gap-8 xl:gap-0 h-auto xl:h-[70vh]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center text-left py-8 xl:py-0 xl:justify-center xl:items-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif font-light text-4xl md:text-5xl xl:text-6xl leading-tight mb-6 text-gray-700"
          >
            Homes in Santa Barbara
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-base md:text-lg xl:text-xl text-gray-400 mb-8 max-w-xl"
          >
            California American Real Estate Partners is #1 in the Santa Barbara MLS for transactions, with over $1 Billion in sales. For nearly two decades, {realtorName} has been the top producing real estate team in Montecito and the greater Santa Barbara region.
          </motion.p>

          <Button
            size="lg"
            className="px-6 py-3 text-base bg-yellow-100 hover:bg-yellow-200 text-gray-700 font-semibold rounded-md shadow-none border-none"
            onClick={() => scrollToSection("listings")}
          >
            View Our Properties
          </Button>
        </div>

        {/* Right: House Image */}
        <div className="flex-1 flex justify-center items-center w-full relative min-h-[300px] max-w-[700px]">
          {/* Blurred background image */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[260px] md:w-[520px] md:h-[320px] xl:w-[600px] xl:h-[650px] rounded-2xl overflow-hidden opacity-60 scale-110 blur-[2px] pointer-events-none z-0 shadow-xl">
            <Image
              src="/images/hero-img.jpg"
              alt="Modern house"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 700px"
            />
          </div>
          {/* Foreground image */}
          <motion.div
            ref={imgContainerRef}
            className="relative z-10 w-[320px] h-[200px] md:w-[400px] md:h-[250px] xl:w-[480px] xl:h-[300px] rounded-2xl overflow-hidden shadow-2xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              animate={imgTilt}
              transition={{ type: "spring", stiffness: 80, damping: 12 }}
              className="w-full h-full relative"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="/images/hero-img.jpg"
                alt="Modern house"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 50vw, 700px"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}