import { useEffect, useState } from "react";
import { IRadioGroup } from "./interface";
import { Radio } from "./radio";
import { twMerge } from "tailwind-merge";

const RadioGroup = ({
  options,
  defaultValue,
  radioProps,
  value,
  onChange,
  className,
  colorScheme,
  ...props
}: IRadioGroup) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleClick = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  useEffect(() => {
    setSelected(value);
  }, [value]);
  return (
    <div {...props} className={twMerge("flex gap-4", className)}>
      {options?.map((item) => (
        <span key={item?.value} onClick={() => handleClick(item?.value)}>
          <Radio
            {...radioProps}
            colorScheme={colorScheme}
            value={item?.value}
            checked={selected === item?.value}
          >
            {item?.label}
          </Radio>
        </span>
      ))}
    </div>
  );
};

export { RadioGroup };
