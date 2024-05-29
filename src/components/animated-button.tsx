import { cn } from "@/lib/utils";
import React, { FC } from "react";
import { GoArrowUpRight } from "react-icons/go";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const AnimatedButton: FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "flex justify-between items-center px-6 h-[3rem] min-w-[6rem] text-white bg-black rounded-full",
        className
      )}
      {...props}
    >
      <span className="mr-3">{props.children}</span>
      <GoArrowUpRight className="mt-[2px]" />
    </button>
  );
};

export default AnimatedButton;
