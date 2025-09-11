"use client";
import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import Typewriter from '@/components/layout/Typewriter';

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020817] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white from-2% to-[#020817] to-30% pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto px-6 py-24 lg:py-0">
        {/* Left: Text */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <Typewriter
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-6 heading-font"
            typingSpeed={30}
            lineDelay={200}
            lines={[
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white from-10% to-blue-500 to-30%">
                AI-Powered Websites
              </span>,
              <span className="block text-white">for Realtors That</span>,
              <span className="block text-white">Capture More</span>,
              <span className="block text-white">Leads,</span>,
              <span className="block text-white">Automatically.</span>,
            ]}
          />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3 }}
            >
              <p className="bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent text-base sm:text-lg mb-8 max-w-md font-semibold">
                Let your experience and expertise shine through a website that tells your professional story effectively.
              </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-semibold shadow transition text-base"
              >
                <Play className="w-5 h-5" /> See Demo
              </a>
              <a
                href="#book"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black/80 hover:bg-black text-white font-semibold shadow transition text-base border border-gray-700"
              >
                <Calendar className="w-5 h-5" /> Book Free Call
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Demo Cards */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-16 lg:mt-0 relative">
          {/* Main Card */}
          <div className="relative">
            <div className="w-[340px] h-[220px] sm:w-[400px] sm:h-[260px] bg-white/5 rounded-2xl shadow-2xl flex flex-col items-center justify-center backdrop-blur-md border border-white/10">
              <span className="text-3xl mb-2">🏡</span>
              <span className="text-white/80 text-base">Interactive Realtor Website Demo</span>
            </div>
            {/* Overlapping Mobile Card */}
            <div className="absolute right-[-60px] top-10 w-[140px] h-[220px] sm:w-[170px] sm:h-[260px] bg-white/5 rounded-2xl shadow-xl flex flex-col items-center justify-center backdrop-blur-md border border-white/10">
              <span className="text-2xl mb-2">🇺🇸</span>
              <span className="text-white/80 text-xs text-center">Mobile Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}