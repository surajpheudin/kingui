import { ComponentProps } from "react";
import { IBaseComponent } from "../types";

export interface IPinInput extends IBaseComponent, ComponentProps<"div"> {
  defaultValue?: string[];
  mask?: boolean;
  manageFocus?: boolean;
}
