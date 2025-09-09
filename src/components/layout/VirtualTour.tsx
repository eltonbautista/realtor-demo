"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function VirtualTour({image}: {image: string}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
        className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-lg"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
    >
      {/* The image with a subtle zoom/pan animation */}
      <motion.img
        src={image}
        alt="Virtual Tour"
        className="w-full h-auto object-cover"
        initial={{ scale: 1.05, x: 0 }}
        animate={{
          scale: hovered ? 1.2 : 1.05,
        }}
        transition={{ duration: 4, repeatType: "mirror" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}
