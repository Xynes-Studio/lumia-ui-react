import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Inputs/Slider",
  component: Slider,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Slide: Story = {
  args: {
    type: "slide",
    label: "Label",
    value: 50,
    showPercentage: false,
  },
};

export const Progress: Story = {
  args: {
    type: "progress",
    label: "Label",
    value: 50,
    showPercentage: false,
  },
};

export const ProgressPercentage: Story = {
  args: {
    type: "progress",
    label: "Label",
    value: 50,
    showPercentage: true,
  },
};
