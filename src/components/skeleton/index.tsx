import { twMerge } from "tailwind-merge";
import { ISkeleton } from "./interface";
import { tw } from "../../utils/tailwind";

const Skeleton = ({
  className,
  width,
  height,
  style,
  rounded,
  ...props
}: ISkeleton) => {
  const classes = twMerge(
    tw`w-full animate-pulse bg-gray-300`,
    rounded ? "aspect-square rounded-full h-10" : "h-5",
    className,
  );

  return (
    <div
      className={classes}
      style={{
        width: rounded ? height : width,
        height,
        ...style,
      }}
      {...props}
    ></div>
  );
};

export { Skeleton };
