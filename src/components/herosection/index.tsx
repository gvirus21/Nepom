import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextReveal from "../utils/text-reveal";
import AnimatedButton from "../utils/animated-button";
import { motion } from "framer-motion";

const Herosection = () => {
  const container = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null)

  const imageVariants = {
    initial: {
      opacity: 0,
      y: 500,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        delay: 3,
        duration: 2,
        ease: "easeIn",
      },
    },
  };

  useGSAP(
    // parallax animation.
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to("#hero-image", {
        y: -200,
      });
    },
    { scope: container }
  );

  return (
    <section className="min-h-screen w-11/12 lg:w-10/12 max-w-[140rem] mt-[8rem] lg:mt-[10rem] xl:mt-[13rem] 2xl:mt-[18rem]  mx-auto">
      <div className="flex flex-col xl:flex-row justify-between items-center">
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl text-center xl:text-left max-w-[40rem] lg:max-w-[50rem] xl:max-w-[45rem] 2xl:max-w-[60rem] tracking-wide">
          <TextReveal
            className="lg:leading-[3rem] xl:leading-[3.5rem]"
            animationDelay={0.1}
            containerDelay={1}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            nobis mollitia minima officia reiciendis molestias consectetur
            accusantium tempore in debitis facere, voluptatem tenetur
            repellendus laboriosam numquam et ut magni quaerat!
          </TextReveal>
        </h1>
        <AnimatedButton animationRef={buttonRef} className="mt-16 xl:mt-0">Know more</AnimatedButton>
      </div>

      <motion.div
        variants={imageVariants}
        initial="initial"
        animate="animate"
        ref={container}
        className="2xl:h-[50rem] 3xl:h-[60rem] aspect-[5/3] mt-28 lg:mt-[18rem] 2xl:mt-[26rem] mx-auto overflow-hidden"
      >
        <Image
          id="hero-image"
          className="h-[200%] 2xl:h-[140%] w-[200%] 2xl:w-[140%]"
          src={"/images/hero-resort.jpg"}
          width={900}
          height={1000}
          alt="hero-image"
        />
      </motion.div>
    </section>
  );
};

export default Herosection;
