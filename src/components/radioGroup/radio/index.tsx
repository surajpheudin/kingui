import { twMerge } from "tailwind-merge";
import { IRadio } from "./interface";
import { ICheckbox } from "../../checkbox/interface";
import { COLORS } from "../../../config/colors";
import { tw } from "../../../utils/tailwind";
import { useRadioGroup } from "../provider";

const Radio = ({
  className,
  children,
  colorScheme,
  value,
  size,
  ...props
}: IRadio) => {
  const {
    state: { size: groupSize, selected, colorScheme: groupColorScheme },
    handleClick,
  } = useRadioGroup();

  const localSize = size || groupSize;
  const localColorScheme = colorScheme || groupColorScheme;
  const checked = selected === value;
  const classes = twMerge(
    "h-[1rem] w-[1rem] rounded-full border-2 border-gray-200",
    checked ? "border-blue-500" : "",
    getSizeCss(localSize, checked).radio,
    getColorSchemeCss(localColorScheme, checked),
    className,
  );

  return (
    <label className="flex cursor-pointer items-center gap-2" tabIndex={0}>
      <input
        type="radio"
        {...props}
        hidden
        onClick={() => {
          handleClick(value);
        }}
      />
      <span className={classes} />
      <span className={getSizeCss(localSize).label}>{children}</span>
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
