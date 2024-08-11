import { ComponentProps } from "react";
import { IBaseComponent } from "../types";

export interface ISelectOption<T = string> {
  label: string;
  value: T;
}

export interface ISwitch
  extends IBaseComponent,
    Omit<ComponentProps<"input">, "size"> {
  defaultChecked?: boolean;
  invalid?: boolean;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
