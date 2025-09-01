/* eslint-disable @next/next/no-img-element */
export const StickFooter: React.FC = () => {
  return (
    <div className="bottom-0 w-full flex-col min-h-[320px] flex justify-center items-center bg-black mt-6 md:py-18 px-4 md:px-16 lg:px-24">
      <div className="flex md:flex-row flex-col md:gap-24 items-center justify-evenly min-w-[70%]">
        <img
          src="/footer-logo.svg"
          alt="CoAktion"
          className="md:w-56 w-36 h-36 md:h-56 "
        />
        <div className="text-white">
          <div className="flex gap-3">
            <img src="/br.svg" alt="Brasil" />
            <span className="text-sm">
              R. Manoel Coelho, 676 - Sala 710 - Centro, <br /> São Caetano do
              Sul - SP, 09510-102
            </span>
          </div>

          <div className="flex mt-8 gap-3">
            <img src="/um.svg" alt="Brasil" />
            <span className="text-sm">
              299 Alhambra Circle, St. 403 Coral Gables, FL 33134
            </span>
          </div>
        </div>

        <div className="flex flex-col mt-8 md:mt-0  gap-2">
          <div className="flex mt-6 gap-3">
            <a href="https://www.linkedin.com/company/coaktion/">
              {" "}
              <img src="/instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              {" "}
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="#">
              {" "}
              <img src="/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.youtube.com/@coaktion">
              {" "}
              <img src="/youtube.svg" alt="YouTube" />
            </a>
          </div>
          <div className="flex flex-col mt-2 justify-items-end gap-3">
            <a className="text-white self-end md:mt-0 underline font-semibold cursor-pointer hover:text-[#A30084]">
              Politica e Privacidade
            </a>
            <a className="text-white self-end md:mt-0 underline font-semibold cursor-pointer hover:text-[#A30084]">
              Política de Cookies
            </a>
            <a className="text-white self-end md:mt-0 underline font-semibold cursor-pointer hover:text-[#A30084]">
              Termos e Condições
            </a>
          </div>
        </div>
      </div>
      <span className="text-sm mt-12 text-white font-bold">
        © {new Date().getFullYear()} All Rights Reserved By Coaktion
      </span>
    </div>
  );
};
