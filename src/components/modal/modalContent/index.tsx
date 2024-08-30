import { PropsWithChildren } from "react";
import { useModal } from "../provider";
import { twMerge } from "tailwind-merge";
import { tw } from "../../../utils/tailwind";

import { IModalSize } from "../interface";

const ModalContent = ({ children }: PropsWithChildren) => {
  const { isOpen, isCentered, size } = useModal();

  const classes = twMerge(
    tw`fixed z-40 flex translate-x-[-50%] flex-col bg-white transition-opacity duration-300`,
    isOpen ? tw`opacity-1 left-[50%]` : tw`-left-[100%] opacity-0`,
    isCentered ? tw`top-[50%] translate-y-[-50%]` : "top-16",
    getSizeCss(size),
  );

  return (
    <div className={classes} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

export { ModalContent };

const getSizeCss = (size: IModalSize) => {
  switch (size) {
    case "xs":
      return "w-full max-w-[20rem]";

    case "sm":
      return "w-full max-w-[24rem]";

    case "md":
      return "w-full max-w-[28rem]";

    case "lg":
      return "w-full max-w-[32rem]";

    case "xl":
      return "w-full max-w-[36rem]";

    case "full":
      return "w-full h-full top-0";

    default: {
      const _exhaustive: never = size;
      return _exhaustive;
    }
  }
};
