"use client";
import { motion } from "framer-motion";
import { Play, Calendar } from "lucide-react";
import Typewriter from '@/components/layout/Typewriter';
import Image from "next/image";
// ...existing imports...
import clsx from "clsx"; // Optional: for conditional classNames

export default function HomeHero() {
  const animDelay = 2
  
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#020817] overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white from-2% to-[#020817] to-30% pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-7xl mx-auto px-6 py-24 lg:py-0">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
          <div className="mb-2">
            <Typewriter
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white mb-0 heading-font"
              typingSpeed={30}
              lineDelay={200}
              lines={[
                "Leads In.",
                "Appointments Booked.",
                "Deals Closed.",
              ]}
            />
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: animDelay }}
            >
              <span className="relative px-1" style={{ display: "inline-block" }}>
                <span className="relative z-10 font-extrabold bg-gradient-to-r from-white via-pink-500 to-blue-800 bg-clip-text text-transparent animate-gradient-move text-5xl sm:text-6xl md:text-7xl drop-shadow-[0_0_16px_rgba(0,176,255,0.7)]">
                  Automatically.
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-md blur-lg opacity-60 bg-gradient-to-r from-white via-pink-500 to-blue-800"
                  style={{ zIndex: 0 }}
                />
              </span>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: animDelay + 0.5 }}
          >
            <p className="bg-gradient-to-r from-white to-blue-800 bg-clip-text text-transparent text-base sm:text-lg my-6 max-w-md font-semibold">
              Stop chasing. Start closing. <br/>Capture leads effortlessly, build trust instantly, and close more deals with a smarter website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#demo"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-800 hover:bg-blue-700 text-white font-semibold shadow transition text-base"
              >
                <Play className="w-5 h-5" /> See It in Action
              </a>
              <a
                href="#book"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-black/80 hover:bg-black text-white font-semibold shadow transition text-base border border-gray-700"
              >
                <Calendar className="w-5 h-5" /> Get My Free Consultation
              </a>
            </div>
            {/* <h2 className="bg-gradient-to-r text-white bg-clip-text text-transparent text-base mb-8 max-w-md font-semibold italic mt-4">
              Built by real estate web specialists. Designed to convert — not just look pretty.
            </h2> */}
          </motion.div>
        </div>

        {/* Right: Floating Demo Cards */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-16 lg:mt-0 relative">
          {/* Main Card */}
          <div className="relative">
            {/* Main Card */}
            <div className="w-[480px] h-[300px] sm:w-[540px] sm:h-[340px] bg-white/5 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden border border-white/10 backdrop-blur-md relative">
              <Image
                src="/images/home-ss.png"
                alt="Realtor Website Desktop Demo"
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 540px) 480px, 540px"
              />
            </div>
            {/* Overlapping Mobile Card */}
            <div className="absolute right-[-60px] top-20 w-[160px] h-[260px] sm:w-[200px] sm:h-[320px] bg-white/10 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden border border-white/10 backdrop-blur-md z-10">
              <Image
                src="/images/home-ss-m.png"
                alt="Realtor Website Mobile Demo"
                fill
                className="object-cover rounded-2xl"
                priority
                sizes="(max-width: 200px) 160px, 200px"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Gradient animation keyframes */}
      <style jsx global>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}