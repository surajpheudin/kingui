import { Children, useEffect } from "react";
import { IDrawer } from "./interface";
import { DrawerBackdrop } from "./drawerBackdrop";
import { DrawerContext } from "./provider";
import { DrawerContent } from "./drawerContent";
import { DrawerHeader } from "./drawerHeader";
import { DrawerBody } from "./drawerBody";
import { DrawerFooter } from "./drawerFooter";

const Drawer = ({ isOpen, onClose, placement = "top", children }: IDrawer) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        onClose,
        placement,
      }}
    >
      {Children.map(children, (child, i) => {
        if (i < 2) {
          return child;
        } else {
          return <></>;
        }
      })}
    </DrawerContext.Provider>
  );
};

Drawer.Root = Drawer;
Drawer.Backdrop = DrawerBackdrop;
Drawer.Content = DrawerContent;
Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;

export { Drawer };
