/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

type Props = {
  brandLogoPath: string;
  logoTitle: string;
  children: ReactNode;
  companyWebsite: string;
  imageClasses?: string;
};

const gradients = {
  "Aktie Now": `
    hover:bg-[url('/aktie-brand-card-bg.png')]
    bg-cover bg-no-repeat bg-center
    transition-all duration-400
  `,
  Callwe: `
    hover:bg-[url('/callwe-brand-card-bg.png')]
    bg-cover bg-no-repeat bg-center
    transition-all duration-400
  `,
  Droz: `
    hover:bg-[url('/droz-brand-card-bg.png')]
    bg-cover bg-no-repeat bg-center
    transition-all duration-400
`,
  Workise: `
    hover:bg-[url('/workise-brand-card-bg.png')]
    bg-cover bg-no-repeat bg-center
    transition-all duration-400
  `,
} as any;
export const BrandBox = ({
  brandLogoPath,
  logoTitle,
  children,
  companyWebsite,
  imageClasses = "",
}: Props) => {
  const gradient = gradients[logoTitle] || "none";
  return (
    <div
      onClick={() => window.open(companyWebsite, "_blank")}
      style={{
        boxShadow: `0 8px 30px rgba(0, 0, 0, 0.3)`,
        backgroundBlendMode: "luminosity",
      }}
      className={`w-full text-white ${gradient} gap-4 shadow-lg hover:shadow-2xl cursor-pointer md:w-1/10 border border-white rounded-xl p-4 flex flex-col gap-2 items-center text-center max-w-[280px] min-h-[400px]`}
    >
      <header className="w-full relative h-20">
      <h3 className="font-bold text-white md:text-2xl text-2xl absolute md:left-4 bottom-0">
        {logoTitle}
      </h3>
      <img
        src={brandLogoPath}
        alt={logoTitle}
        className={`md:w-12 h-auto absolute right-0 top-0 ${imageClasses}`}
      />
    </header>
      <main className="md:px-4">{children}</main>
      <footer className="self-start md:pl-4 md:pb-4 md:pt-0 mt-auto">
        <a className="place-self-start mt-1 hover:text-[#A30084] text-white cursor-pointer font-bold text-[16px]">
          Saiba mais
        </a>
      </footer>
    </div>
  );
};
