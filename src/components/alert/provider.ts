import { createContext, useContext } from "react";
import { AlertStatus, AlertVariant } from "./interface";

interface IAlertValue {
  status: AlertStatus;
  variant: AlertVariant;
}

interface IAlertContext {
  state: IAlertValue;
}

export const defaultValues: IAlertContext["state"] = {
  status: "info",
  variant: "subtle",
};

export const AlertContext = createContext<IAlertContext>({
  state: defaultValues,
});

export const useAlert = () => {
  const { state } = useContext(AlertContext);
  return {
    state,
  };
};
