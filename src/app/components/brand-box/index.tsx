/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";

type Props = {
  brandLogoPath: string;
  logoTitle: string;
  children: ReactNode;
};

const gradients = {
  "Aktie Now": `
    bg-[#0f0f0f]
    relative overflow-hidden
    hover:before:opacity-100 before:opacity-0
    before:absolute before:inset-0 before:transition-opacity before:duration-500
    before:bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_2px,transparent_2px,transparent_10px)]
    hover:bg-gradient-to-br hover:from-[#0f0f0f] hover:via-[#1a1a1a] hover:to-[#256d47]
  `,
  Callwe: `
    bg-[#0f0f0f]
    relative overflow-hidden
    hover:before:opacity-100 before:opacity-0
    before:absolute before:inset-0 before:transition-opacity before:duration-500
    before:bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_2px,transparent_2px,transparent_12px)]
    hover:bg-gradient-to-b hover:from-[#0f0f0f] hover:via-[#1a1a1a] hover:to-[#c18700]
  `,
  Droz: `
  bg-[#0f0f0f]
  relative overflow-hidden
  hover:before:opacity-100 before:opacity-0
  before:absolute before:inset-0 before:z-0
  before:transition-opacity before:duration-500
  before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_3px)]
  before:bg-[length:30px_30px]
  hover:bg-gradient-to-b hover:from-[#0f0f0f] hover:via-[#1a1a1a] hover:to-[#9f3bff]
`,
  Workise:
    "bg-[#0f0f0f] relative overflow-hidden hover:before:opacity-100 before:opacity-0 before:absolute before:inset-0 before:transition-opacity before:duration-500 before:bg-[linear-gradient(to_bottom,transparent,transparent),repeating-linear-gradient(45deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_20px)] hover:bg-gradient-to-b hover:from-[#0f0f0f] hover:via-[#1a1a1a] hover:to-[#b30036]",
} as any;

export const BrandBox = ({ brandLogoPath, logoTitle, children }: Props) => {
  const isWorkise = brandLogoPath === "/workise.svg";
  const gradient = gradients[logoTitle] || "none";

  return (
    <div
      style={{
        backgroundImage: `  `,
        boxShadow: `0 8px 30px rgba(0, 0, 0, 0.3)`,
      }}
      className={`w-full text-white transition-all gap-4 duration-500 ease-out ${gradient} shadow-lg hover:shadow-2xl cursor-pointer md:w-1/3 border border-white rounded-xl p-4 flex flex-col justify-between items-center text-center  bg-white/10 backdrop-blur-sm`}
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
      <footer className="mt-6 self-start pt-4">
        <a className="place-self-start mt-6 hover:text-[#A30084] text-white cursor-pointer font-bold text-sm">
          Saiba mais
        </a>
      </footer>
    </div>
  );
};
