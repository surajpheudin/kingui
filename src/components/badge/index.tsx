import { VARIANT_COLORS } from "../../config/variantColors";
import { tw } from "../../utils/tailwind";
import { IBadge } from "./interface";
import { twMerge } from "tailwind-merge";

const Badge = ({
  className = "",
  variant = "subtle",
  colorScheme = "gray",
  children,
  ...props
}: IBadge) => {
  return (
    <span
      className={twMerge(
        `rounded-sm border-1 border-transparent px-2 py-0.5 text-xs font-bold uppercase ${getVariantCss(colorScheme, variant)} ${className}`,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
export default Badge;

const getVariantCss = (
  colorScheme: string,
  variant: "outline" | "solid" | "subtle",
) => {
  const selectedColor =
    VARIANT_COLORS[colorScheme as keyof typeof VARIANT_COLORS];
  if (!selectedColor) return "";

  switch (variant) {
    case "outline":
      return tw`${selectedColor.outline.borderColor} ${selectedColor.outline.color}`;

    case "solid":
      return tw`${selectedColor.solid.bgColor} ${selectedColor.solid.color}`;

    case "subtle":
      return tw`${selectedColor.subtle.bgColor} ${selectedColor.subtle.color}`;

    default:
      return "";
  }
};
