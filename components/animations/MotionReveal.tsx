"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

type MotionRevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
};

export function MotionReveal({
  children,
  className,
  delay = 0,
  ...rest
}: MotionRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={fadeUp}
      initial={reduce ? "visible" : "hidden"}
      animate={reduce || inView ? "visible" : "hidden"}
      transition={{ delay: reduce ? 0 : delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
