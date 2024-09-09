import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { LmCkBell } from "@icons/lmCkBell";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Component/Button",
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Fill: Story = {
  args: {
    type: "fill",
    label: "Button",
    backgroundColor: "#00FFB2",
    icon: LmCkBell,
    iconAtEnd: false,
    borderRadius: 0.5,
  },
};

export const Outlined: Story = {
  args: {
    type: "outlined",
    label: "Button",
    backgroundColor: "#00FFB2",
    icon: LmCkBell,
    iconAtEnd: false,
    color: "#000000",
    borderColor: "#000000",
    borderRadius: 0.5,
  },
};

export const Label: Story = {
  args: {
    type: "label",
    label: "Button",
    backgroundColor: "red",
    // icon: LmArrowBack,
    iconAtEnd: false,
    // color: "#ffffff",
    borderColor: "blue",
  },
};
