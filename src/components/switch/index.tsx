import { ISwitch } from "./interface";
import { tw } from "../../utils/tailwind";
import { useEffect, useState } from "react";
import { COLORS } from "../../config/colors";
import { twMerge } from "tailwind-merge";

const Switch = ({
  className,
  colorScheme,
  size,
  invalid,
  checked,
  disabled,
  onChange,
  defaultChecked,
  readOnly,
  required,
  ...props
}: ISwitch) => {
  const [isCheckedLocal, setIsCheckedLocal] = useState(!!defaultChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (readOnly) return;
    setIsCheckedLocal(e.target.checked);
    onChange?.(e);
  };

  useEffect(() => {
    if (checked !== undefined) setIsCheckedLocal(checked);
  }, [checked]);

  return (
    <label>
      <input
        type="checkbox"
        {...props}
        onChange={handleChange}
        hidden
        disabled={disabled}
        {...(invalid && {
          "aria-invalid": "true",
        })}
        {...(readOnly && {
          readOnly: true,
        })}
        {...(required && {
          required: true,
        })}
      />
      <div
        className={twMerge(
          `duration-300, cursor-pointer rounded-3xl p-[2px]`,
          isCheckedLocal ? getColorSchemeCss(colorScheme) : "bg-gray-300",
          disabled ? "cursor-not-allowed opacity-70" : "",
          className,
        )}
      >
        <div className={twMerge(`relative box-content ${getSizeCss(size)}`)}>
          <div
            className={`absolute top-0 aspect-square h-full rounded-full bg-white duration-300 ${isCheckedLocal ? "left-full translate-x-[-100%]" : "left-0"}`}
          />
        </div>
      </div>
    </label>
  );
};

export { Switch };

function getColorSchemeCss(colorScheme: ISwitch["colorScheme"] = "blue") {
  const selected = COLORS[colorScheme as keyof typeof COLORS];
  if (!selected) return "bg-blue-500";

  return selected?.[500]?.bgColor;
}

function getSizeCss(size: ISwitch["size"] = "md") {
  switch (size) {
    case "sm":
      return tw`h-[0.75rem] w-[1.375rem]`;

    case "md":
      return tw`h-[1rem] w-[1.875rem]`;

    case "lg":
      return tw`h-[1.5rem] w-[2.875rem]`;

    default: {
      const _exhaustiveCheck: never = size;
      return _exhaustiveCheck;
    }
  }
}
