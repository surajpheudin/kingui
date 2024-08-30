import { useModal } from "../provider";

const ModalBackdrop = () => {
  const { isOpen, onClose } = useModal();
  return (
    <div
      className={`fixed top-0 z-40 h-full w-full bg-black/50 transition-opacity duration-300 ${
        isOpen ? "left-0 opacity-100" : "-left-[100vw] opacity-0"
      }`}
      onClick={onClose}
    />
  );
};

export { ModalBackdrop };
