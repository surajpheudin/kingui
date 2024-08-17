import { ComponentProps } from "react";
import { IBaseComponent } from "../../types";

export interface IRadio
  extends IBaseComponent,
    Omit<ComponentProps<"input">, "size" | "value"> {
  value: string;
  isLoading?: boolean;
  variant?: "solid" | "outline" | "ghost" | "link";
}
