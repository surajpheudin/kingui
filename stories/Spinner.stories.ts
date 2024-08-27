import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    color: "blue.500",
    emptyColor: "gray.200",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    color: "blue.500",
    emptyColor: "gray.200",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    color: "blue.500",
    emptyColor: "gray.200",
    size: "lg",
  },
};
