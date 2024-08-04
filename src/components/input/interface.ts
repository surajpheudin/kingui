import { ComponentProps } from "react";
import { ColorPalette, IBaseComponent } from "../types";

export interface IInput
  extends IBaseComponent,
    Omit<ComponentProps<"input">, "size"> {
  variant?: "outline" | "filled" | "flushed";
  isInvalid?: boolean;
  focusBorderColor?: ColorPalette;
  errorBorderColor?: ColorPalette;
}
