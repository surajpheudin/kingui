import { ComponentProps } from "react";

type Variant = "outline" | "solid" | "subtle";
export interface IBadge extends ComponentProps<"span"> {
  colorScheme?: string;
  variant?: Variant;
}
