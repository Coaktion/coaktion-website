"use client";

import { useEffect, useState, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  isPercentage?: boolean;
  duration?: number;
  triggerRef?: React.RefObject<HTMLElement | null>;
  className: string;
}

export function AnimatedNumber({
  value,
  duration = 2,
  triggerRef,
  isPercentage = false,
  className,
}: AnimatedNumberProps) {
  const localRef = useRef(null);
  const refToObserve = triggerRef || localRef;

  const isInView = useInView(refToObserve, {
    once: false,
    margin: "-20% 0px -20% 0px",
  });

  const [displayValue, setDisplayValue] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShouldAnimate(false); // Reset trigger
        requestAnimationFrame(() => {
          setShouldAnimate(true); // Reactivate on next frame
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined;

    if (isInView && shouldAnimate) {
      controls = animate(0, value, {
        duration,
        onUpdate(latest) {
          setDisplayValue(Math.round(latest));
        },
      });
    } else if (!isInView || !shouldAnimate) {
      setDisplayValue(0);
    }

    return () => controls?.stop();
  }, [isInView, value, duration, shouldAnimate]);

  return (
    <span ref={localRef} className={className}>
      {displayValue}
      {isPercentage && (
        <span className="font-bold md:text-[42px] text-[#A30084]">%</span>
      )}
    </span>
  );
}
