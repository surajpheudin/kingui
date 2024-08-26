import { PropsWithChildren } from "react";
import { IBaseComponent } from "../types";

export type AlertStatus = "error" | "success" | "warning" | "info";
export type AlertVariant = "subtle" | "solid";
export interface IAlert extends PropsWithChildren, IBaseComponent {
  status?: AlertStatus;
  variant?: AlertVariant;
}
