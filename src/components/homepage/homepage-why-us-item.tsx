"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import AnimationNumber from "../ui/animation-number";

interface IHomepageWhyUsItem {
  title: string | null;
  svgPath: string | null;
  content: string | null;
  number: number | null;
  index: number;
}

const HomepageWhyUsItem = ({
  title,
  svgPath,
  content,
  number,
  index,
}: IHomepageWhyUsItem) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const scrollText = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const strokeDashoffset = useTransform(scrollYProgress, [0, 1], [-1100, 0]);

  const y = useTransform(scrollText.scrollYProgress, [0, 0.5, 1], [50, 0, 0]);

  return (
    <section
      ref={ref}
      className={`relative lg:py-[72px] ${index % 2 === 1 && "bg-secondary"}`}
    >
      <div className="relative min-h-[250px] grid text-center gap-2 lg:text-start lg:gap-0 grid-cols-12 max-w-[880px] mx-auto">
        <div
          className={`absolute top-[10%] right-[10%] z-0 translate-x-[-50%] translate-y-[-50%] `}
        >
          <div className="hidden lg:block">
            <Image
              src={svgPath as string}
              alt={title as string}
              width={200}
              height={200}
            />
          </div>
        </div>
        <AnimationNumber
          number={number as number}
          index={index}
          scrollYProgress={scrollYProgress}
        />
        <div className="col-span-8 grid grid-cols-12 col-start-3 relative z-20">
          <div className="col-span-12">
            <div className="lg:hidden flex justify-center">
              <Image
                src={svgPath as string}
                alt={title as string}
                width={200}
                height={200}
              />
            </div>
            <h2 className="text-3xl text-primary font-semibold">{title}</h2>
          </div>
          <div className="col-span-12">
            <p className="text-foreground mt-4">{content}</p>
          </div>
        </div>
        <div
          className={`${
            index % 2 === 0 ? "scale-x-[-1]" : "scale-x-[1]"
          } w-full absolute left-0 z-[5] hidden lg:block top-12 h-[500px]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full absolute left-0 z-[5] top-0 h-[500px]"
            viewBox="0 0 831 366"
            height={"100%"}
            width={"100%"}
          >
            <path
              d="M3.5 351.2c0-96.2 77.8-174 174-174H652c96.2 0 174-77.8 174-174"
              style={{ fill: "none", stroke: "#d4d4d4", strokeWidth: 2 }}
            />
          </svg>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 831 366"
            className="w-full absolute left-0 z-[5] top-0 h-[500px]"
            height={"100%"}
            width={"100%"}
          >
            <motion.path
              d="M3.5 351.2c0-96.2 77.8-174 174-174H652c96.2 0 174-77.8 174-174"
              fill="none"
              stroke="#be123c"
              strokeWidth="2"
              strokeDasharray="2000"
              style={{ strokeDashoffset }}
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default HomepageWhyUsItem;
