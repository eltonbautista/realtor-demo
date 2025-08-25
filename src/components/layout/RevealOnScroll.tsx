"use client";

import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import React from "react";

type RevealOnScrollProps = {
    children: React.ReactNode;
    delay?: number;
};

export default function RevealOnScroll({
    children,
    delay = 0,
}: RevealOnScrollProps) {
    const { ref, isInView } = useInView();

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    )
}