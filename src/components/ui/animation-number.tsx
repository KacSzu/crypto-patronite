"use client";
import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface AnimationNumberProps {
  number: number;
  index: number;
  scrollYProgress: MotionValue<number>;
}

const AnimationNumber: React.FC<AnimationNumberProps> = ({
  number,
  index,
  scrollYProgress,
}) => {
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 2.5, 1]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["#d4d4d4", "#be123c"]
  );

  return (
    <div
      className={`${
        index % 2 === 0
          ? "left-0 -translate-x-[26px] translate-y-10"
          : "right-0 translate-x-8 top-[52px]"
      } hidden lg:block absolute z-20 `}
    >
      <motion.div
        style={{ scale, backgroundColor }}
        className={
          "rounded-full w-[72px] h-[72px] flex items-center justify-center text-white shadow-md"
        }
      >
        {number}
      </motion.div>
    </div>
  );
};

export default AnimationNumber;
