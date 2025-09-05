/* eslint-disable @typescript-eslint/no-explicit-any */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { PremiumCard } from "../premium-card";
import { useIsMobile } from "@/app/hooks/mobile";
import React, { useEffect } from "react";

export const PremiumCarousel = ({ prizes }: { prizes: any[] }) => {
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  const [centerPrizeId, setCenterPrizeId] = React.useState(prizes[0]?.id);
  const [loading, setLoading] = React.useState(true);

  const startAutoSlide = (slider: any) => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      slider.next();
    }, 4600);
  };

  const onSliderChange = (slider: any) => {
    const centerIndex = slider.track.details.rel % prizes.length;
    const centerPrize = prizes[centerIndex];
    if (centerPrize) setCenterPrizeId(centerPrize.id);
  };
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      perView: isMobile ? 1 : 3,
      spacing: 24,
      origin: "center",
    },
    defaultAnimation: {
      duration: 1000,
      easing: (t) => t,
    },

    slideChanged(slider) {
      onSliderChange(slider);
      startAutoSlide(slider);
    },
    created(slider) {
      startAutoSlide(slider);
    },
  });

  useEffect(() => {
    const load = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      setLoading(false);
    };
    load();
  }, [prizes]);

  if (loading) return;

  return (
    <div className="w-full">
      <div ref={sliderRef} className="keen-slider">
        {prizes.map((prize) => (
          <div
            key={prize.id}
            className="keen-slider__slide flex w-full justify-center"
          >
            <PremiumCard
              highlighted={prize.id === centerPrizeId}
              prize={{
                id: prize.id,
                title: prize.title,
                img: prize.img,
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-4">
        {prizes.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full ${
              prizes[idx].id === centerPrizeId ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
};
