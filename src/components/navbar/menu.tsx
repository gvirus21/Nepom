"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./menu-button";
import MenuList from "./menu-list";

const variant = {
  open: {
    height: "340px",
    width: "280px",
    top: "-10px",
    right: "-10px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    height: "0px",
    width: "0px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const Menu = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="fixed top-5 right-20">
      <motion.div
        variants={variant}
        initial="close"
        animate={isActive ? "open" : "close"}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
        className="relative bg-lime-300 rounded-2xl z-[999]"
      >
        <AnimatePresence>{isActive && <MenuList />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Menu;
