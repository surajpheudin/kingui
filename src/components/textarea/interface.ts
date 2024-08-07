import { ComponentProps } from "react";
import { ColorPalette, IBaseComponent } from "../types";

export interface ITextarea
  extends IBaseComponent,
    Omit<ComponentProps<"textarea">, "size"> {
  variant?: "outline" | "filled" | "flushed";
  isInvalid?: boolean;
  focusBorderColor?: ColorPalette;
  errorBorderColor?: ColorPalette;
}
