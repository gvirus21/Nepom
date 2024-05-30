import Image from "next/image";
import AnimatedButton from "@/components/animated-button";
import ResortList from "@/components/animated-list";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <section className="min-h-screen w-11/12 lg:w-10/12 max-w-[140rem] mt-[8rem] lg:mt-[10rem] xl:mt-[13rem] 2xl:mt-[18rem]  mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center">
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl text-center xl:text-left max-w-[40rem] lg:max-w-[50rem] xl:max-w-[45rem] 2xl:max-w-[60rem] tracking-wide">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            nobis mollitia minima officia reiciendis molestias consectetur
            accusantium tempore in debitis facere, voluptatem tenetur
            repellendus laboriosam numquam et ut magni quaerat!
          </h1>
          <AnimatedButton className="mt-16 xl:mt-0">Know more</AnimatedButton>
        </div>

        <div className="2xl:h-[50rem] 3xl:h-[60rem] aspect-[5/3] bg-gray-500 mt-28 lg:mt-[18rem] 2xl:mt-[26rem] mx-auto"></div>
      </section>
      {/* About us */}
      <section className="flex flex-col xl:flex-row justify-between items-center h-[20rem] w-11/12 lg:w-10/12 max-w-[140rem] mt-40">
        <h2 className="text-5xl">About us</h2>
        <p className="text-lg text-center max-w-[50rem] xl:max-w-[36rem] 2xl:max-w-[48rem] mt-4 xl:mt-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          voluptatum dignissimos maiores dolores cupiditate! Quam, atque
          deserunt quaerat mollitia neque autem voluptates nemo sunt iure magnam
          ipsum architecto perspiciatis.
        </p>
        <AnimatedButton>Join Us</AnimatedButton>
      </section>

      {/* product showcase */}
      <section className="flex flex-col xl:flex-row justify-between max-w-[130rem] mt-40">
        <div className="w-4/6 sm:w-[30rem] xl:h-[44rem] xl:w-[33rem] 3xl:h-[52rem] 3xl:w-[39rem] aspect-[3/4] bg-slate-500 mx-auto"></div>
        <div className="flex flex-col w-5/6 xl:w-4/12 text-lg mt-20 xl:mt-0 mx-auto">
          <h3 className="text-3xl 2xl:text-5xl text-center 2xl:text-right">
            Our New Collection
          </h3>
          <p className="mt-10 2xl:mt-24 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            fugit, maiores mollitia consectetur itaque nesciunt officia iste
            facilis assumenda, id labore? Dignissimos tempore natus quisquam
            nesciunt quos nobis aut nihil!
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            fugiat aperiam expedita culpa perspiciatis ea unde quibusdam beatae
            nisi cum.
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            fugiat aperiam expedita culpa perspiciatis ea unde quibusdam beatae
            nisi expedita culpa perspiciatis ea.
          </p>
          <AnimatedButton className="h-14 w-[14rem] mx-auto xl:ml-0 mt-20 2xl:mt-40">
            Join the waitlist
          </AnimatedButton>
        </div>
      </section>

      {/* Resort List */}
      <section className="w-11/12 lg:w-10/12 max-w-[140rem] mt-40">
        <h3 className="text-2xl md:text-3xl xl:text-5xl text-center xl:text-left">
          Our Top Resorts
        </h3>
        <ResortList />
        <AnimatedButton className="mx-auto xl:ml-0">Know More</AnimatedButton>
      </section>
      <Footer />
    </main>
  );
}
