import { createContext, useContext } from "react";
import { DrawerPlacement } from "./interface";

interface IDrawerContext {
  isOpen: boolean;
  onClose: () => void;
  placement: DrawerPlacement;
}

export const defaultValues: IDrawerContext = {
  isOpen: false,
  onClose: () => {},
  placement: "right",
};

export const DrawerContext = createContext<IDrawerContext>(defaultValues);

export const useDrawer = () => {
  return useContext(DrawerContext);
};
