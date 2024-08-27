import { twMerge } from "tailwind-merge";
import { COLORS } from "../../config/colors";
import { ISpinner } from "./interface";
import { tw } from "../../utils/tailwind";

const Spinner = ({
  size,
  color,
  emptyColor,
  className,
  ...props
}: ISpinner) => {
  const classes = twMerge(
    "animate-[spin_650ms_linear_infinite] rounded-full border-2 border-transparent",
    getSizeCss(size),
    getColor(color, emptyColor),
    className,
  );
  return <div className={classes} {...props} />;
};

export { Spinner };

function getSizeCss(size: ISpinner["size"] = "md") {
  switch (size) {
    case "sm":
      return tw`h-4 w-4`;

    case "md":
      return tw`h-6 w-6`;

    case "lg":
      return tw`h-8 w-8`;

    default: {
      const _exhaustiveCheck: never = size;
      return _exhaustiveCheck;
    }
  }
}

function getSelectedColor(color: ISpinner["color"] = "gray.500") {
  const [colorScheme, palette] = color.split(".");
  const selectedColor = COLORS[colorScheme as keyof typeof COLORS];
  return selectedColor[palette as keyof typeof selectedColor];
}

const getColor = (
  color: ISpinner["color"] = "gray.500",
  emptyColor?: ISpinner["emptyColor"],
) => {
  const selectedColor = getSelectedColor(color);
  let classes = `${selectedColor.borderTopColor} ${selectedColor.borderLeftColor}`;
  if (emptyColor) {
    const selectedEmptyColor = getSelectedColor(emptyColor);
    classes = `${selectedEmptyColor.borderColor} ${classes}`;
  }
  return classes;
};
