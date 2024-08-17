import { ComponentProps } from "react";
import { IBaseComponent } from "../types";

export interface IRadioGroup
  extends IBaseComponent,
    Omit<
      ComponentProps<"div">,
      "size" | "onChange" | "value" | "defaultValue"
    > {
  variant?: "solid" | "outline" | "ghost" | "link";
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => void;
}
