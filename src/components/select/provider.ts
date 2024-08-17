import { createContext, useContext } from "react";
import { ISelect, ISelectOption } from "./interface";

interface ISelectStateValue {
  size: ISelect["size"];
  selected: ISelectOption;
}

interface ISelectContext {
  state: ISelectStateValue;
  setState: React.Dispatch<React.SetStateAction<ISelectStateValue>>;
  onClose: () => void;
}

export const defaultValues: ISelectContext["state"] = {
  size: "md",
  selected: {
    label: "",
    value: "",
  },
};

export const SelectContext = createContext<ISelectContext>({
  state: defaultValues,
  setState: () => {},
  onClose: () => {},
});

export const useSelect = () => {
  const { state, setState, onClose } = useContext(SelectContext);
  return {
    state,
    setState,
    onClose,
  };
};
