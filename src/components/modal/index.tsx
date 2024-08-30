import { Children, useEffect } from "react";
import { IModal } from "./interface";
import { ModalBackdrop } from "./modalBackdrop";
import { DrawerContext } from "./provider";
import { ModalContent } from "./modalContent";
import { ModalHeader } from "./modalHeader";
import { ModalBody } from "./modalBody";
import { ModalFooter } from "./modalFooter";

const Modal = ({
  isOpen,
  onClose,
  isCentered,
  children,
  size = "md",
}: IModal) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        onClose,
        isCentered,
        size,
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

Modal.Root = Modal;
Modal.Backdrop = ModalBackdrop;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export { Modal };
