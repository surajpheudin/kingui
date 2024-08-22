import { Radio, RadioGroup } from "../src/components";
import { IRadioGroup } from "../src/components/radioGroup/interface";

const RadioGroupExample = (props: IRadioGroup) => {
  return (
    <RadioGroup {...props}>
      <Radio value="1">One</Radio>
      <Radio value="2">Two</Radio>
      <Radio value="3">Three</Radio>
    </RadioGroup>
  );
};

export { RadioGroupExample };
