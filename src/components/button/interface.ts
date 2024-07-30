import { ComponentProps } from "react";

export interface IButton extends ComponentProps<"button"> {
  isLoding?: boolean;
  colorScheme?: string;
  variant?: "solid" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}
