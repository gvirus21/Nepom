import React from "react";
import { motion } from "framer-motion";
import "./styles.css"

interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Button = ({ isActive, setIsActive }: Props) => {
  return (
    <div
      onClick={() => setIsActive((prev) => !prev)}
      className="absolute top-0 right-0 h-8 w-20 uppercase text-sm overflow-hidden cursor-pointer border-2 border-black rounded-full z-[999] button-hover-effect"
    >
      <motion.div
        className="relative flex flex-col w-full"
        animate={isActive ? { y: -33 } : { y: -1 }}
      >
        <div className="h-8 w-20 flex justify-center items-center">
          <span>Menu</span>
        </div>
        <div className="h-8 w-20 flex justify-center items-center">
          <span>Close</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Button;
