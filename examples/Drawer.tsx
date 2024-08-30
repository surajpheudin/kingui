import { useState } from "react";
import { Button, Drawer, Input } from "../src";
import { IDrawer } from "../src/components/drawer/interface";

const DrawerExample = ({
  label = "Open",
  ...props
}: Omit<IDrawer, "isOpen" | "onClose"> & { label: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>{label}</Button>
      <Drawer {...props} isOpen={isOpen} onClose={onClose}>
        <Drawer.Backdrop />
        <Drawer.Content>
          <Drawer.Header>Create your account</Drawer.Header>
          <Drawer.Body>
            <Input placeholder="Type Here" />
          </Drawer.Body>
          <Drawer.Footer>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer>
    </>
  );
};

export { DrawerExample };
