"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "../ui/magnetic";

interface IRoundedButton {
  children: ReactNode;
  backgroundColor: string;
}

export default function AnimatedButton({
  children,
  backgroundColor = "#be123c",
  ...attributes
}: IRoundedButton) {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>(gsap.timeline({ paused: true }));
  let timeoutId: number | null = null;

  useEffect(() => {
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = window.setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={`relative flex items-center justify-center cursor-pointer shadow-xl border-[1.5px] border-neutral-400 hover:text-[#fff] hover:border-[${backgroundColor}] rounded-full px-12 py-6 overflow-hidden transition-colors transition-border-color duration-300 ease-in-out`}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        <p className="relative z-10 transition-colors duration-300 ease-in-out">
          {children}
        </p>
        <div
          ref={circle}
          style={{ backgroundColor }}
          className="absolute w-full h-[150%] rounded-full top-full"
        ></div>
      </div>
    </Magnetic>
  );
}
