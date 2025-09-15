"use client";

import { motion } from "framer-motion";

export default function DemoAgent() {
  return (
    <section className="w-full bg-white py-16 md:py-24 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center md:items-stretch px-4 gap-12 md:gap-16">
        {/* Text Content */}
        <div className="flex-1 flex flex-col justify-center items-start md:pr-8">
          <div className="mb-4 flex items-center">
            <span className="inline-block w-14 h-px bg-gray-200 align-middle mr-4" />
            <span className="uppercase tracking-[0.3em] text-gray-400 text-sm font-serif">Meet</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-6 tracking-tight"
          >
            SHANNON LAVIN
          </motion.h2>
          <p className="text-gray-700 text-base md:text-lg mb-10 max-w-xl leading-relaxed">
            A licensed Real Estate Broker, Shannon specializes in luxury condominium sales in downtown Boston; working with sellers, buyers, investors, and developers. Shannon’s sales achievements have quickly ranked her among Boston’s top real estate professionals. She is notoriously known for her unwavering professionalism, market expertise, and resolute work ethic.
          </p>
          <button
            className="px-8 py-3 border border-gray-900 text-gray-900 font-medium rounded-none hover:bg-gray-900 hover:text-white transition-colors text-base tracking-wide"
            type="button"
          >
            LEARN MORE
          </button>
        </div>
        {/* Image Content */}
        <div className="flex-1 flex items-center justify-center relative w-full md:w-auto">
          {/* Subtle shadow/frame effect */}
          <div className="absolute top-4 left-4 w-full h-full bg-gray-200 z-0 hidden md:block" />
          <img
            src="/images/sarahli.jpg"
            alt="Shannon Lavin"
            className="relative z-10 w-full max-w-md object-cover shadow-lg"
            style={{ aspectRatio: "4/5" }}
          />
        </div>
      </div>
    </section>
  );
}