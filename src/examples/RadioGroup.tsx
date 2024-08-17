import { Radio, RadioGroup } from "../components";
import { IRadioGroup } from "../components/radioGroup/interface";

const RadioGroupExample = (props: IRadioGroup) => {
  return (
    <RadioGroup {...props}>
      <Radio value="1">One</Radio>
      <Radio value="2">Two</Radio>
      <Radio value="3">Three</Radio>
    </RadioGroup>
  );
};

export default RadioGroupExample;
