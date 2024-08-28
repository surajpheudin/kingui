import { twMerge } from "tailwind-merge";
import { IProgress } from "./interface";
import { ColorScheme } from "../types";
import { COLORS } from "../../config/colors";

const Progress = ({
  className,
  width,
  value = 0,
  size,
  isIndeterminate,
  colorScheme,
  ...props
}: IProgress) => {
  const classes = twMerge(
    "relative h-3 w-full bg-gray-100 overflow-hidden",
    getSizeProps(size),
    className,
  );
  return (
    <div
      className={classes}
      {...props}
      style={{
        width,
        ...props.style,
      }}
    >
      <div
        className={twMerge(
          `absolute bottom-0 top-0`,
          isIndeterminate
            ? "animate-running bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            : "left-0 bg-blue-500",
          getColorSchemeCss(colorScheme),
        )}
        style={{
          width: `${isIndeterminate ? 50 : value}%`,
        }}
      />
    </div>
  );
};

export { Progress };

const getSizeProps = (size: IProgress["size"] = "md") => {
  switch (size) {
    case "sm":
      return "h-2";

    case "md":
      return "h-3";

    case "lg":
      return "h-4";

    default: {
      const _exhaustive: never = size;
      return _exhaustive;
    }
  }
};

const getColorSchemeCss = (colorScheme: ColorScheme = "blue") => {
  const selectedColor = COLORS[colorScheme as keyof typeof COLORS];
  return selectedColor?.[500]?.viaColor;
};
