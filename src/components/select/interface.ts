import { ComponentProps } from "react";
import { ColorPalette, IBaseComponent } from "../types";

export interface ISelectOption<T = string> {
  label: string;
  value: T;
}

export interface ISelect
  extends IBaseComponent,
    Omit<ComponentProps<"input">, "size"> {
  variant?: "outline" | "filled" | "flushed";
  invalid?: boolean;
  focusBorderColor?: ColorPalette;
  errorBorderColor?: ColorPalette;
}
