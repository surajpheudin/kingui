import { IAlert } from "../../../alert/interface";

export type ToastPosition =
  | "top"
  | "top-right"
  | "top-left"
  | "bottom"
  | "bottom-right"
  | "bottom-left";

export interface IToast {
  message: string;
  status?: IAlert["status"];
  variant?: IAlert["variant"];
  position?: ToastPosition;
  isClosable?: boolean;
}
