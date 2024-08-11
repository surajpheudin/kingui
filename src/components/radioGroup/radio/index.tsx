import { twMerge } from "tailwind-merge";
import { IRadio } from "./interface";
import { ICheckbox } from "../../checkbox/interface";
import { COLORS } from "../../../config/colors";
import { tw } from "../../../utils/tailwind";

const Radio = ({
  className,
  children,
  colorScheme,
  size,
  checked,
  ...props
}: IRadio) => {
  const classes = twMerge(
    "h-[1rem] w-[1rem] rounded-full border-2 border-gray-200",
    checked ? "border-blue-500" : "",
    getSizeCss(size, checked).radio,
    getColorSchemeCss(colorScheme, checked),
    className,
  );
  return (
    <label className="flex cursor-pointer items-center gap-2" tabIndex={0}>
      <input type="radio" {...props} hidden />
      <span className={classes} />
      <span className={getSizeCss(size).label}>{children}</span>
    </label>
  );
};

export { Radio };

function getColorSchemeCss(
  colorScheme: ICheckbox["colorScheme"] = "blue",
  checked?: boolean,
) {
  const selectedColor = COLORS[colorScheme as keyof typeof COLORS];
  if (!selectedColor) return "";
  return checked ? `${selectedColor?.[500]?.borderColor}` : "";
}

function getSizeCss(size: ICheckbox["size"] = "md", checked?: boolean) {
  switch (size) {
    case "sm":
      return {
        radio: tw`h-[0.75rem] w-[0.75rem] ${checked ? "border-4" : ""}`,
        label: "text-sm",
      };

    case "md":
      return {
        radio: tw`h-[1rem] w-[1rem] ${checked ? "border-5" : ""}`,
        label: "text-md",
      };

    case "lg":
      return {
        radio: tw`h-[1.25rem] w-[1.25rem] ${checked ? "border-6" : ""}`,
        label: "text-lg",
      };

    default: {
      const _exhaustiveCheck: never = size;
      return {
        radio: "",
        label: "",
      };
      return _exhaustiveCheck;
    }
  }
}
