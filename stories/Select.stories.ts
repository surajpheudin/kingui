import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Select } from "../src/components";

const meta = {
  title: "Forms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    label: "One",
    value: "1",
  },
  {
    label: "Two",
    value: "2",
  },
];

export const VariantOutline: Story = {
  args: { variant: "outline", placeholder: "Outline", options },
};

export const VariantFilled: Story = {
  args: {
    variant: "filled",
    placeholder: "Filled",
    options,
  },
};

export const VariantFlushed: Story = {
  args: {
    variant: "flushed",
    placeholder: "Flushed",
    options,
  },
};

export const SizeSmall: Story = {
  args: {
    size: "sm",
    placeholder: "Small (sm)",
    options,
  },
};
export const SizeMedium: Story = {
  args: {
    size: "md",
    placeholder: "Medium (md)",
    options,
  },
};
export const SizeLarge: Story = {
  args: {
    size: "lg",
    placeholder: "Large (lg)",
    options,
  },
};
