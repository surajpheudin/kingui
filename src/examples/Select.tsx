import { Select } from "../components";
import { ISelect } from "../components/select/interface";

const SelectExample = (props: ISelect) => {
  return (
    <Select.Root {...props}>
      <Select.Option value="1">One</Select.Option>
      <Select.Option value="2">Two</Select.Option>
      <Select.Option value="3">Three</Select.Option>
    </Select.Root>
  );
};

export default SelectExample;
