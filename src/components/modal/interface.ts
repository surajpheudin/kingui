import { PropsWithChildren } from "react";

export type IModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export interface IModal extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
  isCentered?: boolean;
  size?: IModalSize;
}
