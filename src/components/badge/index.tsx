import { COLORS } from "../../config/colors";
import { tw } from "../../utils/tailwind";
import { IBadge } from "./interface";
import { twMerge } from "tailwind-merge";

const Badge = ({
  className = "",
  variant,
  colorScheme,
  children,
  ...props
}: IBadge) => {
  return (
    <span
      className={twMerge(
        "rounded-sm border-1 border-transparent px-2 py-0.5 text-xs font-bold uppercase",
        getVariantCss(colorScheme, variant),
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
export default Badge;

const getVariantCss = (
  colorScheme: string = "teal",
  variant: IBadge["variant"] = "subtle",
) => {
  const selectedColor = COLORS[colorScheme as keyof typeof COLORS];
  if (!selectedColor) return "";

  switch (variant) {
    case "outline":
      return tw`${selectedColor?.[500]?.borderColor} ${selectedColor?.[500]?.text}`;

    case "solid":
      return tw`${selectedColor?.[700]?.bgColor} text-white`;

    case "subtle":
      return tw`${selectedColor?.[200]?.bgColor} ${selectedColor?.[800]?.text}`;

    default: {
      const _exhaustiveCheck: never = variant;
      return _exhaustiveCheck;
    }
  }
};
