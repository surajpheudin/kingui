import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tw } from "../../../utils/tailwind";

const DrawerFooter = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  const classes = twMerge(tw`flex justify-end gap-2 px-6 py-4`, className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export { DrawerFooter };
