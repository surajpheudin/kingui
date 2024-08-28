import { useEffect, useState } from "react";
import { IToast, ToastPosition } from "./interface";
import { Alert, AlertDescription, AlertIndicator } from "../../../alert";
import { twMerge } from "tailwind-merge";
import { tw } from "../../../../utils/tailwind";
import { CloseIcon } from "../../../icons";

const Toast = ({
  message,
  status = "success",
  variant = "solid",
  position,
  isClosable,
}: IToast) => {
  const [mounted, setMounted] = useState(false);

  const classes = twMerge(
    `fixed overflow-hidden rounded-md opacity-0 duration-300 data-[mounted=true]:opacity-100`,
    getPositionCss(position),
  );

  const handleClose = () => {
    setMounted(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
    }, 500);
    setTimeout(() => {
      setMounted(false);
    }, 3500);
  }, []);

  return (
    <div data-mounted={mounted} className={classes}>
      <Alert variant={variant} status={status}>
        <AlertIndicator />
        <AlertDescription>{message}</AlertDescription>
        {isClosable && (
          <span
            className="absolute right-0 top-0 cursor-pointer rounded-lg p-2 hover:bg-black/5"
            onClick={handleClose}
          >
            <CloseIcon className="h-3 w-3 text-white" />
          </span>
        )}
      </Alert>
    </div>
  );
};

export default Toast;

const getPositionCss = (position: ToastPosition = "top") => {
  switch (position) {
    case "top":
      return "top-4 left-[50%] translate-x-[-50%] translate-y-[-100%] data-[mounted=true]:translate-y-0";

    case "top-left":
      return "top-4 left-4 translate-x-[-100%] data-[mounted=true]:translate-x-0";

    case "top-right":
      return "top-4 right-4 translate-x-full data-[mounted=true]:translate-x-0";

    case "bottom":
      return tw`bottom-4 left-[50%] translate-x-[-50%] translate-y-full data-[mounted=true]:translate-y-0`;

    case "bottom-left":
      return "bottom-4 left-4 translate-x-[-100%] data-[mounted=true]:translate-x-0";

    case "bottom-right":
      return "bottom-4 right-4 translate-x-full data-[mounted=true]:translate-x-0";

    default: {
      const _exhausitive: never = position;
      return _exhausitive;
    }
  }
};
