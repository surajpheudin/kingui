import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Checkbox } from "../components/checkbox";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Forms/Checkbox",
  component: Checkbox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SizeSmall: Story = {
  args: {
    children: "Checkbox",
    size: "sm",
  },
};

export const SizeMedium: Story = {
  args: {
    children: "Checkbox",
    size: "md",
  },
};

export const SizeLarge: Story = {
  args: {
    children: "Checkbox",
    size: "lg",
  },
};

export const ColorSchemeRed: Story = {
  args: {
    children: "Checkbox",
    colorScheme: "red",
  },
};

export const ColorSchemeGreen: Story = {
  args: {
    children: "Checkbox",
    colorScheme: "green",
  },
};
