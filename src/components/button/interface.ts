import { ComponentProps } from "react";
import { IBaseComponent } from "../types";

export interface IButton extends IBaseComponent, ComponentProps<"button"> {
  isLoading?: boolean;
  variant?: "solid" | "outline" | "ghost" | "link";
}
