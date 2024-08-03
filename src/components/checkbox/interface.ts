import { ComponentProps } from "react";
import { IBaseComponent } from "../types";

export interface ICheckbox
  extends IBaseComponent,
    Omit<ComponentProps<"input">, "size"> {
  isLoading?: boolean;
  variant?: "solid" | "outline" | "ghost" | "link";
}
