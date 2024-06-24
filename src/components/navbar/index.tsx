import { motion } from "framer-motion";
import Menu from "./menu";

const Navbar = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.nav
      variants={variants}
      initial="initial"
      animate="animate"
      className="fixed inset-0 h-16 lg:h-20 z-[999] bg-white"
    >
      <div className="relative flex justify-between items-center h-full w-11/12 lg:w-10/12 max-w-[140rem] mx-auto">
        <p className="font-semibold text-xl">Nepom.</p>
        <Menu />
      </div>
    </motion.nav>
  );
};

export default Navbar;
