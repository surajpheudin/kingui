import { twMerge } from "tailwind-merge";
import { ISelect, ISelectOption } from "./interface";
import { DefaultColors } from "tailwindcss/types/generated/colors";
import { COLORS } from "../../config/colors";
import { tw } from "../../utils/tailwind";
import { ColorPalette } from "../types";
import { ChevronDownIcon } from "../../assets/svgs";
import { useRef, useState } from "react";

const Select = ({
  className,
  colorScheme,
  variant,
  size,
  isInvalid,
  focusBorderColor,
  errorBorderColor,
  options,
  ...props
}: ISelect) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ISelectOption | null>(null);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClick = (item: ISelectOption) => {
    setSelected(item);
    setIsOpen(false);
  };

  const classes = twMerge(
    tw`flex items-center gap-2 rounded-md border-gray-300 focus-within:border-2`,
    getFocusBorderColor(focusBorderColor),
    isInvalid ? getInvalidCss(errorBorderColor) : "",
    getSizeCss(size),
    getVariantCss(colorScheme, variant),
    className,
  );
  const optionClasses = twMerge(
    tw`bg-white px-2 py-1 text-gray-700 hover:bg-gray-100`,
    getOptionSizeCss(size),
  );
  const boundingClient = ref.current?.getBoundingClientRect();
  return (
    <div ref={ref}>
      <div className={classes} onClick={onToggle}>
        <input
          className="bg-transparent focus:outline-none"
          {...props}
          value={selected?.label ?? ""}
        />
        <ChevronDownIcon height="12px" width="12px" />
      </div>
      {isOpen && (
        <div
          className="fixed grid max-h-[400px] gap-1 overflow-hidden rounded-md border-1"
          style={{
            left: boundingClient?.left ?? 0,
            top: (boundingClient?.bottom ?? 0) + 4,
            width: (boundingClient?.width ?? 0) + "px",
          }}
        >
          <p
            className={twMerge(optionClasses, "text-gray-500")}
            onClick={() =>
              handleClick({
                label: "",
                value: "",
              })
            }
          >
            Choose an option
          </p>
          {options?.map((item) => (
            <p className={optionClasses} onClick={() => handleClick(item)}>
              {item?.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export { Select };

function getSizeCss(size: ISelect["size"] = "md") {
  switch (size) {
    case "sm":
      return tw`h-[32px] px-3 text-sm`;

    case "md":
      return tw`text-md h-[40px] px-4`;

    case "lg":
      return tw`h-[48px] px-4 text-lg`;

    default: {
      const _exhaustiveCheck: never = size;
      return _exhaustiveCheck;
    }
  }
}

function getOptionSizeCss(size: ISelect["size"] = "md") {
  switch (size) {
    case "sm":
      return tw`text-sm`;

    case "md":
      return tw`text-md`;

    case "lg":
      return tw`text-lg`;

    default: {
      const _exhaustiveCheck: never = size;
      return _exhaustiveCheck;
    }
  }
}
function getVariantCss(
  colorScheme: keyof DefaultColors = "gray",
  variant: ISelect["variant"] = "outline",
) {
  const selectedColor = COLORS[colorScheme as keyof typeof COLORS];
  if (!selectedColor) return "";
  switch (variant) {
    case "outline":
      return tw`border-1 ${selectedColor?.[600]?.text}`;

    case "filled":
      return tw`bg-gray-100 ${selectedColor?.[600]?.text}`;

    case "flushed":
      return tw`rounded-none border-b-1 border-l-0 border-r-0 border-t-0 focus-within:border-transparent focus-within:border-b-blue-500 ${selectedColor?.[600]?.text} px-0 focus-within:border-b-2`;

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
    selectedColor?.[borderColorShade as keyof typeof selectedColor]
      ?._focusWithin?.borderColor ?? ""
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
