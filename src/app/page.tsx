import Image from "next/image";
import AnimatedButton from "@/components/animated-button";
import ResortList from "@/components/animated-list";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-40">
      <Navbar />
      <section className="min-h-screen w-full mt-[20rem] z-10">
        <div className="flex justify-between items-center">
          <h1 className="text-6xl w-[80rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            nobis mollitia minima officia reiciendis molestias consectetur
            accusantium tempore in debitis facere, voluptatem tenetur
            repellendus laboriosam numquam et ut magni quaerat!
          </h1>
          <AnimatedButton>Know more</AnimatedButton>
        </div>

        <div className="h-[60rem] aspect-[5/3] bg-gray-500 mt-[26rem] mx-auto"></div>
      </section>
      {/* About us */}
      {/* <section className="flex justify-between items-center h-[20rem] w-full max-w-[130rem] mt-60">
        <h2 className="text-5xl">About us</h2>
        <p className="text-lg w-[46rem] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          voluptatum dignissimos maiores dolores cupiditate! Quam, atque
          deserunt quaerat mollitia neque autem voluptates nemo sunt iure magnam
          ipsum architecto perspiciatis.
        </p>
        <AnimatedButton>Join Us</AnimatedButton>
      </section> */}

      {/* product showcase */}
      {/* <section className="flex justify-between max-w-[130rem] mt-40">
        <div className="h-[60rem] aspect-[3/4] bg-slate-500"></div>
        <div className="flex flex-col w-4/12 text-lg">
          <h3 className="text-5xl text-right">Our New Collection</h3>
          <p className="mt-24 mb-6">
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
          <AnimatedButton className="h-14 w-[14rem] mt-40">
            Join the waitlist
          </AnimatedButton>
        </div>
      </section> */}

      {/* Resort List */}
      {/* <section className="w-full max-w-[130rem] mt-40">
        <h3 className="text-5xl">Our Top Resorts</h3>
        <ResortList />
        <AnimatedButton>Know More</AnimatedButton>
      </section> */}

      {/* Footer */}
      {/* <section className="h-[30rem] w-[99.4vw] text-white bg-black mt-40">
        <div className="flex  justify-between w-full max-w-[130rem] mx-auto mt-28">
          <h3 className="text-5xl mb-10">Contact Us</h3>
          <div className="flex justify-between w-[32rem]">
            <ul className="text-sm">
              <h4 className="text-2xl mb-6">Discover</h4>
              <li className="mb-2 cursor-pointer hover:underline underline-offset-4">
                Destinations
              </li>
              <li className="mb-2 cursor-pointer hover:underline underline-offset-4">
                Travel Guides
              </li>
              <li className="cursor-pointer hover:underline underline-offset-4">
                Blog
              </li>
            </ul>
            <ul className="text-sm">
              <h4 className="text-2xl mb-6">Join Us</h4>
              <li className="mb-2 cursor-pointer hover:underline underline-offset-4">
                Open Roles
              </li>
              <li className="mb-2 cursor-pointer hover:underline underline-offset-4">
                Volunteer
              </li>
              <li className="cursor-pointer hover:underline underline-offset-4">
                Newsletter
              </li>
            </ul>
            <ul className="text-sm">
              <h4 className="text-2xl mb-6">Support</h4>
              <li className="mb-2 cursor-pointer hover:underline underline-offset-4">
                Contact Us
              </li>
              <li className="mb-2 cursor-pointer hover:underline underline-offset-4">
                FAQs
              </li>
              <li className="cursor-pointer hover:underline underline-offset-4">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </section> */}
    </main>
  );
}
