import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../src/components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Forms/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const VariantSolid: Story = {
  args: {
    variant: "solid",
    children: "Button",
  },
};

export const VariantOutline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const VariantGhost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const VariantLink: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const SizeSmall: Story = {
  args: {
    children: "Button",
    size: "sm",
  },
};

export const SizeMedium: Story = {
  args: {
    children: "Button",
    size: "md",
  },
};

export const SizeLarge: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};
