import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tw } from "../../../utils/tailwind";
import { useAlert } from "../provider";

const AlertTitle = ({
  className,
  children,
  ...props
}: ComponentProps<"span">) => {
  const {
    state: { variant },
  } = useAlert();

  const classes = twMerge(
    tw`mr-2 font-bold`,
    variant === "solid" ? "text-white" : "",
    className,
  );

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export { AlertTitle };
