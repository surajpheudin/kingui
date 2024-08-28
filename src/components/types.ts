import { DefaultColors } from "tailwindcss/types/generated/colors";
import { NestedKeyOf } from "../types/types";

type ComponentSize = "sm" | "md" | "lg";
export type ColorScheme = Exclude<
  keyof DefaultColors,
  "inherit" | "currentColor" | "transparent" | "black" | "white"
>;
export type ColorPalette = NestedKeyOf<DefaultColors>;
export interface IBaseComponent {
  colorScheme?: ColorScheme;
  size?: ComponentSize;
}
