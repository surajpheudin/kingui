import type { Meta, StoryObj } from "@storybook/react";
import { AlertExample } from "../examples";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feedback/Alert",
  component: AlertExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof AlertExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Info: Story = {
  args: {
    status: "info",
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
  },
};

export const Error: Story = {
  args: {
    status: "error",
  },
};

export const Success: Story = {
  args: {
    status: "success",
  },
};

export const VariantSubtle: Story = {
  args: {
    variant: "subtle",
  },
};

export const VariantSolid: Story = {
  args: {
    variant: "solid",
  },
};
