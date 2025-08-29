/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

type Props = {
  brandLogoPath: string;
  logoTitle: string;
  children: ReactNode;
};
export const BrandBox = ({ brandLogoPath, logoTitle, children }: Props) => {
  return (
    <div className="md:h-[70%] md:w-48 border border-white rounded-xl">
      <img src={brandLogoPath} alt={logoTitle} />
      <div>{children}</div>
    </div>
  );
};
