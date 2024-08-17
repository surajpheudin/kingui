import { Children, useEffect, useState } from "react";
import { IRadioGroup } from "./interface";
import { twMerge } from "tailwind-merge";
import { RadioGroupContext } from "./provider";

const RadioGroup = ({
  defaultValue,
  value,
  onChange,
  className,
  colorScheme,
  children,
  size,
  ...props
}: IRadioGroup) => {
  const [selected, setSelected] = useState(defaultValue ?? "");

  const handleClick = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  useEffect(() => {
    setSelected(value ?? "");
  }, [value]);
  return (
    <div {...props} className={twMerge("flex gap-4", className)}>
      {Children.map(children, (child) => (
        <RadioGroupContext.Provider
          value={{
            state: {
              selected,
              size,
              colorScheme,
            },
            handleClick,
          }}
        >
          {child}
        </RadioGroupContext.Provider>
      ))}
    </div>
  );
};

export { RadioGroup };
