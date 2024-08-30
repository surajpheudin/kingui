import { createContext, useContext } from "react";
import { IModalSize } from "./interface";

interface IModalContext {
  isOpen: boolean;
  onClose: () => void;
  isCentered?: boolean;
  size: IModalSize;
}

export const defaultValues: IModalContext = {
  isOpen: false,
  onClose: () => {},
  isCentered: false,
  size: "md",
};

export const DrawerContext = createContext<IModalContext>(defaultValues);

export const useModal = () => {
  return useContext(DrawerContext);
};
