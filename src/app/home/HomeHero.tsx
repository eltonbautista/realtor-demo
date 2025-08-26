"use client";
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
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="relative h-[75vh] z-10 max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center md:items-stretch gap-10">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-font text-4xl md:text-6xl font-extrabold leading-tight mb-6"
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
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            {realtorDescription}
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4">
            <Button size="lg" className="px-6 py-3 bg-blue-500 hover:bg-blue-700 shadow-lg flex items-center gap-2 text-lg text-[#ffffff]">
              <Home size={20} /> Browse Listings
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6 py-3 border-2 hover:bg-blue-50 flex items-center gap-2 text-lg"
            >
              Learn More <ArrowRight size={20} />
            </Button>
          </div>
        </div>

        {/* Right: House Image */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full h-[75%] max-h-[75vh]">
            <Image
              src="/images/hero-img.jpg" // replace with your image path
              alt="Modern house"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
