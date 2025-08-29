"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HomeHero({
  realtorName,
  realtorDescription,
}: {
  realtorName: string;
  realtorDescription: string;
}) {
  const [imgTilt, setImgTilt] = useState({ rotateX: 0, rotateY: 0 });
  const imgContainerRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = imgContainerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 15;
    const rotateX = -((y / rect.height) - 0.5) * 15;
    setImgTilt({ rotateX, rotateY });
  }

  function handleMouseLeave() {
    setImgTilt({ rotateX: 0, rotateY: 0 });
  }

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="relative z-10 max-w-screen-2xl mx-auto w-full px-4 sm:px-8 lg:px-16 flex flex-col xl:flex-row items-center md:items-stretch gap-8 xl:gap-16 h-auto xl:h-[80vh]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left py-8 xl:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-font text-5xl xl:text-6xl font-extrabold leading-tight mb-6"
          >
            Real Estate Made Simple with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              {realtorName}.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-md md:text-xl text-gray-600 mb-8"
          >
            {realtorDescription}
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
            <Button size="lg" className="px-6 py-3 text-base sm:text-lg bg-blue-500 hover:bg-[#111827] shadow-lg flex items-center gap-2 text-[#ffffff]">
              <Home size={20} /> Browse Listings
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-3 text-base sm:text-lg border-2 hover:bg-blue-50 flex items-center gap-2"
            >
              Learn More <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        {/* Right: House Image */}
        <div className="flex-1 flex justify-center items-center w-full">
          <motion.div
            ref={imgContainerRef}
            className="relative w-full h-56 sm:h-72 md:h-96 xl:h-[70vh] 2xl:h-[80vh] max-h-[80vh] min-h-[200px] max-w-[600px] xl:max-w-[700px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              animate={imgTilt}
              transition={{ type: "spring", stiffness: 80, damping: 12 }}
              className="w-full h-full relative"
              style={{ willChange: "transform" }}
            >
              <Image
                src="/images/hero-img.jpg"
                alt="Modern house"
                fill
                className="object-cover rounded-3xl md:rounded-4xl drop-shadow-xl"
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