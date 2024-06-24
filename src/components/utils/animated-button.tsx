import { FC, useRef } from "react";
import gsap from "gsap";
import { GoArrowUpRight } from "react-icons/go";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  animationRef: React.RefObject<HTMLButtonElement>;
}

const AnimatedButton: FC<ButtonProps> = ({
  className,
  children,
  animationRef,
  ...props
}) => {

  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from("#button-children", {
      opacity: 0
    }),
    tl.to("#button-children", {
      opacity: 1,
      duration: 1,
    }),
    {
      scope: buttonRef?.current,
    };
  });

  return (
    <button
      ref={buttonRef}
      className={cn(
        "flex justify-between items-center h-[3rem] border-black rounded-full bg-lime-300 hover:bg-white active:bg-lime-400 border-2 text-black transition-all duration-300",
        className
      )}
      {...props}
    >
      <span id="button-children" className="flex items-center w-full mx-5">
        <span className="mr-3 overflow-hidden">{children}</span>
        <GoArrowUpRight className="mt-[2px]" />
      </span>
    </button>
  );
};

export default AnimatedButton;
