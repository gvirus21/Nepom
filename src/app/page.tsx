"use client";

import { useRef } from "react";
import Image from "next/image";
// import AnimatedButton from "@/components/utils/animated-button";
import ResortList from "@/components/utils/animated-list";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import TextReveal from "@/components/utils/text-reveal";
import Herosection from "@/components/herosection";
import AboutSection from "@/components/About";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to("#resort-image", {
        y: -100,
      });
    },
    { scope: container }
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Herosection />
      <AboutSection />

      {/* product showcase */}
      <section className="flex flex-col xl:flex-row justify-between max-w-[130rem] mt-40">
        <div
          ref={container}
          className="w-4/6 sm:w-[30rem] xl:h-[44rem] xl:w-[33rem] 3xl:h-[52rem] 3xl:w-[39rem] aspect-[3/4] bg-slate-500 mx-auto overflow-hidden"
        >
          <Image
            id="resort-image"
            className="h-[140%] w-[140%]"
            src={"/images/pool-resort.jpg"}
            width={900}
            height={1000}
            alt="resort-image"
          />
        </div>
        <div className="flex flex-col w-5/6 xl:w-4/12 text-lg mt-20 xl:mt-0 mx-auto">
          <h3 className="text-3xl 2xl:text-5xl text-center 2xl:text-right">
            <TextReveal animationDelay={0.03}>Our New Collection</TextReveal>
          </h3>
          <p className="mt-10 2xl:mt-24 mb-6">
            <TextReveal animationDelay={0.02}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              fugit, maiores mollitia consectetur itaque nesciunt officia iste
              facilis assumenda, id labore? Dignissimos tempore natus quisquam
              nesciunt quos nobis aut nihil!
            </TextReveal>
          </p>
          <p className="mb-6">
            <TextReveal animationDelay={0.02}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              fugiat aperiam expedita culpa perspiciatis ea unde quibusdam
              beatae nisi cum.
            </TextReveal>
          </p>
          <p className="mb-6">
            <TextReveal animationDelay={0.02}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              fugiat aperiam expedita culpa perspiciatis ea unde quibusdam
              beatae nisi expedita culpa perspiciatis ea.
            </TextReveal>
          </p>
          {/* <AnimatedButton className="h-14 w-[14rem] mx-auto xl:ml-0 mt-20 2xl:mt-40">
            Join the waitlist
          </AnimatedButton> */}
        </div>
      </section>

      {/* Resort List */}
      <section className="w-11/12 lg:w-10/12 max-w-[140rem] mt-40">
        <h3 className="text-2xl md:text-3xl xl:text-5xl text-center xl:text-left">
          <TextReveal animationDelay={0.02}>Our Top Resorts</TextReveal>
        </h3>
        <ResortList />
        {/* <AnimatedButton className="mx-auto xl:ml-0">Know More</AnimatedButton> */}
      </section>
      <Footer />
    </main>
  );
}
