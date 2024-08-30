import { useState } from "react";
import { Button, Modal, Input } from "../src";
import { IModal } from "../src/components/modal/interface";

const ModalExample = ({
  label = "Open",
  ...props
}: Omit<IModal, "isOpen" | "onClose"> & { label: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{label}</Button>
      <Modal {...props} isOpen={isOpen} onClose={onClose}>
        <Modal.Backdrop />
        <Modal.Content>
          <Modal.Header>Create your account</Modal.Header>
          <Modal.Body>
            <Input placeholder="Type Here" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export { ModalExample };
