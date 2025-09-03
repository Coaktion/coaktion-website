/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
"use client";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { AnimatedNumber } from "./components/animated-number";
import Image from "next/image";
import BrandSlider from "./components/brand-slider";
import { firstLineBrands, secondLineBrands } from "./utils/constants";
import { PinkButton } from "./components/button";
import { BrandBox } from "./components/brand-box";
import { StickFooter } from "./components/footer";
import { useTranslations } from "next-intl";
import { MovingSphereBackground } from "./components/sphere-bg";
import { DotPagination } from "./components/DotPagination";
import { FallingBox } from "./components/falling-box";
import { Header } from "./components/header";
import Link from "next/link";
import { OfficeIcon } from "./components/icons/office-icon";
import { Badge } from "./components/icons/badge";
import { EarthIcon } from "./components/icons/earth-icon";
import { PremiumCard } from "./components/premium-card";
import { useIsMobile } from "./hooks/mobile";
import { GetResponseForm } from "./components/get-response-form";

export default function Page() {
  const [_, { width }] = useMeasure();
  const [selectedPrize, setSelectedPrize] = useState(2);

  const numbersSectionRef = useRef(null);
  const prizesSectionRef = useRef(null);

  const XTranslation = useMotionValue(0);
  const t = useTranslations("Texts");
  const isMobile = useIsMobile();

  useEffect(() => {
    let controls;
    const finalPosition = -width / 2;
    controls = animate(XTranslation, [0, finalPosition], {
      duration: 15,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [XTranslation, width]);

  const prizes = [
    {
      id: 1,
      title: "Platinum Partner - Advanced Delivery Partner",
      img: "/monday.svg",
    },
    {
      id: 2,
      title: "Consultoria estratégica de 2025",
      img: "/consumidor-moderno.svg",
    },
    {
      id: 3,
      title: "Parceiro do Ano América do Norte 2024",
      img: "/zendesk.svg",
    },

    {
      id: 4,
      title: "Líder em Gerenciamento e Relatórios de Projetos Adaptativos",
      img: "/gartner.svg",
    },
  ];
  const showPrizes = isMobile ? 1 : 3;
  const reorderedPrizes = (() => {
    const selected = prizes.find((p) => p.id === selectedPrize);
    if (!selected) return prizes.slice(0, showPrizes);
    const otherPrizes = prizes.filter((p) => p.id !== selectedPrize);
    if (isMobile) return [selected];
    return [otherPrizes[0], selected, otherPrizes[1]].filter(Boolean);
  })();
  console.log(isMobile, reorderedPrizes);
  return (
    <>
      <main className="bg-white text-gray-800 ">
        {/* Header */}
        <Header pathToResource="/" />
        {/* Seção 1 */}
        <section
          className="w-full
          bg-black 
           md:bg-[url('/stars-bg.png')] 
          md:bg-cover md:bg-no-repeat md:bg-center max-h-[calc(100vh-80px)] min-h-screen md:h-screen relative bg-cover bg-no-repeat bg-center overflow-hidden flex md:items-center items-center justify-center"
        >
          <MovingSphereBackground />
          <div className="relative z-10 flex flex-col items-center text-white">
            <div className="flex flex-col py-8 mt-12 items-center text-center max-w-3xl px-4 md:px-0">
              <h1 className="text-[16px] md:mb-0 mb-0 self-center lg:text-4xl md:text-[42px]">
                {t("h1")}
              </h1>
              <h1 className="mt-4  text-[16px] text-sm md:text-[42px] font-bold">
                {t("h2")}
              </h1>
            </div>

            <Link href="#contact-form">
              <button
                className="
        group inline-flex items-center  mt-12 md:mt-6 gap-2
        rounded-xl md:px-6 px-3 md:py-3 py-2 font-medium md:text-[18px] text-[16px]  text-white
        bg-gradient-to-tr from-[#A30084] to-[#C4009F]
        shadow-lg shadow-[#A30084]/30
        transition duration-300 ease-out
        hover:from-[#8A0072] hover:to-[#A30084]
        hover:shadow-[#A30084]/50
        hover:-translate-y-0.5 active:translate-y-0
        focus:outline-none focus-visible:ring-4 focus-visible:ring-[#A30084]/40
        focus-visible:ring-offset-2 focus-visible:ring-offset-black
      "
                aria-label="Comece agora"
              >
                {t("bannerButton")}
                <Image
                  src="/circle-arrow.svg"
                  height={24}
                  width={24}
                  alt="comece agora"
                />
              </button>
            </Link>
          </div>
        </section>

        {/* Seção 2 */}
        <section
          ref={numbersSectionRef}
          className="w-full py-16 flex-col md:gap-12 items-center flex md:py-16 min-h-[360px] px-4 md:px-8 lg:px-16"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="md:text-[42px] text-[16px] text-[#0B0B0B] leading-snug">
              Transformar é a única forma
              <br />
              <span>
                {" "}
                de permanecer{" "}
                <span className="text-[#C4009F] font-bold">relevante</span>
              </span>
            </h3>
          </div>

          <div className="w-full md:flex mt-8 md:mt-0">
            <div className="md:w-[65%] flex flex-col gap-3 w-[100%]">
              <FallingBox className="w-full py-16 md:gap-6 flex-col items-center md:flex md:flex-row rounded-md md:min-h-[70px] min-h-[220px] bg-white shadow-sm px-4 md:py-3 border border-[#A30084]">
                <span className="font-bold text-[42px] text-[#A30084] md:self-start self-center md:ml-0 ml-[30%]">
                  72%
                </span>
                <p className="text-md md:text-[18px]">
                  dos líderes ainda não veem um caminho claro para atingir os
                  objetivos da transformação digital.
                </p>
              </FallingBox>

              <FallingBox className="w-full py-16 md:gap-6 flex-col items-center md:flex md:flex-row rounded-md md:min-h-[70px] min-h-[220px] bg-white shadow-sm px-4 md:py-3 border border-[#A30084]">
                <span className="font-bold text-[42px] text-[#A30084] md:self-start self-center md:ml-0 ml-[30%]">
                  76%
                </span>
                <p className="text-md md:text-[18px]">
                  dos projetos falham por não colocar o cliente no centro.
                </p>
              </FallingBox>

              <FallingBox className="w-full py-16 md:gap-6 flex-col items-center md:flex md:flex-row rounded-md md:min-h-[70px] min-h-[220px] bg-white shadow-sm px-4 md:py-3 border border-[#A30084]">
                <span className="font-bold text-[42px] text-[#A30084] md:self-start self-center md:ml-0 ml-[30%]">
                  61%
                </span>

                <p className="text-md md:text-[18px]">
                  dos executivos afirmam que a falta de investimento em CX já
                  resultou em perda de competitividade.
                </p>
              </FallingBox>
            </div>

            <div className="md:w-[35%] w-full mt-6 md:mt-0 px-12 self-center">
              <p className="text-md md:text-[20px]">
                É por isso que existimos: para que você não faça parte dessas
                estatísticas.
              </p>

              <br />
              <p className="text-md md:text-[20px]">
                Somos um ecossistema que une{" "}
                <span className="md:text-[20px] text-16px font-bold">
                  Experiência do Cliente
                </span>{" "}
                e{" "}
                <span className="md:text-[20px] text-16px first-line:font-bold">
                  Transformação Digital
                </span>{" "}
                para evoluir negócios. Conectamos tecnologia, automação e gestão
                de processos para gerar eficiência, escala e experiências que
                impulsionam resultados.
              </p>
              <Link href="#contact-form">
                <button
                  className=" group inline-flex items-center mt-8 gap-2 rounded-xl px-6 py-3 font-medium text-white  bg-gradient-to-tr from-[#A30084] to-[#C4009F] shadow-lg shadow-[#A30084]/30 transition duration-300 ease-out hover:from-[#8A0072] hover:to-[#A30084] hover:shadow-[#A30084]/50 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#A30084]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  aria-label="Comece agora"
                >
                  Descubra como
                  <Image
                    src="/circle-arrow.svg"
                    width={12}
                    height={12}
                    alt="Descubra como"
                  />
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section
          className="w-full py-16 flex-col md:gap-12 items-center flex md:py-16 min-h-[680px] px-4 md:px-8 lg:px-16 text-white"
          style={{
            backgroundImage: `
      radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.6) 100%),
      linear-gradient(to top, rgba(0, 0, 0, 0.65), transparent 40%),
      linear-gradient(to left, rgba(0, 0, 0, 0.6), transparent 30%),
      linear-gradient(to right, rgba(0, 0, 0, 0.6), transparent 30%),
      linear-gradient(to bottom,
        #0a0a0a 0%,
        #1a0016 40%,
        #3a0030 60%,
        #5b0041 80%,
        #82025e 100%)
    `,
            backgroundBlendMode: "multiply",
          }}
          ref={prizesSectionRef}
        >
          <h1 className="md:text-3xl text-[16px] text-white">
            Experiência e inovação ao{" "}
            <span className="font-bold">redor do mundo</span>
          </h1>
          <div className="md:grid md:grid-cols-3 flex flex-col w-full min-h-[90px]">
            {/* 1 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <OfficeIcon />
              <p className="text-md">Escritórios no</p>
              <p className="font-bold text-white md:text-[30px] text-[20px] mt-2">
                Brasil e Estados <br /> Unidos
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <EarthIcon />
              <p>Projetos em</p>
              <p className="font-bold text-white md:text-[35px] text-[20px] mt-4">
                + de{" "}
                <AnimatedNumber
                  className="font-extralight text-white"
                  triggerRef={prizesSectionRef}
                  duration={4}
                  value={11}
                />{" "}
                países
              </p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <Badge />
              <p>Das 100 maiores marcas</p>
              <p className="font-bold text-white md:text-[30px] text-[20px] mt-2">
                <AnimatedNumber
                  className="font-extralight text-white"
                  triggerRef={prizesSectionRef}
                  duration={4}
                  value={15}
                />{" "}
                estão com <br /> a gente
              </p>
            </div>
          </div>
          <h1 className="md:text-3xl md:mt-16 mt-8 md:mb-0 mb-8 text-white">
            <span className="font-bold text-[18px] md:text-[36px]">
              Reconhecidos e premiados
            </span>{" "}
            globalmente
          </h1>

          <div className="flex gap-12 flex-col w-full">
            <div className="flex items-center justify-center md:flex-row">
              {reorderedPrizes.map((prize) => (
                <PremiumCard
                  key={prize.id}
                  prize={prize}
                  highlighted={prize.id === selectedPrize}
                />
              ))}
            </div>

            <DotPagination
              activeIndex={selectedPrize - 1}
              total={prizes.length}
              onDotClick={(index) => setSelectedPrize(index + 1)}
            />
          </div>
        </section>

        <section className="w-full py-16 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col mx-auto">
            <h1 className="md:text-3xl text-[22px] self-center text-[#A30084]">
              <span className="font-bold mr-2">Marcas de peso</span>
              que já evoluíram seu negócio
            </h1>
            <BrandSlider brands={firstLineBrands} direction="ltr" />
            <BrandSlider brands={secondLineBrands} />
            <div className="self-center">
              <Link href="#contact-form">
                <PinkButton>Junte-se a elas</PinkButton>
              </Link>
            </div>
          </div>
        </section>

        {/* Seção 5 */}
        <section
          className="w-full py-16 px-4 md:px-8 md:min-h-[620px] lg:px-16"
          style={{ backgroundImage: "url('/section-bg.png')" }}
        >
          <div className="flex flex-col h-full items-center gap-1">
            <h1 className="md:text-3xl m-auto self-center place-self-center leading-5 text-white">
              Conheça a inteligência que conecta
            </h1>

            <span className="font-bold md:text-3xl m-auto self-center place-self-center text-[#A30084]">
              nosso ecossistema
            </span>
          </div>

          <div className="h-full w-full px-4 md:px-16 py-10">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <BrandBox
                companyWebsite="https://www.aktienow.com"
                logoTitle="Aktie Now"
                brandLogoPath="/aktie-now.svg"
              >
                <p className="md:text-[16px] min-h-[100px] text-white leading-6 text-left">
                  Consultoria estratégica em CX que acelera a transformação digital do atendimento.
                  Com expertise em Zendesk e soluções complementares, transforma operações em ativos estratégicos e gera eficiência em escala.
                </p>
              </BrandBox>

              <BrandBox
                companyWebsite="https://callwe.io/"
                logoTitle="Callwe"
                brandLogoPath="/callwe.svg"
              >
                <p className="md:text-[16px] text-white leading-6 text-left">
                  Plataforma de telefonia em nuvem que assegura estabilidade, 
                  alta qualidade de voz e integração flexível. 
                  Garante conexões consistentes entre empresas e clientes em todos 
                  os momentos da jornada.
                </p>
              </BrandBox>
              <BrandBox
                companyWebsite="https://meudroz.com/"
                logoTitle="Droz"
                brandLogoPath="/droz.svg"
              >
                <p className="md:text-[16px]  text-white leading-6 text-left">
                  Plataforma de automação de CX baseada em Inteligência Artificial
                   que descomplica e potencializa interações. Simplifica processos,
                   aumenta a produtividade e escala experiências de forma inteligente.
                </p>
              </BrandBox>

              <BrandBox
                companyWebsite="https://workise.com.br/"
                logoTitle="Workise"
                brandLogoPath="/workise.svg"
              >
                <p className="md:text-[16px] text-white leading-6 text-left">
                  Especialista em simplificar a transformação digital das operações
                   com automação e integração de processos. 
                   Conecta equipes, organiza fluxos e gera eficiência real para impulsionar
                   resultados sustentáveis.
                </p>
              </BrandBox>
            </div>
          </div>
        </section>

        {/* Form get response */}
        <section id="contact-form" className="w-full md:py-14 py-10 gap-6 md:gap-8 flex-col px-4 md:px-8 flex items-center justify-center lg:px-16">
          {/* <h3 className="md:text-3xl text-[16px] text-[#0B0B0B] leading-snug">
            Pronto para
            <span className="font-bold ml-2 mr-2 text-[#A30084]">
              simplificar a transformação
            </span>
            <br />
            <div className="items-center justify-center flex">
              <h3 className="md:text-3xl text-[16px] self-center justify-center mx-auto text-[#0B0B0B] leading-snug">
                digital e gerar resultados reais?
              </h3>
            </div>
          </h3> */}

          <div>
            <GetResponseForm />
          </div>

          {/* <PinkButton>Quero começar a transformação</PinkButton> */}
        </section>

        {/* Footer */}
        <StickFooter />
      </main>
    </>
  );
}
