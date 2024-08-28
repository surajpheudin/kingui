import { ComponentProps } from "react";
import { IBaseComponent } from "../types";

export interface IProgress extends IBaseComponent, ComponentProps<"div"> {
  width?: string | number;
  value?: number;
  isIndeterminate?: boolean;
}
