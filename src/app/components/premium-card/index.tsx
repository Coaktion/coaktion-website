/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

export const PremiumCard = ({
  prize,
  highlighted = false,
  direction = "right",
  setSelectedPrize,
  selectedPrize,
  prizes,
  setDirection,
}: {
  prize: { id: number; title: string; img: string };
  highlighted?: boolean;
  direction?: "left" | "right";
  setSelectedPrize: (index: number) => void;
  selectedPrize: number;
  prizes: { id: number; title: string; img: string }[];
  setDirection: (dir: "left" | "right") => void;
}) => {
  const motionProps = highlighted
    ? {
        initial: { opacity: 0, x: direction === "right" ? 150 : -300 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction === "right" ? -150 : 300 },
        transition: { duration: 0.4, ease: "easeInOut" },
      }
    : {};

  const cardClasses = `
    flex-1 p-6 text-center
    rounded-xl
    ${highlighted ? "shadow-[0_0_24px_#C4009F] border border-[#C4009F]" : "border border-[#C4009F]"} 
    flex flex-col items-center justify-center gap-4
    min-h-[270px] backdrop-brightness-110
    ${highlighted ? "scale-105 z-50" : "z-10"}
  `;

  const Container = highlighted ? motion.div : "div";

  return (
    <motion.div
      drag="x"
      onDragEnd={(event, info) => {
        if (info.offset.x < -100 && selectedPrize < prizes.length) {
          setDirection("right");
          setSelectedPrize(selectedPrize + 1);
        } else if (info.offset.x > 100 && selectedPrize > 1) {
          setDirection("left");
          setSelectedPrize(selectedPrize - 1);
        }
      }}
      dragConstraints={{ left: 0, right: 0 }}
      className={`flex w-full md:w-[30%] px-6 py-6 items-center justify-center ${
        highlighted ? "z-20" : "z-10"
      } relative transition-transform duration-300`}
    >
      <Container {...motionProps} className={cardClasses}>
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
      </Container>
    </motion.div>
  );
};
