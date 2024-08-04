import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "../src/components";

const meta = {
  title: "Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VariantOutline: Story = {
  args: { variant: "outline", placeholder: "Outline" },
};

export const VariantFilled: Story = {
  args: {
    variant: "filled",
    placeholder: "Filled",
  },
};

export const VariantFlushed: Story = {
  args: {
    variant: "flushed",
    placeholder: "Flushed",
  },
};

export const SizeSmall: Story = {
  args: {
    size: "sm",
    placeholder: "Small (sm)",
  },
};
export const SizeMedium: Story = {
  args: {
    size: "md",
    placeholder: "Medium (md)",
  },
};
export const SizeLarge: Story = {
  args: {
    size: "lg",
    placeholder: "Large (lg)",
  },
};
