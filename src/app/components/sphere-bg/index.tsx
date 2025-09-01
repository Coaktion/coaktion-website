import { motion } from "framer-motion";

export const MovingSphereBackground = () => {
  return (
    <motion.div
      className="
        absolute inset-0
        w-full
        bg-[url('/esfera.png')]
        bg-center bg-no-repeat
        bg-[length:240%]   
        md:bg-[length:contain]
        pointer-events-none z-0"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.05, 1],
        opacity: [3, 1, 0.8],
      }}
      transition={{
        duration: 70,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
    />
  );
};
