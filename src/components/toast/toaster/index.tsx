import { useEffect, useState } from "react";
import Toast from "./toast";
import { IToast } from "./toast/interface";
import { Observable } from "./observable";

export const ToastState = new Observable();
export const toast = ToastState.notify;

const Toaster = () => {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    // I am not sure why I have to write this code as cleanup function
    return ToastState.subscribe((toast) => {
      setToasts((prev) => [...prev, toast]);
    });
  }, []);
  return (
    <>
      {toasts.map((props, index) => (
        <Toast key={index} {...props} />
      ))}
    </>
  );
};

export default Toaster;
