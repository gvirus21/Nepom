import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: string;
  className?: string;
  animationDelay?: number;
  containerDelay?: number;
}

const TextReveal = ({
  children,
  className,
  animationDelay = 0.2,
  containerDelay,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.2, once: true });

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: containerDelay || 0,
      },
    },
  };

  const wordVariants = {
    initial: {
      y: 60,
    },
    animate: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.6,
        delay:
          (containerDelay ?? 0) +
          (animationDelay ? animationDelay * i : 0.2 * i),
      },
    }),
  };

  const words = children.split(" ");

  return (
    <motion.span
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn("overflow-hidden inline-block", className)}
        >
          <motion.span
            className="inline-block"
            custom={i}
            variants={wordVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default TextReveal;
