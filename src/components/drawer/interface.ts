import { PropsWithChildren } from "react";

export type DrawerPlacement = "top" | "right" | "bottom" | "left";
export interface IDrawer extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  placement?: DrawerPlacement;
}
