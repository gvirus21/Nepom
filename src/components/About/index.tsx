import TextReveal from "../utils/text-reveal";
import AnimatedButton from "../utils/animated-button";

const AboutSection = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-between items-center h-[28rem] sm:h-[20rem] xl:h-[20rem] w-11/12 lg:w-10/12 max-w-[140rem] mt-40">
      <h2 className="text-5xl" data-animation="text-animation">
        <TextReveal animationDelay={0.03}>About us</TextReveal>
      </h2>
      <p
        className="text-lg text-center max-w-[50rem] xl:max-w-[36rem] 2xl:max-w-[48rem] mt-4 xl:mt-12"
        data-animation="text-animation"
      >
        <TextReveal animationDelay={0.02}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          voluptatum dignissimos maiores dolores cupiditate! Quam, atque
          deserunt quaerat mollitia neque autem voluptates nemo sunt iure magnam
          ipsum architecto perspiciatis.
        </TextReveal>
      </p>
      {/* <AnimatedButton className="mt-10 xl:mt-0">Join Us</AnimatedButton> */}
    </section>
  );
};

export default AboutSection;
