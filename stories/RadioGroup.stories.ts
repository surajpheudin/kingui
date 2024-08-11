import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { RadioGroup } from "../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Forms/RadioGroup",
  component: RadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof RadioGroup>;

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
  {
    label: "Three",
    value: "3",
  },
];

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SizeSmall: Story = {
  args: {
    options: options,
    size: "sm",
  },
};

export const SizeMedium: Story = {
  args: {
    options: options,
    size: "md",
  },
};

export const SizeLarge: Story = {
  args: {
    options: options,
    size: "lg",
  },
};

export const ColorSchemeRed: Story = {
  args: {
    options: options,
    colorScheme: "red",
  },
};

export const ColorSchemeGreen: Story = {
  args: {
    options: options,
    colorScheme: "green",
  },
};
