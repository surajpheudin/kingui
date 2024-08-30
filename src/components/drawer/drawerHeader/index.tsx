import { twMerge } from "tailwind-merge";
import { tw } from "../../../utils/tailwind";
import { ComponentProps } from "react";

const DrawerHeader = ({
  className,
  children,
  ...props
}: ComponentProps<"header">) => {
  const classes = twMerge(tw`flex gap-2 px-6 py-4`, className);

  return (
    <header className={classes} {...props}>
      {children}
    </header>
  );
};

export { DrawerHeader };
