import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const Code = ({ className, children, ...props }: ComponentProps<"span">) => {
  return (
    <span className={twMerge("", className)} {...props}>
      {children}
    </span>
  );
};

export default Code;
