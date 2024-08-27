import { ComponentProps } from "react";
import { IBaseComponent } from "../types";

export interface ISpinner extends IBaseComponent, ComponentProps<"div"> {
  color?: `${string}.${number}`;
  emptyColor?: `${string}.${number}`;
}
