import { PinInput } from "../src/components/pinInput";
import { IPinInput } from "../src/components/pinInput/interface";

const PinInputExample = (props: IPinInput) => {
  return (
    <PinInput.Root {...props}>
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
      <PinInput.Field />
    </PinInput.Root>
  );
};

export { PinInputExample };
