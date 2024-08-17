import { createContext, useContext } from "react";
import { IRadioGroup } from "./interface";
import { IBaseComponent } from "../types";

interface ISelectRadioValue {
  size: IRadioGroup["size"];
  colorScheme: IBaseComponent["colorScheme"];
  selected: string;
}

interface IRadioGroupContext {
  state: ISelectRadioValue;
  handleClick: (value: string) => void;
}

export const defaultValues: IRadioGroupContext["state"] = {
  size: "md",
  colorScheme: "blue",
  selected: "",
};

export const RadioGroupContext = createContext<IRadioGroupContext>({
  state: defaultValues,
  handleClick: () => {},
});

export const useRadioGroup = () => {
  const { state, handleClick } = useContext(RadioGroupContext);
  return {
    state,
    handleClick,
  };
};
