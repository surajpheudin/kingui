import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Badge from "../components/badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DataDisplay/Badge",
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Subtle: Story = {
  args: {
    variant: "subtle",
    children: "Subtle",
    colorScheme: "green",
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
    children: "Solid",
    colorScheme: "green",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
    colorScheme: "green",
  },
};
