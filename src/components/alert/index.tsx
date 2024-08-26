import { Children } from "react";
import { AlertStatus, AlertVariant, IAlert } from "./interface";
import { AlertContext } from "./provider";
import { twMerge } from "tailwind-merge";
import { tw } from "../../utils/tailwind";
import { AlertIndicator } from "./alertIndicator";
import { AlertTitle } from "./alertTitle";
import { AlertDescription } from "./alertDescription";

const Alert = ({ children, status = "info", variant = "subtle" }: IAlert) => {
  const classes = twMerge(tw`flex px-4 py-3`, bgColorSubtle[status]?.[variant]);
  return (
    <div className={classes}>
      {Children.map(children, (child) => (
        <AlertContext.Provider
          value={{
            state: {
              status,
              variant,
            },
          }}
        >
          {child}
        </AlertContext.Provider>
      ))}
    </div>
  );
};

export { Alert, AlertIndicator, AlertTitle, AlertDescription };

const bgColorSubtle: Record<AlertStatus, Record<AlertVariant, string>> = {
  info: { subtle: "bg-blue-100", solid: "bg-blue-600" },
  warning: { subtle: "bg-orange-100", solid: "bg-orange-600" },
  error: { subtle: "bg-red-100", solid: "bg-red-600" },
  success: { subtle: "bg-green-100", solid: "bg-green-600" },
};
