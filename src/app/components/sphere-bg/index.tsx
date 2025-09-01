import { motion } from "framer-motion";

export const MovingSphereBackground = () => {
  return (
    <motion.div
      className="
        absolute inset-0
        bg-[url('/Esfera.png')]
        bg-center bg-no-repeat bg-contain
        pointer-events-none z-0"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.05, 1],
        opacity: [0.3, 0.4, 0.3],
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
