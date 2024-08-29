import { ComponentProps } from "react";

export interface ISkeleton extends ComponentProps<"div"> {
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
}
