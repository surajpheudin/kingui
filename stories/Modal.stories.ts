import type { Meta, StoryObj } from "@storybook/react";
import { ModalExample } from "../examples";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Overlay/Modal",
  component: ModalExample,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof ModalExample>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SizeSm: Story = {
  args: {
    label: "Small",
    size: "sm",
  },
};

export const SizeMd: Story = {
  args: {
    label: "Medium",
    size: "md",
  },
};

export const SizeLg: Story = {
  args: {
    label: "Large",
    size: "lg",
  },
};

export const SizeFull: Story = {
  args: {
    label: "Large",
    size: "full",
  },
};

export const IsCentered: Story = {
  args: {
    label: "Centered",
    isCentered: true,
  },
};
