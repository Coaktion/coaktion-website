/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
"use client";
import { animate, useMotionValue } from "framer-motion";
import React, { useEffect, useRef } from "react";
import useMeasure from "react-use-measure";
import Image from "next/image";
import BrandSlider from "./components/brand-slider";
import { firstLineBrands, secondLineBrands } from "./utils/constants";
import { PinkButton } from "./components/button";
import { BrandBox } from "./components/brand-box";
import { StickFooter } from "./components/footer";
import { useTranslations } from "next-intl";
import { MovingSphereBackground } from "./components/sphere-bg";
import { FallingBox } from "./components/falling-box";
import { Header } from "./components/header";
import Link from "next/link";
import { OfficeIcon } from "./components/icons/office-icon";
import { Badge } from "./components/icons/badge";
import { EarthIcon } from "./components/icons/earth-icon";
import { useIsMobile } from "./hooks/mobile";
import { GetResponseForm } from "./components/get-response-form";
import { PremiumCarousel } from "./components/PrizeCarrousel";
import { ScrambleText } from "./components/animated-shuffle-letters";
import { BrandCarrousel } from "./components/BrandCarrousel";
import { FadeInText } from "./components/animated-fade-in";

export default function Page() {
  const [_, { width }] = useMeasure();
  const numbersSectionRef = useRef(null);
  const prizesSectionRef = useRef(null);
  const isMobile = useIsMobile();
  const XTranslation = useMotionValue(0);
  const t = useTranslations("Texts");

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
      id: 0,
      title: "Platinum Partner - Advanced Delivery Partner",
      img: "/monday.svg",
    },
    {
      id: 1,
      title: "Parceiro do Ano América do Norte 2024",
      img: "/zendesk.svg",
    },
    {
      id: 2,
      title: "Consultoria estratégica de 2025",
      img: "/consumidor-moderno.svg",
    },
    {
      id: 3,
      title: "Líder em Gerenciamento e Relatórios de Projetos Adaptativos",
      img: "/gartner.svg",
    },
  ];
  return (
    <>
      <main className="bg-white text-gray-800 ">
        {/* Seção 1 */}
        <section
          className="w-full
            bg-black bg-no-repeat
            md:bg-cover
            min-h-screen md:h-screen
            relative
            overflow-hidden flex flex-col justify-start items-center"
        >
          <video
            className="absolute inset-0 w-full h-full z-0 object-cover"
            src="/Coaktion-Animação Esfera_banner-site.webm"
            style={{ objectPosition: "center", scale: "1.2" }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
          {/* Header */}
          <Header pathToResource="/" />

          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white md:-translate-y-10">
            <div className="flex flex-col py-8 items-center text-center max-w-5xl px-4 md:px-0">
              <h1 className="text-[28px] md:mb-0 mb-0 self-center md:text-[50px]">
                {t("h1")}
              </h1>
              <h1 className="text-[26px] md:text-[50px] font-bold">
                {t("h2")}
              </h1>
              <Link href="#contact-form">
                <button
                  className="group inline-flex items-center mt-12 md:mt-6 gap-2 rounded-3xl md:px-5 px-3 md:py-3 py-2 font-medium md:text-[18px] text-[16px] text-white bg-gradient-to-tr from-[#A30084] to-[#C4009F] shadow-lg shadow-[#A30084]/30 transition duration-300 ease-out hover:from-[#8A0072] hover:to-[#A30084] hover:shadow-[#A30084]/50 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#A30084]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
          </div>
        </section>

        {/* Seção 2 */}
        <section
          ref={numbersSectionRef}
          className="w-full py-16 flex-col md:gap-12 items-center flex md:py-14 min-h-[360px] px-4 md:px-8 lg:px-16"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="md:text-[45px] text-[21px] text-[#0B0B0B] leading-snug">
              Transformar é a única forma
              <br />
              <span>
                {" "}
                de permanecer{" "}
                <span className="text-[#C4009F] font-bold">relevante</span>
              </span>
            </h3>
          </div>

          <div className="w-full md:flex mt-8 md:mt-0 justify-center gap-16">
            <div className="md:w-[48%] flex flex-col gap-3 w-[100%]">
              <FallingBox
                className="w-full px-9 pt-5 pb-4 md:gap-6 flex-col items-center
                md:flex md:flex-row rounded-3xl md:min-h-[70px] min-h-[220px]
                bg-white shadow-sm md:pl-10 md:pr-3 md:py-5 border border-[#A30084]"
                durationToDelay={3.5}
              >
                <span className="font-bold text-[60px] text-[#A30084] md:self-start self-center md:ml-0 ml-[30%]">
                  72%
                </span>
                <p className="text-md md:text-[18px] text-center md:text-left">
                  dos líderes ainda não veem um caminho claro para atingir os
                  objetivos da transformação digital.
                  <br />
                  <span className="italic">Microsoft</span>
                </p>
              </FallingBox>

              <FallingBox
                className="w-full px-9 pt-5 pb-4 md:gap-6 flex-col items-center
                md:flex md:flex-row rounded-3xl md:min-h-[70px] min-h-[220px]
                bg-white shadow-sm md:pl-10 md:pr-3 md:py-5 border border-[#A30084]"
                durationToDelay={4.5}
              >
                <span className="font-bold text-[60px] text-[#A30084] md:self-start self-center md:ml-0 ml-[30%]">
                  76%
                </span>
                <p className="text-md md:text-[18px] text-center md:text-left">
                  dos projetos falham por não colocar o cliente no centro.
                  <br />
                  <span className="italic">VML</span>
                </p>
              </FallingBox>

              <FallingBox
                className="w-full px-9 pt-5 pb-4 md:gap-6 flex-col items-center
                md:flex md:flex-row rounded-3xl md:min-h-[70px] min-h-[220px]
                bg-white shadow-sm md:pl-10 md:pr-3 md:py-5 border border-[#A30084]"
                durationToDelay={5}
              >
                <span className="font-bold text-[60px] text-[#A30084] md:self-start self-center md:ml-0 ml-[30%]">
                  61%
                </span>

                <p className="text-md md:text-[18px] text-center md:text-left">
                  dos executivos afirmam que a falta de investimento em CX já
                  resultou em perda de competitividade.
                  <br />
                  <span className="italic">PwC</span>
                </p>
              </FallingBox>
            </div>

            <div className="md:w-[33%] w-full mt-6 md:mt-0 px-2">
              <p className="text-md md:text-[20px]">
                É por isso que existimos:&nbsp;
                <span className="font-bold">
                  para que você não faça parte dessas estatísticas.
                </span>
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
                  className="group inline-flex items-center mt-8 gap-2 rounded-3xl px-6 py-3 font-medium text-white  bg-gradient-to-tr from-[#A30084] to-[#C4009F] shadow-lg shadow-[#A30084]/30 transition duration-300 ease-out hover:from-[#8A0072] hover:to-[#A30084] hover:shadow-[#A30084]/50 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#A30084]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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
          <h1 className="md:text-[40px] text-[24px] text-white text-center">
            Experiência e inovação{" "}
            <span className="font-bold">ao redor do mundo</span>
          </h1>
          <div className="md:grid md:grid-cols-3 flex flex-col w-full min-h-[90px]">
            {/* 1 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <OfficeIcon />
              <p className="md:text-[24px] text-[20px]">Escritórios no</p>
              <FadeInText
                text="Brasil e Estados Unidos"
                className="font-bold text-white md:text-[35px] text-[20px] mt-2"
              />
            </div>

            {/* 2 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <EarthIcon />
              <p className="md:text-[24px] text-[20px]">Projetos em</p>
              <FadeInText
                text="+ 11 países"
                className="font-bold text-white md:text-[35px] text-[20px] mt-2"
              />
            </div>

            {/* 3 */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <Badge />
              <p className="md:text-[24px] text-[20px]">
                Das 100 maiores marcas
              </p>
              <FadeInText
                text="15 estão com a gente"
                className="font-bold text-white md:text-[35px] text-[20px] mt-2"
              />
            </div>
          </div>
          <h1 className="md:text-[40px] md:mt-16 mt-8 md:mb-0 mb-8 text-white text-center">
            <span className="font-bold text-[24px] md:text-[36px]">
              Reconhecidos e premiados
            </span>{" "}
            <span className="text-[24px] md:text-[36px]">globalmente</span>
          </h1>
          <PremiumCarousel prizes={prizes} />
        </section>

        <section className="w-full py-16 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col mx-auto">
            <h1 className="md:text-[40px] text-[24px] self-center text-[#A30084] text-center pb-7 md:pt-7">
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
          className="w-full py-16 px-4 md:px-8 md:min-h-[620px] lg:px-16 bg-cover bg-no-repeat md:bg-center"
          style={{ backgroundImage: "url('/section-bg.png')" }}
        >
          <div className="flex flex-col h-full items-center gap-1">
            <span className="md:text-[40px] text-[24px] m-auto self-center place-self-center text-center leading-5 text-white leading-8">
              Conheça a inteligência que conecta nosso
            </span>
            <span className="font-bold md:text-[40px] text-[24px] m-auto self-center place-self-center text-[#A30084] leading-0">
              ecossistema
            </span>
          </div>

          <div className="h-full w-full px-4 md:px-16 py-10">
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {isMobile ? (
                <BrandCarrousel />
              ) : (
                <>
                  <BrandBox
                    companyWebsite="https://www.aktienow.com"
                    logoTitle="Aktie Now"
                    brandLogoPath="/aktie-now.svg"
                    imageClasses="md:w-10 mt-[6px] mr-[10px]"
                  >
                    <p className="md:text-[18px] min-h-[100px] text-white leading-6 text-left">
                      Consultoria em Customer Experience que impulsiona a
                      evolução do atendimento ao cliente, convertendo operações
                      em ativos valiosos por meio da combinação de tecnologia,
                      inteligência de negócio e foco em resultados.
                    </p>
                  </BrandBox>

                  <BrandBox
                    companyWebsite="https://callwe.io/"
                    logoTitle="Callwe"
                    brandLogoPath="/callwe.svg"
                    imageClasses="md:w-11 mt-[6px] mr-[20px]"
                  >
                    <p className="md:text-[18px]  text-white leading-6 text-left">
                      Plataforma de telefonia em nuvem que assegura
                      estabilidade, alta qualidade de voz e integração flexível.
                      Garante conexões consistentes entre empresas e clientes em
                      todos os momentos da jornada.
                    </p>
                  </BrandBox>
                  <BrandBox
                    companyWebsite="https://meudroz.com/"
                    logoTitle="Droz"
                    brandLogoPath="/droz.svg"
                    imageClasses="md:w-12 mt-[10px] mr-[10px]"
                  >
                    <p className="md:text-[18px] text-white leading-6 text-left">
                      Plataforma de automação de CX baseada em Inteligência
                      Artificial que descomplica e potencializa interações.
                      Simplifica processos, aumenta a produtividade e escala
                      experiências de forma inteligente.
                    </p>
                  </BrandBox>

                  <BrandBox
                    companyWebsite="https://workise.com.br/"
                    logoTitle="Workise"
                    brandLogoPath="/workise.svg"
                    imageClasses="mt-3 md:w-16 mt-[18px] mr-[10px]"
                  >
                    <p className="md:text-[18px] text-white leading-6 text-left">
                      Especialista em simplificar a transformação digital das
                      operações com automação e integração de processos. Conecta
                      equipes, organiza fluxos e gera eficiência real para
                      impulsionar resultados sustentáveis.
                    </p>
                  </BrandBox>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Form get response */}
        <section
          id="contact-form"
          className="w-full md:py-8 py-0 gap-6 md:gap-8 flex-col px-4 md:px-8 flex items-center justify-center lg:px-16"
        >
          <div>
            <GetResponseForm />
          </div>
        </section>

        {/* Footer */}
        <StickFooter />
      </main>
    </>
  );
}
