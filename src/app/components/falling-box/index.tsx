"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface FallingRevealBoxProps {
  children: React.ReactNode;
  className?: string;
  durationToDelay?: number;
}

export const FallingBox = ({
  children,
  className,
  durationToDelay = 2.5,
}: FallingRevealBoxProps) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: durationToDelay,
          type: "spring",
          bounce: 0.2,
        },
      });
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated, controls]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        controls.set({ y: -200, opacity: 0 });
        setHasAnimated(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: -200, opacity: 0 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
};
