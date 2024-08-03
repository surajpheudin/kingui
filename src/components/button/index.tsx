import { twMerge } from "tailwind-merge";
import { IButton } from "./interface";
import { tw } from "../../utils/tailwind";
import { COLORS } from "../../config/colors";
import { DefaultColors } from "tailwindcss/types/generated/colors";

const Button = ({
  className,
  children,
  variant,
  colorScheme,
  size,
  ...props
}: IButton) => {
  const classes = twMerge(
    "rounded-md px-4 font-semibold",
    getVariantCss(colorScheme, variant),
    getSizeCss(size),
    className,
  );
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export { Button };

function getVariantCss(
  colorScheme: keyof DefaultColors = "teal",
  variant: IButton["variant"] = "solid",
) {
  const selectedColor = COLORS[colorScheme as keyof typeof COLORS];
  if (!selectedColor) return "";
  switch (variant) {
    case "solid":
      return tw`text-white ${selectedColor?.[500]?.bgColor} ${selectedColor?.[600]?._hover?.bgColor}`;

    case "outline":
      return tw`border-1 ${selectedColor?.[500]?.borderColor} ${selectedColor?.[600]?.text} ${selectedColor?.[50]?._hover?.bgColor}`;

    case "ghost":
      return tw`${selectedColor?.[600]?.text} ${selectedColor?.[50]?._hover?.bgColor}`;

    case "link":
      return tw`${selectedColor?.[500]?.text} hover:underline`;

    default: {
      const _exhaustiveCheck: never = variant;
      return _exhaustiveCheck;
    }
  }
}

function getSizeCss(size: IButton["size"] = "md") {
  switch (size) {
    case "sm":
      return tw`h-[32px] text-sm`;

    case "md":
      return tw`text-md h-[40px]`;

    case "lg":
      return tw`h-[48px] text-lg`;

    default: {
      const _exhaustiveCheck: never = size;
      return _exhaustiveCheck;
    }
  }
}
