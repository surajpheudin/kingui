import { createContext, useContext } from "react";
import { IBaseComponent } from "../types";
import { IPinInput } from "./interface";

interface IPinInputValue {
  size: IPinInput["size"];
  colorScheme: IBaseComponent["colorScheme"];
  value: string;
  index: number;
  ref: React.RefObject<HTMLInputElement> | null;
  mask: boolean;
}

interface IPinInputContext {
  state: IPinInputValue;
  onChange: (value: string, index: number) => void;
}

export const defaultValues: IPinInputContext["state"] = {
  size: "md",
  colorScheme: "blue",
  value: "",
  index: NaN,
  mask: false,
  ref: null,
};

export const PinInpuContext = createContext<IPinInputContext>({
  state: defaultValues,
  onChange: () => {},
});

export const usePinInput = () => {
  const { state, onChange } = useContext(PinInpuContext);
  return {
    state,
    onChange,
  };
};
