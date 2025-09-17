"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
            className="font-serif text-4xl md:text-5xl font-normal text-gray-900 mb-6 tracking-tight uppercase"
          >
            Sarah Li
          </motion.h2>
          <p className="text-gray-700 text-base md:text-lg mb-10 max-w-xl leading-relaxed">
            As a distinguished Real Estate Broker specializing in Edmonton&apos;s luxury condominium market,
            Sarah curates exclusive opportunities for high-net-worth clients, developers, and strategic investors.
            Her remarkable ascent to the upper echelon of Edmonton&apos;s real estate professionals is built upon her sterling reputation for discretion, sophisticated market insight, and unwavering commitment to exceptional results.
          </p>
          <Button
            size="lg"
            className="px-8 py-3 border border-gray-900 text-gray-900 font-medium rounded-none hover:bg-gray-900 hover:text-white transition-colors text-base tracking-wide uppercase bg-white"
          >
            Learn More
          </Button>
        </div>
        {/* Image Content */}
        <div className="flex-1 flex items-center justify-center relative w-full md:w-auto">
          {/* Subtle shadow/frame effect */}
          <div className="absolute top-4 left-4 w-full h-full bg-gray-100 z-0 hidden md:block" />
          <Image
            src="/images/sarahli.jpg"
            alt="Shannon Lavin"
            width={320}
            height={400}
            className="relative z-10 w-full max-w-md object-cover shadow-lg"
            style={{ aspectRatio: "4/5" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}