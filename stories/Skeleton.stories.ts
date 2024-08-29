import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithoutCustomHeight: Story = {
  args: {
    width: "200px",
  },
};

export const WithCustomHeight: Story = {
  args: {
    width: "200px",
    height: "200px",
  },
};

export const CustomBgColor: Story = {
  args: {
    width: "200px",
    className: "bg-red-400",
  },
};

export const IsCircle: Story = {
  args: {
    height: "52px",
    rounded: true,
  },
};
