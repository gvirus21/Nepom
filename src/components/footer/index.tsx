import React from "react";

const Footer = () => {
  return (
    <section
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      className="relative h-[30rem] w-full --2xl:w-[99.4vw] mt-32"
    >
      <div className="fixed bottom-0 h-[30rem] w-full --2xl:w-[99.4vw] text-white bg-black mt-40">
        <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start w-5/6 max-w-[130rem] mx-auto mt-16 2xl:mt-28">
          <h3 className="text-3xl sm:text-4xl xl:text-5xl w-5/6 2xl:w-full text-center lg:text-left mb-10">
            Contact Us
          </h3>
          <div className="flex justify-between w-11/12 max-w-[32rem] mt-10 font-thin">
            <ul className="text-sm">
              <h4 className="text-xl xl:text-2xl mb-6">Discover</h4>
              <li className="text-sm xl:text-base mb-2 cursor-pointer hover:underline underline-offset-4">
                Destinations
              </li>
              <li className="text-sm xl:text-base mb-2 cursor-pointer hover:underline underline-offset-4">
                Travel Guides
              </li>
              <li className="text-sm xl:text-base cursor-pointer hover:underline underline-offset-4">
                Blog
              </li>
            </ul>
            <ul className="text-sm">
              <h4 className="text-xl xl:text-2xl mb-6">Join Us</h4>
              <li className="text-sm xl:text-base mb-2 cursor-pointer hover:underline underline-offset-4">
                Open Roles
              </li>
              <li className="text-sm xl:text-base mb-2 cursor-pointer hover:underline underline-offset-4">
                Volunteer
              </li>
              <li className="text-sm xl:text-base cursor-pointer hover:underline underline-offset-4">
                Newsletter
              </li>
            </ul>
            <ul className="text-sm">
              <h4 className="text-xl xl:text-2xl mb-6">Support</h4>
              <li className="text-sm xl:text-base mb-2 cursor-pointer hover:underline underline-offset-4">
                Contact Us
              </li>
              <li className="text-sm xl:text-base mb-2 cursor-pointer hover:underline underline-offset-4">
                FAQs
              </li>
              <li className="text-sm xl:text-base cursor-pointer hover:underline underline-offset-4">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
