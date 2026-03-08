"use client";

import * as React from "react";
import { motion, useTransform, MotionValue } from "framer-motion";

interface GlareEffectProps {
  glareX: MotionValue<number>;
  glareY: MotionValue<number>;
}

export function GlareEffect({ glareX, glareY }: GlareEffectProps) {
  const background = useTransform(
    [glareX, glareY],
    ([gx, gy]) => 
      `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.15) 0%, transparent 50%)`
  );

  return (
    <motion.div
      className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden"
      style={{ background }}
    />
  );
}
