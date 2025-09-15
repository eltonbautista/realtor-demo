"use client";
import { Bot, Mail, Smartphone, Home } from "lucide-react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import RevealOnScroll from "@/components/layout/RevealOnScroll";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-blue-500" />,
    title: "AI Lead Qualification",
    desc: "Filters serious buyers & sellers instantly.",
  },
  {
    icon: <Mail className="w-8 h-8 text-blue-500" />,
    title: "Automated Follow-Ups",
    desc: "Never miss a lead with intelligent email and SMS sequences that nurture prospects.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-blue-500" />,
    title: "Mobile-Optimized Design",
    desc: "Perfect experience on any device where your clients are searching",
  },
  {
    icon: <Home className="w-8 h-8 text-blue-500" />,
    title: "MLS Integration",
    desc: "Automatically sync your listings and keep your site fresh with new properties",
  },
];

export default function CoreFeatures() {
  const cardsContainerRef = useRef(null);
  const isInView = useInView(cardsContainerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    })
  }

  return (
    <section className="w-full bg-[#020817] py-12 md:py-16 px-6 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-white heading-font">
            Core Features That{" "}
            <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-white text-xl text-center mb-12 max-w-3xl mx-auto">
            Every feature is designed to convert more visitors into qualified leads and automate your follow-up process.
          </p>
        </RevealOnScroll>

        {/* Features Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className="bg-[#232736] rounded-xl px-8 py-10 flex flex-col items-center text-center shadow-md"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={features.length - i}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#232746] mb-4 border border-blue-900">
                {f.icon}
              </div>
              <p className="font-bold text-white text-xl mb-2 heading-font">{f.title}</p>
              <p className="text-gray-400 text-base">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}