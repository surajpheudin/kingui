import { toast } from "./toaster";
import { IToast } from "./toaster/toast/interface";

const useToast = (props: IToast) => {
  const fn = (fnProps?: IToast) => {
    toast({ ...props, ...fnProps });
  };
  return fn;
};

export { useToast };
