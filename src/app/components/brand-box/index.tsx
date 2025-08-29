/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

type Props = {
  brandLogoPath: string;
  logoTitle: string;
  children: ReactNode;
};

export const BrandBox = ({ brandLogoPath, logoTitle, children }: Props) => {
  return (
    <div className="w-full md:w-1/3 border border-white rounded-xl p-4 flex flex-col items-center text-center shadow-md bg-white/10 backdrop-blur-sm">
      <img src={brandLogoPath} alt={logoTitle} className="w-24 h-auto mb-2" />
      <h3 className="font-bold text-lg mb-1">{logoTitle}</h3>
      <div className="text-sm text-white">{children}</div>
    </div>
  );
};
