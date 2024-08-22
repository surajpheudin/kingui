import { ComponentProps } from "react";
import { IBaseComponent } from "../../types";

export interface IPinInputField
  extends IBaseComponent,
    Omit<ComponentProps<"input">, "children" | "size" | "onChange"> {
  onChange?: (value: string, index: number) => void;
}
