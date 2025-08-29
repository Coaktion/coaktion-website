/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

type Props = {
  brandLogoPath: string;
  logoTitle: string;
  children: ReactNode;
};

export const BrandBox = ({ brandLogoPath, logoTitle, children }: Props) => {
  const isWorkise = brandLogoPath === "/workise.svg";
  return (
    <div className="w-full md:w-1/3 border border-white rounded-xl p-4 flex flex-col items-center text-center shadow-md bg-white/10 backdrop-blur-sm">
      <img
        src={brandLogoPath}
        alt={logoTitle}
        className={`md:w-12 h-auto place-self-end mb-2 ${isWorkise ? "mt-3 md:w-16" : ""}`}
      />
      <h3 className="font-bold text-white md:text-2xl place-self-start mb-6">
        {logoTitle}
      </h3>
      {children}
    </div>
  );
};
