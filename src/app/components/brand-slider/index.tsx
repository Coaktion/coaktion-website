/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

interface BrandSliderProps {
  direction?: "ltr" | "rtl"; // default is 'rtl'
  brands: string[];
}

export default function BrandSlider({
  direction = "rtl",
  brands,
}: BrandSliderProps) {
  const [ref, { width }] = useMeasure();
  const x = useMotionValue(0);

  useEffect(() => {
    if (!width) return;

    const from = direction === "rtl" ? 0 : -width;
    const to = direction === "rtl" ? -width : 0;

    const animation = animate(x, [from, to], {
      duration: 20,
      ease: "linear",
      repeat: Infinity,
    });

    return () => animation.stop();
  }, [width, direction]);

  return (
    <div className="w-full overflow-hidden bg-white py-0 md:py-8">
      <motion.div className="flex gap-8" ref={ref} style={{ x }}>
        {[...brands, ...brands].map((brand, index) => (
          <div
            key={index}
            className="min-w-[160px] flex items-center justify-center"
          >
            <img
              src={brand}
              alt={`Brand ${index}`}
              className="h-48 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
