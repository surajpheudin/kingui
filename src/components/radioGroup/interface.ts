import { ComponentProps } from "react";
import { IBaseComponent } from "../types";
import { ISelectOption } from "../select/interface";

export interface IRadioGroup
  extends IBaseComponent,
    Omit<ComponentProps<"div">, "size" | "onChange" | "value"> {
  variant?: "solid" | "outline" | "ghost" | "link";
  options?: ISelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  radioProps?: Omit<ComponentProps<"input">, "size" | "onChange" | "value">;
}
