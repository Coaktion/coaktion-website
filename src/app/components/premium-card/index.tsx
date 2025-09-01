/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
export const PremiumCard = ({
  prize,
  highlighted = false,
}: {
  prize: { id: number; title: string; img: string };
  highlighted?: boolean;
}) => {
  return (
    <div
      className={`flex w-full md:w-[30%] px-6  py-6 self-center md:gap-12 ${
        highlighted ? "z-20 scale-105" : "z-10"
      } relative transition-transform duration-300`}
    >
      <div>
        <motion.div
          key={prize?.id}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`
      flex-1 p-6  text-center
      rounded-xl
     ${highlighted ? `shadow-[0_0_24px_#C4009F] border border-[#C4009F]` : "border border-[#C4009F]"} 
      flex flex-col items-center justify-center gap-4
      min-h-[270px] backdrop-brightness-110
        ${highlighted ? "scale-105 z-50" : "z-10"}
    `}
        >
          <img
            src="/star.svg"
            alt="estrela"
            className="self-center md:w-24 h-16 w-16 md:h-24"
          />
          <h2 className="font-bold text-lg">{prize?.title}</h2>
          <img
            src={prize?.img}
            alt={prize?.title}
            className={"self-center h-[36px] mt-8 md:h-[36px]"}
          />
        </motion.div>
      </div>
    </div>
  );
};
