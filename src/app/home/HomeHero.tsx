"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

export default function HomeHero({
  realtorName,
  realtorDescription,
}: {
  realtorName: string;
  realtorDescription: string;
}) {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Animated headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
        >
          Find Your Dream Home with{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            {realtorName}
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-8"
        >
          {realtorDescription}
        </motion.p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="rounded-xl px-6 py-3 bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center gap-2 text-lg">
            <Home size={20} /> Browse Listings
          </Button>
          <Button
            variant="outline"
            className="rounded-xl px-6 py-3 border-2 hover:bg-blue-50 flex items-center gap-2 text-lg"
          >
            Learn More <ArrowRight size={20} />
          </Button>
        </div>
      </div>

      {/* Animated SVG "house building" */}
      <svg
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 text-blue-400 opacity-30"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 200 200"
      >
        {/* Base rectangle */}
        <motion.rect
          x="50"
          y="80"
          width="100"
          height="80"
          strokeDasharray="400"
          strokeDashoffset="400"
          animate={{ strokeDashoffset: [400, 0, 400] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        {/* Roof triangle */}
        <motion.polygon
          points="50,80 150,80 100,40"
          strokeDasharray="300"
          strokeDashoffset="300"
          animate={{ strokeDashoffset: [300, 0, 300] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1, ease: "linear" }}
        />
        {/* Door */}
        <motion.rect
          x="90"
          y="110"
          width="20"
          height="50"
          strokeDasharray="150"
          strokeDashoffset="150"
          animate={{ strokeDashoffset: [150, 0, 150] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2, ease: "linear" }}
        />
      </svg>
    </section>
  );
}
