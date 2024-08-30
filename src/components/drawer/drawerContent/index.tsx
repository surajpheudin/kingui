import { PropsWithChildren } from "react";
import { useDrawer } from "../provider";
import { twMerge } from "tailwind-merge";
import { tw } from "../../../utils/tailwind";
import { DrawerPlacement } from "../interface";

const DrawerContent = ({ children }: PropsWithChildren) => {
  const { isOpen, placement } = useDrawer();

  const classes = twMerge(
    tw`fixed top-0 z-40 flex flex-col bg-white duration-300`,
    ["top", "bottom"].includes(placement) ? "h-fit left-0 right-0" : "h-full",
    getPlacementCss(placement, isOpen),
  );

  return (
    <div className={classes} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};

export { DrawerContent };

const getPlacementCss = (
  placement: DrawerPlacement = "top",
  isOpen: boolean,
) => {
  switch (placement) {
    case "right":
      return isOpen ? "right-0" : "-right-[100%]";

    case "bottom":
      return isOpen ? "bottom-0 top-auto" : "top-auto -bottom-[100%]";

    case "left":
      return isOpen ? "left-0" : "-left-[100%]";

    case "top":
      return isOpen ? "top-0" : "-top-[100%]";

    default: {
      const _exhaustive: never = placement;
      return _exhaustive;
    }
  }
};
