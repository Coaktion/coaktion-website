/* eslint-disable @typescript-eslint/no-explicit-any */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { PremiumCard } from "../premium-card";
import { useIsMobile } from "@/app/hooks/mobile";

export const PremiumCarousel = ({ prizes }: { prizes: any[] }) => {
  const [centerPrizeIndex, setCenterPrizeIndex] = useState(0);
  const isMobile = useIsMobile();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: isMobile ? 1 : 3,
      spacing: 24,
    },
    initial: 1,
    slideChanged(slider) {
      const slides = slider.track.details.slides;
      const center = slides.find((s) => s.portion === 1);

      if (center) {
        console.log(center);
        const realIndex = center.abs % prizes.length;
        setCenterPrizeIndex(realIndex);
      }
    },
  });

  return (
    <div className="w-full">
      <div ref={sliderRef} className="keen-slider">
        {prizes.map((prize) => {
          return (
            <div
              key={prize.id}
              className="keen-slider__slide flex w-full justify-center"
            >
              <PremiumCard
                highlighted={true}
                prize={{
                  id: prize.id,
                  title: prize.title,
                  img: prize.img,
                }}
              />
            </div>
          );
        })}
      </div>
      {!isMobile && (
        <div className="flex justify-center mt-4 gap-4">
          {prizes.map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-4 rounded-full ${
                centerPrizeIndex === idx ? "bg-white" : "bg-white/30"
              }`}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
