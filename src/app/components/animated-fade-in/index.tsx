import { motion } from "framer-motion";
import React from "react";

interface FadeInTextProps {
  text: string;
  duration?: number; // segundos
  className?: string;
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  text,
  duration = 1.6,
  className = "",
}) => (
  <motion.span
    initial={{ y: 130, opacity: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.6 }} // só anima quando entra na tela
    className={className}
  >
    {text}
  </motion.span>
);
