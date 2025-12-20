import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const AnimatedRibbon = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Primary ribbon - warm gradient */}
      <motion.div
        className="absolute -right-20 top-0 w-[600px] h-[2000px] opacity-[0.08]"
        style={{ y: y1, rotate }}
      >
        <svg
          viewBox="0 0 200 800"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ribbonGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(28, 85%, 55%)" />
              <stop offset="50%" stopColor="hsl(35, 80%, 52%)" />
              <stop offset="100%" stopColor="hsl(28, 85%, 55%)" />
            </linearGradient>
          </defs>
          <path
            d="M100 0 C150 100, 50 200, 100 300 C150 400, 50 500, 100 600 C150 700, 50 800, 100 800"
            stroke="url(#ribbonGradient1)"
            strokeWidth="60"
            strokeLinecap="round"
            fill="none"
            className="ribbon-path"
          />
        </svg>
      </motion.div>

      {/* Secondary ribbon - subtle */}
      <motion.div
        className="absolute -left-10 top-[20%] w-[400px] h-[1500px] opacity-[0.04]"
        style={{ y: y2 }}
      >
        <svg
          viewBox="0 0 200 800"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M100 0 C50 150, 150 250, 100 400 C50 550, 150 650, 100 800"
            stroke="hsl(230, 28%, 24%)"
            strokeWidth="80"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Accent ribbon */}
      <motion.div
        className="absolute right-[10%] top-[40%] w-[300px] h-[1000px] opacity-[0.06]"
        style={{ y: y3 }}
      >
        <svg
          viewBox="0 0 200 800"
          fill="none"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ribbonGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(38, 75%, 50%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(38, 75%, 50%)" />
              <stop offset="100%" stopColor="hsl(38, 75%, 50%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M100 0 C130 200, 70 400, 100 600 C130 750, 70 800, 100 800"
            stroke="url(#ribbonGradient2)"
            strokeWidth="40"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default AnimatedRibbon;
