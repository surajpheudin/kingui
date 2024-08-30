import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tw } from "../../../utils/tailwind";

const ModalBody = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  const classes = twMerge(tw`flex-1 px-6 py-2`, className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export { ModalBody };
