import React, { useEffect, useRef, useState } from "react";

interface ScrambleTextProps {
  text: string;
  duration?: number; // em ms
  className?: string;
}

const CHARS = "abcdefghijklmnopqrstuvwxyz012345+";

export const ScrambleText: React.FC<ScrambleTextProps> = ({
  text,
  duration = 1800,
  className = "",
}) => {
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(false); // Reset to trigger effect again
          setTimeout(() => setStarted(true), 10); // Small delay to restart
        }
      },
      { threshold: 0.4 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = 20;
    const scramble = () => {
      if (frame < totalFrames) {
        setDisplay(
          text
            .split("")
            .map((char) =>
              Math.random() > frame / totalFrames
                ? CHARS[Math.floor(Math.random() * CHARS.length)]
                : char,
            )
            .join("")
            .slice(0, text.length / 1.1), // Garante que nunca passa do tamanho original
        );
        frame++;
      } else {
        setDisplay(text);
        clearInterval(interval);
      }
    };
    const interval = setInterval(scramble, duration / totalFrames);
    return () => clearInterval(interval);
  }, [started, text, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};
