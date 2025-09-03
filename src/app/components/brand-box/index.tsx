/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

type Props = {
  brandLogoPath: string;
  logoTitle: string;
  children: ReactNode;
  companyWebsite: string;
};

const gradients = {
  "Aktie Now": `
    bg-[url('/aktie-brand-bg.png')]
    transition-all duration-400 hover:bg-[linear-gradient(155deg,_#0B0B0B_29.59%,_#7FD171_106.02%)]
  `,
  Callwe: `
    bg-[url('/callwe-brand-bg.png')]
    transition-all duration-400 hover:bg-[linear-gradient(155deg,_#0B0B0B_29.59%,_#F6B018_106.02%)]
  `,
  Droz: `
   bg-[url('/droz-brand-bg.png')]
    transition-all duration-400 hover:bg-[linear-gradient(155deg,_#0B0B0B_29.59%,_#921AE8_106.02%)]
`,
  Workise: `
   bg-[url('/workise-brand-bg.png')]
    transition-all duration-400 hover:bg-[linear-gradient(155deg,_#0B0B0B_29.59%,_#EE3048_106.02%)]
  `,
} as any;
export const BrandBox = ({
  brandLogoPath,
  logoTitle,
  children,
  companyWebsite,
}: Props) => {
  const isWorkise = brandLogoPath === "/workise.svg";
  const gradient = gradients[logoTitle] || "none";
  return (
    <div
      onClick={() => window.open(companyWebsite, "_blank")}
      style={{
        boxShadow: `0 8px 30px rgba(0, 0, 0, 0.3)`,
        backgroundBlendMode: "luminosity",
      }}
      className={`w-full text-white ${gradient} gap-4 shadow-lg hover:shadow-2xl cursor-pointer md:w-1/3 border border-white rounded-xl p-4 flex flex-col justify-between items-center text-center  bg-white/10 backdrop-blur-sm`}
    >
      <header className="w-full py-2 px-2 flex justify-between">
        <div className="flex flex-col justify-end">
          <h3 className="font-bold text-white md:text-2xl">{logoTitle}</h3>
        </div>

        <img
          src={brandLogoPath}
          alt={logoTitle}
          className={`md:w-12 h-auto ${isWorkise ? "mt-3 md:w-16" : ""}`}
        />
      </header>
      <main className="md:p-4">{children}</main>
      <footer className="self-start md:pl-4 md:pb-4 md:pt-0">
        <a className="place-self-start mt-6 hover:text-[#A30084] text-white cursor-pointer font-bold text-sm">
          Saiba mais
        </a>
      </footer>
    </div>
  );
};
