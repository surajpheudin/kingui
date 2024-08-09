import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Switch } from "../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Forms/Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SizeSmall: Story = {
  args: {
    size: "sm",
  },
};

export const SizeMedium: Story = {
  args: {
    size: "md",
  },
};

export const SizeLarge: Story = {
  args: {
    size: "lg",
  },
};

export const IsInvalid: Story = {
  args: {
    isInvalid: true,
  },
};

export const IsDisabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const IsReadOnly: Story = {
  args: {
    isReadonly: true,
  },
};

export const IsRequired: Story = {
  args: {
    isRequired: true,
  },
};
