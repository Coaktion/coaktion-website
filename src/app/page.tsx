/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
"use client";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import useMeasure from "react-use-measure";
import { AnimatedNumber } from "./components/animated-number";
import Image from "next/image";
import BrandSlider from "./components/brand-slider";
import { firstLineBrands, secondLineBrands } from "./utils/constants";
import { PinkButton } from "./components/button";
import Typewriter from "./components/fancy/typewritter";
import { BrandBox } from "./components/brand-box";

export default function Page() {
  const [_, { width }] = useMeasure();
  const numbersSectionRef = useRef(null);

  const XTranslation = useMotionValue(0);

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

  return (
    <>
      <main className="bg-white text-gray-800 ">
        {/* Header */}
        <header className="w-full py-6 px-4 md:px-4 lg:px-32 bg-black">
          <div className="max-w-full mx-auto flex items-center justify-between">
            {/* Logo */}
            <div>
              <Image
                src="/logo-co-aktion.svg"
                alt="Logo"
                className="h-10 w-auto"
                width={120}
                height={40}
              />
            </div>

            {/* Links */}
            <nav className="flex gap-6">
              <a
                href="#section1"
                className="text-white text-lg hover:text-[#C4009F] transition duration-300 ease-out"
              >
                Seja um Colab
              </a>
              <a
                href="#section2"
                className="text-white text-lg hover:text-[#C4009F] transition duration-300 ease-out"
              >
                Contato
              </a>
            </nav>
          </div>
        </header>

        {/* Seção 1 */}
        <section className="w-full h-[calc(100vh-9px)] flex items-center justify-center">
          <div
            className="text-white px-4 flex items-center justify-center flex-col md:px-8 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/esfera_fullhd.png')" }}
          >
            <Typewriter
              showCursor={false}
              speed={10}
              text="Simplificamos a transformação digital. Elevamos a experiência do cliente."
              className="text-3xl mb-8 lg:text-4xl md:text-4xl"
            />
            <Typewriter
              speed={30}
              showCursor={false}
              text="Elevamos a experiência do cliente."
              className="mt-4 text-xl mb-8 lg:text-4xl md:text-4xl font-bold"
            />

            <button
              className="
        group inline-flex items-center gap-2
        rounded-xl px-6 py-3 font-medium text-white
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
              Comece agora
              <Image
                src="/circle-arrow.svg"
                height={24}
                width={24}
                alt="comece agora"
              />
            </button>
          </div>
        </section>

        {/* Seção 2 */}
        <section
          ref={numbersSectionRef}
          className="w-full py-16 flex-col md:gap-12 items-center flex md:py-16 min-h-[360px] px-4 md:px-8 lg:px-16"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl text-[#0B0B0B] leading-snug">
              Transformar é a única forma
              <br />
              <span>
                {" "}
                de permanecer{" "}
                <span className="text-[#C4009F] font-bold">relevante</span>
              </span>
            </h3>
          </div>

          <div className="w-full flex mx-auto">
            <div className="w-[65%] flex flex-col gap-3">
              <div className="w-full items-center md:gap-6 flex rounded-md md:min-h-[70px] bg-white shadow-sm px-4 py-3 border border-[#A30084]">
                <span className="font-bold md:text-[42px] text-[#A30084]">
                  <AnimatedNumber
                    triggerRef={numbersSectionRef}
                    value={72}
                    duration={3}
                  />
                </span>
                <p className="text-md">
                  dos líderes ainda não veem um caminho claro para atingir os
                  objetivos da transformação digital. Microsoft
                </p>
              </div>

              <div className="w-full items-center md:gap-6 flex rounded-md md:min-h-[70px] bg-white shadow-sm px-4 py-3 border border-[#A30084]">
                <span className="font-bold md:text-[42px] text-[#A30084]">
                  <AnimatedNumber
                    triggerRef={numbersSectionRef}
                    value={76}
                    duration={3}
                  />
                </span>
                <p className="text-md">
                  dos líderes acreditam que a transformação digital é uma
                  prioridade para seus negócios. Microsoft
                </p>
              </div>

              <div className="w-full items-center md:gap-6 flex rounded-md md:min-h-[70px] bg-white shadow-sm px-4 py-3 border border-[#A30084]">
                <span className="font-bold md:text-[42px] text-[#A30084]">
                  <AnimatedNumber
                    triggerRef={numbersSectionRef}
                    value={61}
                    duration={3}
                  />
                </span>
                <p className="text-md">
                  dos líderes acreditam que a transformação digital é uma
                  prioridade para seus negócios. Microsoft
                </p>
              </div>
            </div>

            <div className="w-[35%] px-12 self-center">
              <p className="text-md">
                É por isso que existimos: para que você não faça parte dessas
                estatísticas.
              </p>

              <br />
              <p>
                Somos um ecossistema que une{" "}
                <span className="font-bold">Experiência do Cliente</span> e{" "}
                <span className="font-bold">Transformação Digital</span> para
                evoluir negócios. Conectamos tecnologia, automação e gestão de
                processos para gerar eficiência, escala e experiências que
                impulsionam resultados.
              </p>
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
            </div>
          </div>
        </section>
        <section
          className="w-full py-16 flex-col md:gap-12 items-center flex md:py-16 min-h-[680px] px-4 md:px-8 lg:px-16 text-white"
          style={{
            background: `linear-gradient(to bottom, #0a0a0a 0%, #1a0016 70%, #5b0041 100%)`,
          }}
        >
          <h1 className="md:text-3xl text-white">
            Experiência e inovação ao{" "}
            <span className="font-bold">redor do mundo</span>
          </h1>
          <div className="grid grid-cols-3 w-full min-h-[90px]">
            {/* 1 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <img
                src="/location.svg"
                alt="Localização"
                className="mb-2 md:h-16 md:w-16"
              />
              <p>Escritórios no</p>
              <p className="font-bold text-white text-2xl mt-2">
                Brasil e Estados <br /> Unidos
              </p>
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <img
                src="/earth.svg"
                alt="Terra"
                className="mb-3 md:h-16 md:w-16"
              />
              <p>Projetos em</p>
              <p className="font-bold text-white text-2xl mt-2">+ 11 países</p>
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <img
                src="/badge.svg"
                alt="Distintivo"
                className="mb-2 md:h-16 md:w-16"
              />
              <p>Das 100 maiores marcas</p>
              <p className="font-bold text-white text-2xl mt-2">
                15 estão com <br /> a gente
              </p>
            </div>
          </div>
          <h1 className="md:text-3xl mt-3 text-white">
            <span className="font-bold">Reconhecidos e premiados</span>{" "}
            globalmente
          </h1>

          <div className="flex gap-12 w-full">
            {/* Premium Partner */}
            <div className="relative flex-1 items-center backdrop-brightness-40  justify-center  p-6 flex flex-col gap-2 rounded-xl min-h-[270px] text-center overflow-hidden z-10 border border-[#C4009F]/30">
              <div className="relative z-10 flex flex-col">
                <img
                  src="/star.svg"
                  alt="estrela"
                  className="self-center md:w-12 md:h-24"
                />
                <h2 className="font-bold text-lg">
                  Platinum Partner - Advanced Delivery Partner
                </h2>
                <img
                  src="/monday.svg"
                  alt="Consumidor Moderno"
                  className="h-[56px] self-center md:w-48"
                />
              </div>
            </div>
            {/* Premio CX */}
            <div className="flex-1 p-6 rounded-xl brightness-150 shadow-[0_0_8px_#C4009F] backdrop-brightness-100 text-center transform scale-105 z-1000 mt-6 border border-[#C4009F]">
              Item 2
            </div>
            {/* Parceiro do Ano */}
            <div className="relative flex-1 items-center backdrop-brightness-40  justify-center  p-6 flex flex-col gap-2 rounded-xl min-h-[270px] text-center overflow-hidden z-10 border border-[#C4009F]/30">
              <div className="brightness-[2] relative z-10 flex flex-col">
                <img
                  src="/star.svg"
                  alt="estrela"
                  className="self-center md:w-12 md:h-24"
                />
                <h2 className="font-bold text-lg">
                  Parceiro do Ano América do Norte 2024
                </h2>
                <img
                  src="/zendesk.svg"
                  alt="zendesk"
                  className="md:h-[48px] self-center md:w-36"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col mx-auto">
            <h1 className="md:text-3xl self-center text-[#A30084]">
              <span className="font-bold mr-2">Marcas de peso</span>
              que já evoluíram seu negócio
            </h1>
            <BrandSlider brands={firstLineBrands} direction="ltr" />
            <BrandSlider brands={secondLineBrands} />
            <div className="self-center">
              <PinkButton>Junte se a elas</PinkButton>
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

          <div className="min-h-full">
            <BrandBox logoTitle="Aktie Now" brandLogoPath="/aktie-logo.svg">
              <p>Transformando o mercado financeiro com tecnologia de ponta.</p>
            </BrandBox>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-10 px-4 md:px-8 lg:px-16 bg-gray-100">
          <div className="max-w-7xl mx-auto">{/* Conteúdo do footer */}</div>
        </footer>
      </main>
    </>
  );
}
