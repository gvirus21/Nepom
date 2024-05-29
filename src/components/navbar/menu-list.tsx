import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 40,
  },
  animate: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.5 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
  },
};

const menuList = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Destinations",
    link: "/",
  },
  {
    title: "Tours",
    link: "/",
  },
  {
    title: "About us",
    link: "/",
  },
  {
    title: "FAQs",
    link: "/",
  },
];

const MenuList = () => {
  return (
    <div className="flex flex-col  gap-2 pt-16 pl-8 font-medium uppercase">
      {menuList.map((item, i) => (
        <div
          className="relative h-8 hover:-skew-x-[20deg] transition-all duration-300 ease-out overflow-hidden"
          key={i}
        >
          <motion.span
            variants={variants}
            custom={i}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-0 cursor-pointer text-2xl"
          >
            {item.title}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
