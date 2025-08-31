/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
"use client";
import { animate, useMotionValue } from "framer-motion";
import BR from "../../public/brazil.svg";
import US from "../../public/usa.svg";
import { useEffect, useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { AnimatedNumber } from "./components/animated-number";
import Image from "next/image";
import BrandSlider from "./components/brand-slider";
import { firstLineBrands, secondLineBrands } from "./utils/constants";
import { PinkButton } from "./components/button";
import Typewriter from "./components/fancy/typewritter";
import { BrandBox } from "./components/brand-box";
import VerticalCutReveal from "./components/fancy/vertical-reveal";
import { StickFooter } from "./components/footer";
import { CountrySelect } from "./components/language-select";
import { useLocale, useTranslations } from "next-intl";
import { DotPagination } from "./components/DotPagination";

export default function Page() {
  const [_, { width }] = useMeasure();
  const [selectedPrize, setSelectedPrize] = useState(2);

  const numbersSectionRef = useRef(null);
  const prizesSectionRef = useRef(null);

  const XTranslation = useMotionValue(0);
  const t = useTranslations("Texts");

  const locale = useLocale();
  const options = [
    { name: "PT", imgLink: BR },
    { name: "EN", imgLink: US },
  ];

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

  // const prizes = [
  //   {
  //     id: 1,
  //     title: "Platinum Partner - Advanced Delivery Partner",
  //     img: "/monday.svg",
  //   },
  //   {
  //     id: 2,
  //     title: "Consultoria estratégica de 2025",
  //     img: "/consumidor-moderno.svg",
  //   },
  //   {
  //     id: 3,
  //     title: "Parceiro do Ano América do Norte 2024",
  //     img: "/zendesk.svg",
  //   },
  // ];

  // const selected = prizes.find((p) => p.id === selectedPrize);
  // const others = prizes.filter((p) => p.id !== selectedPrize);
  // const ordered = [others[0], selected, others[1]];

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
                className="md:h-10  h-6 w-auto"
                width={120}
                height={40}
              />
            </div>

            {/* Links */}
            <nav className="flex gap-6 items-center">
              <a
                href="https://coaktion.inhire.app/vagas"
                target="_blank"
                className="text-white text-sm md:text-[16px] hover:text-[#C4009F] transition duration-300 ease-out"
              >
                {t("navWorkWithUs")}
              </a>
              <a
                href="#section2"
                className="text-white text-sm md:text-[16px] hover:text-[#C4009F] transition duration-300 ease-out"
              >
                {t("navContact")}
              </a>
              <CountrySelect options={options} value={locale} />
            </nav>
          </div>
        </header>

        {/* Seção 1 */}
        <section className="w-full h-[calc(100vh-9px)] flex items-center justify-center">
          <div
            className="text-white px-4 flex items-center justify-center flex-col md:px-8 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/esfera.png')" }}
          >
            <h1 className="text-[16px] mb-8 lg:text-4xl md:text-4xl">
              {t("h1")}
            </h1>
            <h1 className="mt-4 text-[16px] text-xl mb-8 lg:text-4xl md:text-4xl font-bold">
              {t("h2")}
            </h1>

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
              {t("bannerButton")}
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
          className="w-full py-16 flex-col border md:gap-12 items-center flex md:py-16 min-h-[360px] px-4 md:px-8 lg:px-16"
        >
          <div className="max-w-7xl mx-auto">
            <h3 className="md:text-3xl text-[16px] text-[#0B0B0B] leading-snug">
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
              <div className="w-full py-16 md:gap-6 flex-col items-center md:flex md:flex-row rounded-md md:min-h-[70px] min-h-[220px] bg-white shadow-sm px-4 md:py-3 border border-[#A30084]">
                <AnimatedNumber
                  className="font-bold text-[42px] text-[#A30084] md:self-start self-center md:ml-0 ml-[30%]"
                  triggerRef={numbersSectionRef}
                  value={72}
                  duration={3}
                  isPercentage={true}
                />
                <VerticalCutReveal>
                  dos líderes ainda não veem um caminho claro para atingir os
                  objetivos da transformação digital.
                </VerticalCutReveal>
              </div>

              <div className="w-full py-16 md:gap-6 flex-col items-center md:flex md:flex-row rounded-md md:min-h-[70px] min-h-[220px] bg-white shadow-sm px-4 md:py-3 border border-[#A30084]">
                <AnimatedNumber
                  className="font-bold text-[42px] text-[#A30084] md:self-start self-center md:ml-0 ml-[30%]"
                  triggerRef={numbersSectionRef}
                  value={76}
                  isPercentage={true}
                  duration={3}
                />
                <VerticalCutReveal>
                  dos projetos falham por não colocar o cliente no centro.
                </VerticalCutReveal>
              </div>

              <div className="w-full py-16 md:gap-6 flex-col items-center md:flex md:flex-row rounded-md md:min-h-[70px] min-h-[220px] bg-white shadow-sm px-4 md:py-3 border border-[#A30084]">
                <AnimatedNumber
                  className="font-bold text-[42px] text-[#A30084] md:self-start self-center md:ml-0 ml-[30%]"
                  triggerRef={numbersSectionRef}
                  value={61}
                  isPercentage={true}
                  duration={3}
                />

                <VerticalCutReveal>
                  dos executivos afirmam que a falta de investimento em CX já
                  resultou em perda de competitividade.
                </VerticalCutReveal>
              </div>
            </div>

            <div className="md:w-[35%] w-full mt-6 md:mt-0 px-12 self-center">
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
          ref={prizesSectionRef}
        >
          <h1 className="md:text-3xl text-[16px] text-white">
            Experiência e inovação ao{" "}
            <span className="font-bold">redor do mundo</span>
          </h1>
          <div className="md:grid md:grid-cols-3 flex flex-col w-full min-h-[90px]">
            {/* 1 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <img
                src="/location.svg"
                alt="Localização"
                className="mb-2 md:h-16 md:w-16"
              />
              <p className="text-md">Escritórios no</p>
              <p className="font-bold text-white md:text-2xl text-[20px] mt-2">
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
              <p className="font-bold text-white md:text-2xl text-[20px] mt-2">
                mais de{" "}
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
              <img
                src="/badge.svg"
                alt="Distintivo"
                className="mb-2 md:h-16 md:w-16"
              />
              <p>Das 100 maiores marcas</p>
              <p className="font-bold text-white md:text-2xl text-[20px] mt-2">
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
          <h1 className="md:text-3xl md:mt-3 mt-8 md:mb-0 mb-8 text-white">
            <span className="font-bold">Reconhecidos e premiados</span>{" "}
            globalmente
          </h1>

          <div className="flex gap-12 px-6 flex-col w-full">
            <div className="flex md:flex-row flex-col gap-8 md:gap-12">
              {/* Premium Partner */}
              <div
                onClick={() => setSelectedPrize(1)}
                className="relative cursor-pointer flex-1 items-center backdrop-brightness-40  justify-center  p-6 flex flex-col gap-2 rounded-xl min-h-[270px] text-center overflow-hidden z-10 border border-[#C4009F]/30"
              >
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
                    alt="Monday.com"
                    className="h-[56px] self-center md:w-48"
                  />
                </div>
              </div>
              {/* Premio CX */}
              <div
                onClick={() => setSelectedPrize(2)}
                className="flex-1 cursor-pointer p-6 rounded-xl brightness-150 shadow-[0_0_8px_#C4009F] backdrop-brightness-100 text-center transform scale-105 z-1000 mt-6 border border-[#C4009F]"
              >
                <div className="relative z-10 flex flex-col">
                  <img
                    src="/star.svg"
                    alt="estrela"
                    className="self-center md:w-12 md:h-24"
                  />
                  <h2 className="font-bold text-lg">
                    Consultoria estratégica de 2025
                  </h2>
                  <img
                    src="/consumidor-moderno.svg"
                    alt="Consumidor Moderno"
                    className="h-[56px] self-center md:w-48"
                  />
                </div>
              </div>
              {/* Parceiro do Ano */}
              <div
                onClick={() => setSelectedPrize(3)}
                className="relative cursor-pointer flex-1 items-center backdrop-brightness-40  justify-center  p-6 flex flex-col gap-2 rounded-xl min-h-[270px] text-center overflow-hidden z-10 border border-[#C4009F]/30"
              >
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

            {/* <DotPagination activeIndex={selectedPrize} total={3} /> */}
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

          <div className="h-full w-full px-4 md:px-16 py-10">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <BrandBox logoTitle="Aktie Now" brandLogoPath="/aktie-now.svg">
                <p className="md:text-[16px] min-h-[100px] text-white leading-6">
                  Consultoria estratégica em CX que transforma operações de
                  atendimento em ativos de negócio. Com expertise em Zendesk e
                  soluções complementares, eleva a experiência do cliente,
                  otimiza processos e gera resultados em escala.
                </p>
              </BrandBox>

              <BrandBox logoTitle="Droz" brandLogoPath="/droz.svg">
                <p className="md:text-[16px]  text-white leading-6">
                  Telefonia em nuvem que garante estabilidade, qualidade
                  superior de chamadas e flexibilidade de integração.
                  Proporciona conexões consistentes entre empresas e clientes em
                  todos os pontos da jornada.
                </p>
              </BrandBox>

              <BrandBox logoTitle="Callwe" brandLogoPath="/callwe.svg">
                <p className="md:text-[16px] text-white leading-6">
                  Plataforma de automação de experiência do cliente que combina
                  IA e orquestração de canais. Simplifica processos de
                  atendimento, aumenta a produtividade e eleva a satisfação de
                  forma ágil e escalável.
                </p>
              </BrandBox>

              <BrandBox logoTitle="Workise" brandLogoPath="/workise.svg">
                <p className="md:text-[16px] text-white leading-6">
                  Parceira em transformação digital especializada em automação
                  de fluxos de trabalho com monday.com. Simplifica processos,
                  integra times e gera eficiência operacional com tecnologia,
                  método e inteligência aplicada.
                </p>
              </BrandBox>
            </div>
          </div>
        </section>

        {/* Form get response */}
        <section className="w-full md:py-14 py-10 gap-6 md:gap-8 flex-col px-4 md:px-8 flex items-center justify-center lg:px-16">
          <h3 className="md:text-3xl text-[16px] text-[#0B0B0B] leading-snug">
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
          </h3>
          <span>Formulário Get Response</span>

          <PinkButton>Quero começar a transformação</PinkButton>
        </section>

        {/* Footer */}
        <StickFooter />
      </main>
    </>
  );
}
