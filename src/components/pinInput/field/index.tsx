import { IPinInput } from "../interface";
import { tw } from "../../../utils/tailwind";
import { twMerge } from "tailwind-merge";
import { usePinInput } from "../provider";
import { IPinInputField } from "./interface";

const PinInputField = ({
  className,
  size,
  colorScheme,
  value,
  onChange,
  ...props
}: IPinInputField) => {
  const {
    state: {
      size: groupSize,
      colorScheme: groupColorScheme,
      value: groupValue,
      index,
      mask,
      ref,
    },
    onChange: onChangeGroup,
  } = usePinInput();
  const localSize = size || groupSize;
  const localValue = value || groupValue;
  const localColorScheme = colorScheme || groupColorScheme;

  const classes = twMerge(
    "rounded-md text-center border-2 border-gray-200",
    "focus:outline-focus",
    getSizeCss(localSize),
    getColorSchemeCss(localColorScheme),
    className,
  );
  return (
    <div className="relative">
      {!localValue && (
        <span className="pointer-events-none absolute left-[50%] top-[50%] h-[30%] w-[30%] translate-x-[-50%] translate-y-[-50%] rounded-full border-2 border-gray-300" />
      )}
      <input
        {...props}
        value={localValue}
        onChange={(e) => {
          const value = e.target.value;
          onChange?.(value, index);
          onChangeGroup?.(value, index);
        }}
        className={classes}
        placeholder=""
        ref={ref}
        type={mask ? "password" : "text"}
      />
    </div>
  );
};

export { PinInputField };

function getSizeCss(size: IPinInput["size"] = "md") {
  switch (size) {
    case "sm":
      return tw`h-[2rem] w-[2rem] text-sm`;

    case "md":
      return tw`text-md h-[2.5rem] w-[2.5rem]`;

    case "lg":
      return tw`h-[3rem] w-[3rem] text-lg`;

    default: {
      const _exhaustiveCheck: never = size;
      return "";
      return _exhaustiveCheck;
    }
  }
}

function getColorSchemeCss(colorScheme?: string) {
  return colorScheme ? "" : "";
}
