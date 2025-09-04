/* eslint-disable @typescript-eslint/no-explicit-any */
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useIsMobile } from "@/app/hooks/mobile";
import React from "react";
import { BrandBox } from "../brand-box";

const BUs = [
  {
    id: 1,
    companyWebsite: "https://www.aktienow.com",
    logoTitle: "Aktie Now",
    brandLogoPath: "/aktie-now.svg",
    description:
      "Consultoria estratégica em CX que acelera a transformação digital do atendimento. Com expertise em Zendesk e soluções complementares, transforma operações em ativos estratégicos e gera eficiência em escala..",
  },
  {
    id: 2,
    companyWebsite: "https://www.callwe.com",
    logoTitle: "Callwe",
    brandLogoPath: "/callwe.svg",
    description:
      "Plataforma de telefonia em nuvem que assegura estabilidade, alta qualidade de voz e integração flexível. Garante conexões consistentes entre empresas e clientes em todos os momentos da jornada.",
  },

  {
    id: 3,
    companyWebsite: "https://meudroz.com/",
    logoTitle: "Droz",
    brandLogoPath: "/droz.svg",
    description:
      "Plataforma de automação de CX baseada em Inteligência Artificial que descomplica e potencializa interações. Simplifica processos, aumenta a produtividade e escala experiências de forma inteligente.",
  },
  {
    id: 4,
    companyWebsite: "https://workise.com.br/",
    logoTitle: "Workise",
    brandLogoPath: "/workise.svg",
    description:
      "Especialista em simplificar a transformação digital das operações com automação e integração de processos. Conectaequipes, organiza fluxos e gera eficiência real para impulsionar resultados sustentáveis.",
  },
] as const;

export const BrandCarrousel = () => {
  const [centerPrizeId, setCenterPrizeId] = React.useState(BUs[0]?.id);
  const isMobile = useIsMobile();

  const onSliderChange = (slider: any) => {
    const centerIndex = slider.track.details.rel % BUs.length;
    const centerPrize = BUs[centerIndex];
    if (centerPrize) setCenterPrizeId(centerPrize.id as any);
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
    slideChanged: onSliderChange,
    defaultAnimation: {
      duration: 1000,
      easing: (t) => t,
    },
  });

  return (
    <div className="flex flex-col gap-6 justify-center">
      <div ref={sliderRef} className="keen-slider">
        {BUs.map((brand) => (
          <div
            key={brand.logoTitle}
            className="keen-slider__slide flex w-full justify-center"
          >
            <BrandBox
              brandLogoPath={brand.brandLogoPath}
              logoTitle={brand.logoTitle}
              companyWebsite={brand.companyWebsite}
            >
              <p className="md:text-[18px] text-white leading-6 text-left">
                {brand.description}
              </p>
            </BrandBox>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-4">
        {BUs.map((_, idx) => (
          <button
            key={idx}
            className={`w-4 h-4 rounded-full ${
              BUs[idx].id === centerPrizeId ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
};
