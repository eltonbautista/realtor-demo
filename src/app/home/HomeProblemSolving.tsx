"use client";
import { XCircle } from "lucide-react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import RevealOnScroll from "@/components/layout/RevealOnScroll";

const cardData = [ // Card data for mapping
  {
    title: "No Lead Capture",
    desc: "Visitors browse and leave without any way to follow up",
  },
  {
    title: "No Automation",
    desc: "Every inquiry requires manual response and follow-up",
  },
  {
    title: "Poor Mobile Experience",
    desc: "Sites don't work well on phones where 80% of searches happen",
  },
];

export default function HomeProblemSolving() {
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
        delay: i * 0.24,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  return (
    <section className="w-full bg-[#020817] py-12 md:py-16 px-6 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Most Realtor Websites Are Just{" "}
            <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
              Online Business Cards
            </span>
          </h2>
        </RevealOnScroll>

        {/* Problem Cards */}
        <div ref={cardsContainerRef} className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          {cardData.map((card, i) => (
            <motion.div
              key={card.title}
              className="flex-1 bg-[#232736] rounded-xl px-6 py-8 flex flex-col items-center text-center min-w-[260px] max-w-md mx-auto md:mx-0 shadow-md"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              custom={i}
            >
              <XCircle className="w-8 h-8 text-red-500 mb-3" />
              <p className="font-bold text-white text-xl mb-1 heading-font">{card.title}</p>
              <p className="text-gray-400 text-base">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution Card */}
        <motion.div
          className="flex justify-center"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          custom={3}
        >
          <div className="bg-[#232736] rounded-xl px-8 py-8 max-w-2xl w-full text-center mx-auto shadow-lg">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent mb-2 heading-font">
              We build sites that don&apos;t just look good—they work for you 24/7
            </div>
            <div className="text-white">
              Our AI-powered realtor websites automatically capture, qualify, and nurture leads while you focus on what you do best: closing deals.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}