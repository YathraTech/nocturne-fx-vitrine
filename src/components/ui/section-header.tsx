"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  action?: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  action,
  className,
  tone = "light",
}: SectionHeaderProps) {
  const eyebrowCls =
    tone === "dark" ? "text-white/40" : "text-[var(--color-muted-soft)]";
  const titleCls = tone === "dark" ? "text-white" : "text-foreground";

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        {eyebrow ? (
          <p
            className={cn(
              "text-[10px] font-medium uppercase tracking-[0.25em] mb-2",
              eyebrowCls
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "text-lg md:text-xl font-medium tracking-tight uppercase",
            titleCls
          )}
        >
          {title}
        </h2>
      </motion.div>
      {action ? (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
        >
          {action}
        </motion.div>
      ) : null}
    </div>
  );
}
