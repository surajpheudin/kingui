import { ComponentProps } from "react";
import { useAlert } from "../provider";
import { twMerge } from "tailwind-merge";

const AlertDescription = ({
  className,
  children,
  ...props
}: ComponentProps<"span">) => {
  const {
    state: { variant },
  } = useAlert();

  const classes = twMerge(variant === "solid" ? "text-white" : "", className);

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
};

export { AlertDescription };
