"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "article";
  once?: boolean;
};

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (custom: { delay: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom.delay,
      ease: EASE_OUT,
    },
  }),
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
  once = true,
}: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      className={cn(className)}
      variants={baseVariants}
      initial="hidden"
      whileInView="show"
      custom={{ delay, y }}
      viewport={{ once, margin: "-80px" }}
    >
      {children}
    </Comp>
  );
}
