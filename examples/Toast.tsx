import { Button, useToast } from "../src";
import Toaster from "../src/components/toast/toaster";
import { IToast } from "../src/components/toast/toaster/toast/interface";

const ToastExample = (props: IToast) => {
  const toast = useToast(props);
  return (
    <div>
      <Button colorScheme="gray" onClick={() => toast()}>
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
};

export { ToastExample };
