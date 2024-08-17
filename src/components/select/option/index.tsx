import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tw } from "../../../utils/tailwind";
import { ISelect, ISelectOption } from "../interface";
import { useSelect } from "../provider";

const SelectOption = ({ value, children }: ComponentProps<"option">) => {
  const {
    state: { size },
    setState,
    onClose,
  } = useSelect();

  const optionClasses = twMerge(
    tw`bg-white px-2 py-1 text-gray-700 hover:bg-gray-100`,
    getOptionSizeCss(size),
  );

  const handleClick = (selected: ISelectOption) => {
    setState((prev) => ({
      ...prev,
      selected,
    }));
    onClose();
  };
  return (
    <p
      tabIndex={0}
      className={optionClasses}
      onClick={() =>
        handleClick({
          label: typeof children === "string" ? children : "",
          value: value?.toString() ?? "",
        })
      }
    >
      {children}
    </p>
  );
};

export default SelectOption;

export function getOptionSizeCss(size: ISelect["size"] = "md") {
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
