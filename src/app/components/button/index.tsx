import Image from "next/image";
import { ReactNode } from "react";

export const PinkButton = ({ children }: { children: ReactNode }) => {
  return (
    <button
      className="
            group inline-flex items-center gap-2
            rounded-3xl px-6 py-3 font-medium text-white
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
      {children}
      <Image
        src="/circle-arrow.svg"
        height={24}
        width={24}
        alt="comece agora"
      />
    </button>
  );
};
