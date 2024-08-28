import type { Meta, StoryObj } from "@storybook/react";
import { ToastExample } from "../examples";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Feedback/Toast",
  component: ToastExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof ToastExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const VariantSuccess: Story = {
  args: {
    message: "success toast",
    status: "success",
  },
};

export const VariantError: Story = {
  args: {
    message: "error toast",
    status: "error",
  },
};

export const VariantWarning: Story = {
  args: {
    message: "warning toast",
    status: "warning",
  },
};

export const PositionTop: Story = {
  args: {
    message: "top toast",
    position: "top",
  },
};

export const PositionTopLeft: Story = {
  args: {
    message: "top-left toast",
    position: "top-left",
  },
};

export const PositionTopRight: Story = {
  args: {
    message: "top-right toast",
    position: "top-right",
  },
};

export const PositionBottom: Story = {
  args: {
    message: "bottom toast",
    position: "bottom",
  },
};

export const PositionBottomLeft: Story = {
  args: {
    message: "bottom-left toast",
    position: "bottom-left",
  },
};

export const PositionBottomRight: Story = {
  args: {
    message: "bottom-right toast",
    position: "bottom-right",
  },
};

export const IsClosable: Story = {
  args: {
    message: "closable toast",
    isClosable: true,
  },
};
