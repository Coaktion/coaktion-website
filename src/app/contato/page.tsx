// import { StickFooter } from "../components/footer";
import Image from "next/image";
import { Header } from "../components/header";
import { StickFooter } from "../components/footer";

export default function Page() {
  return (
    <div className="bg-white min-h-screen">
      <Header pathToResource="/" />

      <main className="w-full min-h-[calc(100vh-64px)] md:py-24 flex md:flex-row">
        <div className="flex md:flex-col gap-3 md:p-8 w-[50%] h-full">
          <h1 className="md:text-3xl text-[#000]">
            Sabemos o caminho <br /> para
            <span className="font-bold ml-2 md:text-3xl leading-6">
              simplificar sua transformação digital e elevar sua experiência do
              cliente.
            </span>
          </h1>
          <p className="md:text-lg text-black">
            Estamos prontos para conectar as melhores soluções da Coaktion e
            transformar sua operação. Vamos conversar sobre o seu desafio?
          </p>
        </div>

        <div className="md:flex-col flex w-[50%] md:p-8 h-full">
          <span className="text-black self-center min-h-[300px]">Form</span>

          <div className="flex items-center justify-center self-center place-self-end w-[100%]">
            <button
              className="
                        group inline-flex items-center gap-2
                        rounded-3xl px-6 py-2 font-medium text-white
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
              Quero começar minha transformação
              <Image
                src="/circle-arrow.svg"
                height={24}
                width={24}
                alt="comece agora"
              />
            </button>
          </div>
        </div>
      </main>

      <StickFooter />
    </div>
  );
}
