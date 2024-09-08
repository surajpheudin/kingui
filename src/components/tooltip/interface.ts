import { ComponentProps, PropsWithChildren } from "react";

export type TooltipPlacement = "top" | "left" | "bottom" | "right";
export interface ITooltip extends PropsWithChildren, ComponentProps<"div"> {
  placement?: TooltipPlacement;
  label: string;
}
