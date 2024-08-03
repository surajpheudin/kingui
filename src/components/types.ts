import { DefaultColors } from "tailwindcss/types/generated/colors";

type ComponentSize = "sm" | "md" | "lg";
export interface IBaseComponent {
  colorScheme?: keyof DefaultColors;
  size?: ComponentSize;
}
