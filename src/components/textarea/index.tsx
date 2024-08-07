import { twMerge } from "tailwind-merge";
import { ITextarea } from "./interface";
import { DefaultColors } from "tailwindcss/types/generated/colors";
import { COLORS } from "../../config/colors";
import { tw } from "../../utils/tailwind";
import { ColorPalette } from "../types";

// TODO: Implement resize
const Textarea = ({
  className,
  colorScheme,
  variant,
  size,
  isInvalid,
  focusBorderColor,
  errorBorderColor,
  ...props
}: ITextarea) => {
  const classes = twMerge(
    tw`rounded-md border-gray-300 py-1 focus:border-2 focus:outline-none`,
    getFocusBorderColor(focusBorderColor),
    isInvalid ? getInvalidCss(errorBorderColor) : "",
    getSizeCss(size),
    getVariantCss(colorScheme, variant),
    className,
  );
  return <textarea className={classes} {...props} />;
};

export { Textarea };

function getSizeCss(size: ITextarea["size"] = "md") {
  switch (size) {
    case "sm":
      return tw`px-3 text-sm`;

    case "md":
      return tw`text-md px-4`;

    case "lg":
      return tw`px-4 text-lg`;

    default: {
      const _exhaustiveCheck: never = size;
      return _exhaustiveCheck;
    }
  }
}

function getVariantCss(
  colorScheme: keyof DefaultColors = "gray",
  variant: ITextarea["variant"] = "outline",
) {
  const selectedColor = COLORS[colorScheme as keyof typeof COLORS];
  if (!selectedColor) return "";
  switch (variant) {
    case "outline":
      return tw`border-1 ${selectedColor?.[600]?.text}`;

    case "filled":
      return tw`bg-gray-100 ${selectedColor?.[600]?.text}`;

    case "flushed":
      return tw`rounded-none border-b-1 border-l-0 border-r-0 border-t-0 focus:border-transparent focus:border-b-blue-500 ${selectedColor?.[600]?.text} px-0 focus:border-b-2`;

    default: {
      const _exhaustiveCheck: never = variant;
      return _exhaustiveCheck;
    }
  }
}

function getFocusBorderColor(color: ColorPalette = "blue-500") {
  const colors = color.split("-");
  const borderColor = colors?.[0];
  const borderColorShade = colors?.[1];

  if (!borderColor || !borderColorShade) return "";
  const selectedColor = COLORS[borderColor as keyof typeof COLORS];
  return (
    selectedColor?.[borderColorShade as keyof typeof selectedColor]?._focus
      ?.borderColor ?? ""
  );
}

function getInvalidCss(color: ColorPalette = "red-500") {
  const colors = color.split("-");
  const borderColor = colors?.[0];
  const borderColorShade = colors?.[1];

  if (!borderColor || !borderColorShade) return "";
  const selectedColor = COLORS[borderColor as keyof typeof COLORS];
  return twMerge(
    "border-1",
    selectedColor?.[borderColorShade as keyof typeof selectedColor]
      ?.borderColor ?? "",
  );
}
