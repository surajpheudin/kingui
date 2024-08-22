import { Children, createRef, useRef, useState } from "react";
import { PinInputField } from "./field";
import { IPinInput } from "./interface";
import { PinInpuContext } from "./provider";

const PinInput = ({
  children,
  defaultValue,
  size,
  colorScheme,
  mask = false,
  manageFocus = true,
  ...props
}: IPinInput) => {
  const [value, setValue] = useState(defaultValue || []);
  const elementsRef = useRef(
    Children.map(children, () => createRef<HTMLInputElement>()),
  );

  const onChange = (value: string, index: number) => {
    if (typeof value === "string" && value.length >= Children.count(children)) {
      setValue(value.split(""));
    } else {
      setValue((prev) => [
        ...prev.slice(0, index),
        value,
        ...prev.slice(index + 1),
      ]);

      if (manageFocus) {
        if (value) {
          const nextRef = elementsRef.current?.[index + 1];
          if (nextRef) nextRef.current?.focus();
        } else {
          const prevRef = elementsRef.current?.[index - 1];
          if (prevRef) prevRef.current?.focus();
        }
      }
    }
  };

  return (
    <div {...props} className="flex gap-2">
      {Children.map(children, (child, index) => (
        <PinInpuContext.Provider
          value={{
            state: {
              value: value[index],
              size,
              colorScheme,
              index,
              mask,
              ref: elementsRef?.current?.[index] || null,
            },
            onChange,
          }}
        >
          {child}
        </PinInpuContext.Provider>
      ))}
    </div>
  );
};

export { PinInput };

PinInput.Root = PinInput;
PinInput.Field = PinInputField;
