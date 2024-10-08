import { twMerge } from "tailwind-merge";
import { ISelect } from "./interface";
import { DefaultColors } from "tailwindcss/types/generated/colors";
import { COLORS } from "../../config/colors";
import { tw } from "../../utils/tailwind";
import { ColorPalette } from "../types";
import { ChevronDownIcon } from "../../assets/svgs";
import { Children, useEffect, useRef, useState } from "react";
import SelectOption, { getOptionSizeCss } from "./option";
import { defaultValues, SelectContext } from "./provider";

const Select = ({
  className,
  colorScheme,
  variant,
  size,
  invalid,
  focusBorderColor,
  errorBorderColor,
  children,
  ...props
}: ISelect) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState(defaultValues);

  // Variables
  const classes = twMerge(
    tw`flex items-center gap-2 rounded-md border-gray-300 focus-within:border-2`,
    getFocusBorderColor(focusBorderColor),
    invalid ? getInvalidCss(errorBorderColor) : "",
    getSizeCss(size),
    getVariantCss(colorScheme, variant),
    className,
  );
  const optionClasses = twMerge(
    tw`bg-white px-2 py-1 text-gray-700 hover:bg-gray-100`,
    getOptionSizeCss(size),
  );
  const boundingClient = ref.current?.getBoundingClientRect();

  // Handlers
  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setState((prev) => ({
      ...prev,
      selectedValue: {
        label: "",
        value: "",
      },
    }));
    setIsOpen(false);
  };

  // Effects
  useEffect(() => {
    window.addEventListener("scroll", onClose);
    return () => {
      window.removeEventListener("scroll", onClose);
    };
  }, []);

  return (
    <div ref={ref}>
      <div className={classes} onClick={onToggle}>
        <input
          className="bg-transparent focus:outline-none"
          {...props}
          value={state.selected?.label ?? ""}
          onChange={() => {}}
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
            onClick={handleClick}
          >
            Choose an option
          </p>
          {Children.map(children, (child) => (
            <SelectContext.Provider value={{ state, setState, onClose }}>
              {child}
            </SelectContext.Provider>
          ))}
        </div>
      )}
    </div>
  );
};

Select.Root = Select;
Select.Option = SelectOption;

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
