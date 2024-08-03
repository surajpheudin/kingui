import { twMerge } from "tailwind-merge";
import { tw } from "../../utils/tailwind";
import { ICheckbox } from "./interface";
import { COLORS } from "../../config/colors";
import { TickIcon } from "../../assets/svgs";
import { useState } from "react";

const Checkbox = ({
  className,
  children,
  colorScheme,
  size,
  ...props
}: ICheckbox) => {
  const [checked, setChecked] = useState(false);

  const classes = twMerge(
    "rounded-sm",
    getSizeCss(size).checkbox,
    getColorSchemeCss(colorScheme, checked),
    className,
  );
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        onChange={(e) => setChecked(e.target.checked)}
        {...props}
        hidden
      />
      <span className={classes}>
        {checked && <TickIcon className="h-full w-full" />}
      </span>
      <span className={getSizeCss(size).label}>{children}</span>
    </label>
  );
};

export { Checkbox };

function getColorSchemeCss(
  colorScheme: ICheckbox["colorScheme"] = "gray",
  checked: boolean,
) {
  const selectedColor = COLORS[colorScheme as keyof typeof COLORS];
  if (!selectedColor) return "";
  return checked
    ? tw`px-0.5 text-white ${selectedColor[500].bgColor}`
    : tw`border-1 bg-transparent ${selectedColor[500].borderColor}`;
}

function getSizeCss(size: ICheckbox["size"] = "md") {
  switch (size) {
    case "sm":
      return { checkbox: tw`h-[0.75rem] w-[0.75rem]`, label: "text-sm" };

    case "md":
      return { checkbox: tw`h-[1rem] w-[1rem]`, label: "text-md" };

    case "lg":
      return { checkbox: tw`h-[1.25rem] w-[1.25rem]`, label: "text-lg" };

    default: {
      const _exhaustiveCheck: never = size;
      return {
        checkbox: "",
        label: "",
      };
      return _exhaustiveCheck;
    }
  }
}
