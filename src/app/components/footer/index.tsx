/* eslint-disable @next/next/no-img-element */
export const StickFooter: React.FC = () => {
  return (
    <div className="bottom-0 w-full flex-col min-h-[320px] flex justify-center items-center bg-black mt-6 md:py-18 px-4 md:px-16 lg:px-24 pb-50">
      <div className="flex md:flex-row flex-col md:gap-24 items-center justify-evenly min-w-[70%]">
        <img
          src="/footer-logo.svg"
          alt="CoAktion"
          className="md:w-[300px] md:h-56 w-[284px] h-55 pb-8"
        />
        <div className="text-white">
          <div className="flex flex-col md:flex-row gap-3 items-center pb-8">
            <img src="/br.svg" alt="Brasil" />
            <span className="text-sm">
              R. Manoel Coelho, 676 - Sala 710 - Centro, <br /> São Caetano do
              Sul - SP, 09510-102
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-3 items-center">
            <img src="/um.svg" alt="Brasil" />
            <span className="text-sm">
              299 Alhambra Circle, St. 403 <br />
              Coral Gables, FL 33134
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-8 md:mt-0 gap-2 md:items-end items-center">
          <div className="flex mt-6 gap-3">
            <a
              href="https://www.instagram.com/coaktion/"
              target="_blank"
            >
              {" "}
              <img src="/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/coaktion" target="_blank">
              {" "}
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://www.youtube.com/@coaktion" target="_blank">
              {" "}
              <img src="/youtube.svg" alt="YouTube" />
            </a>
          </div>
          <div className="flex flex-col mt-2 gap-3 items-center text-center">
            <a
              href="https://www.aktienow.com/privacy-policy"
              target="_blank"
              className="text-white md:self-end md:mt-0 underline font-semibold cursor-pointer hover:text-[#A30084]"
            >
              Politica e Privacidade
            </a>
            <a
              href="https://www.aktienow.com/terms-and-conditions"
              target="_blank"
              className="text-white md:self-end md:mt-0 underline font-semibold cursor-pointer hover:text-[#A30084]"
            >
              Política de Cookies
            </a>
            <a
              href="https://www.aktienow.com/terms-and-conditions"
              target="_blank"
              className="text-white md:self-end md:mt-0 underline font-semibold cursor-pointer hover:text-[#A30084]"
            >
              Termos e Condições
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
